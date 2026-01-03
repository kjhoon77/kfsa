// @ts-nocheck
export const Frmtraining0692MSMSPatternData = {};

export interface Ids_ioSmsPattern {
    SPMGNO?: string;
    SPGTMGNO?: string;
    SPTYPE?: string;
    SPBIZGUBUN?: string;
    SPPATTERN?: string;
    SPREGDATE?: string;
    SPREGSABUN?: string;
    GTDEPTNM?: string;
    SPREGNAME?: string;
    SPTYPENM?: string;
    SPBIZGUBUNNM?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '고객(실무교육)' },
    { CD: '2', DATA: '강습(강습,시험)' },
    { CD: '9', DATA: '기타' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSendGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSendGubun: Ids_oSendGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '단문(SMS)' },
    { CD: '1', DATA: '장문(MMS)' },
];
