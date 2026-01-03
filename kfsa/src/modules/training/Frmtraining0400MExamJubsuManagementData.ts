// @ts-nocheck
export const Frmtraining0400MExamJubsuManagementData = {};

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

export interface Ids_oImage {
    FILE_NAME?: string;
    SHORT_FILE_NAME?: string;
    FILE_SIZE?: number;
    CREATE_DATE?: string;
    UPDATE_DATE?: string;
    ACCESS_DATE?: string;
    ATTR_ARCHIVE?: number;
    ATTR_SYSTEM?: number;
    ATTR_HIDDEN?: number;
    ATTR_READONLY?: number;
    ATTR_DIRECTORY?: number;
}

export interface Ids_oRemarkGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamOrderMgno {
}

export interface Ids_oJubsuNo {
}

export interface Ids_oSeatNo {
}

export interface Ids_oJubsuAllInfo {
    COURSECD?: string;
    COURSEMUNJECD?: string;
    JUBSUNO?: string;
    LASTSUNAPGUBUN?: string;
    MGJIBUCD?: string;
    PASSDATE?: string;
    TJMGNO?: number;
    TJPASSYN?: string;
    EOMGNO?: number;
    EORDER?: string;
    YEAR?: string;
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
    EOHSEQ?: number;
}

export interface Ids_oSetlmentHist {
    ESSETLMTYN?: string;
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
    { COLUMNCD: 'PERSONNM', COLUMNNM: '성명' },
    { COLUMNCD: 'BIRTHDAY', COLUMNNM: '주민번호' },
    { COLUMNCD: 'ZIPCD', COLUMNNM: '우편번호' },
    { COLUMNCD: 'ADDR1', COLUMNNM: '주소1' },
    { COLUMNCD: 'ADDR2', COLUMNNM: '주소2' },
    { COLUMNCD: 'TEL', COLUMNNM: '전화번호' },
    { COLUMNCD: 'HPTEL', COLUMNNM: '휴대폰' },
    { COLUMNCD: 'EMAILID', COLUMNNM: '이메일ID' },
    { COLUMNCD: 'EMAILDOMAIN', COLUMNNM: '이메일주소' },
    { COLUMNCD: 'COMPNM', COLUMNNM: '근무처' },
    { COLUMNCD: 'REMARKCD', COLUMNNM: '적요구분' },
    { COLUMNCD: 'REMARK', COLUMNNM: '적요내용' },
    { COLUMNCD: 'PICTURE', COLUMNNM: '사진' },
    { COLUMNCD: 'JUBSUNO', COLUMNNM: '접수번호' },
    { COLUMNCD: 'DECISIONSEATNO', COLUMNNM: '좌석번호' },
    { COLUMNCD: 'BARCODE', COLUMNNM: '바코드' },
    { COLUMNCD: 'EJJUBSUGUBUN', COLUMNNM: '응시자격구분' },
    { COLUMNCD: 'EJADDRGUBUN', COLUMNNM: '구/새주소 구분' },
    { COLUMNCD: 'EJRPNUCD', COLUMNNM: 'PNU코드' },
    { COLUMNCD: 'EJRROADBUILDMGNO', COLUMNNM: '건물관리번호' },
    { COLUMNCD: 'EJRROADDETAIL', COLUMNNM: '도로명상세주소' },
    { COLUMNCD: 'EJRROADREMAIN', COLUMNNM: '도로명부가주소' },
    { COLUMNCD: 'EJRSANGUBUN', COLUMNNM: '산번지여부' },
    { COLUMNCD: 'EJRMAINBUNJI', COLUMNNM: '주번지' },
    { COLUMNCD: 'EJRSUBBUNJI', COLUMNNM: '부번지' },
    { COLUMNCD: 'EJRBUILDNM', COLUMNNM: '건물명' },
    { COLUMNCD: 'EJRADDRETC', COLUMNNM: '기타주소' },
    { COLUMNCD: 'EJREJUBSUYN', COLUMNNM: '재접수여부' },
    { COLUMNCD: 'EJCHASUGUBUN', COLUMNNM: '차수구분' },
    { COLUMNCD: 'GAJUBSUGUBUN', COLUMNNM: '가접수구분' },
    { COLUMNCD: 'EJJUBSUREASON', COLUMNNM: '학경력인정사유' },
];

export interface Ids_oExamJubsuResult {
}

export interface Ids_oExamJubsuPrint {
}

export interface Ids_oExamOrder {
}

export interface Ids_ioExamJubsu {
    ABSENTDAY?: string;
    ABSENTYN?: string;
    ADDR1?: string;
    ADDR2?: string;
    AUTHYN?: string;
    BARCODE?: string;
    COMPNM?: string;
    COURSECD?: string;
    COURSEMUNJECD?: string;
    COURSENM?: string;
    DECISIONSEATNO?: string;
    EMAILDOMAIN?: string;
    EMAILID?: string;
    HPTEL?: string;
    IIDIRPATH?: string;
    IIIMGSEQ?: string;
    IIREALNM?: string;
    IISAVENM?: string;
    JUBSUNO?: string;
    LASTIMGSEQ?: string;
    LASTSUNAPGUBUN?: string;
    LASTEJHSEQ?: string;
    LASTEOHSEQ?: string;
    LASTESSEQ?: string;
    MGJIBUCD?: string;
    MGJIBUNICK?: string;
    MGJIBUNM?: string;
    MUNJEGUBUN?: string;
    PASSYN?: string;
    PERSONNM?: string;
    REMARK?: string;
    REMARKCD?: string;
    BIRTHDAY?: string;
    TEL?: string;
    EJMGNO?: string;
    TPMGNO?: string;
    EOMGNO?: string;
    EORDER?: string;
    YEAR?: string;
    ZIPCD?: string;
    EJEXPYN?: string;
    IIIMGBINARY?: string;
    EJJUBSUGUBUN?: string;
    EJADDRGUBUN?: string;
    EJRPNUCD?: string;
    EJRROADBUILDMGNO?: string;
    EJRROADDETAIL?: string;
    EJRROADREMAIN?: string;
    EJRSANGUBUN?: string;
    EJRMAINBUNJI?: string;
    EJRSUBBUNJI?: string;
    EJRBUILDNM?: string;
    EJRADDRETC?: string;
    EJRCONVPGM?: string;
    EJRCONVSTATUS?: string;
    amlml?: string;
    EJREJUBSUYN?: string;
    EJCHASUGUBUN?: string;
    GAJUBSUGUBUN?: string;
    PERSONKEY?: string;
    DI?: string;
    CI?: string;
    CIVER?: string;
    BIRTHDAY7?: string;
    EOONLINEGUBUN?: string;
    EXAMEVALYN?: string;
    EERSCORE?: string;
    EJJUBSUREMARK?: string;
    EJJUBSUREASON2?: string;
    EJJUBSUGUBUN2?: string;
    EJJUBSUREASON?: string;
    PRNO?: string;
}

export interface Ids_oPosResult {
}

export interface Ids_oJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJibuGubun: Ids_oJibuGubun[] = [
    { CD: 'S', DATA: '소속지부접수' },
    { CD: 'T', DATA: '타지부접수' },
];

export interface Ids_oExamAdd {
}

export interface Ids_oChangeTpmgno {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oChangeTpmgno: Ids_oChangeTpmgno[] = [
    { CD: 'S', DATA: '조회' },
    { CD: 'C', DATA: '성명/주민번호 변경' },
];

export interface Ids_oTrainingPerson {
}

export interface Ids_ioYearbizlink {
}

export interface Ids_ioT_E_L_JubsuCheck {
}

export interface Ids_ioExam_ReturnTpmgnoJubsuCheck {
}

export interface Ids_ioExam_JubsuCheck {
}

export interface Ids_ioExamPerson {
}

export interface Ids_ioTrainingJubsuMatching {
}

export interface Ids_ioSettelYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioSettelYN: Ids_ioSettelYN[] = [
    { CD: 'Y', DATA: '입금' },
    { CD: 'N', DATA: '미입금' },
];

export interface Ids_ioJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJubsuGubun: Ids_ioJubsuGubun[] = [
    { CD: '20', DATA: '강습수료                                   ' },
    { CD: '00', DATA: '경력' },
    { CD: '01', DATA: '학력' },
    { CD: '02', DATA: '학·경력' },
    { CD: '', DATA: '' },
];

export interface Ids_oJubsuGubunCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJubsuGubun {
    EOMGGTMGNO?: string;
    GTTEAMNM?: string;
    EOTCCOURSECD?: string;
    ORDERSERL?: string;
    EJJUBSUGUBUN?: string;
    TCCOURSENM?: string;
    EOYEAR?: string;
    EJJUBSUREASON?: string;
    EJREJUBSUYN?: string;
    EJCHASUGUBUN?: string;
    EJPASSYN?: string;
    EJAGENCYYN?: string;
}

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];

export interface Ids_ioYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYN: Ids_ioYN[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_ioJubsuGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJubsuGubun2: Ids_ioJubsuGubun2[] = [
    { CD: '10', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '02', DATA: '학경력' },
    { CD: '05', DATA: '자격경력' },
    { CD: '03', DATA: '가접수' },
];

export interface Ids_ioChasuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChasuGubun: Ids_ioChasuGubun[] = [
    { CD: '0', DATA: '1·2차 시험' },
    { CD: '1', DATA: '1차 시험' },
    { CD: '2', DATA: '2차 시험' },
];

export interface Ids_oSunapRepayAmount {
    FECFEE?: string;
    ESPROCAMOUNT?: string;
    AFTERAMOUNT?: string;
}

export interface Ids_ioGaJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGaJubsuGubun: Ids_ioGaJubsuGubun[] = [
    { CD: '', DATA: '선택' },
    { CD: '03', DATA: '신청' },
    { CD: '04', DATA: '완료' },
    { CD: '99', DATA: '자격미달' },
];

export interface Ids_oExamCheat {
}

export interface Ids_oLicenseCheck {
}

export interface Ids_oExamOmrFile {
    AFEJMGNO?: string;
    AFFILENM?: string;
    AFPATH?: string;
    AFREGDATE?: string;
    AFREGSABUN?: string;
    AFSEQ?: string;
}

export interface Ids_oMunje {
}

export interface Ids_oForm {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oForm: Ids_oForm[] = [
    { CD: '', DATA: '선택' },
    { CD: '0021', DATA: '시험응시원서' },
    { CD: '0022', DATA: '시험일정변경신청서' },
    { CD: '0023', DATA: '시험 환불신청서' },
    { CD: '0013', DATA: '심폐소생술 시험응시원서' },
    { CD: '0018', DATA: '생활안전강사 시험응시원서' },
    { CD: '0055', DATA: '심폐소생술전문자격 시험응시원서' },
    { CD: '0029', DATA: '시험정보 열람신청서' },
    { CD: '0030', DATA: '가접수자(경력) 추가서류' },
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

export interface Ids_oJubsuCheck {
}

export interface Ids_oModifyTime {
}

export interface Ids_ioTrainingJubsuMatchingCourse21 {
}

export interface Ids_oCheck {
}

export interface Ids_ioGaJubsuGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGaJubsuGubun2: Ids_ioGaJubsuGubun2[] = [
    { CD: '', DATA: '선택' },
    { CD: '10', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '02', DATA: '학경력' },
    { CD: '05', DATA: '자격경력' },
];

export interface Ids_examaccept_Check {
}
