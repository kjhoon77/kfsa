// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberGubun, Ids_ioTarget, Ids_ioTemp, Ids_ioFeeGubun, Ids_ioYear, Ids_oCourse, Ids_ioYearHalf, Ids_ioPrintGubun, Ids_ioOrder, Ids_a, Ids_ioBusinessType, Ids_ioCourseYn_0, Ids_ioCourseYn_1, Ids_ioChoiceYn, Ids_ioCourseYn_2, Ids_oJibu, Ids_oRegion, Ids_ioCourseYn, Ids_oBizCd, Ids_ioChoiceYnReport, Ids_ioZipNum, Ids_ioMEduNotice, Ids_ioApply, Ids_oDetailCourse, Ids_ioMEduNoticeDetail, Ids_oPersonGubun, Ids_ioGijun, Ids_ioChoice, Ids_oBonbu, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireCenterCd2, Ids_oMinap, Ids_ioYN, Ids_oAgency, Ids_ioChoiceYn_1 } from './Frmcust1100MEduNoticeData';

export const useFrmcust1100MEduNotice = () => {
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
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edCustYear, setRawVisible_edCustYear] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_radCourse_1, setRawVisible_radCourse_1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbBusinessType, setRawVisible_lbBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_cbxReportData1, setRawVisible_cbxReportData1] = useState(true);
    const [rawVisible_cbxReportData2, setRawVisible_cbxReportData2] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_edPrintCount, setRawVisible_edPrintCount] = useState(true);
    const [rawVisible_Calendar2, setRawVisible_Calendar2] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_cboPrintGubun, setRawVisible_cboPrintGubun] = useState(true);
    const [rawVisible_Calendar3, setRawVisible_Calendar3] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_Calendar4, setRawVisible_Calendar4] = useState(true);
    const [rawVisible_chkCheckbox, setRawVisible_chkCheckbox] = useState(true);
    const [rawVisible_chkCheckbox2, setRawVisible_chkCheckbox2] = useState(true);
    const [rawVisible_Calendar5, setRawVisible_Calendar5] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_Calendar6, setRawVisible_Calendar6] = useState(true);
    const [rawVisible_radNotMemberFirsSecondHalf, setRawVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Checkbox1, setRawVisible_Checkbox1] = useState(true);
    const [rawVisible_Checkbox2, setRawVisible_Checkbox2] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_Checkbox7, setRawVisible_Checkbox7] = useState(false);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_edOrder1, setRawVisible_edOrder1] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_meZipNum1, setRawVisible_meZipNum1] = useState(true);
    const [rawVisible_Static29, setRawVisible_Static29] = useState(true);
    const [rawVisible_meZipNum2, setRawVisible_meZipNum2] = useState(true);
    const [rawVisible_Static30, setRawVisible_Static30] = useState(true);
    const [rawVisible_Static31, setRawVisible_Static31] = useState(true);
    const [rawVisible_edOrder2, setRawVisible_edOrder2] = useState(true);
    const [rawVisible_Static32, setRawVisible_Static32] = useState(true);
    const [rawVisible_Static33, setRawVisible_Static33] = useState(true);
    const [rawVisible_btnBuliding, setRawVisible_btnBuliding] = useState(true);
    const [rawVisible_edBuliding, setRawVisible_edBuliding] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_radRegin, setRawVisible_radRegin] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_cbxRegion3, setRawVisible_cbxRegion3] = useState(true);
    const [rawVisible_calNewDateDay, setRawVisible_calNewDateDay] = useState(true);
    const [rawVisible_meNum1, setRawVisible_meNum1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_meNum2, setRawVisible_meNum2] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_radZipNum, setRawVisible_radZipNum] = useState(true);
    const [rawVisible_cbxCourse_3, setRawVisible_cbxCourse_3] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse_4, setRawVisible_cbxCourse_4] = useState(true);
    const [rawVisible_cbxCourse_1, setRawVisible_cbxCourse_1] = useState(true);
    const [rawVisible_cbxCourse_5, setRawVisible_cbxCourse_5] = useState(true);
    const [rawVisible_cbxCourse_6, setRawVisible_cbxCourse_6] = useState(true);
    const [rawVisible_cbxCourse_2, setRawVisible_cbxCourse_2] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_edEduTotalCount, setRawVisible_edEduTotalCount] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_Static34, setRawVisible_Static34] = useState(true);
    const [rawVisible_edEduCount, setRawVisible_edEduCount] = useState(true);
    const [rawVisible_Static35, setRawVisible_Static35] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_Static37, setRawVisible_Static37] = useState(true);
    const [rawVisible_edEduDay, setRawVisible_edEduDay] = useState(true);
    const [rawVisible_Static38, setRawVisible_Static38] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_radBuilding, setRawVisible_radBuilding] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_radNumber, setRawVisible_radNumber] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_grdExport, setRawVisible_grdExport] = useState(false);
    const [rawVisible_Static36, setRawVisible_Static36] = useState(true);
    const [rawVisible_Static39, setRawVisible_Static39] = useState(true);
    const [rawVisible_radCpersonGubun, setRawVisible_radCpersonGubun] = useState(true);
    const [rawVisible_cbxCpersonGubun1, setRawVisible_cbxCpersonGubun1] = useState(true);
    const [rawVisible_radBiz, setRawVisible_radBiz] = useState(true);
    const [rawVisible_radGijun, setRawVisible_radGijun] = useState(true);
    const [rawVisible_cbxBonbu, setRawVisible_cbxBonbu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cbxMFCenter2, setRawVisible_cbxMFCenter2] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_Static40, setRawVisible_Static40] = useState(true);
    const [rawVisible_Static41, setRawVisible_Static41] = useState(true);
    const [rawVisible_cbxMFCenter3, setRawVisible_cbxMFCenter3] = useState(true);
    const [rawVisible_radCenter, setRawVisible_radCenter] = useState(true);
    const [rawVisible_cbxMFCenter1, setRawVisible_cbxMFCenter1] = useState(true);
    const [rawVisible_Static42, setRawVisible_Static42] = useState(true);
    const [rawVisible_radMinap, setRawVisible_radMinap] = useState(true);
    const [rawVisible_Static43, setRawVisible_Static43] = useState(true);
    const [rawVisible_chkTrainingExcept, setRawVisible_chkTrainingExcept] = useState(true);
    const [rawVisible_CalTrainingStart, setRawVisible_CalTrainingStart] = useState(true);
    const [rawVisible_Static44, setRawVisible_Static44] = useState(true);
    const [rawVisible_CalTrainingEnd, setRawVisible_CalTrainingEnd] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_chkCheckbox3, setRawVisible_chkCheckbox3] = useState(true);
    const [rawVisible_chkCheckbox4, setRawVisible_chkCheckbox4] = useState(true);
    const [rawVisible_chkCheckbox6, setRawVisible_chkCheckbox6] = useState(true);
    const [rawVisible_chkCheckbox5, setRawVisible_chkCheckbox5] = useState(true);
    const [rawVisible_chkCheckbox8, setRawVisible_chkCheckbox8] = useState(true);
    const [rawVisible_Static45, setRawVisible_Static45] = useState(true);
    const [rawVisible_radAgency, setRawVisible_radAgency] = useState(true);
    const [rawVisible_cbxBusinessType_1, setRawVisible_cbxBusinessType_1] = useState(true);
    const [rawVisible_cbxBusinessType_2, setRawVisible_cbxBusinessType_2] = useState(true);
    const [rawVisible_cbxBusinessType_3, setRawVisible_cbxBusinessType_3] = useState(true);
    const [rawVisible_cbxBusinessType_4, setRawVisible_cbxBusinessType_4] = useState(true);
    const [rawVisible_cbxBusinessType_5, setRawVisible_cbxBusinessType_5] = useState(true);
    const [rawVisible_cbxBusinessType_6, setRawVisible_cbxBusinessType_6] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(false);
    const [rawVisible_Button4, setRawVisible_Button4] = useState(true);
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
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape3;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edCustYear = rawVisible_edCustYear && rawVisible_Shape0;
    const setIsVisible_edCustYear = setRawVisible_edCustYear;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_divWorkFormTitle;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape1;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_radCourse_1 = rawVisible_radCourse_1 && rawVisible_Shape1;
    const setIsVisible_radCourse_1 = setRawVisible_radCourse_1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape1;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape1;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape3;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape3;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbBusinessType = rawVisible_lbBusinessType && rawVisible_Shape3;
    const setIsVisible_lbBusinessType = setRawVisible_lbBusinessType;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape3;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape3;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape3;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Div0;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_cbxReportData1 = rawVisible_cbxReportData1 && rawVisible_Shape3;
    const setIsVisible_cbxReportData1 = setRawVisible_cbxReportData1;
    const isVisible_cbxReportData2 = rawVisible_cbxReportData2 && rawVisible_Shape3;
    const setIsVisible_cbxReportData2 = setRawVisible_cbxReportData2;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape2;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape2;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape2;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_Static21 = rawVisible_Static21 && rawVisible_Shape4;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_Static22 = rawVisible_Static22 && rawVisible_Shape4;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_edPrintCount = rawVisible_edPrintCount && rawVisible_Shape4;
    const setIsVisible_edPrintCount = setRawVisible_edPrintCount;
    const isVisible_Calendar2 = rawVisible_Calendar2 && rawVisible_Shape4;
    const setIsVisible_Calendar2 = setRawVisible_Calendar2;
    const isVisible_Static23 = rawVisible_Static23 && rawVisible_Shape4;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_cboPrintGubun = rawVisible_cboPrintGubun && rawVisible_Shape4;
    const setIsVisible_cboPrintGubun = setRawVisible_cboPrintGubun;
    const isVisible_Calendar3 = rawVisible_Calendar3 && rawVisible_Shape2;
    const setIsVisible_Calendar3 = setRawVisible_Calendar3;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape2;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_Calendar4 = rawVisible_Calendar4 && rawVisible_Shape2;
    const setIsVisible_Calendar4 = setRawVisible_Calendar4;
    const isVisible_chkCheckbox = rawVisible_chkCheckbox && rawVisible_Shape2;
    const setIsVisible_chkCheckbox = setRawVisible_chkCheckbox;
    const isVisible_chkCheckbox2 = rawVisible_chkCheckbox2 && rawVisible_Shape2;
    const setIsVisible_chkCheckbox2 = setRawVisible_chkCheckbox2;
    const isVisible_Calendar5 = rawVisible_Calendar5 && rawVisible_Shape2;
    const setIsVisible_Calendar5 = setRawVisible_Calendar5;
    const isVisible_Static25 = rawVisible_Static25 && rawVisible_Shape2;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_Calendar6 = rawVisible_Calendar6 && rawVisible_Shape2;
    const setIsVisible_Calendar6 = setRawVisible_Calendar6;
    const isVisible_radNotMemberFirsSecondHalf = rawVisible_radNotMemberFirsSecondHalf && rawVisible_Shape2;
    const setIsVisible_radNotMemberFirsSecondHalf = setRawVisible_radNotMemberFirsSecondHalf;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape4;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Checkbox1 = rawVisible_Checkbox1 && rawVisible_Shape4;
    const setIsVisible_Checkbox1 = setRawVisible_Checkbox1;
    const isVisible_Checkbox2 = rawVisible_Checkbox2 && rawVisible_Shape4;
    const setIsVisible_Checkbox2 = setRawVisible_Checkbox2;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape4;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape4;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_Checkbox7 = rawVisible_Checkbox7 && rawVisible_Shape4;
    const setIsVisible_Checkbox7 = setRawVisible_Checkbox7;
    const isVisible_Static26 = rawVisible_Static26 && rawVisible_Shape4;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_edOrder1 = rawVisible_edOrder1 && rawVisible_Shape4;
    const setIsVisible_edOrder1 = setRawVisible_edOrder1;
    const isVisible_Static28 = rawVisible_Static28 && rawVisible_Shape3;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_meZipNum1 = rawVisible_meZipNum1 && rawVisible_Shape3;
    const setIsVisible_meZipNum1 = setRawVisible_meZipNum1;
    const isVisible_Static29 = rawVisible_Static29 && rawVisible_Div0;
    const setIsVisible_Static29 = setRawVisible_Static29;
    const isVisible_meZipNum2 = rawVisible_meZipNum2 && rawVisible_Div0;
    const setIsVisible_meZipNum2 = setRawVisible_meZipNum2;
    const isVisible_Static30 = rawVisible_Static30 && rawVisible_Shape4;
    const setIsVisible_Static30 = setRawVisible_Static30;
    const isVisible_Static31 = rawVisible_Static31 && rawVisible_Shape4;
    const setIsVisible_Static31 = setRawVisible_Static31;
    const isVisible_edOrder2 = rawVisible_edOrder2 && rawVisible_Shape4;
    const setIsVisible_edOrder2 = setRawVisible_edOrder2;
    const isVisible_Static32 = rawVisible_Static32 && rawVisible_Shape4;
    const setIsVisible_Static32 = setRawVisible_Static32;
    const isVisible_Static33 = rawVisible_Static33 && rawVisible_Shape4;
    const setIsVisible_Static33 = setRawVisible_Static33;
    const isVisible_btnBuliding = rawVisible_btnBuliding && rawVisible_Shape2;
    const setIsVisible_btnBuliding = setRawVisible_btnBuliding;
    const isVisible_edBuliding = rawVisible_edBuliding && rawVisible_Shape2;
    const setIsVisible_edBuliding = setRawVisible_edBuliding;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape3;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_radRegin = rawVisible_radRegin && rawVisible_Shape3;
    const setIsVisible_radRegin = setRawVisible_radRegin;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape3;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape3;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_cbxRegion3 = rawVisible_cbxRegion3 && rawVisible_Shape3;
    const setIsVisible_cbxRegion3 = setRawVisible_cbxRegion3;
    const isVisible_calNewDateDay = rawVisible_calNewDateDay && rawVisible_Shape3;
    const setIsVisible_calNewDateDay = setRawVisible_calNewDateDay;
    const isVisible_meNum1 = rawVisible_meNum1 && rawVisible_Shape3;
    const setIsVisible_meNum1 = setRawVisible_meNum1;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Div0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_meNum2 = rawVisible_meNum2 && rawVisible_Div0;
    const setIsVisible_meNum2 = setRawVisible_meNum2;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape3;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape3;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_radZipNum = rawVisible_radZipNum && rawVisible_Shape3;
    const setIsVisible_radZipNum = setRawVisible_radZipNum;
    const isVisible_cbxCourse_3 = rawVisible_cbxCourse_3 && rawVisible_Shape3;
    const setIsVisible_cbxCourse_3 = setRawVisible_cbxCourse_3;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape3;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse_4 = rawVisible_cbxCourse_4 && rawVisible_Shape3;
    const setIsVisible_cbxCourse_4 = setRawVisible_cbxCourse_4;
    const isVisible_cbxCourse_1 = rawVisible_cbxCourse_1 && rawVisible_Shape3;
    const setIsVisible_cbxCourse_1 = setRawVisible_cbxCourse_1;
    const isVisible_cbxCourse_5 = rawVisible_cbxCourse_5 && rawVisible_Shape3;
    const setIsVisible_cbxCourse_5 = setRawVisible_cbxCourse_5;
    const isVisible_cbxCourse_6 = rawVisible_cbxCourse_6 && rawVisible_Shape3;
    const setIsVisible_cbxCourse_6 = setRawVisible_cbxCourse_6;
    const isVisible_cbxCourse_2 = rawVisible_cbxCourse_2 && rawVisible_Shape3;
    const setIsVisible_cbxCourse_2 = setRawVisible_cbxCourse_2;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape5;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_edEduTotalCount = rawVisible_edEduTotalCount && rawVisible_Shape5;
    const setIsVisible_edEduTotalCount = setRawVisible_edEduTotalCount;
    const isVisible_Static27 = rawVisible_Static27 && rawVisible_Shape5;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_Static34 = rawVisible_Static34 && rawVisible_Shape5;
    const setIsVisible_Static34 = setRawVisible_Static34;
    const isVisible_edEduCount = rawVisible_edEduCount && rawVisible_Shape5;
    const setIsVisible_edEduCount = setRawVisible_edEduCount;
    const isVisible_Static35 = rawVisible_Static35 && rawVisible_Shape5;
    const setIsVisible_Static35 = setRawVisible_Static35;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt && rawVisible_Shape5;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_Static37 = rawVisible_Static37 && rawVisible_Shape5;
    const setIsVisible_Static37 = setRawVisible_Static37;
    const isVisible_edEduDay = rawVisible_edEduDay && rawVisible_Shape5;
    const setIsVisible_edEduDay = setRawVisible_edEduDay;
    const isVisible_Static38 = rawVisible_Static38 && rawVisible_Shape5;
    const setIsVisible_Static38 = setRawVisible_Static38;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_radBuilding = rawVisible_radBuilding && rawVisible_Shape2;
    const setIsVisible_radBuilding = setRawVisible_radBuilding;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape2;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape3;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_radNumber = rawVisible_radNumber && rawVisible_Shape3;
    const setIsVisible_radNumber = setRawVisible_radNumber;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_shpBtnBox;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnToExcel = rawVisible_btnToExcel;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_grdExport = rawVisible_grdExport;
    const setIsVisible_grdExport = setRawVisible_grdExport;
    const isVisible_Static36 = rawVisible_Static36;
    const setIsVisible_Static36 = setRawVisible_Static36;
    const isVisible_Static39 = rawVisible_Static39 && rawVisible_Shape3;
    const setIsVisible_Static39 = setRawVisible_Static39;
    const isVisible_radCpersonGubun = rawVisible_radCpersonGubun && rawVisible_Shape3;
    const setIsVisible_radCpersonGubun = setRawVisible_radCpersonGubun;
    const isVisible_cbxCpersonGubun1 = rawVisible_cbxCpersonGubun1 && rawVisible_Shape3;
    const setIsVisible_cbxCpersonGubun1 = setRawVisible_cbxCpersonGubun1;
    const isVisible_radBiz = rawVisible_radBiz && rawVisible_Shape3;
    const setIsVisible_radBiz = setRawVisible_radBiz;
    const isVisible_radGijun = rawVisible_radGijun && rawVisible_Shape3;
    const setIsVisible_radGijun = setRawVisible_radGijun;
    const isVisible_cbxBonbu = rawVisible_cbxBonbu && rawVisible_Shape3;
    const setIsVisible_cbxBonbu = setRawVisible_cbxBonbu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape3;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxMFCenter2 = rawVisible_cbxMFCenter2 && rawVisible_Shape3;
    const setIsVisible_cbxMFCenter2 = setRawVisible_cbxMFCenter2;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape3;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_Static40 = rawVisible_Static40 && rawVisible_Shape3;
    const setIsVisible_Static40 = setRawVisible_Static40;
    const isVisible_Static41 = rawVisible_Static41 && rawVisible_Shape3;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_cbxMFCenter3 = rawVisible_cbxMFCenter3 && rawVisible_Shape3;
    const setIsVisible_cbxMFCenter3 = setRawVisible_cbxMFCenter3;
    const isVisible_radCenter = rawVisible_radCenter && rawVisible_Shape3;
    const setIsVisible_radCenter = setRawVisible_radCenter;
    const isVisible_cbxMFCenter1 = rawVisible_cbxMFCenter1 && rawVisible_Shape3;
    const setIsVisible_cbxMFCenter1 = setRawVisible_cbxMFCenter1;
    const isVisible_Static42 = rawVisible_Static42 && rawVisible_Shape2;
    const setIsVisible_Static42 = setRawVisible_Static42;
    const isVisible_radMinap = rawVisible_radMinap && rawVisible_Shape2;
    const setIsVisible_radMinap = setRawVisible_radMinap;
    const isVisible_Static43 = rawVisible_Static43 && rawVisible_Shape2;
    const setIsVisible_Static43 = setRawVisible_Static43;
    const isVisible_chkTrainingExcept = rawVisible_chkTrainingExcept && rawVisible_Shape2;
    const setIsVisible_chkTrainingExcept = setRawVisible_chkTrainingExcept;
    const isVisible_CalTrainingStart = rawVisible_CalTrainingStart && rawVisible_Shape2;
    const setIsVisible_CalTrainingStart = setRawVisible_CalTrainingStart;
    const isVisible_Static44 = rawVisible_Static44 && rawVisible_Shape2;
    const setIsVisible_Static44 = setRawVisible_Static44;
    const isVisible_CalTrainingEnd = rawVisible_CalTrainingEnd && rawVisible_Shape2;
    const setIsVisible_CalTrainingEnd = setRawVisible_CalTrainingEnd;
    const isVisible_Shape6 = rawVisible_Shape6 && rawVisible_Shape2;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape6;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_chkCheckbox3 = rawVisible_chkCheckbox3 && rawVisible_Shape6;
    const setIsVisible_chkCheckbox3 = setRawVisible_chkCheckbox3;
    const isVisible_chkCheckbox4 = rawVisible_chkCheckbox4 && rawVisible_Shape6;
    const setIsVisible_chkCheckbox4 = setRawVisible_chkCheckbox4;
    const isVisible_chkCheckbox6 = rawVisible_chkCheckbox6 && rawVisible_Shape6;
    const setIsVisible_chkCheckbox6 = setRawVisible_chkCheckbox6;
    const isVisible_chkCheckbox5 = rawVisible_chkCheckbox5 && rawVisible_Shape6;
    const setIsVisible_chkCheckbox5 = setRawVisible_chkCheckbox5;
    const isVisible_chkCheckbox8 = rawVisible_chkCheckbox8 && rawVisible_Shape6;
    const setIsVisible_chkCheckbox8 = setRawVisible_chkCheckbox8;
    const isVisible_Static45 = rawVisible_Static45 && rawVisible_Shape2;
    const setIsVisible_Static45 = setRawVisible_Static45;
    const isVisible_radAgency = rawVisible_radAgency && rawVisible_Shape2;
    const setIsVisible_radAgency = setRawVisible_radAgency;
    const isVisible_cbxBusinessType_1 = rawVisible_cbxBusinessType_1 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType_1 = setRawVisible_cbxBusinessType_1;
    const isVisible_cbxBusinessType_2 = rawVisible_cbxBusinessType_2 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType_2 = setRawVisible_cbxBusinessType_2;
    const isVisible_cbxBusinessType_3 = rawVisible_cbxBusinessType_3 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType_3 = setRawVisible_cbxBusinessType_3;
    const isVisible_cbxBusinessType_4 = rawVisible_cbxBusinessType_4 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType_4 = setRawVisible_cbxBusinessType_4;
    const isVisible_cbxBusinessType_5 = rawVisible_cbxBusinessType_5 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType_5 = setRawVisible_cbxBusinessType_5;
    const isVisible_cbxBusinessType_6 = rawVisible_cbxBusinessType_6 && rawVisible_Shape3;
    const setIsVisible_cbxBusinessType_6 = setRawVisible_cbxBusinessType_6;
    const isVisible_Div0 = rawVisible_Div0 && rawVisible_Shape3;
    const setIsVisible_Div0 = setRawVisible_Div0;
    const isVisible_Button4 = rawVisible_Button4 && rawVisible_Shape1;
    const setIsVisible_Button4 = setRawVisible_Button4;
    const isVisible_MaskEdit3 = rawVisible_MaskEdit3 && rawVisible_Shape3;
    const setIsVisible_MaskEdit3 = setRawVisible_MaskEdit3;
    const isVisible_MaskEdit0 = rawVisible_MaskEdit0 && rawVisible_Shape3;
    const setIsVisible_MaskEdit0 = setRawVisible_MaskEdit0;
    const isVisible_MaskEdit1 = rawVisible_MaskEdit1 && rawVisible_Shape3;
    const setIsVisible_MaskEdit1 = setRawVisible_MaskEdit1;
    const isVisible_MaskEdit2 = rawVisible_MaskEdit2;
    const setIsVisible_MaskEdit2 = setRawVisible_MaskEdit2;
    const isVisible_edMumber1 = rawVisible_edMumber1;
    const setIsVisible_edMumber1 = setRawVisible_edMumber1;
    const isVisible_edMumber2 = rawVisible_edMumber2;
    const setIsVisible_edMumber2 = setRawVisible_edMumber2;
    const isVisible_edMumber3 = rawVisible_edMumber3;
    const setIsVisible_edMumber3 = setRawVisible_edMumber3;
    const isVisible_edMumber4 = rawVisible_edMumber4 && rawVisible_Shape0;
    const setIsVisible_edMumber4 = setRawVisible_edMumber4;
    const isVisible_edMumber5 = rawVisible_edMumber5 && rawVisible_Shape0;
    const setIsVisible_edMumber5 = setRawVisible_edMumber5;
    const isVisible_edMumber6 = rawVisible_edMumber6 && rawVisible_Shape0;
    const setIsVisible_edMumber6 = setRawVisible_edMumber6;
    const isVisible_edMumber7 = rawVisible_edMumber7;
    const setIsVisible_edMumber7 = setRawVisible_edMumber7;
    const isVisible_edMumber8 = rawVisible_edMumber8;
    const setIsVisible_edMumber8 = setRawVisible_edMumber8;
    const isVisible_edMumber9 = rawVisible_edMumber9;
    const setIsVisible_edMumber9 = setRawVisible_edMumber9;

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