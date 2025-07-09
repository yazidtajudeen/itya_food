import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { RestaurantType } from "./restaurant.d";
import { MenuItemType } from "./menuItem.d";

export interface ReviewType extends Document {
  userId: string | Users;
  restaurantId?: string | RestaurantType;
  menuItemId?: string | MenuItemType;
  rating?: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
}