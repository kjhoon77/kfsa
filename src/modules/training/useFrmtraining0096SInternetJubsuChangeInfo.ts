// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0096SInternetJubsuChangeInfoData';

export const useFrmtraining0096SInternetJubsuChangeInfo = () => {
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