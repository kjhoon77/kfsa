// @ts-nocheck
export const Frmprofes0005P02ProfessorListData = {};

export interface Ids_oProfessorList {
    GPCLASSCD?: string;
    GPTEAMCD?: string;
    GTDEPTNM?: string;
    GTPRTSEQ?: string;
    GTTEAMNM?: string;
    GUBUN?: string;
    JIBU?: string;
    JIKWI?: string;
    JIKWICD?: string;
    MGNO?: string;
    NAME?: string;
    SPAY?: number;
    SOSOK?: string;
    LTIME?: string;
    GUBUNCD?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '전임' },
    { CD: '2', DATA: '겸임' },
    { CD: '3', DATA: '초빙강사' },
];

export interface Ids_oJibu {
    JJIBUCD?: string;
    JJIBUNM?: string;
    USE_YN?: string;
}

export interface Ids_oProfessorList_0 {
    GUBUN?: string;
    GUBUNCD?: string;
    JIBUCD?: string;
    JIKWICD?: string;
    JIKWINM?: string;
    NAME?: string;
    SABUN?: string;
    PAY?: string;
    JIBUCDNM?: string;
}

export interface Ids_oAllJibu {
    CD?: string;
    DATA?: string;
    USE_YN?: string;
}
