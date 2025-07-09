import { Schema, model, Document } from "mongoose";
import { Users } from "../types/user";
const userSchema = new Schema<Users>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/, "is invalid"],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    authentication: {
      type: {
        token: { type: String, select: false },
        tokenExpires: { type: Date, select: false },
        salt: { type: String, select: false },
      },
      required: false,
    },
  },
  { timestamps: true }
); 

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });

export const User = model<Users>("User", userSchema);