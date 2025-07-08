import { Schema, model, Types } from "mongoose";

const cartSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    items: [
      {
        menuItemId: { type: Types.ObjectId, ref: "MenuItem" },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = model("Cart", cartSchema);

