// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu9002PEducationSeatViewerPopupData';

export const useFrmspcledu9002PEducationSeatViewerPopup = () => {
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