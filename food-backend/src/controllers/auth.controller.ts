import { Request, Response, NextFunction, RequestHandler } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as users from "../repositories/user.repository";

export const register: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, email, password } = req.body;
		const existing = await users.getUserByEmail(email);
		if (existing) { res.status(409).json({ message: "Email already in use" }); return; }
		const hashed = await bcrypt.hash(password, 10);
		const user = await users.createUser({ username, email, password: hashed } as any);
		res.status(201).json({ id: user._id, username: user.username, email: user.email });
		return;
	} catch (err) { next(err); }
};

export const login: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body;
		const user = await users.getUserWithPasswordByEmail(email);
		if (!user) { res.status(401).json({ message: "Invalid credentials" }); return; }
		const ok = await bcrypt.compare(password, (user as any).password);
		if (!ok) { res.status(401).json({ message: "Invalid credentials" }); return; }
		const token = jwt.sign({ sub: (user as any)._id, email: (user as any).email }, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });
		res.json({ token });
		return;
	} catch (err) { next(err); }
};
