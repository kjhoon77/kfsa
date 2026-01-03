// @ts-nocheck
export const Frmspcledu0600MExamSupervisorManagementData = {};

export interface Ids_ioExamSupervisor {
    SIBDAY?: string;
    SICOMPNM?: string;
    SIGTMGNO?: string;
    SIMGNO?: string;
    SIPERSONNM?: string;
    SISEXCD?: string;
    SITEL?: string;
    SIPOSITNNM?: string;
    SIHPTEL?: string;
    SISTARTDATE?: string;
    SIENDDATE?: string;
    SIREMARK?: string;
    SIPERSONYN?: string;
}

export interface Ids_oSex {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSex: Ids_oSex[] = [
    { CD: 'M', DATA: '남' },
    { CD: 'F', DATA: '여' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'SIGTMGNO', COLUMNNM: '지부코드' },
    { COLUMNCD: 'SIPERSONNM', COLUMNNM: '이름' },
    { COLUMNCD: 'SIPOSITNNM', COLUMNNM: '직위' },
    { COLUMNCD: 'SIBDAY', COLUMNNM: '생년월일' },
    { COLUMNCD: 'SISEXCD', COLUMNNM: '성별' },
    { COLUMNCD: 'SITEL', COLUMNNM: '전화번호' },
    { COLUMNCD: 'SICOMPNM', COLUMNNM: '근무처' },
    { COLUMNCD: 'SIHPTEL', COLUMNNM: '핸드폰번호' },
    { COLUMNCD: 'SISTARTDATE', COLUMNNM: '위촉시작일' },
    { COLUMNCD: 'SIENDDATE', COLUMNNM: '위촉종료일' },
    { COLUMNCD: 'SIREMARK', COLUMNNM: '비고' },
];

export interface Ids_oPersonYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPersonYn: Ids_oPersonYn[] = [
    { CD: 'Y', DATA: '내부(직원)' },
    { CD: 'N', DATA: '외부' },
];
