import { Request, Response, NextFunction, RequestHandler } from "express";
import * as users from "../repositories/user.repository";

export const create: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, email, password } = req.body;
		const user = await users.createUser({ username, email, password } as any);
		res.status(201).json(user);
		return;
	} catch (err) { next(err); }
};

export const getById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await users.getUserById(req.params.id);
		if (!user) { res.status(404).json({ message: "User not found" }); return; }
		res.json(user);
		return;
	} catch (err) { next(err); }
};

export const list: RequestHandler = async (_req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await users.listUsers();
		res.json(result);
		return;
	} catch (err) { next(err); }
};

export const update: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const updated = await users.updateUserById(req.params.id, req.body);
		if (!updated) { res.status(404).json({ message: "User not found" }); return; }
		res.json(updated);
		return;
	} catch (err) { next(err); }
};

export const remove: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const deleted = await users.deleteUserById(req.params.id);
		if (!deleted) { res.status(404).json({ message: "User not found" }); return; }
		res.status(204).send();
		return;
	} catch (err) { next(err); }
};
