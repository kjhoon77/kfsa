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

export interface Ids_oManagerList {
}

export interface Ids_oChangeHistory {
}

export interface Ids_oMemberH {
}

export const useFrmcust0013PCustomerHistory = () => {
    const [ds_oModifyHistory, setds_oModifyHistory] = useState<Ids_oModifyHistory[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oChangeHistory, setds_oChangeHistory] = useState<Ids_oChangeHistory[]>([]);
    const [ds_oMemberH, setds_oMemberH] = useState<Ids_oMemberH[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oModifyHistory([]);
            setds_oManagerList([]);
            setds_oChangeHistory([]);
            setds_oMemberH([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oModifyHistory,
        ds_oManagerList,
        ds_oChangeHistory,
        ds_oMemberH,
        lfn_End,
    };
};