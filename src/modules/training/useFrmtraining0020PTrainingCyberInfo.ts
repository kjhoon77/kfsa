// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCyberLearning } from './Frmtraining0020PTrainingCyberInfoData';

export const useFrmtraining0020PTrainingCyberInfo = () => {
    const [ds_oCyberLearning, setds_oCyberLearning] = useState<Ids_oCyberLearning[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCyberLearning([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oCyberLearning,
        lfn_End,
    };
};