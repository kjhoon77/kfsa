// @ts-nocheck
export const Frmcust2090MDailyFeeReportData = {};

export interface Ids_ioMemberFee {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberFee: Ids_ioMemberFee[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '회비' },
    { CD: '2', DATA: '교육비' },
];

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '수납' },
    { CD: '1', DATA: '환불' },
    { CD: '2', DATA: '폐기' },
];

export interface Ids_ioSunap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSunap: Ids_ioSunap[] = [
    { CD: '', DATA: '전체' },
    { CD: '1019', DATA: '현금&전화수납' },
    { CD: '10', DATA: '현금' },
    { CD: '19', DATA: '전화수납' },
    { CD: '11', DATA: '카드' },
    { CD: '12', DATA: '현금영수증' },
    { CD: '13', DATA: '가상계좌' },
    { CD: '14', DATA: '은행납' },
    { CD: '17', DATA: '지로' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMemberfee1_1 {
    SEL?: string;
    CFGUBUNCD_NAME?: string;
    COURSENM?: string;
    CNM?: string;
    CFMEMBERGUBUN_CD?: string;
    CFMEMBERGUBUN?: string;
    COURSECD?: string;
    CGTMGNO?: string;
    SUNAB_CNT?: number;
    SUNAB_AMT?: number;
    SUNAB1_CNT?: number;
    SUNAB1_AMT?: number;
    HWANBUL_CNT?: number;
    HWANBUL_AMT?: number;
    HWANBUL2_CNT?: number;
    HWANBUL2_AMT?: number;
}

export interface Ids_oMemberfee2_1 {
    CFGUBUNCD_NAME?: string;
    CFPROCDATE?: string;
    CNM?: string;
    CFMEMBERGUBUN?: string;
    COURSECD?: string;
    CGTMGNO?: string;
    SUNAB_CNT?: number;
    SUNAB_AMT?: number;
    SUNAB1_CNT?: number;
    SUNAB1_AMT?: number;
    HWANBUL_CNT?: number;
    HWANBUL_AMT?: number;
    HWANBUL2_CNT?: number;
    HWANBUL2_AMT?: number;
}

export interface Ids_oMemberfee1 {
    CNM?: string;
    CFMEMBERGUBUN?: string;
    CCOURSECD?: string;
    SUNAB_CNT?: string;
    SUNAB_AMT?: string;
    SUNAB1_CNT?: string;
    SUNAB1_AMT?: string;
    HWANBUL_CNT?: string;
    HWANBUL_AMT?: string;
    HWANBUL2_CNT?: string;
    HWANBUL2_AMT?: string;
}

export interface Ids_oMemberfee2 {
}

export interface Ids_oMemberfee3 {
    CFPROCDATE?: string;
    CGTMGNO?: string;
    GTDEPTNM?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    CMGNO?: string;
    BNM?: string;
    CFGUBUN?: string;
    CFGROUPMGNO?: string;
    CFSUNAPYEAR?: string;
    CNM?: string;
    SUNAB_MONEY?: string;
    REPAY_MONEY?: string;
    CFSUNAPHALF?: string;
    CFCANCELDATE?: string;
    CFREMARK?: string;
    CNO_BUNHO?: string;
}

export interface Ids_PrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_PrintGubun: Ids_PrintGubun[] = [
    { CD: '1', DATA: '집계' },
    { CD: '2', DATA: '리스트' },
];
