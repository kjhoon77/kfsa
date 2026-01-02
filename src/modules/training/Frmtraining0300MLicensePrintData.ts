// @ts-nocheck
export const Frmtraining0300MLicensePrintData = {};

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oPassGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oLicenseReport {
    BIRTHDAY?: string;
    IIFILENM?: string;
    LADDR1?: string;
    LADDR2?: string;
    LBARCODE?: string;
    LHPRTDATE?: string;
    LISSUEDATE?: string;
    LISSUEGUBUNNM?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LTCCOURSECD?: string;
    LLASTHISTORYSEQ?: number;
    SEL?: string;
    LHPROCGTMGNO?: string;
    YEAR?: string;
    JUBSUNO?: string;
    ONLINESURYOYN?: string;
    PRINTYN?: string;
    IJUBSU?: string;
    LICAMT?: string;
    LICAMTGUBUN?: string;
}

export interface Ids_oLicenseCnt {
    LLCSNO?: string;
    MINNO?: number;
    MAXNO?: number;
}

export interface Ids_iLicenseImage {
    LILLCSNO?: string;
    LISEQ?: number;
    LIDIRPATH?: string;
    LIREALNM?: string;
}

export interface Ids_iLicensePrtHistory {
    LPLLCSNO?: string;
    LPLHSEQ?: string;
    ILMGNO?: string;
    LHPRTGUBUN?: string;
}

export interface Ids_oPrintGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun: Ids_oPrintGubun[] = [
    { CD: '0', DATA: '전체 출력(소집+온라인)' },
    { CD: '1', DATA: '소집교육 수료자만 출력' },
    { CD: '2', DATA: '온라인교육 수료자만 출력' },
];

export interface Ids_ioReport {
}

export interface Ids_ioReportFilter {
}

export interface Ids_oPrintGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPrintGubun2: Ids_oPrintGubun2[] = [
    { CD: '', DATA: '전체출력(선수납+미납)' },
    { CD: '1', DATA: '선수납자만 출력' },
    { CD: '2', DATA: '미납자만 출력' },
];

export interface Ids_LicenseCheck {
    LICAMT?: string;
}

export interface Ids_LicAmtGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_LicAmtGubun: Ids_LicAmtGubun[] = [
    { CD: '10', DATA: '강습접수결제' },
    { CD: '20', DATA: '수첩결제' },
    { CD: '30', DATA: '07월이전시험결제' },
    { CD: '31', DATA: '07월이전시험재접수' },
    { CD: '32', DATA: '07월이전시험접수구분' },
    { CD: '40', DATA: '인터넷결제' },
    { CD: '0', DATA: '선수납없음' },
];
