import express from "express";
import {
	calcExpense,
	calcIncome,
} from "../controllers/dashboard-controller.js";

export const router = express.Router();

router.get("/getIncome", calcIncome);
router.get("/getExpense", calcExpense);
