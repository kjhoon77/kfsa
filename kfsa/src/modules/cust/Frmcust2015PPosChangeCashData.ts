// @ts-nocheck
export const Frmcust2015PPosChangeCashData = {};

export interface Ids_ioPosPrintM {
    PMYEAR?: string;
    PMMGNO?: number;
    PMINPUT?: string;
    PMPCGUBUN?: string;
    PMPCORDERNO?: string;
    PMPROCDATE?: string;
    PMPIID?: string;
    PMPGMID?: string;
    PMPGMPK?: string;
    PMBUYER?: string;
    PMCLAS?: string;
    PMPGMGUBUN?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    PMAMT?: number;
    PMVAT?: number;
    PMPAYMENTFLAG?: string;
    PMRESULT?: string;
    PCUSERTYPE?: string;
    PCSOCIALBUSINESSNO?: string;
    PCCARDINSTALL?: string;
    PCCLOSEDATE?: string;
    PCBANKCD?: string;
    PMPCSEQ?: string;
}

export interface Ids_ioPosCash {
    PCGUBUN?: string;
    PCORDERNO?: string;
    PCUSERTYPE?: string;
    PCTRANSACTIONDATE?: string;
    PCTRANSACTIONTIME?: string;
    PCSERIALNO?: number;
    PCAMT?: number;
    PCVAT?: number;
    PCSOCIALBUSINESSNO?: string;
    PCAUTHNO?: string;
    PCRESPONSECODE?: string;
    PCRESPONSEDATE?: string;
    PCTRANSACTIONCODE?: string;
    PCPAYTYPE?: string;
}

export interface Ids_oCashGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCashGubun: Ids_oCashGubun[] = [
    { CD: '1', DATA: '소득공제용' },
    { CD: '2', DATA: '지출증빙용' },
];

export interface Ids_oCallKeyIn {
}
