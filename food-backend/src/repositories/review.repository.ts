import { Review } from '../models/review.model';
import { ReviewType, ReviewInput } from '../types/review.d';

export class ReviewRepository {
  static async createReview(reviewData: ReviewInput): Promise<ReviewType> {
    const newReview = new Review(reviewData);
    await newReview.save();
    return newReview;
  }

  static async getReviewsByRestaurantId(restaurantId: string, limit?: number): Promise<ReviewType[]> {
    let query = Review.find({ restaurantId }).sort({ date: -1 });
    if (limit) {
      query = query.limit(limit);
    }
    return await query.exec();
  }

  static async getReviewById(reviewId: string): Promise<ReviewType | null> {
    return await Review.findById(reviewId);
  }

  static async updateReview(reviewId: string, updateData: Partial<ReviewInput>): Promise<ReviewType | null> {
    return await Review.findByIdAndUpdate(reviewId, updateData, { new: true });
  }

  static async deleteReview(reviewId: string): Promise<ReviewType | null> {
    return await Review.findByIdAndDelete(reviewId);
  }
} 