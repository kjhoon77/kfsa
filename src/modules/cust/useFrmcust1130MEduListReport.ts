// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioReport {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
    YEAR: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioEduYear {
    EDUYEAR: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_oAdditionInfo {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder3 {
    CD: string;
    DATA: string;
}

export interface Ids_SearchJogeon {
    REPORT: string;
    YEAR: string;
    JIBU: string;
    REGION_GUBUN: string;
    REGION1: string;
    REGION2: string;
    MEMBER_GUBUN: string;
    COURSECD: string;
    BIZ_GUBUN: string;
    BIZ1: string;
    BIZ2: string;
    MGNO_GUBUN: string;
    MGNO1: string;
    MGNO2: string;
    DATE_GUBUN: string;
    YMD_FR: string;
    YMD_TO: string;
    YEARMONTH: string;
    SORT_GUBUN: string;
    PRINT_GUBUN: string;
    NOTPASSCNT: string;
    EDU_GUBUN: string;
    EXCEPT_GUBUN: string;
    BF_YEAR: string;
    BF_YMD_FR: string;
    BF_YMD_TO: string;
    PERSON_GUBUN_IN: string;
    EDU_YMD_FR: string;
    EDU_YMD_TO: string;
    DEL_GUBUN: string;
    CNO_GUBUN: string;
    ISSUE: string;
    SUCCESSIONGUBUN: string;
    AGENCY_GUBUN: string;
    JIBUGIJUN: string;
    BONBU: string;
    REGION: string;
    CENTER_GUBUN: string;
    CENTER: string;
    CENTER1: string;
    CENTER2: string;
    TRAININGEXCEPT: string;
    TRAININGSTART: string;
    TRAININGEND: string;
    TRAININGCOURSECD: string;
}

export interface Ids_EduList1 {
    GTTEAMNM: string;
    CNM: string;
    RCNM: string;
    CNO: string;
    BNM: string;
    EPPERSONNM: string;
    ADDR: string;
    EPYEARNM: string;
    EPYEAR: string;
    BTEL: string;
    CCCDNM: string;
    FMHSTARTDATE: string;
    BIRTHDAY: string;
    FMHHPTEL: string;
    FMHMAIL: string;
    FSTNSMALL_NM: string;
    SUCCESSIONGUBUN: string;
}

export interface Ids_EduList3 {
    GTTEAMNM: string;
    GTPRTSEQ: string;
    CCOURSECD: string;
    CNM: string;
    CREGCD: string;
    RCNM: string;
    CMGNO: string;
    CNO: string;
    BNM: string;
    EPPERSONNM: string;
    ADDR: string;
    YEARNM1: string;
    YEARNM2: string;
    YEARNM3: string;
    YEAR1: string;
    YEAR2: string;
    YEAR3: string;
    BTEL: string;
    CCCDNM: string;
    FMHSTARTDATE: string;
    FMHENDDATE: string;
    CREGISTERYYMM: string;
    BIRTHDAY: string;
    FMHHPTEL: string;
    FMHMAIL: string;
    FSTNSMALL_NM: string;
}

export interface Ids_EduList2 {
    GTTEAMNM: string;
    GTPRTSEQ: string;
    CCOURSECD: string;
    CNM: string;
    CREGCD: string;
    RCNM: string;
    CMGNO: string;
    CNO: string;
    BNM: string;
    EPPERSONNM: string;
    ADDR: string;
    YEARNM1: string;
    YEARNM2: string;
    YEARNM3: string;
    YEAR1: string;
    YEAR2: string;
    YEAR3: string;
    BTEL: string;
    CCCDNM: string;
    FMHSTARTDATE: string;
    FMHENDDATE: string;
    CREGISTERYYMM: string;
    BIRTHDAY: string;
    FMHHPTEL: string;
    FMHMAIL: string;
    FSTNSMALL_NM: string;
}

export interface Ids_ioPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioIssue {
    CD: string;
    DATA: string;
}

export interface Ids_ioSuccessionGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioAgencyGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioGijun {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoice {
    CD: string;
    DATA: string;
}

export interface Ids_oBonbu {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_oFireCd {
    CD: string;
    DATA: string;
    JIBUCD: string;
    CTCD: string;
}

export interface Ids_oFireCenterCd {
    CD: string;
    DATA: string;
    UPCD: string;
}

export interface Ids_oFireCenterCd2 {
    CD: string;
    DATA: string;
    UPCD: string;
}

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
        btnExcell_OnClick,
        chkBfEdu_OnClick,
        chkTrainingExcept_OnClick,
        lfn_End,
        lfn_Print,
    };
};