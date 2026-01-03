// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamNoPassName2Data';

export const useSearchExamNoPassName2 = () => {
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