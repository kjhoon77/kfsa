// @ts-nocheck
export const Frmtraining0364MInternetLicenseApprovalIMSIData = {};

export interface Ids_ioApproveList {
    AJMGNO?: number;
    AJTJMGNO?: number;
    AJGTMGNO?: string;
    AJSTATUS?: string;
    AJISSUEGUBUN?: string;
    AJISSUEGUBUNNM?: string;
    AJTCCOURSECD?: string;
    AJTCCOURSENM?: string;
    AJJUBSUDATE?: string;
    AJCONFIRMDATE?: string;
    AJCONFIRMSABUN?: string;
    AJRESON?: string;
    AJFILEPATH?: string;
    AJFILENM?: string;
    AJREGDATE?: string;
    AJREGSABUN?: string;
    AJMODDATE?: string;
    AJMODSABUN?: string;
    AJGUBUN?: string;
    AJGUBUNNM?: string;
    AJREMARK?: string;
    TPMGNO?: string;
    TPNM?: string;
    TPBIRTHDAY?: string;
    BIRTHDAY?: string;
    TPPERSONKEY?: string;
    TPTEL?: string;
    TPHPTEL?: string;
    TPLASTIMGSEQ?: string;
    TPADDR_1?: string;
    TPADDR_2?: string;
    TPZIPCD?: string;
    IILASTDIRPATH?: string;
    IILASTREALNM?: string;
    IILASTIMGSEQ?: string;
    AJMODRESON?: string;
    SEL?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_status {
    CD?: string;
    DATA?: string;
}

export const ds_ds_status: Ids_status[] = [
    { CD: '%', DATA: '전체' },
    { CD: '1', DATA: '신청' },
    { CD: '2', DATA: '접수' },
    { CD: '5', DATA: '보완' },
    { CD: '3', DATA: '승인' },
    { CD: '4', DATA: '반려' },
    { CD: '9', DATA: '신청취소' },
];

export interface Ids_iApproveLicense {
    AJMGNO?: number;
    AJTJMGNO?: number;
    AJSTATUS?: string;
    AJRESON?: string;
    AJREMARK?: string;
    IIIMGSEQ?: string;
    LLCSNO_A?: string;
    AJGUBUN?: string;
    AJISSUEGUBUN?: string;
    AJMODRESON?: string;
    AJSAVE?: string;
}

export interface Ids_oApproveLicenseResult {
    O_LLCSNO?: string;
    O_AJSTATUS?: string;
}

export interface Ids_oImageInfo {
    IILASTDIRPATH?: string;
    IILASTREALNM?: string;
    IILASTIMGSEQ?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    IIIMGSEQ?: string;
}

export interface Ids_oStatus {
}

export interface Ids_oAjgubun {
    CD?: string;
    DATA?: string;
    DATA2?: string;
    DATA3?: string;
    DATA4?: string;
}

export interface Ids_oLicense {
    LICENSECNT?: number;
    LLCSNO?: string;
}

export interface Ids_oAjgubunAll {
    AJTCCOURSECD?: string;
    AJTCCOURSECDNM?: string;
    AJISSUEGUBUN?: string;
    AJISSUEGUBUNNM?: string;
    AJGUBUN?: string;
    AJGUBUNNM?: string;
}

export interface Ids_ioApproveData {
}

export interface Ids_Issuegubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Issuegubun: Ids_Issuegubun[] = [
    { CD: '', DATA: '' },
    { CD: '3', DATA: '경력인정' },
    { CD: '6', DATA: '자격인정' },
    { CD: '7', DATA: '자격및경력인정' },
    { CD: '9', DATA: '겸직인정' },
];
