// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchRepeatNoData';

export const useSearchRepeatNo = () => {
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