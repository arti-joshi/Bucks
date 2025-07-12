import axios from "axios";
import Cookies from "js-cookie";
export const getLoginApi = async (info) => {
	try {
		const token = Cookies.get("auth_token");
		axios.interceptors.request.use(
			(config) => {
				const token = Cookies.get("auth_token");
				if (token) {
					config.headers.Authorization = `Bearer ${token}`;
				}

				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);

		const response = await axios.post(
			import.meta.env.VITE_LOGIN_URL,
			JSON.stringify(info),
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response.data);
		// axios.interceptors.request.eject(authInterceptor);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
