import { Schema, model } from "mongoose";
import { WalletType } from "../types/wallet";

const transactionSchema = new Schema({
	type: { type: String, enum: ['topup','checkout','withdraw'], required: true },
	amount: { type: Number, required: true, min: 0 },
	description: { type: String },
	createdAt: { type: Date, default: Date.now }
}, { _id: false });

const walletSchema = new Schema<WalletType>({
	userId: { type: String, required: true, unique: true },
	balance: { type: Number, required: true, default: 0 },
	transactions: { type: [transactionSchema], default: [] }
}, { timestamps: true });

export const Wallet = model<WalletType>('Wallet', walletSchema); 