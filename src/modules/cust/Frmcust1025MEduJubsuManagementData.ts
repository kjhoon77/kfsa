// @ts-nocheck
export const Frmcust1025MEduJubsuManagementData = {};

export interface Ids_ioEduJubsu {
    ADDR1?: string;
    ADDR2?: string;
    BNM?: string;
    CCOURSECD?: string;
    CGTMGNO?: string;
    CMGNO?: number;
    CNO?: string;
    CSTATUSGUBUN?: string;
    EJADDRGUBUN?: string;
    EJBIRTHDAY?: string;
    EJCADDR1?: string;
    EJCADDR2?: string;
    EJCADDRGUBUN?: string;
    EJCASGUBUN?: string;
    EJCHANGECNT?: number;
    EJCMGNO?: number;
    EJCOURSECD?: string;
    EJCZIP?: string;
    EJEDUMGNO?: number;
    EJEJHSEQ?: number;
    EJEMAILDOMAIN?: string;
    EJEMAILID?: string;
    EJFMMGNO?: number;
    EJHJUBSUNO?: string;
    EJHMNY?: number;
    EJHPMMGNO?: number;
    EJHPMYEAR?: string;
    EJHPROCDATE?: string;
    EJHREASON?: string;
    EJHSABUN?: string;
    EJISUGUBUN?: string;
    EJMEMBERYN?: string;
    EJMGNO?: number;
    EJNM?: string;
    EJPAYMNY?: number;
    EJPERSONKEY?: string;
    EJPHONE?: string;
    EJPMMGNO?: number;
    EJPMORDERNO?: string;
    EJPMYEAR?: string;
    EJRADDRETC?: string;
    EJRBUILDNM?: string;
    EJRCADDRETC?: string;
    EJRCBUILDNM?: string;
    EJRCCONVSTATUS?: string;
    EJRCMAINBUNJI?: number;
    EJRCONVDATE?: string;
    EJRCONVPGM?: string;
    EJRCONVSABUN?: string;
    EJRCONVSTATUS?: string;
    EJRCPNUCD?: string;
    EJRCROADBUILDMGNO?: string;
    EJRCROADDETAIL?: string;
    EJRCROADREMAIN?: string;
    EJRCSANGUBUN?: string;
    EJRCSUBBUNJI?: number;
    EJREJEJHSEQ?: number;
    EJREJMGNO?: number;
    EJRMAINBUNJI?: number;
    EJRPNUCD?: string;
    EJRROADBUILDMGNO?: string;
    EJRROADDETAIL?: string;
    EJRROADREMAIN?: string;
    EJRSANGUBUN?: string;
    EJRSUBBUNJI?: number;
    EJSTATUS?: string;
    EJTEL?: string;
    EJZIP?: string;
    ESACCESSCNT?: number;
    ESCOUSECD?: string;
    ESDATE?: string;
    ESEDUORDER?: string;
    ESENDTIME?: string;
    ESGTMGNO?: string;
    ESMGNO?: number;
    ESSEATCNT?: number;
    ESSTARTTIME?: string;
    ESYEAR?: string;
    FMNM?: string;
    JUBSUSTATUS?: string;
    LASTYN?: string;
    MFEE?: number;
    EJBUILDING?: string;
    FMHSTARTDATE?: string;
    EJPAYGUBUN?: string;
    EPNM?: string;
    CEDUEXPIREDATE?: string;
    OVERMINAPFEE?: string;
    EJBOOKZIPCD?: string;
    EJBOOKADDR1?: string;
    EJBOOKADDR2?: string;
    EJBOOKPRINTESMGNO?: string;
    EJBOOKRETURNYN?: string;
    EJBOOKREGION?: string;
    ESCYBERSTARTDATE?: string;
    ESCYBERENDDATE?: string;
    ALMGNO?: string;
    ALEXFIREDATE?: string;
    POSTZIPCD?: string;
    POSTADDR1?: string;
    POSTADDR2?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEmailDomain {
    CD?: string;
    DATA?: string;
}

export interface Ids_oEduOrderMgno {
}

export interface Ids_oJubsuNo {
}

export interface Ids_oJubsuAllInfo {
}

export interface Ids_oOrderHist {
    ABSENTYN?: string;
    AFTERJIBU?: string;
    AFTERJUBSUNO?: string;
    AFTERMGNO?: number;
    AFTERORDER?: string;
    BEFORJIBU?: string;
    BEFORJUBSUNO?: string;
    BEFORMGNO?: number;
    BEFORORDER?: string;
    LASTSUNAPGUBUN?: string;
    TJLASTSUNAPGUBUN?: string;
    TJMGNO?: number;
    TOHSEQ?: number;
    BEFORTOTCCOURSECD?: string;
    BEFORTOMUNJEGUBUN?: string;
}

export interface Ids_ioCustomerFeeInfo {
}

export interface Ids_ioMenuTree {
    MORDERSEQ?: string;
    MMENUID?: string;
    MENULEVEL?: string;
    MPARENTMENUID?: string;
    MMENUNM?: string;
    USE_YN?: string;
    MURL?: string;
    MREMARK?: string;
    MURLTYPE?: string;
    MSYSGUBUN?: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'EJNM', COLUMNNM: '성명' },
    { COLUMNCD: 'RESIDENTNO', COLUMNNM: '주민번호' },
    { COLUMNCD: 'EJZIP', COLUMNNM: '우편번호' },
    { COLUMNCD: 'ADDR1', COLUMNNM: '주소1' },
    { COLUMNCD: 'ADDR2', COLUMNNM: '주소2' },
    { COLUMNCD: 'EJTEL', COLUMNNM: '전화번호' },
    { COLUMNCD: 'EHPHONE', COLUMNNM: '휴대폰' },
    { COLUMNCD: 'EJEMAILID', COLUMNNM: '이메일ID' },
    { COLUMNCD: 'EJEMAILDOMAIN', COLUMNNM: '이메일주소' },
    { COLUMNCD: 'COMPNM', COLUMNNM: '근무처' },
    { COLUMNCD: 'EJHREASON', COLUMNNM: '비고' },
    { COLUMNCD: 'EJHJUBSUNO', COLUMNNM: '접수번호' },
    { COLUMNCD: 'CMGNO', COLUMNNM: '고객바코드번호' },
    { COLUMNCD: 'CGTMGNO', COLUMNNM: '고객지부' },
    { COLUMNCD: 'CNO', COLUMNNM: '고객관리번호' },
    { COLUMNCD: 'EJADDRGUBUN', COLUMNNM: '주소구분' },
    { COLUMNCD: 'EJRROADBUILDMGNO', COLUMNNM: '건물관리번호' },
    { COLUMNCD: 'TJRROADDETAIL', COLUMNNM: '상세주소' },
    { COLUMNCD: 'EJRROADREMAIN', COLUMNNM: '부가주소' },
    { COLUMNCD: 'EJRSANGUBUN', COLUMNNM: '산여부' },
    { COLUMNCD: 'EJRMAINBUNJI', COLUMNNM: '주번지' },
    { COLUMNCD: 'EJRSUBBUNJI', COLUMNNM: '부번지' },
    { COLUMNCD: 'EJRBUILDNM', COLUMNNM: '건물명' },
    { COLUMNCD: 'EJRADDRETC', COLUMNNM: '기타주소' },
    { COLUMNCD: 'EJBUILDING', COLUMNNM: '대상물명' },
    { COLUMNCD: 'EJCOURSECD', COLUMNNM: '직능' },
    { COLUMNCD: 'EJBOOKZIPCD', COLUMNNM: '교재수령지우편번호' },
    { COLUMNCD: 'EJBOOKADDR1', COLUMNNM: '교재수령지주소1' },
    { COLUMNCD: 'EJBOOKADDR2', COLUMNNM: '교재수령지주소2' },
    { COLUMNCD: 'EJBOOKRETURNYN', COLUMNNM: '교재반납여부' },
    { COLUMNCD: 'EJBOOKREGION', COLUMNNM: '교재수령지지역' },
];

export interface Ids_oEduJubsuResult {
}

export interface Ids_oEduReport {
}

export interface Ids_oEduOrder {
}

export interface Ids_oPosResult {
}

export interface Ids_oEduCheck {
}

export interface Ids_oJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibuGubun: Ids_oJibuGubun[] = [
    { CD: 'S', DATA: '소속지부접수' },
    { CD: 'T', DATA: '타지부접수' },
];

export interface Ids_oTrainingPearson {
}

export interface Ids_oChangeTpmgno {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oChangeTpmgno: Ids_oChangeTpmgno[] = [
    { CD: 'S', DATA: '조회' },
    { CD: 'C', DATA: '성명/주민번호 변경' },
];

export interface Ids_ioYearbizlink {
}

export interface Ids_ioT_E_L_JubsuCheck {
}

export interface Ids_ioEduJubsuCheck {
}

export interface Ids_ioTraing_ReturnTpmgnoJubsuCheck {
}

export interface Ids_ioTrainingPerson {
}

export interface Ids_ioSettelYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSettelYN: Ids_ioSettelYN[] = [
    { CD: 'Y', DATA: '입금' },
    { CD: 'N', DATA: '미입금' },
];

export interface Ids_oEducationNo {
}

export interface Ids_ioControl {
    No?: string;
}

export interface Ids_ioTraingSeatNoCheck {
}

export interface Ids_oSiteMember {
}

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];

export interface Ids_oYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oYN: Ids_oYN[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_ioManager {
    MMGNO?: string;
    FMLASTFMHSEQ?: string;
    FMRESIDENTERR?: string;
}

export interface Ids_oMemberStatus {
}

export interface Ids_oDeleteCustomerFee {
}

export interface Ids_oCustJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oDetailCourse {
    CD?: string;
    DATA?: string;
    GCD?: string;
}

export interface Ids_oSunap {
}

export interface Ids_iReady {
    SEL?: string;
    CFGUBUN?: string;
    CMGNO?: string;
    CFMGGTMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    CFMEMBERGUBUN?: string;
    BNM?: string;
    FMNM?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFREMARK?: string;
    CHECKDATA?: string;
    CFMGGTNM?: string;
    CCOURSENM?: string;
    CFMEMBERNM?: string;
}

export interface Ids_oFee {
}

export interface Ids_oFeeMonth {
    CFCCGUBUN?: string;
    CFGYEAR?: string;
    CFSUNAPHALF?: string;
    CFSUNAPMONTH?: string;
    CMGNO?: number;
    MINAPFEE?: number;
    SEL?: string;
    SUNAPFEE?: number;
}

export interface Ids_iCustomerFee {
    CFCMGNO?: number;
    CFSEQ?: number;
    CFSETLMGUBUN?: string;
    CFMEMBERGUBUN?: string;
    CFGUBUN?: string;
    CFGUBUNCD?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    CFSUNAPHALF?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFPONYGUBUN?: string;
    CFPONYDATE?: string;
    CFMGGTMGNO?: string;
    CFPROCGTMGNO?: string;
    CFPOSGTMGNO?: string;
    CFPMYEAR?: string;
    CFPMMGNO?: number;
    CFGROUPMGNO?: string;
    CFCANCELDATE?: string;
    CFCANCELSABUN?: string;
    CFREMARK?: string;
    CFREPAYREF?: number;
    CFACTIVEGUBUN?: string;
    CFREGDATE?: string;
    CFREGSABUN?: string;
    CFMODDATE?: string;
    CFMODSABUN?: string;
    CGTMGNO?: string;
    CNO?: string;
    CREGCD?: string;
    CCOURSECD?: string;
    BNM?: string;
    FMNM?: string;
}

export interface Ids_ioVirtualAccoutAllocation {
}

export interface Ids_oJubsuAlreadyInfo {
}

export interface Ids_oForm {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oForm: Ids_oForm[] = [
    { CD: '', DATA: '선택' },
    { CD: '0006', DATA: '실무교육원서' },
    { CD: '00081', DATA: '일정변경신청서' },
    { CD: '00082', DATA: '환불신청서' },
];

export interface Ids_iFormSave {
    I_PROC?: string;
    I_FCCD?: string;
    I_FAMGNO?: string;
    I_PK1VAL?: string;
    I_PK2VAL?: string;
    I_FRDATE?: string;
    I_PATH?: string;
    I_FILENM?: string;
}

export interface Ids_oFormSave {
}

export interface Ids_iFormDelete {
    I_FCCD?: string;
    I_FAMGNO?: string;
    I_PK1VAL?: string;
    I_PK2VAL?: string;
    I_PATH?: string;
    I_FILENM?: string;
}

export interface Ids_oFormDelete {
}

export interface Ids_oBookReturn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBookReturn: Ids_oBookReturn[] = [
    { CD: 'Y', DATA: '반송' },
    { CD: 'N', DATA: '미반송' },
];

export interface Ids_oEduIssue {
}

export interface Ids_ioExcel {
    CACORRECTANSWER?: string;
    CACORRECTCNT?: number;
    CAITEMNO?: number;
    CAITEMSCORE?: number;
    EPALPHATYPE?: string;
    EPCOURSECD?: string;
    EPNUMTYPE?: string;
    EPCHASUGUBUN?: string;
    EPSUBJECTGUBUN?: string;
}

export interface Ids_ioExcelCopy {
    ECPCORRECTANSWER?: string;
    ECPCORRECTCNT?: number;
    ECPITEMNO?: number;
    ECPITEMSCORE?: number;
    ECPTCCOURSECD?: string;
    ECPEVALGUBUN?: string;
    ECPSUBJECTCD?: string;
}

export interface Ids_oEduJubsuCheck_Cyber {
    KEMS_JUBSU_MNG_NO?: string;
    KEMS_JUBSU_NO?: string;
}

export interface Ids_ioEduJubsuCheck_Cyber {
}

export interface Ids_oSmsData {
}

export interface Ids_oCaggubunCheck {
}
