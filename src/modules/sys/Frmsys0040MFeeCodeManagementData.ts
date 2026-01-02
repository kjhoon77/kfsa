// @ts-nocheck
export const Frmsys0040MFeeCodeManagementData = {};

export interface Ids_ioTrainingFeeCode {
    CREATE_DATE?: string;
    CREATE_ID?: string;
    MODIFY_DATE?: string;
    MODIFY_ID?: string;
    TCCOURSECD?: string;
    TCMUNJEGUBUN?: string;
    TFCENDDATE?: string;
    TFCFEE?: number;
    TFCSEQ?: number;
    TFCSTARTDATE?: string;
    USE_YN?: string;
    TFCFEEGUBUN?: string;
}

export interface Ids_oFeeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oFeeGubun: Ids_oFeeGubun[] = [
    { CD: 'T', DATA: '강습' },
    { CD: 'E', DATA: '시험' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}
