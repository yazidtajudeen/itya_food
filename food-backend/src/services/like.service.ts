import { LikeRepository } from '../repositories/like.repository';
import { LikeType, LikeInput } from '../types/like.d';

export class LikeService {
  static async toggleLike(userId: string, targetId: string, type: 'menuItem' | 'restaurant'): Promise<LikeType | null | string> {
    const existingLike = await LikeRepository.checkLikeExists(userId, targetId, type);

    if (existingLike) {
      await LikeRepository.deleteLike(existingLike._id as string);
      return 'Like removed';
    } else {
      const likeData: LikeInput = {
        userId: userId,
      };
      if (type === 'menuItem') {
        likeData.menuItemId = targetId;
      } else {
        likeData.restaurantId = targetId;
      }
      const newLike = await LikeRepository.createLike(likeData);
      return newLike;
    }
  }

  static async getLikedItems(userId: string, type: 'menuItem' | 'restaurant'): Promise<LikeType[]> {
    if (type === 'menuItem') {
      return await LikeRepository.getLikedMenuItemsByUserId(userId);
    } else {
      return await LikeRepository.getLikedRestaurantsByUserId(userId);
    }
  }
} 