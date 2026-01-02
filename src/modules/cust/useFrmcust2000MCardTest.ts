// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCustomer {
    BNM: string;
    CCOURSECD: string;
    CDELDATE: string;
    CDELGUBUN: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTZIPCD: string;
    CFEEYYMM: string;
    CGTMGNO: string;
    CMGNO: string;
    CNO: string;
    COBMGNO: string;
    COVERGUBUN: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
    MINAPFEE: string;
    FMHHPTEL: string;
}

export interface Ids_oFee {
    CFCCGUBUN: string;
    CFCCGUBUNCD: string;
    CFGYEAR: string;
    CFPMMGNO: string;
    CFPMYEAR: string;
    CFSUNAPHALF: string;
    CFSUNAPMONTH: string;
    CMGNO: string;
    MINAPFEE: string;
    SEL: string;
    SUNAPFEE: string;
}

export interface Ids_oSunap {
    CANCELDATE: string;
    CFCMGNO: string;
    CFGROUPMGNO: string;
    CFGUBUN: string;
    CFGUBUNCD: string;
    CFGUBUNCDNM: string;
    CFREGNM: string;
    CFREMARK: string;
    CFREPAYREF: string;
    FEESEQ: string;
    MEMBERGUBUN: string;
    MEMBERGUBUNNM: string;
    MGGTMGNO: string;
    MGGTNM: string;
    PMMGNO: string;
    PMPCORDERNO: string;
    PMYEAR: string;
    PONYDATE: string;
    POSGTMGNO: string;
    POSGTNM: string;
    PROCDATE: string;
    PROCGTMGNO: string;
    PROCGTNM: string;
    PVINFO: string;
    REGDATE: string;
    SETLMGUBUN: string;
    SETLMGUBUNNM: string;
    SUNAPFEE: string;
    SUNAPYEAR: string;
    PMRESULT: string;
    PVVMYEAR: string;
    PVVMBILLTYPE: string;
    PVVMVATNO: string;
}

export interface Ids_oMonthGubun {
    CD: string;
    DATA: string;
}

export interface Ids_iReady {
    SEL: string;
    CFGUBUN: string;
    CMGNO: string;
    CFMGGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CCOURSECD: string;
    CFMEMBERGUBUN: string;
    BNM: string;
    FMNM: string;
    CFPROCAMOUNT: string;
    CFPROCDATE: string;
    CFREMARK: string;
    CHECKDATA: string;
    CFMGGTNM: string;
    CCOURSENM: string;
    CFMEMBERNM: string;
}

export interface Ids_iCustomerFee {
    CFCMGNO: string;
    CFSEQ: string;
    CFSETLMGUBUN: string;
    CFMEMBERGUBUN: string;
    CFGUBUN: string;
    CFGUBUNCD: string;
    CFSUNAPYEAR: string;
    CFSUNAPMONTH: string;
    CFSUNAPHALF: string;
    CFPROCAMOUNT: string;
    CFPROCDATE: string;
    CFPONYGUBUN: string;
    CFPONYDATE: string;
    CFMGGTMGNO: string;
    CFPROCGTMGNO: string;
    CFPOSGTMGNO: string;
    CFPMYEAR: string;
    CFPMMGNO: string;
    CFGROUPMGNO: string;
    CFCANCELDATE: string;
    CFCANCELSABUN: string;
    CFREMARK: string;
    CFREPAYREF: string;
    CFACTIVEGUBUN: string;
    CFREGDATE: string;
    CFREGSABUN: string;
    CFMODDATE: string;
    CFMODSABUN: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CCOURSECD: string;
    BNM: string;
    FMNM: string;
}

export interface Ids_iCustomerFeeBackup {
    CFCMGNO: string;
    CFSEQ: string;
    CFSETLMGUBUN: string;
    CFMEMBERGUBUN: string;
    CFGUBUN: string;
    CFGUBUNCD: string;
    CFSUNAPYEAR: string;
    CFSUNAPMONTH: string;
    CFSUNAPHALF: string;
    CFPROCAMOUNT: string;
    CFPROCDATE: string;
    CFPONYGUBUN: string;
    CFPONYDATE: string;
    CFMGGTMGNO: string;
    CFPROCGTMGNO: string;
    CFPOSGTMGNO: string;
    CFPMYEAR: string;
    CFPMMGNO: string;
    CFGROUPMGNO: string;
    CFCANCELDATE: string;
    CFCANCELSABUN: string;
    CFREMARK: string;
    CFREPAYREF: string;
    CFACTIVEGUBUN: string;
    CFREGDATE: string;
    CFREGSABUN: string;
    CFMODDATE: string;
    CFMODSABUN: string;
    CGTMGNO: string;
    CNO: string;
    CREGCD: string;
    CCOURSECD: string;
    BNM: string;
    FMNM: string;
}

export interface Ids_oPosPrintM {
}

export interface Ids_oFeeMonth {
    CFCCGUBUN: string;
    CFGYEAR: string;
    CFSUNAPHALF: string;
    CFSUNAPMONTH: string;
    CMGNO: string;
    MINAPFEE: string;
    SEL: string;
    SUNAPFEE: string;
}

export interface Ids_oYearbizlink {
}

export interface Ids_iOverFee {
    CFCCGUBUN: string;
    CFGYEAR: string;
    CFSUNAPHALF: string;
    CFSUNAPMONTH: string;
    CMGNO: string;
    MINAPFEE: string;
    SEL: string;
    SUNAPFEE: string;
    VIEWTYPE: string;
}

export interface Ids_oJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_iMunjeCancel {
    CFGROUPMGNO: string;
    CFCANCELGUBUN: string;
    CFCANCELDATE: string;
    CFCANCELSABUN: string;
    CFACTIVEGUBUN: string;
}

export interface Ids_iPrintGoji {
    GTMGNO: string;
    CNO: string;
    OKEY: string;
}

export interface Ids_oPrintGoji {
}

export interface Ids_oCustomerAll {
    BNM: string;
    CCOURSECD: string;
    CDELDATE: string;
    CDELGUBUN: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTZIPCD: string;
    CFEEYYMM: string;
    CGTMGNO: string;
    CMGNO: string;
    CNO: string;
    COBMGNO: string;
    COVERGUBUN: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSGUBUN: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
}

export interface Ids_oAllPrintGoji {
}

export interface Ids_ioVirtualAccoutAllocation {
    SCMGNO: string;
    SBNM: string;
    SJIBU: string;
}

export interface Ids_oPosVatH {
}

export const useFrmcust2000MCardTest = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCustomer, setds_oCustomer] = useState<Ids_oCustomer[]>([]);
    const [ds_oFee, setds_oFee] = useState<Ids_oFee[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oMonthGubun, setds_oMonthGubun] = useState<Ids_oMonthGubun[]>([]);
    const [ds_iReady, setds_iReady] = useState<Ids_iReady[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_iCustomerFeeBackup, setds_iCustomerFeeBackup] = useState<Ids_iCustomerFeeBackup[]>([]);
    const [ds_oPosPrintM, setds_oPosPrintM] = useState<Ids_oPosPrintM[]>([]);
    const [ds_oFeeMonth, setds_oFeeMonth] = useState<Ids_oFeeMonth[]>([]);
    const [ds_oYearbizlink, setds_oYearbizlink] = useState<Ids_oYearbizlink[]>([]);
    const [ds_iOverFee, setds_iOverFee] = useState<Ids_iOverFee[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_iMunjeCancel, setds_iMunjeCancel] = useState<Ids_iMunjeCancel[]>([]);
    const [ds_iPrintGoji, setds_iPrintGoji] = useState<Ids_iPrintGoji[]>([]);
    const [ds_oPrintGoji, setds_oPrintGoji] = useState<Ids_oPrintGoji[]>([]);
    const [ds_oCustomerAll, setds_oCustomerAll] = useState<Ids_oCustomerAll[]>([]);
    const [ds_oAllPrintGoji, setds_oAllPrintGoji] = useState<Ids_oAllPrintGoji[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_oPosVatH, setds_oPosVatH] = useState<Ids_oPosVatH[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCustomer([]);
            setds_oFee([]);
            setds_oSunap([]);
            setds_oMonthGubun([]);
            setds_iReady([]);
            setds_iCustomerFee([]);
            setds_iCustomerFeeBackup([]);
            setds_oPosPrintM([]);
            setds_oFeeMonth([]);
            setds_oYearbizlink([]);
            setds_iOverFee([]);
            setds_oJibuGubun([]);
            setds_iMunjeCancel([]);
            setds_iPrintGoji([]);
            setds_oPrintGoji([]);
            setds_oCustomerAll([]);
            setds_oAllPrintGoji([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_oPosVatH([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button0_OnClick = () => {
        console.log('Button0_OnClick clicked');
    };
    const Button1_OnClick = () => {
        console.log('Button1_OnClick clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCustomer,
        ds_oFee,
        ds_oSunap,
        ds_oMonthGubun,
        ds_iReady,
        ds_iCustomerFee,
        ds_iCustomerFeeBackup,
        ds_oPosPrintM,
        ds_oFeeMonth,
        ds_oYearbizlink,
        ds_iOverFee,
        ds_oJibuGubun,
        ds_iMunjeCancel,
        ds_iPrintGoji,
        ds_oPrintGoji,
        ds_oCustomerAll,
        ds_oAllPrintGoji,
        ds_ioVirtualAccoutAllocation,
        ds_oPosVatH,
        Button0_OnClick,
        Button1_OnClick,
    };
};