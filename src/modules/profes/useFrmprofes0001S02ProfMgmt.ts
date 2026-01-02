// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfPersonLisence, Ids_oProfUseYn } from './Frmprofes0001S02ProfMgmtData';

export const useFrmprofes0001S02ProfMgmt = () => {
    const [ds_ioProfPersonLisence, setds_ioProfPersonLisence] = useState<Ids_ioProfPersonLisence[]>([]);
    const [ds_oProfUseYn, setds_oProfUseYn] = useState<Ids_oProfUseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfPersonLisence([]);
            setds_oProfUseYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioProfPersonLisence,
        ds_oProfUseYn,
    };
};