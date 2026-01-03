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
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_radDetailCourse, setIsVisible_radDetailCourse] = useState(true);
    const [isVisible_lbRegion, setIsVisible_lbRegion] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_lbBusinessType, setIsVisible_lbBusinessType] = useState(true);
    const [isVisible_cbxBusinessType1, setIsVisible_cbxBusinessType1] = useState(true);
    const [isVisible_cbxBusinessType2, setIsVisible_cbxBusinessType2] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_radRegion, setIsVisible_radRegion] = useState(true);
    const [isVisible_cbxRegion2, setIsVisible_cbxRegion2] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_cbxRegion3, setIsVisible_cbxRegion3] = useState(true);
    const [isVisible_cbxCourse_3, setIsVisible_cbxCourse_3] = useState(true);
    const [isVisible_cbxCourse1, setIsVisible_cbxCourse1] = useState(true);
    const [isVisible_cbxCourse_4, setIsVisible_cbxCourse_4] = useState(true);
    const [isVisible_cbxCourse_1, setIsVisible_cbxCourse_1] = useState(true);
    const [isVisible_cbxCourse_5, setIsVisible_cbxCourse_5] = useState(true);
    const [isVisible_cbxCourse_6, setIsVisible_cbxCourse_6] = useState(true);
    const [isVisible_cbxCourse_2, setIsVisible_cbxCourse_2] = useState(true);
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
    const [isVisible_cbxBusinessType_1, setIsVisible_cbxBusinessType_1] = useState(true);
    const [isVisible_cbxBusinessType_2, setIsVisible_cbxBusinessType_2] = useState(true);
    const [isVisible_cbxBusinessType_3, setIsVisible_cbxBusinessType_3] = useState(true);
    const [isVisible_cbxBusinessType_4, setIsVisible_cbxBusinessType_4] = useState(true);
    const [isVisible_cbxBusinessType_5, setIsVisible_cbxBusinessType_5] = useState(true);
    const [isVisible_cbxBusinessType_6, setIsVisible_cbxBusinessType_6] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_lbMgno, setIsVisible_lbMgno] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_cbxReportData1, setIsVisible_cbxReportData1] = useState(true);
    const [isVisible_cbxReportData2, setIsVisible_cbxReportData2] = useState(true);
    const [isVisible_meNum1, setIsVisible_meNum1] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_meNum2, setIsVisible_meNum2] = useState(true);
    const [isVisible_radMgno, setIsVisible_radMgno] = useState(true);
    const [isVisible_radReport, setIsVisible_radReport] = useState(true);
    const [isVisible_lbExpireDate1, setIsVisible_lbExpireDate1] = useState(true);
    const [isVisible_calEduExpireDate12, setIsVisible_calEduExpireDate12] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_radMemberGubun, setIsVisible_radMemberGubun] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_edEduTotalCount, setIsVisible_edEduTotalCount] = useState(true);
    const [isVisible_Static27, setIsVisible_Static27] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_calFADate, setIsVisible_calFADate] = useState(true);
    const [isVisible_Static42, setIsVisible_Static42] = useState(true);
    const [isVisible_radMinap, setIsVisible_radMinap] = useState(true);
    const [isVisible_Static45, setIsVisible_Static45] = useState(true);
    const [isVisible_radAgency, setIsVisible_radAgency] = useState(true);
    const [isVisible_calEduExpireDate11, setIsVisible_calEduExpireDate11] = useState(true);
    const [isVisible_lbExpireBetween1, setIsVisible_lbExpireBetween1] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_radName, setIsVisible_radName] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_chkDataYN1, setIsVisible_chkDataYN1] = useState(true);
    const [isVisible_chkDataYN2, setIsVisible_chkDataYN2] = useState(true);
    const [isVisible_chkDataYN3, setIsVisible_chkDataYN3] = useState(true);
    const [isVisible_chkDataYN4, setIsVisible_chkDataYN4] = useState(true);
    const [isVisible_chkDataYN5, setIsVisible_chkDataYN5] = useState(false);
    const [isVisible_btnExcelPrint1, setIsVisible_btnExcelPrint1] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_radEduJubsu, setIsVisible_radEduJubsu] = useState(true);
    const [isVisible_lbExceptDate, setIsVisible_lbExceptDate] = useState(true);
    const [isVisible_calEduExceptDate1, setIsVisible_calEduExceptDate1] = useState(true);
    const [isVisible_lbExceptBetween, setIsVisible_lbExceptBetween] = useState(true);
    const [isVisible_calEduExceptDate2, setIsVisible_calEduExceptDate2] = useState(true);
    const [isVisible_chkExceptDate, setIsVisible_chkExceptDate] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_radNotMemberFirsSecondHalf, setIsVisible_radNotMemberFirsSecondHalf] = useState(true);
    const [isVisible_radOrder, setIsVisible_radOrder] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_btnExcelPrint2, setIsVisible_btnExcelPrint2] = useState(true);
    const [isVisible_gdList2, setIsVisible_gdList2] = useState(false);
    const [isVisible_lbExpireDate2, setIsVisible_lbExpireDate2] = useState(true);
    const [isVisible_calEduExpireDate21, setIsVisible_calEduExpireDate21] = useState(true);
    const [isVisible_lbExpireBetween2, setIsVisible_lbExpireBetween2] = useState(true);
    const [isVisible_calEduExpireDate22, setIsVisible_calEduExpireDate22] = useState(true);
    const [isVisible_lbExpireDate3, setIsVisible_lbExpireDate3] = useState(true);
    const [isVisible_calEduExpireDate31, setIsVisible_calEduExpireDate31] = useState(true);
    const [isVisible_lbExpireBetween3, setIsVisible_lbExpireBetween3] = useState(true);
    const [isVisible_calEduExpireDate32, setIsVisible_calEduExpireDate32] = useState(true);
    const [isVisible_lbExpireDate4, setIsVisible_lbExpireDate4] = useState(true);
    const [isVisible_calEduExpireDate41, setIsVisible_calEduExpireDate41] = useState(true);
    const [isVisible_lbExpireBetween4, setIsVisible_lbExpireBetween4] = useState(true);
    const [isVisible_calEduExpireDate42, setIsVisible_calEduExpireDate42] = useState(true);
    const [isVisible_lbTrainingDate, setIsVisible_lbTrainingDate] = useState(false);
    const [isVisible_chkTrainingExcept, setIsVisible_chkTrainingExcept] = useState(false);
    const [isVisible_CalTrainingStart, setIsVisible_CalTrainingStart] = useState(true);
    const [isVisible_lbTrainingBetween, setIsVisible_lbTrainingBetween] = useState(true);
    const [isVisible_CalTrainingEnd, setIsVisible_CalTrainingEnd] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_radNoIsuGubun, setIsVisible_radNoIsuGubun] = useState(true);

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