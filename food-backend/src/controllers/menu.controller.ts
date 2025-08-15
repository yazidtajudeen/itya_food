import { Request, Response, NextFunction, RequestHandler } from "express";
import * as menus from "../repositories/menu.repository";

export const create: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const item = await menus.createMenuItem(req.body);
		res.status(201).json(item);
		return;
	} catch (err) { next(err); }
};

export const getById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const item = await menus.getMenuItemById(req.params.id);
		if (!item) { res.status(404).json({ message: "Menu item not found" }); return; }
		res.json(item);
		return;
	} catch (err) { next(err); }
};

export const list: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { category, minPrice, maxPrice } = req.query as any;
		const filter: any = {};
		if (category) filter.category = String(category);
		if (minPrice !== undefined || maxPrice !== undefined) {
			filter.price = {} as any;
			if (minPrice !== undefined) (filter.price as any).$gte = Number(minPrice);
			if (maxPrice !== undefined) (filter.price as any).$lte = Number(maxPrice);
		}
		const result = await menus.listMenuItems(filter);
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const listByRestaurant: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { category, minPrice, maxPrice } = req.query as any;
		const result = await menus.listMenuItemsByRestaurant(
			req.params.restaurantId,
			{
				category: category ? String(category) : undefined,
				minPrice: minPrice !== undefined ? Number(minPrice) : undefined,
				maxPrice: maxPrice !== undefined ? Number(maxPrice) : undefined,
			}
		);
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const update: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const updated = await menus.updateMenuItemById(req.params.id, req.body);
		if (!updated) { res.status(404).json({ message: "Menu item not found" }); return; }
		res.json(updated);
		return;
	} catch (err) { next(err); }
};

export const remove: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const deleted = await menus.deleteMenuItemById(req.params.id);
		if (!deleted) { res.status(404).json({ message: "Menu item not found" }); return; }
		res.status(204).send();
		return;
	} catch (err) { next(err); }
};
