// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioVirtualInfo {
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
    PMPIID: string;
}

export interface Ids_ioPosInput {
    PMYEAR: string;
    PMMGNO: string;
    PMPIID: string;
    PCTRANSACTION: string;
}

export interface Ids_ioPosOutputJVM {
    MI_PMYEAR: string;
    MI_PMMGNO: string;
    MI_PRMGUBUN: string;
    LGD_RESPCODE: string;
    LGD_CASHRECEIPTNUM: string;
    LGD_RESPMSG: string;
    LGD_OID: string;
    LGD_TID: string;
    LGD_AMOUNT: string;
    LGD_ACCOUNTNUM: string;
    LGD_FINANCECODE: string;
    LGD_CASFLAG: string;
    LGD_FINANCENAME: string;
    MI_RSCODE: string;
    MI_RSMSG: string;
    LGD_TAXFREEAMOUNT: string;
}

export interface Ids_oNewBankAccount {
    CD: string;
    BANK: string;
    ACCOUNT: string;
    RECVTEL: string;
    OWNER: string;
}

export interface Ids_iAccountNotice {
    BANK: string;
    ACCOUNT: string;
    OWNER: string;
    AMOUNT: string;
    COURSENM: string;
    FMNM: string;
    BNM: string;
}

export const useFrmcust2018PFixVirtualAccount = () => {
    const [ds_ioVirtualInfo, setds_ioVirtualInfo] = useState<Ids_ioVirtualInfo[]>([]);
    const [ds_ioPosInput, setds_ioPosInput] = useState<Ids_ioPosInput[]>([]);
    const [ds_ioPosOutputJVM, setds_ioPosOutputJVM] = useState<Ids_ioPosOutputJVM[]>([]);
    const [ds_oNewBankAccount, setds_oNewBankAccount] = useState<Ids_oNewBankAccount[]>([]);
    const [ds_iAccountNotice, setds_iAccountNotice] = useState<Ids_iAccountNotice[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioVirtualInfo([]);
            setds_ioPosInput([]);
            setds_ioPosOutputJVM([]);
            setds_oNewBankAccount([]);
            setds_iAccountNotice([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExpireDateChg_OnClick = () => {
        console.log('btnExpireDateChg_OnClick clicked');
    };
    const btnSMSSend_OnClick = () => {
        console.log('btnSMSSend_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioVirtualInfo,
        ds_ioPosInput,
        ds_ioPosOutputJVM,
        ds_oNewBankAccount,
        ds_iAccountNotice,
        btnExpireDateChg_OnClick,
        btnSMSSend_OnClick,
        lfn_End,
        lfn_Print,
    };
};