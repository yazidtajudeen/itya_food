import { Router } from "express";
import * as controller from "../controllers/wallet.controller";
import { requireAuth } from "../middleware/auth.middleware";

const router = Router();

router.get('/users/:userId/wallet', requireAuth, controller.getBalance);
router.post('/users/:userId/wallet/topup', requireAuth, controller.topup);
router.post('/users/:userId/wallet/withdraw', requireAuth, controller.withdraw);
router.post('/users/:userId/wallet/checkout', requireAuth, controller.checkout);
router.get('/users/:userId/wallet/transactions', requireAuth, controller.transactions);

export default router; 