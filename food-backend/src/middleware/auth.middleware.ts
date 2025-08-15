import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from './types/auth';

export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization || '';
	const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
	if (!token) { res.status(401).json({ message: 'Unauthorized' }); return; }
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as any;
		req.userId = decoded.sub as string;
		next();
	} catch (err) {
		res.status(401).json({ message: 'Unauthorized' });
	}
};
