// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining3101SSettlementPOSSunapData';

export const useFrmtraining3101SSettlementPOSSunap = () => {
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