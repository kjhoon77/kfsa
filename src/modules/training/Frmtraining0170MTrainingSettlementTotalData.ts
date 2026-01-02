// @ts-nocheck
export const Frmtraining0170MTrainingSettlementTotalData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingJubsu {
    INCNT?: number;
    INOUTCNT?: number;
    JUBSUCNT?: number;
    MUNJE?: string;
    OUTCNT?: number;
    REPAYAMT?: number;
    REPAYCNT?: number;
    SUNABAMT?: number;
    SUNABCNT?: number;
    TOTALAMT?: number;
    TOTRAININGORDER?: string;
    GTTEAMNM?: string;
    TCCOURSENM?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioMunjeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMunjeGubun: Ids_ioMunjeGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'N', DATA: '일반' },
    { CD: 'Y', DATA: '면제' },
];

export interface Ids_ioCourseGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseGubun: Ids_ioCourseGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '3', DATA: '정규' },
    { CD: '4', DATA: '특별' },
];

export interface Ids_ioTrainingSettlementTotal {
    GTDEPTNM?: string;
    TSTCCOURSECD?: string;
    TCCOURSENICK?: string;
    TSTCOURSEGUBUN?: string;
    TSTMUNJEGUBUN?: string;
    TSTINCOME?: number;
    TSTBUBUNAMT?: number;
    TSTAFBUBUNAMT?: number;
    TSTSUNABAMT?: number;
    TSTREPAYAMT?: number;
    TSTBUBUNREPAYAMT?: number;
    TSTAFBUBUNREPAYAMT?: number;
    TSTDATE?: string;
    TSTGTMGNO?: string;
    GTPRTSEQ?: string;
    COURSEGUBUN?: string;
    MUNJEGUBUN?: string;
}

export interface Ids_ioCourseFG {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseFG: Ids_ioCourseFG[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '강습교육' },
    { CD: '2', DATA: '기타교육' },
];
