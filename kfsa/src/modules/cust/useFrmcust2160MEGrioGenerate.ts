// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oRadioGubun, Ids_oMemberGubun, Ids_oNotification, Ids_oLongNotSunap, Ids_oNotification2, Ids_oNotification3, Ids_oOrderBy, Ids_ioCourseYn, Ids_oJibu, Ids_oNotMemberFirsSecondHalf, Ids_oRegion, Ids_oCourse_Minus, Ids_ioCreateNotification, Ids_oSelectYN1, Ids_oSelectYN2, Ids_oReturn, Ids_ioExcelLoad, Ids_oSelectYN3, Ids_ioNotificationJibge, Ids_ioNotificationTotaling, Ids_oCourse, Ids_ioMemberGubunName, Ids_oFeemode, Ids_oRadioGubun2 } from './Frmcust2160MEGrioGenerateData';

export const useFrmcust2160MEGrioGenerate = () => {
    const [ds_oRadioGubun, setds_oRadioGubun] = useState<Ids_oRadioGubun[]>([]);
    const [ds_oMemberGubun, setds_oMemberGubun] = useState<Ids_oMemberGubun[]>([]);
    const [ds_oNotification, setds_oNotification] = useState<Ids_oNotification[]>([]);
    const [ds_oLongNotSunap, setds_oLongNotSunap] = useState<Ids_oLongNotSunap[]>([]);
    const [ds_oNotification2, setds_oNotification2] = useState<Ids_oNotification2[]>([]);
    const [ds_oNotification3, setds_oNotification3] = useState<Ids_oNotification3[]>([]);
    const [ds_oOrderBy, setds_oOrderBy] = useState<Ids_oOrderBy[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oNotMemberFirsSecondHalf, setds_oNotMemberFirsSecondHalf] = useState<Ids_oNotMemberFirsSecondHalf[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oCourse_Minus, setds_oCourse_Minus] = useState<Ids_oCourse_Minus[]>([]);
    const [ds_ioCreateNotification, setds_ioCreateNotification] = useState<Ids_ioCreateNotification[]>([]);
    const [ds_oSelectYN1, setds_oSelectYN1] = useState<Ids_oSelectYN1[]>([]);
    const [ds_oSelectYN2, setds_oSelectYN2] = useState<Ids_oSelectYN2[]>([]);
    const [ds_oReturn, setds_oReturn] = useState<Ids_oReturn[]>([]);
    const [ds_ioExcelLoad, setds_ioExcelLoad] = useState<Ids_ioExcelLoad[]>([]);
    const [ds_oSelectYN3, setds_oSelectYN3] = useState<Ids_oSelectYN3[]>([]);
    const [ds_ioNotificationJibge, setds_ioNotificationJibge] = useState<Ids_ioNotificationJibge[]>([]);
    const [ds_ioNotificationTotaling, setds_ioNotificationTotaling] = useState<Ids_ioNotificationTotaling[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioMemberGubunName, setds_ioMemberGubunName] = useState<Ids_ioMemberGubunName[]>([]);
    const [ds_oFeemode, setds_oFeemode] = useState<Ids_oFeemode[]>([]);
    const [ds_oRadioGubun2, setds_oRadioGubun2] = useState<Ids_oRadioGubun2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_radMemberGubun2, setRawVisible_radMemberGubun2] = useState(false);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_edCustYear, setRawVisible_edCustYear] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_radNotMemberFirsSecondHalf, setRawVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [rawVisible_radNotification, setRawVisible_radNotification] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_cbxRegion3, setRawVisible_cbxRegion3] = useState(true);
    const [rawVisible_chkYearNotSunap1, setRawVisible_chkYearNotSunap1] = useState(true);
    const [rawVisible_chkYearNotSunap2, setRawVisible_chkYearNotSunap2] = useState(true);
    const [rawVisible_chkYearNotSunap3, setRawVisible_chkYearNotSunap3] = useState(true);
    const [rawVisible_chkYearNotSunap4, setRawVisible_chkYearNotSunap4] = useState(true);
    const [rawVisible_radNotification2, setRawVisible_radNotification2] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(false);
    const [rawVisible_radNotification3, setRawVisible_radNotification3] = useState(true);
    const [rawVisible_radOrderBy, setRawVisible_radOrderBy] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_Static29, setRawVisible_Static29] = useState(true);
    const [rawVisible_Static30, setRawVisible_Static30] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edTotalCount, setRawVisible_edTotalCount] = useState(false);
    const [rawVisible_calEndDate1, setRawVisible_calEndDate1] = useState(true);
    const [rawVisible_calStartDate1, setRawVisible_calStartDate1] = useState(true);
    const [rawVisible_calEndDate2, setRawVisible_calEndDate2] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_calStartDate2, setRawVisible_calStartDate2] = useState(true);
    const [rawVisible_edProcessCount, setRawVisible_edProcessCount] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse_1, setRawVisible_cbxCourse_1] = useState(true);
    const [rawVisible_cbxCourse_2, setRawVisible_cbxCourse_2] = useState(true);
    const [rawVisible_cbxCourse_3, setRawVisible_cbxCourse_3] = useState(true);
    const [rawVisible_cbxCourse_4, setRawVisible_cbxCourse_4] = useState(true);
    const [rawVisible_cbxCourse_5, setRawVisible_cbxCourse_5] = useState(true);
    const [rawVisible_cbxCourse_6, setRawVisible_cbxCourse_6] = useState(true);
    const [rawVisible_grdExport, setRawVisible_grdExport] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_cboSelectYN1, setRawVisible_cboSelectYN1] = useState(true);
    const [rawVisible_cboSelectYN2, setRawVisible_cboSelectYN2] = useState(true);
    const [rawVisible_cboNotYear, setRawVisible_cboNotYear] = useState(true);
    const [rawVisible_Static34, setRawVisible_Static34] = useState(true);
    const [rawVisible_calEndDateDay, setRawVisible_calEndDateDay] = useState(true);
    const [rawVisible_radReturn, setRawVisible_radReturn] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_fdImport, setRawVisible_fdImport] = useState(true);
    const [rawVisible_fdExport, setRawVisible_fdExport] = useState(true);
    const [rawVisible_chkMemberNewDate, setRawVisible_chkMemberNewDate] = useState(true);
    const [rawVisible_chkNotMemberNewDate, setRawVisible_chkNotMemberNewDate] = useState(true);
    const [rawVisible_edMemberFeeSum, setRawVisible_edMemberFeeSum] = useState(true);
    const [rawVisible_edMemberFeeYearSum1, setRawVisible_edMemberFeeYearSum1] = useState(true);
    const [rawVisible_edMemberFeeYearSum2, setRawVisible_edMemberFeeYearSum2] = useState(true);
    const [rawVisible_edMemberFeeYearSum3, setRawVisible_edMemberFeeYearSum3] = useState(true);
    const [rawVisible_edMemberFeeYearSum4, setRawVisible_edMemberFeeYearSum4] = useState(true);
    const [rawVisible_edMemberFeeYearFirst1, setRawVisible_edMemberFeeYearFirst1] = useState(true);
    const [rawVisible_edMemberFeeFirst, setRawVisible_edMemberFeeFirst] = useState(true);
    const [rawVisible_edMemberFeeYearFirst2, setRawVisible_edMemberFeeYearFirst2] = useState(true);
    const [rawVisible_edMemberFeeYearFirst3, setRawVisible_edMemberFeeYearFirst3] = useState(true);
    const [rawVisible_edMemberFeeYearFirst4, setRawVisible_edMemberFeeYearFirst4] = useState(true);
    const [rawVisible_edMemberFeeYearSceond1, setRawVisible_edMemberFeeYearSceond1] = useState(true);
    const [rawVisible_edMemberFeeSceond, setRawVisible_edMemberFeeSceond] = useState(true);
    const [rawVisible_edMemberFeeYearSceond2, setRawVisible_edMemberFeeYearSceond2] = useState(true);
    const [rawVisible_edMemberFeeYearSceond3, setRawVisible_edMemberFeeYearSceond3] = useState(true);
    const [rawVisible_edMemberFeeYearSceond4, setRawVisible_edMemberFeeYearSceond4] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_Static37, setRawVisible_Static37] = useState(true);
    const [rawVisible_Static38, setRawVisible_Static38] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_radFeeMode, setRawVisible_radFeeMode] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_chkMemberEuDate, setRawVisible_chkMemberEuDate] = useState(true);
    const [rawVisible_CalEuFromDate, setRawVisible_CalEuFromDate] = useState(true);
    const [rawVisible_Static39, setRawVisible_Static39] = useState(true);
    const [rawVisible_CalEuToDate, setRawVisible_CalEuToDate] = useState(true);
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_radMemberGubun2 = rawVisible_radMemberGubun2 && rawVisible_Shape4;
    const setIsVisible_radMemberGubun2 = setRawVisible_radMemberGubun2;
    const isVisible_Shape3 = rawVisible_Shape3 && rawVisible_Shape4;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Static26 = rawVisible_Static26 && rawVisible_Shape5;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_Static23 = rawVisible_Static23 && rawVisible_Shape5;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1 && rawVisible_Shape4;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_edCustYear = rawVisible_edCustYear && rawVisible_Shape0;
    const setIsVisible_edCustYear = setRawVisible_edCustYear;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape4;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape4;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape4;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape4;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape4;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape4;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape0;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape3;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_radNotMemberFirsSecondHalf = rawVisible_radNotMemberFirsSecondHalf && rawVisible_shpGubunBox1;
    const setIsVisible_radNotMemberFirsSecondHalf = setRawVisible_radNotMemberFirsSecondHalf;
    const isVisible_radNotification = rawVisible_radNotification && rawVisible_shpGubunBox1;
    const setIsVisible_radNotification = setRawVisible_radNotification;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape4;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape4;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_cbxRegion3 = rawVisible_cbxRegion3 && rawVisible_Shape4;
    const setIsVisible_cbxRegion3 = setRawVisible_cbxRegion3;
    const isVisible_chkYearNotSunap1 = rawVisible_chkYearNotSunap1 && rawVisible_Shape4;
    const setIsVisible_chkYearNotSunap1 = setRawVisible_chkYearNotSunap1;
    const isVisible_chkYearNotSunap2 = rawVisible_chkYearNotSunap2 && rawVisible_Shape4;
    const setIsVisible_chkYearNotSunap2 = setRawVisible_chkYearNotSunap2;
    const isVisible_chkYearNotSunap3 = rawVisible_chkYearNotSunap3 && rawVisible_Shape4;
    const setIsVisible_chkYearNotSunap3 = setRawVisible_chkYearNotSunap3;
    const isVisible_chkYearNotSunap4 = rawVisible_chkYearNotSunap4 && rawVisible_Shape4;
    const setIsVisible_chkYearNotSunap4 = setRawVisible_chkYearNotSunap4;
    const isVisible_radNotification2 = rawVisible_radNotification2 && rawVisible_Shape4;
    const setIsVisible_radNotification2 = setRawVisible_radNotification2;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape4;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape4;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_Static21 = rawVisible_Static21 && rawVisible_Shape4;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_Static22 = rawVisible_Static22 && rawVisible_Shape5;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_radNotification3 = rawVisible_radNotification3 && rawVisible_Shape4;
    const setIsVisible_radNotification3 = setRawVisible_radNotification3;
    const isVisible_radOrderBy = rawVisible_radOrderBy && rawVisible_Shape4;
    const setIsVisible_radOrderBy = setRawVisible_radOrderBy;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape5;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_Static25 = rawVisible_Static25 && rawVisible_Shape5;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_Static27 = rawVisible_Static27 && rawVisible_Shape5;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static28 = rawVisible_Static28 && rawVisible_Shape5;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_Static29 = rawVisible_Static29 && rawVisible_Shape5;
    const setIsVisible_Static29 = setRawVisible_Static29;
    const isVisible_Static30 = rawVisible_Static30 && rawVisible_Shape5;
    const setIsVisible_Static30 = setRawVisible_Static30;
    const isVisible_Static31 = rawVisible_Static31 && rawVisible_Shape5;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static32 = rawVisible_Static32 && rawVisible_Shape5;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape4;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape4;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edTotalCount = rawVisible_edTotalCount && rawVisible_Shape5;
    const setIsVisible_edTotalCount = setRawVisible_edTotalCount;
    const isVisible_calEndDate1 = rawVisible_calEndDate1 && rawVisible_Shape3;
    const setIsVisible_calEndDate1 = setRawVisible_calEndDate1;
    const isVisible_calStartDate1 = rawVisible_calStartDate1 && rawVisible_Shape3;
    const setIsVisible_calStartDate1 = setRawVisible_calStartDate1;
    const isVisible_calEndDate2 = rawVisible_calEndDate2 && rawVisible_shpGubunBox1;
    const setIsVisible_calEndDate2 = setRawVisible_calEndDate2;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_shpGubunBox1;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_calStartDate2 = rawVisible_calStartDate2 && rawVisible_shpGubunBox1;
    const setIsVisible_calStartDate2 = setRawVisible_calStartDate2;
    const isVisible_edProcessCount = rawVisible_edProcessCount && rawVisible_Shape5;
    const setIsVisible_edProcessCount = setRawVisible_edProcessCount;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape4;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape4;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse_1 = rawVisible_cbxCourse_1 && rawVisible_Shape4;
    const setIsVisible_cbxCourse_1 = setRawVisible_cbxCourse_1;
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
    const isVisible_grdExport = rawVisible_grdExport;
    const setIsVisible_grdExport = setRawVisible_grdExport;
    const isVisible_Static33 = rawVisible_Static33 && rawVisible_Shape4;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_cboSelectYN1 = rawVisible_cboSelectYN1 && rawVisible_Shape4;
    const setIsVisible_cboSelectYN1 = setRawVisible_cboSelectYN1;
    const isVisible_cboSelectYN2 = rawVisible_cboSelectYN2 && rawVisible_Shape4;
    const setIsVisible_cboSelectYN2 = setRawVisible_cboSelectYN2;
    const isVisible_cboNotYear = rawVisible_cboNotYear && rawVisible_Shape4;
    const setIsVisible_cboNotYear = setRawVisible_cboNotYear;
    const isVisible_Static34 = rawVisible_Static34 && rawVisible_Shape4;
    const setIsVisible_Static34 = setRawVisible_Static34;
    const isVisible_calEndDateDay = rawVisible_calEndDateDay && rawVisible_Shape4;
    const setIsVisible_calEndDateDay = setRawVisible_calEndDateDay;
    const isVisible_radReturn = rawVisible_radReturn && rawVisible_Shape4;
    const setIsVisible_radReturn = setRawVisible_radReturn;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_fdImport = rawVisible_fdImport;
    const setIsVisible_fdImport = setRawVisible_fdImport;
    const isVisible_fdExport = rawVisible_fdExport;
    const setIsVisible_fdExport = setRawVisible_fdExport;
    const isVisible_chkMemberNewDate = rawVisible_chkMemberNewDate && rawVisible_Shape3;
    const setIsVisible_chkMemberNewDate = setRawVisible_chkMemberNewDate;
    const isVisible_chkNotMemberNewDate = rawVisible_chkNotMemberNewDate && rawVisible_shpGubunBox1;
    const setIsVisible_chkNotMemberNewDate = setRawVisible_chkNotMemberNewDate;
    const isVisible_edMemberFeeSum = rawVisible_edMemberFeeSum && rawVisible_Shape5;
    const setIsVisible_edMemberFeeSum = setRawVisible_edMemberFeeSum;
    const isVisible_edMemberFeeYearSum1 = rawVisible_edMemberFeeYearSum1 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSum1 = setRawVisible_edMemberFeeYearSum1;
    const isVisible_edMemberFeeYearSum2 = rawVisible_edMemberFeeYearSum2 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSum2 = setRawVisible_edMemberFeeYearSum2;
    const isVisible_edMemberFeeYearSum3 = rawVisible_edMemberFeeYearSum3 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSum3 = setRawVisible_edMemberFeeYearSum3;
    const isVisible_edMemberFeeYearSum4 = rawVisible_edMemberFeeYearSum4 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSum4 = setRawVisible_edMemberFeeYearSum4;
    const isVisible_edMemberFeeYearFirst1 = rawVisible_edMemberFeeYearFirst1 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearFirst1 = setRawVisible_edMemberFeeYearFirst1;
    const isVisible_edMemberFeeFirst = rawVisible_edMemberFeeFirst && rawVisible_Shape5;
    const setIsVisible_edMemberFeeFirst = setRawVisible_edMemberFeeFirst;
    const isVisible_edMemberFeeYearFirst2 = rawVisible_edMemberFeeYearFirst2 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearFirst2 = setRawVisible_edMemberFeeYearFirst2;
    const isVisible_edMemberFeeYearFirst3 = rawVisible_edMemberFeeYearFirst3 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearFirst3 = setRawVisible_edMemberFeeYearFirst3;
    const isVisible_edMemberFeeYearFirst4 = rawVisible_edMemberFeeYearFirst4 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearFirst4 = setRawVisible_edMemberFeeYearFirst4;
    const isVisible_edMemberFeeYearSceond1 = rawVisible_edMemberFeeYearSceond1 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSceond1 = setRawVisible_edMemberFeeYearSceond1;
    const isVisible_edMemberFeeSceond = rawVisible_edMemberFeeSceond && rawVisible_Shape5;
    const setIsVisible_edMemberFeeSceond = setRawVisible_edMemberFeeSceond;
    const isVisible_edMemberFeeYearSceond2 = rawVisible_edMemberFeeYearSceond2 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSceond2 = setRawVisible_edMemberFeeYearSceond2;
    const isVisible_edMemberFeeYearSceond3 = rawVisible_edMemberFeeYearSceond3 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSceond3 = setRawVisible_edMemberFeeYearSceond3;
    const isVisible_edMemberFeeYearSceond4 = rawVisible_edMemberFeeYearSceond4 && rawVisible_Shape5;
    const setIsVisible_edMemberFeeYearSceond4 = setRawVisible_edMemberFeeYearSceond4;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape0;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape0;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static35 = rawVisible_Static35 && rawVisible_Shape3;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_Static36 = rawVisible_Static36 && rawVisible_shpGubunBox1;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_Static37 = rawVisible_Static37 && rawVisible_shpGubunBox1;
    const setIsVisible_Static37 = setRawVisible_Static37;
    const isVisible_Static38 = rawVisible_Static38 && rawVisible_shpGubunBox1;
    const setIsVisible_Static38 = setRawVisible_Static38;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape1;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_radFeeMode = rawVisible_radFeeMode && rawVisible_Shape1;
    const setIsVisible_radFeeMode = setRawVisible_radFeeMode;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape4;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape3;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_chkMemberEuDate = rawVisible_chkMemberEuDate && rawVisible_Shape3;
    const setIsVisible_chkMemberEuDate = setRawVisible_chkMemberEuDate;
    const isVisible_CalEuFromDate = rawVisible_CalEuFromDate && rawVisible_Shape3;
    const setIsVisible_CalEuFromDate = setRawVisible_CalEuFromDate;
    const isVisible_Static39 = rawVisible_Static39 && rawVisible_Shape3;
    const setIsVisible_Static39 = setRawVisible_Static39;
    const isVisible_CalEuToDate = rawVisible_CalEuToDate && rawVisible_Shape3;
    const setIsVisible_CalEuToDate = setRawVisible_CalEuToDate;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRadioGubun([]);
            setds_oMemberGubun([]);
            setds_oNotification([]);
            setds_oLongNotSunap([]);
            setds_oNotification2([]);
            setds_oNotification3([]);
            setds_oOrderBy([]);
            setds_ioCourseYn([]);
            setds_oJibu([]);
            setds_oNotMemberFirsSecondHalf([]);
            setds_oRegion([]);
            setds_oCourse_Minus([]);
            setds_ioCreateNotification([]);
            setds_oSelectYN1([]);
            setds_oSelectYN2([]);
            setds_oReturn([]);
            setds_ioExcelLoad([]);
            setds_oSelectYN3([]);
            setds_ioNotificationJibge([]);
            setds_ioNotificationTotaling([]);
            setds_oCourse([]);
            setds_ioMemberGubunName([]);
            setds_oFeemode([]);
            setds_oRadioGubun2([]);
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Print_A = () => {
        console.log('lfn_Print_A clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oRadioGubun,
        ds_oMemberGubun,
        ds_oNotification,
        ds_oLongNotSunap,
        ds_oNotification2,
        ds_oNotification3,
        ds_oOrderBy,
        ds_ioCourseYn,
        ds_oJibu,
        ds_oNotMemberFirsSecondHalf,
        ds_oRegion,
        ds_oCourse_Minus,
        ds_ioCreateNotification,
        ds_oSelectYN1,
        ds_oSelectYN2,
        ds_oReturn,
        ds_ioExcelLoad,
        ds_oSelectYN3,
        ds_ioNotificationJibge,
        ds_ioNotificationTotaling,
        ds_oCourse,
        ds_ioMemberGubunName,
        ds_oFeemode,
        ds_oRadioGubun2,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_radMemberGubun2,
        setIsVisible_radMemberGubun2,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_edCustYear,
        setIsVisible_edCustYear,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_radNotMemberFirsSecondHalf,
        setIsVisible_radNotMemberFirsSecondHalf,
        isVisible_radNotification,
        setIsVisible_radNotification,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_cbxRegion3,
        setIsVisible_cbxRegion3,
        isVisible_chkYearNotSunap1,
        setIsVisible_chkYearNotSunap1,
        isVisible_chkYearNotSunap2,
        setIsVisible_chkYearNotSunap2,
        isVisible_chkYearNotSunap3,
        setIsVisible_chkYearNotSunap3,
        isVisible_chkYearNotSunap4,
        setIsVisible_chkYearNotSunap4,
        isVisible_radNotification2,
        setIsVisible_radNotification2,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_radNotification3,
        setIsVisible_radNotification3,
        isVisible_radOrderBy,
        setIsVisible_radOrderBy,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edTotalCount,
        setIsVisible_edTotalCount,
        isVisible_calEndDate1,
        setIsVisible_calEndDate1,
        isVisible_calStartDate1,
        setIsVisible_calStartDate1,
        isVisible_calEndDate2,
        setIsVisible_calEndDate2,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_calStartDate2,
        setIsVisible_calStartDate2,
        isVisible_edProcessCount,
        setIsVisible_edProcessCount,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse_1,
        setIsVisible_cbxCourse_1,
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
        isVisible_grdExport,
        setIsVisible_grdExport,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_cboSelectYN1,
        setIsVisible_cboSelectYN1,
        isVisible_cboSelectYN2,
        setIsVisible_cboSelectYN2,
        isVisible_cboNotYear,
        setIsVisible_cboNotYear,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_calEndDateDay,
        setIsVisible_calEndDateDay,
        isVisible_radReturn,
        setIsVisible_radReturn,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_fdImport,
        setIsVisible_fdImport,
        isVisible_fdExport,
        setIsVisible_fdExport,
        isVisible_chkMemberNewDate,
        setIsVisible_chkMemberNewDate,
        isVisible_chkNotMemberNewDate,
        setIsVisible_chkNotMemberNewDate,
        isVisible_edMemberFeeSum,
        setIsVisible_edMemberFeeSum,
        isVisible_edMemberFeeYearSum1,
        setIsVisible_edMemberFeeYearSum1,
        isVisible_edMemberFeeYearSum2,
        setIsVisible_edMemberFeeYearSum2,
        isVisible_edMemberFeeYearSum3,
        setIsVisible_edMemberFeeYearSum3,
        isVisible_edMemberFeeYearSum4,
        setIsVisible_edMemberFeeYearSum4,
        isVisible_edMemberFeeYearFirst1,
        setIsVisible_edMemberFeeYearFirst1,
        isVisible_edMemberFeeFirst,
        setIsVisible_edMemberFeeFirst,
        isVisible_edMemberFeeYearFirst2,
        setIsVisible_edMemberFeeYearFirst2,
        isVisible_edMemberFeeYearFirst3,
        setIsVisible_edMemberFeeYearFirst3,
        isVisible_edMemberFeeYearFirst4,
        setIsVisible_edMemberFeeYearFirst4,
        isVisible_edMemberFeeYearSceond1,
        setIsVisible_edMemberFeeYearSceond1,
        isVisible_edMemberFeeSceond,
        setIsVisible_edMemberFeeSceond,
        isVisible_edMemberFeeYearSceond2,
        setIsVisible_edMemberFeeYearSceond2,
        isVisible_edMemberFeeYearSceond3,
        setIsVisible_edMemberFeeYearSceond3,
        isVisible_edMemberFeeYearSceond4,
        setIsVisible_edMemberFeeYearSceond4,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_Static37,
        setIsVisible_Static37,
        isVisible_Static38,
        setIsVisible_Static38,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_radFeeMode,
        setIsVisible_radFeeMode,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_chkMemberEuDate,
        setIsVisible_chkMemberEuDate,
        isVisible_CalEuFromDate,
        setIsVisible_CalEuFromDate,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_CalEuToDate,
        setIsVisible_CalEuToDate,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Print_A,
        lfn_Save,
        lfn_localExcel,
    };
};