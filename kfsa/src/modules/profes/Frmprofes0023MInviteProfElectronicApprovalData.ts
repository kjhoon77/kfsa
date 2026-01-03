// @ts-nocheck
export const Frmprofes0023MInviteProfElectronicApprovalData = {};

export interface Ids_Professor {
    ATM_SMMGNO?: string;
    SMJIBUNM?: string;
    ATDYEAR?: string;
    ATDSDNAME?: string;
    ATM_RE_ALI_DOC_ID?: string;
    ATM_RE_APPROVER_STATUS?: string;
    AVM_SMMGNO?: string;
    AVM_RE_ALI_DOC_ID?: string;
    AVM_RE_APPROVER_STATUS?: string;
}

export interface Ids_Jibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_Approval {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Approval: Ids_Approval[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '미결재' },
    { CD: '2', DATA: '결재중' },
    { CD: '3', DATA: '결재완료' },
];
