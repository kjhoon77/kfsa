// @ts-nocheck
export const Frmcti0010PCallTransferData = {};

export interface Ids_ioGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun: Ids_ioGubun[] = [
    { CD: '0', DATA: '본부' },
    { CD: '1', DATA: '지부' },
    { CD: '9', DATA: '검색' },
];

export interface Ids_oUser {
}

export interface Ids_oDept {
}

export interface Ids_CtiAgentList {
}

export interface Ids_AgentState {
    CD?: string;
    DATA?: string;
}

export const ds_ds_AgentState: Ids_AgentState[] = [
    { CD: '0', DATA: '로그아웃' },
    { CD: '10', DATA: '로그아웃' },
    { CD: '20', DATA: '로그인' },
    { CD: '30', DATA: '자리비움' },
    { CD: '40', DATA: '대기중' },
    { CD: '41', DATA: 'INBOUND Ready' },
    { CD: '42', DATA: 'OUTBOUND Ready' },
    { CD: '50', DATA: '통화중' },
    { CD: '60', DATA: '후처리' },
];

export interface Ids_ioGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGubun2: Ids_ioGubun2[] = [
    { CD: '0', DATA: '내선번호' },
    { CD: '1', DATA: '성명' },
];
