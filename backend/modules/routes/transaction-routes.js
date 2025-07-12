import isAuthenticated from "../../middlewares/auth.js";
import {
	addTransaction,
	getAllTransaction,
	// get_Category_Ids,
	// addCategoryToTrans,
} from "../controllers/transaction-controller.js";
import express from "express";
//import { get_Category_Ids } from "../controllers/transactionController.js";

export const transactionRoutes = express.Router();
// const { addTransaction } = require('../controllers/transactionController');
// const { getAllTransaction } =require('../controllers/transactionController')
transactionRoutes.post("/add-transaction", isAuthenticated, addTransaction);

transactionRoutes.get("/get-transaction", isAuthenticated, getAllTransaction);

// transactionRoutes.get("/get-category-ids", get_Category_Ids);
// transactionRoutes.post("/addCategory", addCategoryToTrans);
//export default router;
