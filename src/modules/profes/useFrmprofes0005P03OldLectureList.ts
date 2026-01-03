// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOldLectrue, Ids_oStudyCourse, Ids_oGubun, Ids_oJibu, Ids_oStatus, Ids_ioLecture, Ids_ioLectureTime, Ids_ioLectureProfessor, Ids_oLSeq } from './Frmprofes0005P03OldLectureListData';

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