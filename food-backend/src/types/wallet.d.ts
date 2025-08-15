import { Document } from "mongoose";

export type WalletTransactionType = 'topup' | 'checkout' | 'withdraw';

export interface WalletTransaction {
	type: WalletTransactionType;
	amount: number;
	description?: string;
	createdAt: Date;
}

export interface WalletType extends Document {
	userId: string;
	balance: number;
	transactions: WalletTransaction[];
	createdAt: Date;
	updatedAt: Date;
} 