import axios from "axios";
import { BASE_URL } from "./base-url";

const axiosInstance = axios.create({
    baseURL: BASE_URL || "http://localhost:5000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.getItem("token") || ""}`,
         'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Credentials': true,
                  'Sec-Fetch-Mode': 'no-cors',
                  'Sec-Fetch-Site': 'cross-site',
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const { response } = error;

        if (response) {
            const { status, data } = response;
            const errors = {
                400: "Bad Request",
                401: "Unauthorized",
                403: "Forbidden",
                404: "Not Found",
                500: "Server Error"
            };
            if (errors[status]) console.error(`${errors[status]}:`, data);
        } else {
            console.error(error.request ? "Network Error" : "Error:", error.request || error.message);
        }

        return Promise.reject({
            message: response?.data?.message || error.message || "Unknown error",
            status: response?.status,
            data: response?.data
        });
    }
);

export default axiosInstance;