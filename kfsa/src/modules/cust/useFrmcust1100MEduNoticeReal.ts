// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberGubun, Ids_ioTarget, Ids_ioTemp, Ids_ioFeeGubun, Ids_ioYear, Ids_oCourse, Ids_ioYearHalf, Ids_ioPrintGubun, Ids_ioOrder, Ids_a, Ids_ioBusinessType, Ids_ioCourseYn_0, Ids_ioCourseYn_1, Ids_ioChoiceYn, Ids_ioCourseYn_2, Ids_oJibu, Ids_oRegion, Ids_ioCourseYn, Ids_oBizCd, Ids_ioChoiceYnReport, Ids_ioZipNum, Ids_ioMEduNotice, Ids_ioApply, Ids_oDetailCourse, Ids_ioMEduNoticeDetail, Ids_oPersonGubun, Ids_ioGijun, Ids_ioChoice, Ids_oBonbu, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireCenterCd2, Ids_oMinap, Ids_ioYN, Ids_oAgency, Ids_ioChoiceYn_1 } from './Frmcust1100MEduNoticeRealData';

export const useFrmcust1100MEduNoticeReal = () => {
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioTarget, setds_ioTarget] = useState<Ids_ioTarget[]>([]);
    const [ds_ioTemp, setds_ioTemp] = useState<Ids_ioTemp[]>([]);
    const [ds_ioFeeGubun, setds_ioFeeGubun] = useState<Ids_ioFeeGubun[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioYearHalf, setds_ioYearHalf] = useState<Ids_ioYearHalf[]>([]);
    const [ds_ioPrintGubun, setds_ioPrintGubun] = useState<Ids_ioPrintGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_a, setds_a] = useState<Ids_a[]>([]);
    const [ds_ioBusinessType, setds_ioBusinessType] = useState<Ids_ioBusinessType[]>([]);
    const [ds_ioCourseYn_0, setds_ioCourseYn_0] = useState<Ids_ioCourseYn_0[]>([]);
    const [ds_ioCourseYn_1, setds_ioCourseYn_1] = useState<Ids_ioCourseYn_1[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourseYn_2, setds_ioCourseYn_2] = useState<Ids_ioCourseYn_2[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_ioChoiceYnReport, setds_ioChoiceYnReport] = useState<Ids_ioChoiceYnReport[]>([]);
    const [ds_ioZipNum, setds_ioZipNum] = useState<Ids_ioZipNum[]>([]);
    const [ds_ioMEduNotice, setds_ioMEduNotice] = useState<Ids_ioMEduNotice[]>([]);
    const [ds_ioApply, setds_ioApply] = useState<Ids_ioApply[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_ioMEduNoticeDetail, setds_ioMEduNoticeDetail] = useState<Ids_ioMEduNoticeDetail[]>([]);
    const [ds_oPersonGubun, setds_oPersonGubun] = useState<Ids_oPersonGubun[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_ioChoice, setds_ioChoice] = useState<Ids_ioChoice[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireCenterCd2, setds_oFireCenterCd2] = useState<Ids_oFireCenterCd2[]>([]);
    const [ds_oMinap, setds_oMinap] = useState<Ids_oMinap[]>([]);
    const [ds_ioYN, setds_ioYN] = useState<Ids_ioYN[]>([]);
    const [ds_oAgency, setds_oAgency] = useState<Ids_oAgency[]>([]);
    const [ds_ioChoiceYn_1, setds_ioChoiceYn_1] = useState<Ids_ioChoiceYn_1[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_edCustYear, setIsVisible_edCustYear] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radMemberGubun, setIsVisible_radMemberGubun] = useState(true);
    const [isVisible_radCourse_1, setIsVisible_radCourse_1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_lbYear, setIsVisible_lbYear] = useState(true);
    const [isVisible_lbRegion, setIsVisible_lbRegion] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_lbBusinessType, setIsVisible_lbBusinessType] = useState(true);
    const [isVisible_cbxBusinessType1, setIsVisible_cbxBusinessType1] = useState(true);
    const [isVisible_cbxBusinessType2, setIsVisible_cbxBusinessType2] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_lbMgno, setIsVisible_lbMgno] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_cbxReportData1, setIsVisible_cbxReportData1] = useState(true);
    const [isVisible_cbxReportData2, setIsVisible_cbxReportData2] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_Static22, setIsVisible_Static22] = useState(true);
    const [isVisible_edPrintCount, setIsVisible_edPrintCount] = useState(true);
    const [isVisible_Calendar2, setIsVisible_Calendar2] = useState(true);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_cboPrintGubun, setIsVisible_cboPrintGubun] = useState(true);
    const [isVisible_Calendar3, setIsVisible_Calendar3] = useState(true);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_Calendar4, setIsVisible_Calendar4] = useState(true);
    const [isVisible_chkCheckbox, setIsVisible_chkCheckbox] = useState(true);
    const [isVisible_chkCheckbox2, setIsVisible_chkCheckbox2] = useState(true);
    const [isVisible_Calendar5, setIsVisible_Calendar5] = useState(true);
    const [isVisible_Static25, setIsVisible_Static25] = useState(true);
    const [isVisible_Calendar6, setIsVisible_Calendar6] = useState(true);
    const [isVisible_radNotMemberFirsSecondHalf, setIsVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_Checkbox1, setIsVisible_Checkbox1] = useState(true);
    const [isVisible_Checkbox2, setIsVisible_Checkbox2] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_radOrder, setIsVisible_radOrder] = useState(true);
    const [isVisible_Checkbox7, setIsVisible_Checkbox7] = useState(false);
    const [isVisible_Static26, setIsVisible_Static26] = useState(true);
    const [isVisible_edOrder1, setIsVisible_edOrder1] = useState(true);
    const [isVisible_Static28, setIsVisible_Static28] = useState(true);
    const [isVisible_meZipNum1, setIsVisible_meZipNum1] = useState(true);
    const [isVisible_Static29, setIsVisible_Static29] = useState(true);
    const [isVisible_meZipNum2, setIsVisible_meZipNum2] = useState(true);
    const [isVisible_Static30, setIsVisible_Static30] = useState(true);
    const [isVisible_Static31, setIsVisible_Static31] = useState(true);
    const [isVisible_edOrder2, setIsVisible_edOrder2] = useState(true);
    const [isVisible_Static32, setIsVisible_Static32] = useState(true);
    const [isVisible_Static33, setIsVisible_Static33] = useState(true);
    const [isVisible_btnBuliding, setIsVisible_btnBuliding] = useState(true);
    const [isVisible_edBuliding, setIsVisible_edBuliding] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_radRegin, setIsVisible_radRegin] = useState(true);
    const [isVisible_cbxRegion2, setIsVisible_cbxRegion2] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_cbxRegion3, setIsVisible_cbxRegion3] = useState(true);
    const [isVisible_calNewDateDay, setIsVisible_calNewDateDay] = useState(true);
    const [isVisible_meNum1, setIsVisible_meNum1] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_meNum2, setIsVisible_meNum2] = useState(true);
    const [isVisible_radMgno, setIsVisible_radMgno] = useState(true);
    const [isVisible_radReport, setIsVisible_radReport] = useState(true);
    const [isVisible_radZipNum, setIsVisible_radZipNum] = useState(true);
    const [isVisible_cbxCourse_3, setIsVisible_cbxCourse_3] = useState(true);
    const [isVisible_cbxCourse1, setIsVisible_cbxCourse1] = useState(true);
    const [isVisible_cbxCourse_4, setIsVisible_cbxCourse_4] = useState(true);
    const [isVisible_cbxCourse_1, setIsVisible_cbxCourse_1] = useState(true);
    const [isVisible_cbxCourse_5, setIsVisible_cbxCourse_5] = useState(true);
    const [isVisible_cbxCourse_6, setIsVisible_cbxCourse_6] = useState(true);
    const [isVisible_cbxCourse_2, setIsVisible_cbxCourse_2] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_edEduTotalCount, setIsVisible_edEduTotalCount] = useState(true);
    const [isVisible_Static27, setIsVisible_Static27] = useState(true);
    const [isVisible_Static34, setIsVisible_Static34] = useState(true);
    const [isVisible_edEduCount, setIsVisible_edEduCount] = useState(true);
    const [isVisible_Static35, setIsVisible_Static35] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_Static37, setIsVisible_Static37] = useState(true);
    const [isVisible_edEduDay, setIsVisible_edEduDay] = useState(true);
    const [isVisible_Static38, setIsVisible_Static38] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_radBuilding, setIsVisible_radBuilding] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_radNumber, setIsVisible_radNumber] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_grdExport, setIsVisible_grdExport] = useState(false);
    const [isVisible_Static36, setIsVisible_Static36] = useState(true);
    const [isVisible_Static39, setIsVisible_Static39] = useState(true);
    const [isVisible_radCpersonGubun, setIsVisible_radCpersonGubun] = useState(true);
    const [isVisible_cbxCpersonGubun1, setIsVisible_cbxCpersonGubun1] = useState(true);
    const [isVisible_radBiz, setIsVisible_radBiz] = useState(true);
    const [isVisible_radGijun, setIsVisible_radGijun] = useState(true);
    const [isVisible_cbxBonbu, setIsVisible_cbxBonbu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_cbxMFCenter2, setIsVisible_cbxMFCenter2] = useState(true);
    const [isVisible_cbxRegion1, setIsVisible_cbxRegion1] = useState(true);
    const [isVisible_Static40, setIsVisible_Static40] = useState(true);
    const [isVisible_Static41, setIsVisible_Static41] = useState(true);
    const [isVisible_cbxMFCenter3, setIsVisible_cbxMFCenter3] = useState(true);
    const [isVisible_radCenter, setIsVisible_radCenter] = useState(true);
    const [isVisible_cbxMFCenter1, setIsVisible_cbxMFCenter1] = useState(true);
    const [isVisible_Static42, setIsVisible_Static42] = useState(true);
    const [isVisible_radMinap, setIsVisible_radMinap] = useState(true);
    const [isVisible_Static43, setIsVisible_Static43] = useState(true);
    const [isVisible_chkTrainingExcept, setIsVisible_chkTrainingExcept] = useState(true);
    const [isVisible_CalTrainingStart, setIsVisible_CalTrainingStart] = useState(true);
    const [isVisible_Static44, setIsVisible_Static44] = useState(true);
    const [isVisible_CalTrainingEnd, setIsVisible_CalTrainingEnd] = useState(true);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_chkCheckbox3, setIsVisible_chkCheckbox3] = useState(true);
    const [isVisible_chkCheckbox4, setIsVisible_chkCheckbox4] = useState(true);
    const [isVisible_chkCheckbox6, setIsVisible_chkCheckbox6] = useState(true);
    const [isVisible_chkCheckbox5, setIsVisible_chkCheckbox5] = useState(true);
    const [isVisible_chkCheckbox8, setIsVisible_chkCheckbox8] = useState(true);
    const [isVisible_Static45, setIsVisible_Static45] = useState(true);
    const [isVisible_radAgency, setIsVisible_radAgency] = useState(true);
    const [isVisible_cbxBusinessType_1, setIsVisible_cbxBusinessType_1] = useState(true);
    const [isVisible_cbxBusinessType_2, setIsVisible_cbxBusinessType_2] = useState(true);
    const [isVisible_cbxBusinessType_3, setIsVisible_cbxBusinessType_3] = useState(true);
    const [isVisible_cbxBusinessType_4, setIsVisible_cbxBusinessType_4] = useState(true);
    const [isVisible_cbxBusinessType_5, setIsVisible_cbxBusinessType_5] = useState(true);
    const [isVisible_cbxBusinessType_6, setIsVisible_cbxBusinessType_6] = useState(true);
    const [isVisible_Div0, setIsVisible_Div0] = useState(false);
    const [isVisible_Button4, setIsVisible_Button4] = useState(true);
    const [isVisible_MaskEdit3, setIsVisible_MaskEdit3] = useState(true);
    const [isVisible_MaskEdit0, setIsVisible_MaskEdit0] = useState(true);
    const [isVisible_MaskEdit1, setIsVisible_MaskEdit1] = useState(true);
    const [isVisible_MaskEdit2, setIsVisible_MaskEdit2] = useState(true);
    const [isVisible_edMumber1, setIsVisible_edMumber1] = useState(true);
    const [isVisible_edMumber2, setIsVisible_edMumber2] = useState(true);
    const [isVisible_edMumber3, setIsVisible_edMumber3] = useState(true);
    const [isVisible_edMumber4, setIsVisible_edMumber4] = useState(true);
    const [isVisible_edMumber5, setIsVisible_edMumber5] = useState(true);
    const [isVisible_edMumber6, setIsVisible_edMumber6] = useState(true);
    const [isVisible_edMumber7, setIsVisible_edMumber7] = useState(true);
    const [isVisible_edMumber8, setIsVisible_edMumber8] = useState(true);
    const [isVisible_edMumber9, setIsVisible_edMumber9] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberGubun([]);
            setds_ioTarget([]);
            setds_ioTemp([]);
            setds_ioFeeGubun([]);
            setds_ioYear([]);
            setds_oCourse([]);
            setds_ioYearHalf([]);
            setds_ioPrintGubun([]);
            setds_ioOrder([]);
            setds_a([]);
            setds_ioBusinessType([]);
            setds_ioCourseYn_0([]);
            setds_ioCourseYn_1([]);
            setds_ioChoiceYn([]);
            setds_ioCourseYn_2([]);
            setds_oJibu([]);
            setds_oRegion([]);
            setds_ioCourseYn([]);
            setds_oBizCd([]);
            setds_ioChoiceYnReport([]);
            setds_ioZipNum([]);
            setds_ioMEduNotice([]);
            setds_ioApply([]);
            setds_oDetailCourse([]);
            setds_ioMEduNoticeDetail([]);
            setds_oPersonGubun([]);
            setds_ioGijun([]);
            setds_ioChoice([]);
            setds_oBonbu([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireCenterCd2([]);
            setds_oMinap([]);
            setds_ioYN([]);
            setds_oAgency([]);
            setds_ioChoiceYn_1([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Div0_Button4Yes_OnClick = () => {
        console.log('Div0_Button4Yes_OnClick clicked');
    };
    const Div0_Button4_OnClick = () => {
        console.log('Div0_Button4_OnClick clicked');
    };
    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnSetlmt_OnClick = () => {
        console.log('btnSetlmt_OnClick clicked');
    };
    const chkCheckbox2_OnClick = () => {
        console.log('chkCheckbox2_OnClick clicked');
    };
    const chkCheckbox_OnClick = () => {
        console.log('chkCheckbox_OnClick clicked');
    };
    const chkTrainingExcept_OnClick = () => {
        console.log('chkTrainingExcept_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_SearchHistory = () => {
        console.log('lfn_SearchHistory clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_ioMemberGubun,
        ds_ioTarget,
        ds_ioTemp,
        ds_ioFeeGubun,
        ds_ioYear,
        ds_oCourse,
        ds_ioYearHalf,
        ds_ioPrintGubun,
        ds_ioOrder,
        ds_a,
        ds_ioBusinessType,
        ds_ioCourseYn_0,
        ds_ioCourseYn_1,
        ds_ioChoiceYn,
        ds_ioCourseYn_2,
        ds_oJibu,
        ds_oRegion,
        ds_ioCourseYn,
        ds_oBizCd,
        ds_ioChoiceYnReport,
        ds_ioZipNum,
        ds_ioMEduNotice,
        ds_ioApply,
        ds_oDetailCourse,
        ds_ioMEduNoticeDetail,
        ds_oPersonGubun,
        ds_ioGijun,
        ds_ioChoice,
        ds_oBonbu,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireCenterCd2,
        ds_oMinap,
        ds_ioYN,
        ds_oAgency,
        ds_ioChoiceYn_1,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edCustYear,
        setIsVisible_edCustYear,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_radCourse_1,
        setIsVisible_radCourse_1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbBusinessType,
        setIsVisible_lbBusinessType,
        isVisible_cbxBusinessType1,
        setIsVisible_cbxBusinessType1,
        isVisible_cbxBusinessType2,
        setIsVisible_cbxBusinessType2,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_lbMgno,
        setIsVisible_lbMgno,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_cbxReportData1,
        setIsVisible_cbxReportData1,
        isVisible_cbxReportData2,
        setIsVisible_cbxReportData2,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_edPrintCount,
        setIsVisible_edPrintCount,
        isVisible_Calendar2,
        setIsVisible_Calendar2,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_cboPrintGubun,
        setIsVisible_cboPrintGubun,
        isVisible_Calendar3,
        setIsVisible_Calendar3,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_Calendar4,
        setIsVisible_Calendar4,
        isVisible_chkCheckbox,
        setIsVisible_chkCheckbox,
        isVisible_chkCheckbox2,
        setIsVisible_chkCheckbox2,
        isVisible_Calendar5,
        setIsVisible_Calendar5,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_Calendar6,
        setIsVisible_Calendar6,
        isVisible_radNotMemberFirsSecondHalf,
        setIsVisible_radNotMemberFirsSecondHalf,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Checkbox1,
        setIsVisible_Checkbox1,
        isVisible_Checkbox2,
        setIsVisible_Checkbox2,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_Checkbox7,
        setIsVisible_Checkbox7,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_edOrder1,
        setIsVisible_edOrder1,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_meZipNum1,
        setIsVisible_meZipNum1,
        isVisible_Static29,
        setIsVisible_Static29,
        isVisible_meZipNum2,
        setIsVisible_meZipNum2,
        isVisible_Static30,
        setIsVisible_Static30,
        isVisible_Static31,
        setIsVisible_Static31,
        isVisible_edOrder2,
        setIsVisible_edOrder2,
        isVisible_Static32,
        setIsVisible_Static32,
        isVisible_Static33,
        setIsVisible_Static33,
        isVisible_btnBuliding,
        setIsVisible_btnBuliding,
        isVisible_edBuliding,
        setIsVisible_edBuliding,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_radRegin,
        setIsVisible_radRegin,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_cbxRegion3,
        setIsVisible_cbxRegion3,
        isVisible_calNewDateDay,
        setIsVisible_calNewDateDay,
        isVisible_meNum1,
        setIsVisible_meNum1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_meNum2,
        setIsVisible_meNum2,
        isVisible_radMgno,
        setIsVisible_radMgno,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_radZipNum,
        setIsVisible_radZipNum,
        isVisible_cbxCourse_3,
        setIsVisible_cbxCourse_3,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_cbxCourse_4,
        setIsVisible_cbxCourse_4,
        isVisible_cbxCourse_1,
        setIsVisible_cbxCourse_1,
        isVisible_cbxCourse_5,
        setIsVisible_cbxCourse_5,
        isVisible_cbxCourse_6,
        setIsVisible_cbxCourse_6,
        isVisible_cbxCourse_2,
        setIsVisible_cbxCourse_2,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_edEduTotalCount,
        setIsVisible_edEduTotalCount,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_Static34,
        setIsVisible_Static34,
        isVisible_edEduCount,
        setIsVisible_edEduCount,
        isVisible_Static35,
        setIsVisible_Static35,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
        isVisible_Static37,
        setIsVisible_Static37,
        isVisible_edEduDay,
        setIsVisible_edEduDay,
        isVisible_Static38,
        setIsVisible_Static38,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_radBuilding,
        setIsVisible_radBuilding,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_radNumber,
        setIsVisible_radNumber,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_grdExport,
        setIsVisible_grdExport,
        isVisible_Static36,
        setIsVisible_Static36,
        isVisible_Static39,
        setIsVisible_Static39,
        isVisible_radCpersonGubun,
        setIsVisible_radCpersonGubun,
        isVisible_cbxCpersonGubun1,
        setIsVisible_cbxCpersonGubun1,
        isVisible_radBiz,
        setIsVisible_radBiz,
        isVisible_radGijun,
        setIsVisible_radGijun,
        isVisible_cbxBonbu,
        setIsVisible_cbxBonbu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cbxMFCenter2,
        setIsVisible_cbxMFCenter2,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_Static40,
        setIsVisible_Static40,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_cbxMFCenter3,
        setIsVisible_cbxMFCenter3,
        isVisible_radCenter,
        setIsVisible_radCenter,
        isVisible_cbxMFCenter1,
        setIsVisible_cbxMFCenter1,
        isVisible_Static42,
        setIsVisible_Static42,
        isVisible_radMinap,
        setIsVisible_radMinap,
        isVisible_Static43,
        setIsVisible_Static43,
        isVisible_chkTrainingExcept,
        setIsVisible_chkTrainingExcept,
        isVisible_CalTrainingStart,
        setIsVisible_CalTrainingStart,
        isVisible_Static44,
        setIsVisible_Static44,
        isVisible_CalTrainingEnd,
        setIsVisible_CalTrainingEnd,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_chkCheckbox3,
        setIsVisible_chkCheckbox3,
        isVisible_chkCheckbox4,
        setIsVisible_chkCheckbox4,
        isVisible_chkCheckbox6,
        setIsVisible_chkCheckbox6,
        isVisible_chkCheckbox5,
        setIsVisible_chkCheckbox5,
        isVisible_chkCheckbox8,
        setIsVisible_chkCheckbox8,
        isVisible_Static45,
        setIsVisible_Static45,
        isVisible_radAgency,
        setIsVisible_radAgency,
        isVisible_cbxBusinessType_1,
        setIsVisible_cbxBusinessType_1,
        isVisible_cbxBusinessType_2,
        setIsVisible_cbxBusinessType_2,
        isVisible_cbxBusinessType_3,
        setIsVisible_cbxBusinessType_3,
        isVisible_cbxBusinessType_4,
        setIsVisible_cbxBusinessType_4,
        isVisible_cbxBusinessType_5,
        setIsVisible_cbxBusinessType_5,
        isVisible_cbxBusinessType_6,
        setIsVisible_cbxBusinessType_6,
        isVisible_Div0,
        setIsVisible_Div0,
        isVisible_Button4,
        setIsVisible_Button4,
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
        btnBarCodeSearch_OnClick,
        btnSetlmt_OnClick,
        chkCheckbox2_OnClick,
        chkCheckbox_OnClick,
        chkTrainingExcept_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_SearchHistory,
        lfn_localExcel,
    };
};