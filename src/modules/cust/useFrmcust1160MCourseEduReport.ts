// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    REPORT_GUBUN: string;
    YEAR: string;
    JIBU: string;
    REGION_GUBUN: string;
    REGION1: string;
    REGION2: string;
    MEMBER_GUBUN: string;
    COURSE_GUBUN: string;
    COURSE: string;
    COURSE1_6IN: string;
    BIZ_GUBUN: string;
    BIZ1: string;
    BIZ2: string;
    MEMBERYMD_GUBUN: string;
    MEMBER_YMD_FR: string;
    MEMBER_YMD_TO: string;
    EDUYMD_GUBUN: string;
    EDU_YMD_FR: string;
    EDU_YMD_TO: string;
    EDU_GUBUN: string;
    EDU_ORDER: string;
    EDU_ORDERGUBUN: string;
}

export interface Ids_EduList {
    GTTEAMNM: string;
    MGNO: string;
    EPPERSONNM: string;
    BIRTHDAY: string;
    ADDR: string;
    BNM: string;
    PASSDATE: string;
    MINAPAMT: string;
    TAJIBU: string;
}

export interface Ids_CourseStatistics1 {
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export interface Ids_CourseStatistics2 {
}

export interface Ids_CourseStatistics3 {
}

export interface Ids_CourseStatistics4 {
}

export interface Ids_CourseStatistics5 {
}

export const useFrmcust1160MCourseEduReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_EduList, setds_EduList] = useState<Ids_EduList[]>([]);
    const [ds_CourseStatistics1, setds_CourseStatistics1] = useState<Ids_CourseStatistics1[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_CourseStatistics2, setds_CourseStatistics2] = useState<Ids_CourseStatistics2[]>([]);
    const [ds_CourseStatistics3, setds_CourseStatistics3] = useState<Ids_CourseStatistics3[]>([]);
    const [ds_CourseStatistics4, setds_CourseStatistics4] = useState<Ids_CourseStatistics4[]>([]);
    const [ds_CourseStatistics5, setds_CourseStatistics5] = useState<Ids_CourseStatistics5[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_ioCourse([]);
            setds_ioJibu([]);
            setds_ioCourseYn([]);
            setds_ioReport([]);
            setds_oEduGubun([]);
            setds_SearchJogeon([]);
            setds_EduList([]);
            setds_CourseStatistics1([]);
            setds_oRegion([]);
            setds_oAdditionInfo([]);
            setds_CourseStatistics2([]);
            setds_CourseStatistics3([]);
            setds_CourseStatistics4([]);
            setds_CourseStatistics5([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const radEduOrderGubun_OnClick = () => {
        console.log('radEduOrderGubun_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioChoiceYn,
        ds_ioMemberGubun,
        ds_ioCourse,
        ds_ioJibu,
        ds_ioCourseYn,
        ds_ioReport,
        ds_oEduGubun,
        ds_SearchJogeon,
        ds_EduList,
        ds_CourseStatistics1,
        ds_oRegion,
        ds_oAdditionInfo,
        ds_CourseStatistics2,
        ds_CourseStatistics3,
        ds_CourseStatistics4,
        ds_CourseStatistics5,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        radEduOrderGubun_OnClick,
    };
};