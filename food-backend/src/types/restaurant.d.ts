import { Document } from "mongoose";

export interface Restaurants extends Document {
  name: string;
  description?: string;
  address: string;
  phone?: string;
  image?: string;
  location?: {
    type: 'Point';
    coordinates: [number, number]; // [lng, lat]
  };
  openTime?: string; // HH:mm
  closeTime?: string; // HH:mm
  createdAt: Date;
  updatedAt: Date;
}

export interface restaurantInput {
  name: string;
  description?: string;
  address: string;
  phone?: string;
  image?: string;
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };
  openTime?: string;
  closeTime?: string;
}

export interface restaurantUpdateInput {
  name?: string;
  description?: string;
  address?: string;
  phone?: string;
  image?: string;
  location?: {
    type: 'Point';
    coordinates: [number, number];
  };
  openTime?: string;
  closeTime?: string;
}