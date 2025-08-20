import { Request, Response } from 'express';
import { LikeService } from '../services/like.service';

export const toggleLike = async (req: Request, res: Response) => {
  try {
    const { userId, targetId, type } = req.body;
    const result = await LikeService.toggleLike(userId, targetId, type);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getLikedMenuItems = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const likedMenuItems = await LikeService.getLikedItems(userId, 'menuItem');
    res.status(200).json(likedMenuItems);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getLikedRestaurants = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const likedRestaurants = await LikeService.getLikedItems(userId, 'restaurant');
    res.status(200).json(likedRestaurants);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; 