import axios from "axios";
// import Cookies from "js-cookie";
export const getSignApi = async (info) => {
	try {
		console.log(info);
		const response = await axios.post(
			import.meta.env.VITE_SIGNUP_URL,
			JSON.stringify(info),
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
