// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oModifyHistory {
    DTL: string;
    MHAFTERDATA: string;
    MHBEFOREDATA: string;
    MHCOLUMN: string;
    MHGUBUN: string;
    MHGUBUNNM: string;
    MHKEY: string;
    MHMGNO: string;
    MHPROCDATE: string;
    MHPROCIP: string;
    MHPROCSABUN: string;
    MHWORKGUBUN: string;
    PDEPTCD: string;
    PDEPTNM: string;
    PPERSONNM: string;
    PPOSITNNM: string;
}

export const useFrmCOM7000PModifyHistoryList = () => {
    const [ds_oModifyHistory, setds_oModifyHistory] = useState<Ids_oModifyHistory[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oModifyHistory([]);
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
        ds_oModifyHistory,
        btnMutilSort_OnClick,
        lfn_End,
    };
};