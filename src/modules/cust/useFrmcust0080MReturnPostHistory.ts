// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oOrder {
    CD: string;
    DATA: string;
}

export interface Ids_oCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oInput {
    CD: string;
    DATA: string;
}

export interface Ids_oPostReturn {
    BMGNO: string;
    BNM: string;
    CBMGNO: string;
    CCOURSECD: string;
    CEDUPOSTADDR1: string;
    CEDUPOSTADDR2: string;
    CEDUPOSTGUBUN: string;
    CEDUPOSTPLACE: string;
    CEDUPOSTZIPCD: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTGUBUN: string;
    CFEEPOSTPLACE: string;
    CFEEPOSTZIPCD: string;
    CGTMGNO: string;
    CMGNO: string;
    CNO: string;
    CPOSTREQGUBUN: string;
    CREGCD: string;
    CSTATUSGUBUN: string;
    GTDEPTNM: string;
    PRBIZGUBUN: string;
    PRIMGAE: string;
    PRPDDATE: string;
    PRPDGUBUN: string;
    PRPDMGNO: string;
    PRPRINTNO: string;
    PRSENDDATE: string;
    PRCNT: string;
    MINAPFEE: string;
}

export interface Ids_oPrint {
    CD: string;
    DATA: string;
}

export interface Ids_oMinap {
    CD: string;
    DATA: string;
}

export const useFrmcust0080MReturnPostHistory = () => {
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMemberGubun, setds_oMemberGubun] = useState<Ids_oMemberGubun[]>([]);
    const [ds_oOrder, setds_oOrder] = useState<Ids_oOrder[]>([]);
    const [ds_oCourseYn, setds_oCourseYn] = useState<Ids_oCourseYn[]>([]);
    const [ds_oInput, setds_oInput] = useState<Ids_oInput[]>([]);
    const [ds_oPostReturn, setds_oPostReturn] = useState<Ids_oPostReturn[]>([]);
    const [ds_oPrint, setds_oPrint] = useState<Ids_oPrint[]>([]);
    const [ds_oMinap, setds_oMinap] = useState<Ids_oMinap[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oMemberGubun([]);
            setds_oOrder([]);
            setds_oCourseYn([]);
            setds_oInput([]);
            setds_oPostReturn([]);
            setds_oPrint([]);
            setds_oMinap([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btn_PostReturnImage_OnClick = () => {
        console.log('btn_PostReturnImage_OnClick clicked');
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
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oMemberGubun,
        ds_oOrder,
        ds_oCourseYn,
        ds_oInput,
        ds_oPostReturn,
        ds_oPrint,
        ds_oMinap,
        btnMutilSort_OnClick,
        btn_PostReturnImage_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};