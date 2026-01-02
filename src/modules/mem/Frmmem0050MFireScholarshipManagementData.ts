// @ts-nocheck
export const Frmmem0050MFireScholarshipManagementData = {};

export interface Ids_ioPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioPrintGubun: Ids_ioPrintGubun[] = [
    { CD: '0', DATA: '지부, 직능, 지급일자' },
    { CD: '1', DATA: '지급일자, 지부, 직능' },
    { CD: '2', DATA: '직능, 지부, 지급일자' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioScholarship {
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

export interface Ids_oYear {
    CD?: string;
    DATA?: string;
}

export interface Ids_oYear2 {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMember {
}

export interface Ids_iScholarship {
    FSMMGNO?: string;
    FSCMGNO?: string;
    FSNM?: string;
    FSBIRTHDAY?: string;
    FSPERSONKEY?: string;
    FSBNM?: string;
    FSYEAR?: string;
    FSDATE?: string;
    FSAMT?: string;
    FSREMARK?: string;
    FSSELECTYN?: string;
}

export interface Ids_oForm {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oForm: Ids_oForm[] = [
    { CD: '', DATA: '선택' },
    { CD: '0027', DATA: '(선발자)소방안전장학금 서류' },
    { CD: '0028', DATA: '(탈락자)소방안전장학금 서류' },
];

export interface Ids_iFormSave {
    I_PROC?: string;
    I_FCCD?: string;
    I_FAMGNO?: string;
    I_PK1VAL?: string;
    I_PK2VAL?: string;
    I_FRDATE?: string;
    I_PATH?: string;
    I_FILENM?: string;
}

export interface Ids_oFormSave {
}

export interface Ids_iFormDelete {
    I_FCCD?: string;
    I_FAMGNO?: string;
    I_PK1VAL?: string;
    I_PK2VAL?: string;
    I_PATH?: string;
    I_FILENM?: string;
}

export interface Ids_oFormDelete {
}

export interface Ids_oSelectGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSelectGubun: Ids_oSelectGubun[] = [
    { CD: 'Y', DATA: '선발자' },
    { CD: 'N', DATA: '탈락자' },
];
