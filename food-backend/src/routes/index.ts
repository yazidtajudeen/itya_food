import { Router } from 'express';
import authRoutes from './auth.routes';
import cartRoutes from './cart.routes';
import deliveryRoutes from './delivery.routes';
import menuRoutes from './menu.routes';
import orderRoutes from './order.routes';
import restaurantRoutes from './restaurant.routes';
import userRoutes from './user.routes';
import reservationRoutes from './reservation.routes';
import filterRoutes from './filter.routes';
import walletRoutes from './wallet.routes';

const router = Router();

router.use(authRoutes);
router.use(cartRoutes);
router.use(deliveryRoutes);
router.use(menuRoutes);
router.use(orderRoutes);
router.use(restaurantRoutes);
router.use(userRoutes);
router.use(reservationRoutes);
router.use(filterRoutes);
router.use(walletRoutes);

export default router;
