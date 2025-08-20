import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import restaurantRoutes from './restaurant.routes';
import menuRoutes from './menu.routes';
import orderRoutes from './order.routes';
import cartRoutes from './cart.routes';
import deliveryRoutes from './delivery.routes';
import likeRoutes from './like.routes';
import reviewRoutes from './review.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/cart', cartRoutes);
router.use('/delivery', deliveryRoutes);
router.use('/likes', likeRoutes);
router.use('/reviews', reviewRoutes);

export default router;
