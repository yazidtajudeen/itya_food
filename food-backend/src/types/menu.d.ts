import { Document, Types } from "mongoose";
import { Restaurants } from "./restaurant.d";

export interface MenuItemType extends Document {
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  isAvailable: boolean;
  restaurantId: string | Restaurants;
  createdAt: Date;
  updatedAt: Date;
}

export interface menuInput {
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  isAvailable?: boolean;
  restaurantId: string | Restaurants;
}

export interface menuUpdateInput {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  category?: string;
  isAvailable?: boolean;
  restaurantId?: string | Restaurants;
}