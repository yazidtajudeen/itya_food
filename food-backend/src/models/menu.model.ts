import { Schema, model, Document, Types } from "mongoose";
import { MenuItemType } from "../types/menu";

const menuItemSchema = new Schema<MenuItemType>(
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

export const MenuItem = model<MenuItemType>("MenuItem", menuItemSchema);