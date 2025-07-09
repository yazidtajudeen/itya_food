import { Document } from "mongoose";

export interface categoryType extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}