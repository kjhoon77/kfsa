// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCustList {
    ADDR: string;
    BBIZCD: string;
    BMGNO: string;
    BNM: string;
    BTEL: string;
    DPERMISSIONNO: string;
}

export interface Ids_oManagerList {
    BADDR1: string;
    BADDR2: string;
    BNM: string;
    BTEL: string;
    BZIPCD: string;
    CCOCD: string;
    CCOURSECD: string;
    CFIREMGNO: string;
    CGTMGNO: string;
    CNO: string;
    COVERCMGNO: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    EPPASSDATE: string;
    FMHSTARTDATE: string;
    FMNM: string;
    FMBIRTHDAY: string;
    OLHNM: string;
    BIRTHDAY: string;
    FMPERSONKEY: string;
}

export interface Ids_oCustomerStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust0010PBCSearchbuilding = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oCustList, setds_oCustList] = useState<Ids_oCustList[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_oCustList([]);
            setds_oManagerList([]);
            setds_oCustomerStatus([]);
            setds_oBizGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_oCustList,
        ds_oManagerList,
        ds_oCustomerStatus,
        ds_oBizGubun,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};