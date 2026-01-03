// @ts-nocheck
export const Frmtraining0364MInternetLicenseApprovalListData = {};

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
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '신청' },
    { CD: '2', DATA: '접수' },
    { CD: '5', DATA: '보완' },
    { CD: '3', DATA: '승인' },
    { CD: '4', DATA: '반려' },
    { CD: '9', DATA: '신청취소' },
];

export interface Ids_Course {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Course: Ids_Course[] = [
    { CD: '', DATA: '전체' },
    { CD: '10', DATA: '특급소방안전관리자' },
    { CD: '21', DATA: '1급소방안전관리자' },
    { CD: '22', DATA: '2급소방안전관리자' },
    { CD: '23', DATA: '3급소방안전관리자' },
    { CD: '24', DATA: '위험물안전관리자' },
    { CD: '28', DATA: '위험물운송자' },
];

export interface Ids_oAjgubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oAjgubunG {
    CD?: string;
    DATA?: string;
}

export interface Ids_Issuegubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Issuegubun: Ids_Issuegubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '3', DATA: '경력인정' },
    { CD: '6', DATA: '자격인정' },
    { CD: '7', DATA: '자격및경력인정' },
    { CD: '9', DATA: '겸직인정' },
];

export interface Ids_IssuegubunG {
    CD?: string;
    DATA?: string;
}

export const ds_ds_IssuegubunG: Ids_IssuegubunG[] = [
    { CD: '3', DATA: '경력인정' },
    { CD: '6', DATA: '자격인정' },
    { CD: '7', DATA: '자격및경력인정' },
    { CD: '9', DATA: '겸직인정' },
];
