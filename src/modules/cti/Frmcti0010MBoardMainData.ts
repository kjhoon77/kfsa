// @ts-nocheck
export const Frmcti0010MBoardMainData = {};

export interface Ids_AgentState {
    CD?: string;
    DATA?: string;
}

export const ds_ds_AgentState: Ids_AgentState[] = [
    { CD: '0', DATA: 'NULL' },
    { CD: '10', DATA: 'Logout' },
    { CD: '20', DATA: 'Login' },
    { CD: '30', DATA: 'Not Ready' },
    { CD: '40', DATA: 'Ready' },
    { CD: '41', DATA: 'INBOUND Ready' },
    { CD: '42', DATA: 'OUTBOUND Ready' },
    { CD: '50', DATA: 'Busy' },
    { CD: '60', DATA: 'AftWork' },
];

export interface Ids_Statesubcode {
    CD?: string;
    DATA?: string;
}

export interface Ids_CtiInfo {
}

export interface Ids_CtiAgentList {
    ID?: string;
    AGENT?: string;
    DN?: string;
    AgentName?: string;
    AgentState?: string;
    AgentStateSub?: string;
}

export interface Ids_oMinwonList {
}

export interface Ids_iCallKeyIn {
}

export interface Ids_oCallKeyIn {
}

export interface Ids_oUserDNInfo {
}

export interface Ids_oResult {
    ASSABUN?: string;
    ASSTATCD?: string;
    ASSUBCD?: string;
}

export interface Ids_FileList {
}
