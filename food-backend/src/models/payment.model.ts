import { Schema, model, Types } from "mongoose";

const paymentSchema = new Schema(
  {
    orderId: { type: Types.ObjectId, ref: "Order", required: true },
    userId: { type: Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["paid", "pending", "failed"], default: "pending" },
    method: { type: String, enum: ["card", "cash", "mobile_money"], default: "cash" },
    transactionId: { type: String },
    paidAt: { type: Date },
  },
  { timestamps: true }
);

export const Payment = model("Payment", paymentSchema);
