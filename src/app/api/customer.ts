import axios from "@/libs/axiosInstance";

export const fetchCustomers = async () => {
    try {
        const response = await axios.get("/customers");
        return response.data.data; // No need for response.json()
    } catch (error) {
        throw new Error(
            error.response?.data?.message || "Failed to fetch customers"
        );
    }
};
