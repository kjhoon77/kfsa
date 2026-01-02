// @ts-nocheck
export const Frmcust1190MEmailSendManagementData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioInternetCustomerJubsu {
    SEL?: string;
    CNO?: string;
    EMMGNO?: string;
    EMSEQ?: string;
    EMEDSEQ?: string;
    EMCMGNO?: string;
    FMHFMMGNO?: string;
    ESGTMGNO?: string;
    ESGTDEPTNM?: string;
    ESYEAR?: string;
    ESDATE?: string;
    ESTIME?: string;
    EDUDATE?: string;
    ESCOUSECD?: string;
    ESCOURSENM?: string;
    FMNM?: string;
    EMEMAIL?: string;
    EMBUILDING?: string;
    EDPROCDATE?: string;
    EMTEL?: string;
    EMPHONE?: string;
    EMRESIDENT?: string;
    EMADDR?: string;
    EPNM?: string;
    EPFILE?: string;
    ESPREPARED?: string;
    ESGUBUN?: string;
    EMSTATUS?: string;
    EMPAYSTATUS?: string;
    EPPARKINGINFO?: string;
}

export interface Ids_oEmailSeq {
}

export interface Ids_oStatus1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus1: Ids_oStatus1[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '신청(미입금)' },
    { CD: '2', DATA: '계좌할당(미입금)' },
    { CD: '3', DATA: '계좌취소(미입금)' },
    { CD: '4', DATA: '입금완료' },
];

export interface Ids_oIsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oIsuGubun: Ids_oIsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '이수      ' },
    { CD: 'N', DATA: '미이수' },
];
