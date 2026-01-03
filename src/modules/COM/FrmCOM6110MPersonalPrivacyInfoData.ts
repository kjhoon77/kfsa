// @ts-nocheck
export const FrmCOM6110MPersonalPrivacyInfoData = {};

export interface Ids_oBizGubun {
    CD?: string;
    DATA?: string;
    GROUPCD?: string;
}

export interface Ids_oPrivacyCourse {
    CD?: string;
    DATA?: string;
    COURSECD?: string;
}

export interface Ids_ioPrivacyAgree {
}

export interface Ids_ioPrivacyAgreeH {
}

export interface Ids_o16TimeStamp {
}

export interface Ids_iPrivacyAgree {
    PPNM?: string;
    PPRESIDENTNO?: string;
    PPSTATUS?: string;
    NEWDATA?: string;
    PABIZCD?: string;
    PACOURSECD?: string;
    PHPROCSTATUS?: string;
    PHPROCDATE?: string;
    PHPROCMETHOD?: string;
    PHMGMTPK1?: string;
    PHMGMTPK2?: string;
    RUPATH?: string;
    RUFILENM?: string;
    RUMGNO?: string;
    PAMGNO?: string;
    PHSEQ?: string;
}

export interface Ids_oPrivacyAgreeResult {
}

export interface Ids_iPrivacyAgreeDelete {
    PPNM?: string;
    PPRESIDENTNO?: string;
    PAMGNO?: string;
    PHSEQ?: string;
    RUMGNO?: string;
}

export interface Ids_oAgreeGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAgreeGubun: Ids_oAgreeGubun[] = [
    { CD: '0', DATA: '동의' },
    { CD: '1', DATA: '동의 철회' },
];
