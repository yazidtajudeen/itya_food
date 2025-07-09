import { Document, Types } from "mongoose";
import { RestaurantType } from "./restaurant.d";

export interface MenuItemType extends Document {
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  isAvailable: boolean;
  restaurantId: string | RestaurantType;
  createdAt: Date;
  updatedAt: Date;
}