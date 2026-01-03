// @ts-nocheck
export const Frmspcledu0400MExamJubsuManagementData = {};

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
    LASTEJHSEQ?: number;
    LASTEOHSEQ?: number;
    LASTESSEQ?: number;
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
    EJMGNO?: number;
    TPMGNO?: number;
    EOMGNO?: number;
    EORDER?: string;
    YEAR?: string;
    ZIPCD?: string;
    EJEXPYN?: string;
    IIIMGBINARY?: string;
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
