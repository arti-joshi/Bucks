import { userModel } from "../models/user-schema.js";
export const addUser = async (user) => {
	try {
		const doc = await userModel.create(user);
		return doc;
	} catch (err) {
		throw err;
	}
};

export const checkUser = async (user) => {
	try {
		const doc = await userModel.findOne(user);
		return !!doc;
	} catch (err) {
		throw err;
	}
};

export const getUserByUsername = async (username) => {
	try {
		const user = await userModel.findOne({ username });
		return user;
	} catch (error) {
		console.error("Error getting user by username:", error);
		throw error;
	}
};
