// @ts-nocheck
export const Frmcust1090MEduManagementData = {};

export interface Ids_ioEduPass {
    SEL?: string;
    BNM?: string;
    CAGGUBUN?: string;
    CCOURSECD?: string;
    CGTMGNO?: string;
    CMGNO?: string;
    CNO?: string;
    COVERCMGNO?: string;
    CSTATUSGUBUN?: string;
    EPPASSDATE?: string;
    FMEMAIL?: string;
    FMHHPTEL?: string;
    FMHSTARTDATE?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    FMPERSONKEY?: string;
    NOPAYFEE?: number;
    EPMGNO?: number;
    EPPERSONNM?: string;
    EPBIRTHDAY?: string;
    EPPERSONKEY?: string;
    CEDUEXPIREDATE?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduGubun: Ids_oEduGubun[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일 주간' },
    { CD: '3', DATA: '휴일 야간' },
];

export interface Ids_oEduStudent {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduStudent: Ids_oEduStudent[] = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비교육' },
];

export interface Ids_oEduSubject {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduSubject: Ids_oEduSubject[] = [
    { CD: '0', DATA: '정규교육' },
    { CD: '1', DATA: '미필자교육' },
];

export interface Ids_oEmailDomain {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCustomerInfo {
    CFEEYYMM?: string;
    COVERCMGNO?: string;
    ESDATE?: string;
    EPPASSDATE?: string;
    NOPAYFEE?: number;
    CRECEIVEEXCEPTGUBUN?: string;
    CEDUEXPIREDATE?: string;
}

export interface Ids_oFireManagerInfo {
    FMAUTHGUBUN?: string;
    FMCMGNO?: number;
    FMHEMAILID?: string;
    FMHEMAILDOMAIN?: string;
    FMHHPTEL?: string;
    FMHSTARTDATE?: string;
    FMLASTFMHSEQ?: number;
    FMMGNO?: number;
    FMNM?: string;
    FMRESIDENTERR?: string;
    FMBIRTHDAY?: string;
    FSSTATUS?: string;
    CMGNO?: string;
    CCOURSECD?: string;
    CGATEWAYCD?: string;
    CFMHSEQ?: string;
    EDUCNT?: number;
    FMPERSONKEY?: string;
}

export interface Ids_oBuildingInfo {
    AGNM?: string;
    BADDR1?: string;
    BADDR2?: string;
    BADDRGUBUN?: string;
    BMGNO?: number;
    BNM?: string;
    BTEL?: string;
    BZIPCD?: string;
    CAGGUBUN?: string;
    CBMGNO?: number;
    AGMGNO?: number;
    CMGNO?: number;
    CRECEIVEEXCEPTGUBUN?: string;
}

export const ds_ds_oBuildingInfo: Ids_oBuildingInfo[] = [
    { AGMGNO: '', AGNM: '', BADDR1: '', BADDR2: '', BADDRGUBUN: '', BMGNO: '', BNM: '', BTEL: '', BZIPCD: '', CAGGUBUN: '', CBMGNO: '', CMGNO: '', CRECEIVEEXCEPTGUBUN: '' },
];

export interface Ids_ioEduPassSingle {
    EPCGATEWAYCD?: string;
    EPCMGNO?: string;
    EPCOURSECD?: string;
    EPESMGNO?: number;
    EPMGNO?: number;
    EPPASSDATE?: string;
    EPPERSONNM?: string;
    EPPROCGTMGNO?: string;
    EPBIRTHDAY?: string;
    EPPERSONKEY?: string;
    EPSUCCESSIONGUBUN?: string;
    EPYEAR?: string;
    FMMGNO?: number;
    EPPASSREMARK?: string;
    CYBERISUGUBUN?: string;
    EDUEXPIREDATE?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    PCD?: string;
}

export interface Ids_ioEduPassModify {
    SEL?: string;
    BNM?: string;
    CAGGUBUN?: string;
    CCOURSECD?: string;
    CGTMGNO?: string;
    CMGNO?: string;
    CNO?: string;
    COVERCMGNO?: string;
    CSTATUSGUBUN?: string;
    EPPASSDATE?: string;
    FMEMAIL?: string;
    FMHHPTEL?: string;
    FMHSTARTDATE?: string;
    FMNM?: string;
    FMBIRTHDAY?: string;
    NOPAYFEE?: number;
    EPMGNO?: number;
    FMPERSONKEY?: string;
}

export interface Ids_ioEduPassCheck {
    CNT?: number;
}

export interface Ids_oAgGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAgGubun: Ids_oAgGubun[] = [
    { CD: '0', DATA: '대행' },
    { CD: '1', DATA: '미대행' },
];

export interface Ids_iOnlyKey {
    ONLYKEY?: string;
    ACTION?: string;
}

export const ds_ds_iOnlyKey: Ids_iOnlyKey[] = [
    { ACTION: 'X', ONLYKEY: '0000000000000' },
];

export interface Ids_oCBarCodeInfo {
    CGTMGNO?: string;
    CNO?: string;
}

export interface Ids_oLBarCodeInfo {
    LPERSONNM?: string;
    LBIRTHDAY?: string;
    LPERSONKEY?: string;
}

export interface Ids_ioEduPassMulti {
    EPCGATEWAYCD?: string;
    EPCMGNO?: number;
    EPCOURSECD?: string;
    EPESMGNO?: number;
    EPMGNO?: string;
    EPPASSDATE?: string;
    EPPERSONNM?: string;
    EPPROCGTMGNO?: string;
    EPBIRTHDAY?: string;
    EPPERSONKEY?: string;
    EPSUCCESSIONGUBUN?: string;
    EPYEAR?: string;
    FMMGNO?: number;
    EPPASSREMARK?: string;
    EDUEXPIREDATE?: string;
}

export interface Ids_ioEduPassMultiCheck {
    CNT?: number;
}

export interface Ids_ioEduPassMultiSingle {
    EPCGATEWAYCD?: string;
    EPCMGNO?: string;
    EPCOURSECD?: string;
    EPESMGNO?: number;
    EPMGNO?: number;
    EPPASSDATE?: string;
    EPPERSONNM?: string;
    EPPROCGTMGNO?: string;
    EPBIRTHDAY?: string;
    EPPERSONKEY?: string;
    EPSUCCESSIONGUBUN?: string;
    EPYEAR?: string;
    FMMGNO?: number;
    EPPASSREMARK?: string;
    EDUEXPIREDATE?: string;
}

export interface Ids_oBasicInfo {
    CGTMGNO?: string;
    CNO?: string;
}

export interface Ids_oJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibuGubun: Ids_oJibuGubun[] = [
    { CD: 'S', DATA: '소속지부' },
    { CD: 'T', DATA: '타지부' },
];

export interface Ids_ioLBarCodeInfoCust {
}

export interface Ids_ioYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYn: Ids_ioYn[] = [
    { CD: '1', DATA: '수령' },
    { CD: '0', DATA: '미수령' },
];

export interface Ids_oBnmCode {
}

export interface Ids_oEduJubsuInfo {
    EJMGNO?: string;
}
