import React from "react";
import { UserRound } from "lucide-react";
import "./header.css";
import { useNavigate, Link } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			navigate("/Dashboard/LoginSign");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="nav">
			<div className="l" style={{ padding: 10 }}>
				<img
					src="/images/logo_bucks.png"
					alt=""
					onClick={() => navigate("/Dashboard")}
				/>
			</div>
			<div className="t">
				<h4> </h4>
			</div>
			{/* <form onSubmit={handleSubmit}> */}
			<div>
				<Link to="/Dashboard/LoginSign"></Link>
				<button
					className="user"
					style={{ padding: 20 }}
					onClick={handleSubmit}
				>
					<UserRound />
				</button>
			</div>
			{/* </form> */}
		</div>
	);
};
