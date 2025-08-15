import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { OrderType } from "./order.d";

export interface Deliveries extends Document {
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

export interface deliveryInput {
  orderId: string | OrderType;
  deliveryAgentId?: string | Users;
  status: "pending" | "picked" | "on_the_way" | "delivered";
  location?: {
    lat: number;
    lng: number;
  };
  estimatedTime?: Date;
}

export interface deliveryUpdateInput {
  orderId?: string | OrderType;
  deliveryAgentId?: string | Users;
  status?: "pending" | "picked" | "on_the_way" | "delivered";
  location?: {
    lat: number;
    lng: number;
  };
  estimatedTime?: Date;
}