// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './InsertServerSendHData';

export const useInsertServerSendH = () => {
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