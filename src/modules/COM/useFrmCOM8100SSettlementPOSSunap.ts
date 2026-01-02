// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBankSunapGubun, Ids_oSunapGubun, Ids_oRepaySunapGubun } from './FrmCOM8100SSettlementPOSSunapData';

export const useFrmCOM8100SSettlementPOSSunap = () => {
    const [ds_oBankSunapGubun, setds_oBankSunapGubun] = useState<Ids_oBankSunapGubun[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oRepaySunapGubun, setds_oRepaySunapGubun] = useState<Ids_oRepaySunapGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divSunabDtl, setIsVisible_divSunabDtl] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBankSunapGubun([]);
            setds_oSunapGubun([]);
            setds_oRepaySunapGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oBankSunapGubun,
        ds_oSunapGubun,
        ds_oRepaySunapGubun,
        isVisible_divSunabDtl,
        setIsVisible_divSunabDtl,
    };
};