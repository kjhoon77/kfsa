// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchAnswerAnalysisData';

export const useSearchAnswerAnalysis = () => {
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