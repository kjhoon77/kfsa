// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamNoPassNameData';

export const useSearchExamNoPassName = () => {
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