import { Request, Response } from 'express';
import { RestaurantRepository } from '../repositories/restaurant.repository';
import { MenuRepository } from '../repositories/menu.repository';
import { ReviewRepository } from '../repositories/review.repository';

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await RestaurantRepository.createRestaurant(req.body);
    res.status(201).json(restaurant);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const restaurant = await RestaurantRepository.getRestaurantById(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const foods = await MenuRepository.getMenuItemsByRestaurant(id);
    const reviews = await ReviewRepository.getReviewsByRestaurantId(id, 5);

    res.status(200).json({
      ...restaurant.toObject(),
      foods,
      reviews,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantRepository.getAllRestaurants();
    res.status(200).json(restaurants);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const searchRestaurants = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;
    if (!query || typeof query !== 'string') {
      return res.status(400).json({ message: 'Search query is required and must be a string' });
    }
    const restaurants = await RestaurantRepository.searchRestaurants(query);
    res.status(200).json(restaurants);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedRestaurant = await RestaurantRepository.updateRestaurant(id, req.body);
    if (!updatedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(updatedRestaurant);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await RestaurantRepository.deleteRestaurant(id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
