import { Schema, model, Document } from "mongoose";
import { categoryType } from "../types/category.d";

const categorySchema = new Schema<categoryType>(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const Category = model<categoryType>("Category", categorySchema);