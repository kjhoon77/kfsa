// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamPassName2Data';

export const useSearchExamPassName2 = () => {
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