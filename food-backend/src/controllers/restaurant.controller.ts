import { Request, Response, NextFunction, RequestHandler } from "express";
import * as restaurants from "../repositories/restaurant.repository";

export const create: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const restaurant = await restaurants.createRestaurant(req.body);
		res.status(201).json(restaurant);
		return;
	} catch (err) { next(err); }
};

export const getById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const restaurant = await restaurants.getRestaurantById(req.params.id);
		if (!restaurant) { res.status(404).json({ message: "Restaurant not found" }); return; }
		res.json(restaurant);
		return;
	} catch (err) { next(err); }
};

export const list: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { lng, lat, radiusKm } = req.query as any;
		if (lng !== undefined && lat !== undefined) {
			const radiusMeters = Number(radiusKm ?? 5) * 1000;
			const result = await restaurants.listRestaurantsNear(Number(lng), Number(lat), radiusMeters);
			res.json(result);
			return;
		}
		const result = await restaurants.listRestaurants();
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const getWithMenu: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { category, minPrice, maxPrice, limit } = req.query as any;
		const result = await restaurants.getRestaurantWithMenu(req.params.id, {
			category: category ? String(category) : undefined,
			minPrice: minPrice !== undefined ? Number(minPrice) : undefined,
			maxPrice: maxPrice !== undefined ? Number(maxPrice) : undefined,
			limit: limit !== undefined ? Number(limit) : undefined,
		});
		if (!result) { res.status(404).json({ message: 'Restaurant not found' }); return; }
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const listWithMenus: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { itemsPerRestaurant, category, minPrice, maxPrice } = req.query as any;
		const result = await restaurants.listRestaurantsWithMenus({
			itemsPerRestaurant: itemsPerRestaurant !== undefined ? Number(itemsPerRestaurant) : undefined,
			category: category ? String(category) : undefined,
			minPrice: minPrice !== undefined ? Number(minPrice) : undefined,
			maxPrice: maxPrice !== undefined ? Number(maxPrice) : undefined,
		});
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const update: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const updated = await restaurants.updateRestaurantById(req.params.id, req.body);
		if (!updated) { res.status(404).json({ message: "Restaurant not found" }); return; }
		res.json(updated);
		return;
	} catch (err) { next(err); }
};

export const remove: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const deleted = await restaurants.deleteRestaurantById(req.params.id);
		if (!deleted) { res.status(404).json({ message: "Restaurant not found" }); return; }
		res.status(204).send();
		return;
	} catch (err) { next(err); }
};
