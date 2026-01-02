// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oRecieptGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSunap {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPosJibu {
}

export interface Ids_oInstallment {
    CD: string;
    DATA: string;
}

export interface Ids_oCashGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oYear {
    CD: string;
    DATA: string;
}

export interface Ids_oMonth {
    CD: string;
    DATA: string;
}

export interface Ids_oCashYn {
    CD: string;
    DATA: string;
}

export interface Ids_oBank {
    CD: string;
    DATA: string;
}

export interface Ids_ioCustomerFee {
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

export interface Ids_ioPosPrintM {
    PMYEAR: string;
    PMMGNO: string;
    PMINPUT: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPROCDATE: string;
    PMPIID: string;
    PMPGMID: string;
    PMPGMPK: string;
    PMBUYER: string;
    PMCLAS: string;
    PMPGMGUBUN: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    PMAMT: string;
    PMVAT: string;
    PMPAYMENTFLAG: string;
    PMRESULT: string;
    PCUSERTYPE: string;
    PCSOCIALBUSINESSNO: string;
    PCCARDINSTALL: string;
    PCCLOSEDATE: string;
    PCBANKCD: string;
    PCBANKNM: string;
    PMPCSEQ: string;
    PMORGGUBUN: string;
    PCFLAG: string;
    PCACCOUNT: string;
}

export interface Ids_ioPosPayment {
    PPPMYEAR: string;
    PPPMMGNO: string;
    PPSEQ: string;
    PPNM: string;
    PPUNITAMT: string;
    PPQTY: string;
    PPTOTAMT: string;
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

export interface Ids_oPmMgno {
    PMYEAR: string;
    PMMGNO: string;
}

export interface Ids_oGroupNo {
    CFGROUPMGNO: string;
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

export interface Ids_ioPosPrintMBackup {
    PMYEAR: string;
    PMMGNO: string;
    PMINPUT: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPROCDATE: string;
    PMPIID: string;
    PMPGMID: string;
    PMPGMPK: string;
    PMBUYER: string;
    PMCLAS: string;
    PMPGMGUBUN: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    PMAMT: string;
    PMVAT: string;
    PMPAYMENTFLAG: string;
    PMRESULT: string;
    PCUSERTYPE: string;
    PCSOCIALBUSINESSNO: string;
    PCCARDINSTALL: string;
    PCCLOSEDATE: string;
    PCBANKCD: string;
}

export interface Ids_ioPosPaymentBackup {
    PPPMYEAR: string;
    PPPMMGNO: string;
    PPSEQ: string;
    PPNM: string;
    PPUNITAMT: string;
    PPQTY: string;
    PPTOTAMT: string;
}

export interface Ids_iReadyBackup {
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
}

export interface Ids_oPosCas {
    PCPMYEAR: string;
    PCPMMGNO: string;
    PCCLOSEDATE: string;
    PCFLAG: string;
    PCACCOUNT: string;
    PCBANKCD: string;
    PCBANKNM: string;
    PCAMOUNT: string;
    PCBANKDATE: string;
    PCTRANSACTION: string;
}

export interface Ids_oBizDate {
    BIZDATE: string;
}

export interface Ids_oNewBankAccount {
    CD: string;
    BANK: string;
    ACCOUNT: string;
    RECVTE: string;
}

export interface Ids_ioVirtualAccoutAllocation {
    SCMGNO: string;
    SBNM: string;
    SJIBU: string;
    SENDDT: string;
}

export interface Ids_iEduJubsuStatus {
    CMGNO: string;
    PCGUBUN: string;
    AMT: string;
    PAYGUBUN: string;
    PMYEAR: string;
    PMMGNO: string;
}

export interface Ids_oEduJubsuCheck {
}

export const useFrmcust2020PCustomerFeePos = () => {
    const [ds_oRecieptGubun, setds_oRecieptGubun] = useState<Ids_oRecieptGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [ds_oInstallment, setds_oInstallment] = useState<Ids_oInstallment[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [ds_oMonth, setds_oMonth] = useState<Ids_oMonth[]>([]);
    const [ds_oCashYn, setds_oCashYn] = useState<Ids_oCashYn[]>([]);
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_ioCustomerFee, setds_ioCustomerFee] = useState<Ids_ioCustomerFee[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_iReady, setds_iReady] = useState<Ids_iReady[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_oGroupNo, setds_oGroupNo] = useState<Ids_oGroupNo[]>([]);
    const [ds_iCustomerFeeBackup, setds_iCustomerFeeBackup] = useState<Ids_iCustomerFeeBackup[]>([]);
    const [ds_ioPosPrintMBackup, setds_ioPosPrintMBackup] = useState<Ids_ioPosPrintMBackup[]>([]);
    const [ds_ioPosPaymentBackup, setds_ioPosPaymentBackup] = useState<Ids_ioPosPaymentBackup[]>([]);
    const [ds_iReadyBackup, setds_iReadyBackup] = useState<Ids_iReadyBackup[]>([]);
    const [ds_oPosCas, setds_oPosCas] = useState<Ids_oPosCas[]>([]);
    const [ds_oBizDate, setds_oBizDate] = useState<Ids_oBizDate[]>([]);
    const [ds_oNewBankAccount, setds_oNewBankAccount] = useState<Ids_oNewBankAccount[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_iEduJubsuStatus, setds_iEduJubsuStatus] = useState<Ids_iEduJubsuStatus[]>([]);
    const [ds_oEduJubsuCheck, setds_oEduJubsuCheck] = useState<Ids_oEduJubsuCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRecieptGubun([]);
            setds_oSunap([]);
            setds_oSunapGubun([]);
            setds_oPosJibu([]);
            setds_oInstallment([]);
            setds_oCashGubun([]);
            setds_oYear([]);
            setds_oMonth([]);
            setds_oCashYn([]);
            setds_oBank([]);
            setds_ioCustomerFee([]);
            setds_ioPosPrintM([]);
            setds_ioPosPayment([]);
            setds_iReady([]);
            setds_oPmMgno([]);
            setds_oGroupNo([]);
            setds_iCustomerFeeBackup([]);
            setds_ioPosPrintMBackup([]);
            setds_ioPosPaymentBackup([]);
            setds_iReadyBackup([]);
            setds_oPosCas([]);
            setds_oBizDate([]);
            setds_oNewBankAccount([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_iEduJubsuStatus([]);
            setds_oEduJubsuCheck([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnPos_OnClick = () => {
        console.log('btnPos_OnClick clicked');
    };
    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oRecieptGubun,
        ds_oSunap,
        ds_oSunapGubun,
        ds_oPosJibu,
        ds_oInstallment,
        ds_oCashGubun,
        ds_oYear,
        ds_oMonth,
        ds_oCashYn,
        ds_oBank,
        ds_ioCustomerFee,
        ds_ioPosPrintM,
        ds_ioPosPayment,
        ds_iReady,
        ds_oPmMgno,
        ds_oGroupNo,
        ds_iCustomerFeeBackup,
        ds_ioPosPrintMBackup,
        ds_ioPosPaymentBackup,
        ds_iReadyBackup,
        ds_oPosCas,
        ds_oBizDate,
        ds_oNewBankAccount,
        ds_ioVirtualAccoutAllocation,
        ds_iEduJubsuStatus,
        ds_oEduJubsuCheck,
        btnPos_OnClick,
        chkPonyDate_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};