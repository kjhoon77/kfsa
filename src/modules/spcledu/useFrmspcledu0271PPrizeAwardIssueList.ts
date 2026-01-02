// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPrize {
    CREATE_DATE: string;
    CREATE_GUBUN: string;
    CREATE_ID: string;
    CREATE_IP: string;
    JJIBUCD: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    MODIFY_IP: string;
    ZBUNJI: string;
    SIKUDONG: string;
    ZHO: string;
    ZREGIONCD: string;
    ZSEQ: string;
    ZZIPCD: string;
}

export interface Ids_oPrizeGubun {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0271PPrizeAwardIssueList = () => {
    const [ds_oPrize, setds_oPrize] = useState<Ids_oPrize[]>([]);
    const [ds_oPrizeGubun, setds_oPrizeGubun] = useState<Ids_oPrizeGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPrize([]);
            setds_oPrizeGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oPrize,
        ds_oPrizeGubun,
        btnMutilSort_OnClick,
        lfn_End,
    };
};