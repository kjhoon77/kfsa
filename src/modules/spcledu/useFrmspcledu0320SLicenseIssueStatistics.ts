// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0320SLicenseIssueStatisticsData';

export const useFrmspcledu0320SLicenseIssueStatistics = () => {
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