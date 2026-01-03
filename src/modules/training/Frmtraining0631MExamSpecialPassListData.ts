// @ts-nocheck
export const Frmtraining0631MExamSpecialPassListData = {};

export interface Ids_oPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassYn: Ids_oPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '최종합격' },
    { CD: '1Y', DATA: '1차합격' },
    { CD: '1N', DATA: '1차불합격' },
    { CD: '2N', DATA: '2차불합격' },
    { CD: 'X', DATA: '미응시' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCourse: Ids_oCourse[] = [
    { CD: '10', DATA: '특급소방안전관리자' },
];

export interface Ids_oRepayYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRepayYn: Ids_oRepayYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '환불자' },
    { CD: 'N', DATA: '미환불자' },
];

export interface Ids_oExamSpecialPassList {
    BIRTHDAY?: string;
    EJMGNO?: number;
    PASSYN?: string;
    EJPERSONNM?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOHJUBSUNO?: number;
    EOMGNO?: number;
    EOTCCOURSECD?: string;
    EOYEAR?: string;
    GTDEPTNM?: string;
    TCCOURSENM?: string;
    JUBSUGUBUN?: string;
    ERSEQ?: string;
    ER1CHASU1SUBJECTSCORE?: string;
    ER1CHASU2SUBJECTSCORE?: string;
    ER1CHASURANK?: string;
    ER2CHASU1SUBJECTSCORE?: string;
    ER2CHASU2SUBJECTSCORE?: string;
    ER2CHASURANK?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJubsuGubun: Ids_ioJubsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '20', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '01', DATA: '학력' },
    { CD: '02', DATA: '학·경력' },
    { CD: '03', DATA: '가접수' },
];

export interface Ids_oJubsuYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuYn: Ids_oJubsuYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '1,2차' },
    { CD: '1', DATA: '1차만' },
    { CD: '2', DATA: '2차만' },
    { CD: '3', DATA: '1차 + 1,2차' },
    { CD: '4', DATA: '2차 + 1,2차' },
];

export interface Ids_oAbsentGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAbsentGubun: Ids_oAbsentGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '1차 출석' },
    { CD: '2', DATA: '1차 결시' },
    { CD: '3', DATA: '2차 출석' },
    { CD: '4', DATA: '2차 결시' },
];
