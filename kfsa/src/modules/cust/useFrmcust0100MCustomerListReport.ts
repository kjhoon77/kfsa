// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_ioChoiceYn, Ids_ioOrder, Ids_ioCourseYn, Ids_ioDataGubun, Ids_ioReport, Ids_ioMemberGubun, Ids_ioCourse, Ids_oAdditionInfo, Ids_oRegion, Ids_oCustomerList, Ids_oJibu, Ids_ioCourseYnD, Ids_ioCourseD, Ids_oPersonGubun, Ids_ioExceptGubun, Ids_ioMinapfee, Ids_ioAgencyGubun, Ids_ioGijun, Ids_oBonbu, Ids_oFireCd } from './Frmcust0100MCustomerListReportData';

export const useFrmcust0100MCustomerListReport = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioDataGubun, setds_ioDataGubun] = useState<Ids_ioDataGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCustomerList, setds_oCustomerList] = useState<Ids_oCustomerList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioCourseYnD, setds_ioCourseYnD] = useState<Ids_ioCourseYnD[]>([]);
    const [ds_ioCourseD, setds_ioCourseD] = useState<Ids_ioCourseD[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_ioExceptGubun, setds_ioExceptGubun] = useState<Ids_ioExceptGubun[]>([]);
    const [ds_ioMinapfee, setds_ioMinapfee] = useState<Ids_ioMinapfee[]>([]);
    const [ds_ioAgencyGubun, setds_ioAgencyGubun] = useState<Ids_ioAgencyGubun[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_radJogun, setRawVisible_radJogun] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_radBusinessType, setRawVisible_radBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_radDate, setRawVisible_radDate] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_medMgno1, setRawVisible_medMgno1] = useState(true);
    const [rawVisible_medMgno2, setRawVisible_medMgno2] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radDataType, setRawVisible_radDataType] = useState(true);
    const [rawVisible_radCourseD, setRawVisible_radCourseD] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_cbxCourseD, setRawVisible_cbxCourseD] = useState(true);
    const [rawVisible_cbxCourseD2, setRawVisible_cbxCourseD2] = useState(true);
    const [rawVisible_cbxCourseD3, setRawVisible_cbxCourseD3] = useState(true);
    const [rawVisible_cbxCourseD4, setRawVisible_cbxCourseD4] = useState(true);
    const [rawVisible_cbxCourseD5, setRawVisible_cbxCourseD5] = useState(true);
    const [rawVisible_cbxCourseD6, setRawVisible_cbxCourseD6] = useState(true);
    const [rawVisible_cbxCourseD1, setRawVisible_cbxCourseD1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_cbxCpersonGubun1, setRawVisible_cbxCpersonGubun1] = useState(true);
    const [rawVisible_radCpersonGubun, setRawVisible_radCpersonGubun] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_radExceptGubun, setRawVisible_radExceptGubun] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_gdList3, setRawVisible_gdList3] = useState(false);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_radMinapfee, setRawVisible_radMinapfee] = useState(true);
    const [rawVisible_gdList2, setRawVisible_gdList2] = useState(false);
    const [rawVisible_gdList4, setRawVisible_gdList4] = useState(false);
    const [rawVisible_gdList1, setRawVisible_gdList1] = useState(false);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_radAgencyGubun, setRawVisible_radAgencyGubun] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_radRegYYMM, setRawVisible_radRegYYMM] = useState(true);
    const [rawVisible_calStartRegYYMM, setRawVisible_calStartRegYYMM] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_calEndRegYYMM, setRawVisible_calEndRegYYMM] = useState(true);
    const [rawVisible_radGijun, setRawVisible_radGijun] = useState(true);
    const [rawVisible_cbxBonbu, setRawVisible_cbxBonbu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape0;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape1;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_radJogun = rawVisible_radJogun && rawVisible_Shape0;
    const setIsVisible_radJogun = setRawVisible_radJogun;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape2;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape0;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape0;
    const setIsVisible_Static7 = setRawVisible_Static7;
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
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape0;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_radBusinessType = rawVisible_radBusinessType && rawVisible_Shape0;
    const setIsVisible_radBusinessType = setRawVisible_radBusinessType;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape0;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape0;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape0;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape0;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_radDate = rawVisible_radDate && rawVisible_Shape0;
    const setIsVisible_radDate = setRawVisible_radDate;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape0;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_calStartDate = rawVisible_calStartDate && rawVisible_Shape0;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_medMgno1 = rawVisible_medMgno1 && rawVisible_Shape0;
    const setIsVisible_medMgno1 = setRawVisible_medMgno1;
    const isVisible_medMgno2 = rawVisible_medMgno2 && rawVisible_Shape0;
    const setIsVisible_medMgno2 = setRawVisible_medMgno2;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_Shape0;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radDataType = rawVisible_radDataType && rawVisible_Shape0;
    const setIsVisible_radDataType = setRawVisible_radDataType;
    const isVisible_radCourseD = rawVisible_radCourseD && rawVisible_Shape0;
    const setIsVisible_radCourseD = setRawVisible_radCourseD;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_cbxCourseD = rawVisible_cbxCourseD && rawVisible_Shape0;
    const setIsVisible_cbxCourseD = setRawVisible_cbxCourseD;
    const isVisible_cbxCourseD2 = rawVisible_cbxCourseD2 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD2 = setRawVisible_cbxCourseD2;
    const isVisible_cbxCourseD3 = rawVisible_cbxCourseD3 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD3 = setRawVisible_cbxCourseD3;
    const isVisible_cbxCourseD4 = rawVisible_cbxCourseD4 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD4 = setRawVisible_cbxCourseD4;
    const isVisible_cbxCourseD5 = rawVisible_cbxCourseD5 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD5 = setRawVisible_cbxCourseD5;
    const isVisible_cbxCourseD6 = rawVisible_cbxCourseD6 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD6 = setRawVisible_cbxCourseD6;
    const isVisible_cbxCourseD1 = rawVisible_cbxCourseD1 && rawVisible_Shape0;
    const setIsVisible_cbxCourseD1 = setRawVisible_cbxCourseD1;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_cbxCpersonGubun1 = rawVisible_cbxCpersonGubun1 && rawVisible_Shape0;
    const setIsVisible_cbxCpersonGubun1 = setRawVisible_cbxCpersonGubun1;
    const isVisible_radCpersonGubun = rawVisible_radCpersonGubun && rawVisible_Shape0;
    const setIsVisible_radCpersonGubun = setRawVisible_radCpersonGubun;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape0;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape0;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_radExceptGubun = rawVisible_radExceptGubun && rawVisible_Shape0;
    const setIsVisible_radExceptGubun = setRawVisible_radExceptGubun;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape0;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_gdList3 = rawVisible_gdList3;
    const setIsVisible_gdList3 = setRawVisible_gdList3;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape0;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_radMinapfee = rawVisible_radMinapfee && rawVisible_Shape0;
    const setIsVisible_radMinapfee = setRawVisible_radMinapfee;
    const isVisible_gdList2 = rawVisible_gdList2;
    const setIsVisible_gdList2 = setRawVisible_gdList2;
    const isVisible_gdList4 = rawVisible_gdList4;
    const setIsVisible_gdList4 = setRawVisible_gdList4;
    const isVisible_gdList1 = rawVisible_gdList1;
    const setIsVisible_gdList1 = setRawVisible_gdList1;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape0;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_radAgencyGubun = rawVisible_radAgencyGubun && rawVisible_Shape0;
    const setIsVisible_radAgencyGubun = setRawVisible_radAgencyGubun;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape0;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_radRegYYMM = rawVisible_radRegYYMM && rawVisible_Shape0;
    const setIsVisible_radRegYYMM = setRawVisible_radRegYYMM;
    const isVisible_calStartRegYYMM = rawVisible_calStartRegYYMM && rawVisible_Shape0;
    const setIsVisible_calStartRegYYMM = setRawVisible_calStartRegYYMM;
    const isVisible_Static21 = rawVisible_Static21 && rawVisible_Shape0;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_calEndRegYYMM = rawVisible_calEndRegYYMM && rawVisible_Shape0;
    const setIsVisible_calEndRegYYMM = setRawVisible_calEndRegYYMM;
    const isVisible_radGijun = rawVisible_radGijun && rawVisible_Shape0;
    const setIsVisible_radGijun = setRawVisible_radGijun;
    const isVisible_cbxBonbu = rawVisible_cbxBonbu && rawVisible_Shape0;
    const setIsVisible_cbxBonbu = setRawVisible_cbxBonbu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioChoiceYn([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_ioDataGubun([]);
            setds_ioReport([]);
            setds_ioMemberGubun([]);
            setds_ioCourse([]);
            setds_oAdditionInfo([]);
            setds_oRegion([]);
            setds_oCustomerList([]);
            setds_oJibu([]);
            setds_ioCourseYnD([]);
            setds_ioCourseD([]);
            setds_oPersonGubun([]);
            setds_ioExceptGubun([]);
            setds_ioMinapfee([]);
            setds_ioAgencyGubun([]);
            setds_ioGijun([]);
            setds_oBonbu([]);
            setds_oFireCd([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
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
        ds_ioGubun,
        ds_ioChoiceYn,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_ioDataGubun,
        ds_ioReport,
        ds_ioMemberGubun,
        ds_ioCourse,
        ds_oAdditionInfo,
        ds_oRegion,
        ds_oCustomerList,
        ds_oJibu,
        ds_ioCourseYnD,
        ds_ioCourseD,
        ds_oPersonGubun,
        ds_ioExceptGubun,
        ds_ioMinapfee,
        ds_ioAgencyGubun,
        ds_ioGijun,
        ds_oBonbu,
        ds_oFireCd,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_radJogun,
        setIsVisible_radJogun,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_Static7,
        setIsVisible_Static7,
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
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_cbxBusinessType1,
        setIsVisible_cbxBusinessType1,
        isVisible_radBusinessType,
        setIsVisible_radBusinessType,
        isVisible_cbxBusinessType2,
        setIsVisible_cbxBusinessType2,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_radMgno,
        setIsVisible_radMgno,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_radDate,
        setIsVisible_radDate,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_medMgno1,
        setIsVisible_medMgno1,
        isVisible_medMgno2,
        setIsVisible_medMgno2,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radDataType,
        setIsVisible_radDataType,
        isVisible_radCourseD,
        setIsVisible_radCourseD,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_cbxCourseD,
        setIsVisible_cbxCourseD,
        isVisible_cbxCourseD2,
        setIsVisible_cbxCourseD2,
        isVisible_cbxCourseD3,
        setIsVisible_cbxCourseD3,
        isVisible_cbxCourseD4,
        setIsVisible_cbxCourseD4,
        isVisible_cbxCourseD5,
        setIsVisible_cbxCourseD5,
        isVisible_cbxCourseD6,
        setIsVisible_cbxCourseD6,
        isVisible_cbxCourseD1,
        setIsVisible_cbxCourseD1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_cbxCpersonGubun1,
        setIsVisible_cbxCpersonGubun1,
        isVisible_radCpersonGubun,
        setIsVisible_radCpersonGubun,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_radExceptGubun,
        setIsVisible_radExceptGubun,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_gdList3,
        setIsVisible_gdList3,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_radMinapfee,
        setIsVisible_radMinapfee,
        isVisible_gdList2,
        setIsVisible_gdList2,
        isVisible_gdList4,
        setIsVisible_gdList4,
        isVisible_gdList1,
        setIsVisible_gdList1,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_radAgencyGubun,
        setIsVisible_radAgencyGubun,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_radRegYYMM,
        setIsVisible_radRegYYMM,
        isVisible_calStartRegYYMM,
        setIsVisible_calStartRegYYMM,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_calEndRegYYMM,
        setIsVisible_calEndRegYYMM,
        isVisible_radGijun,
        setIsVisible_radGijun,
        isVisible_cbxBonbu,
        setIsVisible_cbxBonbu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};