import { Router } from "express";
import * as controller from "../controllers/user.controller";

const router = Router();

router.post("/", controller.create);
router.get("/users", controller.list);
router.get("/users/:id", controller.getById);
router.put("/users/:id", controller.update);
router.delete("/users/:id", controller.remove);

export default router;
