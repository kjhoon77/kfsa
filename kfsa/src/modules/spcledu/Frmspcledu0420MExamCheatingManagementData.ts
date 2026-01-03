// @ts-nocheck
export const Frmspcledu0420MExamCheatingManagementData = {};

export interface Ids_ioExamCheat {
    BIRTHDAY?: string;
    ECCHEATGUBUN?: string;
    ECCHEATREASON?: string;
    ECMGNO?: number;
    ECMODDATE?: string;
    ECREGDATE?: string;
    ECREGSABUN?: string;
    ECREMARK?: string;
    ECSTOPENDDATE?: string;
    ECSTOPSTARTDATE?: string;
    ECTCCOURSECD?: string;
    ECTPMGNO?: number;
    EXMODSABUN?: string;
    TCCOURSENM?: string;
    TPNM?: string;
    TPRESIDENTNO?: string;
}

export interface Ids_oCheatGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: 'ALL', DATA: '모든 이력 출력' },
    { CD: '2YEAR', DATA: '현재 시험응시자격 정지자만 출력' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamOrderMgno {
}

export interface Ids_oExamCheatReport {
}
