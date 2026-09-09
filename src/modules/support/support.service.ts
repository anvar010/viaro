import { Types } from 'mongoose';
import { SupportTicket } from '../../models/SupportTicket';
import { ApiError } from '../../utils/ApiError';
import { now, toDate } from '../../config/timezone';
import type { AuthUser } from '../../middlewares/authGuard';
import { paginated, toSkipLimit, type PaginationQuery } from '../../utils/pagination';
import * as notify from '../notifications/notifications.service';
import type { CreateTicketInput, ReplyInput, UpdateTicketInput } from './support.validation';

/**
 * Access rule: a user sees only their own tickets; admins see every ticket.
 * Companies are excluded — a driver's appeal is between them and the platform.
 */
async function loadTicketFor(ticketId: string, user: AuthUser) {
  const ticket = await SupportTicket.findById(ticketId);
  if (!ticket) throw ApiError.notFound('Ticket not found');

  if (user.role !== 'admin' && String(ticket.userId) !== user.userId) {
    throw ApiError.forbidden('This ticket belongs to another user');
  }

  return ticket;
}

export async function createTicket(user: AuthUser, input: CreateTicketInput) {
  return SupportTicket.create({
    userId: user.userId,
    category: input.category,
    subject: input.subject,
    tripId: input.tripId,
    status: 'open',
    messages: [{ senderId: user.userId, senderRole: user.role, message: input.message }],
  });
}

export async function listTickets(user: AuthUser, q: PaginationQuery) {
  const filter = user.role === 'admin' ? {} : { userId: user.userId };
  const { skip, limit } = toSkipLimit(q);

  const [items, total] = await Promise.all([
    SupportTicket.find(filter).sort({ updatedAt: -1 }).skip(skip).limit(limit).lean(),
    SupportTicket.countDocuments(filter),
  ]);

  return paginated(items, total, q);
}

export async function getTicket(ticketId: string, user: AuthUser) {
  return loadTicketFor(ticketId, user);
}

export async function reply(ticketId: string, user: AuthUser, input: ReplyInput) {
  const ticket = await loadTicketFor(ticketId, user);
  if (ticket.status === 'closed') throw ApiError.conflict('This ticket is closed');

  ticket.messages.push({
    senderId: new Types.ObjectId(user.userId),
    senderRole: user.role,
    message: input.message,
    // Spec §8.1: every stored timestamp goes through the shared timezone helper, never a
    // raw `new Date()` — otherwise the server's zone leaks into a customer's transcript.
    createdAt: toDate(now()),
  });

  // An agent reply puts the ball back in the user's court, and vice versa.
  ticket.status = user.role === 'admin' ? 'pending' : 'open';
  await ticket.save();

  if (user.role === 'admin') {
    await notify.send(ticket.userId, 'support.reply', {
      message: `Support replied to "${ticket.subject}"`,
      ticketId: String(ticket._id),
    });
  }

  return ticket;
}

/** Admin-only: move a ticket through its lifecycle. */
export async function updateStatus(ticketId: string, input: UpdateTicketInput) {
  const ticket = await SupportTicket.findByIdAndUpdate(
    ticketId,
    { $set: { status: input.status } },
    { new: true },
  );
  if (!ticket) throw ApiError.notFound('Ticket not found');

  await notify.send(ticket.userId, 'support.status', {
    message: `Your ticket "${ticket.subject}" is now ${ticket.status}`,
    ticketId: String(ticket._id),
    status: ticket.status,
  });

  return ticket;
}
