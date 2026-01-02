// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './InsertAnswerPaperData';

export const useInsertAnswerPaper = () => {
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