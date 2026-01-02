// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oOldLectrue {
    CLASNM: string;
    EDUDATE: string;
    LEDUGUBUN: string;
    LGTMGNO: string;
    LMGNO: string;
    LSTATUS: string;
    LYEAR: string;
    ORDERNO: string;
    PCTIME: string;
    PNM: string;
}

export interface Ids_oStudyCourse {
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

export interface Ids_oGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oStatus {
    CD: string;
    DATA: string;
}

export interface Ids_ioLecture {
    LEDUGUBUN: string;
    LEDUMGNO: string;
    LEDUUNIONYN: string;
    LGTMGNO: string;
    LMGNO: string;
    LPCMGNO: string;
    LPSVERSION: string;
    LREMARK: string;
    LSERL: string;
    LSTATUS: string;
    LTCCOURSECD: string;
    LTCMUNJEGUBUN: string;
    LYEAR: string;
}

export interface Ids_ioLectureTime {
    LTDATESEQ: string;
    LTEDUDATE: string;
    LTEDUDAYS: string;
    LTEDUGUBUN: string;
    LTEDUMGNO: string;
    LTGTMGNO: string;
    LTLMGNO: string;
    LTSCHEDULETYPE: string;
}

export interface Ids_ioLectureProfessor {
    LPEDUTIME: string;
    LPPFGUBUN: string;
    LPPFJIKWI: string;
    LPPFNM: string;
    LPPFSABUN: string;
    LPPSSEQ: string;
    LPSEQ: string;
    LPSPEAKERPAY: string;
    LPTSSEQ: string;
    LPTSTYPESEQ: string;
    LPTTDATESEQ: string;
    LPTTLMGNO: string;
}

export interface Ids_oLSeq {
    SEQ: string;
}

export const useFrmprofes0005P03OldLectureList = () => {
    const [ds_oOldLectrue, setds_oOldLectrue] = useState<Ids_oOldLectrue[]>([]);
    const [ds_oStudyCourse, setds_oStudyCourse] = useState<Ids_oStudyCourse[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_ioLecture, setds_ioLecture] = useState<Ids_ioLecture[]>([]);
    const [ds_ioLectureTime, setds_ioLectureTime] = useState<Ids_ioLectureTime[]>([]);
    const [ds_ioLectureProfessor, setds_ioLectureProfessor] = useState<Ids_ioLectureProfessor[]>([]);
    const [ds_oLSeq, setds_oLSeq] = useState<Ids_oLSeq[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oOldLectrue([]);
            setds_oStudyCourse([]);
            setds_oGubun([]);
            setds_oJibu([]);
            setds_oStatus([]);
            setds_ioLecture([]);
            setds_ioLectureTime([]);
            setds_ioLectureProfessor([]);
            setds_oLSeq([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oOldLectrue,
        ds_oStudyCourse,
        ds_oGubun,
        ds_oJibu,
        ds_oStatus,
        ds_ioLecture,
        ds_ioLectureTime,
        ds_ioLectureProfessor,
        ds_oLSeq,
        btnSelect_OnClick,
        lfn_End,
    };
};