import { differenceInMonths } from "date-fns";

export const calc_savings_target = ({ target_amount, target_date }) => {
	try {
		// const currentDate = new Date();
		const today = new Date();
		const currentDate = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate()
		);
		console.log(currentDate);
		console.log(target_date);
		const diffInMonths = differenceInMonths(
			new Date(target_date),
			currentDate
		);

		const target = target_amount / diffInMonths;

		return target;
	} catch (Err) {
		console.log("error: ", Err);
	}
};
