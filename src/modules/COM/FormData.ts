// @ts-nocheck
export const FormData = {};

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oFireCd {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
    CTCD?: string;
}

export interface Ids_oFireCenterCd {
    CD?: string;
    DATA?: string;
    UPCD?: string;
}

export interface Ids_oFireHead {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export interface Ids_ioObjGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioObjGubun: Ids_ioObjGubun[] = [
    { CD: '2', DATA: '전체(특,1,2급)' },
    { CD: '4', DATA: '전체[특,1,2급,일반]' },
    { CD: '0', DATA: '전체' },
    { CD: 'P02090050', DATA: '특급대상' },
    { CD: 'P02090100', DATA: '1급대상' },
    { CD: 'P02090200', DATA: '2급대상' },
    { CD: 'P02090300', DATA: '일반' },
    { CD: '1', DATA: '그외' },
];

export interface Ids_ioMFFireObj {
}

export interface Ids_ioKFFireObj {
}

export interface Ids_ioMFKeyfield {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMFKeyfield: Ids_ioMFKeyfield[] = [
    { CD: '1', DATA: '대상물명' },
    { CD: '2', DATA: '주소(번지)' },
    { CD: '3', DATA: '전화번호' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_ioCourseD {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioFireManagerInfo {
}

export interface Ids_oFire {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
    CTCD?: string;
}

export interface Ids_ioPBLINSTT {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPBLINSTT: Ids_ioPBLINSTT[] = [
    { CD: '0', DATA: '전체' },
    { CD: 'Y', DATA: 'Y' },
    { CD: 'N', DATA: 'N' },
];

export interface Ids_ioMFFireObjD {
}

export interface Ids_ioSelectGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSelectGubun: Ids_ioSelectGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '2', DATA: '일치완료' },
    { CD: '1', DATA: '미처리' },
    { CD: '3', DATA: '연계제외' },
];

export interface Ids_ioMFFireObj2 {
}

export interface Ids_ioKFFireObj2 {
}

export interface Ids_ioFireManagerInfo2 {
}

export interface Ids_ioMFFireObjD2 {
}

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '0', DATA: '기존 대상 일치화' },
    { CD: '1', DATA: '신규 대상 연계' },
];
