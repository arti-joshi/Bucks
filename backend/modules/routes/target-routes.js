import express from "express";
import {
	calcAvgMonthlySaving,
	calcSavingsTarget,
	message,
} from "../controllers/target-controller.js";
export const targetRoutes = express.Router();
targetRoutes.post("/savingsTarget", calcSavingsTarget);
targetRoutes.get("/avgMonthlySavings", calcAvgMonthlySaving);
targetRoutes.post("/message", message);
