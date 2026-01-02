// @ts-nocheck
export const Frmprofes0005MLecHistoryData = {};

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

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
    CD2?: string;
    CD3?: string;
}

export interface Ids_oWrtSatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oWrtSatus: Ids_oWrtSatus[] = [
    { CD: '', DATA: '전체' },
    { CD: '1', DATA: '미작성' },
    { CD: '2', DATA: '작성' },
];

export interface Ids_ioStudyCourse {
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

export interface Ids_ioProfesAssign {
    EDUTEAMNM?: string;
    EDUTIME?: string;
    LEDUGUBUN?: string;
    LEDUMGNO?: string;
    LGTMGNO?: string;
    LMGNO?: string;
    LPPFGUBUN?: string;
    LPPFJIKWINM?: string;
    LPPFJIKWI?: string;
    LPPFNM?: string;
    LPPFSABUN?: string;
    LPPFGUBUNCD?: string;
    LPPSSEQ?: string;
    LPSEQ?: string;
    LPSPEAKERPAY?: string;
    LPSVERSION?: string;
    LTCCOURSECD?: string;
    LTCMUNJEGUBUN?: string;
    LTDATESEQ?: string;
    LTEDUDATE?: string;
    LTEDUDAYS?: string;
    LTSCHEDULETYPE?: string;
    PSTITLE?: string;
    TSENDTIME?: string;
    TSSEQ?: string;
    TSSTARTTIME?: string;
    TSTIME?: string;
    TSTYPESEQ?: string;
    LPSOSOK?: string;
    PSTN?: string;
    USING_TIME?: string;
}

export interface Ids_oSelectDays {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSubject {
    CD?: string;
    DATA?: string;
    SJTCCOURSECD?: string;
    SJTCMUNJEGUBUN?: string;
}

export interface Ids_ioTeachingTimeMaster {
    LEDUGUBUN?: string;
    LPCMGNO?: string;
    LEDUMGNO?: string;
    LGTMGNO?: string;
    LMGNO?: string;
    LTDATESEQ?: string;
    LTEDUDATE?: string;
    LTEDUDAYS?: string;
    LTSCHEDULETYPE?: string;
    TSHOUR?: string;
    TSTYPESEQ?: string;
}

export interface Ids_ioTeachingTimeDetail {
    EDUTIME?: string;
    SUMTSHOUR?: string;
    TSGEMGNO?: string;
    TSSEQ?: string;
    TSTIME?: string;
    TSTYPE?: string;
}

export interface Ids_oTimeType {
    CD?: string;
    DATA?: string;
    TSTYPESEQ?: string;
    TSGEMGNO?: string;
}

export interface Ids_oProfesAssignConfirm {
    LMGNO?: string;
    LTDATESEQ?: string;
    TPFSEQ?: string;
    TPFPFSABUN?: string;
    TPFPFNM?: string;
    TTGTMGNO?: string;
    LTSCHEDULETYPE?: string;
    TPFTSSEQ?: string;
    LTEDUDATE?: string;
    TSTIME?: string;
    TSSTARTTIME?: string;
    TSENDTIME?: string;
}

export interface Ids_ioProfesAssignTmp {
    EDUTEAMNM?: string;
    EDUTIME?: string;
    LEDUGUBUN?: string;
    LEDUMGNO?: string;
    LGTMGNO?: string;
    LMGNO?: string;
    LPPFGUBUN?: string;
    LPPFJIKWINM?: string;
    LPPFJIKWI?: string;
    LPPFNM?: string;
    LPPFSABUN?: string;
    LPPFGUBUNCD?: string;
    LPPSSEQ?: string;
    LPSEQ?: string;
    LPSPEAKERPAY?: string;
    LPSVERSION?: string;
    LTCCOURSECD?: string;
    LTCMUNJEGUBUN?: string;
    LTDATESEQ?: string;
    LTEDUDATE?: string;
    LTEDUDAYS?: string;
    LTSCHEDULETYPE?: string;
    PSTITLE?: string;
    TSENDTIME?: string;
    TSSEQ?: string;
    TSSTARTTIME?: string;
    TSTIME?: string;
    TSTYPESEQ?: string;
}

export interface Ids_oProfesAssignCount {
    CNT?: string;
}

export interface Ids_oStudyCourseWriteTime {
    LMGNO?: string;
    TSHOUR?: string;
}

export interface Ids_oCourseLowTime {
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
    PSLOWTIME?: string;
    PSSEQ?: number;
    PSTITLE?: string;
    PSVERSION?: string;
    TCCOURSECD?: string;
    PSEDUTIME?: string;
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

export interface Ids_oAllCourse {
    CD?: string;
    DATA?: string;
    PCMGNO?: number;
    PCTCMUNJEGUBUN?: string;
    PCTCSEARCHGUBUN?: string;
    CD3?: string;
}
