// @ts-nocheck
export const Frmcust0033PManagerChangeData = {};

export interface Ids_ioManager {
    MMGNO?: string;
    MNM?: string;
    MRESIDENTNO?: string;
    FMLASTFMHSEQ?: string;
    FMRESIDENTERR?: string;
}

export interface Ids_ModifyGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ModifyGubun: Ids_ModifyGubun[] = [
    { CD: '01', DATA: '이름/주민번호 변경' },
    { CD: '02', DATA: '선임 대상자 변경' },
];

export interface Ids_oManagerList {
    BADDR1?: string;
    BADDR2?: string;
    BNM?: string;
    BTEL?: string;
    BZIPCD?: string;
    CCOCD?: string;
    CCOURSECD?: string;
    CFIREMGNO?: string;
    CGTMGNO?: string;
    CNO?: string;
    COVERCMGNO?: string;
    CREGCD?: string;
    CSTATUSGUBUN?: string;
    EPPASSDATE?: string;
    FMHSTARTDATE?: string;
    FMNM?: string;
    FMRESIDENTNO?: string;
    OLHNM?: string;
}

export interface Ids_oStatus {
}

export interface Ids_MemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_MemberGubun: Ids_MemberGubun[] = [
    { CD: 'Y', DATA: '회원' },
    { CD: 'N', DATA: '비회원' },
    { CD: '', DATA: '비회원(미지정)' },
];

export interface Ids_oMemberStatus {
}

export interface Ids_iCustomerInfo {
    AGNM?: string;
    CAGGUBUN?: string;
    CAGMGNO?: number;
    CBMGNO?: number;
    CCOCD?: string;
    CCOURSECD?: string;
    CDELDATE?: string;
    CDELGUBUN?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTGUBUN?: string;
    CEDUPOSTPLACE?: string;
    CEDUPOSTZIPCD?: string;
    CEXCEPTDATE?: string;
    CEXCEPTGUBUN?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTGUBUN?: string;
    CFEEPOSTPLACE?: string;
    CFEEYYMM?: string;
    CFIREMGNO?: string;
    CFMHMGNO?: number;
    CFMHSEQ?: number;
    CGATEWAYPK1?: string;
    CGATEWAYPK2?: string;
    CGATEWAYPK3?: string;
    CGCOURSECD?: string;
    CGTMGNO?: string;
    CLASTADDSEQ?: number;
    CLASTPRSEQ?: number;
    CMGNO?: number;
    CNO?: string;
    COBMGNO?: number;
    COLDMGNO?: string;
    COVERGUBUN?: string;
    CPERSONGUBUN?: string;
    CPOSTREQGUBUN?: string;
    CREGCD?: string;
    CREGISTERYYMM?: string;
    CSTATUSDATE?: string;
    CSTATUSGUBUN?: string;
    CSTATUSREASONCD?: string;
    CMAINCMGNO?: string;
    CELECTQUALIFY?: string;
    CFEEADDRGUBUN?: string;
    CEDUADDRGUBUN?: string;
    CFEEROADADDR1?: string;
    CFEEROADADDR2?: string;
    CEDUROADADDR1?: string;
    CEDUROADADDR2?: string;
    CFEEPOSTZIPCD?: string;
}

export interface Ids_oOldInfo {
    FMRESIDENTERR?: string;
    CCOURSECD?: string;
    BNM?: string;
    BADDR1?: string;
}

export interface Ids_oMemberStat {
    MHMEMCHK?: string;
    MHNAME?: string;
    MHRESIDENT?: string;
    MHREGDATE?: string;
}

export interface Ids_oLicenseList {
    ADDR?: string;
    LHPTEL?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LRESIDENTNO?: string;
    LTEL?: string;
    TPNM?: string;
    TPRESIDENTNO?: string;
}

export interface Ids_iCustomerModifyHistory {
    CMHAFTERDATA?: string;
    CMHBEFOREDATA?: string;
    CMHCOLUMN?: string;
    CMHGUBUN?: string;
    CMHKEY?: string;
    CMHWORKGUBUN?: string;
}

export interface Ids_oEduPass {
    EPMGNO1?: string;
    EPMGNO2?: string;
}

export interface Ids_oAccountInfo {
}

export interface Ids_oPersonInfoAll {
}
