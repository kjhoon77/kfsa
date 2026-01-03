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
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_Div0, setIsVisible_Div0] = useState(true);

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
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Div0,
        setIsVisible_Div0,
        btnExcell_OnClick,
        chkBfEdu_OnClick,
        chkTrainingExcept_OnClick,
        lfn_End,
        lfn_Print,
    };
};