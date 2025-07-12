import { categoryModel } from "../models/category-schema.js";
import { userModel } from "../models/user-schema.js";
export const createCategory = async (categoryData) => {
	try {
		const newCategory = new categoryModel(categoryData);
		await newCategory.save();
		return newCategory;
	} catch (err) {
		throw err;
	}
};
export const getCategory = async () => {
	try {
		const category = await categoryModel.find();
		return category;
	} catch (err) {
		throw err;
	}
};
// export const addCustomCategory = async (userId, categoryData) => {
// 	try {
// 		const newCategory = new categoryModel(categoryData);
// 		await newCategory.save();
// 		const user = await userModel.findByID(userId);
// 		user.customCategories.push(newCategory._id);
// 		await user.save();
// 		return newCategory;
// 	} catch (err) {
// 		console.log("Error:: ", err);
// 		throw err;
// 	}
// };
export const getFromCategoryIds = async (selectedExpenses) => {
	try {
		const categoryIds = [];
		for (const expenseCategory of selectedExpenses) {
			const category = await categoryModel.findOne({
				name: expenseCategory,
			});
			if (category) {
				categoryIds.push(category._id);
			} else {
				// Handle category not found (optional)
				console.error(`Category ${expenseCategory} not found`);
			}
		}
		return categoryIds;
	} catch (error) {
		console.error("Error fetching category IDs:", error);
		throw error;
	}
};
