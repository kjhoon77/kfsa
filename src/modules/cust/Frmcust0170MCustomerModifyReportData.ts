// @ts-nocheck
export const Frmcust0170MCustomerModifyReportData = {};

export interface Ids_ioYear {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYear: Ids_ioYear[] = [
    { CD: '', DATA: '전체' },
    { CD: '2009', DATA: '2009' },
    { CD: '2008', DATA: '2008' },
    { CD: '2007', DATA: '2007' },
    { CD: '2006', DATA: '2006' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioChoiceYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChoiceYn: Ids_ioChoiceYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '선택' },
];

export interface Ids_ioOrder {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioOrder: Ids_ioOrder[] = [
    { CD: '1', DATA: '직능' },
    { CD: '2', DATA: '처리일시' },
];

export interface Ids_ioReport {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioReport: Ids_ioReport[] = [
    { CD: '02', DATA: '1. 회원 신규 대장' },
    { CD: '11', DATA: '10. 비회원 탈퇴 → 겸직 신규 대장' },
    { CD: '03', DATA: '2. 회원 삭제 대장' },
    { CD: '12', DATA: '11. 회원 탈퇴 → 비회원 신규 대장' },
    { CD: '04', DATA: '3. 겸직 신규 대장' },
    { CD: '13', DATA: '12. 겸직 탈퇴 → 비회원 신규 대장' },
    { CD: '05', DATA: '4. 겸직 삭제 대장' },
    { CD: '14', DATA: '13. 회원 직능 변경 → 회원 직능 신규 대장' },
    { CD: '06', DATA: '5. 비회원 신규 대장' },
    { CD: '15', DATA: '14. 겸직 직능 변경 → 겸직 직능 신규 대장' },
    { CD: '07', DATA: '6. 비회원 삭제 대장' },
    { CD: '16', DATA: '15. 비회원 직능 변경 → 비회원 직능 신규 대장' },
    { CD: '08', DATA: '7. 겸직 해제 → 회원 신규 대장' },
    { CD: '01', DATA: '16. 지역 변경 대장' },
    { CD: '09', DATA: '8. 회원 해제 → 겸직 신규 대장' },
    { CD: '', DATA: '17. 전체(1~16)' },
    { CD: '10', DATA: '9. 비회원 탈퇴 → 회원 신규 대장' },
];

export interface Ids_ioCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioCourseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioCourseYn: Ids_ioCourseYn[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '선택                               ' },
    { CD: '1', DATA: '다중선택' },
];

export interface Ids_oCustomerModify {
    CCOURSECD?: string;
    CTMASDGNO?: string;
    CREGCD?: string;
    BNASDM?: string;
    CNO?: string;
    GTTEAMNM?: string;
    GTMGNO?: string;
    GTPRTSEQ?: string;
    BNM?: string;
    FMNM?: string;
    CREGISTERYYMM?: string;
    CFEEYYMM?: string;
    CCPROCDATE?: string;
    CCCHANGECD?: string;
    BADDR1?: string;
    BADDR2?: string;
    BADDR?: string;
    BTEL?: string;
    CSTATUSGUBUN?: string;
    CCCDNM?: string;
    CCOURSE?: string;
    CCCD?: string;
    CCOLDVAL ?: string;
    CCNEWVAL ?: string;
    CNO_BUNHO?: string;
    OLDCNICKNM?: string;
    OLDRCNM?: string;
    CCDELGUBUN?: string;
    ADINFO?: string;
    NEWCNICKNM?: string;
}

export interface Ids_oCustomerModify_A {
    GTTEAMNM?: string;
    GTPRTSEQ?: string;
    Y_SOGAE?: string;
    Y_GONG_1?: string;
    Y_GONG_2?: string;
    Y_BANG_1?: string;
    Y_BANG_2?: string;
    Y_DANGER_31?: string;
    Y_DANGER_32?: string;
    Y_DANGER_33?: string;
    Y_DANGER_34?: string;
    Y_DANGER_35?: string;
    Y_DANGER_36?: string;
    Y_SOBANG_51?: string;
    Y_SOBANG_52?: string;
    Y_SOBANG_53?: string;
    Y_SOBANG_54?: string;
    Y_SOBANG_55?: string;
    Y_GAEIN_61?: string;
    Y_DANCHE_71?: string;
    N_SOGAE?: string;
    N_GONG_1?: string;
    N_GONG_2?: string;
    N_BANG_1?: string;
    N_BANG_2?: string;
    N_DANGER_31?: string;
    N_DANGER_32?: string;
    N_DANGER_33?: string;
    N_DANGER_34?: string;
    N_DANGER_35?: string;
    N_DANGER_36?: string;
    N_SOBANG_51?: string;
    N_SOBANG_52?: string;
    N_SOBANG_53?: string;
    N_SOBANG_54?: string;
    N_SOBANG_55?: string;
    CCCDNM?: string;
}

export interface Ids_oRegion {
    CD?: string;
    DATA?: string;
    GTCD?: string;
}

export interface Ids_oCustomerModifyTotal_A {
    GTTEAMNM?: string;
    CCOURSECD?: string;
    CSTATUSGBUN_GUBUN?: string;
    CSTATUSGUBUN_GUBUN_NM?: string;
    CGROUPNM?: string;
    CNM?: string;
    GUBUN_02?: string;
    GUBUN_03?: string;
    GUBUN_04?: string;
    GUBUN_05?: string;
    GUBUN_06?: string;
    GUBUN_07?: string;
    GUBUN_08?: string;
    GUBUN_09?: string;
    GUBUN_10?: string;
    GUBUN_11?: string;
    GUBUN_12?: string;
    GUBUN_13?: string;
    GUBUN_14?: string;
    GUBUN_15?: string;
    GUBUN_16?: string;
    GUBUN_01?: string;
}

export interface Ids_ioBusinessType {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioBusinessType: Ids_ioBusinessType[] = [
    { CD: '01', DATA: '공공시설' },
    { CD: '02', DATA: '공장' },
    { CD: '03', DATA: '창고시설' },
    { CD: '04', DATA: '기타' },
];
