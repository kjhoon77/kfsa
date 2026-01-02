// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './SearchCust6400ChangeMListData';

export const useSearchCust6400ChangeMList = () => {
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