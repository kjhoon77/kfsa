// @ts-nocheck
export const FrmCOM1100MOneSMSSendData = {};

export interface Ids_ioSmsSingle {
}

export interface Ids_oSMSMMS {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSMSMMS: Ids_oSMSMMS[] = [
    { CD: '0', DATA: '단문' },
    { CD: '1', DATA: '장문(MMS)' },
];

export interface Ids_oStatus {
    RESULTSTATUS?: string;
    RESULTERRMSG?: string;
}
