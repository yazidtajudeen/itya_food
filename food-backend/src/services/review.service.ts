import { ReviewRepository } from '../repositories/review.repository';
import { ReviewType, ReviewInput } from '../types/review.d';

export class ReviewService {
  static async createReview(reviewData: ReviewInput): Promise<ReviewType> {
    return await ReviewRepository.createReview(reviewData);
  }

  static async getReviewsByRestaurantId(restaurantId: string, limit?: number): Promise<ReviewType[]> {
    return await ReviewRepository.getReviewsByRestaurantId(restaurantId, limit);
  }

  static async getReviewById(reviewId: string): Promise<ReviewType | null> {
    return await ReviewRepository.getReviewById(reviewId);
  }

  static async updateReview(reviewId: string, updateData: Partial<ReviewInput>): Promise<ReviewType | null> {
    return await ReviewRepository.updateReview(reviewId, updateData);
  }

  static async deleteReview(reviewId: string): Promise<ReviewType | null> {
    return await ReviewRepository.deleteReview(reviewId);
  }
} 