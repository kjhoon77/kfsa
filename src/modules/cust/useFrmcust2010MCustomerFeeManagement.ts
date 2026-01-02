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
    PVVMMGNO: string;
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
    PVVMMGNO: string;
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

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export const useFrmcust2010MCustomerFeeManagement = () => {
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
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
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
            setds_ioYear([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAllReady_OnClick = () => {
        console.log('btnAllReady_OnClick clicked');
    };
    const btnBuildingNm_OnClick = () => {
        console.log('btnBuildingNm_OnClick clicked');
    };
    const btnChangeSunapInfo_OnClick = () => {
        console.log('btnChangeSunapInfo_OnClick clicked');
    };
    const btnCustomerLink_OnClick = () => {
        console.log('btnCustomerLink_OnClick clicked');
    };
    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };
    const btnManagerNm_OnClick = () => {
        console.log('btnManagerNm_OnClick clicked');
    };
    const btnManagerNo_OnClick = () => {
        console.log('btnManagerNo_OnClick clicked');
    };
    const btnMunje_OnClick = () => {
        console.log('btnMunje_OnClick clicked');
    };
    const btnOldPrintGoji_OnClick = () => {
        console.log('btnOldPrintGoji_OnClick clicked');
    };
    const btnOverBiz_OnClick = () => {
        console.log('btnOverBiz_OnClick clicked');
    };
    const btnOverSunapAdd_OnClick = () => {
        console.log('btnOverSunapAdd_OnClick clicked');
    };
    const btnOverSunapDel_OnClick = () => {
        console.log('btnOverSunapDel_OnClick clicked');
    };
    const btnPosDel_OnClick = () => {
        console.log('btnPosDel_OnClick clicked');
    };
    const btnPosResultList_OnClick = () => {
        console.log('btnPosResultList_OnClick clicked');
    };
    const btnPos_OnClick = () => {
        console.log('btnPos_OnClick clicked');
    };
    const btnPrintAllReadyGoji_OnClick = () => {
        console.log('btnPrintAllReadyGoji_OnClick clicked');
    };
    const btnPrintEstimate_OnClick = () => {
        console.log('btnPrintEstimate_OnClick clicked');
    };
    const btnPrintGojiImage_OnClick = () => {
        console.log('btnPrintGojiImage_OnClick clicked');
    };
    const btnPrintGoji_OnClick = () => {
        console.log('btnPrintGoji_OnClick clicked');
    };
    const btnPrintReRctPDF_OnClick = () => {
        console.log('btnPrintReRctPDF_OnClick clicked');
    };
    const btnPrintReRct_OnClick = () => {
        console.log('btnPrintReRct_OnClick clicked');
    };
    const btnProcRct_OnClick = () => {
        console.log('btnProcRct_OnClick clicked');
    };
    const btnRepay_OnClick = () => {
        console.log('btnRepay_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const btnSunapPosInfo_OnClick = () => {
        console.log('btnSunapPosInfo_OnClick clicked');
    };
    const btnSunapReady_OnClick = () => {
        console.log('btnSunapReady_OnClick clicked');
    };
    const lfn_CancelConfirm = () => {
        console.log('lfn_CancelConfirm clicked');
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
        ds_ioYear,
        btnAllReady_OnClick,
        btnBuildingNm_OnClick,
        btnChangeSunapInfo_OnClick,
        btnCustomerLink_OnClick,
        btnDel_OnClick,
        btnManagerNm_OnClick,
        btnManagerNo_OnClick,
        btnMunje_OnClick,
        btnOldPrintGoji_OnClick,
        btnOverBiz_OnClick,
        btnOverSunapAdd_OnClick,
        btnOverSunapDel_OnClick,
        btnPosDel_OnClick,
        btnPosResultList_OnClick,
        btnPos_OnClick,
        btnPrintAllReadyGoji_OnClick,
        btnPrintEstimate_OnClick,
        btnPrintGojiImage_OnClick,
        btnPrintGoji_OnClick,
        btnPrintReRctPDF_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnRepay_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSunapPosInfo_OnClick,
        btnSunapReady_OnClick,
        lfn_CancelConfirm,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};