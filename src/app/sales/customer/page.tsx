// sales/customer/page.tsx
"use client";

import { useEffect, useState } from "react";
import { fetchCustomers } from "@/app/api/customer"; // Import the API function
import CustomerList from "./CustomerList"; // Import your CustomerList component

const CustomerPage = () => {
    const [customers, setCustomers] = useState<any[]>([]); // Ensure it's an array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadCustomers = async () => {
            try {
                const data = await fetchCustomers();
                setCustomers(data); // Directly use the array returned from `fetchCustomers`
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadCustomers();
    }, []); // Runs once when the component is mounted

    return (
        <div>
            <h1>Customers</h1>
            {loading && <p>Loading customers...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && <CustomerList customers={customers} />}
        </div>
    );
};

export default CustomerPage;
