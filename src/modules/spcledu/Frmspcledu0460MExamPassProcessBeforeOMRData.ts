// @ts-nocheck
export const Frmspcledu0460MExamPassProcessBeforeOMRData = {};

export interface Ids_ioExamJubsu {
    EJADDR1?: string;
    EJADDR2?: string;
    EJMGNO?: number;
    EJPASSYN?: string;
    EJPERSONNM?: string;
    EJRESIDENTNO?: string;
    EOEXAMDATE?: string;
    EOHJUBSUNO?: string;
    LADDR1?: string;
    LADDR2?: string;
    LCOMPNM?: string;
    LDATAAPPROVAL?: string;
    LHIIIMGSEQ?: number;
    LHISSUEREASON?: string;
    LHPROCGTMGNO?: string;
    LHPRTDATE?: string;
    LHPTEL?: string;
    LISSUEDATE?: string;
    LISSUEGUBUN?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LRESIDENTNO?: string;
    LTCCOURSECD?: string;
    LTEL?: string;
    LTPMGNO?: number;
    LTRAININGENDDATE?: string;
    LTRAININGSTARTDATE?: string;
    LZIPCD?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamInfo {
    PASS?: number;
    NOEXAM?: number;
    EOEXAMDATE?: string;
}

export interface Ids_ioJubsuList {
    EJPASSYN?: string;
    EJMGNO?: string;
    EJPERSONNM?: string;
    EJRESIDENTNO?: string;
    EJADDR1?: string;
    EJADDR2?: string;
    EOHJUBSUNO?: string;
}

export interface Ids_ioJubsuList_BeforeAfter {
}

export interface Ids_ioWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioWorkGubun: Ids_ioWorkGubun[] = [
    { CD: 'N', DATA: '시험전(시험접수자인원 - 합격자는 제외)' },
    { CD: 'Y', DATA: '시험후(합격자)' },
];

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_ioImageYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioImageYN: Ids_ioImageYN[] = [
    { CD: 'Y', DATA: '사진있음(O)' },
    { CD: 'N', DATA: '사진없음(X)' },
];
