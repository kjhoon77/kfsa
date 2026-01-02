// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioPosInput {
    PMYEAR: string;
    PMMGNO: string;
    STATUS: string;
    LGD_PAN: string;
    LGD_CASHRECEIPTYN: string;
    CASHFLAG: string;
    PHONE: string;
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

export interface Ids_ioPosOutput {
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

export interface Ids_ioOfflinePosOutput {
    Respcode: string;
    Msg: string;
    Trancode: string;
    Mid: string;
    Oid: string;
    Tamt: string;
    Tran_serial: string;
    Trandate: string;
    Financecode: string;
    Financename: string;
    Cardno: string;
    Halbu: string;
    Authno: string;
    Stlinst: string;
    Reqinst: string;
    Merno: string;
    Signpath: string;
    Cardgubun: string;
    Giftchange: string;
}

export const useFrmCOM3010SPOS = () => {
    const [ds_ioPosInput, setds_ioPosInput] = useState<Ids_ioPosInput[]>([]);
    const [ds_ioPosOutputJVM, setds_ioPosOutputJVM] = useState<Ids_ioPosOutputJVM[]>([]);
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [ds_ioOfflinePosOutput, setds_ioOfflinePosOutput] = useState<Ids_ioOfflinePosOutput[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosInput([]);
            setds_ioPosOutputJVM([]);
            setds_ioPosOutput([]);
            setds_ioOfflinePosOutput([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button0_OnClick = () => {
        console.log('Button0_OnClick clicked');
    };
    const Button1_OnClick = () => {
        console.log('Button1_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioPosInput,
        ds_ioPosOutputJVM,
        ds_ioPosOutput,
        ds_ioOfflinePosOutput,
        Button0_OnClick,
        Button1_OnClick,
    };
};