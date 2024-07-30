import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 
 * @returns 
 */
export function useGetRequestIpAddres() {
    const [ipAddres, setIpAddres] = useState("");

    async function featchIpAddres() {
        try {
            const response = await axios.get("http://localhost:2002/api/check_tech_conditions/ip_address");

            setIpAddres(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        featchIpAddres();
    }, [ipAddres])

    return { ipAddres, featchIpAddres};
}