import React from "react";
import { useState, useEffect } from "react";
import "./income.css";
import { getIncomeApi } from "../../../../../shared/services/api-dashboard";
export const Income = () => {
	const [income, setIncome] = useState(0);
	useEffect(() => {
		const fetchIncome = async () => {
			try {
				const response = await getIncomeApi();
				console.log("response isss ", response); //array
				const x = response.length;
				// console.log(response[x - 1]);

				setIncome(response[x - 1].averageIncome);
			} catch (error) {
				console.error(error);
			}
		};

		fetchIncome();
	}, []);

	return (
		<div className="card" id="inc">
			<div className="card-body">
				<h2 className="card-title">Income</h2>
				<p className="card-text" id="showinc">
					&#8377;{income}
				</p>
			</div>
		</div>
	);
};
