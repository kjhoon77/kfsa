// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamJumsuPersonDistribution2Data';

export const useSearchExamJumsuPersonDistribution2 = () => {
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