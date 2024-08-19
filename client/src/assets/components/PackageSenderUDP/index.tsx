import React, { useState } from "react";
import "./css/style.css";
import { request } from "../../hook/request";
import { useNotificationWindowState } from "../ModalWindow/hook/notificationWindowState";
import { ModalWindow } from "../ModalWindow";

/**
 * 
 * @returns 
 */
export function PackageSenderUDP() {
    /* Hooks */
    const {
        titleText, bodyText,
        modalWindowState, setModalWindowState,
        getModalWindow
    } = useNotificationWindowState();
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

        console.log(validateString(event.target.value));

        if (!validateString(event.target.value)) {
            getModalWindow(`Внимание`, `Вы ввели неккоректные входные данные. ожидается набор значение HEX для пакета UDP`);
        }



        console.log(event.target.value.split(" "))
    }

    /**
     * 
     * @param parString 
     * @returns 
     */
    const validateString = (parString: string) => {
        for (let i = 0; i < parString.length; i++) {
            if (!checkOnHex(parString[i])) {
                return false;
            }
        }

        return true;
    }

    /**
     * 
     * @param parChar 
     * @returns 
     */
    const checkOnHex = (parChar: string) => {
        switch (parChar) {
            case '0': {
                return true;
            };
            case '1': {
                return true;
            };
            case '2': {
                return true;
            };
            case '3': {
                return true;
            };
            case '4': {
                return true;
            };
            case '5': {
                return true;
            };
            case '6': {
                return true;
            };
            case '7': {
                return true;
            };
            case '8': {
                return true;
            };
            case '9': {
                return true;
            };
            case '0': {
                return true;
            };
            case 'x': {
                return true;
            };
            case ' ': {
                return true;
            };
        }

        return false;
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
            {
                modalWindowState && <ModalWindow titleTextProp={titleText} bodyTextProp={bodyText} setModalWindowStateProp={setModalWindowState} />
            }
        </>
    )
}
