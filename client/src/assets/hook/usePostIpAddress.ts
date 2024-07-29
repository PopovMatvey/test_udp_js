import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 
 */
export function usePostRequest(parPostData: any){
    // const [ipAddres, setIpAddres] = useState("");

    async function featchPostIpAddres() {
        try {
            const response = await axios.post("http://localhost:2002/api/check_tech_conditions/ip_address",parPostData);

            // setIpAddres(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //     featchPostIpAddres();
    // }, [])
    return {featchPostIpAddres}
}
// export function usePostRequestIpAddres(parPostData: any) {
    // const [ipAddres, setIpAddres] = useState("");

    // async function featchIpAddres() {
    //     try {
    //         const response = await axios.post("http://localhost:2002/api/check_tech_conditions/ip_address",parPostData);

    //         setIpAddres(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     featchIpAddres();
    // }, [])
// }