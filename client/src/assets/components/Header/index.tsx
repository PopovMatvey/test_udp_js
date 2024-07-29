import React, { useEffect, useState } from "react";
import './css/style.css';
import { HeaderInformation } from "../HeaderInformation";
import { useGetRequestIpAddres } from "../../hook/useGetIpAddress";
import { usePostRequest } from "../../hook/usePostIpAddress";

/**
 * Шапка
 * @returns компонент "Шапка"
 */
export function Header() {
    /**
     * 
     */
    const { ipAddres } = useGetRequestIpAddres();

    /**
     * 
     */
    const [ipAddrInput, setIPAddrInput] = useState("");

    /**
     * 
     * @param event 
     */
    const handlerSubmitFormIpAddress = (event: any) => {
        event.preventDefault();

        const postObject = {
            "ip_address": ipAddrInput
        }

        // usePostRequest(postObject);
    }

    /**
     * 
     * @param event 
     */
    const handlerOnChangeIpAddrInput = (event: any) => {
        setIPAddrInput(event.target.value);
    }

    /**
     * 
     */
    useEffect(() => {
        setIPAddrInput(ipAddres);
    }, [ipAddres]);

    return (
        <header>
            <HeaderInformation />
            <div className="header-tool-area">
                <div className="header-tool-area_ip-address">
                    <form onSubmit={handlerSubmitFormIpAddress}>
                        <div className="header-tool-area_ip-address_filed">
                            <label htmlFor="ip_address">IP-адрес</label>
                            <input type="text" name="ip-address" id="ip_address" value={ipAddrInput} onChange={handlerOnChangeIpAddrInput} />
                        </div>
                        <input type="submit" name="" id="ip_address__input" className="submit-button submit-button_ip-addr" value={"->"} />
                    </form>
                </div>
            </div>
        </header>
    );
}