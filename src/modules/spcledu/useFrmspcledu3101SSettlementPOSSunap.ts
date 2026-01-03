// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu3101SSettlementPOSSunapData';

export const useFrmspcledu3101SSettlementPOSSunap = () => {
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