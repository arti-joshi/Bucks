import React from "react";
import "./expensebutton.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const ExpenseButton = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/Dashboard/Category");
	};

	return (
		<div>
			<Link to="/Dashboard/Category"></Link>
			<button className="butt" onClick={handleClick}>
				Add Expense
			</button>
		</div>
	);
};
