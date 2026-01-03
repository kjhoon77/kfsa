// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBankSunapGubun, Ids_oSunapGubun, Ids_oRepaySunapGubun } from './FrmCOM8100SSettlementPOSSunapData';

export const useFrmCOM8100SSettlementPOSSunap = () => {
    const [ds_oBankSunapGubun, setds_oBankSunapGubun] = useState<Ids_oBankSunapGubun[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oRepaySunapGubun, setds_oRepaySunapGubun] = useState<Ids_oRepaySunapGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox5, setRawVisible_shpGubunBox5] = useState(true);
    const [rawVisible_lbBankSunapGubun, setRawVisible_lbBankSunapGubun] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_radSunapGubun, setRawVisible_radSunapGubun] = useState(true);
    const [rawVisible_lbSunab, setRawVisible_lbSunab] = useState(true);
    const [rawVisible_divSunabDtl, setRawVisible_divSunabDtl] = useState(true);
    const [rawVisible_radBankSunapGubun, setRawVisible_radBankSunapGubun] = useState(true);
    const [rawVisible_lbSunapingAmount, setRawVisible_lbSunapingAmount] = useState(false);
    const isVisible_shpGubunBox5 = rawVisible_shpGubunBox5;
    const setIsVisible_shpGubunBox5 = setRawVisible_shpGubunBox5;
    const isVisible_lbBankSunapGubun = rawVisible_lbBankSunapGubun && rawVisible_shpGubunBox5;
    const setIsVisible_lbBankSunapGubun = setRawVisible_lbBankSunapGubun;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_shpGubunBox5;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_radSunapGubun = rawVisible_radSunapGubun && rawVisible_shpGubunBox5;
    const setIsVisible_radSunapGubun = setRawVisible_radSunapGubun;
    const isVisible_lbSunab = rawVisible_lbSunab;
    const setIsVisible_lbSunab = setRawVisible_lbSunab;
    const isVisible_divSunabDtl = rawVisible_divSunabDtl && rawVisible_shpGubunBox5;
    const setIsVisible_divSunabDtl = setRawVisible_divSunabDtl;
    const isVisible_radBankSunapGubun = rawVisible_radBankSunapGubun && rawVisible_shpGubunBox5;
    const setIsVisible_radBankSunapGubun = setRawVisible_radBankSunapGubun;
    const isVisible_lbSunapingAmount = rawVisible_lbSunapingAmount && rawVisible_shpGubunBox5;
    const setIsVisible_lbSunapingAmount = setRawVisible_lbSunapingAmount;

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
        isVisible_lbSunapingAmount,
        setIsVisible_lbSunapingAmount,
    };
};