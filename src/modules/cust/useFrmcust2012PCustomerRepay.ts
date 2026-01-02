// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCustomerFee {
    BNM: string;
    CANCELDATE: string;
    CCOURSECD: string;
    CCOURSECDNM: string;
    CFCMGNO: string;
    CFGROUPMGNO: string;
    CFGUBUN: string;
    CFGUBUNCD: string;
    CFGUBUNCDNM: string;
    CFREGNM: string;
    CFREMARK: string;
    CFREPAYREF: string;
    CNO: string;
    CREGCD: string;
    FEESEQ: string;
    FMNM: string;
    MEMBERGUBUN: string;
    MGGTMGNO: string;
    PMAMT: string;
    PMBUYER: string;
    PMMGNO: string;
    PMPCORDERNO: string;
    PMPGMGUBUN: string;
    PMYEAR: string;
    PONYDATE: string;
    POSGTMGNO: string;
    PROCDATE: string;
    PROCGTMGNO: string;
    REGDATE: string;
    SEL: string;
    SETLMGUBUN: string;
    SETLMGUBUNNM: string;
    SUNAPFEE: string;
    SUNAPYEAR: string;
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
    CFREPAYREF: string;
    CFACTIVEYN: string;
}

export const useFrmcust2012PCustomerRepay = () => {
    const [ds_oCustomerFee, setds_oCustomerFee] = useState<Ids_oCustomerFee[]>([]);
    const [ds_iReady, setds_iReady] = useState<Ids_iReady[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCustomerFee([]);
            setds_iReady([]);
            setds_iCustomerFee([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
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

    return {
        isLoading,
        ds_oCustomerFee,
        ds_iReady,
        ds_iCustomerFee,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};