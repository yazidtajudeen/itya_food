import { Schema, model, Document, Types } from "mongoose";
import { Carts } from "../types/cart.d";
import { Users } from "../types/user.d";
import { MenuItemType } from "../types/menu.d";

const cartSchema = new Schema<Carts>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        menuItemId: {
          type: Schema.Types.ObjectId,
          ref: "MenuItem",
          required: true,
        },
        quantity: { type: Number, required: true, min: 1 },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = model<Carts>("Cart", cartSchema);