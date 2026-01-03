// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioChoiceYn, Ids_ioMemberGubun, Ids_ioCourse, Ids_ioJibu, Ids_ioCourseYn, Ids_ioReport, Ids_oEduGubun, Ids_SearchJogeon, Ids_EduList, Ids_CourseStatistics1, Ids_oRegion, Ids_oAdditionInfo, Ids_CourseStatistics2, Ids_CourseStatistics3, Ids_CourseStatistics4, Ids_CourseStatistics5 } from './Frmcust1160MCourseEduReportData';

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
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbBusinessType, setRawVisible_lbBusinessType] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_calMemberYmdFr, setRawVisible_calMemberYmdFr] = useState(true);
    const [rawVisible_calMemberYmdTo, setRawVisible_calMemberYmdTo] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_radBusinessType, setRawVisible_radBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_radMemberYmdGubun, setRawVisible_radMemberYmdGubun] = useState(true);
    const [rawVisible_radEduGubun, setRawVisible_radEduGubun] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_radEduYmdGubun, setRawVisible_radEduYmdGubun] = useState(true);
    const [rawVisible_calEduYmdFr, setRawVisible_calEduYmdFr] = useState(true);
    const [rawVisible_calEduYmdTo, setRawVisible_calEduYmdTo] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edEduOrder, setRawVisible_edEduOrder] = useState(true);
    const [rawVisible_radEduOrderGubun, setRawVisible_radEduOrderGubun] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbBusinessType = rawVisible_lbBusinessType && rawVisible_Shape0;
    const setIsVisible_lbBusinessType = setRawVisible_lbBusinessType;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape0;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape0;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape0;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_calMemberYmdFr = rawVisible_calMemberYmdFr && rawVisible_Shape0;
    const setIsVisible_calMemberYmdFr = setRawVisible_calMemberYmdFr;
    const isVisible_calMemberYmdTo = rawVisible_calMemberYmdTo && rawVisible_Shape0;
    const setIsVisible_calMemberYmdTo = setRawVisible_calMemberYmdTo;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape2;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape0;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse4 = rawVisible_cbxCourse4 && rawVisible_Shape0;
    const setIsVisible_cbxCourse4 = setRawVisible_cbxCourse4;
    const isVisible_cbxCourse5 = rawVisible_cbxCourse5 && rawVisible_Shape0;
    const setIsVisible_cbxCourse5 = setRawVisible_cbxCourse5;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_Shape0;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_cbxCourse3 = rawVisible_cbxCourse3 && rawVisible_Shape0;
    const setIsVisible_cbxCourse3 = setRawVisible_cbxCourse3;
    const isVisible_cbxCourse6 = rawVisible_cbxCourse6 && rawVisible_Shape0;
    const setIsVisible_cbxCourse6 = setRawVisible_cbxCourse6;
    const isVisible_radBusinessType = rawVisible_radBusinessType && rawVisible_Shape0;
    const setIsVisible_radBusinessType = setRawVisible_radBusinessType;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_radMemberYmdGubun = rawVisible_radMemberYmdGubun && rawVisible_Shape0;
    const setIsVisible_radMemberYmdGubun = setRawVisible_radMemberYmdGubun;
    const isVisible_radEduGubun = rawVisible_radEduGubun && rawVisible_Shape0;
    const setIsVisible_radEduGubun = setRawVisible_radEduGubun;
    const isVisible_edYear = rawVisible_edYear && rawVisible_Shape0;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_radEduYmdGubun = rawVisible_radEduYmdGubun && rawVisible_Shape0;
    const setIsVisible_radEduYmdGubun = setRawVisible_radEduYmdGubun;
    const isVisible_calEduYmdFr = rawVisible_calEduYmdFr && rawVisible_Shape0;
    const setIsVisible_calEduYmdFr = setRawVisible_calEduYmdFr;
    const isVisible_calEduYmdTo = rawVisible_calEduYmdTo && rawVisible_Shape0;
    const setIsVisible_calEduYmdTo = setRawVisible_calEduYmdTo;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edEduOrder = rawVisible_edEduOrder && rawVisible_Shape0;
    const setIsVisible_edEduOrder = setRawVisible_edEduOrder;
    const isVisible_radEduOrderGubun = rawVisible_radEduOrderGubun && rawVisible_Shape0;
    const setIsVisible_radEduOrderGubun = setRawVisible_radEduOrderGubun;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape0;
    const setIsVisible_Static9 = setRawVisible_Static9;

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
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbBusinessType,
        setIsVisible_lbBusinessType,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_calMemberYmdFr,
        setIsVisible_calMemberYmdFr,
        isVisible_calMemberYmdTo,
        setIsVisible_calMemberYmdTo,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse4,
        setIsVisible_cbxCourse4,
        isVisible_cbxCourse5,
        setIsVisible_cbxCourse5,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_cbxCourse3,
        setIsVisible_cbxCourse3,
        isVisible_cbxCourse6,
        setIsVisible_cbxCourse6,
        isVisible_radBusinessType,
        setIsVisible_radBusinessType,
        isVisible_cbxBusinessType1,
        setIsVisible_cbxBusinessType1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_cbxBusinessType2,
        setIsVisible_cbxBusinessType2,
        isVisible_radMemberYmdGubun,
        setIsVisible_radMemberYmdGubun,
        isVisible_radEduGubun,
        setIsVisible_radEduGubun,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radEduYmdGubun,
        setIsVisible_radEduYmdGubun,
        isVisible_calEduYmdFr,
        setIsVisible_calEduYmdFr,
        isVisible_calEduYmdTo,
        setIsVisible_calEduYmdTo,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edEduOrder,
        setIsVisible_edEduOrder,
        isVisible_radEduOrderGubun,
        setIsVisible_radEduOrderGubun,
        isVisible_Static9,
        setIsVisible_Static9,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        radEduOrderGubun_OnClick,
    };
};