import { Wallet } from "../models/wallet.model";

export const getOrCreateWallet = async (userId: string) => {
	let wallet = await Wallet.findOne({ userId }).exec();
	if (!wallet) {
		wallet = new Wallet({ userId, balance: 0, transactions: [] });
		await wallet.save();
	}
	return wallet;
};

export const getWallet = async (userId: string) => {
	return Wallet.findOne({ userId }).exec();
};

export const topup = async (userId: string, amount: number, description?: string) => {
	const wallet = await getOrCreateWallet(userId);
	wallet.balance += amount;
	wallet.transactions.unshift({ type: 'topup', amount, description, createdAt: new Date() } as any);
	await wallet.save();
	return wallet;
};

export const withdraw = async (userId: string, amount: number, description?: string) => {
	const wallet = await getOrCreateWallet(userId);
	if (wallet.balance < amount) throw new Error('Insufficient balance');
	wallet.balance -= amount;
	wallet.transactions.unshift({ type: 'withdraw', amount, description, createdAt: new Date() } as any);
	await wallet.save();
	return wallet;
};

export const checkout = async (userId: string, amount: number, description?: string) => {
	const wallet = await getOrCreateWallet(userId);
	if (wallet.balance < amount) throw new Error('Insufficient balance');
	wallet.balance -= amount;
	wallet.transactions.unshift({ type: 'checkout', amount, description, createdAt: new Date() } as any);
	await wallet.save();
	return wallet;
};

export const listTransactions = async (userId: string, limit: number = 20) => {
	const wallet = await getOrCreateWallet(userId);
	return wallet.transactions.slice(0, limit);
}; 