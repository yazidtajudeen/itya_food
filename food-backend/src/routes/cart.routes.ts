import { Router } from "express";
import { addItemToCart, clearCart, getCartByUserId, removeItemFromCart, updateItemQuantity } from "../controllers/cart.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.get("/users/:userId/cart", asyncHandler(getCartByUserId));
router.post("/users/:userId/cart/items", asyncHandler(addItemToCart));
router.put("/users/:userId/cart/items/:menuItemId", asyncHandler(updateItemQuantity));
router.delete("/users/:userId/cart/items/:menuItemId", asyncHandler(removeItemFromCart));
router.delete("/users/:userId/cart", asyncHandler(clearCart));

export default router;
