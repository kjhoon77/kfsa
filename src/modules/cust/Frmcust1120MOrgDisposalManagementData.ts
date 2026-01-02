// @ts-nocheck
export const Frmcust1120MOrgDisposalManagementData = {};

export interface Ids_ioPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPrintGubun: Ids_ioPrintGubun[] = [
    { CD: '0', DATA: '지부, 분야, 처분일자' },
    { CD: '1', DATA: '처분일자, 지부, 분야' },
    { CD: '2', DATA: '분야, 지부, 처분일자' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioTrainingOrder {
    ODMGNO?: string;
    ODNM?: string;
    ODBIRTHDAY?: string;
    ODGTMGNO?: string;
    GTTEAMNM?: string;
    ODCOURSECD?: string;
    PCTCCOURSENM?: string;
    ODORDERCD?: string;
    ODSTARTDATE?: string;
    ODENDDATE?: string;
    ODLAW?: string;
    ODORGDOC?: string;
    ODREMARK?: string;
    ODREGDATE?: string;
    ODREGSABUN?: string;
    ODMODDATE?: string;
    ODMODSABUN?: string;
    PNM?: string;
    BIRTHDAY?: string;
    ODCNO?: string;
    ODBNM?: string;
    ODEDUYEAR?: string;
}

export interface Ids_oJibu2 {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse2 {
    CD?: string;
    DATA?: string;
}

export interface Ids_CmbComder {
    CD?: string;
    DATA?: string;
}

export interface Ids_CmbComder2 {
    CD?: string;
    DATA?: string;
}

export interface Ids_oLaw {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oLaw: Ids_oLaw[] = [
    { CD: '', DATA: '선택' },
    { CD: '0', DATA: '화재의 예방 및 안전관리에 관한 법률 시행규칙 제19조' },
    { CD: '1', DATA: '위험물안전관리법 제28조 제4항' },
    { CD: '2', DATA: '소방시설공사업법 제29조 제2항' },
];
