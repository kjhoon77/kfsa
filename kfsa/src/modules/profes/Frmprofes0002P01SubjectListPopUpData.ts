// @ts-nocheck
export const Frmprofes0002P01SubjectListPopUpData = {};

export interface Ids_oSubjectList {
}

export interface Ids_Gubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Gubun: Ids_Gubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'B', DATA: '실무교육' },
    { CD: 'T', DATA: '강습교육' },
];

export interface Ids_Cours {
    TCCOURSECDYN?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
}

export interface Ids_SearchEduSubject {
    TCCOURSECDYN?: string;
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    TCSEARCHGUBUN?: string;
    TCMUNJEGUBUN?: string;
}
