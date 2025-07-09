import { Document } from "mongoose";
export interface Users extends Document {
    username: string;
    email: string;
    password: string;
    authentication?: {
      token?: string;
      tokenExpires?: Date;
      salt?: string;
    };
  }
  