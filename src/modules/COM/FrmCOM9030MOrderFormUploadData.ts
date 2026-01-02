// @ts-nocheck
export const FrmCOM9030MOrderFormUploadData = {};

export interface Ids_ioBizformcode {
}

export interface Ids_iBizgubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_iBizgubun: Ids_iBizgubun[] = [
    { CD: '01', DATA: '강습' },
    { CD: '01', DATA: '심폐소생술' },
    { CD: '01', DATA: '생활안전강사' },
    { CD: '01', DATA: '교관양성과정' },
    { CD: '01', DATA: '심폐소생술전문자격' },
    { CD: '02', DATA: '시험' },
    { CD: '06', DATA: '실무' },
];

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

export interface Ids_iFormselect {
    I_FCCD?: string;
    I_GTMGNO?: string;
    I_YEAR?: string;
    I_COURSECD?: string;
    I_FRDATE?: string;
    I_TODATE?: string;
}

export interface Ids_oFormselect {
    ORDERNO?: string;
    FRDATE?: string;
    OKDATE?: string;
    REGDATE?: string;
    SNM?: string;
    FPPATH?: string;
    FPFILENM?: string;
    FAFCPK1?: string;
    FAFCPK2?: string;
    FAMGNO?: string;
    FCCD?: string;
    PK1?: string;
    PK2?: string;
    O_status?: string;
    O_value?: string;
}
