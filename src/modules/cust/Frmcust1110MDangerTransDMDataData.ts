// @ts-nocheck
export const Frmcust1110MDangerTransDMDataData = {};

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_SearchJogeon {
    JIBU?: string;
    REGION_GUBUN?: string;
    REGION1?: string;
    REGION2?: string;
    PRINT_GUBUN?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '1', DATA: '전체(이수+미이수) 명단 출력' },
    { CD: '2', DATA: '당해년도 미이수 명단 출력' },
];

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '선택' },
];

export interface Ids_SendReport {
    BNM?: string;
    ZIPCD?: string;
    ADDR1?: string;
    ADDR2?: string;
}
