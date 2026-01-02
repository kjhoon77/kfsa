// @ts-nocheck
export const Frmcust0030MInetCustomerManagementData = {};

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '3', DATA: '선임 신규' },
    { CD: '1', DATA: '선임대상물 변경' },
    { CD: '2', DATA: '기본정보 변경' },
    { CD: '4', DATA: '해임 신청' },
];

export interface Ids_ioStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioStatus: Ids_ioStatus[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '신청' },
    { CD: '2', DATA: '접수' },
    { CD: '3', DATA: '수정완료' },
    { CD: '4', DATA: '보류' },
    { CD: '5', DATA: '신청취소' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oChangeList {
    FCMGNO?: string;
    FCSEQ?: string;
    FCCMGNO?: string;
    FCRESIDENT?: string;
    FCSTATUS?: string;
    FCGUBUN?: string;
    FCBULDNAME?: string;
    FCPOST?: string;
    FCADDR1?: string;
    FCADDR2?: string;
    FCHOPEADDRGUBUN?: string;
    FCCPOST?: string;
    FCCADDR1?: string;
    FCCADDR2?: string;
    FCTELEPHONE?: string;
    FCFAX?: string;
    FCHANDPHONE?: string;
    FCEMAIL?: string;
    FCSIZE?: string;
    FCOWNERNAME?: string;
    FCOWNERTEL?: string;
    FCOWNERHP?: string;
    FCREGDATE?: string;
    CGTMGNO?: string;
    MID?: string;
    MNM?: string;
    MMGNO?: string;
}

export interface Ids_ioJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJibuGubun: Ids_ioJibuGubun[] = [
    { CD: '0', DATA: '기존지부' },
    { CD: '1', DATA: '신규,변경지부' },
];
