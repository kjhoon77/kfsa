// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBankSunapGubun, Ids_oSunapGubun, Ids_oRepaySunapGubun } from './FrmCOM3100SSettlementPOSSunapData';

export const useFrmCOM3100SSettlementPOSSunap = () => {
    const [ds_oBankSunapGubun, setds_oBankSunapGubun] = useState<Ids_oBankSunapGubun[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oRepaySunapGubun, setds_oRepaySunapGubun] = useState<Ids_oRepaySunapGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox5, setIsVisible_shpGubunBox5] = useState(true);
    const [isVisible_lbBankSunapGubun, setIsVisible_lbBankSunapGubun] = useState(true);
    const [isVisible_lbSunapGubun, setIsVisible_lbSunapGubun] = useState(true);
    const [isVisible_radSunapGubun, setIsVisible_radSunapGubun] = useState(true);
    const [isVisible_lbSunab, setIsVisible_lbSunab] = useState(true);
    const [isVisible_divSunabDtl, setIsVisible_divSunabDtl] = useState(true);
    const [isVisible_radBankSunapGubun, setIsVisible_radBankSunapGubun] = useState(true);
    const [isVisible_lbSunapAmount, setIsVisible_lbSunapAmount] = useState(false);

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
        isVisible_shpGubunBox5,
        setIsVisible_shpGubunBox5,
        isVisible_lbBankSunapGubun,
        setIsVisible_lbBankSunapGubun,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_radSunapGubun,
        setIsVisible_radSunapGubun,
        isVisible_lbSunab,
        setIsVisible_lbSunab,
        isVisible_divSunabDtl,
        setIsVisible_divSunabDtl,
        isVisible_radBankSunapGubun,
        setIsVisible_radBankSunapGubun,
        isVisible_lbSunapAmount,
        setIsVisible_lbSunapAmount,
    };
};