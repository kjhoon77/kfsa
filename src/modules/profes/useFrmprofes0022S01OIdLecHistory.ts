// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmprofes0022S01OIdLecHistoryData';

export const useFrmprofes0022S01OIdLecHistory = () => {
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