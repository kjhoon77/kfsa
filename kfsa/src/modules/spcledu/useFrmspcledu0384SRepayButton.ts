// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0384SRepayButtonData';

export const useFrmspcledu0384SRepayButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_btnRepayJubsu, setIsVisible_btnRepayJubsu] = useState(true);
    const [isVisible_btnRepayOk, setIsVisible_btnRepayOk] = useState(true);
    const [isVisible_btnRepayCancel, setIsVisible_btnRepayCancel] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_btnRepayJubsu,
        setIsVisible_btnRepayJubsu,
        isVisible_btnRepayOk,
        setIsVisible_btnRepayOk,
        isVisible_btnRepayCancel,
        setIsVisible_btnRepayCancel,
    };
};