import mongoose, { SchemaTypes } from "mongoose";
const possibleValues = ["income", "expense"];
const transactionSchema = mongoose.Schema({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
	type: {
		type: SchemaTypes.String,
		required: true,
		enum: possibleValues,
	},
	amount: {
		type: SchemaTypes.Number,
		required: true,
	},
	date_time: {
		type: SchemaTypes.Date,
		required: true,
	},
	// user_id: {
	// 	type: SchemaTypes.ObjectId,
	// 	required: true,
	// },
	// category_id: {
	// 	type: SchemaTypes.ObjectId,
	// 	required: true,
	// },
	selectedCategory: [
		{
			type: mongoose.SchemaTypes.String,
			// ref: "category",
		},
	],
});
export const transactionModel = mongoose.model(
	"transactions",
	transactionSchema
);
