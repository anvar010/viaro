import { Schema, model, Types, type HydratedDocument } from 'mongoose';

export const TRANSACTION_TYPES = ['credit', 'debit', 'refund', 'withdrawal'] as const;
export type TransactionType = (typeof TRANSACTION_TYPES)[number];

export interface ITransaction {
  walletId: Types.ObjectId;
  type: TransactionType;
  amount: number;
  /**
   * Spec §8 rule 3: fee is charged ONLY on withdrawal (10%). Refunds and ride credit
   * are always feeApplied = 0 — these are deliberately separate code paths in
   * wallet.service.ts / cancellation.service.ts.
   */
  feeApplied: number;
  meta: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export type TransactionDocument = HydratedDocument<ITransaction>;

const transactionSchema = new Schema<ITransaction>(
  {
    walletId: { type: Schema.Types.ObjectId, ref: 'Wallet', required: true, index: true },
    type: { type: String, enum: TRANSACTION_TYPES, required: true, index: true },
    amount: { type: Number, required: true, min: 0 },
    feeApplied: { type: Number, default: 0, min: 0 },
    meta: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true },
);

transactionSchema.index({ walletId: 1, createdAt: -1 });

export const Transaction = model<ITransaction>('Transaction', transactionSchema);
