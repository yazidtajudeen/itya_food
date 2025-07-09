import { Schema, model,  Types } from "mongoose";
import { CartType } from "../types/cart.d";

const cartSchema = new Schema<CartType>(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true, unique: true },
    items: [
      {
        menuItemId: { type: Types.ObjectId, ref: "MenuItem" },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = model<CartType>("Cart", cartSchema);