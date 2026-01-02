// @ts-nocheck
export const Frmspcledu9100MPictureManagementData = {};

export interface Ids_ioImageInfo {
    BIRTHDAY?: string;
    IIAPPROVAL?: string;
    IIDIRPATH?: string;
    IIIMGBINARY?: string;
    IIIMGSEQ?: string;
    IIREALNM?: string;
    IIREGDATE?: string;
    IIREGGUBUN?: string;
    IIREGGUBUNNM?: string;
    IIREGSABUN?: string;
    IISAVENM?: string;
    TPLASTIMGSEQ?: number;
    TPMGNO?: number;
    TPNM?: string;
    TPRESIDENTNO?: string;
    TPAUTHYN?: string;
}

export interface Ids_oRegGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oApproval {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oApproval: Ids_oApproval[] = [
    { CD: 'A', DATA: '전체' },
    { CD: 'Y', DATA: '승인' },
    { CD: 'N', DATA: '미승인' },
];

export interface Ids_ioTrainingPerson {
    TPMGNO?: number;
}
