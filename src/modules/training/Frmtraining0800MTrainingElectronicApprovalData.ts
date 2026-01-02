// @ts-nocheck
export const Frmtraining0800MTrainingElectronicApprovalData = {};

export interface Ids_ioElecApprConnection {
    GYMGNO?: number;
    NEW_RECEIVE_DATE?: string;
    PROCDATE?: string;
    RE_ALI_DOC_ID?: string;
    RE_APPROVER_DATE?: string;
    RE_APPROVER_KIND?: string;
    RE_APPROVER_NAME?: string;
    RE_APPROVER_STATUS?: string;
    RE_PC_DEPARTMENT?: string;
    RE_PC_POSITION?: string;
    RECEIVE_DATE?: string;
    ROWNUM?: number;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'SUNAP', DATA: '수납만' },
    { CD: 'REPAY', DATA: '환불만' },
    { CD: 'ORDER', DATA: '회차변경만' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oInternetJubsuStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInternetJubsuStatus: Ids_oInternetJubsuStatus[] = [
    { CD: '02', DATA: '접수완료' },
];

export interface Ids_iElecApprResolveInsert {
}

export interface Ids_ioElecApprResolve {
    TOYEAR?: string;
    TCCOURSENM?: string;
    JUBSUNO?: string;
    TJPERSONNM?: string;
    BIRTHDAY?: string;
    PAY?: number;
    REPAY?: number;
    JUBSUGUBUN?: string;
    PAYMENT?: number;
    PNM?: string;
    JIBU?: string;
    rpStartDate?: string;
    rpEndDate?: string;
}

export interface Ids_oElecApprExamPay {
    EOYEAR?: string;
    TCCOURSENM?: string;
    JUBSUNO?: string;
    EJPERSONNM?: string;
    BIRTHDAY?: string;
    PAY?: number;
    REPAY?: number;
    PAYMENT?: string;
    PNM?: string;
    JIBU?: string;
    rpStartDate?: string;
    rpEndDate?: string;
}

export interface Ids_oElecApprExamRepay {
    TOMGGTMGNO?: string;
    GTTEAMNM?: string;
    TOYEAR?: string;
    TOTCCOURSECD?: string;
    TCCOURSENM?: string;
    BF_JUBSUNO?: string;
    AF_JUBSUNO?: string;
    TJPERSONNM?: string;
    BIRTHDAY?: string;
    TJHREASON?: string;
    TJBIRTHDAY?: string;
    TOHTJMGNO?: number;
    JIBU?: string;
    rpStartDate?: string;
    rpEndDate?: string;
}

export interface Ids_oElecApprEduExam {
    TOMGGTMGNO?: string;
    GTTEAMNM?: string;
    TOYEAR?: string;
    TOTCCOURSECD?: string;
    TCCOURSENM?: string;
    BF_JUBSUNO?: string;
    AF_JUBSUNO?: string;
    TJPERSONNM?: string;
    BIRTHDAY?: string;
    TJHREASON?: string;
    TJBIRTHDAY?: string;
    TOHTJMGNO?: number;
    JIBU?: string;
    rpStartDate?: string;
    rpEndDate?: string;
}

export interface Ids_ioElecApprResolvedecision {
    TOYEAR?: string;
    TCCOURSENM?: string;
    JUBSUNO?: string;
    TJPERSONNM?: string;
    BIRTHDAY?: string;
    PAY?: number;
    REPAY?: number;
    JUBSUGUBUN?: string;
    PAYMENT?: number;
    PNM?: string;
    JIBU?: string;
    rpStartDate?: string;
    rpEndDate?: string;
}
