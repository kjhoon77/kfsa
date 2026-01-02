// @ts-nocheck
import { useState, useEffect } from 'react';

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
    PMPCSEQ: string;
}

export interface Ids_ioPosCash {
    PCGUBUN: string;
    PCORDERNO: string;
    PCUSERTYPE: string;
    PCTRANSACTIONDATE: string;
    PCTRANSACTIONTIME: string;
    PCSERIALNO: string;
    PCAMT: string;
    PCVAT: string;
    PCSOCIALBUSINESSNO: string;
    PCAUTHNO: string;
    PCRESPONSECODE: string;
    PCRESPONSEDATE: string;
    PCTRANSACTIONCODE: string;
    PCPAYTYPE: string;
}

export interface Ids_oCashGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCallKeyIn {
}

export const useFrmcust2015PPosChangeCash = () => {
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosCash, setds_ioPosCash] = useState<Ids_ioPosCash[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosPrintM([]);
            setds_ioPosCash([]);
            setds_oCashGubun([]);
            setds_oCallKeyIn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCash_OnClick = () => {
        console.log('btnCash_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioPosPrintM,
        ds_ioPosCash,
        ds_oCashGubun,
        ds_oCallKeyIn,
        btnCash_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};