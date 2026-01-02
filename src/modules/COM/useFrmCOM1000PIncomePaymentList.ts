// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSearchGubun {
    CD: string;
    DATA: string;
}

export interface Ids_iSearchotherincome {
    I_PROC: string;
    I_JIBU: string;
    I_YEAR: string;
    I_FR: string;
    I_TO: string;
    O_STATUS: string;
    O_VALUE: string;
}

export interface Ids_oSearchotherincome {
    OPMGNO: string;
    OPNM: string;
    RESIDENT: string;
    BIZGUBUN: string;
    MGNO: string;
    JIBU: string;
    PAYMENTDATE: string;
    REVERTMONTH: string;
    STATUS: string;
    NEEDYUL: string;
    SEYUL: string;
    OIMGNO: string;
    OIBIZGUBUN: string;
    OIJIBU: string;
    OIYEAR: string;
    OIPRTNO: string;
    OIOPMGNO: string;
    OIPAYMENTDATE: string;
    CIMGNO: string;
    OIREVERTMONTH: string;
    OIINCOMECD: string;
    OIPROJECT: string;
    OISTATUS: string;
    OIPAYMENT: string;
    OINEEDCOST: string;
    OIINCOME: string;
    OIOINCOME: string;
    OIOJURIDICAL: string;
    OIOJUMIN: string;
    OIONONGTUK: string;
    OIOTOTAL: string;
    OIREMARK: string;
    OIREFMGNO: string;
    OIREFKEY: string;
    OIREGISTERDATE: string;
    OIUSERID: string;
}

export interface Ids_oJIBU {
}

export const useFrmCOM1000PIncomePaymentList = () => {
    const [ds_ioSearchGubun, setds_ioSearchGubun] = useState<Ids_ioSearchGubun[]>([]);
    const [ds_iSearchotherincome, setds_iSearchotherincome] = useState<Ids_iSearchotherincome[]>([]);
    const [ds_oSearchotherincome, setds_oSearchotherincome] = useState<Ids_oSearchotherincome[]>([]);
    const [ds_oJIBU, setds_oJIBU] = useState<Ids_oJIBU[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSearchGubun([]);
            setds_iSearchotherincome([]);
            setds_oSearchotherincome([]);
            setds_oJIBU([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioSearchGubun,
        ds_iSearchotherincome,
        ds_oSearchotherincome,
        ds_oJIBU,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};