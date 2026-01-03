// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_ioChoiceYn, Ids_ioCourseYn, Ids_oJibu, Ids_SearchJogeon, Ids_CustomerList, Ids_oEduStudentGubun, Ids_oEduGubun, Ids_ioCustomerFeeInfo, Ids_oFee, Ids_oAdditionInfo, Ids_ioEducationPassInfo, Ids_oEduSuccessGubun } from './Frmcust0020MCustomerSearchJibuData';

export const useFrmcust0020MCustomerSearchJibu = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_CustomerList, setds_CustomerList] = useState<Ids_CustomerList[]>([]);
    const [ds_oEduStudentGubun, setds_oEduStudentGubun] = useState<Ids_oEduStudentGubun[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_oFee, setds_oFee] = useState<Ids_oFee[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [ds_ioEducationPassInfo, setds_ioEducationPassInfo] = useState<Ids_ioEducationPassInfo[]>([]);
    const [ds_oEduSuccessGubun, setds_oEduSuccessGubun] = useState<Ids_oEduSuccessGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_edCustNm, setRawVisible_edCustNm] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_chkCust, setRawVisible_chkCust] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_chkPerson, setRawVisible_chkPerson] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Shape10, setRawVisible_Shape10] = useState(true);
    const [rawVisible_Button3, setRawVisible_Button3] = useState(false);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_btnFeeDetailInfo1, setRawVisible_btnFeeDetailInfo1] = useState(true);
    const [rawVisible_grdCustomerList, setRawVisible_grdCustomerList] = useState(true);
    const [rawVisible_Grid0, setRawVisible_Grid0] = useState(true);
    const [rawVisible_gdMemFee, setRawVisible_gdMemFee] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_edCustNm = rawVisible_edCustNm && rawVisible_Shape0;
    const setIsVisible_edCustNm = setRawVisible_edCustNm;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_Shape0;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_Shape0;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape1;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt && rawVisible_Shape1;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape1;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape0;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_chkCust = rawVisible_chkCust && rawVisible_Shape0;
    const setIsVisible_chkCust = setRawVisible_chkCust;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_chkPerson = rawVisible_chkPerson && rawVisible_Shape0;
    const setIsVisible_chkPerson = setRawVisible_chkPerson;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Shape10 = rawVisible_Shape10;
    const setIsVisible_Shape10 = setRawVisible_Shape10;
    const isVisible_Button3 = rawVisible_Button3 && rawVisible_Shape10;
    const setIsVisible_Button3 = setRawVisible_Button3;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_btnFeeDetailInfo1 = rawVisible_btnFeeDetailInfo1 && rawVisible_Shape2;
    const setIsVisible_btnFeeDetailInfo1 = setRawVisible_btnFeeDetailInfo1;
    const isVisible_grdCustomerList = rawVisible_grdCustomerList && rawVisible_Shape1;
    const setIsVisible_grdCustomerList = setRawVisible_grdCustomerList;
    const isVisible_Grid0 = rawVisible_Grid0 && rawVisible_Shape10;
    const setIsVisible_Grid0 = setRawVisible_Grid0;
    const isVisible_gdMemFee = rawVisible_gdMemFee && rawVisible_Shape2;
    const setIsVisible_gdMemFee = setRawVisible_gdMemFee;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioChoiceYn([]);
            setds_ioCourseYn([]);
            setds_oJibu([]);
            setds_SearchJogeon([]);
            setds_CustomerList([]);
            setds_oEduStudentGubun([]);
            setds_oEduGubun([]);
            setds_ioCustomerFeeInfo([]);
            setds_oFee([]);
            setds_oAdditionInfo([]);
            setds_ioEducationPassInfo([]);
            setds_oEduSuccessGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnFeeDetailInfo1_OnClick = () => {
        console.log('btnFeeDetailInfo1_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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

    return {
        isLoading,
        ds_oCourse,
        ds_ioChoiceYn,
        ds_ioCourseYn,
        ds_oJibu,
        ds_SearchJogeon,
        ds_CustomerList,
        ds_oEduStudentGubun,
        ds_oEduGubun,
        ds_ioCustomerFeeInfo,
        ds_oFee,
        ds_oAdditionInfo,
        ds_ioEducationPassInfo,
        ds_oEduSuccessGubun,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_edCustNm,
        setIsVisible_edCustNm,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_chkCust,
        setIsVisible_chkCust,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_chkPerson,
        setIsVisible_chkPerson,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Shape10,
        setIsVisible_Shape10,
        isVisible_Button3,
        setIsVisible_Button3,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_btnFeeDetailInfo1,
        setIsVisible_btnFeeDetailInfo1,
        isVisible_grdCustomerList,
        setIsVisible_grdCustomerList,
        isVisible_Grid0,
        setIsVisible_Grid0,
        isVisible_gdMemFee,
        setIsVisible_gdMemFee,
        btnBarCodeSearch_OnClick,
        btnExcell_OnClick,
        btnFeeDetailInfo1_OnClick,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};