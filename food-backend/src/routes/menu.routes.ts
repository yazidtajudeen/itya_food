import { Router } from "express";
import { createMenuItem, deleteMenuItem, getMenuItemById, getMenuItemsByRestaurant, updateMenuItem, searchMenuItems } from "../controllers/menu.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createMenuItem));
router.get("/:id", asyncHandler(getMenuItemById));
router.get("/restaurant/:restaurantId", asyncHandler(getMenuItemsByRestaurant));
router.get("/search", asyncHandler(searchMenuItems));
router.put("/:id", asyncHandler(updateMenuItem));
router.delete("/:id", asyncHandler(deleteMenuItem));

export default router;
