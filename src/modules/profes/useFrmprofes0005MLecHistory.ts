// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
    PCMGNO: string;
    PCTCMUNJEGUBUN: string;
    PCTCSEARCHGUBUN: string;
    CD2: string;
    CD3: string;
}

export interface Ids_oWrtSatus {
    CD: string;
    DATA: string;
}

export interface Ids_ioStudyCourse {
    EDUCCOURSECD: string;
    EDUCOURSENM: string;
    EDUDATE: string;
    EDUEND: string;
    EDUGTMGNO: string;
    EDUGUBUN: string;
    EDULMGNO: string;
    EDULOWTIME: string;
    EDUMGNO: string;
    EDUMUNJEGUBUN: string;
    EDUORDER: string;
    EDUPCMGNO: string;
    EDUREGSABUN: string;
    EDUREMARK: string;
    EDUSTART: string;
    EDUSTATUS: string;
    EDUSTATUSCD: string;
    EDUTEAMNM: string;
    EDUUNIONYN: string;
    EDUWRTTIME: string;
    EDUYEAR: string;
    PSVERSION: string;
}

export interface Ids_oLectureSeq {
    SEQ: string;
}

export interface Ids_ioProfesAssign {
    EDUTEAMNM: string;
    EDUTIME: string;
    LEDUGUBUN: string;
    LEDUMGNO: string;
    LGTMGNO: string;
    LMGNO: string;
    LPPFGUBUN: string;
    LPPFJIKWINM: string;
    LPPFJIKWI: string;
    LPPFNM: string;
    LPPFSABUN: string;
    LPPFGUBUNCD: string;
    LPPSSEQ: string;
    LPSEQ: string;
    LPSPEAKERPAY: string;
    LPSVERSION: string;
    LTCCOURSECD: string;
    LTCMUNJEGUBUN: string;
    LTDATESEQ: string;
    LTEDUDATE: string;
    LTEDUDAYS: string;
    LTSCHEDULETYPE: string;
    PSTITLE: string;
    TSENDTIME: string;
    TSSEQ: string;
    TSSTARTTIME: string;
    TSTIME: string;
    TSTYPESEQ: string;
    LPSOSOK: string;
    PSTN: string;
    USING_TIME: string;
}

export interface Ids_oSelectDays {
    CD: string;
    DATA: string;
}

export interface Ids_oSubject {
    CD: string;
    DATA: string;
    SJTCCOURSECD: string;
    SJTCMUNJEGUBUN: string;
}

export interface Ids_ioTeachingTimeMaster {
    LEDUGUBUN: string;
    LPCMGNO: string;
    LEDUMGNO: string;
    LGTMGNO: string;
    LMGNO: string;
    LTDATESEQ: string;
    LTEDUDATE: string;
    LTEDUDAYS: string;
    LTSCHEDULETYPE: string;
    TSHOUR: string;
    TSTYPESEQ: string;
}

export interface Ids_ioTeachingTimeDetail {
    EDUTIME: string;
    SUMTSHOUR: string;
    TSGEMGNO: string;
    TSSEQ: string;
    TSTIME: string;
    TSTYPE: string;
}

export interface Ids_oTimeType {
    CD: string;
    DATA: string;
    TSTYPESEQ: string;
    TSGEMGNO: string;
}

export interface Ids_oProfesAssignConfirm {
    LMGNO: string;
    LTDATESEQ: string;
    TPFSEQ: string;
    TPFPFSABUN: string;
    TPFPFNM: string;
    TTGTMGNO: string;
    LTSCHEDULETYPE: string;
    TPFTSSEQ: string;
    LTEDUDATE: string;
    TSTIME: string;
    TSSTARTTIME: string;
    TSENDTIME: string;
}

export interface Ids_ioProfesAssignTmp {
    EDUTEAMNM: string;
    EDUTIME: string;
    LEDUGUBUN: string;
    LEDUMGNO: string;
    LGTMGNO: string;
    LMGNO: string;
    LPPFGUBUN: string;
    LPPFJIKWINM: string;
    LPPFJIKWI: string;
    LPPFNM: string;
    LPPFSABUN: string;
    LPPFGUBUNCD: string;
    LPPSSEQ: string;
    LPSEQ: string;
    LPSPEAKERPAY: string;
    LPSVERSION: string;
    LTCCOURSECD: string;
    LTCMUNJEGUBUN: string;
    LTDATESEQ: string;
    LTEDUDATE: string;
    LTEDUDAYS: string;
    LTSCHEDULETYPE: string;
    PSTITLE: string;
    TSENDTIME: string;
    TSSEQ: string;
    TSSTARTTIME: string;
    TSTIME: string;
    TSTYPESEQ: string;
}

export interface Ids_oProfesAssignCount {
    CNT: string;
}

export interface Ids_oStudyCourseWriteTime {
    LMGNO: string;
    TSHOUR: string;
}

export interface Ids_oCourseLowTime {
    PCTCMUNJEGUBUN: string;
    PCTCSEARCHGUBUN: string;
    PSLOWTIME: string;
    PSSEQ: string;
    PSTITLE: string;
    PSVERSION: string;
    TCCOURSECD: string;
    PSEDUTIME: string;
}

export interface Ids_Status {
    CD: string;
    DATA: string;
}

export interface Ids_oAllCourse {
    CD: string;
    DATA: string;
    PCMGNO: string;
    PCTCMUNJEGUBUN: string;
    PCTCSEARCHGUBUN: string;
    CD3: string;
}

export const useFrmprofes0005MLecHistory = () => {
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oWrtSatus, setds_oWrtSatus] = useState<Ids_oWrtSatus[]>([]);
    const [ds_ioStudyCourse, setds_ioStudyCourse] = useState<Ids_ioStudyCourse[]>([]);
    const [ds_oLectureSeq, setds_oLectureSeq] = useState<Ids_oLectureSeq[]>([]);
    const [ds_ioProfesAssign, setds_ioProfesAssign] = useState<Ids_ioProfesAssign[]>([]);
    const [ds_oSelectDays, setds_oSelectDays] = useState<Ids_oSelectDays[]>([]);
    const [ds_oSubject, setds_oSubject] = useState<Ids_oSubject[]>([]);
    const [ds_ioTeachingTimeMaster, setds_ioTeachingTimeMaster] = useState<Ids_ioTeachingTimeMaster[]>([]);
    const [ds_ioTeachingTimeDetail, setds_ioTeachingTimeDetail] = useState<Ids_ioTeachingTimeDetail[]>([]);
    const [ds_oTimeType, setds_oTimeType] = useState<Ids_oTimeType[]>([]);
    const [ds_oProfesAssignConfirm, setds_oProfesAssignConfirm] = useState<Ids_oProfesAssignConfirm[]>([]);
    const [ds_ioProfesAssignTmp, setds_ioProfesAssignTmp] = useState<Ids_ioProfesAssignTmp[]>([]);
    const [ds_oProfesAssignCount, setds_oProfesAssignCount] = useState<Ids_oProfesAssignCount[]>([]);
    const [ds_oStudyCourseWriteTime, setds_oStudyCourseWriteTime] = useState<Ids_oStudyCourseWriteTime[]>([]);
    const [ds_oCourseLowTime, setds_oCourseLowTime] = useState<Ids_oCourseLowTime[]>([]);
    const [ds_Status, setds_Status] = useState<Ids_Status[]>([]);
    const [ds_oAllCourse, setds_oAllCourse] = useState<Ids_oAllCourse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oGubun([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oWrtSatus([]);
            setds_ioStudyCourse([]);
            setds_oLectureSeq([]);
            setds_ioProfesAssign([]);
            setds_oSelectDays([]);
            setds_oSubject([]);
            setds_ioTeachingTimeMaster([]);
            setds_ioTeachingTimeDetail([]);
            setds_oTimeType([]);
            setds_oProfesAssignConfirm([]);
            setds_ioProfesAssignTmp([]);
            setds_oProfesAssignCount([]);
            setds_oStudyCourseWriteTime([]);
            setds_oCourseLowTime([]);
            setds_Status([]);
            setds_oAllCourse([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCreate_OnClick = () => {
        console.log('btnCreate_OnClick clicked');
    };
    const btnEduUnion_OnClick = () => {
        console.log('btnEduUnion_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnOldLecture_OnClick = () => {
        console.log('btnOldLecture_OnClick clicked');
    };
    const btn_apprReq_OnClick = () => {
        console.log('btn_apprReq_OnClick clicked');
    };
    const btn_appr_OnClick = () => {
        console.log('btn_appr_OnClick clicked');
    };
    const btn_modAppr_OnClick = () => {
        console.log('btn_modAppr_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oGubun,
        ds_oJibu,
        ds_oCourse,
        ds_oWrtSatus,
        ds_ioStudyCourse,
        ds_oLectureSeq,
        ds_ioProfesAssign,
        ds_oSelectDays,
        ds_oSubject,
        ds_ioTeachingTimeMaster,
        ds_ioTeachingTimeDetail,
        ds_oTimeType,
        ds_oProfesAssignConfirm,
        ds_ioProfesAssignTmp,
        ds_oProfesAssignCount,
        ds_oStudyCourseWriteTime,
        ds_oCourseLowTime,
        ds_Status,
        ds_oAllCourse,
        btnCreate_OnClick,
        btnEduUnion_OnClick,
        btnMutilSort_OnClick,
        btnOldLecture_OnClick,
        btn_apprReq_OnClick,
        btn_appr_OnClick,
        btn_modAppr_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};