// @ts-nocheck
export const Frmcust2020PCustomerFeePosData = {};

export interface Ids_oRecieptGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRecieptGubun: Ids_oRecieptGubun[] = [
    { CD: 'Y', DATA: '출력' },
    { CD: 'N', DATA: '미출력' },
];

export interface Ids_oSunap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunap: Ids_oSunap[] = [
    { CD: '0', DATA: '방문(직납)' },
    { CD: '4', DATA: '은행납' },
    { CD: '6', DATA: '지로' },
    { CD: '9', DATA: '전화수납' },
];

export interface Ids_oSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSunapGubun: Ids_oSunapGubun[] = [
    { CD: '0', DATA: '현금' },
    { CD: '1', DATA: '카드' },
    { CD: '2', DATA: '현금영수증' },
    { CD: '3', DATA: '가상계좌(LG U+)' },
];

export interface Ids_oPosJibu {
}

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

export interface Ids_oCashGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCashGubun: Ids_oCashGubun[] = [
    { CD: '1', DATA: '소득공제용' },
    { CD: '2', DATA: '지출증빙용' },
];

export interface Ids_oYear {
    CD?: string;
    DATA?: string;
}

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

export interface Ids_oCashYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCashYn: Ids_oCashYn[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_oBank {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioCustomerFee {
    CFCMGNO?: number;
    CFSEQ?: number;
    CFSETLMGUBUN?: string;
    CFMEMBERGUBUN?: string;
    CFGUBUN?: string;
    CFGUBUNCD?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    CFSUNAPHALF?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFPONYGUBUN?: string;
    CFPONYDATE?: string;
    CFMGGTMGNO?: string;
    CFPROCGTMGNO?: string;
    CFPOSGTMGNO?: string;
    CFPMYEAR?: string;
    CFPMMGNO?: number;
    CFGROUPMGNO?: string;
    CFCANCELDATE?: string;
    CFCANCELSABUN?: string;
    CFREMARK?: string;
    CFREPAYREF?: number;
    CFACTIVEGUBUN?: string;
    CFREGDATE?: string;
    CFREGSABUN?: string;
    CFMODDATE?: string;
    CFMODSABUN?: string;
    CGTMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    BNM?: string;
    FMNM?: string;
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
    PMPCSEQ?: string;
    PMORGGUBUN?: string;
    PCFLAG?: string;
    PCACCOUNT?: string;
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

export interface Ids_iReady {
    SEL?: string;
    CFGUBUN?: string;
    CMGNO?: string;
    CFMGGTMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    CFMEMBERGUBUN?: string;
    BNM?: string;
    FMNM?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFREMARK?: string;
    CHECKDATA?: string;
    CFMGGTNM?: string;
    CCOURSENM?: string;
    CFMEMBERNM?: string;
}

export interface Ids_oPmMgno {
    PMYEAR?: string;
    PMMGNO?: string;
}

export interface Ids_oGroupNo {
    CFGROUPMGNO?: string;
}

export interface Ids_iCustomerFeeBackup {
    CFCMGNO?: number;
    CFSEQ?: number;
    CFSETLMGUBUN?: string;
    CFMEMBERGUBUN?: string;
    CFGUBUN?: string;
    CFGUBUNCD?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    CFSUNAPHALF?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFPONYGUBUN?: string;
    CFPONYDATE?: string;
    CFMGGTMGNO?: string;
    CFPROCGTMGNO?: string;
    CFPOSGTMGNO?: string;
    CFPMYEAR?: string;
    CFPMMGNO?: number;
    CFGROUPMGNO?: string;
    CFCANCELDATE?: string;
    CFCANCELSABUN?: string;
    CFREMARK?: string;
    CFREPAYREF?: number;
    CFACTIVEGUBUN?: string;
    CFREGDATE?: string;
    CFREGSABUN?: string;
    CFMODDATE?: string;
    CFMODSABUN?: string;
    CGTMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    BNM?: string;
    FMNM?: string;
}

export interface Ids_ioPosPrintMBackup {
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
}

export interface Ids_ioPosPaymentBackup {
    PPPMYEAR?: string;
    PPPMMGNO?: number;
    PPSEQ?: number;
    PPNM?: string;
    PPUNITAMT?: number;
    PPQTY?: number;
    PPTOTAMT?: number;
}

export interface Ids_iReadyBackup {
    SEL?: string;
    CFGUBUN?: string;
    CMGNO?: string;
    CFMGGTMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    CFMEMBERGUBUN?: string;
    BNM?: string;
    FMNM?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFREMARK?: string;
    CHECKDATA?: string;
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

export interface Ids_oBizDate {
    BIZDATE?: string;
}

export interface Ids_oNewBankAccount {
    CD?: string;
    BANK?: string;
    ACCOUNT?: string;
    RECVTE?: string;
}

export interface Ids_ioVirtualAccoutAllocation {
    SCMGNO?: string;
    SBNM?: string;
    SJIBU?: string;
    SENDDT?: string;
}

export interface Ids_iEduJubsuStatus {
    CMGNO?: string;
    PCGUBUN?: string;
    AMT?: string;
    PAYGUBUN?: string;
    PMYEAR?: string;
    PMMGNO?: string;
}

export interface Ids_oEduJubsuCheck {
}
