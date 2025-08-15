import { Router } from "express";
import * as controller from "../controllers/menu.controller";

const router = Router();

router.post("/menu", controller.create);
router.get("/menu", controller.list);
router.get("/menu/:id", controller.getById);
router.get("/restaurants/:restaurantId/menu", controller.listByRestaurant);
router.put("/menu/:id", controller.update);
router.delete("/menu/:id", controller.remove);

export default router;
