export interface MenuCreateBody {
	name: string;
	description?: string;
	price: number;
	image?: string;
	category?: string;
	isAvailable?: boolean;
	restaurantId: string;
}

export interface MenuFilterQuery {
	category?: string;
	minPrice?: number;
	maxPrice?: number;
} 