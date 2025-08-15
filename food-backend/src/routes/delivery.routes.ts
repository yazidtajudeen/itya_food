import { Router } from "express";
import { createDelivery, deleteDelivery, getDeliveriesByUserId, getDeliveryById, updateDelivery } from "../controllers/delivery.controller";
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/", asyncHandler(createDelivery));
router.get("/:id", asyncHandler(getDeliveryById));
router.get("/user/:userId", asyncHandler(getDeliveriesByUserId));
router.put("/:id", asyncHandler(updateDelivery));
router.delete("/:id", asyncHandler(deleteDelivery));

export default router;
