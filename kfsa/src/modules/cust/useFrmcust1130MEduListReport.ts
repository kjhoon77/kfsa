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
    const [isVisible_Shape10, setIsVisible_Shape10] = useState(true);
    const [isVisible_Shape7, setIsVisible_Shape7] = useState(true);
    const [isVisible_Shape6, setIsVisible_Shape6] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_lbMgno, setIsVisible_lbMgno] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_radOrder, setIsVisible_radOrder] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_radReport, setIsVisible_radReport] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_radEduGubun, setIsVisible_radEduGubun] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_stEduYear, setIsVisible_stEduYear] = useState(true);
    const [isVisible_Shape5, setIsVisible_Shape5] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_radPrintGubun, setIsVisible_radPrintGubun] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_calBfYmdFr, setIsVisible_calBfYmdFr] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_calBfYmdTo, setIsVisible_calBfYmdTo] = useState(true);
    const [isVisible_chkBfEdu, setIsVisible_chkBfEdu] = useState(true);
    const [isVisible_Shape8, setIsVisible_Shape8] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_radPerson1, setIsVisible_radPerson1] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_radPerson2, setIsVisible_radPerson2] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_radPerson3, setIsVisible_radPerson3] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(true);
    const [isVisible_lbYear, setIsVisible_lbYear] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_lbRegion, setIsVisible_lbRegion] = useState(true);
    const [isVisible_cbxRegion2, setIsVisible_cbxRegion2] = useState(true);
    const [isVisible_radRegion, setIsVisible_radRegion] = useState(true);
    const [isVisible_cbxRegion3, setIsVisible_cbxRegion3] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_lbMemberGubun, setIsVisible_lbMemberGubun] = useState(true);
    const [isVisible_radMemberGubun, setIsVisible_radMemberGubun] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_cbxBusinessType1, setIsVisible_cbxBusinessType1] = useState(true);
    const [isVisible_radBusinessType, setIsVisible_radBusinessType] = useState(true);
    const [isVisible_cbxYear, setIsVisible_cbxYear] = useState(true);
    const [isVisible_radMgno, setIsVisible_radMgno] = useState(true);
    const [isVisible_Static20, setIsVisible_Static20] = useState(true);
    const [isVisible_radDate, setIsVisible_radDate] = useState(true);
    const [isVisible_Static22, setIsVisible_Static22] = useState(true);
    const [isVisible_calStartDate, setIsVisible_calStartDate] = useState(true);
    const [isVisible_medMgno1, setIsVisible_medMgno1] = useState(true);
    const [isVisible_medMgno2, setIsVisible_medMgno2] = useState(true);
    const [isVisible_calEndDate, setIsVisible_calEndDate] = useState(true);
    const [isVisible_cbxBusinessType2, setIsVisible_cbxBusinessType2] = useState(true);
    const [isVisible_edJoinYearMonth, setIsVisible_edJoinYearMonth] = useState(true);
    const [isVisible_Shape9, setIsVisible_Shape9] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_radExcept, setIsVisible_radExcept] = useState(true);
    const [isVisible_radNotEduSelect, setIsVisible_radNotEduSelect] = useState(true);
    const [isVisible_gdList1N, setIsVisible_gdList1N] = useState(false);
    const [isVisible_gdList2, setIsVisible_gdList2] = useState(false);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);
    const [isVisible_calEduYmdTo, setIsVisible_calEduYmdTo] = useState(true);
    const [isVisible_calEduYmdFr, setIsVisible_calEduYmdFr] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_radCnoGubun, setIsVisible_radCnoGubun] = useState(true);
    const [isVisible_Static21, setIsVisible_Static21] = useState(true);
    const [isVisible_radDelGubun, setIsVisible_radDelGubun] = useState(true);
    const [isVisible_Static23, setIsVisible_Static23] = useState(true);
    const [isVisible_gdList3, setIsVisible_gdList3] = useState(false);
    const [isVisible_Static24, setIsVisible_Static24] = useState(true);
    const [isVisible_radIssue, setIsVisible_radIssue] = useState(true);
    const [isVisible_Static25, setIsVisible_Static25] = useState(true);
    const [isVisible_radSuccessionGubun, setIsVisible_radSuccessionGubun] = useState(true);
    const [isVisible_Static26, setIsVisible_Static26] = useState(true);
    const [isVisible_radAgencyGubun, setIsVisible_radAgencyGubun] = useState(true);
    const [isVisible_radGijun, setIsVisible_radGijun] = useState(true);
    const [isVisible_cbxBonbu, setIsVisible_cbxBonbu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_cbxRegion1, setIsVisible_cbxRegion1] = useState(true);
    const [isVisible_Static40, setIsVisible_Static40] = useState(true);
    const [isVisible_radCenter, setIsVisible_radCenter] = useState(true);
    const [isVisible_cbxMFCenter1, setIsVisible_cbxMFCenter1] = useState(true);
    const [isVisible_cbxMFCenter3, setIsVisible_cbxMFCenter3] = useState(true);
    const [isVisible_cbxMFCenter2, setIsVisible_cbxMFCenter2] = useState(true);
    const [isVisible_Static41, setIsVisible_Static41] = useState(true);
    const [isVisible_chkTrainingExcept, setIsVisible_chkTrainingExcept] = useState(true);
    const [isVisible_CalTrainingStart, setIsVisible_CalTrainingStart] = useState(true);
    const [isVisible_Static44, setIsVisible_Static44] = useState(true);
    const [isVisible_CalTrainingEnd, setIsVisible_CalTrainingEnd] = useState(true);
    const [isVisible_gdList1Y, setIsVisible_gdList1Y] = useState(false);

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