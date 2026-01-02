// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamResultBaseData';

export const useSearchExamResultBase = () => {
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