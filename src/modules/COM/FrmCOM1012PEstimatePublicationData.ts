// @ts-nocheck
export const FrmCOM1012PEstimatePublicationData = {};

export interface Ids_ioTrainingPerson {
    TPMGNO?: number;
    TPNM?: string;
    TPPERSONKEY?: string;
    KEY?: string;
}

export interface Ids_ModifyGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ModifyGubun: Ids_ModifyGubun[] = [
    { CD: '01', DATA: '이름/주민번호 변경' },
    { CD: '02', DATA: '접수 대상자 변경' },
];

export interface Ids_oEstimate {
    O_RTNSTAT?: string;
    O_RTNMSG?: string;
}
