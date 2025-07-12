import React, { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getSignApi } from "../../../../shared/services/api-sign";
import { Header } from "../../../../shared/components/heading/Header";
import { Footer } from "../../../../shared/components/footing/Footer";
import Cookies from "js-cookie";
export const Sign = () => {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await getSignApi({
				name,
				username,
				password,
			});
			//////cookie creation cookies.set
			// const cookie = Cookies.set("auth_token", response.doc, {
			// 	secure: true,
			// });
			console.log("Response: ", response);
			//response.doc.token = jwt
			// const cookie = Cookies.get("cookie");
			// const cookie = await getCookieApi();
			// console.log("cookie: ", cookie); //undefined ??????????
			// console.log(response.data.message);
			Cookies.set("auth_token", response.doc);
			if (response.success) {
				alert("Sign Up successful!");
				// console.log(response.doc.token); //correct
				navigate(-2);
			} else {
				console.error("Sign Up failed.");
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
			<div className="con">
				<div className="header">
					<div className="text">Sign Up</div>
					<div className="underline"></div>
				</div>
				<div className="inputs">
					<div className="input">
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="input">
						<input
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="input">
						<form onSubmit={handleSubmit}>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</form>
					</div>
				</div>
				<div className="submit-container">
					{/* <form onSubmit={handleSubmit}> */}
					<div>
						<Link to="/Dashboard"></Link>
						<button className="submit" onClick={handleSubmit}>
							Sign up
						</button>
					</div>
					{/* </form> */}
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
