import React from "react";
import { Sign } from "./components/Sign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../dashboard/components/dashboardlayout/Dashboard";
import { Login } from "../login/components/Login";
import { LoginSign } from "../login_signup/components/LoginSign";
export const App = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path="/loginsign/signup" element={<Sign />} /> */}
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Dashboard/LoginSign" element={<LoginSign />} />
				<Route path="/Dashboard/LoginSign/Login" element={<Login />} />
				<Route path="/Dashboard/LoginSign/Sign" element={<Sign />} />
			</Routes>
		</Router>
	);
};
export default App;
