import { Document } from "mongoose";

export interface ReservationType extends Document {
	userId: string;
	restaurantId: string;
	dateTime: Date;
	timeSlot?: string; // e.g., 18:00-20:00
	partySize: number;
	durationMinutes?: number;
	seatingPreference?: 'indoor' | 'outdoor' | 'window' | 'bar' | 'booth';
	extraServices?: string[]; // decorations, surprise, etc.
	status: 'pending' | 'confirmed' | 'cancelled';
	createdAt: Date;
	updatedAt: Date;
} 