// @ts-nocheck
export const FrmCOM3010SPOSData = {};

export interface Ids_ioPosInput {
    PMYEAR?: string;
    PMMGNO?: string;
    STATUS?: string;
    LGD_PAN?: string;
    LGD_CASHRECEIPTYN?: string;
    CASHFLAG?: string;
    PHONE?: string;
}

export const ds_ds_ioPosInput: Ids_ioPosInput[] = [
    { CASHFLAG: '', LGD_CASHRECEIPTYN: '', LGD_PAN: '4119045215715124=15022011919676391750', PHONE: '', PMMGNO: '375105', PMYEAR: '2009', STATUS: '4' },
];

export interface Ids_ioPosOutputJVM {
    MI_PMYEAR?: string;
    MI_PMMGNO?: string;
    MI_PRMGUBUN?: string;
    LGD_RESPCODE?: string;
    LGD_CASHRECEIPTNUM?: string;
    LGD_RESPMSG?: string;
    LGD_OID?: string;
    LGD_TID?: string;
    LGD_AMOUNT?: string;
    LGD_ACCOUNTNUM?: string;
    LGD_FINANCECODE?: string;
    LGD_CASFLAG?: string;
    LGD_FINANCENAME?: string;
    MI_RSCODE?: string;
    MI_RSMSG?: string;
    LGD_TAXFREEAMOUNT?: string;
}

export interface Ids_ioPosOutput {
    MI_PMYEAR?: string;
    MI_PMMGNO?: string;
    MI_PRMGUBUN?: string;
    LGD_RESPCODE?: string;
    LGD_CASHRECEIPTNUM?: string;
    LGD_RESPMSG?: string;
    LGD_OID?: string;
    LGD_TID?: string;
    LGD_AMOUNT?: string;
    LGD_ACCOUNTNUM?: string;
    LGD_FINANCECODE?: string;
    LGD_CASFLAG?: string;
    LGD_FINANCENAME?: string;
    MI_RSCODE?: string;
    MI_RSMSG?: string;
    LGD_TAXFREEAMOUNT?: string;
}

export interface Ids_ioOfflinePosOutput {
    Respcode?: string;
    Msg?: string;
    Trancode?: string;
    Mid?: string;
    Oid?: string;
    Tamt?: string;
    Tran_serial?: string;
    Trandate?: string;
    Financecode?: string;
    Financename?: string;
    Cardno?: string;
    Halbu?: string;
    Authno?: string;
    Stlinst?: string;
    Reqinst?: string;
    Merno?: string;
    Signpath?: string;
    Cardgubun?: string;
    Giftchange?: string;
}
