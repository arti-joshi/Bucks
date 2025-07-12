//auth middleware
import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";
//Bearer token
const isAuthenticated = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		console.log(authHeader);
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({ error: "Unauthorized!" });
		}
		const token = authHeader.split(" ")[1];
		console.log("this token: ", token);
		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decodedToken;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).json({ error: "Authentication failed." });
	}

	// const token = req.cookies.cookie;
	// if (!token) return res.status(401).json({ message: "Unauthorized" });

	// try {
	// 	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	// 	req.user = decoded;
	// 	next();
	// } catch (error) {
	// 	res.status(401).json({
	// 		message: "Unauthorized",
	// 	});
	// }
};

export const createAuthToken = (user) => {
	console.log(user);
	return jwt.sign(
		{
			_id: user._id.toString(),
			username: user.username,
		},
		process.env.JWT_SECRET,
		{ expiresIn: "48h" }
	);
};

export const verifyUser = (token) => {
	if (!token) return null;
	// console.log(jwt.verify(token, process.env.JWT_SECRET));
	// console.log(process.env.JWT_SECRET);
	return jwt.verify(token, process.env.JWT_SECRET);
};
export default isAuthenticated;
