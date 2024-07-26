import React, { useState } from "react";
import "./css/style.css";
import { request } from "../../hook/request";

/**
 * 
 * @returns 
 */
export function PackageSenderUDP() {
    const [inputSendTextUDP, setInputSendTextUDP] = useState("");


    /**
     * Обработчик отправки данных с формы
     * @param event - объект "событие"   
     */
    const handlerOnSubmitSendPackageUDP = (event: any) => {
        const sendObj: any = {
            "sendPackage": [4, 0, 6, 0, 131, 0, 1, 0]
        };

        event.preventDefault();
        request('http://localhost:2002/api/check_tech_conditions/send_udp_package',
            "POST",
            sendObj
        )
    }

    /**
     * 
     * @param event 
     */
    const handlerInputSendTextUDP = (event: any) => {
        setInputSendTextUDP(event.target.value);


    }

    return (
        <>
            <div className="package-send-udp-container">
                <div className="package-send-udp-container_form">
                    <form onSubmit={handlerOnSubmitSendPackageUDP} >
                        <div className="field_package_input">
                            <label htmlFor="package_input">Отправляемый пакет</label>
                            <input type="text" id="package_input" value={inputSendTextUDP} onChange={handlerInputSendTextUDP} />
                        </div>
                        <input type="submit" className="submit-button submit-button_sender" value={"Отправка байт"} />
                    </form>
                </div>
                <div className="package-send-udp-container_results">

                </div>
            </div>
        </>
    )
}