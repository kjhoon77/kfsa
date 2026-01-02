// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamScoreOrderNo2Data';

export const useSearchExamScoreOrderNo2 = () => {
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