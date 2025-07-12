import { getExpense, getIncome } from "../services/dashboard-operations.js";
import { calc_savings_target } from "../services/target-operations.js";

export const calcSavingsTarget = (req, res) => {
	try {
		const { target_amount, target_date } = req.body;
		const result = calc_savings_target({
			target_amount,
			target_date,
		});
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
const calcAvgInc = (results) => {
	const size = results.length;
	let average = 0;
	for (let i = 0; i < size; i++) {
		average = average + results[i].averageIncome;
	}
	const averageInc = average / size;
	return averageInc;
};
const calcAvgExp = (results) => {
	const size = results.length;
	let average = 0;
	for (let i = 0; i < size; i++) {
		average = average + results[i].averageExpense;
	}
	const averageInc = average / size;
	return averageInc;
};

export const calcAvgMonthlySaving = async () => {
	try {
		const results_inc = await getIncome();
		const results_exp = await getExpense();
		const averageInc = calcAvgInc(results_inc);
		const averageExp = calcAvgExp(results_exp);
		const diff = averageInc - averageExp;
		return diff;
	} catch (err) {
		throw err;
	}
};

export const message = async (req, res) => {
	try {
		const target = calc_savings_target(req.body);
		const avgMonthlySaving = await calcAvgMonthlySaving();
		if (avgMonthlySaving > target) {
			res.json({ message: "You will reach your target on time." });
		} else {
			res.json({ message: "You will not reach your target on time." });
		}
	} catch (err) {
		res.status(400).json({ error: err });
	}
};
