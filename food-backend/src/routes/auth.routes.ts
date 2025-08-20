import { Router, RequestHandler } from "express";
import { login, register, forgotPassword, verifyPasswordResetCode, resetPassword } from "../controllers/auth.controller";
import { validationMiddleware } from '../middleware/validation.middleware';
import { registerSchema, loginSchema } from '../middleware/types/auth';
import asyncHandler from "../utils/asyncHandler";

const router = Router();

router.post("/register", validationMiddleware(registerSchema) as RequestHandler, asyncHandler(register));
router.post("/login", validationMiddleware(loginSchema) as RequestHandler, asyncHandler(login));
router.post("/forgot-password", asyncHandler(forgotPassword));
router.post("/verify-reset-code", asyncHandler(verifyPasswordResetCode));
router.post("/reset-password", asyncHandler(resetPassword));

export default router;
