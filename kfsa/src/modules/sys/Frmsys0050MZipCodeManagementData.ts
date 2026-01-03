// @ts-nocheck
export const Frmsys0050MZipCodeManagementData = {};

export interface Ids_ioZipCode {
    CREATE_DATE?: string;
    CREATE_ID?: string;
    JJIBUCD?: string;
    MODIFY_DATE?: string;
    MODIFY_ID?: string;
    ZBUNJI?: string;
    ZDONG?: string;
    ZHO?: string;
    ZKU?: string;
    ZREGIONCD?: string;
    ZSEQ?: number;
    ZSIDO?: string;
    ZZIPCD?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibu: Ids_oJibu[] = [
    { CD: 'M', DATA: '남' },
    { CD: 'F', DATA: '여' },
];

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRegion: Ids_oRegion[] = [
    { CD: 'M', DATA: '남' },
    { CD: 'F', DATA: '여' },
];
