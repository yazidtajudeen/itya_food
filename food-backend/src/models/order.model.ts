import { Schema, model, Types } from "mongoose";

const orderSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant", required: true },
    items: [
      {
        menuItemId: { type: Types.ObjectId, ref: "MenuItem" },
        quantity: Number,
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "preparing", "on_the_way", "delivered", "cancelled"],
      default: "pending",
    },
    paymentStatus: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
  },
  { timestamps: true }
);

export const Order = model("Order", orderSchema);
