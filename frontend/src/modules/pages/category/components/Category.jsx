import { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../../shared/components/heading/Header";
import { Footer } from "../../../../shared/components/footing/Footer";
import { getCategoryApi } from "../../../../shared/services/api-category.js";
// import { getCookie } from "../../../../../../backend/middlewares/authInterceptor.js";

import axios from "axios";
export const Category = () => {
	const colors = [
		"#EE4E4E",
		"#FFDB5C",
		"#A1DD70",
		"#7469B6",
		"#A79277",
		"#03A9F4",
		"#8BC34A",
		"#FF5722",
		"#9C27B0",
	];

	const [ExpenseList, setExpenseList] = useState([
		{ ExpenseName: "Food", color: "#EE4E4E" },
		{ ExpenseName: "Travel", color: "#FFDB5C" },
		{ ExpenseName: "Medical", color: "#A1DD70" },
		{ ExpenseName: "Housing", color: "#7469B6" },
	]);
	const [Expense, setExpense] = useState("");
	const [selectedExpenses, setSelectedExpenses] = useState([]);

	const navigate = useNavigate();
	const addExpense = async (e) => {
		e.preventDefault();
		if (Expense.trim() === "") return;

		const newExpense = {
			ExpenseName: Expense,
			color: colors[Math.floor(Math.random() * colors.length)],
		};

		try {
			const response = await getCategoryApi({
				newExpense,
			});
			console.log(
				"New category of expense created successfully: ",
				response
			);
			setExpenseList([...ExpenseList, newExpense]);
			setExpense("");
			console.log(ExpenseList);
		} catch (err) {
			console.error("Error creating expense:", err);
		}
	};

	const deleteExpense = (deleteValue) => {
		const restExpenseList = ExpenseList.filter(
			(val) => val.ExpenseName !== deleteValue
		);
		setExpenseList(restExpenseList);
		setSelectedExpenses(
			selectedExpenses.filter((name) => name !== deleteValue)
		);
	};

	const handleSelectExpense = (expenseName) => {
		if (selectedExpenses.includes(expenseName)) {
			setSelectedExpenses(
				selectedExpenses.filter((name) => name !== expenseName)
			);
		} else {
			setSelectedExpenses([...selectedExpenses, expenseName]);
		}
	};

	const handleTransaction = async (e) => {
		console.log(selectedExpenses); //['Food']
		e.preventDefault();
		try {
			// const res = await axios.post(import.meta.env.VITE_TRANS_TWO_URL, {
			// 	selectedExpenses,
			// });
			navigate("/Dashboard/Transactions");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<Header />
			<div
				style={{
					backgroundColor: "#88ab8e",
					width: "100%",
					height: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					className="w-[500px] mx-auto text-center bg-white p-5 rounded-xl shadow-lg"
					style={{
						backgroundColor: "#fff7f1",
						marginTop: "20px",
						maxHeight: "80vh",
						overflowY: "auto",
					}}
				>
					<h1 className="text-4xl font-semibold mb-6 text-gray-800">
						Categories of Expense
					</h1>
					<form onSubmit={addExpense} className="relative mb-6">
						<input
							className="border-2 flex items-center my-7 h-14 pl-7 pr-20 border-gray-300 rounded-full p-4 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4f6f52]"
							type="text"
							placeholder="Add a Category of Expense"
							value={Expense}
							onChange={(e) => setExpense(e.target.value)}
						/>
						<button
							type="submit"
							className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4f6f52] text-white py-2 px-4 rounded-full hover:bg-[#3f5e47] transition duration-300"
						>
							Add
						</button>
					</form>
					<div className="Expense-show-area">
						<ul>
							{ExpenseList.map((singleExpense, index) => (
								<li
									key={index}
									className={`mb-1 flex justify-between text-white py-2 rounded-full text-lg px-3 transition duration-300 cursor-pointer
                  
                  ${
						selectedExpenses.includes(singleExpense.ExpenseName)
							? "bg-opacity-100"
							: "bg-opacity-75 hover:bg-opacity-90"
					}
                  ${
						selectedExpenses.includes(singleExpense.ExpenseName)
							? "ring ring-offset-2 ring-[#4f6f52]"
							: ""
					}`}
									style={{
										backgroundColor: singleExpense.color,
									}}
									onClick={() =>
										handleSelectExpense(
											singleExpense.ExpenseName
										)
									}
								>
									{singleExpense.ExpenseName}
									<span
										onClick={(e) => {
											e.stopPropagation();
											deleteExpense(
												singleExpense.ExpenseName
											);
										}}
										className="text-white-600 cursor-pointer"
									>
										<IoTrashBinOutline size={24} />
									</span>
								</li>
							))}
						</ul>
					</div>
					<div>
						<Link to="/Dashboard/Transactions"></Link>
						<button
							onClick={handleTransaction}
							className="bg-[#4f6f52] text-white py-3 px-8 rounded-full mt-8 hover:bg-[#3f5e47] transition duration-300"
						>
							Add Transaction
						</button>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};
export default Category;
