import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL, // Set API URL from .env
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
