import { Router } from "express";
import { createReview, deleteReview, getReviewById, getReviewsByRestaurantId, updateReview } from "../controllers/review.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createReview));
router.get("/restaurant/:restaurantId", asyncHandler(getReviewsByRestaurantId));
router.get("/:id", asyncHandler(getReviewById));
router.put("/:id", asyncHandler(updateReview));
router.delete("/:id", asyncHandler(deleteReview));

export default router; 