// @ts-nocheck
export const FrmCOM9060MPersonalDownloadConfirmData = {};

export interface Ids_ioJibu {
    DEPTCD?: string;
    DEPTNM?: string;
}

export interface Ids_ioMonth {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMonth: Ids_ioMonth[] = [
    { CD: '01', DATA: '1월' },
    { CD: '02', DATA: '2월' },
    { CD: '03', DATA: '3월' },
    { CD: '04', DATA: '4월' },
    { CD: '05', DATA: '5월' },
    { CD: '06', DATA: '6월' },
    { CD: '07', DATA: '7월' },
    { CD: '08', DATA: '8월' },
    { CD: '09', DATA: '9월' },
    { CD: '10', DATA: '10월' },
    { CD: '11', DATA: '11월' },
    { CD: '12', DATA: '12월' },
];

export interface Ids_ioYear {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioChoiceGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceGubun: Ids_ioChoiceGubun[] = [
    { CD: '0', DATA: '정상' },
    { CD: '1', DATA: '비정상' },
];

export interface Ids_oDownloadList1 {
}

export interface Ids_oDownloadList2 {
}

export interface Ids_oDownloadList3 {
}

export interface Ids_oDownloadChk {
}

export interface Ids_iDownloadChk {
    PDCGTMGNO?: string;
    PDCYEAR?: string;
    PDCMONTH?: string;
    PDCCHKGUBUN?: string;
    PDCCHKREMARK?: string;
}
