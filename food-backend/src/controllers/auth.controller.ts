import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await AuthService.login(req.body);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await AuthService.generateResetToken(email);
    res.status(200).json({ message: 'Password reset email sent.' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyPasswordResetCode = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    await AuthService.verifyResetToken(token);
    res.status(200).json({ message: 'Token verified successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token, newPassword } = req.body;
    await AuthService.resetPassword(token, newPassword);
    res.status(200).json({ message: 'Password has been reset.' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
