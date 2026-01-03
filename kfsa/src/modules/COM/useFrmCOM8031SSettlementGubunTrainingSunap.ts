// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oProcGubun } from './FrmCOM8031SSettlementGubunTrainingSunapData';

export const useFrmCOM8031SSettlementGubunTrainingSunap = () => {
    const [ds_oProcGubun, setds_oProcGubun] = useState<Ids_oProcGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_radProcGubun, setIsVisible_radProcGubun] = useState(true);
    const [isVisible_edTrainingDateGubun, setIsVisible_edTrainingDateGubun] = useState(true);

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
        isVisible_radProcGubun,
        setIsVisible_radProcGubun,
        isVisible_edTrainingDateGubun,
        setIsVisible_edTrainingDateGubun,
    };
};