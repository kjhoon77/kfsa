// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining1030MInternetRepayBatchProcData';

export const useFrmtraining1030MInternetRepayBatchProc = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        tabValue_tabTab,
        setTabValue_tabTab,
    };
};