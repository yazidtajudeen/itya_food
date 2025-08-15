import { Schema, model, Document, Types } from "mongoose";
import { Orders } from "../types/order.d";
import { Users } from "../types/user.d";
import { Restaurants } from "../types/restaurant.d";
import { MenuItemType } from "../types/menu.d";

const orderSchema = new Schema<Orders>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
    items: [
      {
        menuItemId: { type: Schema.Types.ObjectId, ref: "MenuItem", required: true },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
    totalPrice: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      enum: ["pending", "preparing", "on_the_way", "delivered", "cancelled"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

export const Order = model<Orders>("Order", orderSchema);