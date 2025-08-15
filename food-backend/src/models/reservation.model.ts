import { Schema, model } from "mongoose";
import { ReservationType } from "../types/reservation";

const reservationSchema = new Schema<ReservationType>({
	userId: { type: String, required: true },
	restaurantId: { type: String, required: true },
	dateTime: { type: Date, required: true },
	timeSlot: { type: String },
	partySize: { type: Number, required: true, min: 1 },
	durationMinutes: { type: Number },
	seatingPreference: { type: String, enum: ['indoor','outdoor','window','bar','booth'] },
	extraServices: { type: [String], default: [] },
	status: { type: String, enum: ['pending','confirmed','cancelled'], default: 'pending' }
}, { timestamps: true });

export const Reservation = model<ReservationType>('Reservation', reservationSchema); 