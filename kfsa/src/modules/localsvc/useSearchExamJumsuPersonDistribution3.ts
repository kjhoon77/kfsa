// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamJumsuPersonDistribution3Data';

export const useSearchExamJumsuPersonDistribution3 = () => {
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