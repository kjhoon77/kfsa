// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchQuestionItemAnalysisData';

export const useSearchQuestionItemAnalysis = () => {
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