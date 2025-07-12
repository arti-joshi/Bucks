// import axios from "axios";
// import Cookies from "js-cookie";

// const authInterceptor = axios.interceptors.request.use(
// 	(config) => {
// 		// const token = Cookies.get("token"); // Replace with your preferred storage method
// 		const token = localStorage.getItem("token");
// 		console.log("token is- ", token);

// 		if (token) {
// 			config.headers.Authorization = `Bearer ${token}`;
// 		}

// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// // export const getCookie = (name) => {
// // 	const cookieArr = document.cookie.split("; ");
// // 	for (let i = 0; i < cookieArr.length; i++) {
// // 		const cookie = cookieArr[i].trim(); // Trim whitespace
// // 		const eqPos = cookie.indexOf("=");
// // 		if (eqPos !== -1 && cookie.substring(0, eqPos) === name) {
// // 			return decodeURIComponent(cookie.substring(eqPos + 1));
// // 		}
// // 	}
// // 	return null;
// // };

// export default authInterceptor;
