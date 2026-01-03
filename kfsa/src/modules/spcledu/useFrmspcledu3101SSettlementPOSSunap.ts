// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu3101SSettlementPOSSunapData';

export const useFrmspcledu3101SSettlementPOSSunap = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const isVisible_lbAmount = rawVisible_lbAmount;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_medAmount = rawVisible_medAmount;
    const setIsVisible_medAmount = setRawVisible_medAmount;

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