// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0383SRepayInfoData';

export const useFrmtraining0383SRepayInfo = () => {
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