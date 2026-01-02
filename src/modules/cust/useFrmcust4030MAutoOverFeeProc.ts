// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCustomer {
    CMGNO: string;
    CGTMGNO: string;
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
    CFCANCELGUBUN: string;
    CFCANCELDATE: string;
    CFCANCELSABUN: string;
    CFREMARK: string;
    CFREPAYREF: string;
    CFACTIVEGUBUN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export const useFrmcust4030MAutoOverFeeProc = () => {
    const [ds_oCustomer, setds_oCustomer] = useState<Ids_oCustomer[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCustomer([]);
            setds_iCustomerFee([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnProc_OnClick = () => {
        console.log('btnProc_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oCustomer,
        ds_iCustomerFee,
        ds_oJibu,
        btnProc_OnClick,
        lfn_End,
    };
};