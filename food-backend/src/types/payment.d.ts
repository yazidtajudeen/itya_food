import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { OrderType } from "./order.d";

export interface PaymentType extends Document {
  orderId: string | OrderType;
  userId: string | Users;
  amount: number;
  status: "paid" | "pending" | "failed";
  method: "card" | "cash" | "mobile_money";
  transactionId?: string;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}