import axios from "axios";
// import authInterceptor from "../../../../backend/middlewares/authInterceptor.js";
import Cookies from "js-cookie";
export const getCategoryApi = async (info) => {
	try {
		const token = Cookies.get("auth_token");
		// const token = localStorage.getItem("token");
		// console.log(token);
		console.log(info);
		axios.interceptors.request.use(
			(config) => {
				// const token = Cookies.get("auth_token"); // Replace with your preferred storage method
				// const token = localStorage.getItem("token");
				console.log("token is- ", token);

				if (token) {
					// console.log("running");
					config.headers.Authorization = `Bearer ${token}`;
				}

				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		const response = await axios.post(
			import.meta.env.VITE_CATEGORY_URL,
			JSON.stringify(info),
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);

		console.log("0000000000 ", response);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
