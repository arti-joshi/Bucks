import React from "react";
import { useEffect, useState } from "react";
import "./expense.css";
import { getExpenseApi } from "../../../../../shared/services/api-dashboard.js";
export const Expense = () => {
	const [expense, setExpense] = useState(0);
	useEffect(() => {
		const fetchExpense = async () => {
			try {
				const response = await getExpenseApi();
				const x = response.length;
				console.log(response[x - 1]);
				setExpense(response[x - 1].averageExpense);
			} catch (error) {
				console.error(error);
			}
		};

		fetchExpense();
	}, []);

	return (
		<div className="card" id="exp">
			<div className="card-body">
				<h2 className="card-title">Expense</h2>
				<p className="card-text" id="showexp">
					&#8377;{expense}
				</p>
			</div>
		</div>
	);
};
