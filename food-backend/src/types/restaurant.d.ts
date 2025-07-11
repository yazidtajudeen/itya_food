import { Document } from "mongoose";

export interface RestaurantType extends Document {
  name: string;
  description?: string;
  address: string;
  phone?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}