// const { Transaction } = require("../models/Transaction.js");
import { transactionModel } from "../models/transaction-schema.js";
export const add_transaction = async (doc) => {
	try {
		const user = await transactionModel(doc);
		return user;
	} catch (err) {
		throw err;
	}
};
// return !!user;
export const get_transaction = async () => {
	try {
		const user = await transactionModel.find();
		return user;
	} catch (err) {
		throw err;
	}
};
// export const get_category_ids = async()=>
// module.exports = add_transaction;
export const addCategoryToTrans = async (category) => {
	await transactionModel.selectedCategory.push(category[0]);
	transactionModel.save();
};
