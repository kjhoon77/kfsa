// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioChoiceYn, Ids_ioMemberGubun, Ids_ioCourse, Ids_ioJibu, Ids_ioCourseYn, Ids_oRegion, Ids_oPrintGubun, Ids_oAdditionInfo, Ids_oAddrGubun, Ids_SearchJogeon, Ids_SendReport, Ids_ioCourseYnD, Ids_ioCourseD } from './Frmcust0130MDMSendReportData';

export const useFrmcust0130MDMSendReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_oAddrGubun, setds_oAddrGubun] = useState<Ids_oAddrGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_SendReport, setds_SendReport] = useState<Ids_SendReport[]>([]);
    const [ds_ioCourseYnD, setds_ioCourseYnD] = useState<Ids_ioCourseYnD[]>([]);
    const [ds_ioCourseD, setds_ioCourseD] = useState<Ids_ioCourseD[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_lbTextBlue, setRawVisible_lbTextBlue] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_radBusinessType, setRawVisible_radBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_lbBusinessType, setRawVisible_lbBusinessType] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_edBNm, setRawVisible_edBNm] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_medMgno1, setRawVisible_medMgno1] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_medMgno2, setRawVisible_medMgno2] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radAddrGubun, setRawVisible_radAddrGubun] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(false);
    const [rawVisible_radCourseD, setRawVisible_radCourseD] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_cbxCourseD1, setRawVisible_cbxCourseD1] = useState(true);
    const [rawVisible_cbxCourseD2, setRawVisible_cbxCourseD2] = useState(true);
    const [rawVisible_cbxCourseD3, setRawVisible_cbxCourseD3] = useState(true);
    const [rawVisible_cbxCourseD6, setRawVisible_cbxCourseD6] = useState(true);
    const [rawVisible_cbxCourseD5, setRawVisible_cbxCourseD5] = useState(true);
    const [rawVisible_cbxCourseD4, setRawVisible_cbxCourseD4] = useState(true);
    const [rawVisible_cbxCourseD, setRawVisible_cbxCourseD] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
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
    const isVisible_lbTextBlue = rawVisible_lbTextBlue && rawVisible_Shape2;
    const setIsVisible_lbTextBlue = setRawVisible_lbTextBlue;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape2;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape0;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape0;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_radBusinessType = rawVisible_radBusinessType && rawVisible_Shape0;
    const setIsVisible_radBusinessType = setRawVisible_radBusinessType;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_lbBusinessType = rawVisible_lbBusinessType && rawVisible_Shape0;
    const setIsVisible_lbBusinessType = setRawVisible_lbBusinessType;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape0;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape0;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_edBNm = rawVisible_edBNm && rawVisible_Shape0;
    const setIsVisible_edBNm = setRawVisible_edBNm;
    const isVisible_Static31 = rawVisible_Static31 && rawVisible_Shape0;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
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
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_medMgno1 = rawVisible_medMgno1 && rawVisible_Shape0;
    const setIsVisible_medMgno1 = setRawVisible_medMgno1;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape0;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_medMgno2 = rawVisible_medMgno2 && rawVisible_Shape0;
    const setIsVisible_medMgno2 = setRawVisible_medMgno2;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radAddrGubun = rawVisible_radAddrGubun && rawVisible_Shape0;
    const setIsVisible_radAddrGubun = setRawVisible_radAddrGubun;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_radCourseD = rawVisible_radCourseD && rawVisible_Shape0;
    const setIsVisible_radCourseD = setRawVisible_radCourseD;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_cbxCourseD1 = rawVisible_cbxCourseD1 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD1 = setRawVisible_cbxCourseD1;
    const isVisible_cbxCourseD2 = rawVisible_cbxCourseD2 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD2 = setRawVisible_cbxCourseD2;
    const isVisible_cbxCourseD3 = rawVisible_cbxCourseD3 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD3 = setRawVisible_cbxCourseD3;
    const isVisible_cbxCourseD6 = rawVisible_cbxCourseD6 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD6 = setRawVisible_cbxCourseD6;
    const isVisible_cbxCourseD5 = rawVisible_cbxCourseD5 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD5 = setRawVisible_cbxCourseD5;
    const isVisible_cbxCourseD4 = rawVisible_cbxCourseD4 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD4 = setRawVisible_cbxCourseD4;
    const isVisible_cbxCourseD = rawVisible_cbxCourseD && rawVisible_Shape0;
    const setIsVisible_cbxCourseD = setRawVisible_cbxCourseD;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_ioCourse([]);
            setds_ioJibu([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_oPrintGubun([]);
            setds_oAdditionInfo([]);
            setds_oAddrGubun([]);
            setds_SearchJogeon([]);
            setds_SendReport([]);
            setds_ioCourseYnD([]);
            setds_ioCourseD([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
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
        ds_oRegion,
        ds_oPrintGubun,
        ds_oAdditionInfo,
        ds_oAddrGubun,
        ds_SearchJogeon,
        ds_SendReport,
        ds_ioCourseYnD,
        ds_ioCourseD,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
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
        isVisible_lbTextBlue,
        setIsVisible_lbTextBlue,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_radMgno,
        setIsVisible_radMgno,
        isVisible_lbMgno,
        setIsVisible_lbMgno,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_cbxBusinessType2,
        setIsVisible_cbxBusinessType2,
        isVisible_radBusinessType,
        setIsVisible_radBusinessType,
        isVisible_cbxBusinessType1,
        setIsVisible_cbxBusinessType1,
        isVisible_lbBusinessType,
        setIsVisible_lbBusinessType,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_edBNm,
        setIsVisible_edBNm,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
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
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_medMgno1,
        setIsVisible_medMgno1,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_medMgno2,
        setIsVisible_medMgno2,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radAddrGubun,
        setIsVisible_radAddrGubun,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_radCourseD,
        setIsVisible_radCourseD,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_cbxCourseD1,
        setIsVisible_cbxCourseD1,
        isVisible_cbxCourseD2,
        setIsVisible_cbxCourseD2,
        isVisible_cbxCourseD3,
        setIsVisible_cbxCourseD3,
        isVisible_cbxCourseD6,
        setIsVisible_cbxCourseD6,
        isVisible_cbxCourseD5,
        setIsVisible_cbxCourseD5,
        isVisible_cbxCourseD4,
        setIsVisible_cbxCourseD4,
        isVisible_cbxCourseD,
        setIsVisible_cbxCourseD,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};