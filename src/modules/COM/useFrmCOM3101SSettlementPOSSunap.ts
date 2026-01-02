// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM3101SSettlementPOSSunapData';

export const useFrmCOM3101SSettlementPOSSunap = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
    };
};