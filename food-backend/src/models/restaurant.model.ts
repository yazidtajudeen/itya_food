import { Schema, model, } from "mongoose";
import { RestaurantType } from "../types/restaurant.d";

const restaurantSchema = new Schema<RestaurantType>(
  {
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    phone: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

export const Restaurant = model<RestaurantType>("Restaurant", restaurantSchema);