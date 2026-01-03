// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM8101SSettlementPOSSunapData';

export const useFrmCOM8101SSettlementPOSSunap = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_medAmount,
        setIsVisible_medAmount,
    };
};