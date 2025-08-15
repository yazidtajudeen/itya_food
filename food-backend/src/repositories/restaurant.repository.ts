import { Restaurants, restaurantUpdateInput } from "../types/restaurant.d";
import { Restaurant } from "../models/restaurant.model";

export class RestaurantRepository {
  static async createRestaurant(restaurantData: Restaurants) {
    const newRestaurant = new Restaurant(restaurantData);
    await newRestaurant.save();
    return newRestaurant;
  }

  static async getRestaurantById(restaurantId: string) {
    return await Restaurant.findById(restaurantId);
  }

  static async getAllRestaurants() {
    return await Restaurant.find();
  }

  static async updateRestaurant(restaurantId: string, updateData: Partial<restaurantUpdateInput>) {
    return await Restaurant.findByIdAndUpdate(restaurantId, updateData, { new: true });
  }

  static async deleteRestaurant(restaurantId: string) {
    return await Restaurant.findByIdAndDelete(restaurantId);
  }
}
