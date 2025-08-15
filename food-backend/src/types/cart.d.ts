import { Document, Types } from "mongoose";
import { Users } from "./user.d";

export interface Carts extends Document {
  userId: string | Users;
  items: {
    menuItemId: string | Types.ObjectId;
    quantity: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface cartInput {
  userId: string | Users;
  items: {
    menuItemId: string | Types.ObjectId;
    quantity: number;
  }[];
}

export interface cartUpdateInput {
  userId?: string | Users;
  items?: {
    menuItemId: string | Types.ObjectId;
    quantity: number;
  }[];
}