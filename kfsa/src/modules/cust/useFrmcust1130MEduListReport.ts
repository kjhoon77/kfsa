// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioReport, Ids_ioYear, Ids_ioChoiceYn, Ids_ioMemberGubun, Ids_ioCourse, Ids_ioOrder, Ids_ioJibu, Ids_ioEduGubun, Ids_ioOrder_0, Ids_ioChoiceYn_0, Ids_ioCourseYn, Ids_ioEduYear, Ids_oRegion, Ids_oAdditionInfo, Ids_ioOrder3, Ids_SearchJogeon, Ids_EduList1, Ids_EduList3, Ids_EduList2, Ids_ioPrintGubun, Ids_ioIssue, Ids_ioSuccessionGubun, Ids_ioAgencyGubun, Ids_ioGijun, Ids_ioChoice, Ids_oBonbu, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireCenterCd2 } from './Frmcust1130MEduListReportData';

export const useFrmcust1130MEduListReport = () => {
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioEduGubun, setds_ioEduGubun] = useState<Ids_ioEduGubun[]>([]);
    const [ds_ioOrder_0, setds_ioOrder_0] = useState<Ids_ioOrder_0[]>([]);
    const [ds_ioChoiceYn_0, setds_ioChoiceYn_0] = useState<Ids_ioChoiceYn_0[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioEduYear, setds_ioEduYear] = useState<Ids_ioEduYear[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_ioOrder3, setds_ioOrder3] = useState<Ids_ioOrder3[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_EduList1, setds_EduList1] = useState<Ids_EduList1[]>([]);
    const [ds_EduList3, setds_EduList3] = useState<Ids_EduList3[]>([]);
    const [ds_EduList2, setds_EduList2] = useState<Ids_EduList2[]>([]);
    const [ds_ioPrintGubun, setds_ioPrintGubun] = useState<Ids_ioPrintGubun[]>([]);
    const [ds_ioIssue, setds_ioIssue] = useState<Ids_ioIssue[]>([]);
    const [ds_ioSuccessionGubun, setds_ioSuccessionGubun] = useState<Ids_ioSuccessionGubun[]>([]);
    const [ds_ioAgencyGubun, setds_ioAgencyGubun] = useState<Ids_ioAgencyGubun[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_ioChoice, setds_ioChoice] = useState<Ids_ioChoice[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireCenterCd2, setds_oFireCenterCd2] = useState<Ids_oFireCenterCd2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape10, setRawVisible_Shape10] = useState(true);
    const [rawVisible_Shape7, setRawVisible_Shape7] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radEduGubun, setRawVisible_radEduGubun] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_stEduYear, setRawVisible_stEduYear] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_calBfYmdFr, setRawVisible_calBfYmdFr] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_calBfYmdTo, setRawVisible_calBfYmdTo] = useState(true);
    const [rawVisible_chkBfEdu, setRawVisible_chkBfEdu] = useState(true);
    const [rawVisible_Shape8, setRawVisible_Shape8] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_radPerson1, setRawVisible_radPerson1] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_radPerson2, setRawVisible_radPerson2] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_radPerson3, setRawVisible_radPerson3] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion3, setRawVisible_cbxRegion3] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_radBusinessType, setRawVisible_radBusinessType] = useState(true);
    const [rawVisible_cbxYear, setRawVisible_cbxYear] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_radDate, setRawVisible_radDate] = useState(true);
    const [rawVisible_Static22, setRawVisible_Static22] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_medMgno1, setRawVisible_medMgno1] = useState(true);
    const [rawVisible_medMgno2, setRawVisible_medMgno2] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_edJoinYearMonth, setRawVisible_edJoinYearMonth] = useState(true);
    const [rawVisible_Shape9, setRawVisible_Shape9] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_radExcept, setRawVisible_radExcept] = useState(true);
    const [rawVisible_radNotEduSelect, setRawVisible_radNotEduSelect] = useState(true);
    const [rawVisible_gdList1N, setRawVisible_gdList1N] = useState(false);
    const [rawVisible_gdList2, setRawVisible_gdList2] = useState(false);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Div0, setRawVisible_Div0] = useState(true);
    const [rawVisible_calEduYmdTo, setRawVisible_calEduYmdTo] = useState(true);
    const [rawVisible_calEduYmdFr, setRawVisible_calEduYmdFr] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_radCnoGubun, setRawVisible_radCnoGubun] = useState(true);
    const [rawVisible_Static21, setRawVisible_Static21] = useState(true);
    const [rawVisible_radDelGubun, setRawVisible_radDelGubun] = useState(true);
    const [rawVisible_Static23, setRawVisible_Static23] = useState(true);
    const [rawVisible_gdList3, setRawVisible_gdList3] = useState(false);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_radIssue, setRawVisible_radIssue] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_radSuccessionGubun, setRawVisible_radSuccessionGubun] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_radAgencyGubun, setRawVisible_radAgencyGubun] = useState(true);
    const [rawVisible_radGijun, setRawVisible_radGijun] = useState(true);
    const [rawVisible_cbxBonbu, setRawVisible_cbxBonbu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cbxRegion1, setRawVisible_cbxRegion1] = useState(true);
    const [rawVisible_Static40, setRawVisible_Static40] = useState(true);
    const [rawVisible_radCenter, setRawVisible_radCenter] = useState(true);
    const [rawVisible_cbxMFCenter1, setRawVisible_cbxMFCenter1] = useState(true);
    const [rawVisible_cbxMFCenter3, setRawVisible_cbxMFCenter3] = useState(true);
    const [rawVisible_cbxMFCenter2, setRawVisible_cbxMFCenter2] = useState(true);
    const [rawVisible_Static41, setRawVisible_Static41] = useState(true);
    const [rawVisible_chkTrainingExcept, setRawVisible_chkTrainingExcept] = useState(true);
    const [rawVisible_CalTrainingStart, setRawVisible_CalTrainingStart] = useState(true);
    const [rawVisible_Static44, setRawVisible_Static44] = useState(true);
    const [rawVisible_CalTrainingEnd, setRawVisible_CalTrainingEnd] = useState(true);
    const [rawVisible_gdList1Y, setRawVisible_gdList1Y] = useState(false);
    const isVisible_Shape10 = rawVisible_Shape10;
    const setIsVisible_Shape10 = setRawVisible_Shape10;
    const isVisible_Shape7 = rawVisible_Shape7;
    const setIsVisible_Shape7 = setRawVisible_Shape7;
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_divWorkFormTitle;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape0;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_Shape0;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape1;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape2;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radEduGubun = rawVisible_radEduGubun && rawVisible_Shape3;
    const setIsVisible_radEduGubun = setRawVisible_radEduGubun;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_stEduYear = rawVisible_stEduYear && rawVisible_Shape4;
    const setIsVisible_stEduYear = setRawVisible_stEduYear;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_radPrintGubun = rawVisible_radPrintGubun && rawVisible_Shape5;
    const setIsVisible_radPrintGubun = setRawVisible_radPrintGubun;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_calBfYmdFr = rawVisible_calBfYmdFr && rawVisible_Shape7;
    const setIsVisible_calBfYmdFr = setRawVisible_calBfYmdFr;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape7;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_calBfYmdTo = rawVisible_calBfYmdTo && rawVisible_Shape7;
    const setIsVisible_calBfYmdTo = setRawVisible_calBfYmdTo;
    const isVisible_chkBfEdu = rawVisible_chkBfEdu && rawVisible_Shape7;
    const setIsVisible_chkBfEdu = setRawVisible_chkBfEdu;
    const isVisible_Shape8 = rawVisible_Shape8;
    const setIsVisible_Shape8 = setRawVisible_Shape8;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape8;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_radPerson1 = rawVisible_radPerson1 && rawVisible_Shape8;
    const setIsVisible_radPerson1 = setRawVisible_radPerson1;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape8;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_radPerson2 = rawVisible_radPerson2 && rawVisible_Shape8;
    const setIsVisible_radPerson2 = setRawVisible_radPerson2;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape8;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_radPerson3 = rawVisible_radPerson3 && rawVisible_Shape8;
    const setIsVisible_radPerson3 = setRawVisible_radPerson3;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_shpBtnBox;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape0;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion3 = rawVisible_cbxRegion3 && rawVisible_Shape0;
    const setIsVisible_cbxRegion3 = setRawVisible_cbxRegion3;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape0;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape0;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape0;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_radBusinessType = rawVisible_radBusinessType && rawVisible_Shape0;
    const setIsVisible_radBusinessType = setRawVisible_radBusinessType;
    const isVisible_cbxYear = rawVisible_cbxYear && rawVisible_Shape0;
    const setIsVisible_cbxYear = setRawVisible_cbxYear;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape0;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_Static20 = rawVisible_Static20 && rawVisible_Shape0;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_radDate = rawVisible_radDate && rawVisible_Shape0;
    const setIsVisible_radDate = setRawVisible_radDate;
    const isVisible_Static22 = rawVisible_Static22 && rawVisible_Shape0;
    const setIsVisible_Static22 = setRawVisible_Static22;
    const isVisible_calStartDate = rawVisible_calStartDate && rawVisible_Shape0;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_medMgno1 = rawVisible_medMgno1 && rawVisible_Shape0;
    const setIsVisible_medMgno1 = setRawVisible_medMgno1;
    const isVisible_medMgno2 = rawVisible_medMgno2 && rawVisible_Shape0;
    const setIsVisible_medMgno2 = setRawVisible_medMgno2;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_Shape0;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_edJoinYearMonth = rawVisible_edJoinYearMonth && rawVisible_Shape0;
    const setIsVisible_edJoinYearMonth = setRawVisible_edJoinYearMonth;
    const isVisible_Shape9 = rawVisible_Shape9;
    const setIsVisible_Shape9 = setRawVisible_Shape9;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_radExcept = rawVisible_radExcept && rawVisible_Shape9;
    const setIsVisible_radExcept = setRawVisible_radExcept;
    const isVisible_radNotEduSelect = rawVisible_radNotEduSelect && rawVisible_Shape6;
    const setIsVisible_radNotEduSelect = setRawVisible_radNotEduSelect;
    const isVisible_gdList1N = rawVisible_gdList1N;
    const setIsVisible_gdList1N = setRawVisible_gdList1N;
    const isVisible_gdList2 = rawVisible_gdList2;
    const setIsVisible_gdList2 = setRawVisible_gdList2;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape0;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Div0 = rawVisible_Div0 && rawVisible_Shape2;
    const setIsVisible_Div0 = setRawVisible_Div0;
    const isVisible_calEduYmdTo = rawVisible_calEduYmdTo && rawVisible_Shape7;
    const setIsVisible_calEduYmdTo = setRawVisible_calEduYmdTo;
    const isVisible_calEduYmdFr = rawVisible_calEduYmdFr && rawVisible_Shape7;
    const setIsVisible_calEduYmdFr = setRawVisible_calEduYmdFr;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape7;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static19 = rawVisible_Static19 && rawVisible_Shape0;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_radCnoGubun = rawVisible_radCnoGubun && rawVisible_Shape0;
    const setIsVisible_radCnoGubun = setRawVisible_radCnoGubun;
    const isVisible_Static21 = rawVisible_Static21 && rawVisible_Shape0;
    const setIsVisible_Static21 = setRawVisible_Static21;
    const isVisible_radDelGubun = rawVisible_radDelGubun && rawVisible_Shape0;
    const setIsVisible_radDelGubun = setRawVisible_radDelGubun;
    const isVisible_Static23 = rawVisible_Static23 && rawVisible_Shape0;
    const setIsVisible_Static23 = setRawVisible_Static23;
    const isVisible_gdList3 = rawVisible_gdList3;
    const setIsVisible_gdList3 = setRawVisible_gdList3;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape0;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_radIssue = rawVisible_radIssue && rawVisible_Shape0;
    const setIsVisible_radIssue = setRawVisible_radIssue;
    const isVisible_Static25 = rawVisible_Static25 && rawVisible_Shape0;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_radSuccessionGubun = rawVisible_radSuccessionGubun && rawVisible_Shape0;
    const setIsVisible_radSuccessionGubun = setRawVisible_radSuccessionGubun;
    const isVisible_Static26 = rawVisible_Static26;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_radAgencyGubun = rawVisible_radAgencyGubun && rawVisible_Shape10;
    const setIsVisible_radAgencyGubun = setRawVisible_radAgencyGubun;
    const isVisible_radGijun = rawVisible_radGijun && rawVisible_Shape0;
    const setIsVisible_radGijun = setRawVisible_radGijun;
    const isVisible_cbxBonbu = rawVisible_cbxBonbu && rawVisible_Shape0;
    const setIsVisible_cbxBonbu = setRawVisible_cbxBonbu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_Static40 = rawVisible_Static40 && rawVisible_Shape0;
    const setIsVisible_Static40 = setRawVisible_Static40;
    const isVisible_radCenter = rawVisible_radCenter && rawVisible_Shape0;
    const setIsVisible_radCenter = setRawVisible_radCenter;
    const isVisible_cbxMFCenter1 = rawVisible_cbxMFCenter1 && rawVisible_Shape0;
    const setIsVisible_cbxMFCenter1 = setRawVisible_cbxMFCenter1;
    const isVisible_cbxMFCenter3 = rawVisible_cbxMFCenter3 && rawVisible_Shape0;
    const setIsVisible_cbxMFCenter3 = setRawVisible_cbxMFCenter3;
    const isVisible_cbxMFCenter2 = rawVisible_cbxMFCenter2 && rawVisible_Shape0;
    const setIsVisible_cbxMFCenter2 = setRawVisible_cbxMFCenter2;
    const isVisible_Static41 = rawVisible_Static41 && rawVisible_Shape0;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_chkTrainingExcept = rawVisible_chkTrainingExcept && rawVisible_Shape7;
    const setIsVisible_chkTrainingExcept = setRawVisible_chkTrainingExcept;
    const isVisible_CalTrainingStart = rawVisible_CalTrainingStart && rawVisible_Shape7;
    const setIsVisible_CalTrainingStart = setRawVisible_CalTrainingStart;
    const isVisible_Static44 = rawVisible_Static44 && rawVisible_Shape7;
    const setIsVisible_Static44 = setRawVisible_Static44;
    const isVisible_CalTrainingEnd = rawVisible_CalTrainingEnd && rawVisible_Shape7;
    const setIsVisible_CalTrainingEnd = setRawVisible_CalTrainingEnd;
    const isVisible_gdList1Y = rawVisible_gdList1Y;
    const setIsVisible_gdList1Y = setRawVisible_gdList1Y;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioReport([]);
            setds_ioYear([]);
            setds_ioChoiceYn([]);
            setds_ioMemberGubun([]);
            setds_ioCourse([]);
            setds_ioOrder([]);
            setds_ioJibu([]);
            setds_ioEduGubun([]);
            setds_ioOrder_0([]);
            setds_ioChoiceYn_0([]);
            setds_ioCourseYn([]);
            setds_ioEduYear([]);
            setds_oRegion([]);
            setds_oAdditionInfo([]);
            setds_ioOrder3([]);
            setds_SearchJogeon([]);
            setds_EduList1([]);
            setds_EduList3([]);
            setds_EduList2([]);
            setds_ioPrintGubun([]);
            setds_ioIssue([]);
            setds_ioSuccessionGubun([]);
            setds_ioAgencyGubun([]);
            setds_ioGijun([]);
            setds_ioChoice([]);
            setds_oBonbu([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireCenterCd2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const chkBfEdu_OnClick = () => {
        console.log('chkBfEdu_OnClick clicked');
    };
    const chkTrainingExcept_OnClick = () => {
        console.log('chkTrainingExcept_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioReport,
        ds_ioYear,
        ds_ioChoiceYn,
        ds_ioMemberGubun,
        ds_ioCourse,
        ds_ioOrder,
        ds_ioJibu,
        ds_ioEduGubun,
        ds_ioOrder_0,
        ds_ioChoiceYn_0,
        ds_ioCourseYn,
        ds_ioEduYear,
        ds_oRegion,
        ds_oAdditionInfo,
        ds_ioOrder3,
        ds_SearchJogeon,
        ds_EduList1,
        ds_EduList3,
        ds_EduList2,
        ds_ioPrintGubun,
        ds_ioIssue,
        ds_ioSuccessionGubun,
        ds_ioAgencyGubun,
        ds_ioGijun,
        ds_ioChoice,
        ds_oBonbu,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireCenterCd2,
        isVisible_Shape10,
        setIsVisible_Shape10,
        isVisible_Shape7,
        setIsVisible_Shape7,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_lbMgno,
        setIsVisible_lbMgno,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radEduGubun,
        setIsVisible_radEduGubun,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_stEduYear,
        setIsVisible_stEduYear,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_radPrintGubun,
        setIsVisible_radPrintGubun,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_calBfYmdFr,
        setIsVisible_calBfYmdFr,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_calBfYmdTo,
        setIsVisible_calBfYmdTo,
        isVisible_chkBfEdu,
        setIsVisible_chkBfEdu,
        isVisible_Shape8,
        setIsVisible_Shape8,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_radPerson1,
        setIsVisible_radPerson1,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_radPerson2,
        setIsVisible_radPerson2,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_radPerson3,
        setIsVisible_radPerson3,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion3,
        setIsVisible_cbxRegion3,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_cbxBusinessType1,
        setIsVisible_cbxBusinessType1,
        isVisible_radBusinessType,
        setIsVisible_radBusinessType,
        isVisible_cbxYear,
        setIsVisible_cbxYear,
        isVisible_radMgno,
        setIsVisible_radMgno,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_radDate,
        setIsVisible_radDate,
        isVisible_Static22,
        setIsVisible_Static22,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_medMgno1,
        setIsVisible_medMgno1,
        isVisible_medMgno2,
        setIsVisible_medMgno2,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_cbxBusinessType2,
        setIsVisible_cbxBusinessType2,
        isVisible_edJoinYearMonth,
        setIsVisible_edJoinYearMonth,
        isVisible_Shape9,
        setIsVisible_Shape9,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_radExcept,
        setIsVisible_radExcept,
        isVisible_radNotEduSelect,
        setIsVisible_radNotEduSelect,
        isVisible_gdList1N,
        setIsVisible_gdList1N,
        isVisible_gdList2,
        setIsVisible_gdList2,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Div0,
        setIsVisible_Div0,
        isVisible_calEduYmdTo,
        setIsVisible_calEduYmdTo,
        isVisible_calEduYmdFr,
        setIsVisible_calEduYmdFr,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_radCnoGubun,
        setIsVisible_radCnoGubun,
        isVisible_Static21,
        setIsVisible_Static21,
        isVisible_radDelGubun,
        setIsVisible_radDelGubun,
        isVisible_Static23,
        setIsVisible_Static23,
        isVisible_gdList3,
        setIsVisible_gdList3,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_radIssue,
        setIsVisible_radIssue,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_radSuccessionGubun,
        setIsVisible_radSuccessionGubun,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_radAgencyGubun,
        setIsVisible_radAgencyGubun,
        isVisible_radGijun,
        setIsVisible_radGijun,
        isVisible_cbxBonbu,
        setIsVisible_cbxBonbu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cbxRegion1,
        setIsVisible_cbxRegion1,
        isVisible_Static40,
        setIsVisible_Static40,
        isVisible_radCenter,
        setIsVisible_radCenter,
        isVisible_cbxMFCenter1,
        setIsVisible_cbxMFCenter1,
        isVisible_cbxMFCenter3,
        setIsVisible_cbxMFCenter3,
        isVisible_cbxMFCenter2,
        setIsVisible_cbxMFCenter2,
        isVisible_Static41,
        setIsVisible_Static41,
        isVisible_chkTrainingExcept,
        setIsVisible_chkTrainingExcept,
        isVisible_CalTrainingStart,
        setIsVisible_CalTrainingStart,
        isVisible_Static44,
        setIsVisible_Static44,
        isVisible_CalTrainingEnd,
        setIsVisible_CalTrainingEnd,
        isVisible_gdList1Y,
        setIsVisible_gdList1Y,
        btnExcell_OnClick,
        chkBfEdu_OnClick,
        chkTrainingExcept_OnClick,
        lfn_End,
        lfn_Print,
    };
};