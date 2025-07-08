import { Schema, model, Types } from "mongoose";

const likeSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    menuItemId: { type: Types.ObjectId, ref: "MenuItem", required: true },
  },
  { timestamps: true }
);

export const Like = model("Like", likeSchema);
