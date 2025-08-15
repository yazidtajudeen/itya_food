import { Request, Response, NextFunction, RequestHandler } from "express";
import * as wallets from "../repositories/wallet.repository";
import { AuthenticatedRequest } from "../middleware/types/auth";

export const getBalance: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.userId || req.params.userId;
		if (req.userId && userId !== req.userId) { res.status(403).json({ message: 'Forbidden' }); return; }
		const wallet = await wallets.getOrCreateWallet(userId as string);
		res.json({ balance: wallet.balance });
		return;
	} catch (err) { next(err); }
};

export const topup: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.userId || req.params.userId;
		if (req.userId && userId !== req.userId) { res.status(403).json({ message: 'Forbidden' }); return; }
		const { amount, description } = req.body;
		const wallet = await wallets.topup(userId as string, Number(amount), description);
		res.json(wallet);
		return;
	} catch (err) { next(err); }
};

export const withdraw: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.userId || req.params.userId;
		if (req.userId && userId !== req.userId) { res.status(403).json({ message: 'Forbidden' }); return; }
		const { amount, description } = req.body;
		const wallet = await wallets.withdraw(userId as string, Number(amount), description);
		res.json(wallet);
		return;
	} catch (err) { next(err); }
};

export const checkout: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.userId || req.params.userId;
		if (req.userId && userId !== req.userId) { res.status(403).json({ message: 'Forbidden' }); return; }
		const { amount, description } = req.body;
		const wallet = await wallets.checkout(userId as string, Number(amount), description);
		res.json(wallet);
		return;
	} catch (err) { next(err); }
};

export const transactions: RequestHandler = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	try {
		const userId = req.userId || req.params.userId;
		if (req.userId && userId !== req.userId) { res.status(403).json({ message: 'Forbidden' }); return; }
		const limit = req.query.limit ? Number(req.query.limit) : 20;
		const tx = await wallets.listTransactions(userId as string, limit);
		const normalized = tx.map((t) => ({
			type: t.type,
			amount: t.amount,
			change: t.type === 'topup' ? 'credit' : 'debit',
			signedAmount: t.type === 'topup' ? t.amount : -t.amount,
			description: (t as any).description || '',
			date: t.createdAt,
		}));
		res.json(normalized);
		return;
	} catch (err) { next(err); }
}; 