// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0092SInternetJubsuChangeInfoData';

export const useFrmspcledu0092SInternetJubsuChangeInfo = () => {
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