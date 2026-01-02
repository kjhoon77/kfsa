// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioMemberGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioTarget {
    CD: string;
    DATA: string;
}

export interface Ids_ioTemp {
    CD: string;
    DATA: string;
}

export interface Ids_ioFeeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioYear {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_ioYearHalf {
    CD: string;
    DATA: string;
}

export interface Ids_ioPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioOrder {
    CD: string;
    DATA: string;
}

export interface Ids_a {
    CD: string;
}

export interface Ids_ioBusinessType {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn_0 {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn_1 {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn {
    CD: string;
    DATA: string;
}

export interface Ids_ioCourseYn_2 {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oRegion {
    CD: string;
    DATA: string;
    GTCD: string;
}

export interface Ids_ioCourseYn {
    CD: string;
    DATA: string;
}

export interface Ids_oBizCd {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYnReport {
    CD: string;
    DATA: string;
}

export interface Ids_ioZipNum {
    CD: string;
    DATA: string;
}

export interface Ids_ioMEduNotice {
    fkeyA: string;
}

export interface Ids_ioApply {
    CD: string;
    DATA: string;
}

export interface Ids_oDetailCourse {
    CD: string;
    DATA: string;
    GCD: string;
}

export interface Ids_ioMEduNoticeDetail {
}

export interface Ids_oPersonGubun {
    CD: string;
    DATA: string;
    PCD: string;
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

export interface Ids_oMinap {
    CD: string;
    DATA: string;
}

export interface Ids_ioYN {
    CD: string;
    DATA: string;
}

export interface Ids_oAgency {
    CD: string;
    DATA: string;
}

export interface Ids_ioChoiceYn_1 {
    CD: string;
    DATA: string;
}

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