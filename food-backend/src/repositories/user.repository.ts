import { User } from "../models/user.model";
import { Users } from "../types/user";
import { FilterQuery, UpdateQuery } from "mongoose";

export const createUser = async (data: Pick<Users, "username" | "email" | "password">) => {
	const user = new User(data);
	return user.save();
};

export const getUserById = async (id: string) => {
	return User.findById(id).exec();
};

export const getUserByEmail = async (email: string) => {
	return User.findOne({ email }).exec();
};

export const getUserWithPasswordByEmail = async (email: string) => {
	return User.findOne({ email }).select("+password").exec();
};

export const listUsers = async (filter: FilterQuery<Users> = {}) => {
	return User.find(filter).exec();
};

export const updateUserById = async (id: string, updates: UpdateQuery<Users>) => {
	return User.findByIdAndUpdate(id, updates, { new: true }).exec();
};

export const deleteUserById = async (id: string) => {
	return User.findByIdAndDelete(id).exec();
};
