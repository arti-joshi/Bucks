import React from "react";
import "./targetexpensebutton.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const TargetExpenseButton = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/Dashboard/TargetExpense");
	};

	return (
		<div>
			<Link to="/Dashboard/TargetExpense"></Link>
			<button className="buttons" type="button" onClick={handleClick}>
				Set Target Expense
			</button>
		</div>
	);
};
