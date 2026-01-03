// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oProcGubun } from './FrmCOM3032SSettlementGubunExamSunapData';

export const useFrmCOM3032SSettlementGubunExamSunap = () => {
    const [ds_oProcGubun, setds_oProcGubun] = useState<Ids_oProcGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_radProcGubun, setRawVisible_radProcGubun] = useState(true);
    const isVisible_radProcGubun = rawVisible_radProcGubun;
    const setIsVisible_radProcGubun = setRawVisible_radProcGubun;

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
    };
};