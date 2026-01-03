// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oProcGubun } from './FrmCOM3042SSettlementGubunExamRepayData';

export const useFrmCOM3042SSettlementGubunExamRepay = () => {
    const [ds_oProcGubun, setds_oProcGubun] = useState<Ids_oProcGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_radProcGubun, setIsVisible_radProcGubun] = useState(true);

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