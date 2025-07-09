import { Schema, model, Document, Types } from "mongoose";
import { ReviewType } from "../types/review.d";

const reviewSchema = new Schema<ReviewType>(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant" },
    menuItemId: { type: Types.ObjectId, ref: "MenuItem" },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },
  { timestamps: true }
);

export const Review = model<ReviewType>("Review", reviewSchema);