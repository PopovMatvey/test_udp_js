import React, { useEffect, useState } from "react";
import './css/style.css';
import { HeaderInformation } from "../HeaderInformation";
import { useGetRequestIpAddres } from "../../hook/useGetIpAddress";
import { request } from "../../hook/request";
import { ModalWindow } from "../ModalWindow";
import { useNotificationWindowState } from "../ModalWindow/hook/notificationWindowState";

/**
 * Шапка
 * @returns компонент "Шапка"
 */
export function Header() {
    /**
     * 
     */
    let { ipAddres, featchIpAddres } = useGetRequestIpAddres();

    /**
     * 
     */
    const [ipAddrInput, setIPAddrInput] = useState("");
    const [currentIP, setCurrentIP]= useState(ipAddres);

    /* Hooks */
    const {
        titleText, bodyText,
        modalWindowState, setModalWindowState,
        getModalWindow
    } = useNotificationWindowState();                       // Состояния модального окна

    const checkOnIPAddress = (parString: string) => {
        const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
        const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);

        return regex.test(parString);
    }

    /**
     * 
     * @param event 
     */
    const handlerSubmitFormIpAddress = (event: any) => {
        const postObject: any = {
            "ip_address": ipAddrInput
        }

        event.preventDefault();

        if (!checkOnIPAddress(ipAddrInput)) {
            getModalWindow(`Внимание`, `Неферный формат ввода, ожидается IP-адрес. Текущий IP: ${ipAddrInput}`);

            return;
        }
        // ipAddres = 

        if (ipAddrInput !== ipAddres) {
            request('http://localhost:2002/api/check_tech_conditions/ip_address',
                "POST",
                postObject
            );
            featchIpAddres();
            setCurrentIP(ipAddres);
            getModalWindow(`Уведомление`, `IP-адрес успешно изменён. Текущий IP: ${ipAddrInput}`);

            return;
        }

        getModalWindow(`Внимание`, `Введённый и текущий IP-адреса совпадают. Текущий IP: ${ipAddrInput}`);
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
        <>
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
            {
                modalWindowState && <ModalWindow titleTextProp={titleText} bodyTextProp={bodyText} setModalWindowStateProp={setModalWindowState} />
            }
        </>
    );
}