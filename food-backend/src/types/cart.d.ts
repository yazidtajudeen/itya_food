import { Document, Types } from "mongoose";
import { Users } from "./user.d";

export interface CartType extends Document {
  userId: string | Users;
  items: {
    menuItemId: string | Types.ObjectId;
    quantity: number;
  }[];
  createdAt: Date;
  updatedAt: Date;
}