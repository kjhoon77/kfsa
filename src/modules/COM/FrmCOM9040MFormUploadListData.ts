// @ts-nocheck
export const FrmCOM9040MFormUploadListData = {};

export interface Ids_ioBiztotalcode {
}

export interface Ids_iBizorder {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_iFormsave {
    I_PROC?: string;
    I_FCCD?: string;
    I_FAMGNO?: string;
    I_PK1VAL?: string;
    I_PK2VAL?: string;
    I_FRDATE?: string;
    I_PATH?: string;
    I_FILENM?: string;
    I_SABUN?: string;
    O_status?: string;
    O_value?: string;
}

export interface Ids_oEnroll {
    CD?: string;
    DATA?: string;
}

export interface Ids_iTrainingFrom {
    I_PROC?: string;
    I_FCCD?: string;
    I_FAMGNO?: string;
    I_PK1VAL?: string;
    I_PK2VAL?: string;
    I_FRDATE?: string;
    I_PATH?: string;
    I_FILENM?: string;
    I_SABUN?: string;
    O_status?: string;
    O_value?: string;
}

export interface Ids_oTrainingFrom {
    O_status?: string;
    O_value?: string;
}

export interface Ids_iBizgubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_iBizgubun: Ids_iBizgubun[] = [
    { CD: '01', DATA: '강습' },
    { CD: '06', DATA: '실무' },
    { CD: '01', DATA: '심폐소생술' },
    { CD: '01', DATA: '생활안전강사' },
    { CD: '01', DATA: '심폐소생술전문자격' },
    { CD: '03', DATA: '수첩발급' },
    { CD: '02', DATA: '시험' },
];

export interface Ids_iTotalselect {
    I_GTMGNO?: string;
    I_BIZ?: string;
    I_FRDATE?: string;
    I_TODATE?: string;
    I_FCCD?: string;
    I_COURSECD?: string;
    I_REGYN?: string;
}

export interface Ids_oTotalselect {
    PK1?: string;
    PK2?: string;
    FCCD?: string;
    FCFULLNM?: string;
    FCLINK?: string;
    COURSECD?: string;
    COUSENM?: string;
    ORDERNO?: string;
    JUPSUNO?: string;
    FRDATE?: string;
    OKDATE?: string;
    REGY?: string;
    REGN?: string;
}

export interface Ids_inRegyn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_inRegyn: Ids_inRegyn[] = [
    { CD: 'Y', DATA: '등록' },
    { CD: 'N', DATA: '미등록' },
];
