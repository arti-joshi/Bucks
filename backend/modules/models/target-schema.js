import mongoose, { SchemaTypes } from "mongoose";
import { targetRoutes } from "../routes/target-routes";
const targetSchema = mongoose.Schema({
	target_name: {
		type: SchemaTypes.String,
		required: true,
	},
	target_amount: {
		type: SchemaTypes.Number,
		required: true,
	},
	target_desc: {
		type: SchemaTypes.String,
	},
	target_date: {
		type: SchemaTypes.Date,
		required: true,
	},
});
export const targetModel = mongoose.model("targets", targetSchema);
