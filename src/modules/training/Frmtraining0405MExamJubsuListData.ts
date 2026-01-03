// @ts-nocheck
export const Frmtraining0405MExamJubsuListData = {};

export interface Ids_oPassYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oPassYn: Ids_oPassYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '합격' },
    { CD: 'N', DATA: '불합격' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRepayYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oRepayYn: Ids_oRepayYn[] = [
    { CD: '', DATA: '전체' },
    { CD: 'Y', DATA: '환불자' },
    { CD: 'N', DATA: '미환불자' },
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
    JUBSUGUBUN?: string;
    EJLASTSUNAPGUBUNNM?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioJubsuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJubsuGubun: Ids_ioJubsuGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '20', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '01', DATA: '학력' },
    { CD: '02', DATA: '학·경력' },
    { CD: '05', DATA: '자격·경력' },
    { CD: '06', DATA: '자격' },
];

export interface Ids_ioJubsuGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJubsuGubun2: Ids_ioJubsuGubun2[] = [
    { CD: 'A', DATA: '전체' },
    { CD: '01', DATA: '일반접수' },
    { CD: '03', DATA: '가접수(신청)' },
    { CD: '04', DATA: '가접수(완료)' },
    { CD: '99', DATA: '가접수(자격미달)' },
];

export interface Ids_oSearchGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSearchGubun: Ids_oSearchGubun[] = [
    { CD: '0', DATA: '회차' },
    { CD: '1', DATA: '시험일자' },
];
