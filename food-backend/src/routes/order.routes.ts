import { Router } from "express";
import { createOrder, deleteOrder, getOrderById, getOrdersByUserId, updateOrder } from "../controllers/order.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createOrder));
router.get("/:id", asyncHandler(getOrderById));
router.get("/user/:userId", asyncHandler(getOrdersByUserId));
router.put("/:id", asyncHandler(updateOrder));
router.delete("/:id", asyncHandler(deleteOrder));

export default router;
