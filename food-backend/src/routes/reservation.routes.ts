import { Router } from "express";
import * as controller from "../controllers/reservation.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

router.post('/restaurants/:restaurantId/reservations', requireAuth, controller.create);
router.get('/restaurants/:restaurantId/reservations', controller.listByRestaurant);

router.get('/users/:userId/reservations', requireAuth, controller.listByUser);

router.get('/reservations/:id', controller.getById);
router.put('/reservations/:id', requireAuth, controller.update);
router.delete('/reservations/:id', requireAuth, controller.remove);

export default router; 