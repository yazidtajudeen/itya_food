import { Schema, model, Types } from "mongoose";
import { ReviewType } from "../types/review.d";

const reviewSchema = new Schema<ReviewType>(
  {
    restaurantId: { type: Types.ObjectId, ref: "Restaurant", required: true },
    reviewerName: { type: String, required: true },
    reviewerAvatar: { type: String },
    text: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Review = model<ReviewType>("Review", reviewSchema);