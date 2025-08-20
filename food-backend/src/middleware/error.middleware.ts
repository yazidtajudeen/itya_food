import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
export class HttpError extends Error {
	status: number;
	code?: string;
	constructor(status: number, message: string, code?: string) {
		super(message);
		this.status = status;
		this.code = code;
	}
}

export const errorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction): void => {
	
	if (err?.name === 'ValidationError') {
		const details: Record<string, string> = {};
		Object.keys(err.errors || {}).forEach((key) => {
			details[key] = err.errors[key]?.message || 'Invalid value';
		});
		res.status(400).json({ error: { message: 'Validation failed', status: 400, details } });
		return;
	}
	if (err?.code === 11000) {
		res.status(409).json({ error: { message: 'Duplicate key', status: 409, details: err.keyValue } });
		return;
	}

	const status = typeof err?.status === 'number' ? err.status : 500;
	const code = err?.code || undefined;
	const message = status >= 500 ? 'Internal Server Error' : err?.message || 'Bad Request';
	if (process.env.NODE_ENV !== 'production') {
		console.error(err);
	}
	res.status(status).json({ error: { message, code, status } });
};
