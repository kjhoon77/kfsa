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

export const useFrmcust2013PVirtualAccount = () => {
    const [ds_ioVirtualInfo, setds_ioVirtualInfo] = useState<Ids_ioVirtualInfo[]>([]);
    const [ds_ioPosInput, setds_ioPosInput] = useState<Ids_ioPosInput[]>([]);
    const [ds_ioPosOutputJVM, setds_ioPosOutputJVM] = useState<Ids_ioPosOutputJVM[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioVirtualInfo([]);
            setds_ioPosInput([]);
            setds_ioPosOutputJVM([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioVirtualInfo,
        ds_ioPosInput,
        ds_ioPosOutputJVM,
        lfn_Delete,
        lfn_End,
    };
};