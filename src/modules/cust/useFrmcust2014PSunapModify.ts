// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCustomerFee {
    CFCMGNO: string;
    CFGUBUNCD: string;
    CFPMMGNO: string;
    CFPMYEAR: string;
    CFPONYDATE: string;
    CFPONYGUBUN: string;
    CFPROCAMOUNT: string;
    CFPROCDATE: string;
    CFREMARK: string;
    CFSUNAPHALF: string;
    CFSUNAPYEAR: string;
    CGTMGNO: string;
    CNO: string;
    COMBOCHECK: string;
    MAXMONTH: string;
    MINMONTH: string;
    SEL: string;
}

export interface Ids_oMonthGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oMonth {
    CD: string;
    DATA: string;
}

export interface Ids_iCustomerFee {
    CFCMGNO: string;
    CGTMGNO: string;
    CFPMYEAR: string;
    CFPMMGNO: string;
    CFSUNAPYEAR: string;
    CFSUNAPMONTH: string;
    SCNO: string;
    SCFSUNAPYEAR: string;
    SCFSUNAPMONTH: string;
    SCFSUNAPHALF: string;
    SCFREMARK: string;
}

export interface Ids_iProcDate {
    CFPMYEAR: string;
    CFPMMGNO: string;
    CFPROCDATE: string;
    CFPONYGUBUN: string;
    CFPONYDATE: string;
    CFGUBUNCD: string;
    CFGUBUN: string;
    CFREPAYREF: string;
    CFRETIREGUBUN: string;
}

export interface Ids_oCustomerFeeCheck {
    BNM: string;
    CCOURSECD: string;
    CFPROCAMOUNT: string;
    CFSUNAPMONTH: string;
    CFSUNAPYEAR: string;
    CGTMGNO: string;
    CNO: string;
    CSTATUSGUBUN: string;
}

export interface Ids_oCustomerFeeBackup {
    CFCMGNO: string;
    CFGUBUNCD: string;
    CFPMMGNO: string;
    CFPMYEAR: string;
    CFPONYDATE: string;
    CFPONYGUBUN: string;
    CFPROCAMOUNT: string;
    CFPROCDATE: string;
    CFREMARK: string;
    CFSUNAPHALF: string;
    CFSUNAPYEAR: string;
    CGTMGNO: string;
    CNO: string;
    COMBOCHECK: string;
    MAXMONTH: string;
    MINMONTH: string;
    SEL: string;
}

export interface Ids_iPosPayment {
    PPPMYEAR: string;
    PPPMMGNO: string;
    PPSEQ: string;
    PPNM: string;
    PPUNITAMT: string;
    PPQTY: string;
    PPTOTAMT: string;
}

export const useFrmcust2014PSunapModify = () => {
    const [ds_ioSunapGubun, setds_ioSunapGubun] = useState<Ids_ioSunapGubun[]>([]);
    const [ds_oCustomerFee, setds_oCustomerFee] = useState<Ids_oCustomerFee[]>([]);
    const [ds_oMonthGubun, setds_oMonthGubun] = useState<Ids_oMonthGubun[]>([]);
    const [ds_oMonth, setds_oMonth] = useState<Ids_oMonth[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_iProcDate, setds_iProcDate] = useState<Ids_iProcDate[]>([]);
    const [ds_oCustomerFeeCheck, setds_oCustomerFeeCheck] = useState<Ids_oCustomerFeeCheck[]>([]);
    const [ds_oCustomerFeeBackup, setds_oCustomerFeeBackup] = useState<Ids_oCustomerFeeBackup[]>([]);
    const [ds_iPosPayment, setds_iPosPayment] = useState<Ids_iPosPayment[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSunapGubun([]);
            setds_oCustomerFee([]);
            setds_oMonthGubun([]);
            setds_oMonth([]);
            setds_iCustomerFee([]);
            setds_iProcDate([]);
            setds_oCustomerFeeCheck([]);
            setds_oCustomerFeeBackup([]);
            setds_iPosPayment([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioSunapGubun,
        ds_oCustomerFee,
        ds_oMonthGubun,
        ds_oMonth,
        ds_iCustomerFee,
        ds_iProcDate,
        ds_oCustomerFeeCheck,
        ds_oCustomerFeeBackup,
        ds_iPosPayment,
        chkPonyDate_OnClick,
        lfn_Delete,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};