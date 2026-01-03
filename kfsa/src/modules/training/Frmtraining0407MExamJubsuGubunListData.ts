// @ts-nocheck
export const Frmtraining0407MExamJubsuGubunListData = {};

export interface Ids_oPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassYn: Ids_oPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '합격' },
    { CD: 'N', DATA: '불합격' },
    { CD: 'X', DATA: '미응시' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oJubsuGubun: Ids_oJubsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '20', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '10', DATA: '학력' },
];

export interface Ids_oExamJubsu {
    BIRTHDAY?: string;
    EJADDR1?: string;
    EJADDR2?: string;
    EJEXAMDATE?: string;
    EJEXPYN?: string;
    EJLASTEJHSEQ?: number;
    EJLASTEOHSEQ?: number;
    EJLASTESSEQ?: number;
    EJLASTSUNAPGUBUN?: string;
    EJMGNO?: number;
    EJPASSYN?: string;
    EJPERSONNM?: string;
    EJPROCGTMGNO?: string;
    EJBIRTHDAY?: string;
    EJTPMGNO?: number;
    EJZZIPCD?: string;
    EOENDTIME?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOEXAMORDERGUBUN?: string;
    EOHAFTEREOMGNO?: number;
    EOHAFTERJUBSUNO?: string;
    EOHPROCDATE?: string;
    EOHEOMGNO?: number;
    EOHJUBSUGUBUN?: string;
    EOHJUBSUNO?: number;
    EOHLASTGUBUN?: string;
    EOHPROCGTMGNO?: string;
    EOHPSABUN?: string;
    EOHSEQ?: number;
    EOMGGTMGNO?: string;
    EOMGNO?: number;
    EOSTARTTIME?: string;
    EOTCCOURSECD?: string;
    EOYEAR?: string;
    TFCFEE?: number;
    GTDEPTNM?: string;
    GTTEAMNM?: string;
    IIDIRPATH?: string;
    IIREALNM?: string;
    TCCOURSENM?: string;
    TPHPTEL?: string;
    TPTEL?: string;
    TPEMAILID?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oExamJubsuTotal {
    EOMGGTMGNO?: string;
    GTTEAMNM?: string;
    EOYEAR?: string;
    EOTCCOURSECD?: string;
    TCCOURSENICK?: string;
    EJPASSYN?: string;
    TOTALCNT?: string;
    JUBGUBUN20?: string;
    JUBGUBUN00?: string;
    JUBGUBUN01?: string;
    JUBGUBUN02?: string;
    JUBGUBUN05?: string;
    JUBGUBUN06?: string;
}
