// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oRegion, Ids_SearchJogeon, Ids_oPrintGubun, Ids_ioChoiceYn, Ids_SendReport, Ids_oCourse, Ids_ioGijun, Ids_ioChoice, Ids_oBonbu, Ids_oFireCd, Ids_oFireCenterCd, Ids_oFireCenterCd2, Ids_ioCourseYn_0, Ids_ioCourseYn_1, Ids_ioChoiceYn_0, Ids_ioCourseYn_2, Ids_oBizCd, Ids_oDetailCourse, Ids_ioChoiceYn_1, Ids_ioMemberGubun, Ids_ioChoiceYnReport, Ids_ioMEduData, Ids_oMinap, Ids_oAgency, Ids_ioMEduDataDetail, Ids_ioMEduExcel, Ids_oEduJubsu, Ids_ioOrder, Ids_ioYearHalf, Ids_oNoIsuGubun } from './Frmcust1107MFireDefDMDataData';

export const useFrmcust1107MFireDefDMData = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_SendReport, setds_SendReport] = useState<Ids_SendReport[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioGijun, setds_ioGijun] = useState<Ids_ioGijun[]>([]);
    const [ds_ioChoice, setds_ioChoice] = useState<Ids_ioChoice[]>([]);
    const [ds_oBonbu, setds_oBonbu] = useState<Ids_oBonbu[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oFireCenterCd2, setds_oFireCenterCd2] = useState<Ids_oFireCenterCd2[]>([]);
    const [ds_ioCourseYn_0, setds_ioCourseYn_0] = useState<Ids_ioCourseYn_0[]>([]);
    const [ds_ioCourseYn_1, setds_ioCourseYn_1] = useState<Ids_ioCourseYn_1[]>([]);
    const [ds_ioChoiceYn_0, setds_ioChoiceYn_0] = useState<Ids_ioChoiceYn_0[]>([]);
    const [ds_ioCourseYn_2, setds_ioCourseYn_2] = useState<Ids_ioCourseYn_2[]>([]);
    const [ds_oBizCd, setds_oBizCd] = useState<Ids_oBizCd[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_ioChoiceYn_1, setds_ioChoiceYn_1] = useState<Ids_ioChoiceYn_1[]>([]);
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioChoiceYnReport, setds_ioChoiceYnReport] = useState<Ids_ioChoiceYnReport[]>([]);
    const [ds_ioMEduData, setds_ioMEduData] = useState<Ids_ioMEduData[]>([]);
    const [ds_oMinap, setds_oMinap] = useState<Ids_oMinap[]>([]);
    const [ds_oAgency, setds_oAgency] = useState<Ids_oAgency[]>([]);
    const [ds_ioMEduDataDetail, setds_ioMEduDataDetail] = useState<Ids_ioMEduDataDetail[]>([]);
    const [ds_ioMEduExcel, setds_ioMEduExcel] = useState<Ids_ioMEduExcel[]>([]);
    const [ds_oEduJubsu, setds_oEduJubsu] = useState<Ids_oEduJubsu[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioYearHalf, setds_ioYearHalf] = useState<Ids_ioYearHalf[]>([]);
    const [ds_oNoIsuGubun, setds_oNoIsuGubun] = useState<Ids_oNoIsuGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_radDetailCourse, setRawVisible_radDetailCourse] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbBusinessType, setRawVisible_lbBusinessType] = useState(true);
    const [rawVisible_cbxBusinessType1, setRawVisible_cbxBusinessType1] = useState(true);
    const [rawVisible_cbxBusinessType2, setRawVisible_cbxBusinessType2] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_radRegion, setRawVisible_radRegion] = useState(true);
    const [rawVisible_cbxRegion2, setRawVisible_cbxRegion2] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_cbxRegion3, setRawVisible_cbxRegion3] = useState(true);
    const [rawVisible_cbxCourse_3, setRawVisible_cbxCourse_3] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_cbxCourse_4, setRawVisible_cbxCourse_4] = useState(true);
    const [rawVisible_cbxCourse_1, setRawVisible_cbxCourse_1] = useState(true);
    const [rawVisible_cbxCourse_5, setRawVisible_cbxCourse_5] = useState(true);
    const [rawVisible_cbxCourse_6, setRawVisible_cbxCourse_6] = useState(true);
    const [rawVisible_cbxCourse_2, setRawVisible_cbxCourse_2] = useState(true);
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
    const [rawVisible_cbxBusinessType_1, setRawVisible_cbxBusinessType_1] = useState(true);
    const [rawVisible_cbxBusinessType_2, setRawVisible_cbxBusinessType_2] = useState(true);
    const [rawVisible_cbxBusinessType_3, setRawVisible_cbxBusinessType_3] = useState(true);
    const [rawVisible_cbxBusinessType_4, setRawVisible_cbxBusinessType_4] = useState(true);
    const [rawVisible_cbxBusinessType_5, setRawVisible_cbxBusinessType_5] = useState(true);
    const [rawVisible_cbxBusinessType_6, setRawVisible_cbxBusinessType_6] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_cbxReportData1, setRawVisible_cbxReportData1] = useState(true);
    const [rawVisible_cbxReportData2, setRawVisible_cbxReportData2] = useState(true);
    const [rawVisible_meNum1, setRawVisible_meNum1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_meNum2, setRawVisible_meNum2] = useState(true);
    const [rawVisible_radMgno, setRawVisible_radMgno] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_lbExpireDate1, setRawVisible_lbExpireDate1] = useState(true);
    const [rawVisible_calEduExpireDate12, setRawVisible_calEduExpireDate12] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_edEduTotalCount, setRawVisible_edEduTotalCount] = useState(true);
    const [rawVisible_Static27, setRawVisible_Static27] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_calFADate, setRawVisible_calFADate] = useState(true);
    const [rawVisible_Static42, setRawVisible_Static42] = useState(true);
    const [rawVisible_radMinap, setRawVisible_radMinap] = useState(true);
    const [rawVisible_Static45, setRawVisible_Static45] = useState(true);
    const [rawVisible_radAgency, setRawVisible_radAgency] = useState(true);
    const [rawVisible_calEduExpireDate11, setRawVisible_calEduExpireDate11] = useState(true);
    const [rawVisible_lbExpireBetween1, setRawVisible_lbExpireBetween1] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_radName, setRawVisible_radName] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_chkDataYN1, setRawVisible_chkDataYN1] = useState(true);
    const [rawVisible_chkDataYN2, setRawVisible_chkDataYN2] = useState(true);
    const [rawVisible_chkDataYN3, setRawVisible_chkDataYN3] = useState(true);
    const [rawVisible_chkDataYN4, setRawVisible_chkDataYN4] = useState(true);
    const [rawVisible_chkDataYN5, setRawVisible_chkDataYN5] = useState(false);
    const [rawVisible_btnExcelPrint1, setRawVisible_btnExcelPrint1] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_radEduJubsu, setRawVisible_radEduJubsu] = useState(true);
    const [rawVisible_lbExceptDate, setRawVisible_lbExceptDate] = useState(true);
    const [rawVisible_calEduExceptDate1, setRawVisible_calEduExceptDate1] = useState(true);
    const [rawVisible_lbExceptBetween, setRawVisible_lbExceptBetween] = useState(true);
    const [rawVisible_calEduExceptDate2, setRawVisible_calEduExceptDate2] = useState(true);
    const [rawVisible_chkExceptDate, setRawVisible_chkExceptDate] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_radNotMemberFirsSecondHalf, setRawVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_Static20, setRawVisible_Static20] = useState(true);
    const [rawVisible_btnExcelPrint2, setRawVisible_btnExcelPrint2] = useState(true);
    const [rawVisible_gdList2, setRawVisible_gdList2] = useState(false);
    const [rawVisible_lbExpireDate2, setRawVisible_lbExpireDate2] = useState(true);
    const [rawVisible_calEduExpireDate21, setRawVisible_calEduExpireDate21] = useState(true);
    const [rawVisible_lbExpireBetween2, setRawVisible_lbExpireBetween2] = useState(true);
    const [rawVisible_calEduExpireDate22, setRawVisible_calEduExpireDate22] = useState(true);
    const [rawVisible_lbExpireDate3, setRawVisible_lbExpireDate3] = useState(true);
    const [rawVisible_calEduExpireDate31, setRawVisible_calEduExpireDate31] = useState(true);
    const [rawVisible_lbExpireBetween3, setRawVisible_lbExpireBetween3] = useState(true);
    const [rawVisible_calEduExpireDate32, setRawVisible_calEduExpireDate32] = useState(true);
    const [rawVisible_lbExpireDate4, setRawVisible_lbExpireDate4] = useState(true);
    const [rawVisible_calEduExpireDate41, setRawVisible_calEduExpireDate41] = useState(true);
    const [rawVisible_lbExpireBetween4, setRawVisible_lbExpireBetween4] = useState(true);
    const [rawVisible_calEduExpireDate42, setRawVisible_calEduExpireDate42] = useState(true);
    const [rawVisible_lbTrainingDate, setRawVisible_lbTrainingDate] = useState(false);
    const [rawVisible_chkTrainingExcept, setRawVisible_chkTrainingExcept] = useState(false);
    const [rawVisible_CalTrainingStart, setRawVisible_CalTrainingStart] = useState(true);
    const [rawVisible_lbTrainingBetween, setRawVisible_lbTrainingBetween] = useState(true);
    const [rawVisible_CalTrainingEnd, setRawVisible_CalTrainingEnd] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radNoIsuGubun, setRawVisible_radNoIsuGubun] = useState(true);
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_radDetailCourse = rawVisible_radDetailCourse && rawVisible_Shape0;
    const setIsVisible_radDetailCourse = setRawVisible_radDetailCourse;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape0;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbBusinessType = rawVisible_lbBusinessType && rawVisible_Shape0;
    const setIsVisible_lbBusinessType = setRawVisible_lbBusinessType;
    const isVisible_cbxBusinessType1 = rawVisible_cbxBusinessType1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType1 = setRawVisible_cbxBusinessType1;
    const isVisible_cbxBusinessType2 = rawVisible_cbxBusinessType2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType2 = setRawVisible_cbxBusinessType2;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape0;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_radRegion = rawVisible_radRegion && rawVisible_Shape0;
    const setIsVisible_radRegion = setRawVisible_radRegion;
    const isVisible_cbxRegion2 = rawVisible_cbxRegion2 && rawVisible_Shape0;
    const setIsVisible_cbxRegion2 = setRawVisible_cbxRegion2;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_cbxRegion3 = rawVisible_cbxRegion3 && rawVisible_Shape0;
    const setIsVisible_cbxRegion3 = setRawVisible_cbxRegion3;
    const isVisible_cbxCourse_3 = rawVisible_cbxCourse_3 && rawVisible_Shape0;
    const setIsVisible_cbxCourse_3 = setRawVisible_cbxCourse_3;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_cbxCourse_4 = rawVisible_cbxCourse_4 && rawVisible_Shape0;
    const setIsVisible_cbxCourse_4 = setRawVisible_cbxCourse_4;
    const isVisible_cbxCourse_1 = rawVisible_cbxCourse_1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse_1 = setRawVisible_cbxCourse_1;
    const isVisible_cbxCourse_5 = rawVisible_cbxCourse_5 && rawVisible_Shape0;
    const setIsVisible_cbxCourse_5 = setRawVisible_cbxCourse_5;
    const isVisible_cbxCourse_6 = rawVisible_cbxCourse_6 && rawVisible_Shape0;
    const setIsVisible_cbxCourse_6 = setRawVisible_cbxCourse_6;
    const isVisible_cbxCourse_2 = rawVisible_cbxCourse_2 && rawVisible_Shape0;
    const setIsVisible_cbxCourse_2 = setRawVisible_cbxCourse_2;
    const isVisible_radBiz = rawVisible_radBiz && rawVisible_Shape0;
    const setIsVisible_radBiz = setRawVisible_radBiz;
    const isVisible_radGijun = rawVisible_radGijun && rawVisible_Shape0;
    const setIsVisible_radGijun = setRawVisible_radGijun;
    const isVisible_cbxBonbu = rawVisible_cbxBonbu && rawVisible_Shape0;
    const setIsVisible_cbxBonbu = setRawVisible_cbxBonbu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxMFCenter2 = rawVisible_cbxMFCenter2 && rawVisible_Shape0;
    const setIsVisible_cbxMFCenter2 = setRawVisible_cbxMFCenter2;
    const isVisible_cbxRegion1 = rawVisible_cbxRegion1 && rawVisible_Shape0;
    const setIsVisible_cbxRegion1 = setRawVisible_cbxRegion1;
    const isVisible_Static40 = rawVisible_Static40 && rawVisible_Shape0;
    const setIsVisible_Static40 = setRawVisible_Static40;
    const isVisible_Static41 = rawVisible_Static41 && rawVisible_Shape0;
    const setIsVisible_Static41 = setRawVisible_Static41;
    const isVisible_cbxMFCenter3 = rawVisible_cbxMFCenter3 && rawVisible_Shape0;
    const setIsVisible_cbxMFCenter3 = setRawVisible_cbxMFCenter3;
    const isVisible_radCenter = rawVisible_radCenter && rawVisible_Shape0;
    const setIsVisible_radCenter = setRawVisible_radCenter;
    const isVisible_cbxMFCenter1 = rawVisible_cbxMFCenter1 && rawVisible_Shape0;
    const setIsVisible_cbxMFCenter1 = setRawVisible_cbxMFCenter1;
    const isVisible_cbxBusinessType_1 = rawVisible_cbxBusinessType_1 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType_1 = setRawVisible_cbxBusinessType_1;
    const isVisible_cbxBusinessType_2 = rawVisible_cbxBusinessType_2 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType_2 = setRawVisible_cbxBusinessType_2;
    const isVisible_cbxBusinessType_3 = rawVisible_cbxBusinessType_3 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType_3 = setRawVisible_cbxBusinessType_3;
    const isVisible_cbxBusinessType_4 = rawVisible_cbxBusinessType_4 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType_4 = setRawVisible_cbxBusinessType_4;
    const isVisible_cbxBusinessType_5 = rawVisible_cbxBusinessType_5 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType_5 = setRawVisible_cbxBusinessType_5;
    const isVisible_cbxBusinessType_6 = rawVisible_cbxBusinessType_6 && rawVisible_Shape0;
    const setIsVisible_cbxBusinessType_6 = setRawVisible_cbxBusinessType_6;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape0;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape0;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape0;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_cbxReportData1 = rawVisible_cbxReportData1 && rawVisible_Shape0;
    const setIsVisible_cbxReportData1 = setRawVisible_cbxReportData1;
    const isVisible_cbxReportData2 = rawVisible_cbxReportData2 && rawVisible_Shape0;
    const setIsVisible_cbxReportData2 = setRawVisible_cbxReportData2;
    const isVisible_meNum1 = rawVisible_meNum1 && rawVisible_Shape0;
    const setIsVisible_meNum1 = setRawVisible_meNum1;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_meNum2 = rawVisible_meNum2 && rawVisible_Shape0;
    const setIsVisible_meNum2 = setRawVisible_meNum2;
    const isVisible_radMgno = rawVisible_radMgno && rawVisible_Shape0;
    const setIsVisible_radMgno = setRawVisible_radMgno;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape0;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_lbExpireDate1 = rawVisible_lbExpireDate1 && rawVisible_Shape0;
    const setIsVisible_lbExpireDate1 = setRawVisible_lbExpireDate1;
    const isVisible_calEduExpireDate12 = rawVisible_calEduExpireDate12 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate12 = setRawVisible_calEduExpireDate12;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_edEduTotalCount = rawVisible_edEduTotalCount && rawVisible_Shape1;
    const setIsVisible_edEduTotalCount = setRawVisible_edEduTotalCount;
    const isVisible_Static27 = rawVisible_Static27 && rawVisible_Shape1;
    const setIsVisible_Static27 = setRawVisible_Static27;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt && rawVisible_Shape1;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_calFADate = rawVisible_calFADate && rawVisible_shpBtnBox;
    const setIsVisible_calFADate = setRawVisible_calFADate;
    const isVisible_Static42 = rawVisible_Static42 && rawVisible_Shape0;
    const setIsVisible_Static42 = setRawVisible_Static42;
    const isVisible_radMinap = rawVisible_radMinap && rawVisible_Shape0;
    const setIsVisible_radMinap = setRawVisible_radMinap;
    const isVisible_Static45 = rawVisible_Static45 && rawVisible_Shape0;
    const setIsVisible_Static45 = setRawVisible_Static45;
    const isVisible_radAgency = rawVisible_radAgency && rawVisible_Shape0;
    const setIsVisible_radAgency = setRawVisible_radAgency;
    const isVisible_calEduExpireDate11 = rawVisible_calEduExpireDate11 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate11 = setRawVisible_calEduExpireDate11;
    const isVisible_lbExpireBetween1 = rawVisible_lbExpireBetween1 && rawVisible_Shape0;
    const setIsVisible_lbExpireBetween1 = setRawVisible_lbExpireBetween1;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape4;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_radName = rawVisible_radName && rawVisible_Shape4;
    const setIsVisible_radName = setRawVisible_radName;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape2;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Shape6 = rawVisible_Shape6 && rawVisible_Shape2;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_chkDataYN1 = rawVisible_chkDataYN1 && rawVisible_Shape6;
    const setIsVisible_chkDataYN1 = setRawVisible_chkDataYN1;
    const isVisible_chkDataYN2 = rawVisible_chkDataYN2 && rawVisible_Shape6;
    const setIsVisible_chkDataYN2 = setRawVisible_chkDataYN2;
    const isVisible_chkDataYN3 = rawVisible_chkDataYN3 && rawVisible_Shape6;
    const setIsVisible_chkDataYN3 = setRawVisible_chkDataYN3;
    const isVisible_chkDataYN4 = rawVisible_chkDataYN4 && rawVisible_Shape6;
    const setIsVisible_chkDataYN4 = setRawVisible_chkDataYN4;
    const isVisible_chkDataYN5 = rawVisible_chkDataYN5 && rawVisible_Shape2;
    const setIsVisible_chkDataYN5 = setRawVisible_chkDataYN5;
    const isVisible_btnExcelPrint1 = rawVisible_btnExcelPrint1 && rawVisible_Shape1;
    const setIsVisible_btnExcelPrint1 = setRawVisible_btnExcelPrint1;
    const isVisible_Static17 = rawVisible_Static17 && rawVisible_Shape2;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_radEduJubsu = rawVisible_radEduJubsu && rawVisible_Shape2;
    const setIsVisible_radEduJubsu = setRawVisible_radEduJubsu;
    const isVisible_lbExceptDate = rawVisible_lbExceptDate && rawVisible_Shape0;
    const setIsVisible_lbExceptDate = setRawVisible_lbExceptDate;
    const isVisible_calEduExceptDate1 = rawVisible_calEduExceptDate1 && rawVisible_Shape0;
    const setIsVisible_calEduExceptDate1 = setRawVisible_calEduExceptDate1;
    const isVisible_lbExceptBetween = rawVisible_lbExceptBetween && rawVisible_Shape0;
    const setIsVisible_lbExceptBetween = setRawVisible_lbExceptBetween;
    const isVisible_calEduExceptDate2 = rawVisible_calEduExceptDate2 && rawVisible_Shape0;
    const setIsVisible_calEduExceptDate2 = setRawVisible_calEduExceptDate2;
    const isVisible_chkExceptDate = rawVisible_chkExceptDate && rawVisible_Shape0;
    const setIsVisible_chkExceptDate = setRawVisible_chkExceptDate;
    const isVisible_Static18 = rawVisible_Static18 && rawVisible_Shape0;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_radNotMemberFirsSecondHalf = rawVisible_radNotMemberFirsSecondHalf && rawVisible_Shape0;
    const setIsVisible_radNotMemberFirsSecondHalf = setRawVisible_radNotMemberFirsSecondHalf;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape3;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_Static20 = rawVisible_Static20;
    const setIsVisible_Static20 = setRawVisible_Static20;
    const isVisible_btnExcelPrint2 = rawVisible_btnExcelPrint2 && rawVisible_Shape1;
    const setIsVisible_btnExcelPrint2 = setRawVisible_btnExcelPrint2;
    const isVisible_gdList2 = rawVisible_gdList2;
    const setIsVisible_gdList2 = setRawVisible_gdList2;
    const isVisible_lbExpireDate2 = rawVisible_lbExpireDate2 && rawVisible_Shape0;
    const setIsVisible_lbExpireDate2 = setRawVisible_lbExpireDate2;
    const isVisible_calEduExpireDate21 = rawVisible_calEduExpireDate21 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate21 = setRawVisible_calEduExpireDate21;
    const isVisible_lbExpireBetween2 = rawVisible_lbExpireBetween2 && rawVisible_Shape0;
    const setIsVisible_lbExpireBetween2 = setRawVisible_lbExpireBetween2;
    const isVisible_calEduExpireDate22 = rawVisible_calEduExpireDate22 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate22 = setRawVisible_calEduExpireDate22;
    const isVisible_lbExpireDate3 = rawVisible_lbExpireDate3 && rawVisible_Shape0;
    const setIsVisible_lbExpireDate3 = setRawVisible_lbExpireDate3;
    const isVisible_calEduExpireDate31 = rawVisible_calEduExpireDate31 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate31 = setRawVisible_calEduExpireDate31;
    const isVisible_lbExpireBetween3 = rawVisible_lbExpireBetween3 && rawVisible_Shape0;
    const setIsVisible_lbExpireBetween3 = setRawVisible_lbExpireBetween3;
    const isVisible_calEduExpireDate32 = rawVisible_calEduExpireDate32 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate32 = setRawVisible_calEduExpireDate32;
    const isVisible_lbExpireDate4 = rawVisible_lbExpireDate4 && rawVisible_Shape0;
    const setIsVisible_lbExpireDate4 = setRawVisible_lbExpireDate4;
    const isVisible_calEduExpireDate41 = rawVisible_calEduExpireDate41 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate41 = setRawVisible_calEduExpireDate41;
    const isVisible_lbExpireBetween4 = rawVisible_lbExpireBetween4 && rawVisible_Shape0;
    const setIsVisible_lbExpireBetween4 = setRawVisible_lbExpireBetween4;
    const isVisible_calEduExpireDate42 = rawVisible_calEduExpireDate42 && rawVisible_Shape0;
    const setIsVisible_calEduExpireDate42 = setRawVisible_calEduExpireDate42;
    const isVisible_lbTrainingDate = rawVisible_lbTrainingDate && rawVisible_Shape0;
    const setIsVisible_lbTrainingDate = setRawVisible_lbTrainingDate;
    const isVisible_chkTrainingExcept = rawVisible_chkTrainingExcept && rawVisible_Shape0;
    const setIsVisible_chkTrainingExcept = setRawVisible_chkTrainingExcept;
    const isVisible_CalTrainingStart = rawVisible_CalTrainingStart && rawVisible_Shape0;
    const setIsVisible_CalTrainingStart = setRawVisible_CalTrainingStart;
    const isVisible_lbTrainingBetween = rawVisible_lbTrainingBetween && rawVisible_Shape0;
    const setIsVisible_lbTrainingBetween = setRawVisible_lbTrainingBetween;
    const isVisible_CalTrainingEnd = rawVisible_CalTrainingEnd && rawVisible_Shape0;
    const setIsVisible_CalTrainingEnd = setRawVisible_CalTrainingEnd;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radNoIsuGubun = rawVisible_radNoIsuGubun && rawVisible_Shape0;
    const setIsVisible_radNoIsuGubun = setRawVisible_radNoIsuGubun;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oRegion([]);
            setds_SearchJogeon([]);
            setds_oPrintGubun([]);
            setds_ioChoiceYn([]);
            setds_SendReport([]);
            setds_oCourse([]);
            setds_ioGijun([]);
            setds_ioChoice([]);
            setds_oBonbu([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oFireCenterCd2([]);
            setds_ioCourseYn_0([]);
            setds_ioCourseYn_1([]);
            setds_ioChoiceYn_0([]);
            setds_ioCourseYn_2([]);
            setds_oBizCd([]);
            setds_oDetailCourse([]);
            setds_ioChoiceYn_1([]);
            setds_ioMemberGubun([]);
            setds_ioChoiceYnReport([]);
            setds_ioMEduData([]);
            setds_oMinap([]);
            setds_oAgency([]);
            setds_ioMEduDataDetail([]);
            setds_ioMEduExcel([]);
            setds_oEduJubsu([]);
            setds_ioOrder([]);
            setds_ioYearHalf([]);
            setds_oNoIsuGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcelPrint1_OnClick = () => {
        console.log('btnExcelPrint1_OnClick clicked');
    };
    const btnExcelPrint2_OnClick = () => {
        console.log('btnExcelPrint2_OnClick clicked');
    };
    const btnSetlmt_OnClick = () => {
        console.log('btnSetlmt_OnClick clicked');
    };
    const chkExceptDate_OnClick = () => {
        console.log('chkExceptDate_OnClick clicked');
    };
    const chkTrainingExcept_OnClick = () => {
        console.log('chkTrainingExcept_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const radAgency_OnClick = () => {
        console.log('radAgency_OnClick clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oRegion,
        ds_SearchJogeon,
        ds_oPrintGubun,
        ds_ioChoiceYn,
        ds_SendReport,
        ds_oCourse,
        ds_ioGijun,
        ds_ioChoice,
        ds_oBonbu,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oFireCenterCd2,
        ds_ioCourseYn_0,
        ds_ioCourseYn_1,
        ds_ioChoiceYn_0,
        ds_ioCourseYn_2,
        ds_oBizCd,
        ds_oDetailCourse,
        ds_ioChoiceYn_1,
        ds_ioMemberGubun,
        ds_ioChoiceYnReport,
        ds_ioMEduData,
        ds_oMinap,
        ds_oAgency,
        ds_ioMEduDataDetail,
        ds_ioMEduExcel,
        ds_oEduJubsu,
        ds_ioOrder,
        ds_ioYearHalf,
        ds_oNoIsuGubun,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_radDetailCourse,
        setIsVisible_radDetailCourse,
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
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radRegion,
        setIsVisible_radRegion,
        isVisible_cbxRegion2,
        setIsVisible_cbxRegion2,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_cbxRegion3,
        setIsVisible_cbxRegion3,
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
        isVisible_Static6,
        setIsVisible_Static6,
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
        isVisible_lbExpireDate1,
        setIsVisible_lbExpireDate1,
        isVisible_calEduExpireDate12,
        setIsVisible_calEduExpireDate12,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_edEduTotalCount,
        setIsVisible_edEduTotalCount,
        isVisible_Static27,
        setIsVisible_Static27,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
        isVisible_calFADate,
        setIsVisible_calFADate,
        isVisible_Static42,
        setIsVisible_Static42,
        isVisible_radMinap,
        setIsVisible_radMinap,
        isVisible_Static45,
        setIsVisible_Static45,
        isVisible_radAgency,
        setIsVisible_radAgency,
        isVisible_calEduExpireDate11,
        setIsVisible_calEduExpireDate11,
        isVisible_lbExpireBetween1,
        setIsVisible_lbExpireBetween1,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_radName,
        setIsVisible_radName,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_chkDataYN1,
        setIsVisible_chkDataYN1,
        isVisible_chkDataYN2,
        setIsVisible_chkDataYN2,
        isVisible_chkDataYN3,
        setIsVisible_chkDataYN3,
        isVisible_chkDataYN4,
        setIsVisible_chkDataYN4,
        isVisible_chkDataYN5,
        setIsVisible_chkDataYN5,
        isVisible_btnExcelPrint1,
        setIsVisible_btnExcelPrint1,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_radEduJubsu,
        setIsVisible_radEduJubsu,
        isVisible_lbExceptDate,
        setIsVisible_lbExceptDate,
        isVisible_calEduExceptDate1,
        setIsVisible_calEduExceptDate1,
        isVisible_lbExceptBetween,
        setIsVisible_lbExceptBetween,
        isVisible_calEduExceptDate2,
        setIsVisible_calEduExceptDate2,
        isVisible_chkExceptDate,
        setIsVisible_chkExceptDate,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_radNotMemberFirsSecondHalf,
        setIsVisible_radNotMemberFirsSecondHalf,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_Static20,
        setIsVisible_Static20,
        isVisible_btnExcelPrint2,
        setIsVisible_btnExcelPrint2,
        isVisible_gdList2,
        setIsVisible_gdList2,
        isVisible_lbExpireDate2,
        setIsVisible_lbExpireDate2,
        isVisible_calEduExpireDate21,
        setIsVisible_calEduExpireDate21,
        isVisible_lbExpireBetween2,
        setIsVisible_lbExpireBetween2,
        isVisible_calEduExpireDate22,
        setIsVisible_calEduExpireDate22,
        isVisible_lbExpireDate3,
        setIsVisible_lbExpireDate3,
        isVisible_calEduExpireDate31,
        setIsVisible_calEduExpireDate31,
        isVisible_lbExpireBetween3,
        setIsVisible_lbExpireBetween3,
        isVisible_calEduExpireDate32,
        setIsVisible_calEduExpireDate32,
        isVisible_lbExpireDate4,
        setIsVisible_lbExpireDate4,
        isVisible_calEduExpireDate41,
        setIsVisible_calEduExpireDate41,
        isVisible_lbExpireBetween4,
        setIsVisible_lbExpireBetween4,
        isVisible_calEduExpireDate42,
        setIsVisible_calEduExpireDate42,
        isVisible_lbTrainingDate,
        setIsVisible_lbTrainingDate,
        isVisible_chkTrainingExcept,
        setIsVisible_chkTrainingExcept,
        isVisible_CalTrainingStart,
        setIsVisible_CalTrainingStart,
        isVisible_lbTrainingBetween,
        setIsVisible_lbTrainingBetween,
        isVisible_CalTrainingEnd,
        setIsVisible_CalTrainingEnd,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radNoIsuGubun,
        setIsVisible_radNoIsuGubun,
        btnExcelPrint1_OnClick,
        btnExcelPrint2_OnClick,
        btnSetlmt_OnClick,
        chkExceptDate_OnClick,
        chkTrainingExcept_OnClick,
        lfn_End,
        lfn_Search,
        radAgency_OnClick,
    };
};