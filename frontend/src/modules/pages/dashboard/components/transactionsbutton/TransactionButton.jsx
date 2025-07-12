import React from "react";
import "./transaction.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const TransactionButton = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/Dashboard/Transactions");
	};

	return (
		<div>
			<Link to="/Dashboard/Transactions"></Link>
			<button className="buttons" type="button" onClick={handleClick}>
				View Transactions
			</button>
		</div>
	);
};
