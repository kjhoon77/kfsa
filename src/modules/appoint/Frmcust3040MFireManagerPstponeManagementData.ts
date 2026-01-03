// @ts-nocheck
export const Frmcust3040MFireManagerPstponeManagementData = {};

export interface Ids_oStatus {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMethod {
    CD?: string;
    DATA?: string;
}

export interface Ids_oDateGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDateGubun: Ids_oDateGubun[] = [
    { CD: '1', DATA: '1일' },
    { CD: '2', DATA: '7일' },
    { CD: '3', DATA: '한달' },
];

export interface Ids_ioMaster {
    K_APPOINTJUPSU?: string;
    AJMGNO?: string;
    AJBIZGUBUN?: string;
    AJCOURSECD?: string;
    AJSTATUS?: string;
    AJDATE?: string;
    AJMOTHOD?: string;
    AJNM?: string;
    AJHP?: string;
    AJGTMGNO?: string;
    K_ARSON_MNGR_APNT_PSTP?: string;
    QUALFUSER_SN?: string;
    APNT_PSTPONE_CODE?: string;
    APNT_PSTPONE_RESN?: string;
    APNT_PREARNGE_DE_8?: string;
    EDC_RCEPT_DE_8?: string;
    EDC_RCEPT_NO?: string;
    TNCRS_PD_BEGIN_DE_8?: string;
    TNCRS_TIME_END_DE_8?: string;
    APYEXM_RCEPT_DE_8?: string;
    APYEXM_RCEPT_NO?: string;
    APYEXM_DE_8?: string;
    ETC_MATTER?: string;
    K_QUALFUSER_BASSINFO?: string;
    I_QUALFUSER_SN?: string;
    I_IHIDNUM?: string;
    I_NM?: string;
    I_PERSONKEY?: string;
    I_HPNO?: string;
    I_TLPHON_NO?: string;
    EMAIL?: string;
    ZIP?: string;
    CTRD_CODE?: string;
    SIGNGU_CODE?: string;
    DONG_CODE?: string;
    LI_CODE?: string;
    MNTN_LNBR_AT?: string;
    MAIN_LNBR?: string;
    SEC_LNBR?: string;
    BASS_ADRES?: string;
    ETC_ADRES?: string;
    ROAD_NM?: string;
    MAIN_BDNBR?: string;
    SEC_BDNBR?: string;
    BULD_NM?: string;
    BULD_NM_ETC?: string;
    PARTCPNT_ID?: string;
    OJ_BULDSTA?: string;
    BILD_SN?: string;
    OBJ_NM?: string;
    K_PARTCPNT?: string;
    PARTCPNT_SN?: string;
    PARTCPNT_CODE?: string;
    PARTCPNT?: string;
    IHIDNUM?: string;
    TLPHON_NO?: string;
    P_PARTCPNT_ID?: string;
    USE_AT?: string;
    K_ETC?: string;
    JUBSUJIBU?: string;
    AJMGNO_MASK?: string;
    STATUS_FLAG?: string;
}

export interface Ids_oOwnerGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOwnerGubun: Ids_oOwnerGubun[] = [
    { CD: '0590007', DATA: '관계자' },
    { CD: '0590006', DATA: '소유자' },
    { CD: '0590008', DATA: '점유자' },
    { CD: '100000087', DATA: '대표자' },
];

export interface Ids_oFireCd {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export interface Ids_oJubsuList {
    AJMGNO?: string;
    AJDATE?: string;
    AJNM?: string;
    AJHP?: string;
    AJBIZGUBUN?: string;
    AJBIZGUBUNNM?: string;
    AJCOURSECD?: string;
    ASAJCOURSECDNM?: string;
    AJSTATUS?: string;
    AJSTATUSNM?: string;
    AJMOTHOD?: string;
    AJMOTHODNM?: string;
    AJSTRDATE?: string;
    FSTNSMALL_NM?: string;
    OBJ_NM?: string;
    OBJ_SE_CODE_NM?: string;
    I_NM?: string;
    I_IHIDNUM?: string;
    AJMGNO_MASK?: string;
}

export interface Ids_oEtcCourse {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEtcCourse: Ids_oEtcCourse[] = [
    { CD: '1', DATA: '2급소방안전관리자' },
    { CD: '2', DATA: '3급소방안전관리자' },
    { CD: '3', DATA: '소방안전보조자' },
];

export interface Ids_oTEGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oTEGubun: Ids_oTEGubun[] = [
    { CD: 'T', DATA: '강습교육' },
    { CD: 'E', DATA: '시험접수' },
];

export interface Ids_oMasterResult {
    O_AJMGNO?: string;
    O_RESULT_CODE?: string;
    O_RESULT_MSG?: string;
}

export interface Ids_oResn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oResn: Ids_oResn[] = [
    { CD: '0730002', DATA: '신축' },
    { CD: '0730003', DATA: '증축' },
    { CD: '0730005', DATA: '대수선' },
    { CD: '0730006', DATA: '개축' },
    { CD: '0730007', DATA: '재축' },
    { CD: '100000308', DATA: '구조,용도변경' },
    { CD: '100000738', DATA: '소유권변경(경매 등)' },
    { CD: '100000739', DATA: '해임' },
    { CD: '100000740', DATA: '기타' },
];

export interface Ids_oFileList {
    AJMGNO?: string;
    AJFSEQ?: string;
    AJFGUBUN?: string;
    AJFPATH?: string;
    AJIFFILENM?: string;
    AJFREALFILENM?: string;
}

export interface Ids_oFileUpload {
    AJMGNO?: string;
    AJFSEQ?: string;
    AJFGUBUN?: string;
    AJFPATH?: string;
    AJIFFILENM?: string;
    AJFREALFILENM?: string;
}

export interface Ids_ioMaster_Test {
    K_APPOINTJUPSU?: string;
    AJMGNO?: string;
    AJBIZGUBUN?: string;
    AJCOURSECD?: string;
    AJSTATUS?: string;
    AJDATE?: string;
    AJMOTHOD?: string;
    AJNM?: string;
    AJHP?: string;
    AJGTMGNO?: string;
    K_ARSON_MNGR_APNT_PSTP?: string;
    QUALFUSER_SN?: string;
    APNT_PSTPONE_CODE?: string;
    APNT_PSTPONE_RESN?: string;
    APNT_PREARNGE_DE_8?: string;
    EDC_RCEPT_DE_8?: string;
    EDC_RCEPT_NO?: string;
    TNCRS_PD_BEGIN_DE_8?: string;
    TNCRS_TIME_END_DE_8?: string;
    APYEXM_RCEPT_DE_8?: string;
    APYEXM_RCEPT_NO?: string;
    APYEXM_DE_8?: string;
    ETC_MATTER?: string;
    K_QUALFUSER_BASSINFO?: string;
    I_QUALFUSER_SN?: string;
    I_IHIDNUM?: string;
    I_NM?: string;
    I_PERSONKEY?: string;
    I_HPNO?: string;
    I_TLPHON_NO?: string;
    EMAIL?: string;
    ZIP?: string;
    CTRD_CODE?: string;
    SIGNGU_CODE?: string;
    DONG_CODE?: string;
    LI_CODE?: string;
    MNTN_LNBR_AT?: string;
    MAIN_LNBR?: string;
    SEC_LNBR?: string;
    BASS_ADRES?: string;
    ETC_ADRES?: string;
    ROAD_NM?: string;
    MAIN_BDNBR?: string;
    SEC_BDNBR?: string;
    BULD_NM?: string;
    BULD_NM_ETC?: string;
    PARTCPNT_ID?: string;
    OJ_BULDSTA?: string;
    BILD_SN?: string;
    OBJ_NM?: string;
    K_PARTCPNT?: string;
    PARTCPNT_SN?: string;
    PARTCPNT_CODE?: string;
    PARTCPNT?: string;
    IHIDNUM?: string;
    TLPHON_NO?: string;
    P_PARTCPNT_ID?: string;
    USE_AT?: string;
    K_ETC?: string;
    JUBSUJIBU?: string;
    AJMGNO_MASK?: string;
    STATUS_FLAG?: string;
}

export const ds_ds_ioMaster_Test: Ids_ioMaster_Test[] = [
    { AJBIZGUBUN: '3', AJCOURSECD: '1', AJDATE: '20221130', AJGTMGNO: '', AJHP: '01022388344', AJMGNO: '', AJMGNO_MASK: '', AJMOTHOD: '3', AJNM: '김성민', AJSTATUS: '2', APNT_PREARNGE_DE_8: '20221215', APNT_PSTPONE_CODE: '0730003', APNT_PSTPONE_RESN: '', APYEXM_DE_8: '', APYEXM_RCEPT_DE_8: '', APYEXM_RCEPT_NO: '', BASS_ADRES: '서울특별시 영등포구 영중로 170', BILD_SN: '11000000243153', BULD_NM: '', BULD_NM_ETC: '', CTRD_CODE: '', DONG_CODE: '', EDC_RCEPT_DE_8: '20221128', EDC_RCEPT_NO: '000015', EMAIL: '', ETC_ADRES: '(영등포동8가 87-4, 한국소방안전원)', ETC_MATTER: '1', I_HPNO: '01022388344', I_IHIDNUM: '8609101691611', I_NM: '김성민', I_PERSONKEY: 'P303553327', I_QUALFUSER_SN: '', I_TLPHON_NO: '', IHIDNUM: '860910', JUBSUJIBU: '1061', K_APPOINTJUPSU: '', K_ARSON_MNGR_APNT_PSTP: '', K_ETC: '', K_PARTCPNT: '', K_QUALFUSER_BASSINFO: '', LI_CODE: '', MAIN_BDNBR: '', MAIN_LNBR: '', MNTN_LNBR_AT: '', OBJ_NM: '소방안전건물', OJ_BULDSTA: '', P_PARTCPNT_ID: '', PARTCPNT: '김성민', PARTCPNT_CODE: '0590007', PARTCPNT_ID: '', PARTCPNT_SN: '', QUALFUSER_SN: '', ROAD_NM: '', SEC_BDNBR: '', SEC_LNBR: '', SIGNGU_CODE: '', STATUS_FLAG: 'btnSave', TLPHON_NO: '01022388344', TNCRS_PD_BEGIN_DE_8: '20221212', TNCRS_TIME_END_DE_8: '20221215', USE_AT: '', ZIP: '07226' },
];
