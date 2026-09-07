import "server-only";
import { api } from "./client";
import type {
  Driver, NotificationItem, Paginated, SupportTicket, TicketCategory, User,
} from "./types";

export const getMe = () => api.get<User>("/users/me");
export const updateMe = (input: { name?: string; phone?: string; vehicleClass?: string }) =>
  api.patch<User>("/users/me", input);
/** Soft delete: PII is scrubbed, financial history is kept. */
export const deleteMe = () => api.delete<{ deleted: boolean }>("/users/me");

export const uploadDocument = (input: {
  fileName: string;
  mimeType: string;
  sizeBytes?: number;
}) => api.post<unknown>("/users/me/documents", input);

/* ------------------------------- favourites ------------------------------- */

export const listFavorites = () => api.get<Driver[]>("/users/me/favorites");
export const addFavorite = (driverId: string) =>
  api.post<Driver[]>(`/users/me/favorites/${driverId}`);
export const removeFavorite = (driverId: string) =>
  api.delete<Driver[]>(`/users/me/favorites/${driverId}`);

/* ------------------------------ notifications ----------------------------- */

export const listNotifications = (page = 1, limit = 20) =>
  api.get<Paginated<NotificationItem> | NotificationItem[]>("/notifications", {
    query: { page, limit },
  });

export const markNotificationRead = (id: string) =>
  api.patch<NotificationItem>(`/notifications/${id}/read`);

/* --------------------------------- support -------------------------------- */

export const listTickets = (page = 1, limit = 20) =>
  api.get<Paginated<SupportTicket> | SupportTicket[]>("/support/tickets", {
    query: { page, limit },
  });

export const getTicket = (id: string) => api.get<SupportTicket>(`/support/tickets/${id}`);

export const createTicket = (input: {
  category: TicketCategory;
  subject: string;
  message: string;
  tripId?: string;
}) => api.post<SupportTicket>("/support/tickets", input);

export const replyToTicket = (id: string, message: string) =>
  api.post<SupportTicket>(`/support/tickets/${id}/messages`, { message });

/*
 * Ticket triage (PATCH /support/tickets/:id) is admin-only and lives in the operations
 * console, not here — a passenger can read and reply to a case but never move it.
 */
