export interface Data {
	category: string;
	restaurantList: RestaurantList[];
}

export interface RestaurantList {
	name: string;
	food_types: string[];
	image?: string;
	ratings: string;
	isExlusive: boolean;
	delivery_time: string;
	price_for_two: number;
}
