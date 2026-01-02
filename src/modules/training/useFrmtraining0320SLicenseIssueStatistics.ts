// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0320SLicenseIssueStatisticsData';

export const useFrmtraining0320SLicenseIssueStatistics = () => {
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