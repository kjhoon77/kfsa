// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './InsertAnswerAnalysisData';

export const useInsertAnswerAnalysis = () => {
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