import { Document, Types } from "mongoose";
import { Users } from "./user.d";
import { MenuItemType } from "./menuItem.d";

export interface LikeType extends Document {
  userId: string | Users;
  menuItemId: string | MenuItemType;
  createdAt: Date;
  updatedAt: Date;
}