// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0384SRepayButtonData';

export const useFrmspcledu0384SRepayButton = () => {
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