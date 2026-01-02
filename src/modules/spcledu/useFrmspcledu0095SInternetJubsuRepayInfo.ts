// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingRepayFee } from './Frmspcledu0095SInternetJubsuRepayInfoData';

export const useFrmspcledu0095SInternetJubsuRepayInfo = () => {
    const [ds_oTrainingRepayFee, setds_oTrainingRepayFee] = useState<Ids_oTrainingRepayFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingRepayFee([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oTrainingRepayFee,
    };
};