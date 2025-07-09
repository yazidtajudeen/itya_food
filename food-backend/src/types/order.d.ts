import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { RestaurantType } from "./restaurant.d";
import { MenuItemType } from "./menuItem.d";

export interface OrderType extends Document {
  userId: string | Users;
  restaurantId: string | RestaurantType;
  items: {
    menuItemId: string | MenuItemType;
    quantity: number;
  }[];
  totalPrice: number;
  status: "pending" | "preparing" | "on_the_way" | "delivered" | "cancelled";
  paymentStatus: "paid" | "unpaid";
  createdAt: Date;
  updatedAt: Date;
}