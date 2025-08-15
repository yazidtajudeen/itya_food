export interface NearMeQuery {
	lng?: number;
	lat?: number;
	radiusKm?: number;
}

export interface RestaurantWithMenuQuery {
	category?: string;
	minPrice?: number;
	maxPrice?: number;
	limit?: number;
}

export interface ListWithMenusQuery {
	itemsPerRestaurant?: number;
	category?: string;
	minPrice?: number;
	maxPrice?: number;
} 