import { Schema, model, Types, type HydratedDocument } from 'mongoose';
import { ROLES, type UserRole } from '../utils/roles';

/**
 * Customer screen 26 "Help and disputes" and driver screen 27 "Help and appeals".
 *
 * One model serves both: a dispute over a fare and an appeal against a penalty are the
 * same object with a different `category`, and both need a threaded reply history.
 */
export const TICKET_CATEGORIES = [
  'trip_dispute',
  'penalty_appeal',
  'payment',
  'account',
  'other',
] as const;
export type TicketCategory = (typeof TICKET_CATEGORIES)[number];

export const TICKET_STATUSES = ['open', 'pending', 'resolved', 'closed'] as const;
export type TicketStatus = (typeof TICKET_STATUSES)[number];

export interface ITicketMessage {
  senderId: Types.ObjectId;
  senderRole: UserRole;
  message: string;
  createdAt: Date;
}

export interface ISupportTicket {
  userId: Types.ObjectId;
  category: TicketCategory;
  subject: string;
  status: TicketStatus;
  /** Set when the ticket is about a specific trip or penalty. */
  tripId?: Types.ObjectId;
  messages: ITicketMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export type SupportTicketDocument = HydratedDocument<ISupportTicket>;

const ticketMessageSchema = new Schema<ITicketMessage>(
  {
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    senderRole: { type: String, enum: ROLES, required: true },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const supportTicketSchema = new Schema<ISupportTicket>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    category: { type: String, enum: TICKET_CATEGORIES, required: true, index: true },
    subject: { type: String, required: true, trim: true, maxlength: 200 },
    status: { type: String, enum: TICKET_STATUSES, default: 'open', index: true },
    tripId: { type: Schema.Types.ObjectId, ref: 'Trip' },
    messages: { type: [ticketMessageSchema], default: [] },
  },
  { timestamps: true },
);

supportTicketSchema.index({ userId: 1, createdAt: -1 });

export const SupportTicket = model<ISupportTicket>('SupportTicket', supportTicketSchema);
