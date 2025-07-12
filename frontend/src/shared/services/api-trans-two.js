import axios from "axios";

export const getTransTwoApi = async (info) => {
	try {
		console.log(info);
		const response = await axios.post(
			import.meta.env.VITE_TRANS_TWO_URL,
			JSON.stringify(info),
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		// axios.post('/api/get-category-ids', { selectedExpenses })
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
		throw error;
	}
};
