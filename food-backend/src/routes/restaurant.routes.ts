import { Router } from "express";
import * as controller from "../controllers/restaurant.controller";

const router = Router();

router.post("/restaurants", controller.create);
router.get("/restaurants", controller.list);
router.get("/restaurants-with-menus", controller.listWithMenus);
router.get("/restaurants/:id", controller.getById);
router.get("/restaurants/:id/with-menu", controller.getWithMenu);
router.put("/restaurants/:id", controller.update);
router.delete("/restaurants/:id", controller.remove);

export default router;
