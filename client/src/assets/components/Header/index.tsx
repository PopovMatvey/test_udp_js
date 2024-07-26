import React from "react";
import './css/style.css';
import { HeaderInformation } from "../HeaderInformation";
import { Menu } from "../Menu";

/**
 * Шапка
 * @returns компонент "Шапка"
 */
export function Header() {

    /**
     * 
     * @param event 
     */
    const handlerSubmitFormIpAddress = (event:any) => {
        event.preventDefault();

    }

    return (
        <header>
            <HeaderInformation />
            <div className="header-tool-area">
                <div className="header-tool-area_ip-address">
                    <form onSubmit={handlerSubmitFormIpAddress}>
                        <div className="header-tool-area_ip-address_filed">
                            <label htmlFor="ip_address">IP-адрес</label>
                            <input type="text" name="ip-address" id="ip_address" />
                        </div>
                        <input type="submit" name="" id="ip_address__input" className="submit-button submit-button_ip-addr" value={"->"} />
                    </form>
                </div>
            </div>
        </header>
    );
}