// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iReprodection {
    STARTDATE: string;
    PROCDATE: string;
    GTMGNO: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_iCusEduChk {
    CECCHKGUBUN: string;
    CECCLOSEGUBUN: string;
    CECGTMGNO: string;
    CECYEAR: string;
    CECMONTH: string;
}

export interface Ids_oCusEduChk {
    CECCHKGUBUN: string;
    CECCLOSEGUBUN: string;
    CECGTMGNO: string;
    CECYEAR: string;
    CECMONTH: string;
}

export const useFrmcust1220MEduMonthReproduction = () => {
    const [ds_iReprodection, setds_iReprodection] = useState<Ids_iReprodection[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_iCusEduChk, setds_iCusEduChk] = useState<Ids_iCusEduChk[]>([]);
    const [ds_oCusEduChk, setds_oCusEduChk] = useState<Ids_oCusEduChk[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iReprodection([]);
            setds_oJibu([]);
            setds_iCusEduChk([]);
            setds_oCusEduChk([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFinishCancel_OnClick = () => {
        console.log('btnFinishCancel_OnClick clicked');
    };
    const btnFinishProc_OnClick = () => {
        console.log('btnFinishProc_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_iReprodection,
        ds_oJibu,
        ds_iCusEduChk,
        ds_oCusEduChk,
        btnFinishCancel_OnClick,
        btnFinishProc_OnClick,
        lfn_End,
        lfn_Save,
    };
};