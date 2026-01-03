// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioCourse, Ids_ioMemberGubun, Ids_ioBusinessType, Ids_ioCourseYn, Ids_ioJibu, Ids_ioReport, Ids_SearchJogeon, Ids_ioChoiceYn, Ids_ManagerStatistics, Ids_CourseStatistics, Ids_BizStatistics, Ids_CourseStatisticsNotMember1, Ids_CourseStatisticsNotMember2, Ids_oAdditionInfo, Ids_CourseStatisticsTotal, Ids_oBook1, Ids_oBook2, Ids_ioPersonYnD, Ids_oPersonGubun } from './Frmmem0030MManagerReportData';

export const useFrmmem0030MManagerReport = () => {
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
    const [rawVisible_gdList2, setRawVisible_gdList2] = useState(true);
    const [rawVisible_gdList3, setRawVisible_gdList3] = useState(true);
    const [rawVisible_gdList4, setRawVisible_gdList4] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_gdList5, setRawVisible_gdList5] = useState(true);
    const [rawVisible_gdList6, setRawVisible_gdList6] = useState(true);
    const [rawVisible_gdList1, setRawVisible_gdList1] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_lbBusinessType, setRawVisible_lbBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_radBusinessType, setRawVisible_radBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_medMemberCnt, setRawVisible_medMemberCnt] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_medCoverCnt, setRawVisible_medCoverCnt] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_gdList1_1, setRawVisible_gdList1_1] = useState(false);
    const [rawVisible_gdList2_1, setRawVisible_gdList2_1] = useState(false);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_radCpersonGubun, setRawVisible_radCpersonGubun] = useState(true);
    const [rawVisible_cbxPersonD1, setRawVisible_cbxPersonD1] = useState(true);
    const [rawVisible_cbxPersonD2, setRawVisible_cbxPersonD2] = useState(true);
    const [rawVisible_cbxPersonD3, setRawVisible_cbxPersonD3] = useState(true);
    const [rawVisible_cbxPersonD6, setRawVisible_cbxPersonD6] = useState(true);
    const [rawVisible_cbxPersonD5, setRawVisible_cbxPersonD5] = useState(true);
    const [rawVisible_cbxPersonD4, setRawVisible_cbxPersonD4] = useState(true);
    const [rawVisible_cbxCpersonGubun, setRawVisible_cbxCpersonGubun] = useState(true);
    const isVisible_gdList2 = rawVisible_gdList2 && rawVisible_Shape1;
    const setIsVisible_gdList2 = setRawVisible_gdList2;
    const isVisible_gdList3 = rawVisible_gdList3 && rawVisible_Shape1;
    const setIsVisible_gdList3 = setRawVisible_gdList3;
    const isVisible_gdList4 = rawVisible_gdList4 && rawVisible_Shape1;
    const setIsVisible_gdList4 = setRawVisible_gdList4;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_gdList5 = rawVisible_gdList5 && rawVisible_Shape1;
    const setIsVisible_gdList5 = setRawVisible_gdList5;
    const isVisible_gdList6 = rawVisible_gdList6 && rawVisible_Shape1;
    const setIsVisible_gdList6 = setRawVisible_gdList6;
    const isVisible_gdList1 = rawVisible_gdList1 && rawVisible_Shape1;
    const setIsVisible_gdList1 = setRawVisible_gdList1;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_lbBusinessType = rawVisible_lbBusinessType && rawVisible_Shape0;
    const setIsVisible_lbBusinessType = setRawVisible_lbBusinessType;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_radBusinessType = rawVisible_radBusinessType && rawVisible_Shape0;
    const setIsVisible_radBusinessType = setRawVisible_radBusinessType;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt && rawVisible_Shape1;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape1;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_medMemberCnt = rawVisible_medMemberCnt && rawVisible_Shape1;
    const setIsVisible_medMemberCnt = setRawVisible_medMemberCnt;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_medCoverCnt = rawVisible_medCoverCnt && rawVisible_Shape1;
    const setIsVisible_medCoverCnt = setRawVisible_medCoverCnt;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape2;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_Shape0;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_cbxCourse3 = rawVisible_cbxCourse3 && rawVisible_Shape0;
    const setIsVisible_cbxCourse3 = setRawVisible_cbxCourse3;
    const isVisible_cbxCourse4 = rawVisible_cbxCourse4 && rawVisible_Shape0;
    const setIsVisible_cbxCourse4 = setRawVisible_cbxCourse4;
    const isVisible_cbxCourse5 = rawVisible_cbxCourse5 && rawVisible_Shape0;
    const setIsVisible_cbxCourse5 = setRawVisible_cbxCourse5;
    const isVisible_cbxCourse6 = rawVisible_cbxCourse6 && rawVisible_Shape0;
    const setIsVisible_cbxCourse6 = setRawVisible_cbxCourse6;
    const isVisible_gdList1_1 = rawVisible_gdList1_1;
    const setIsVisible_gdList1_1 = setRawVisible_gdList1_1;
    const isVisible_gdList2_1 = rawVisible_gdList2_1;
    const setIsVisible_gdList2_1 = setRawVisible_gdList2_1;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_radCpersonGubun = rawVisible_radCpersonGubun && rawVisible_Shape3;
    const setIsVisible_radCpersonGubun = setRawVisible_radCpersonGubun;
    const isVisible_cbxPersonD1 = rawVisible_cbxPersonD1 && rawVisible_Shape3;
    const setIsVisible_cbxPersonD1 = setRawVisible_cbxPersonD1;
    const isVisible_cbxPersonD2 = rawVisible_cbxPersonD2 && rawVisible_Shape3;
    const setIsVisible_cbxPersonD2 = setRawVisible_cbxPersonD2;
    const isVisible_cbxPersonD3 = rawVisible_cbxPersonD3 && rawVisible_Shape3;
    const setIsVisible_cbxPersonD3 = setRawVisible_cbxPersonD3;
    const isVisible_cbxPersonD6 = rawVisible_cbxPersonD6 && rawVisible_Shape3;
    const setIsVisible_cbxPersonD6 = setRawVisible_cbxPersonD6;
    const isVisible_cbxPersonD5 = rawVisible_cbxPersonD5 && rawVisible_Shape3;
    const setIsVisible_cbxPersonD5 = setRawVisible_cbxPersonD5;
    const isVisible_cbxPersonD4 = rawVisible_cbxPersonD4 && rawVisible_Shape3;
    const setIsVisible_cbxPersonD4 = setRawVisible_cbxPersonD4;
    const isVisible_cbxCpersonGubun = rawVisible_cbxCpersonGubun && rawVisible_Shape3;
    const setIsVisible_cbxCpersonGubun = setRawVisible_cbxCpersonGubun;

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
        isVisible_gdList2,
        setIsVisible_gdList2,
        isVisible_gdList3,
        setIsVisible_gdList3,
        isVisible_gdList4,
        setIsVisible_gdList4,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_gdList5,
        setIsVisible_gdList5,
        isVisible_gdList6,
        setIsVisible_gdList6,
        isVisible_gdList1,
        setIsVisible_gdList1,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_lbBusinessType,
        setIsVisible_lbBusinessType,
        isVisible_cbxBusinessType1,
        setIsVisible_cbxBusinessType1,
        isVisible_radBusinessType,
        setIsVisible_radBusinessType,
        isVisible_cbxBusinessType2,
        setIsVisible_cbxBusinessType2,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_medMemberCnt,
        setIsVisible_medMemberCnt,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_medCoverCnt,
        setIsVisible_medCoverCnt,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_cbxCourse3,
        setIsVisible_cbxCourse3,
        isVisible_cbxCourse4,
        setIsVisible_cbxCourse4,
        isVisible_cbxCourse5,
        setIsVisible_cbxCourse5,
        isVisible_cbxCourse6,
        setIsVisible_cbxCourse6,
        isVisible_gdList1_1,
        setIsVisible_gdList1_1,
        isVisible_gdList2_1,
        setIsVisible_gdList2_1,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_radCpersonGubun,
        setIsVisible_radCpersonGubun,
        isVisible_cbxPersonD1,
        setIsVisible_cbxPersonD1,
        isVisible_cbxPersonD2,
        setIsVisible_cbxPersonD2,
        isVisible_cbxPersonD3,
        setIsVisible_cbxPersonD3,
        isVisible_cbxPersonD6,
        setIsVisible_cbxPersonD6,
        isVisible_cbxPersonD5,
        setIsVisible_cbxPersonD5,
        isVisible_cbxPersonD4,
        setIsVisible_cbxPersonD4,
        isVisible_cbxCpersonGubun,
        setIsVisible_cbxCpersonGubun,
        btnExcell_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_ExcelL,
        lfn_Print,
        lfn_Search,
    };
};