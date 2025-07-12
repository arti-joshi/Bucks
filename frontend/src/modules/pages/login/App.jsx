import React from "react";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "../dashboard/components/dashboardlayout/Dashboard";
import { LoginSign } from "../login_signup/components/LoginSign";
import { Sign } from "../signup/components/Sign";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const App = () => {
	return (
		<Router>
			<Routes>
				{/* <Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Dashboard/LoginSign/Login" element={<Login />} /> */}
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Dashboard/LoginSign" element={<LoginSign />} />
				<Route path="/Dashboard/LoginSign/Login" element={<Login />} />
				<Route path="/Dashboard/LoginSign/Sign" element={<Sign />} />
				{/* <Route path={`/Dashboard/:${userId}`} element={<Dashboard />} /> */}
			</Routes>
		</Router>
	);
};
export default App;
