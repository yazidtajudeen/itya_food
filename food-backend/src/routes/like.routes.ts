import { Router } from "express";
import { getLikedMenuItems, getLikedRestaurants, toggleLike } from "../controllers/like.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/toggle", asyncHandler(toggleLike));
router.get("/users/:userId/menuItems", asyncHandler(getLikedMenuItems));
router.get("/users/:userId/restaurants", asyncHandler(getLikedRestaurants));

export default router; 