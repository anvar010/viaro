import { Schema, model, Types, type HydratedDocument } from 'mongoose';

export const DRIVER_STATUSES = ['available', 'busy', 'offline'] as const;
export type DriverStatus = (typeof DRIVER_STATUSES)[number];

export const DRIVER_PAYOUT_MODES = ['percentage', 'flat'] as const;
export type DriverPayoutMode = (typeof DRIVER_PAYOUT_MODES)[number];

export interface IDriver {
  userId: Types.ObjectId;
  vehicleClass: string;
  status: DriverStatus;
  rating: number;
  /** Kept alongside `rating` so the running average never needs a full Rating scan. */
  ratingCount: number;
  penaltyCount: number;
  documents: string[];
  /**
   * What this driver is paid per completed trip, set by whoever owns them:
   * a company for its roster drivers, the admin/platform for everyone else.
   *
   *   percentage -> `value`% of the OWNER'S revenue share for that trip
   *   flat       -> a fixed amount per trip, whatever the fare was
   *
   * Left undefined until the owner sets it, in which case the DRIVER_PAYOUT_* env
   * defaults apply. `setBy` records which side agreed the rate.
   */
  payout?: {
    mode: DriverPayoutMode;
    value: number;
    setBy?: 'admin' | 'company';
    updatedAt?: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type DriverDocument = HydratedDocument<IDriver>;

const driverSchema = new Schema<IDriver>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    vehicleClass: { type: String, required: true, trim: true },
    status: { type: String, enum: DRIVER_STATUSES, default: 'offline', index: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0, min: 0 },
    penaltyCount: { type: Number, default: 0, min: 0, index: true },
    documents: [{ type: String }],
    payout: {
      mode: { type: String, enum: DRIVER_PAYOUT_MODES },
      value: { type: Number, min: 0 },
      setBy: { type: String, enum: ['admin', 'company'] },
      updatedAt: { type: Date },
    },
  },
  { timestamps: true },
);

export const Driver = model<IDriver>('Driver', driverSchema);
