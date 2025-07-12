import React from "react";
import "./loginsign.css";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "../../../../shared/components/heading/Header";
import { Footer } from "../../../../shared/components/footing/Footer";

export const LoginSign = () => {
	const navigate = useNavigate();
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			navigate("/Dashboard/LoginSign/Login");
		} catch (error) {
			console.error(error);
		}
	};
	const handleSign = async (e) => {
		e.preventDefault();
		try {
			navigate("/Dashboard/LoginSign/Sign");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div>
			<div>
				<Header />
			</div>

			<div className="log">
				<div>
					<Link to="Dashboard/LoginSign/Login"></Link>
					<button className="sub" onClick={handleLogin}>
						Login
					</button>
				</div>

				<div>
					<Link to="Dashboard/LoginSign/Sign"></Link>
					<button className="sub" onClick={handleSign}>
						Sign Up
					</button>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
