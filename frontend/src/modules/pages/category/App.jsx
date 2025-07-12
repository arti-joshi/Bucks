import React from "react";
// import { Category } from "./components/Category.jsx";
import { Category } from "./components/pages/Category.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Category />} />
			</Routes>
		</Router>
	);
};
export default App;
