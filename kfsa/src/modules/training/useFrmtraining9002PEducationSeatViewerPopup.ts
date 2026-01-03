// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining9002PEducationSeatViewerPopupData';

export const useFrmtraining9002PEducationSeatViewerPopup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_AxMsie, setRawVisible_AxMsie] = useState(true);
    const isVisible_AxMsie = rawVisible_AxMsie;
    const setIsVisible_AxMsie = setRawVisible_AxMsie;

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