// @ts-nocheck
export const Frmcust2160MEGrioGenerateData = {};

export interface Ids_oRadioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRadioGubun: Ids_oRadioGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '회원' },
    { CD: '2', DATA: '비회원' },
];

export interface Ids_oMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMemberGubun: Ids_oMemberGubun[] = [
    { CD: '0', DATA: '상반기(1)' },
    { CD: '1', DATA: '하반기(2)' },
];

export interface Ids_oNotification {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oNotification: Ids_oNotification[] = [
    { CD: '0', DATA: '회비고지' },
    { CD: '1', DATA: '고지안함' },
];

export interface Ids_oLongNotSunap {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLongNotSunap: Ids_oLongNotSunap[] = [
    { CD: '2', DATA: '2년 미납' },
    { CD: '3', DATA: '3년 미납' },
    { CD: '4', DATA: '4년 미납' },
];

export interface Ids_oNotification2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oNotification2: Ids_oNotification2[] = [
    { CD: '0', DATA: '회비고지' },
    { CD: '1', DATA: '고지안함' },
];

export interface Ids_oNotification3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oNotification3: Ids_oNotification3[] = [
    { CD: '0', DATA: '회비고지' },
    { CD: '1', DATA: '고지안함' },
];

export interface Ids_oOrderBy {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOrderBy: Ids_oOrderBy[] = [
    { CD: '0', DATA: '우편번호, 대상물순' },
    { CD: '1', DATA: '지역, 직능, 관리번호순' },
];

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택 ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oNotMemberFirsSecondHalf {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oNotMemberFirsSecondHalf: Ids_oNotMemberFirsSecondHalf[] = [
    { CD: '1', DATA: '상반기(1)' },
    { CD: '2', DATA: '하반기(2)' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oCourse_Minus {
    CD?: string;
    DATA_A?: string;
}

export interface Ids_ioCreateNotification {
    FGIJUN1?: number;
}

export interface Ids_oSelectYN1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSelectYN1: Ids_oSelectYN1[] = [
    { CD: '0', DATA: '미지정' },
    { CD: '1', DATA: '지정' },
];

export interface Ids_oSelectYN2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSelectYN2: Ids_oSelectYN2[] = [
    { CD: '0', DATA: '미지정' },
    { CD: '1', DATA: '지정' },
];

export interface Ids_oReturn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oReturn: Ids_oReturn[] = [
    { CD: '0', DATA: '해당없음' },
    { CD: '1', DATA: '반송없는 자료' },
    { CD: '2', DATA: '회비' },
    { CD: '3', DATA: '교육' },
    { CD: '4', DATA: '기타' },
];

export interface Ids_ioExcelLoad {
    col01?: string;
    col02?: string;
    col03?: string;
    col04?: string;
    col05?: string;
    col06?: string;
    col07?: string;
    col08?: string;
    col09?: string;
    col10?: string;
    col11?: string;
    col12?: string;
    col13?: string;
    col14?: string;
    col15?: string;
    col16?: string;
    col17?: string;
    col18?: string;
    col19?: string;
    col20?: string;
    col21?: string;
    col22?: string;
    col23?: string;
    col24?: string;
    col25?: string;
    col26?: string;
    col27?: string;
    col28?: string;
    col29?: string;
    col30?: string;
    col31?: string;
    col32?: string;
    col33?: string;
    col34?: string;
    col35?: string;
    col36?: string;
}

export interface Ids_oSelectYN3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSelectYN3: Ids_oSelectYN3[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_ioNotificationJibge {
}

export interface Ids_ioNotificationTotaling {
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioMemberGubunName {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubunName: Ids_ioMemberGubunName[] = [
    { CD: '0', DATA: 'A' },
    { CD: '1', DATA: 'B' },
];

export interface Ids_oFeemode {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oFeemode: Ids_oFeemode[] = [
    { CD: '0', DATA: '일반회비고지' },
    { CD: '1', DATA: '소방안전지+회비고지' },
];

export interface Ids_oRadioGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRadioGubun2: Ids_oRadioGubun2[] = [
    { CD: '0', DATA: '회원(소방안전지 + 회비)' },
    { CD: '1', DATA: '회원(회비만)' },
    { CD: '2', DATA: '비회원' },
];
