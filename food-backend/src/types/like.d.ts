import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { MenuItemType } from "./menu.d";
import { Restaurants } from "./restaurant.d";

export interface LikeType extends Document {
  userId: string | Users;
  menuItemId?: string | MenuItemType;
  restaurantId?: string | Restaurants;
  createdAt: Date;
  updatedAt: Date;
}

export interface LikeInput {
  userId: string | Users;
  menuItemId?: string | MenuItemType;
  restaurantId?: string | Restaurants;
}