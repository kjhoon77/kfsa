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
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_radMemberGubun2, setIsVisible_radMemberGubun2] = useState(false);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Static26, setIsVisible_Static26] = useState(true);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_edCustYear, setIsVisible_edCustYear] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_radNotMemberFirsSecondHalf, setIsVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [isVisible_radNotification, setIsVisible_radNotification] = useState(true);
    const [isVisible_cbxRegion2, setIsVisible_cbxRegion2] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_cbxRegion3, setIsVisible_cbxRegion3] = useState(true);
    const [isVisible_chkYearNotSunap1, setIsVisible_chkYearNotSunap1] = useState(true);
    const [isVisible_chkYearNotSunap2, setIsVisible_chkYearNotSunap2] = useState(true);
    const [isVisible_chkYearNotSunap3, setIsVisible_chkYearNotSunap3] = useState(true);
    const [isVisible_chkYearNotSunap4, setIsVisible_chkYearNotSunap4] = useState(true);
    const [isVisible_radNotification2, setIsVisible_radNotification2] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_Static22, setIsVisible_Static22] = useState(false);
    const [isVisible_radNotification3, setIsVisible_radNotification3] = useState(true);
    const [isVisible_radOrderBy, setIsVisible_radOrderBy] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_Static25, setIsVisible_Static25] = useState(true);
    const [isVisible_Static27, setIsVisible_Static27] = useState(true);
    const [isVisible_Static28, setIsVisible_Static28] = useState(true);
    const [isVisible_Static29, setIsVisible_Static29] = useState(true);
    const [isVisible_Static30, setIsVisible_Static30] = useState(true);
    const [isVisible_Static31, setIsVisible_Static31] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Static32, setIsVisible_Static32] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_edTotalCount, setIsVisible_edTotalCount] = useState(false);
    const [isVisible_calEndDate1, setIsVisible_calEndDate1] = useState(true);
    const [isVisible_calStartDate1, setIsVisible_calStartDate1] = useState(true);
    const [isVisible_calEndDate2, setIsVisible_calEndDate2] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_calStartDate2, setIsVisible_calStartDate2] = useState(true);
    const [isVisible_edProcessCount, setIsVisible_edProcessCount] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_cbxCourse1, setIsVisible_cbxCourse1] = useState(true);
    const [isVisible_cbxCourse_1, setIsVisible_cbxCourse_1] = useState(true);
    const [isVisible_cbxCourse_2, setIsVisible_cbxCourse_2] = useState(true);
    const [isVisible_cbxCourse_3, setIsVisible_cbxCourse_3] = useState(true);
    const [isVisible_cbxCourse_4, setIsVisible_cbxCourse_4] = useState(true);
    const [isVisible_cbxCourse_5, setIsVisible_cbxCourse_5] = useState(true);
    const [isVisible_cbxCourse_6, setIsVisible_cbxCourse_6] = useState(true);
    const [isVisible_grdExport, setIsVisible_grdExport] = useState(true);
    const [isVisible_Static33, setIsVisible_Static33] = useState(true);
    const [isVisible_cboSelectYN1, setIsVisible_cboSelectYN1] = useState(true);
    const [isVisible_cboSelectYN2, setIsVisible_cboSelectYN2] = useState(true);
    const [isVisible_cboNotYear, setIsVisible_cboNotYear] = useState(true);
    const [isVisible_Static34, setIsVisible_Static34] = useState(true);
    const [isVisible_calEndDateDay, setIsVisible_calEndDateDay] = useState(true);
    const [isVisible_radReturn, setIsVisible_radReturn] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_fdImport, setIsVisible_fdImport] = useState(true);
    const [isVisible_fdExport, setIsVisible_fdExport] = useState(true);
    const [isVisible_chkMemberNewDate, setIsVisible_chkMemberNewDate] = useState(true);
    const [isVisible_chkNotMemberNewDate, setIsVisible_chkNotMemberNewDate] = useState(true);
    const [isVisible_edMemberFeeSum, setIsVisible_edMemberFeeSum] = useState(true);
    const [isVisible_edMemberFeeYearSum1, setIsVisible_edMemberFeeYearSum1] = useState(true);
    const [isVisible_edMemberFeeYearSum2, setIsVisible_edMemberFeeYearSum2] = useState(true);
    const [isVisible_edMemberFeeYearSum3, setIsVisible_edMemberFeeYearSum3] = useState(true);
    const [isVisible_edMemberFeeYearSum4, setIsVisible_edMemberFeeYearSum4] = useState(true);
    const [isVisible_edMemberFeeYearFirst1, setIsVisible_edMemberFeeYearFirst1] = useState(true);
    const [isVisible_edMemberFeeFirst, setIsVisible_edMemberFeeFirst] = useState(true);
    const [isVisible_edMemberFeeYearFirst2, setIsVisible_edMemberFeeYearFirst2] = useState(true);
    const [isVisible_edMemberFeeYearFirst3, setIsVisible_edMemberFeeYearFirst3] = useState(true);
    const [isVisible_edMemberFeeYearFirst4, setIsVisible_edMemberFeeYearFirst4] = useState(true);
    const [isVisible_edMemberFeeYearSceond1, setIsVisible_edMemberFeeYearSceond1] = useState(true);
    const [isVisible_edMemberFeeSceond, setIsVisible_edMemberFeeSceond] = useState(true);
    const [isVisible_edMemberFeeYearSceond2, setIsVisible_edMemberFeeYearSceond2] = useState(true);
    const [isVisible_edMemberFeeYearSceond3, setIsVisible_edMemberFeeYearSceond3] = useState(true);
    const [isVisible_edMemberFeeYearSceond4, setIsVisible_edMemberFeeYearSceond4] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(false);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_Static35, setIsVisible_Static35] = useState(true);
    const [isVisible_Static36, setIsVisible_Static36] = useState(true);
    const [isVisible_Static37, setIsVisible_Static37] = useState(true);
    const [isVisible_Static38, setIsVisible_Static38] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_radFeeMode, setIsVisible_radFeeMode] = useState(true);
    const [isVisible_radMemberGubun, setIsVisible_radMemberGubun] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_chkMemberEuDate, setIsVisible_chkMemberEuDate] = useState(true);
    const [isVisible_CalEuFromDate, setIsVisible_CalEuFromDate] = useState(true);
    const [isVisible_Static39, setIsVisible_Static39] = useState(true);
    const [isVisible_CalEuToDate, setIsVisible_CalEuToDate] = useState(true);

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