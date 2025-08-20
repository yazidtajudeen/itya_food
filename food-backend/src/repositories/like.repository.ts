import { Like } from '../models/like.model';
import { LikeType, LikeInput } from '../types/like.d';

export class LikeRepository {
  static async createLike(likeData: LikeInput): Promise<LikeType> {
    const newLike = new Like(likeData);
    await newLike.save();
    return newLike;
  }

  static async deleteLike(likeId: string): Promise<LikeType | null> {
    return await Like.findByIdAndDelete(likeId);
  }

  static async getLikedMenuItemsByUserId(userId: string): Promise<LikeType[]> {
    return await Like.find({ userId, menuItemId: { $exists: true } }).populate('menuItemId').exec();
  }

  static async getLikedRestaurantsByUserId(userId: string): Promise<LikeType[]> {
    return await Like.find({ userId, restaurantId: { $exists: true } }).populate('restaurantId').exec();
  }

  static async checkLikeExists(userId: string, targetId: string, type: 'menuItem' | 'restaurant'): Promise<LikeType | null> {
    if (type === 'menuItem') {
      return await Like.findOne({ userId, menuItemId: targetId }).exec();
    } else {
      return await Like.findOne({ userId, restaurantId: targetId }).exec();
    }
  }
} 