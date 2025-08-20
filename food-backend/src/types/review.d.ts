import { Document, Types } from "mongoose";
import { Restaurants } from "./restaurant.d";

export interface ReviewType extends Document {
  restaurantId: string | Restaurants;
  reviewerName: string;
  reviewerAvatar?: string;
  text: string;
  rating: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewInput {
  restaurantId: string | Restaurants;
  reviewerName: string;
  reviewerAvatar?: string;
  text: string;
  rating: number;
}