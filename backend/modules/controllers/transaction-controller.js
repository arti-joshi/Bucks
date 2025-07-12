// const { add_transaction } = require("../services/transaction-operations.js");
// const { add_transaction } = require("../services/transaction-operations.js");
import { transactionModel } from "../models/transaction-schema.js";
import {
	add_transaction,
	get_transaction,
} from "../services/transaction-operations.js";
import { addCategoryToTrans } from "../services/transaction-operations.js";
// import { getFromCategoryIds } from "../services/categoryService.js";
// import { getFromCategoryIds } from "../services/category-operations.js";
//  export const getAllTransaction = async(req,res)=>{
//     try{
//         const {user_id} = await req.params;
//         console.log({user_id});
//         const newTransaction =await get_transaction(user_id);
//         console.log(newTransaction);
//         if(newTransaction && newTransaction._id){
//             res.status(201).json(' get Transaction:'+ newTransaction)
//         }
//         await newTransaction.save();
//     }catch(error){
//         console.log(error)
//         res.status(500).json(error)
//     }
// };

// export const getAllTransaction = async (req, res) => {
//     try {
//         const newTransaction = await get_transaction();
//         res.status(200).json(newTransaction);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Server Error', error });
//     }
// };

export const getAllTransaction = async (req, res) => {
	try {
		// const { uid } = req.params;
		// console.log("uid: " + uid);
		const transactions = await get_transaction();
		if (Array.isArray(transactions)) {
			res.status(200).json(transactions);
		} else {
			res.status(200).json([]);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server Error", error });
	}
};

export const addTransaction = async (req, res) => {
	try {
		const doc = req.body;
		const res = await addCategoryToTrans();
		const newTransaction = await add_transaction(doc);
		if (newTransaction && newTransaction._id) {
			res.status(201).send("Transaction Created:" + newTransaction);
		}
		await newTransaction.save();
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
};
// module.exports={getAllTransaction,addTransaction};
// export const get_Category_Ids = async (req, res) => {
// 	try {
// 		const categoryIds = await getFromCategoryIds.getCategoryIds(
// 			req.body.selectedExpenses
// 		);
// 		res.json(categoryIds);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: "Failed to fetch category IDs" });
// 	}
// };
