// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioBusinessType {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    REPORT_GUBUN: string;
    JIBU: string;
    MEMBER_GUBUN: string;
    SELECT_COURSE: string;
    COURSE_GUBUN: string;
    COURSE_GUBUN_IN: string;
    SELECT_BIZ: string;
    BIZ_GUBUN1: string;
    BIZ_GUBUN2: string;
    BOOK1: string;
    BOOK2: string;
    SELECT_PERSON: string;
    PERSON_GUBUN: string;
    PERSON_GUBUN_IN: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ManagerStatistics {
    GTDEPTNM: string;
    RCNM: string;
    TOT_CNT: string;
    MEMBER_CNT: string;
    NMEMBER_CNT: string;
    COVER_CNT: string;
}

export interface Ids_CourseStatistics {
    GTDEPTNM: string;
    RCNM: string;
    GONG1_CNT: string;
    GONG2_CNT: string;
    BANG1_CNT: string;
    BANG2_CNT: string;
    DANGER1_CNT: string;
    DANGER2_CNT: string;
    DANGER3_CNT: string;
    DANGER4_CNT: string;
    DANGER5_CNT: string;
    DANGER6_CNT: string;
    SOBANG1_CNT: string;
    SOBANG2_CNT: string;
    SOBANG3_CNT: string;
    SOBANG4_CNT: string;
    SOBANG5_CNT: string;
    PERSON_CNT: string;
    DANCHE_CNT: string;
    COVER_CNT: string;
    MEMBER_CNT: string;
    TOT_CNT: string;
    NMEMBER_CNT: string;
    OONSONG_CNT: string;
    EDU90_CNT: string;
}

export interface Ids_BizStatistics {
    GTDEPTNM: string;
    CNM: string;
    CNICKNM: string;
    RCNM: string;
    BIZ_CNT1: string;
    BIZ_CNT2: string;
    BIZ_CNT3: string;
    BIZ_CNT4: string;
    BIZ_CNT5: string;
    BIZ_CNT6: string;
    BIZ_CNT7: string;
    BIZ_CNT8: string;
    BIZ_CNT9: string;
    BIZ_CNT10: string;
    BIZ_CNT11: string;
    BIZ_CNT12: string;
    BIZ_CNT13: string;
    BIZ_CNT14: string;
    BIZ_CNT15: string;
    BIZ_CNT16: string;
    BIZ_CNT17: string;
    BIZ_CNT18: string;
    BIZ_CNT19: string;
    BIZ_CNT20: string;
    BIZ_CNT21: string;
    BIZ_CNT22: string;
    BIZ_CNT23: string;
    BIZ_CNT24: string;
    BIZ_CNT25: string;
    BIZ_CNT1_15: string;
    BIZ_CNT15_29: string;
    BIZ_CNT_TOT: string;
    BIZ_MEMBER_CNT: string;
    BIZ_COVER_CNT: string;
    BIZ_NMEMBER_CNT: string;
    BIZ_CNT26: string;
    BIZ_CNT27: string;
    BIZ_CNT28: string;
    BIZ_CNT29: string;
}

export interface Ids_CourseStatisticsNotMember1 {
    GTDEPTNM: string;
    RCNM: string;
    GONG1_CNT: string;
    GONG2_CNT: string;
    BANG1_CNT: string;
    BANG2_CNT: string;
    DANGER1_CNT: string;
    DANGER2_CNT: string;
    DANGER3_CNT: string;
    DANGER4_CNT: string;
    DANGER5_CNT: string;
    DANGER6_CNT: string;
    SOBANG1_CNT: string;
    SOBANG2_CNT: string;
    SOBANG3_CNT: string;
    SOBANG4_CNT: string;
    SOBANG5_CNT: string;
    COVER_CNT: string;
    NMEMBER_CNT: string;
    OONSONG_CNT: string;
    EDU90_CNT: string;
}

export interface Ids_CourseStatisticsNotMember2 {
    GTDEPTNM: string;
    RCNM: string;
    GONG1_CNT: string;
    GONG2_CNT: string;
    BANG1_CNT: string;
    BANG2_CNT: string;
    DANGER1_CNT: string;
    DANGER2_CNT: string;
    DANGER3_CNT: string;
    DANGER4_CNT: string;
    DANGER5_CNT: string;
    DANGER6_CNT: string;
    SOBANG1_CNT: string;
    SOBANG2_CNT: string;
    SOBANG3_CNT: string;
    SOBANG4_CNT: string;
    SOBANG5_CNT: string;
    COVER_CNT: string;
    NMEMBER_CNT: string;
    OONSONG_CNT: string;
    EDU90_CNT: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export interface Ids_CourseStatisticsTotal {
    GTDEPTNM: string;
    RCNM: string;
    GONG1_CNT: string;
    GONG2_CNT: string;
    BANG1_CNT: string;
    BANG2_CNT: string;
    DANGER1_CNT: string;
    DANGER2_CNT: string;
    DANGER3_CNT: string;
    DANGER4_CNT: string;
    DANGER5_CNT: string;
    DANGER6_CNT: string;
    SOBANG1_CNT: string;
    SOBANG2_CNT: string;
    SOBANG3_CNT: string;
    SOBANG4_CNT: string;
    SOBANG5_CNT: string;
    PERSON_CNT: string;
    DANCHE_CNT: string;
    COVER_CNT: string;
    MEMBER_CNT: string;
    TOT_CNT: string;
    NMEMBER_CNT: string;
    OONSONG_CNT: string;
    EDU90_CNT: string;
    WOONBAN_CNT: string;
}

export interface Ids_oBook1 {
    CD: string;
    DATA: string;
}

export interface Ids_oBook2 {
    CD: string;
    DATA: string;
}

export interface Ids_ioPersonYnD {
    CD: string;
    DATA: string;
}

export interface Ids_oPersonGubun {
    CD: string;
    DATA: string;
    PCD: string;
}

export const useFrmcust0150MManagerReport = () => {
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioBusinessType, setds_ioBusinessType] = useState<Ids_ioBusinessType[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ManagerStatistics, setds_ManagerStatistics] = useState<Ids_ManagerStatistics[]>([]);
    const [ds_CourseStatistics, setds_CourseStatistics] = useState<Ids_CourseStatistics[]>([]);
    const [ds_BizStatistics, setds_BizStatistics] = useState<Ids_BizStatistics[]>([]);
    const [ds_CourseStatisticsNotMember1, setds_CourseStatisticsNotMember1] = useState<Ids_CourseStatisticsNotMember1[]>([]);
    const [ds_CourseStatisticsNotMember2, setds_CourseStatisticsNotMember2] = useState<Ids_CourseStatisticsNotMember2[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_CourseStatisticsTotal, setds_CourseStatisticsTotal] = useState<Ids_CourseStatisticsTotal[]>([]);
    const [ds_oBook1, setds_oBook1] = useState<Ids_oBook1[]>([]);
    const [ds_oBook2, setds_oBook2] = useState<Ids_oBook2[]>([]);
    const [ds_ioPersonYnD, setds_ioPersonYnD] = useState<Ids_ioPersonYnD[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioCourse([]);
            setds_ioMemberGubun([]);
            setds_ioBusinessType([]);
            setds_ioCourseYn([]);
            setds_ioJibu([]);
            setds_ioReport([]);
            setds_SearchJogeon([]);
            setds_ioChoiceYn([]);
            setds_ManagerStatistics([]);
            setds_CourseStatistics([]);
            setds_BizStatistics([]);
            setds_CourseStatisticsNotMember1([]);
            setds_CourseStatisticsNotMember2([]);
            setds_oAdditionInfo([]);
            setds_CourseStatisticsTotal([]);
            setds_oBook1([]);
            setds_oBook2([]);
            setds_ioPersonYnD([]);
            setds_oPersonGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_ExcelL = () => {
        console.log('lfn_ExcelL clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioCourse,
        ds_ioMemberGubun,
        ds_ioBusinessType,
        ds_ioCourseYn,
        ds_ioJibu,
        ds_ioReport,
        ds_SearchJogeon,
        ds_ioChoiceYn,
        ds_ManagerStatistics,
        ds_CourseStatistics,
        ds_BizStatistics,
        ds_CourseStatisticsNotMember1,
        ds_CourseStatisticsNotMember2,
        ds_oAdditionInfo,
        ds_CourseStatisticsTotal,
        ds_oBook1,
        ds_oBook2,
        ds_ioPersonYnD,
        ds_oPersonGubun,
        btnExcell_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_ExcelL,
        lfn_Print,
        lfn_Search,
    };
};