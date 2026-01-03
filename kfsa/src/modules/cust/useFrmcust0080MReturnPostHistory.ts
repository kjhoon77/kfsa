// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oGubun, Ids_oCourse, Ids_oJibu, Ids_oMemberGubun, Ids_oOrder, Ids_oCourseYn, Ids_oInput, Ids_oPostReturn, Ids_oPrint, Ids_oMinap } from './Frmcust0080MReturnPostHistoryData';

export const useFrmcust0080MReturnPostHistory = () => {
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMemberGubun, setds_oMemberGubun] = useState<Ids_oMemberGubun[]>([]);
    const [ds_oOrder, setds_oOrder] = useState<Ids_oOrder[]>([]);
    const [ds_oCourseYn, setds_oCourseYn] = useState<Ids_oCourseYn[]>([]);
    const [ds_oInput, setds_oInput] = useState<Ids_oInput[]>([]);
    const [ds_oPostReturn, setds_oPostReturn] = useState<Ids_oPostReturn[]>([]);
    const [ds_oPrint, setds_oPrint] = useState<Ids_oPrint[]>([]);
    const [ds_oMinap, setds_oMinap] = useState<Ids_oMinap[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_gdPostReturn, setRawVisible_gdPostReturn] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_radMemberGubun, setRawVisible_radMemberGubun] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radBizGubun, setRawVisible_radBizGubun] = useState(true);
    const [rawVisible_radPrint, setRawVisible_radPrint] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_btn_PostReturnImage, setRawVisible_btn_PostReturnImage] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_cbxCourse2, setRawVisible_cbxCourse2] = useState(true);
    const [rawVisible_cbxCourse3, setRawVisible_cbxCourse3] = useState(true);
    const [rawVisible_cbxCourse4, setRawVisible_cbxCourse4] = useState(true);
    const [rawVisible_cbxCourse5, setRawVisible_cbxCourse5] = useState(true);
    const [rawVisible_cbxCourse6, setRawVisible_cbxCourse6] = useState(true);
    const [rawVisible_cbxCourse1, setRawVisible_cbxCourse1] = useState(true);
    const [rawVisible_edCustNo1, setRawVisible_edCustNo1] = useState(true);
    const [rawVisible_edCustNo2, setRawVisible_edCustNo2] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_radMinap, setRawVisible_radMinap] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
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
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_gdPostReturn = rawVisible_gdPostReturn && rawVisible_Shape1;
    const setIsVisible_gdPostReturn = setRawVisible_gdPostReturn;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort && rawVisible_Shape1;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt && rawVisible_Shape1;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape1;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape0;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_calStartDate = rawVisible_calStartDate && rawVisible_Shape0;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape0;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_Shape0;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape0;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_radMemberGubun = rawVisible_radMemberGubun && rawVisible_Shape0;
    const setIsVisible_radMemberGubun = setRawVisible_radMemberGubun;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape0;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape0;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radBizGubun = rawVisible_radBizGubun && rawVisible_Shape0;
    const setIsVisible_radBizGubun = setRawVisible_radBizGubun;
    const isVisible_radPrint = rawVisible_radPrint && rawVisible_Shape0;
    const setIsVisible_radPrint = setRawVisible_radPrint;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_btn_PostReturnImage = rawVisible_btn_PostReturnImage && rawVisible_Shape1;
    const setIsVisible_btn_PostReturnImage = setRawVisible_btn_PostReturnImage;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_Shape0;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape0;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape0;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_cbxCourse2 = rawVisible_cbxCourse2 && rawVisible_Shape0;
    const setIsVisible_cbxCourse2 = setRawVisible_cbxCourse2;
    const isVisible_cbxCourse3 = rawVisible_cbxCourse3 && rawVisible_Shape0;
    const setIsVisible_cbxCourse3 = setRawVisible_cbxCourse3;
    const isVisible_cbxCourse4 = rawVisible_cbxCourse4 && rawVisible_Shape0;
    const setIsVisible_cbxCourse4 = setRawVisible_cbxCourse4;
    const isVisible_cbxCourse5 = rawVisible_cbxCourse5 && rawVisible_Shape0;
    const setIsVisible_cbxCourse5 = setRawVisible_cbxCourse5;
    const isVisible_cbxCourse6 = rawVisible_cbxCourse6 && rawVisible_Shape0;
    const setIsVisible_cbxCourse6 = setRawVisible_cbxCourse6;
    const isVisible_cbxCourse1 = rawVisible_cbxCourse1 && rawVisible_Shape0;
    const setIsVisible_cbxCourse1 = setRawVisible_cbxCourse1;
    const isVisible_edCustNo1 = rawVisible_edCustNo1 && rawVisible_Shape0;
    const setIsVisible_edCustNo1 = setRawVisible_edCustNo1;
    const isVisible_edCustNo2 = rawVisible_edCustNo2 && rawVisible_Shape0;
    const setIsVisible_edCustNo2 = setRawVisible_edCustNo2;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape0;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape0;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape0;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_radMinap = rawVisible_radMinap && rawVisible_Shape0;
    const setIsVisible_radMinap = setRawVisible_radMinap;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oMemberGubun([]);
            setds_oOrder([]);
            setds_oCourseYn([]);
            setds_oInput([]);
            setds_oPostReturn([]);
            setds_oPrint([]);
            setds_oMinap([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btn_PostReturnImage_OnClick = () => {
        console.log('btn_PostReturnImage_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oMemberGubun,
        ds_oOrder,
        ds_oCourseYn,
        ds_oInput,
        ds_oPostReturn,
        ds_oPrint,
        ds_oMinap,
        isVisible_Shape0,
        setIsVisible_Shape0,
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
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_gdPostReturn,
        setIsVisible_gdPostReturn,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_radMemberGubun,
        setIsVisible_radMemberGubun,
        isVisible_lbMgno,
        setIsVisible_lbMgno,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radBizGubun,
        setIsVisible_radBizGubun,
        isVisible_radPrint,
        setIsVisible_radPrint,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_btn_PostReturnImage,
        setIsVisible_btn_PostReturnImage,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_cbxCourse2,
        setIsVisible_cbxCourse2,
        isVisible_cbxCourse3,
        setIsVisible_cbxCourse3,
        isVisible_cbxCourse4,
        setIsVisible_cbxCourse4,
        isVisible_cbxCourse5,
        setIsVisible_cbxCourse5,
        isVisible_cbxCourse6,
        setIsVisible_cbxCourse6,
        isVisible_cbxCourse1,
        setIsVisible_cbxCourse1,
        isVisible_edCustNo1,
        setIsVisible_edCustNo1,
        isVisible_edCustNo2,
        setIsVisible_edCustNo2,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_radMinap,
        setIsVisible_radMinap,
        btnMutilSort_OnClick,
        btn_PostReturnImage_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};