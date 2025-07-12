import { Dashboard } from "./modules/pages/dashboard/components/dashboardlayout/Dashboard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginSign } from "./modules/pages/login_signup/components/LoginSign.jsx";
// import { Link } from "react-router-dom";
import { Login } from "./modules/pages/login/components/Login.jsx";
import { Sign } from "./modules/pages/signup/components/Sign.jsx";
import Transaction from "./modules/pages/transactions/components/Transaction.jsx";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { TransactionButton } from "./modules/pages/dashboard/components/transactionsbutton/TransactionButton.jsx";
// import { Category } from "./modules/pages/category/components/Category.jsx";
import Category from "./modules/pages/category/components/Category.jsx";
import { TargetExpense } from "./modules/pages/target_expense/components/TargetExpense.jsx";
const App = () => {
	const { userId } = useParams();
	// const user_Id = { userId };
	return (
		<Router>
			<Routes>
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Dashboard/LoginSign" element={<LoginSign />} />
				<Route path="/Dashboard/LoginSign/Login" element={<Login />} />
				<Route path="/Dashboard/LoginSign/Sign" element={<Sign />} />

				<Route
					path={`/Dashboard/LoginSign/Login/:${userId}/Dashboard`}
					element={<Dashboard />}
				/>
				<Route
					path="/Dashboard/Transactions"
					element={<Transaction />}
				/>
				<Route path="/Dashboard/Category" element={<Category />} />
				<Route
					path="/Dashboard/TargetExpense"
					element={<TargetExpense />}
				/>
			</Routes>
		</Router>
	);
};
export default App;
