import { Schema, model, Types } from "mongoose";

const reviewSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant" },
    menuItemId: { type: Types.ObjectId, ref: "MenuItem" },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },
  { timestamps: true }
);

export const Review = model("Review", reviewSchema);
