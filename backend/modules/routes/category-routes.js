import express from "express";
import {
	add_Custom_Category,
	create_Category,
	get_Category,
} from "../controllers/category-controller.js";
import isAuthenticated from "../../middlewares/auth.js";
export const categoryRoutes = express.Router();
// categoryRoutes.post("/add-category", create_Category);

categoryRoutes.get("/get-category", isAuthenticated, get_Category);
categoryRoutes.post(
	"/add-custom-category",
	isAuthenticated,
	add_Custom_Category
);
//interceptor in axios token set in it
