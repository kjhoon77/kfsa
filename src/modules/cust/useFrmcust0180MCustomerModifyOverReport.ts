// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    JIBU: string;
    YEAR: string;
    BFYEAR: string;
    MONTH: string;
    DATE_FR: string;
    DATE_TO: string;
    BFMONTH: string;
}

export interface Ids_CustomerList {
    ADD_COVER_CNT: string;
    ADD_MEMBER_CNT: string;
    BF_COVER_CNT: string;
    BF_MEMBER_CNT: string;
    CGROUPCD: string;
    CLAS: string;
    CLAS_NM: string;
    DEL_CNT0: string;
    DEL_CNT1: string;
    DEL_CNT2: string;
    DEL_CNT3: string;
    DEL_CNT4: string;
    DEL_CNT5: string;
    DEL_TOT_CNT: string;
    GTPRTSEQ: string;
    GTTEAMNM: string;
    MEMBER_GUBUN: string;
    MEMBER_GUBUN_NM: string;
    NEW_MEMBER_CNT: string;
    TO_COVER_CNT: string;
    TO_MEMBER_CNT: string;
}

export interface Ids_iCustomerInsert {
}

export interface Ids_Customer {
}

export const useFrmcust0180MCustomerModifyOverReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_CustomerList, setds_CustomerList] = useState<Ids_CustomerList[]>([]);
    const [ds_iCustomerInsert, setds_iCustomerInsert] = useState<Ids_iCustomerInsert[]>([]);
    const [ds_Customer, setds_Customer] = useState<Ids_Customer[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_SearchJogeon([]);
            setds_CustomerList([]);
            setds_iCustomerInsert([]);
            setds_Customer([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_SearchJogeon,
        ds_CustomerList,
        ds_iCustomerInsert,
        ds_Customer,
        btnExcell_OnClick,
        lfn_End,
        lfn_Print,
        lfn_Save,
    };
};