// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0072MFrameLeftData';

export const useFrmCOM0072MFrameLeft = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_cbxOpenForm, setRawVisible_cbxOpenForm] = useState(false);
    const isVisible_cbxOpenForm = rawVisible_cbxOpenForm;
    const setIsVisible_cbxOpenForm = setRawVisible_cbxOpenForm;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_cbxOpenForm,
        setIsVisible_cbxOpenForm,
    };
};