// @ts-nocheck
export const Frmcust0040MAgentManagementData = {};

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '1', DATA: '업체명' },
    { CD: '2', DATA: '주소' },
    { CD: '3', DATA: '대표자' },
    { CD: '4', DATA: '전화번호' },
];

export interface Ids_oAgentList {
    AGMGNO?: string;
    AGNM?: string;
    AGOWNER?: string;
    AGCONO?: string;
    AGTEL?: string;
    AGFAX?: string;
    AGZIPCD?: string;
    AGADDR1?: string;
    AGADDR2?: string;
    AGREMARK?: string;
    AGREGDATE?: string;
    AGREGSABUN?: string;
    AGMODDATE?: string;
    AGMODSABUN?: string;
    AGADDR?: string;
    AGADDRGUBUN?: string;
    ARPNUCD?: string;
    ARROADBUILDMGNO?: string;
    ARROADDETAIL?: string;
    ARROADREMAIN?: string;
    ARSANGUBUN?: string;
    ARMAINBUNJI?: string;
    ARSUBBUNJI?: string;
    ARBUILDNM?: string;
    ARADDRETC?: string;
    ARCONVPGM?: string;
    ARCONVSTATUS?: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'AGNM', COLUMNNM: '업무대행업체관리번호' },
    { COLUMNCD: 'AGOWNER', COLUMNNM: '대표자' },
    { COLUMNCD: 'AGCONO', COLUMNNM: '사업자등록번호' },
    { COLUMNCD: 'AGTEL', COLUMNNM: '전화번호' },
    { COLUMNCD: 'AGFAX', COLUMNNM: '팩스번호' },
    { COLUMNCD: 'AGZIPCD', COLUMNNM: '우편번호' },
    { COLUMNCD: 'AGADDR1', COLUMNNM: '주소1' },
    { COLUMNCD: 'AGADDR2', COLUMNNM: '주소2' },
    { COLUMNCD: 'AGREMARK', COLUMNNM: '비고' },
    { COLUMNCD: 'AGREGDATE', COLUMNNM: '등록일' },
    { COLUMNCD: 'AGREGSABUN', COLUMNNM: '등록자사번' },
    { COLUMNCD: 'AGMODDATE', COLUMNNM: '변경일' },
    { COLUMNCD: 'AGMODSABUN', COLUMNNM: '변경자사번' },
];

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];
