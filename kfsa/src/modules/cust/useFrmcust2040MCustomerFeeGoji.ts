// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioReport, Ids_ioYear, Ids_ioChoiceYn, Ids_ioMemberGubun, Ids_oCourse, Ids_ioOrder, Ids_oJibu, Ids_ioMemberGubun_0, Ids_ioMemberGubun_1, Ids_ioMemberGubun_1_0, Ids_ioJibu_0, Ids_ioCourseYn, Ids_oRegion, Ids_ioUpDown, Ids_ioMCustomerFeeGoji, Ids_ioApply, Ids_ioChoiceYn_Num } from './Frmcust2040MCustomerFeeGojiData';

export const useFrmcust2040MCustomerFeeGoji = () => {
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioMemberGubun_0, setds_ioMemberGubun_0] = useState<Ids_ioMemberGubun_0[]>([]);
    const [ds_ioMemberGubun_1, setds_ioMemberGubun_1] = useState<Ids_ioMemberGubun_1[]>([]);
    const [ds_ioMemberGubun_1_0, setds_ioMemberGubun_1_0] = useState<Ids_ioMemberGubun_1_0[]>([]);
    const [ds_ioJibu_0, setds_ioJibu_0] = useState<Ids_ioJibu_0[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioUpDown, setds_ioUpDown] = useState<Ids_ioUpDown[]>([]);
    const [ds_ioMCustomerFeeGoji, setds_ioMCustomerFeeGoji] = useState<Ids_ioMCustomerFeeGoji[]>([]);
    const [ds_ioApply, setds_ioApply] = useState<Ids_ioApply[]>([]);
    const [ds_ioChoiceYn_Num, setds_ioChoiceYn_Num] = useState<Ids_ioChoiceYn_Num[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape9, setRawVisible_Shape9] = useState(true);
    const [rawVisible_Shape10, setRawVisible_Shape10] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_radOrderBy, setRawVisible_radOrderBy] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(false);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(false);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(false);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(false);
    const [rawVisible_radPrintCount, setRawVisible_radPrintCount] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_edPrintCount, setRawVisible_edPrintCount] = useState(true);
    const [rawVisible_radNotMemberFirsSecondHalf, setRawVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [rawVisible_radNotification, setRawVisible_radNotification] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_radRegin, setRawVisible_radRegin] = useState(true);
    const [rawVisible_cbxRegion3, setRawVisible_cbxRegion3] = useState(true);
    const [rawVisible_Static37, setRawVisible_Static37] = useState(true);
    const [rawVisible_Static38, setRawVisible_Static38] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_Static39, setRawVisible_Static39] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse_2, setRawVisible_cbxCourse_2] = useState(true);
    const [rawVisible_cbxCourse_3, setRawVisible_cbxCourse_3] = useState(true);
    const [rawVisible_cbxCourse_4, setRawVisible_cbxCourse_4] = useState(true);
    const [rawVisible_cbxCourse_5, setRawVisible_cbxCourse_5] = useState(true);
    const [rawVisible_cbxCourse_6, setRawVisible_cbxCourse_6] = useState(true);
    const [rawVisible_Static40, setRawVisible_Static40] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_Static41, setRawVisible_Static41] = useState(true);
    const [rawVisible_meNum1, setRawVisible_meNum1] = useState(true);
    const [rawVisible_meNum2, setRawVisible_meNum2] = useState(true);
    const [rawVisible_edCustYear, setRawVisible_edCustYear] = useState(true);
    const [rawVisible_cbxCourse_1, setRawVisible_cbxCourse_1] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_edPrintTop, setRawVisible_edPrintTop] = useState(true);
    const [rawVisible_Static30, setRawVisible_Static30] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_edPrintDown, setRawVisible_edPrintDown] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_Static29, setRawVisible_Static29] = useState(true);
    const [rawVisible_Static34, setRawVisible_Static34] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_Static42, setRawVisible_Static42] = useState(true);
    const [rawVisible_radNotification3, setRawVisible_radNotification3] = useState(true);
    const [rawVisible_radNotification2, setRawVisible_radNotification2] = useState(true);
    const [rawVisible_Static43, setRawVisible_Static43] = useState(true);
    const [rawVisible_Static44, setRawVisible_Static44] = useState(true);
    const [rawVisible_radPrintGubunAddrNumber, setRawVisible_radPrintGubunAddrNumber] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_grdExport, setRawVisible_grdExport] = useState(false);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_radBuilding, setRawVisible_radBuilding] = useState(true);
    const [rawVisible_edBuliding, setRawVisible_edBuliding] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(false);
    const [rawVisible_Button4, setRawVisible_Button4] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_MaskEdit3, setRawVisible_MaskEdit3] = useState(true);
    const [rawVisible_MaskEdit0, setRawVisible_MaskEdit0] = useState(true);
    const [rawVisible_MaskEdit1, setRawVisible_MaskEdit1] = useState(true);
    const [rawVisible_MaskEdit2, setRawVisible_MaskEdit2] = useState(true);
    const [rawVisible_edMumber1, setRawVisible_edMumber1] = useState(true);
    const [rawVisible_edMumber2, setRawVisible_edMumber2] = useState(true);
    const [rawVisible_edMumber3, setRawVisible_edMumber3] = useState(true);
    const [rawVisible_edMumber4, setRawVisible_edMumber4] = useState(true);
    const [rawVisible_edMumber5, setRawVisible_edMumber5] = useState(true);
    const [rawVisible_edMumber6, setRawVisible_edMumber6] = useState(true);
    const [rawVisible_edMumber7, setRawVisible_edMumber7] = useState(true);
    const [rawVisible_edMumber8, setRawVisible_edMumber8] = useState(true);
    const [rawVisible_edMumber9, setRawVisible_edMumber9] = useState(true);
    const isVisible_Shape9 = rawVisible_Shape9;
    const setIsVisible_Shape9 = setRawVisible_Shape9;
    const isVisible_Shape10 = rawVisible_Shape10;
    const setIsVisible_Shape10 = setRawVisible_Shape10;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_radOrderBy = rawVisible_radOrderBy && rawVisible_Shape9;
    const setIsVisible_radOrderBy = setRawVisible_radOrderBy;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_Shape10;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calStartDate = rawVisible_calStartDate && rawVisible_Shape10;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_calEndDate = rawVisible_calEndDate;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Edit1 = rawVisible_Edit1;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_radPrintCount = rawVisible_radPrintCount && rawVisible_Shape10;
    const setIsVisible_radPrintCount = setRawVisible_radPrintCount;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape10;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_edPrintCount = rawVisible_edPrintCount && rawVisible_Shape10;
    const setIsVisible_edPrintCount = setRawVisible_edPrintCount;
    const isVisible_radNotMemberFirsSecondHalf = rawVisible_radNotMemberFirsSecondHalf && rawVisible_Shape4;
    const setIsVisible_radNotMemberFirsSecondHalf = setRawVisible_radNotMemberFirsSecondHalf;
    const isVisible_radNotification = rawVisible_radNotification && rawVisible_Shape4;
    const setIsVisible_radNotification = setRawVisible_radNotification;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape4;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape4;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static31 = rawVisible_Static31 && rawVisible_Shape4;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape4;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static36 = rawVisible_Static36 && rawVisible_Shape4;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape4;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_radRegin = rawVisible_radRegin && rawVisible_Shape4;
    const setIsVisible_radRegin = setRawVisible_radRegin;
    const isVisible_cbxRegion3 = rawVisible_cbxRegion3 && rawVisible_Shape4;
    const setIsVisible_cbxRegion3 = setRawVisible_cbxRegion3;
    const isVisible_Static37 = rawVisible_Static37 && rawVisible_Shape4;
    const setIsVisible_Static37 = setRawVisible_Static37;
    const isVisible_Static38 = rawVisible_Static38 && rawVisible_Shape4;
    const setIsVisible_Static38 = setRawVisible_Static38;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape4;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_Static39 = rawVisible_Static39 && rawVisible_Shape4;
    const setIsVisible_Static39 = setRawVisible_Static39;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape4;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse_2 = rawVisible_cbxCourse_2 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_2 = setRawVisible_cbxCourse_2;
    const isVisible_cbxCourse_3 = rawVisible_cbxCourse_3 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_3 = setRawVisible_cbxCourse_3;
    const isVisible_cbxCourse_4 = rawVisible_cbxCourse_4 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_4 = setRawVisible_cbxCourse_4;
    const isVisible_cbxCourse_5 = rawVisible_cbxCourse_5 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_5 = setRawVisible_cbxCourse_5;
    const isVisible_cbxCourse_6 = rawVisible_cbxCourse_6 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_6 = setRawVisible_cbxCourse_6;
    const isVisible_Static40 = rawVisible_Static40 && rawVisible_Shape4;
    const setIsVisible_Static40 = setRawVisible_Static40;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape4;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_Static41 = rawVisible_Static41 && rawVisible_Shape4;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_meNum1 = rawVisible_meNum1 && rawVisible_Shape4;
    const setIsVisible_meNum1 = setRawVisible_meNum1;
    const isVisible_meNum2 = rawVisible_meNum2 && rawVisible_Shape4;
    const setIsVisible_meNum2 = setRawVisible_meNum2;
    const isVisible_edCustYear = rawVisible_edCustYear && rawVisible_Shape4;
    const setIsVisible_edCustYear = setRawVisible_edCustYear;
    const isVisible_cbxCourse_1 = rawVisible_cbxCourse_1 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_1 = setRawVisible_cbxCourse_1;
    const isVisible_Static26 = rawVisible_Static26 && rawVisible_Shape10;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_edPrintTop = rawVisible_edPrintTop && rawVisible_Shape10;
    const setIsVisible_edPrintTop = setRawVisible_edPrintTop;
    const isVisible_Static30 = rawVisible_Static30 && rawVisible_Shape10;
    const setIsVisible_Static30 = setRawVisible_Static30;
    const isVisible_Static25 = rawVisible_Static25 && rawVisible_Shape10;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_edPrintDown = rawVisible_edPrintDown && rawVisible_Shape10;
    const setIsVisible_edPrintDown = setRawVisible_edPrintDown;
    const isVisible_Static32 = rawVisible_Static32 && rawVisible_Shape10;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_Static33 = rawVisible_Static33 && rawVisible_Shape10;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_Static27 = rawVisible_Static27;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static28 = rawVisible_Static28 && rawVisible_Shape4;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_Static29 = rawVisible_Static29 && rawVisible_Shape4;
    const setIsVisible_Static29 = setRawVisible_Static29;
    const isVisible_Static34 = rawVisible_Static34 && rawVisible_Shape4;
    const setIsVisible_Static34 = setRawVisible_Static34;
    const isVisible_Static35 = rawVisible_Static35 && rawVisible_Shape4;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_Static42 = rawVisible_Static42 && rawVisible_Shape10;
    const setIsVisible_Static42 = setRawVisible_Static42;
    const isVisible_radNotification3 = rawVisible_radNotification3 && rawVisible_Shape4;
    const setIsVisible_radNotification3 = setRawVisible_radNotification3;
    const isVisible_radNotification2 = rawVisible_radNotification2 && rawVisible_Shape4;
    const setIsVisible_radNotification2 = setRawVisible_radNotification2;
    const isVisible_Static43 = rawVisible_Static43;
    const setIsVisible_Static43 = setRawVisible_Static43;
    const isVisible_Static44 = rawVisible_Static44 && rawVisible_Shape10;
    const setIsVisible_Static44 = setRawVisible_Static44;
    const isVisible_radPrintGubunAddrNumber = rawVisible_radPrintGubunAddrNumber && rawVisible_Shape10;
    const setIsVisible_radPrintGubunAddrNumber = setRawVisible_radPrintGubunAddrNumber;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_grdExport = rawVisible_grdExport;
    const setIsVisible_grdExport = setRawVisible_grdExport;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_divWorkFormTitle;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape4;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_radBuilding = rawVisible_radBuilding && rawVisible_Shape4;
    const setIsVisible_radBuilding = setRawVisible_radBuilding;
    const isVisible_edBuliding = rawVisible_edBuliding && rawVisible_Shape4;
    const setIsVisible_edBuliding = setRawVisible_edBuliding;
    const isVisible_Div0 = rawVisible_Div0;
    const setIsVisible_Div0 = setRawVisible_Div0;
    const isVisible_Button4 = rawVisible_Button4 && rawVisible_Shape4;
    const setIsVisible_Button4 = setRawVisible_Button4;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape4;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_MaskEdit3 = rawVisible_MaskEdit3 && rawVisible_Shape4;
    const setIsVisible_MaskEdit3 = setRawVisible_MaskEdit3;
    const isVisible_MaskEdit0 = rawVisible_MaskEdit0 && rawVisible_Shape10;
    const setIsVisible_MaskEdit0 = setRawVisible_MaskEdit0;
    const isVisible_MaskEdit1 = rawVisible_MaskEdit1 && rawVisible_Shape10;
    const setIsVisible_MaskEdit1 = setRawVisible_MaskEdit1;
    const isVisible_MaskEdit2 = rawVisible_MaskEdit2;
    const setIsVisible_MaskEdit2 = setRawVisible_MaskEdit2;
    const isVisible_edMumber1 = rawVisible_edMumber1;
    const setIsVisible_edMumber1 = setRawVisible_edMumber1;
    const isVisible_edMumber2 = rawVisible_edMumber2;
    const setIsVisible_edMumber2 = setRawVisible_edMumber2;
    const isVisible_edMumber3 = rawVisible_edMumber3;
    const setIsVisible_edMumber3 = setRawVisible_edMumber3;
    const isVisible_edMumber4 = rawVisible_edMumber4;
    const setIsVisible_edMumber4 = setRawVisible_edMumber4;
    const isVisible_edMumber5 = rawVisible_edMumber5;
    const setIsVisible_edMumber5 = setRawVisible_edMumber5;
    const isVisible_edMumber6 = rawVisible_edMumber6;
    const setIsVisible_edMumber6 = setRawVisible_edMumber6;
    const isVisible_edMumber7 = rawVisible_edMumber7 && rawVisible_Shape4;
    const setIsVisible_edMumber7 = setRawVisible_edMumber7;
    const isVisible_edMumber8 = rawVisible_edMumber8 && rawVisible_Shape4;
    const setIsVisible_edMumber8 = setRawVisible_edMumber8;
    const isVisible_edMumber9 = rawVisible_edMumber9 && rawVisible_Shape4;
    const setIsVisible_edMumber9 = setRawVisible_edMumber9;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioReport([]);
            setds_ioYear([]);
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_oCourse([]);
            setds_ioOrder([]);
            setds_oJibu([]);
            setds_ioMemberGubun_0([]);
            setds_ioMemberGubun_1([]);
            setds_ioMemberGubun_1_0([]);
            setds_ioJibu_0([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_ioUpDown([]);
            setds_ioMCustomerFeeGoji([]);
            setds_ioApply([]);
            setds_ioChoiceYn_Num([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Div0_Button4Yes_OnClick = () => {
        console.log('Div0_Button4Yes_OnClick clicked');
    };
    const Div0_Button4_OnClick = () => {
        console.log('Div0_Button4_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioReport,
        ds_ioYear,
        ds_ioChoiceYn,
        ds_ioMemberGubun,
        ds_oCourse,
        ds_ioOrder,
        ds_oJibu,
        ds_ioMemberGubun_0,
        ds_ioMemberGubun_1,
        ds_ioMemberGubun_1_0,
        ds_ioJibu_0,
        ds_ioCourseYn,
        ds_oRegion,
        ds_ioUpDown,
        ds_ioMCustomerFeeGoji,
        ds_ioApply,
        ds_ioChoiceYn_Num,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_Shape10,
        setIsVisible_Shape10,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_radOrderBy,
        setIsVisible_radOrderBy,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_radPrintCount,
        setIsVisible_radPrintCount,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_edPrintCount,
        setIsVisible_edPrintCount,
        isVisible_radNotMemberFirsSecondHalf,
        setIsVisible_radNotMemberFirsSecondHalf,
        isVisible_radNotification,
        setIsVisible_radNotification,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_radRegin,
        setIsVisible_radRegin,
        isVisible_cbxRegion3,
        setIsVisible_cbxRegion3,
        isVisible_Static37,
        setIsVisible_Static37,
        isVisible_Static38,
        setIsVisible_Static38,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse_2,
        setIsVisible_cbxCourse_2,
        isVisible_cbxCourse_3,
        setIsVisible_cbxCourse_3,
        isVisible_cbxCourse_4,
        setIsVisible_cbxCourse_4,
        isVisible_cbxCourse_5,
        setIsVisible_cbxCourse_5,
        isVisible_cbxCourse_6,
        setIsVisible_cbxCourse_6,
        isVisible_Static40,
        setIsVisible_Static40,
        isVisible_radMgno,
        setIsVisible_radMgno,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_meNum1,
        setIsVisible_meNum1,
        isVisible_meNum2,
        setIsVisible_meNum2,
        isVisible_edCustYear,
        setIsVisible_edCustYear,
        isVisible_cbxCourse_1,
        setIsVisible_cbxCourse_1,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_edPrintTop,
        setIsVisible_edPrintTop,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_edPrintDown,
        setIsVisible_edPrintDown,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_Static42,
        setIsVisible_Static42,
        isVisible_radNotification3,
        setIsVisible_radNotification3,
        isVisible_radNotification2,
        setIsVisible_radNotification2,
        isVisible_Static43,
        setIsVisible_Static43,
        isVisible_Static44,
        setIsVisible_Static44,
        isVisible_radPrintGubunAddrNumber,
        setIsVisible_radPrintGubunAddrNumber,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_grdExport,
        setIsVisible_grdExport,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_radBuilding,
        setIsVisible_radBuilding,
        isVisible_edBuliding,
        setIsVisible_edBuliding,
        isVisible_Div0,
        setIsVisible_Div0,
        isVisible_Button4,
        setIsVisible_Button4,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_MaskEdit3,
        setIsVisible_MaskEdit3,
        isVisible_MaskEdit0,
        setIsVisible_MaskEdit0,
        isVisible_MaskEdit1,
        setIsVisible_MaskEdit1,
        isVisible_MaskEdit2,
        setIsVisible_MaskEdit2,
        isVisible_edMumber1,
        setIsVisible_edMumber1,
        isVisible_edMumber2,
        setIsVisible_edMumber2,
        isVisible_edMumber3,
        setIsVisible_edMumber3,
        isVisible_edMumber4,
        setIsVisible_edMumber4,
        isVisible_edMumber5,
        setIsVisible_edMumber5,
        isVisible_edMumber6,
        setIsVisible_edMumber6,
        isVisible_edMumber7,
        setIsVisible_edMumber7,
        isVisible_edMumber8,
        setIsVisible_edMumber8,
        isVisible_edMumber9,
        setIsVisible_edMumber9,
        Div0_Button4Yes_OnClick,
        Div0_Button4_OnClick,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_localExcel,
    };
};