// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0330SLicenseIssueStatisticsData';

export const useFrmtraining0330SLicenseIssueStatistics = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_edLicenseName, setIsVisible_edLicenseName] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_edLicenseName,
        setIsVisible_edLicenseName,
    };
};