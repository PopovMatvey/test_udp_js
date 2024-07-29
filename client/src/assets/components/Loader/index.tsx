import React from "react";
import "./css/style.css";

/**
 * Загрузчик
 * @returns Компонент загразчик
 */
export function Loader() {

    return (
        <>
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        </>
    )
}
