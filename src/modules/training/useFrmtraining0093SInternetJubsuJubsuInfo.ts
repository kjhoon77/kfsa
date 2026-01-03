// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0093SInternetJubsuJubsuInfoData';

export const useFrmtraining0093SInternetJubsuJubsuInfo = () => {
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