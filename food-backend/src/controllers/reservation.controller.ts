import { Request, Response, NextFunction, RequestHandler } from "express";
import * as reservations from "../repositories/reservation.repository";
import { AuthenticatedRequest } from "../middleware/types/auth";

export const create: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const { dateTime, partySize, timeSlot, durationMinutes, seatingPreference, extraServices } = req.body;
		const reservation = await reservations.createReservation({
			userId: (req.userId as string) || req.body.userId,
			restaurantId: req.params.restaurantId,
			dateTime,
			partySize,
			timeSlot,
			durationMinutes,
			seatingPreference,
			extraServices,
		} as any);
		res.status(201).json(reservation);
		return;
	} catch (err) { next(err); }
};

export const listByRestaurant: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await reservations.listReservationsByRestaurant(req.params.restaurantId);
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const listByUser: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		if (req.userId && req.userId !== req.params.userId) { res.status(403).json({ message: 'Forbidden' }); return; }
		const result = await reservations.listReservationsByUser(req.params.userId);
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const getById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const reservation = await reservations.getReservationById(req.params.id);
		if (!reservation) { res.status(404).json({ message: 'Reservation not found' }); return; }
		res.json(reservation);
		return;
	} catch (err) { next(err); }
};

export const update: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const updated = await reservations.updateReservationById(req.params.id, req.body);
		if (!updated) { res.status(404).json({ message: 'Reservation not found' }); return; }
		res.json(updated);
		return;
	} catch (err) { next(err); }
};

export const remove: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const deleted = await reservations.deleteReservationById(req.params.id);
		if (!deleted) { res.status(404).json({ message: 'Reservation not found' }); return; }
		res.status(204).send();
		return;
	} catch (err) { next(err); }
}; 