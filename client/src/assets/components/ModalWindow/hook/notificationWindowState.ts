import { useState } from "react";

// Состояние модального окна-уведомления
export function useNotificationWindowState() {
    const [titleText,setTitleText] = useState('undefiend');             // Состояние заголовка модального окна  
    const [bodyText,setBodyText] = useState('undefiend');               // Состояние текста модального окна
    const [modalWindowState,setModalWindowState] = useState(false);     // Состояние появление модального окна

    /**
     * 
     * @param parTitleText 
     * @param parBodyText 
     */
    const getModalWindow = (parTitleText: string, parBodyText: string) => {
        setModalWindowState(true);
        setTitleText(parTitleText);
        setBodyText(parBodyText);
    }

    return {
        titleText,setTitleText,bodyText,setBodyText,modalWindowState,setModalWindowState,getModalWindow
    }
}