// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining9002PEducationSeatViewerPopupData';

export const useFrmtraining9002PEducationSeatViewerPopup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_AxMsie, setIsVisible_AxMsie] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_AxMsie,
        setIsVisible_AxMsie,
    };
};