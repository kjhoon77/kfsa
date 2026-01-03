// @ts-nocheck
export const Frmcust2010MCustomerFeeManagement201005131Data = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCustomer {
    BNM?: string;
    CCOURSECD?: string;
    CDELDATE?: string;
    CDELGUBUN?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTZIPCD?: string;
    CFEEYYMM?: string;
    CGTMGNO?: string;
    CMGNO?: number;
    CNO?: string;
    COBMGNO?: number;
    COVERGUBUN?: string;
    CREGCD?: string;
    CREGISTERYYMM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    FMRESIDENTNO?: string;
}

export interface Ids_oFee {
    CFCCGUBUN?: string;
    CFCCGUBUNCD?: string;
    CFGYEAR?: string;
    CFPMMGNO?: string;
    CFPMYEAR?: string;
    CFSUNAPHALF?: string;
    CFSUNAPMONTH?: string;
    CMGNO?: number;
    MINAPFEE?: number;
    SEL?: string;
    SUNAPFEE?: number;
}

export interface Ids_oSunap {
    CANCELDATE?: string;
    CFCMGNO?: number;
    CFGROUPMGNO?: string;
    CFGUBUN?: string;
    CFGUBUNCD?: string;
    CFGUBUNCDNM?: string;
    CFREGNM?: string;
    CFREMARK?: string;
    CFREPAYREF?: string;
    FEESEQ?: number;
    MEMBERGUBUN?: string;
    MEMBERGUBUNNM?: string;
    MGGTMGNO?: string;
    MGGTNM?: string;
    PMMGNO?: number;
    PMPCORDERNO?: string;
    PMYEAR?: string;
    PONYDATE?: string;
    POSGTMGNO?: string;
    POSGTNM?: string;
    PROCDATE?: string;
    PROCGTMGNO?: string;
    PROCGTNM?: string;
    PVINFO?: string;
    REGDATE?: string;
    SETLMGUBUN?: string;
    SETLMGUBUNNM?: string;
    SUNAPFEE?: number;
    SUNAPYEAR?: string;
    PMRESULT?: string;
}

export interface Ids_oMonthGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMonthGubun: Ids_oMonthGubun[] = [
    { CD: 'YEAR', DATA: '년도' },
    { CD: 'HALF', DATA: '반기' },
];

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

export interface Ids_iCustomerFee {
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

export interface Ids_oPosPrintM {
}

export interface Ids_oFeeMonth {
    CFCCGUBUN?: string;
    CFGYEAR?: string;
    CFSUNAPHALF?: string;
    CFSUNAPMONTH?: string;
    CMGNO?: number;
    MINAPFEE?: number;
    SEL?: string;
    SUNAPFEE?: number;
}

export interface Ids_oYearbizlink {
}

export interface Ids_iOverFee {
    CFCCGUBUN?: string;
    CFGYEAR?: string;
    CFSUNAPHALF?: string;
    CFSUNAPMONTH?: string;
    CMGNO?: number;
    MINAPFEE?: number;
    SEL?: string;
    SUNAPFEE?: number;
    VIEWTYPE?: string;
}

export interface Ids_oJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibuGubun: Ids_oJibuGubun[] = [
    { CD: 'S', DATA: '소속지부' },
    { CD: 'T', DATA: '타지부' },
];

export interface Ids_iMunjeCancel {
    CFGROUPMGNO?: string;
    CFCANCELGUBUN?: string;
    CFCANCELDATE?: string;
    CFCANCELSABUN?: string;
    CFACTIVEGUBUN?: string;
}

export interface Ids_iPrintGoji {
    GTMGNO?: string;
    CNO?: string;
    OKEY?: string;
}

export interface Ids_oPrintGoji {
}

export interface Ids_oCustomerAll {
    BNM?: string;
    CCOURSECD?: string;
    CDELDATE?: string;
    CDELGUBUN?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTZIPCD?: string;
    CFEEYYMM?: string;
    CGTMGNO?: string;
    CMGNO?: number;
    CNO?: string;
    COBMGNO?: number;
    COVERGUBUN?: string;
    CREGCD?: string;
    CREGISTERYYMM?: string;
    CSTATUSGUBUN?: string;
    FMNM?: string;
    FMRESIDENTNO?: string;
}

export interface Ids_oAllPrintGoji {
}
