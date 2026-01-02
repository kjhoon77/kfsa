// @ts-nocheck
export const Frmtraining0020MTrainingJubsuManagement171030민원서류완료Data = {};

export interface Ids_ioTrainingJubsu {
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
    DECISIONSEATNO?: number;
    EMAILDOMAIN?: string;
    EMAILID?: string;
    HPTEL?: string;
    IIDIRPATH?: string;
    IIIMGSEQ?: number;
    IIREALNM?: string;
    IISAVENM?: string;
    JUBSUNO?: string;
    LASTIMGSEQ?: number;
    LASTSUNAPGUBUN?: string;
    LASTTJHSEQ?: number;
    LASTTOHSEQ?: number;
    LASTTSSEQ?: number;
    MGJIBUCD?: string;
    MGJIBUNICK?: string;
    MGJIBUNM?: string;
    MUNJEGUBUN?: string;
    PASSYN?: string;
    PERSONNM?: string;
    REMARK?: string;
    REMARKCD?: string;
    RESIDENTNO?: string;
    TEL?: string;
    TJMGNO?: number;
    TPMGNO?: number;
    TOMGNO?: number;
    TORDER?: string;
    YEAR?: string;
    ZIPCD?: string;
    IIIMGBINARY?: string;
    TJFIREMANYN?: string;
    TJADDRGUBUN?: string;
    TJRPNUCD?: string;
    TJRROADBUILDMGNO?: string;
    TJRROADDETAIL?: string;
    TJRROADREMAIN?: string;
    TJRSANGUBUN?: string;
    TJRMAINBUNJI?: string;
    TJRSUBBUNJI?: string;
    TJRBUILDNM?: string;
    TJRADDRETC?: string;
    TJRCONVPGM?: string;
    TJRCONVSTATUS?: string;
    TJMEMAGREEGUBUN?: string;
    TJAMOUNTGUBUN?: string;
    EVALYN?: string;
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

export interface Ids_oTrainingOrderMgno {
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
    TOMGNO?: number;
    TORDER?: string;
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
    TOHSEQ?: number;
    BEFORTOTCCOURSECD?: string;
    BEFORTOMUNJEGUBUN?: string;
}

export interface Ids_oSetlmentHist {
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
    { COLUMNCD: 'RESIDENTNO', COLUMNNM: '주민번호' },
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
    { COLUMNCD: 'TJFIREMANYN', COLUMNNM: '소방공무원여부' },
    { COLUMNCD: 'IIIMGSEQ', COLUMNNM: '사진' },
    { COLUMNCD: 'TJADDRGUBUN', COLUMNNM: '주소구분' },
    { COLUMNCD: 'TJRROADBUILDMGNO', COLUMNNM: '건물관리번호' },
    { COLUMNCD: 'TJRROADDETAIL', COLUMNNM: '상세주소' },
    { COLUMNCD: 'TJRROADREMAIN', COLUMNNM: '부가주소' },
    { COLUMNCD: 'TJRSANGUBUN', COLUMNNM: '산여부' },
    { COLUMNCD: 'TJRMAINBUNJI', COLUMNNM: '주번지' },
    { COLUMNCD: 'TJRSUBBUNJI', COLUMNNM: '부번지' },
    { COLUMNCD: 'TJRBUILDNM', COLUMNNM: '건물명' },
    { COLUMNCD: 'TJRADDRETC', COLUMNNM: '기타주소' },
    { COLUMNCD: 'TJMEMAGREEGUBUN', COLUMNNM: '안전원회원가입동의' },
    { COLUMNCD: 'TJAMOUNTGUBUN', COLUMNNM: '선후불구분' },
];

export interface Ids_oTrainingJubsuResult {
}

export interface Ids_oTrainingJubsuPrint {
}

export interface Ids_oTrainingOrder {
}

export interface Ids_oPosResult {
}

export interface Ids_oTrainingJubsuPrint1 {
}

export interface Ids_oTrainingJubsuPrint2 {
}

export interface Ids_oTrainingJubsuPrint3 {
}

export interface Ids_oTrainingCheck {
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

export interface Ids_ioTraing_JubsuCheck {
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

export interface Ids_oCyberLearning {
    CLPROGRESSPCT?: string;
    CLPROGRESSSCORE?: string;
    CLEXAMSCORE?: string;
    CLHOMEWORKSCORE?: string;
    CLDISCUSSSCORE?: string;
    CLPASSSCORE?: string;
    CLTJMGNO?: string;
    CPPASSSTATUS?: string;
}

export interface Ids_oCyberPass {
    CPPROGRESSPCT?: string;
    CPPASSSCORE?: string;
    CPPASSSTATUS?: string;
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

export interface Ids_oDeleteSettlement {
}

export interface Ids_oAmountGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAmountGubun: Ids_oAmountGubun[] = [
    { CD: 'B', DATA: '선불' },
    { CD: 'A', DATA: '후불' },
];

export interface Ids_oExamCheat {
}

export interface Ids_oForm {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oForm: Ids_oForm[] = [
    { CD: '', DATA: '선택' },
    { CD: '0002', DATA: '강습교육 일정변경신청서' },
    { CD: '0003', DATA: '강습교육 환불신청서' },
    { CD: '0009', DATA: '심폐소생술 교육원서' },
    { CD: '0011', DATA: '심폐소생술 환불신청서' },
    { CD: '0014', DATA: '생활안전강사 교육원서' },
    { CD: '0016', DATA: '생활안전강사 환불신청서' },
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
