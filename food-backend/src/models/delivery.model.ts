import { Schema, model, Document, Types } from "mongoose";
import { DeliveryType } from "../types/delivery.d";

const deliverySchema = new Schema<DeliveryType>(
  {
    orderId: { type: Types.ObjectId, ref: "Order", required: true },
    deliveryAgentId: { type: Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "picked", "on_the_way", "delivered"],
      default: "pending",
    },
    location: {
      lat: Number,
      lng: Number,
    },
    estimatedTime: Date,
  },
  { timestamps: true }
);

export const Delivery = model<DeliveryType>("Delivery", deliverySchema);