// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu3101SSettlementPOSSunapData';

export const useFrmspcledu3101SSettlementPOSSunap = () => {
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