import mongoose, { SchemaTypes } from "mongoose";
const categorySchema = mongoose.Schema({
	ExpenseName: {
		type: SchemaTypes.String,
		required: true,
	},
	color: {
		type: SchemaTypes.String,
		// required: true,
	},
});
export const categoryModel = mongoose.model("categories", categorySchema);
