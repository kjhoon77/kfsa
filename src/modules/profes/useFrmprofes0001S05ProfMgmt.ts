// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfPersonEdu, Ids_oProfUseYn } from './Frmprofes0001S05ProfMgmtData';

export const useFrmprofes0001S05ProfMgmt = () => {
    const [ds_ioProfPersonEdu, setds_ioProfPersonEdu] = useState<Ids_ioProfPersonEdu[]>([]);
    const [ds_oProfUseYn, setds_oProfUseYn] = useState<Ids_oProfUseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfPersonEdu([]);
            setds_oProfUseYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioProfPersonEdu,
        ds_oProfUseYn,
    };
};