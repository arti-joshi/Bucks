import React from "react";
import { Header } from "../../../../../shared/components/heading/Header.jsx";
import { Slider } from "../sliderexp/Slider.jsx";
import { Income } from "../income/Income.jsx";
import { Expense } from "../expense/Expense.jsx";
import { ExpenseButton } from "../expbut/ExpenseButton.jsx";
import { TransactionButton } from "../transactionsbutton/TransactionButton.jsx";
import { Footer } from "../../../../../shared/components/footing/Footer.jsx";
import { TargetExpenseButton } from "../targetexpbut/TargetExpenseButton.jsx";
import { Graph } from "../graph/Graph.jsx";

export const Dashboard = () => {
	return (
		<div>
			<div className="head">
				<Header />
			</div>
			<section className="first">
				<div className="slide">
					<Slider />
				</div>
			</section>
			<section className="second">
				<div className="cont">
					<div className="row">
						<div className="col-6">
							<Income />
						</div>
						<div className="col-6">
							<Expense />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<Graph />
						</div>
					</div>
					<div className="row">
						<div className="col-4">
							<ExpenseButton />
						</div>
						<div className="col-4">
							<TransactionButton />
						</div>
						<div className="col-4">
							<TargetExpenseButton />
						</div>
					</div>
				</div>
			</section>

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};
