// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0384SRepayButtonData';

export const useFrmtraining0384SRepayButton = () => {
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