
import { Schema, model, Types } from "mongoose";

const menuItemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
    category: String,
    isAvailable: { type: Boolean, default: true },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant", required: true },
  },
  { timestamps: true }
);

export const MenuItem = model("MenuItem", menuItemSchema);
