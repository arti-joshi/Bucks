import { categoryModel } from "../models/category-schema.js";
import {
	createCategory,
	getCategory,
	// addCustomCategory,
} from "../services/category-operations.js";
import { userModel } from "../models/user-schema.js";
import { verifyUser } from "../../middlewares/auth.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const create_Category = async (req, res) => {
	try {
		const category = await createCategory(req.body);
		res.status(201).json({ doc: category });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
export const get_Category = async (req, res) => {
	try {
		const category = await getCategory();
		res.status(200).json(category);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const add_Custom_Category = async (req, res) => {
	try {
		const category = req.body;
		console.log("required data is..", category);
		const token = req.headers.authorization.split(" ")[1];
		// console.log("mf token ", token);
		const decodedUser = verifyUser(token);
		// console.log(decodedUser);
		const userId = decodedUser._id;
		console.log("user id is :", userId); //correct
		const doc = category.newExpense;
		console.log(doc);
		const newCategory = await createCategory(doc);
		// const newCategory = await categoryModel.create(doc);
		console.log("new category: ", newCategory);
		//{
		// 	ExpenseName: 'amkaaa',
		// 	color: '#7469B6',
		// 	_id: new ObjectId('66af7684211aa6805f06a685'),
		// 	__v: 0
		//   }
		userModel
			.findById(userId)
			.then(async (user) => {
				if (user) {
					user.customCategories.push(newCategory._id); //correct
					await user.save();
					// await newCategory.save();
					console.log(user);
				} else {
					console.log("User not found");
				}
			})
			.catch((error) => {
				console.error("Error fetching user:", error);
			});

		// categoryModel
		// 	.findById(newCategory._id)
		// 	.then(async (categories) => {
		// 		if (categories) {
		// 			console.log("hello");
		// 			console.log("category== ", categories);
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log("error: ", err);
		// 	});

		res.status(201).json(newCategory);
	} catch (err) {
		res.status(500).json({ " Error:  ": err });
	}
};
