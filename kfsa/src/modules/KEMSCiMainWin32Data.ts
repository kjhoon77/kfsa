// @ts-nocheck
export const KEMSCiMainWin32Data = {};

export interface Igds_oUserInfo {
    PSABUN?: string;
    PPERSONNM?: string;
    PRESIDENTNO?: string;
    PDEPTCD?: string;
    PDEPTNM?: string;
    PPOSITNCD?: string;
    PPOSITNNM?: string;
    PPWDATE?: string;
    PPWCHANGE?: string;
}

export interface Igds_oTopMenu {
}

export interface Igds_OpenedForm {
    MMENUID?: string;
    MMENUNM?: string;
    MURL?: string;
}

export interface Igds_SelectedForm {
    SELECTEDFORM?: string;
}

export const ds_gds_SelectedForm: Igds_SelectedForm[] = [
    { SELECTEDFORM: '' },
];

export interface Igds_oCommonCode {
    CCGROUPCD?: string;
    CCCD?: string;
    CCCDNM?: string;
    MORDERSEQ?: string;
    USE_YN?: string;
    CCREMARK?: string;
}

export interface Igds_oLeftMenu {
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

export interface Igds_oDesign {
    MSYSGUBUN?: string;
    MAINBKCOLOR?: string;
    MEMUIMGID?: string;
    TABIMGID?: string;
    SUBBKCOLOR?: string;
}

export const ds_gds_oDesign: Igds_oDesign[] = [
    { MAINBKCOLOR: 'user30', MEMUIMGID: 'IMG_LEFT_TITLE_BK01', SUBBKCOLOR: 'user40', MSYSGUBUN: 'cust', TABIMGID: 'BTN_TAB_BK01' },
    { MAINBKCOLOR: 'user31', MEMUIMGID: 'IMG_LEFT_TITLE_BK02', SUBBKCOLOR: 'user41', MSYSGUBUN: 'training', TABIMGID: 'BTN_TAB_BK02' },
    { MAINBKCOLOR: 'user32', MEMUIMGID: 'IMG_LEFT_TITLE_BK03', SUBBKCOLOR: 'user42', MSYSGUBUN: 'profes', TABIMGID: 'BTN_TAB_BK03' },
    { MAINBKCOLOR: 'user33', MEMUIMGID: 'IMG_LEFT_TITLE_BK04', SUBBKCOLOR: 'user43', MSYSGUBUN: 'item', TABIMGID: 'BTN_TAB_BK04' },
    { MAINBKCOLOR: 'user34', MEMUIMGID: 'IMG_LEFT_TITLE_BK05', SUBBKCOLOR: 'user44', MSYSGUBUN: 'eduobj', TABIMGID: 'BTN_TAB_BK05' },
    { MAINBKCOLOR: 'user35', MEMUIMGID: 'IMG_LEFT_TITLE_BK06', SUBBKCOLOR: 'user45', MSYSGUBUN: 'env', TABIMGID: 'BTN_TAB_BK06' },
    { MAINBKCOLOR: 'user36', MEMUIMGID: 'IMG_LEFT_TITLE_BK07', SUBBKCOLOR: 'user46', MSYSGUBUN: 'sys', TABIMGID: 'BTN_TAB_BK07' },
    { MAINBKCOLOR: 'user37', MEMUIMGID: 'IMG_LEFT_TITLE_BK08', SUBBKCOLOR: 'user47', MSYSGUBUN: 'spcledu', TABIMGID: 'BTN_TAB_BK08' },
    { MAINBKCOLOR: 'user38', MEMUIMGID: 'IMG_LEFT_TITLE_BK09', SUBBKCOLOR: 'user48', MSYSGUBUN: 'otherincome', TABIMGID: 'BTN_TAB_BK09' },
    { MAINBKCOLOR: 'user39', MEMUIMGID: 'IMG_LEFT_TITLE_BK10', SUBBKCOLOR: 'user49', MSYSGUBUN: 'mem', TABIMGID: 'BTN_TAB_BK10' },
];

export interface Igds_oLeftFavorite {
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

export interface Igds_oJibu {
}

export interface Igds_oRegion {
}

export interface Igds_oCourse {
}

export interface Igds_ioPrintConfig {
    PCCD?: string;
    PCNM?: string;
    USE_YN?: string;
    PCLEFTMARGIN?: number;
    PCTOPMARGIN?: number;
    PCPRINTERNO?: string;
}

export const ds_gds_ioPrintConfig: Igds_ioPrintConfig[] = [
    { PCCD: '수첩', PCLEFTMARGIN: '0', PCNM: '수첩', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
    { PCCD: '영수증', PCLEFTMARGIN: '0', PCNM: '영수증', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
    { PCCD: '수강증', PCLEFTMARGIN: '0', PCNM: '수강증', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
    { PCCD: '교육통지서', PCLEFTMARGIN: '0', PCNM: '교육통지서', PCPRINTERNO: '00', PCTOPMARGIN: '0', USE_YN: 'Y' },
];

export interface Igds_ioPrinter {
    NO?: string;
    NM?: string;
    PATH?: string;
    PORT?: string;
}

export const ds_gds_ioPrinter: Igds_ioPrinter[] = [
    { NM: '1번 프린터', NO: '01', PATH: '', PORT: '' },
    { NM: '2번 프린터', NO: '02', PATH: '', PORT: '' },
    { NM: '3번 프린터', NO: '03', PATH: '', PORT: '' },
    { NM: '4번 프린터', NO: '04', PATH: '', PORT: '' },
    { NM: '5번 프린터', NO: '05', PATH: '', PORT: '' },
    { NM: '6번 프린터', NO: '06', PATH: '', PORT: '' },
    { NM: '기본 프린터', NO: '00', PATH: '', PORT: '' },
];

export interface Igds_oLocalPort {
    NM?: string;
    PORT?: string;
}

export interface Igds_oLocalPrinter {
    NM?: string;
    PATH?: string;
}

export interface Igds_oSameUserInfo {
    PSABUN?: string;
    PPERSONNM?: string;
    PRESIDENTNO?: string;
    PDEPTCD?: string;
    PDEPTNM?: string;
    PPOSITNCD?: string;
    PPOSITNNM?: string;
}

export interface Igds_oLocalExamOrder {
    TCCOURSENM?: string;
    EOEXAMDATE?: string;
    EOEXAMORDERGUBUN?: string;
    EOMGJIBUCD?: string;
    EOYEAR?: string;
    EREXAMROOM?: string;
    EOMGNO?: string;
    EOEXAMORDER?: string;
}

export interface Igds_oEduRegion {
    CD?: string;
    DATA?: string;
}

export const ds_gds_oEduRegion: Igds_oEduRegion[] = [
    { CD: '', DATA: '전체' },
    { CD: '01', DATA: '의정부' },
    { CD: '04', DATA: '부천' },
    { CD: '05', DATA: '구리' },
    { CD: '12', DATA: '파주(일산)' },
];

export interface Igds_iModifyHistory {
    MHAFTERDATA?: string;
    MHBEFOREDATA?: string;
    MHCOLUMN?: string;
    MHGUBUN?: string;
    MHKEY?: string;
    MHWORKGUBUN?: string;
}

export interface Igds_oPosProgramId {
}

export interface Igds_oPosJibu {
}

export interface Igds_oTrainingFee {
}

export interface Igds_oTrainingRepayFee {
}

export interface Igds_oBusinessDay {
}

export interface Igds_oPosResult {
}

export interface Igds_iCheckPos {
    PMYEAR?: string;
    PMMGNO?: string;
    STATUS?: string;
    LGD_PAN?: string;
    LGD_CASHRECEIPTYN?: string;
}

export const ds_gds_iCheckPos: Igds_iCheckPos[] = [
    { LGD_CASHRECEIPTYN: '', LGD_PAN: '4119045215715124=15022011919676391750', PMMGNO: '375105', PMYEAR: '2009', STATUS: '4' },
];

export interface Igds_oCheckPos {
    MI_PMYEAR?: string;
    MI_PMMGNO?: string;
    MI_PRMGUBUN?: string;
    LGD_RESPCODE?: string;
    LGD_CASHRECEIPTNUM?: string;
    LGD_RESPMSG?: string;
    LGD_OID?: string;
    LGD_TID?: string;
    LGD_AMOUNT?: string;
    LGD_ACCOUNTNUM?: string;
    LGD_FINANCECODE?: string;
    LGD_CASFLAG?: string;
    LGD_FINANCENAME?: string;
    MI_RSCODE?: string;
    MI_RSMSG?: string;
}

export interface Igds_oPrintReceiptMast {
}

export interface Igds_oPrintReceiptDtl {
}

export interface Igds_oPrintReceiptHistory {
}

export interface Igds_oCustomerCourse {
}

export interface Igds_oMenuInfo {
}

export interface Igds_oLicenseCode {
    CD?: string;
    DATA?: string;
}

export interface Igds_oFireCode {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export interface Igds_oFireCenterCode {
    CD?: string;
    DATA?: string;
    UPCD?: string;
}

export interface Igds_oFireBonbuCode {
}

export interface Igds_oPrivacyCourse {
}

export interface Igds_oBankCode {
}

export interface Igds_oAllDept {
}

export interface Igds_oEduJubsuMaxCnt {
}

export interface Igds_oStatus {
    RESULTSTATUS?: string;
    RESULTERRMSG?: string;
}

export interface Igds_ioSciCheck {
}

export interface Igds_ioSciDI {
}

export interface Igds_oPersonKey {
    PERSONKEY?: string;
    DI?: string;
    CI?: string;
    CIVER?: string;
}

export interface Igds_ioCashAutoSend {
}
