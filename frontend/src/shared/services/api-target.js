import axios from "axios";

export const getTarget = async (info) => {
	const response = await axios.post(
		import.meta.env.VITE_TARGET_URL,
		JSON.stringify(info),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	return response.data;
};

export const getSavings = async () => {
	try {
		const response = await axios.get(import.meta.env.VITE_SAVINGS_URL);
		console.log(response);
		return response;
	} catch (err) {
		console.log("error: ", err);
		throw err;
	}
};

export const getMessage = async (info) => {
	const response = await axios.post(
		import.meta.env.VITE_MESSAGE_URL,
		JSON.stringify(info),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
	return response.data.message;
};
