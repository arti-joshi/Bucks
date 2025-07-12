import React from "react";
import { Header } from "../../../../shared/components/heading/Header";
import "./targetexpense.css";
import { useState } from "react";
import {
	getMessage,
	getSavings,
	getTarget,
} from "../../../../shared/services/api-target.js";
export const TargetExpense = () => {
	const [target, setTarget] = useState(0);
	const [savings, setSavings] = useState("");
	const [message, setMessage] = useState("");
	const [target_amount, setAmount] = useState(0);
	const [target_date, setDate] = useState("");
	const handleClick = async (e) => {
		e.preventDefault();
		try {
			// console.log("in handle click");
			const resp_one = await getTarget({ target_amount, target_date });
			setTarget(resp_one);
			const resp_three = await getMessage({ target_amount, target_date });
			setMessage(resp_three);
			const resp_two = await getSavings();
			console.log("resp two is ", resp_two);
			setSavings(resp_two);
		} catch (err) {
			console.log("error: ", err);
		}
	};
	return (
		<div>
			<Header />
			<div className="bod">
				<div className="cust_details">
					<h2>Custom Details</h2>
					<div className="row target_name">
						<h3 className="col-4">Add Target Name</h3>
						<input
							type="text"
							className="col-7"
							placeholder="Target Name"
						/>
					</div>
					<div className="row target_amt">
						<h3 className=" col-4">Add Target Amount</h3>
						<input
							type="number"
							className="col-7"
							placeholder="Target Amount"
							value={target_amount}
							onChange={(e) => setAmount(e.target.value)}
						/>
					</div>
					<div className="row target_desc">
						<h3 className=" col-4">Add Target Description</h3>
						<input
							type="text"
							className="col-7"
							placeholder="Target Description"
						/>
					</div>
					<div className="row target_date">
						<h3 className=" col-4">Add Target Date</h3>
						<input
							type="date"
							className="col-7"
							placeholder="Target Date"
							value={target_date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div className="but">
					<button
						className="comp_button"
						type="button"
						onClick={handleClick}
					>
						Compute
					</button>
				</div>
				<div className="avg_savings_target">
					<p>Savings Target (Per Month): &#8377;{target}</p>
				</div>
				<div className="month_saving">
					<p>Your Average Monthly Saving: &#8377;{savings}</p>
				</div>
				<div className="message">
					<p>Message: {message}</p>
				</div>
			</div>
		</div>
	);
};
