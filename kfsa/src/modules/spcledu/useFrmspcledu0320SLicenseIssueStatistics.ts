// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0320SLicenseIssueStatisticsData';

export const useFrmspcledu0320SLicenseIssueStatistics = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
    };
};