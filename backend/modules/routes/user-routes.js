import express from "express";
import { add_User, check_User } from "../controllers/user-controller.js";

export const userRoutes = express.Router();

userRoutes.post("/signup", add_User); //signup
userRoutes.post("/login", check_User); //login
// /login res.data.doc = user_id
