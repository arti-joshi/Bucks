import React from "react";
import { LoginSign } from "./modules/components/LoginSign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Login } from "../login/components/Login";
import { Sign } from "../signup/components/Sign";
import { Dashboard } from "../dashboard/components/dashboardlayout/Dashboard";
export const App = () => {
	return (
		// <div>
		// 	<nav>
		// 		{/* <Link to="/dashboard"></Link> */}
		// 		<Link to="/Dashboard"></Link>
		// 		{/* <Link to="/Dashboard/LoginSign/Login"></Link>
		// 		<Link to="/Dashboard/LoginSign/Sign"></Link> */}
		// 	</nav>
		// 	<Routes>
		// 		<Route path="/Dashboard/LoginSign" element={<LoginSign />} />
		// 		{/* <Route path="/Dashboard/LoginSign/Login" element={<Login />} />
		// 		<Route path="/Dashboard/LoginSign/Sign" element={<Sign />} /> */}
		// 	</Routes>
		// </div>
		<Router>
			<Routes>
				{/* <Route path="/Dashboard/LoginSign" element={<LoginSign />} />
				<Route path="/Dashboard/LoginSign/Login" element={<Login />} /> */}
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Dashboard/LoginSign" element={<LoginSign />} />
				<Route path="/Dashboard/LoginSign/Login" element={<Login />} />
				<Route path="/Dashboard/LoginSign/Sign" element={<Sign />} />
			</Routes>
		</Router>
	);
};
export default App;
