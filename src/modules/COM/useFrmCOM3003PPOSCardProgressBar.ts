// @ts-nocheck
import { useState, useEffect } from 'react';

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
}

export interface Ids_LguplusOut {
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

export const useFrmCOM3003PPOSCardProgressBar = () => {
    const [ds_ioPosOutput, setds_ioPosOutput] = useState<Ids_ioPosOutput[]>([]);
    const [ds_LguplusOut, setds_LguplusOut] = useState<Ids_LguplusOut[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosOutput([]);
            setds_LguplusOut([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioPosOutput,
        ds_LguplusOut,
    };
};