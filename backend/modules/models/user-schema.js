import mongoose, { SchemaTypes } from "mongoose";
// import jwt from "jsonwebtoken";
// import passwordComplexity from "joi-password-complexity";
const userSchema = mongoose.Schema({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
	username: {
		type: SchemaTypes.String,
		required: true,
		unique: true,
	},
	password: {
		type: SchemaTypes.String,
		required: true,
	},
	// token: {
	// 	type: SchemaTypes.String,
	// 	default: null,
	// },
	customCategories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "category",
		},
	],
});
export const userModel = mongoose.model("users", userSchema);

// userSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
// 		expiresIn: "2h",
// 	});
// 	return token;
// };

// export const validate_signup = (data) => {
// 	const schema = Joi.object({
// 		name: Joi.string().required().label("Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate_signup(data);
// };

// export const validate_login = (data) => {
// 	const schema = Joi.object({
// 		username: Joi.string().required().label("Username"),
// 		password: passwordComplexity().required().label("Password"),
// 	});
// 	return schema.validate_login(data);
// };
