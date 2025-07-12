import axios from "axios";
import Cookies from "js-cookie";

export const getIncomeApi = async () => {
	try {
		//set authorization header
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
		const response = await axios.get(import.meta.env.VITE_INCOME_URL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
export const getExpenseApi = async () => {
	try {
		//set authorization header
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
		const response = await axios.get(import.meta.env.VITE_EXPENSE_URL, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
