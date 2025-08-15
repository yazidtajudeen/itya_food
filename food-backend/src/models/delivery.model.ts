import { Schema, model, Document, Types } from "mongoose";
import { Deliveries } from "../types/delivery.d";
import { Users } from "../types/user.d";
import { Orders } from "../types/order.d";

const deliverySchema = new Schema<Deliveries>(
  {
    orderId: { type: Schema.Types.ObjectId, ref: "Order", required: true },
    deliveryAgentId: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "picked", "on_the_way", "delivered"],
      default: "pending",
    },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    estimatedTime: { type: Date },
  },
  { timestamps: true }
);

export const Delivery = model<Deliveries>("Delivery", deliverySchema);