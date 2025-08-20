import { Schema, model } from "mongoose";
import { Users } from "../types/user.d";

const userSchema = new Schema<Users>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    authentication: {
      token: { type: String },
      tokenExpires: { type: Date },
      salt: { type: String },
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

export const User = model<Users>("User", userSchema);