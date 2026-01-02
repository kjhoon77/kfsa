// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmcust2021PPosResultMoneyData';

export const useFrmcust2021PPosResultMoney = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        lfn_End,
    };
};