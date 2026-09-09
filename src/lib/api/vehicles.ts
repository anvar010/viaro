import { api } from "./client";

/**
 * The vehicle-class catalogue, read live from the backend.
 *
 * The new-chauffeur form used to hardcode sedan/suv/minibus. The backend models these as
 * an operator-managed collection with its own endpoint precisely so pricing and fleet
 * changes do not need a deploy — so a hardcoded list silently drifts the moment a class
 * is renamed, retired or added, and a chauffeur can be filed under a class that no longer
 * prices anything.
 */
export interface VehicleClass {
  _id: string;
  value: string;
  label: string;
  detail?: string;
  seats: number;
  bags: number;
  multiplier: number;
  active: boolean;
  sortOrder: number;
}

/** Bookable classes only — this console never manages the catalogue itself. */
export const listVehicleClasses = () => api.get<VehicleClass[]>("/vehicle-classes");
