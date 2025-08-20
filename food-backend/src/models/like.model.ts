import { Schema, model, Types } from "mongoose";
import { LikeType } from "../types/like";

const likeSchema = new Schema<LikeType>(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    menuItemId: { type: Types.ObjectId, ref: "MenuItem" },
    restaurantId: { type: Types.ObjectId, ref: "Restaurant" },
  },
  { timestamps: true }
);

// Add a pre-save hook to ensure either menuItemId or restaurantId is present, but not both.
likeSchema.pre("save", function (next) {
  if (!this.menuItemId && !this.restaurantId) {
    return next(new Error("Either menuItemId or restaurantId is required."));
  }
  if (this.menuItemId && this.restaurantId) {
    return next(new Error("Cannot like both a menuItem and a restaurant at the same time."));
  }
  next();
});

export const Like = model<LikeType>("Like", likeSchema);
