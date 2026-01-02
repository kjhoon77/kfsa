// @ts-nocheck
export const Frmcust2140MBusinessUnpaidReportData = {};

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '지역' },
    { CD: '2', DATA: '직능, 지역' },
];

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_UnpaidCompnm {
    CMGNO?: string;
    CGTMGNO?: string;
    JIFULLNM?: string;
    RCREGCD?: string;
    RCNM?: string;
    CCOURSECD?: string;
    CNM?: string;
    CNO?: string;
    BNM?: string;
    YEAR3?: string;
    YEAR2?: string;
    YEAR1?: string;
    YEAR0?: string;
    CNT3?: number;
    CNT2?: number;
    CNT1?: number;
    CNT0?: number;
    AMT3?: number;
    AMT2?: number;
    AMT1?: number;
    AMT0?: number;
    AMT?: number;
    BTEL?: string;
    BADDR?: string;
}

export interface Ids_SearchJogeon {
    JIBU?: string;
    REGION_GUBUN?: string;
    REGION1?: string;
    REGION2?: string;
    COURSE_GUBUN?: string;
    COURSE?: string;
    COURSE_IN?: string;
    MGNO_GUBUN?: string;
    MGNO1?: string;
    MGNO2?: string;
    MINAP_CNT?: string;
    ORDER_GUBUN?: string;
    EXCEL_GUBUN?: string;
}

export interface Ids_Year {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Year: Ids_Year[] = [
    { CD: '1', DATA: '1' },
    { CD: '2', DATA: '2' },
    { CD: '3', DATA: '3' },
    { CD: '4', DATA: '4' },
];
