import { MenuItem } from "../models/menu.model";
import { MenuItemType } from "../types/menu";
import { FilterQuery, UpdateQuery } from "mongoose";

export const createMenuItem = async (data: Pick<MenuItemType, "name" | "description" | "price" | "image" | "category" | "isAvailable" | "restaurantId">) => {
	const item = new MenuItem(data);
	return item.save();
};

export const getMenuItemById = async (id: string) => {
	return MenuItem.findById(id).exec();
};

export const listMenuItems = async (filter: FilterQuery<MenuItemType> = {}) => {
	return MenuItem.find(filter).exec();
};

export const listMenuItemsByRestaurant = async (restaurantId: string, opts?: { category?: string; maxPrice?: number; minPrice?: number }) => {
	const query: any = { restaurantId };
	if (opts?.category) query.category = opts.category;
	if (opts?.maxPrice !== undefined || opts?.minPrice !== undefined) {
		query.price = {} as any;
		if (opts.minPrice !== undefined) (query.price as any).$gte = opts.minPrice;
		if (opts.maxPrice !== undefined) (query.price as any).$lte = opts.maxPrice;
	}
	return MenuItem.find(query).exec();
};

export const updateMenuItemById = async (id: string, updates: UpdateQuery<MenuItemType>) => {
	return MenuItem.findByIdAndUpdate(id, updates, { new: true }).exec();
};

export const deleteMenuItemById = async (id: string) => {
	return MenuItem.findByIdAndDelete(id).exec();
};
