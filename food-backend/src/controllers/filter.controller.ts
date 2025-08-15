import { Request, Response, NextFunction, RequestHandler } from "express";
import { Category } from "../models/category.model";

const PRICE_STEPS = [50, 100, 200, 400, 600, 800, 1000];

export const getMenuFilterOptions: RequestHandler = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const categories = await Category.find({}, { name: 1 }).sort({ name: 1 }).lean().exec();
		res.json({ priceSteps: PRICE_STEPS, categories: categories.map(c => c.name) });
		return;
	} catch (err) { next(err); }
};

export const resetMenuFilters: RequestHandler = async (_req: Request, res: Response, _next: NextFunction) => {
	// Stateles API: resetting filters is a client action. We just return default payload
	res.json({ category: null, minPrice: null, maxPrice: null });
}; 