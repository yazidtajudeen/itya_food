import { Restaurant } from '../models/restaurant.model';
import { restaurantInput, restaurantUpdateInput, Restaurants } from '../types/restaurant.d';

export class RestaurantService {
  static async createRestaurant(restaurantData: restaurantInput): Promise<Restaurants> {
    const newRestaurant = new Restaurant(restaurantData);
    await newRestaurant.save();
    return newRestaurant;
  }

  static async getRestaurantById(restaurantId: string): Promise<Restaurants | null> {
    return await Restaurant.findById(restaurantId);
  }

  static async getAllRestaurants(): Promise<Restaurants[]> {
    return await Restaurant.find();
  }

  static async updateRestaurant(restaurantId: string, updateData: Partial<restaurantUpdateInput>): Promise<Restaurants | null> {
    return await Restaurant.findByIdAndUpdate(restaurantId, updateData, { new: true });
  }

  static async deleteRestaurant(restaurantId: string): Promise<Restaurants | null> {
    return await Restaurant.findByIdAndDelete(restaurantId);
  }
}
