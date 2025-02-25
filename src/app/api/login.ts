import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        try {
            const response = await axios.post(
                `${process.env.LARAVEL_API_URL}/login`,
                {
                    email,
                    password,
                }
            );

            if (response.data.token) {
                return res.status(200).json({ token: response.data.token });
            } else {
                return res.status(401).json({ message: "Unauthorized" });
            }
        } catch (error) {
            return res.status(500).json({ message: "Server error" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
