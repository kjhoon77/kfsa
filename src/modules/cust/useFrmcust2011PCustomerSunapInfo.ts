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

export const useFrmcust2011PCustomerSunapInfo = () => {
    const [ds_oCustomerFee, setds_oCustomerFee] = useState<Ids_oCustomerFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCustomerFee([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
    };
};