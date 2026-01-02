// @ts-nocheck
export const Frmprofes0022MOldLecHistoryData = {};

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: 'B', DATA: '실무교육' },
    { CD: 'T', DATA: '강습교육' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oLecture {
    EDUCCOURSECD?: string;
    EDUCOURSENM?: string;
    EDUDATE?: string;
    EDUEND?: string;
    EDUGTMGNO?: string;
    EDUGUBUN?: string;
    EDULMGNO?: number;
    EDULOWTIME?: number;
    EDUMGNO?: number;
    EDUMUNJEGUBUN?: string;
    EDUORDER?: string;
    EDUPCMGNO?: number;
    EDUREGSABUN?: string;
    EDUREMARK?: string;
    EDUSTART?: string;
    EDUSTATUS?: string;
    EDUSTATUSCD?: string;
    EDUTEAMNM?: string;
    EDUUNIONYN?: string;
    EDUWRTTIME?: number;
    EDUYEAR?: string;
    PSVERSION?: string;
}

export interface Ids_oLectureSeq {
    SEQ?: string;
}

export interface Ids_oLectureProfessor {
}

export interface Ids_Status {
    CD?: string;
    DATA?: string;
}

export const ds_ds_Status: Ids_Status[] = [
    { CD: 'all', DATA: '전체' },
    { CD: '', DATA: '미작성' },
    { CD: '1', DATA: '승인요청' },
    { CD: '2', DATA: '수정허가' },
    { CD: '3', DATA: '승인' },
];

export interface Ids_oSubject {
    CD?: string;
    DATA?: string;
    SJTCCOURSECD?: string;
    SJTCMUNJEGUBUN?: string;
}

export interface Ids_oCourse_0 {
    TCCOURSECD?: string;
    TCCOURSENM?: string;
    PCTCCOURSECD?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
}

export interface Ids_oAllCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
}

export interface Ids_oCourseGubun {
    CD?: string;
    DATA?: string;
}
