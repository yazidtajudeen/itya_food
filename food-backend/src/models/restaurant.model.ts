import { Schema, model, } from "mongoose";
import { RestaurantType } from "../types/restaurant.d";

const restaurantSchema = new Schema<RestaurantType>(
  {
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String, required: true },
    phone: { type: String },
    image: { type: String },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
        validate: {
          validator: function (v: number[]) { return v.length === 2; },
          message: 'coordinates must be [lng, lat]'
        }
      }
    },
    openTime: { type: String },
    closeTime: { type: String }
  },
  { timestamps: true }
);

restaurantSchema.index({ location: '2dsphere' });

export const Restaurant = model<RestaurantType>("Restaurant", restaurantSchema);