import { Request, Response } from 'express';
import { ReviewService } from '../services/review.service';

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = await ReviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewsByRestaurantId = async (req: Request, res: Response) => {
  try {
    const { restaurantId } = req.params;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
    const reviews = await ReviewService.getReviewsByRestaurantId(restaurantId, limit);
    res.status(200).json(reviews);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await ReviewService.getReviewById(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedReview = await ReviewService.updateReview(id, req.body);
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedReview = await ReviewService.deleteReview(id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}; 