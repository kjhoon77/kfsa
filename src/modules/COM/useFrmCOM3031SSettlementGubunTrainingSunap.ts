// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oProcGubun } from './FrmCOM3031SSettlementGubunTrainingSunapData';

export const useFrmCOM3031SSettlementGubunTrainingSunap = () => {
    const [ds_oProcGubun, setds_oProcGubun] = useState<Ids_oProcGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProcGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oProcGubun,
    };
};