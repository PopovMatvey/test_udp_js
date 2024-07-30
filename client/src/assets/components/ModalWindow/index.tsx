import React from "react";
import "./css/style.css";

/**
 * 
 * @param param0 
 * @returns 
 */
export function ModalWindow({ titleTextProp, bodyTextProp, setModalWindowStateProp }: any) {

    return (
        <>
            < div id="modalWindow" >
                <div className="body-modal-notification" onClick={() => {
                    setModalWindowStateProp(false);
                }} />
                <div className="modal-notification">
                    <button onClick={() => {
                        setModalWindowStateProp(false);
                    }}>X</button>
                    <div className="modal-notification_content">
                        <h1>{titleTextProp}</h1>
                        <span>{bodyTextProp}</span>
                    </div>
                </div>
            </div >
        </>

    )
}