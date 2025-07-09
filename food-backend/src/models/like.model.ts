import { Schema, model, Types } from "mongoose";
import { LikeType } from "../types/like";
const likeSchema = new Schema<LikeType>(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    menuItemId: { type: Types.ObjectId, ref: "MenuItem", required: true },
  },
  { timestamps: true }
);

export const Like = model<LikeType>("Like", likeSchema);
