// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oOverBizList {
    BBIZCD: string;
    BNM: string;
    CCOURSECD: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSGUBUN: string;
    FMHADDR: string;
    FMNM: string;
    FMBIRTHDAY: string;
    GUBUN: string;
    OBSTARTDATE: string;
    OBENDDATE: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust0014POverStatus = () => {
    const [ds_oOverBizList, setds_oOverBizList] = useState<Ids_oOverBizList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oOverBizList([]);
            setds_oBizGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oOverBizList,
        ds_oBizGubun,
        lfn_End,
    };
};