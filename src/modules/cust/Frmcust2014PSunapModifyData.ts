// @ts-nocheck
export const Frmcust2014PSunapModifyData = {};

export interface Ids_ioSunapGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSunapGubun: Ids_ioSunapGubun[] = [
    { CD: '0', DATA: '방문(직납)' },
    { CD: '1', DATA: '방문(은납)' },
    { CD: '2', DATA: '지로' },
];

export interface Ids_oCustomerFee {
    CFCMGNO?: number;
    CFGUBUNCD?: string;
    CFPMMGNO?: number;
    CFPMYEAR?: string;
    CFPONYDATE?: string;
    CFPONYGUBUN?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFREMARK?: string;
    CFSUNAPHALF?: string;
    CFSUNAPYEAR?: string;
    CGTMGNO?: string;
    CNO?: string;
    COMBOCHECK?: string;
    MAXMONTH?: string;
    MINMONTH?: string;
    SEL?: string;
}

export interface Ids_oMonthGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMonthGubun: Ids_oMonthGubun[] = [
    { CD: 'YEAR', DATA: '년도' },
    { CD: 'HALF', DATA: '반기' },
];

export interface Ids_oMonth {
    CD?: string;
    DATA?: string;
}

export interface Ids_iCustomerFee {
    CFCMGNO?: string;
    CGTMGNO?: string;
    CFPMYEAR?: string;
    CFPMMGNO?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    SCNO?: string;
    SCFSUNAPYEAR?: string;
    SCFSUNAPMONTH?: string;
    SCFSUNAPHALF?: string;
    SCFREMARK?: string;
}

export interface Ids_iProcDate {
    CFPMYEAR?: string;
    CFPMMGNO?: string;
    CFPROCDATE?: string;
    CFPONYGUBUN?: string;
    CFPONYDATE?: string;
    CFGUBUNCD?: string;
    CFGUBUN?: string;
    CFREPAYREF?: string;
    CFRETIREGUBUN?: string;
}

export interface Ids_oCustomerFeeCheck {
    BNM?: string;
    CCOURSECD?: string;
    CFPROCAMOUNT?: number;
    CFSUNAPMONTH?: string;
    CFSUNAPYEAR?: string;
    CGTMGNO?: string;
    CNO?: string;
    CSTATUSGUBUN?: string;
}

export interface Ids_oCustomerFeeBackup {
    CFCMGNO?: number;
    CFGUBUNCD?: string;
    CFPMMGNO?: number;
    CFPMYEAR?: string;
    CFPONYDATE?: string;
    CFPONYGUBUN?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFREMARK?: string;
    CFSUNAPHALF?: string;
    CFSUNAPYEAR?: string;
    CGTMGNO?: string;
    CNO?: string;
    COMBOCHECK?: string;
    MAXMONTH?: string;
    MINMONTH?: string;
    SEL?: string;
}

export interface Ids_iPosPayment {
    PPPMYEAR?: string;
    PPPMMGNO?: number;
    PPSEQ?: number;
    PPNM?: string;
    PPUNITAMT?: number;
    PPQTY?: number;
    PPTOTAMT?: number;
}
