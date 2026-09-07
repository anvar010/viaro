import { Schema, model, Types, type HydratedDocument } from 'mongoose';
import { ROLES, type UserRole } from '../utils/roles';

export const USER_STATUSES = ['active', 'pending_documents', 'suspended'] as const;
export type UserStatus = (typeof USER_STATUSES)[number];

export interface IUser {
  role: UserRole;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  /** Customer's favourite drivers (spec §4.1). */
  favorites: Types.ObjectId[];
  walletId?: Types.ObjectId;
  status: UserStatus;
  /** Set by the phone-verification flow (customer screen 03). */
  phoneVerified: boolean;
  /**
   * Soft delete. The row is kept because wallets, trips and transactions reference it
   * and financial history must stay intact; PII is scrubbed instead.
   */
  deletedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<IUser>;

const userSchema = new Schema<IUser>(
  {
    role: { type: String, enum: ROLES, required: true, index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Driver' }],
    walletId: { type: Schema.Types.ObjectId, ref: 'Wallet' },
    status: { type: String, enum: USER_STATUSES, default: 'active', index: true },
    phoneVerified: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

// passwordHash is select:false, so it never leaks through a plain find().
// Auth explicitly re-selects it when verifying a login.
userSchema.set('toJSON', {
  transform: (_doc, ret) => {
    const plain = ret as unknown as Record<string, unknown>;
    delete plain.passwordHash;
    delete plain.__v;
    return plain;
  },
});

export const User = model<IUser>('User', userSchema);
