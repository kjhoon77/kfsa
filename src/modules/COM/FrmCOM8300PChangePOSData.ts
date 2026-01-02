// @ts-nocheck
export const FrmCOM8300PChangePOSData = {};

export interface Ids_oRecieptYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRecieptYn: Ids_oRecieptYn[] = [
    { CD: 'Y', DATA: '출력' },
    { CD: 'N', DATA: '미출력' },
];

export interface Ids_oPosJibu {
}

export interface Ids_oPosItem {
}

export interface Ids_iSettlementPos {
    PROGRAMID?: string;
    SUNAPGUBUN?: string;
    PROCAMOUNT?: string;
    POSYEAR?: string;
    POSMGNO?: string;
    KEY1?: string;
    KEY2?: string;
    PROCDATE?: string;
    PONYDATE?: string;
    PRINTYN?: string;
    BANKSUNAPGUBUN?: string;
    CARDNO?: string;
    CARDINSTALL?: string;
    CASHRECEIPTUSE?: string;
    CASHCARDNO?: string;
    VIRTBANKCODE?: string;
    VIRTCLOSEDATE?: string;
    VIRTHPTEL?: string;
    VIRTCASHRECEIPTYN?: string;
    PAYMENTGUBUN?: string;
    PROCGUBUN?: string;
    PONYGUBUN?: string;
    JIBUMGID?: string;
    VIRTBANKNAME?: string;
    REPAYCD?: string;
    PARTREPAYYN?: string;
    SUNAPACTIONREF?: string;
}

export interface Ids_oSettlementPos {
}

export interface Ids_oPrintHistory {
}

export interface Ids_oPosSunap {
}

export interface Ids_oDeleteSanap {
}

export interface Ids_oTrainingOrderChange {
}

export interface Ids_oExecuteRepay {
}

export interface Ids_oRepayCancel {
}

export interface Ids_oRepayOk {
}

export interface Ids_oChangeDate {
}

export interface Ids_oTrainingRepayFee {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingAbsentDay {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingSunapFee {
}

export interface Ids_oPosStartInfo {
}
