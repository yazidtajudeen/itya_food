import { Reservation } from "../models/reservation.model";
import { ReservationType } from "../types/reservation";
import { UpdateQuery } from "mongoose";

export const createReservation = async (data: Pick<ReservationType, 'userId' | 'restaurantId' | 'dateTime' | 'partySize' | 'timeSlot' | 'durationMinutes' | 'seatingPreference' | 'extraServices'>) => {
	const reservation = new Reservation(data);
	return reservation.save();
};

export const getReservationById = async (id: string) => {
	return Reservation.findById(id).exec();
};

export const listReservationsByRestaurant = async (restaurantId: string) => {
	return Reservation.find({ restaurantId }).sort({ dateTime: 1 }).exec();
};

export const listReservationsByUser = async (userId: string) => {
	return Reservation.find({ userId }).sort({ dateTime: -1 }).exec();
};

export const updateReservationById = async (id: string, updates: UpdateQuery<ReservationType>) => {
	return Reservation.findByIdAndUpdate(id, updates, { new: true }).exec();
};

export const deleteReservationById = async (id: string) => {
	return Reservation.findByIdAndDelete(id).exec();
}; 