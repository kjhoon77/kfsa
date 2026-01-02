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

export interface Ids_ioGijun {
    CD: string;
    DATA: string;
}

export interface Ids_oFireCd {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_oBonbu {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_ioExceptGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioSuccessionGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust1210MRegionEduReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_EduList, setds_EduList] = useState<Ids_EduList[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_ioExceptGubun, setds_ioExceptGubun] = useState<Ids_ioExceptGubun[]>([]);
    const [ds_ioSuccessionGubun, setds_ioSuccessionGubun] = useState<Ids_ioSuccessionGubun[]>([]);
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
            setds_oRegion([]);
            setds_oAdditionInfo([]);
            setds_ioGijun([]);
            setds_oFireCd([]);
            setds_oBonbu([]);
            setds_ioExceptGubun([]);
            setds_ioSuccessionGubun([]);
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
        ds_oRegion,
        ds_oAdditionInfo,
        ds_ioGijun,
        ds_oFireCd,
        ds_oBonbu,
        ds_ioExceptGubun,
        ds_ioSuccessionGubun,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};