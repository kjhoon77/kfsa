// @ts-nocheck
export const Frmcust3030PAsstnLicenseListData = {};

export interface Ids_oFireManagerList {
    BILD_SN?: string;
    OBJ_NM?: string;
    CRQFC_CODE?: number;
    CRQFC_NM?: string;
    APNT_DE?: string;
    BUILDADRES?: string;
}

export interface Ids_oLicenseList {
    SEL?: string;
    LTCCOURSENM?: string;
    LLCSNO?: string;
    LISSUEDATE?: number;
    LORGGUBUN?: string;
    LORGGUBUNNMM?: string;
}

export interface Ids_iGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_iGubun: Ids_iGubun[] = [
    { CD: 'L', DATA: '자격' },
    { CD: 'T', DATA: '강습수료' },
    { CD: 'K', DATA: '경력기간' },
];

export interface Ids_oEdupassList {
    SEL?: string;
    GUBUN?: string;
    TCCOURSENM?: string;
    GTTEAMNM?: number;
    TOENDDATE?: string;
}
