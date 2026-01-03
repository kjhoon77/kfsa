// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchExamOrderLocalListData';

export const useSearchExamOrderLocalList = () => {
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