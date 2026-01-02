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

export interface Ids_oLecture {
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

export interface Ids_oLectureProfessor {
}

export interface Ids_Status {
    CD: string;
    DATA: string;
}

export interface Ids_oSubject {
    CD: string;
    DATA: string;
    SJTCCOURSECD: string;
    SJTCMUNJEGUBUN: string;
}

export interface Ids_oCourse_0 {
    TCCOURSECD: string;
    TCCOURSENM: string;
    PCTCCOURSECD: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
    PCMGNO: string;
    PCTCMUNJEGUBUN: string;
    PCTCSEARCHGUBUN: string;
}

export interface Ids_oAllCourse {
    CD: string;
    DATA: string;
    PCMGNO: string;
    PCTCMUNJEGUBUN: string;
    PCTCSEARCHGUBUN: string;
}

export interface Ids_oCourseGubun {
    CD: string;
    DATA: string;
}

export const useFrmprofes0022MOldLecHistory = () => {
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oLecture, setds_oLecture] = useState<Ids_oLecture[]>([]);
    const [ds_oLectureSeq, setds_oLectureSeq] = useState<Ids_oLectureSeq[]>([]);
    const [ds_oLectureProfessor, setds_oLectureProfessor] = useState<Ids_oLectureProfessor[]>([]);
    const [ds_Status, setds_Status] = useState<Ids_Status[]>([]);
    const [ds_oSubject, setds_oSubject] = useState<Ids_oSubject[]>([]);
    const [ds_oCourse_0, setds_oCourse_0] = useState<Ids_oCourse_0[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oAllCourse, setds_oAllCourse] = useState<Ids_oAllCourse[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oGubun([]);
            setds_oJibu([]);
            setds_oLecture([]);
            setds_oLectureSeq([]);
            setds_oLectureProfessor([]);
            setds_Status([]);
            setds_oSubject([]);
            setds_oCourse_0([]);
            setds_oCourse([]);
            setds_oAllCourse([]);
            setds_oCourseGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oGubun,
        ds_oJibu,
        ds_oLecture,
        ds_oLectureSeq,
        ds_oLectureProfessor,
        ds_Status,
        ds_oSubject,
        ds_oCourse_0,
        ds_oCourse,
        ds_oAllCourse,
        ds_oCourseGubun,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};