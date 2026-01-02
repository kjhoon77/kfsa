// @ts-nocheck
export const Frmspcledu0590MExamRoomManagementData = {};

export interface Ids_ioExamRoom {
    EOEXAMORDER?: string;
    EOEXAMORDERGUBUN?: string;
    EOMGJIBUCD?: string;
    EOMGNO?: string;
    EOYEAR?: string;
    EPMGNO?: number;
    EREXAMROOM?: string;
    ERNUMTYPE?: string;
    EXAMNM?: string;
    JJIBUNM?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    USE_YN?: string;
}

export interface Ids_oNumType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oNumType: Ids_oNumType[] = [
    { CD: '', DATA: '선택' },
    { CD: '01', DATA: '1종' },
    { CD: '02', DATA: '2종' },
    { CD: '03', DATA: '3종' },
    { CD: '04', DATA: '4종' },
    { CD: '05', DATA: '5종' },
    { CD: '06', DATA: '6종' },
    { CD: '07', DATA: '7종' },
    { CD: '08', DATA: '8종' },
    { CD: '09', DATA: '9종' },
    { CD: '10', DATA: '10종' },
    { CD: '11', DATA: '11종' },
    { CD: '12', DATA: '12종' },
    { CD: '13', DATA: '13종' },
    { CD: '14', DATA: '14종' },
    { CD: '15', DATA: '15종' },
    { CD: '16', DATA: '16종' },
    { CD: '17', DATA: '17종' },
    { CD: '18', DATA: '18종' },
    { CD: '19', DATA: '19종' },
    { CD: '20', DATA: '20종' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamOrderMgno {
}

export interface Ids_ioExamRoomSearch {
    EOEXAMORDER?: string;
    EOEXAMORDERGUBUN?: string;
    EOMGJIBUCD?: string;
    EOMGNO?: string;
    EOYEAR?: string;
    EPMGNO?: number;
    EREXAMROOM?: string;
    ERNUMTYPE?: string;
    EXAMNM?: string;
    JJIBUNM?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    USE_YN?: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'EOMGNO', COLUMNNM: '회차관리번호' },
    { COLUMNCD: 'ERNUMTYPE', COLUMNNM: '종별' },
    { COLUMNCD: 'EREXAMROOM', COLUMNNM: '시험장' },
    { COLUMNCD: 'USE_YN', COLUMNNM: '사용유무' },
];
