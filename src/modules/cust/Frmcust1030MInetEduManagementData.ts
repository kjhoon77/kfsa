// @ts-nocheck
export const Frmcust1030MInetEduManagementData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oInetJubsu {
    EDPROCDATE?: string;
    EMCMGNO?: number;
    EMMGNO?: number;
    EMPAYSTATUS?: number;
    EMSEQ?: number;
    ESCOURSENM?: string;
    ESCOUSECD?: string;
    ESDATE?: string;
    ESGTMGNO?: string;
    ESTIME?: string;
    ESYEAR?: string;
    FMNM?: string;
    GTDEPTNM?: string;
    EMBUILDING?: string;
    PMPGMGUBUN?: string;
    PMPGMGUBUNNM?: string;
    ESEDUORDER?: string;
}

export interface Ids_oProcGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oProcGubun: Ids_oProcGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '10', DATA: '접수                                    ' },
    { CD: '30', DATA: '일정변경                              ' },
    { CD: '50', DATA: '환불                                    ' },
];

export interface Ids_oStatus1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus1: Ids_oStatus1[] = [
    { CD: '10', DATA: '전체' },
    { CD: '1', DATA: '신청(미입금)' },
    { CD: '2', DATA: '접수완료' },
    { CD: '3', DATA: '신청취소' },
];

export interface Ids_oStatus2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus2: Ids_oStatus2[] = [
    { CD: '30', DATA: '전체' },
    { CD: '31', DATA: '소속지부->소속지부' },
    { CD: '32', DATA: '타지부->소속지부' },
];

export interface Ids_oStatus3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus3: Ids_oStatus3[] = [
    { CD: '50', DATA: '전체' },
    { CD: '5', DATA: '환불신청(미입금)' },
    { CD: '6', DATA: '환불접수(신청확인)' },
    { CD: '7', DATA: '환불완료(입금)' },
    { CD: '8', DATA: '환불취소' },
];

export interface Ids_oJubsuStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuStatus: Ids_oJubsuStatus[] = [
    { CD: '0', DATA: '미신청' },
    { CD: '1', DATA: '미입금' },
    { CD: '2', DATA: '접수완료' },
    { CD: '3', DATA: '신청취소' },
    { CD: '4', DATA: '회차변경' },
    { CD: '5', DATA: '환불신청' },
    { CD: '6', DATA: '환불접수' },
    { CD: '7', DATA: '환불완료' },
    { CD: '8', DATA: '환불취소' },
];

export interface Ids_MECOURSE {
    CD?: string;
    DATA?: string;
}

export const ds_ds_MECOURSE: Ids_MECOURSE[] = [
    { CD: '0', DATA: '기본교육' },
    { CD: '2', DATA: '특별교육' },
    { CD: '3', DATA: '인증교육' },
    { CD: '4', DATA: '전문교육' },
];
