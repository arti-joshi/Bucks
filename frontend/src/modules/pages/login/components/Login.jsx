import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { getLoginApi } from "../../../../shared/services/api-login";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Header } from "../../../../shared/components/heading/Header";
import { Footer } from "../../../../shared/components/footing/Footer";
export const Login = () => {
	// const { userId } = useParams();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await getLoginApi({
				username,
				password,
			});
			console.log(response);
			if (response.success) {
				navigate("/Dashboard");
			} else {
				alert("Login failed");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div>
				<Header />
			</div>
			<div className="container">
				<div className="header">
					<div className="text">Login</div>
					<div className="underline"></div>
				</div>
				<div className="inputs">
					<div className="input">
						<input
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="input">
						<input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="submit-container">
					<div>
						{/* <Link to="/Dashboard"></Link> */}
						{/* <Link to={`:/${userId}/Dashboard`}></Link> */}
						{/* <Link to="/Dashboard/LoginSign"></Link> */}
						<button className="submit" onClick={handleSubmit}>
							Login
						</button>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
