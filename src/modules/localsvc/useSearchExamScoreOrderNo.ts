// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamScoreOrderNoData';

export const useSearchExamScoreOrderNo = () => {
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