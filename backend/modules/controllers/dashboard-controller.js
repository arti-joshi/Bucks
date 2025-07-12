// import { getIncomeApi } from "../../../frontend/src/shared/services/api-dashboard.js";
// import { transactionModel } from "../models/transaction-schema.js";
import { getIncome, getExpense } from "../services/dashboard-operations.js";

export const calcIncome = async (req, res) => {
	try {
		const results = await getIncome();

		// 		//(2) [{…}, {…}]
		// 0: {_id: 6, averageExpense: 200}
		// 1:{_id: 7, averageExpense: 500}
		// length:2
		// const size = results.length;
		// let average = 0;
		// for (let i = 0; i < size; i++) {
		// 	average = average + results[i].averageIncome;
		// }
		// const averageInc = average / size;
		res.status(200).json(results);
		// return averageInc;
		// return results;
	} catch (err) {
		// res.status(400).json({ error: err });
		throw err;
	}
};

export const calcExpense = async (req, res) => {
	try {
		const results = await getExpense();
		// const size = results.length;
		// let average = 0;
		// for (let i = 0; i < size; i++) {
		// 	average = average + results[i].averageExpense;
		// }
		// const averageExp = average / size;
		res.status(200).json(results);
		// return averageExp;
		// return results;
	} catch (err) {
		res.status(400).json({ message: "Error loading Expense!", error: err });
	}
};
