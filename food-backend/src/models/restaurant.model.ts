import { Schema, model } from "mongoose";

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    phone: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export const Restaurant = model("Restaurant", restaurantSchema);
