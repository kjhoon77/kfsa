// @ts-nocheck
export const Frmprofes0005P03OldLectureListData = {};

export interface Ids_oOldLectrue {
    CLASNM?: string;
    EDUDATE?: string;
    LEDUGUBUN?: string;
    LGTMGNO?: string;
    LMGNO?: number;
    LSTATUS?: string;
    LYEAR?: string;
    ORDERNO?: string;
    PCTIME?: number;
    PNM?: string;
}

export interface Ids_oStudyCourse {
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

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: 'B', DATA: '실무교육' },
    { CD: 'T', DATA: '강습교육' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus: Ids_oStatus[] = [
    { CD: '1', DATA: '요청' },
    { CD: '2', DATA: '수정가능' },
    { CD: '3', DATA: '승인' },
];

export interface Ids_ioLecture {
    LEDUGUBUN?: string;
    LEDUMGNO?: number;
    LEDUUNIONYN?: string;
    LGTMGNO?: string;
    LMGNO?: number;
    LPCMGNO?: number;
    LPSVERSION?: string;
    LREMARK?: string;
    LSERL?: string;
    LSTATUS?: string;
    LTCCOURSECD?: string;
    LTCMUNJEGUBUN?: string;
    LYEAR?: string;
}

export interface Ids_ioLectureTime {
    LTDATESEQ?: number;
    LTEDUDATE?: string;
    LTEDUDAYS?: number;
    LTEDUGUBUN?: string;
    LTEDUMGNO?: number;
    LTGTMGNO?: string;
    LTLMGNO?: number;
    LTSCHEDULETYPE?: number;
}

export interface Ids_ioLectureProfessor {
    LPEDUTIME?: number;
    LPPFGUBUN?: string;
    LPPFJIKWI?: string;
    LPPFNM?: string;
    LPPFSABUN?: string;
    LPPSSEQ?: number;
    LPSEQ?: number;
    LPSPEAKERPAY?: number;
    LPTSSEQ?: number;
    LPTSTYPESEQ?: number;
    LPTTDATESEQ?: number;
    LPTTLMGNO?: number;
}

export interface Ids_oLSeq {
    SEQ?: string;
}
