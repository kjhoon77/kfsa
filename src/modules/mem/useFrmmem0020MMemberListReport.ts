// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioDataGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oCustomerList {
    CNO_BUNHO: string;
    GTTEAMNM: string;
    GTMGNO: string;
    GTPRTSEQ: string;
    CCOURSECD: string;
    CREGCD: string;
    RCNM: string;
    CNO: string;
    FMBUILDINGNM: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMRESIDENTERR: string;
    FMHADDR: string;
    FMHSTARTDATE: string;
    FMHTEL: string;
    CSTUSGUBUN: string;
    BIRTHDAY: string;
    POCOUNT: string;
    FMHHPTEL: string;
    FMHMAIL: string;
    EPPASSDATE: string;
    ADCONTENT: string;
    ADREGDATE: string;
    MINAPFEE: string;
    BZIPCD: string;
    FSTNSMALL_NM: string;
    FMPERSONKEY: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYnD {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseD {
    CD: string;
    DATA: string;
}

export interface Ids_oPersonGubun {
    CD: string;
    DATA: string;
    PCD: string;
}

export interface Ids_ioExceptGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioMinapfee {
    CD: string;
    DATA: string;
}

export interface Ids_ioAgencyGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioGijun {
    CD: string;
    DATA: string;
}

export interface Ids_oBonbu {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_oFireCd {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export const useFrmmem0020MMemberListReport = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioDataGubun, setds_ioDataGubun] = useState<Ids_ioDataGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCustomerList, setds_oCustomerList] = useState<Ids_oCustomerList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioCourseYnD, setds_ioCourseYnD] = useState<Ids_ioCourseYnD[]>([]);
    const [ds_ioCourseD, setds_ioCourseD] = useState<Ids_ioCourseD[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_ioExceptGubun, setds_ioExceptGubun] = useState<Ids_ioExceptGubun[]>([]);
    const [ds_ioMinapfee, setds_ioMinapfee] = useState<Ids_ioMinapfee[]>([]);
    const [ds_ioAgencyGubun, setds_ioAgencyGubun] = useState<Ids_ioAgencyGubun[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioChoiceYn([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_ioDataGubun([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_oAdditionInfo([]);
            setds_oRegion([]);
            setds_oCustomerList([]);
            setds_oJibu([]);
            setds_ioCourseYnD([]);
            setds_ioCourseD([]);
            setds_oPersonGubun([]);
            setds_ioExceptGubun([]);
            setds_ioMinapfee([]);
            setds_ioAgencyGubun([]);
            setds_ioGijun([]);
            setds_oBonbu([]);
            setds_oFireCd([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioGubun,
        ds_ioChoiceYn,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_ioDataGubun,
        ds_ioReport,
        ds_ioCourse,
        ds_oAdditionInfo,
        ds_oRegion,
        ds_oCustomerList,
        ds_oJibu,
        ds_ioCourseYnD,
        ds_ioCourseD,
        ds_oPersonGubun,
        ds_ioExceptGubun,
        ds_ioMinapfee,
        ds_ioAgencyGubun,
        ds_ioGijun,
        ds_oBonbu,
        ds_oFireCd,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};