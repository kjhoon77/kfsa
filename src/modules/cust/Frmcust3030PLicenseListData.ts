// @ts-nocheck
export const Frmcust3030PLicenseListData = {};

export interface Ids_oFireManagerList {
    BILD_SN?: string;
    OBJ_NM?: string;
    CRQFC_CODE?: number;
    CRQFC_NM?: string;
    APNT_DE?: string;
    BUILDADRES?: string;
}

export interface Ids_iGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_iGubun: Ids_iGubun[] = [
    { CD: 'Y', DATA: '연계' },
    { CD: 'N', DATA: '직접입력' },
];

export interface Ids_oEdupassList {
    SEL?: string;
    GUBUN?: string;
    TCCOURSENM?: string;
    GTTEAMNM?: number;
    TOENDDATE?: string;
}

export interface Ids_oLicenseList {
    SEL?: string;
    LTCCOURSENM?: string;
    LLCSNO?: string;
    LISSUEDATE?: number;
    LORGGUBUN?: string;
    LORGGUBUNNMM?: string;
}
