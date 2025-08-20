import { Router } from "express";
import { createRestaurant, getRestaurantById, getAllRestaurants, updateRestaurant, deleteRestaurant, searchRestaurants } from "../controllers/restaurant.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createRestaurant));
router.get("/:id", asyncHandler(getRestaurantById));
router.get("/", asyncHandler(getAllRestaurants));
router.get("/search", asyncHandler(searchRestaurants));
router.put("/:id", asyncHandler(updateRestaurant));
router.delete("/:id", asyncHandler(deleteRestaurant));

export default router;
