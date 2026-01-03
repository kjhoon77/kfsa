// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0384SRepayButtonData';

export const useFrmspcledu0384SRepayButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_btnRepayJubsu, setRawVisible_btnRepayJubsu] = useState(true);
    const [rawVisible_btnRepayOk, setRawVisible_btnRepayOk] = useState(true);
    const [rawVisible_btnRepayCancel, setRawVisible_btnRepayCancel] = useState(true);
    const isVisible_btnRepayJubsu = rawVisible_btnRepayJubsu;
    const setIsVisible_btnRepayJubsu = setRawVisible_btnRepayJubsu;
    const isVisible_btnRepayOk = rawVisible_btnRepayOk;
    const setIsVisible_btnRepayOk = setRawVisible_btnRepayOk;
    const isVisible_btnRepayCancel = rawVisible_btnRepayCancel;
    const setIsVisible_btnRepayCancel = setRawVisible_btnRepayCancel;

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