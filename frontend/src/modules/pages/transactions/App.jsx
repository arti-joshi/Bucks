import React from "react";
import { Transaction } from "./components/pages/Transaction.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Transaction />} />
			</Routes>
		</Router>
	);
};
export default App;
