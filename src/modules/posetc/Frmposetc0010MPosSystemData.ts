// @ts-nocheck
export const Frmposetc0010MPosSystemData = {};

export interface Ids_oYesNo {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oYesNo: Ids_oYesNo[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_oPosJibu {
    PIID?: string;
    PICHPT?: string;
    PIONOFF?: string;
    PIBIZGUBUN?: string;
    PIBANKNM?: string;
    PIACCNUM?: string;
    PIMERTKEY?: string;
    PIMERTKEY_TEST?: string;
}

export interface Ids_oPosProgramId {
    PGMID?: string;
    PGMNM?: string;
    PGMGUBUN?: string;
    PGMGUBUNNM?: string;
}

export interface Ids_oBank {
    CCGROUPCD?: string;
    CCCD?: string;
    CCCDNM?: string;
    MORDERSEQ?: string;
    USE_YN?: string;
    CCREMARK?: string;
}

export interface Ids_oBizDate {
}

export interface Ids_oCashGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCashGubun: Ids_oCashGubun[] = [
    { CD: '1', DATA: '소득공제용' },
    { CD: '2', DATA: '지출증빙용' },
];

export interface Ids_oInstallment {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInstallment: Ids_oInstallment[] = [
    { CD: '00', DATA: '일시불' },
    { CD: '01', DATA: '1개월' },
    { CD: '02', DATA: '2개월' },
    { CD: '03', DATA: '3개월' },
    { CD: '04', DATA: '4개월' },
    { CD: '05', DATA: '5개월' },
    { CD: '06', DATA: '6개월' },
    { CD: '07', DATA: '7개월' },
    { CD: '08', DATA: '8개월' },
    { CD: '09', DATA: '9개월' },
    { CD: '10', DATA: '10개월' },
    { CD: '11', DATA: '11개월' },
    { CD: '12', DATA: '12개월' },
];

export interface Ids_oMonth {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMonth: Ids_oMonth[] = [
    { CD: '01', DATA: '1개월' },
    { CD: '02', DATA: '2개월' },
    { CD: '03', DATA: '3개월' },
    { CD: '04', DATA: '4개월' },
    { CD: '05', DATA: '5개월' },
    { CD: '06', DATA: '6개월' },
    { CD: '07', DATA: '7개월' },
    { CD: '08', DATA: '8개월' },
    { CD: '09', DATA: '9개월' },
    { CD: '10', DATA: '10개월' },
    { CD: '11', DATA: '11개월' },
    { CD: '12', DATA: '12개월' },
];

export interface Ids_oSunap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunap: Ids_oSunap[] = [
    { CD: '10', DATA: '방문(직납)' },
    { CD: '11', DATA: '카드' },
    { CD: '13', DATA: '가상계좌' },
    { CD: '14', DATA: '방문(은납)' },
    { CD: '17', DATA: '지로' },
];

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapGubun: Ids_oSunapGubun[] = [
    { CD: '0', DATA: '수납' },
    { CD: '1', DATA: '환불' },
];

export interface Ids_oYear {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSunapList {
    PSPGMID?: string;
    PSSEQ?: number;
    PSSETLMGUBUN?: string;
    PSSETLMGUBUNNM?: string;
    PSGUBUN?: string;
    PSGUBUNNM?: string;
    PSGUBUNCD?: string;
    PSGUBUNCDNM?: string;
    PSGTMGNO?: string;
    PSGTNM?: string;
    PSPROCDATE?: string;
    PSPONYGUBUN?: string;
    PSPONYDATE?: string;
    PSAMT?: number;
    PSPMYEAR?: string;
    PSPMMGNO?: number;
    PMPCORDERNO?: string;
    PSREPAYSEQ?: number;
    PSBUYER?: string;
    PSCONTENT?: string;
    PSREGSABUN?: string;
    PSREGSABUNNM?: string;
}

export interface Ids_oPmMgno {
    PMYEAR?: string;
    PMMGNO?: string;
}

export interface Ids_ioPosEtcSettlement {
    PSPGMID?: string;
    PSSEQ?: number;
    PSSETLMGUBUN?: string;
    PSGUBUN?: string;
    PSGUBUNCD?: string;
    PSGTMGNO?: string;
    PSPROCDATE?: string;
    PSPONYGUBUN?: string;
    PSPONYDATE?: string;
    PSAMT?: number;
    PSPMYEAR?: string;
    PSPMMGNO?: number;
    PSREPAYSEQ?: number;
    PSBUYER?: string;
    PSCONTENT?: string;
    PSREGDATE?: string;
    PSREGSABUN?: string;
}

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
    PCBANKNM?: string;
}

export interface Ids_ioPosPayment {
    PPPMYEAR?: string;
    PPPMMGNO?: number;
    PPSEQ?: number;
    PPNM?: string;
    PPUNITAMT?: number;
    PPQTY?: number;
    PPTOTAMT?: number;
}

export interface Ids_oPosCas {
    PCPMYEAR?: string;
    PCPMMGNO?: number;
    PCCLOSEDATE?: string;
    PCFLAG?: string;
    PCACCOUNT?: string;
    PCBANKCD?: string;
    PCBANKNM?: string;
    PCAMOUNT?: number;
    PCBANKDATE?: string;
    PCTRANSACTION?: string;
}

export interface Ids_oAuthCheck {
}
