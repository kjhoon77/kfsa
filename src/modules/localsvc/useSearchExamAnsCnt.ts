// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamAnsCntData';

export const useSearchExamAnsCnt = () => {
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