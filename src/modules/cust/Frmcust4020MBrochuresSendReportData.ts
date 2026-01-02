// @ts-nocheck
export const Frmcust4020MBrochuresSendReportData = {};

export interface Ids_ioJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_SearchJogeon {
    JIBU?: string;
    RETURN_CNT?: string;
    CHECK_ALL?: string;
    CHECK_IN?: string;
    FEEMODE?: string;
    BIZGUBUN?: string;
    HOPEDATE?: string;
}

export interface Ids_SendList {
    JIBU_CNO?: string;
    BNM?: string;
    CEDUPOSTZIPCD?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTPLACE?: string;
    CGROUPNM?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    CGROUPCD?: string;
    CGTMGNO?: string;
    DISTINCT_GUBUN?: string;
    COURSECD?: string;
}

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '1', DATA: '발송대상' },
    { CD: '2', DATA: '중복' },
];

export interface Ids_SendList_D {
    JIBU_CNO?: string;
    BNM?: string;
    CEDUPOSTZIPCD?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTPLACE?: string;
    CGROUPNM?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    CGROUPCD?: string;
    CGTMGNO?: string;
    DISTINCT_GUBUN?: string;
    COURSECD?: string;
}

export interface Ids_SendList_Report {
    CGROUPCD?: string;
    CGROUPNM?: string;
    COURSECD?: string;
    JIBU1?: number;
    JIBU2?: number;
    JIBU3?: number;
    JIBU4?: number;
    JIBU5?: number;
    JIBU6?: number;
    JIBU7?: number;
    JIBU8?: number;
    JIBU9?: number;
    JIBU10?: number;
    JIBU11?: number;
    JIBU12?: number;
    JIBU13?: number;
    JIBU14?: number;
}

export const ds_ds_SendList_Report: Ids_SendList_Report[] = [
    { CGROUPCD: '10', CGROUPNM: '1급소방안전관리자', COURSECD: '11', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '10', CGROUPNM: '2급소방안전관리자', COURSECD: '12', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '10', CGROUPNM: '공공1급소방안전관리자', COURSECD: '13', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '10', CGROUPNM: '공공2급소방안전관리자', COURSECD: '14', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '10', CGROUPNM: '특급소방안전관리자', COURSECD: '15', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '30', CGROUPNM: '위험물안전관리자', COURSECD: '30', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '50', CGROUPNM: '소방기술자', COURSECD: '50', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '60', CGROUPNM: '개인', COURSECD: '61', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
    { CGROUPCD: '70', CGROUPNM: '단체', COURSECD: '71', JIBU1: '', JIBU10: '', JIBU11: '', JIBU12: '', JIBU13: '', JIBU14: '', JIBU2: '', JIBU3: '', JIBU4: '', JIBU5: '', JIBU6: '', JIBU7: '', JIBU8: '', JIBU9: '' },
];

export interface Ids_ioBizGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioBizGubun: Ids_ioBizGubun[] = [
    { CD: '0', DATA: '소방안전지(홍보과)' },
    { CD: '1', DATA: '소방기술지(연구실)' },
];

export interface Ids_oCreateMode {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oCreateMode: Ids_oCreateMode[] = [
    { CD: '0', DATA: '일반자료생성' },
    { CD: '1', DATA: '회비완납자만 (회비고지서와 병행발송 방식시 선택)' },
];
