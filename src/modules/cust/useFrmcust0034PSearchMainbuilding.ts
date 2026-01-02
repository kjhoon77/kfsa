// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSubCustList {
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

export interface Ids_oBnmCode {
}

export interface Ids_oMainCustList {
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

export interface Ids_oSearchGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust0034PSearchMainbuilding = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_oSubCustList, setds_oSubCustList] = useState<Ids_oSubCustList[]>([]);
    const [ds_oCustomerStatus, setds_oCustomerStatus] = useState<Ids_oCustomerStatus[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [ds_oBnmCode, setds_oBnmCode] = useState<Ids_oBnmCode[]>([]);
    const [ds_oMainCustList, setds_oMainCustList] = useState<Ids_oMainCustList[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_oSubCustList([]);
            setds_oCustomerStatus([]);
            setds_oBizGubun([]);
            setds_oBnmCode([]);
            setds_oMainCustList([]);
            setds_oSearchGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMainSelect_OnClick = () => {
        console.log('btnMainSelect_OnClick clicked');
    };
    const btnNewAdd_OnClick = () => {
        console.log('btnNewAdd_OnClick clicked');
    };
    const btnSubSelect_OnClick = () => {
        console.log('btnSubSelect_OnClick clicked');
    };
    const chkCust_OnClick = () => {
        console.log('chkCust_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_MainSearch = () => {
        console.log('lfn_MainSearch clicked');
    };
    const lfn_SubSearch = () => {
        console.log('lfn_SubSearch clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_oSubCustList,
        ds_oCustomerStatus,
        ds_oBizGubun,
        ds_oBnmCode,
        ds_oMainCustList,
        ds_oSearchGubun,
        btnMainSelect_OnClick,
        btnNewAdd_OnClick,
        btnSubSelect_OnClick,
        chkCust_OnClick,
        lfn_End,
        lfn_MainSearch,
        lfn_SubSearch,
    };
};