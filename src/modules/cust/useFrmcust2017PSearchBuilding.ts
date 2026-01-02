// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCustList {
    SEL: string;
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
    FMPERSONKEY: string;
    OLHNM: string;
    SEL: string;
    FMBIRTHDAY: string;
    BIRTHDAY: string;
}

export interface Ids_oCustomerStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oBizGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oManagerListCopy {
}

export interface Ids_oManagerListCopy1 {
}

export const useFrmcust2017PSearchBuilding = () => {
    const [ds_oCustList, setds_oCustList] = useState<Ids_oCustList[]>([]);
    const [ds_oManagerList, setds_oManagerList] = useState<Ids_oManagerList[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oManagerListCopy, setds_oManagerListCopy] = useState<Ids_oManagerListCopy[]>([]);
    const [ds_oManagerListCopy1, setds_oManagerListCopy1] = useState<Ids_oManagerListCopy1[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCustList([]);
            setds_oManagerList([]);
            setds_oCustomerStatus([]);
            setds_oBizGubun([]);
            setds_oManagerListCopy([]);
            setds_oManagerListCopy1([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCustList,
        ds_oManagerList,
        ds_oCustomerStatus,
        ds_oBizGubun,
        ds_oManagerListCopy,
        ds_oManagerListCopy1,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};