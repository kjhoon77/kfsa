// @ts-nocheck
export const Frmsys0098PIpPersonInputData = {};

export interface Ids_ioUser {
    ADMINGUBUN?: string;
    PPOSITNCD?: string;
    PPOSITNNM?: string;
    PPERSONNM?: string;
    PSABUN?: string;
    PDEPTCD?: string;
    PDEPTNM?: string;
    PHPNO?: string;
    PCALLCENTERYN?: string;
    PUSEYN?: string;
    IPUSERGUBUN?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioCallYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCallYN: Ids_ioCallYN[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_ioUSEYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioUSEYN: Ids_ioUSEYN[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_ioUserYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioUserYN: Ids_ioUserYN[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_ioIPUSERGUBUN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioIPUSERGUBUN: Ids_ioIPUSERGUBUN[] = [
    { CD: '', DATA: '해당없음' },
    { CD: 'M', DATA: '매니저' },
    { CD: 'R', DATA: '원격상담' },
];
