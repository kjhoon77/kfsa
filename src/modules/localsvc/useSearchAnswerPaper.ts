// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchAnswerPaperData';

export const useSearchAnswerPaper = () => {
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