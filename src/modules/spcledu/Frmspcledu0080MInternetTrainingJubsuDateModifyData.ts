// @ts-nocheck
export const Frmspcledu0080MInternetTrainingJubsuDateModifyData = {};

export interface Ids_ioInternetJusu {
    BIRTHDAY?: string;
    SEL?: string;
    TCCOURSECD?: string;
    TJMGNO?: number;
    TJPERSONNM?: string;
    TJRESIDENTNO?: string;
    TOCOURSEGUBUN?: string;
    TOHJUBSUNO?: string;
    TOMGJIBUCD?: string;
    TOMUNJEGUBUN?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    TSFEE?: number;
    TSGUBUN?: string;
    TSPROCDATE?: string;
    TSREGDATE?: string;
    TSSEQ?: number;
    TSSUNAPGUBUN?: string;
}

export interface Ids_oWorkGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWorkGubun: Ids_oWorkGubun[] = [
    { CD: 'TRAINING', DATA: '인터넷강습접수' },
    { CD: 'EXAM', DATA: '인터넷시험접수' },
];

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

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

export interface Ids_oCourseMunje {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMunjeGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}
