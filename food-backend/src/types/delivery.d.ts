import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { OrderType } from "./order.d";

export interface DeliveryType extends Document {
  orderId: string | OrderType;
  deliveryAgentId?: string | Users;
  status: "pending" | "picked" | "on_the_way" | "delivered";
  location?: {
    lat: number;
    lng: number;
  };
  estimatedTime?: Date;
  createdAt: Date;
  updatedAt: Date;
}