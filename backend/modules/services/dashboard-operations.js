import { transactionModel } from "../models/transaction-schema.js";
export const getIncome = async () => {
	try {
		const pipeline = [
			{
				$match: {
					type: "income",
				},
			},
			{
				$group: {
					_id: {
						year: { $year: "$date_time" },
						month: { $month: "$date_time" },
					},
					totalIncome: { $sum: "$amount" },
				},
			},
			{
				$group: {
					_id: "$_id.month",
					averageIncome: { $avg: "$totalIncome" },
				},
			},
			{
				$sort: { _id: 1 }, // Sort by month for better readability
			},
		];

		const results = await transactionModel.aggregate(pipeline);

		return results;
	} catch (Err) {
		throw Err;
	}
};

export const getExpense = async () => {
	try {
		const pipeline = [
			{
				$match: {
					type: "expense",
				},
			},
			{
				$group: {
					_id: {
						year: { $year: "$date_time" },
						month: { $month: "$date_time" },
					},
					totalExpense: { $sum: "$amount" },
				},
			},
			{
				$group: {
					_id: "$_id.month",
					averageExpense: { $avg: "$totalExpense" },
				},
			},
			{
				$sort: { _id: 1 }, // Sort by month for better readability
			},
		];

		const results = await transactionModel.aggregate(pipeline);
		return results;
	} catch (err) {
		throw err;
	}
};
