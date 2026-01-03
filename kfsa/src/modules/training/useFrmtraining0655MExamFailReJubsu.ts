// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingExam, Ids_oCourse, Ids_oJibu, Ids_ioExamOrder, Ids_oSunapGubun, Ids_ioTrainingExamSettle, Ids_ioTrainingExamJubsu, Ids_ioExamJubsuChk, Ids_ioTrainingExamAmt, Ids_oPrintReceiptMast, Ids_oPrintReceiptDtl, Ids_ioExamPrint, Ids_ioExamOrderMgno, Ids_ioRepayReport, Ids_ioTrainingExamAmtJubsu, Ids_ioReExamOrderMgno } from './Frmtraining0655MExamFailReJubsuData';

export const useFrmtraining0655MExamFailReJubsu = () => {
    const [ds_ioTrainingExam, setds_ioTrainingExam] = useState<Ids_ioTrainingExam[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioExamOrder, setds_ioExamOrder] = useState<Ids_ioExamOrder[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_ioTrainingExamSettle, setds_ioTrainingExamSettle] = useState<Ids_ioTrainingExamSettle[]>([]);
    const [ds_ioTrainingExamJubsu, setds_ioTrainingExamJubsu] = useState<Ids_ioTrainingExamJubsu[]>([]);
    const [ds_ioExamJubsuChk, setds_ioExamJubsuChk] = useState<Ids_ioExamJubsuChk[]>([]);
    const [ds_ioTrainingExamAmt, setds_ioTrainingExamAmt] = useState<Ids_ioTrainingExamAmt[]>([]);
    const [ds_oPrintReceiptMast, setds_oPrintReceiptMast] = useState<Ids_oPrintReceiptMast[]>([]);
    const [ds_oPrintReceiptDtl, setds_oPrintReceiptDtl] = useState<Ids_oPrintReceiptDtl[]>([]);
    const [ds_ioExamPrint, setds_ioExamPrint] = useState<Ids_ioExamPrint[]>([]);
    const [ds_ioExamOrderMgno, setds_ioExamOrderMgno] = useState<Ids_ioExamOrderMgno[]>([]);
    const [ds_ioRepayReport, setds_ioRepayReport] = useState<Ids_ioRepayReport[]>([]);
    const [ds_ioTrainingExamAmtJubsu, setds_ioTrainingExamAmtJubsu] = useState<Ids_ioTrainingExamAmtJubsu[]>([]);
    const [ds_ioReExamOrderMgno, setds_ioReExamOrderMgno] = useState<Ids_ioReExamOrderMgno[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdTrainingExam, setRawVisible_gdTrainingExam] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_edExamOrderSource, setRawVisible_edExamOrderSource] = useState(true);
    const [rawVisible_lbExamOrderSource, setRawVisible_lbExamOrderSource] = useState(true);
    const [rawVisible_lbCourseSource, setRawVisible_lbCourseSource] = useState(true);
    const [rawVisible_cbxCourseSource, setRawVisible_cbxCourseSource] = useState(true);
    const [rawVisible_lbExamYearSource, setRawVisible_lbExamYearSource] = useState(true);
    const [rawVisible_edExamYearSource, setRawVisible_edExamYearSource] = useState(true);
    const [rawVisible_lbJibuSource, setRawVisible_lbJibuSource] = useState(true);
    const [rawVisible_cbxJibuSource, setRawVisible_cbxJibuSource] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_edExamOrderTarget, setRawVisible_edExamOrderTarget] = useState(true);
    const [rawVisible_lbExamOrderTarget, setRawVisible_lbExamOrderTarget] = useState(true);
    const [rawVisible_lbCourseTarget, setRawVisible_lbCourseTarget] = useState(true);
    const [rawVisible_cbxCourseTarget, setRawVisible_cbxCourseTarget] = useState(true);
    const [rawVisible_lbExamYearTarget, setRawVisible_lbExamYearTarget] = useState(true);
    const [rawVisible_edExamYearTarget, setRawVisible_edExamYearTarget] = useState(true);
    const [rawVisible_lbJibuTarget, setRawVisible_lbJibuTarget] = useState(true);
    const [rawVisible_cbxJibuTarget, setRawVisible_cbxJibuTarget] = useState(true);
    const [rawVisible_lbExamSource, setRawVisible_lbExamSource] = useState(true);
    const [rawVisible_lbExamTarget, setRawVisible_lbExamTarget] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbSunapMsg, setRawVisible_lbSunapMsg] = useState(true);
    const [rawVisible_chkJubsuProcGubun, setRawVisible_chkJubsuProcGubun] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_radSunapGubun, setRawVisible_radSunapGubun] = useState(true);
    const [rawVisible_lbSunapDate, setRawVisible_lbSunapDate] = useState(true);
    const [rawVisible_calSunapDate, setRawVisible_calSunapDate] = useState(true);
    const [rawVisible_lbPonyDate, setRawVisible_lbPonyDate] = useState(true);
    const [rawVisible_chkPonyDate, setRawVisible_chkPonyDate] = useState(true);
    const [rawVisible_calPonyDate, setRawVisible_calPonyDate] = useState(true);
    const [rawVisible_btnSearchExamOrder, setRawVisible_btnSearchExamOrder] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnPrintRctTotal, setRawVisible_btnPrintRctTotal] = useState(true);
    const [rawVisible_btnReportBatch, setRawVisible_btnReportBatch] = useState(true);
    const [rawVisible_lbExamDate, setRawVisible_lbExamDate] = useState(true);
    const [rawVisible_medExamDate, setRawVisible_medExamDate] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_medReExamDate, setRawVisible_medReExamDate] = useState(true);
    const [rawVisible_btnTargetSearch, setRawVisible_btnTargetSearch] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdTrainingExam = rawVisible_gdTrainingExam;
    const setIsVisible_gdTrainingExam = setRawVisible_gdTrainingExam;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_edExamOrderSource = rawVisible_edExamOrderSource && rawVisible_shpGubunBox;
    const setIsVisible_edExamOrderSource = setRawVisible_edExamOrderSource;
    const isVisible_lbExamOrderSource = rawVisible_lbExamOrderSource && rawVisible_shpGubunBox;
    const setIsVisible_lbExamOrderSource = setRawVisible_lbExamOrderSource;
    const isVisible_lbCourseSource = rawVisible_lbCourseSource && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseSource = setRawVisible_lbCourseSource;
    const isVisible_cbxCourseSource = rawVisible_cbxCourseSource && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourseSource = setRawVisible_cbxCourseSource;
    const isVisible_lbExamYearSource = rawVisible_lbExamYearSource && rawVisible_shpGubunBox;
    const setIsVisible_lbExamYearSource = setRawVisible_lbExamYearSource;
    const isVisible_edExamYearSource = rawVisible_edExamYearSource && rawVisible_shpGubunBox;
    const setIsVisible_edExamYearSource = setRawVisible_edExamYearSource;
    const isVisible_lbJibuSource = rawVisible_lbJibuSource && rawVisible_shpGubunBox;
    const setIsVisible_lbJibuSource = setRawVisible_lbJibuSource;
    const isVisible_cbxJibuSource = rawVisible_cbxJibuSource && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibuSource = setRawVisible_cbxJibuSource;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_edExamOrderTarget = rawVisible_edExamOrderTarget && rawVisible_Shape0;
    const setIsVisible_edExamOrderTarget = setRawVisible_edExamOrderTarget;
    const isVisible_lbExamOrderTarget = rawVisible_lbExamOrderTarget && rawVisible_Shape0;
    const setIsVisible_lbExamOrderTarget = setRawVisible_lbExamOrderTarget;
    const isVisible_lbCourseTarget = rawVisible_lbCourseTarget && rawVisible_Shape0;
    const setIsVisible_lbCourseTarget = setRawVisible_lbCourseTarget;
    const isVisible_cbxCourseTarget = rawVisible_cbxCourseTarget && rawVisible_Shape0;
    const setIsVisible_cbxCourseTarget = setRawVisible_cbxCourseTarget;
    const isVisible_lbExamYearTarget = rawVisible_lbExamYearTarget && rawVisible_Shape0;
    const setIsVisible_lbExamYearTarget = setRawVisible_lbExamYearTarget;
    const isVisible_edExamYearTarget = rawVisible_edExamYearTarget && rawVisible_Shape0;
    const setIsVisible_edExamYearTarget = setRawVisible_edExamYearTarget;
    const isVisible_lbJibuTarget = rawVisible_lbJibuTarget && rawVisible_Shape0;
    const setIsVisible_lbJibuTarget = setRawVisible_lbJibuTarget;
    const isVisible_cbxJibuTarget = rawVisible_cbxJibuTarget && rawVisible_Shape0;
    const setIsVisible_cbxJibuTarget = setRawVisible_cbxJibuTarget;
    const isVisible_lbExamSource = rawVisible_lbExamSource;
    const setIsVisible_lbExamSource = setRawVisible_lbExamSource;
    const isVisible_lbExamTarget = rawVisible_lbExamTarget;
    const setIsVisible_lbExamTarget = setRawVisible_lbExamTarget;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbSunapMsg = rawVisible_lbSunapMsg && rawVisible_Shape0;
    const setIsVisible_lbSunapMsg = setRawVisible_lbSunapMsg;
    const isVisible_chkJubsuProcGubun = rawVisible_chkJubsuProcGubun && rawVisible_Shape0;
    const setIsVisible_chkJubsuProcGubun = setRawVisible_chkJubsuProcGubun;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_Shape0;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_radSunapGubun = rawVisible_radSunapGubun && rawVisible_Shape0;
    const setIsVisible_radSunapGubun = setRawVisible_radSunapGubun;
    const isVisible_lbSunapDate = rawVisible_lbSunapDate && rawVisible_Shape0;
    const setIsVisible_lbSunapDate = setRawVisible_lbSunapDate;
    const isVisible_calSunapDate = rawVisible_calSunapDate && rawVisible_Shape0;
    const setIsVisible_calSunapDate = setRawVisible_calSunapDate;
    const isVisible_lbPonyDate = rawVisible_lbPonyDate && rawVisible_Shape0;
    const setIsVisible_lbPonyDate = setRawVisible_lbPonyDate;
    const isVisible_chkPonyDate = rawVisible_chkPonyDate && rawVisible_Shape0;
    const setIsVisible_chkPonyDate = setRawVisible_chkPonyDate;
    const isVisible_calPonyDate = rawVisible_calPonyDate && rawVisible_Shape0;
    const setIsVisible_calPonyDate = setRawVisible_calPonyDate;
    const isVisible_btnSearchExamOrder = rawVisible_btnSearchExamOrder && rawVisible_Shape0;
    const setIsVisible_btnSearchExamOrder = setRawVisible_btnSearchExamOrder;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnPrintRctTotal = rawVisible_btnPrintRctTotal && rawVisible_Shape0;
    const setIsVisible_btnPrintRctTotal = setRawVisible_btnPrintRctTotal;
    const isVisible_btnReportBatch = rawVisible_btnReportBatch && rawVisible_Shape0;
    const setIsVisible_btnReportBatch = setRawVisible_btnReportBatch;
    const isVisible_lbExamDate = rawVisible_lbExamDate && rawVisible_Shape1;
    const setIsVisible_lbExamDate = setRawVisible_lbExamDate;
    const isVisible_medExamDate = rawVisible_medExamDate && rawVisible_Shape1;
    const setIsVisible_medExamDate = setRawVisible_medExamDate;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_medReExamDate = rawVisible_medReExamDate && rawVisible_Shape0;
    const setIsVisible_medReExamDate = setRawVisible_medReExamDate;
    const isVisible_btnTargetSearch = rawVisible_btnTargetSearch && rawVisible_Shape0;
    const setIsVisible_btnTargetSearch = setRawVisible_btnTargetSearch;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingExam([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_ioExamOrder([]);
            setds_oSunapGubun([]);
            setds_ioTrainingExamSettle([]);
            setds_ioTrainingExamJubsu([]);
            setds_ioExamJubsuChk([]);
            setds_ioTrainingExamAmt([]);
            setds_oPrintReceiptMast([]);
            setds_oPrintReceiptDtl([]);
            setds_ioExamPrint([]);
            setds_ioExamOrderMgno([]);
            setds_ioRepayReport([]);
            setds_ioTrainingExamAmtJubsu([]);
            setds_ioReExamOrderMgno([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintRctTotal_OnClick = () => {
        console.log('btnPrintRctTotal_OnClick clicked');
    };
    const btnReportBatch_OnClick = () => {
        console.log('btnReportBatch_OnClick clicked');
    };
    const btnSearchExamOrder_OnClick = () => {
        console.log('btnSearchExamOrder_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const chkJubsuProcGubun_OnClick = () => {
        console.log('chkJubsuProcGubun_OnClick clicked');
    };
    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
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
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_TargetSearch = () => {
        console.log('lfn_TargetSearch clicked');
    };

    return {
        isLoading,
        ds_ioTrainingExam,
        ds_oCourse,
        ds_oJibu,
        ds_ioExamOrder,
        ds_oSunapGubun,
        ds_ioTrainingExamSettle,
        ds_ioTrainingExamJubsu,
        ds_ioExamJubsuChk,
        ds_ioTrainingExamAmt,
        ds_oPrintReceiptMast,
        ds_oPrintReceiptDtl,
        ds_ioExamPrint,
        ds_ioExamOrderMgno,
        ds_ioRepayReport,
        ds_ioTrainingExamAmtJubsu,
        ds_ioReExamOrderMgno,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdTrainingExam,
        setIsVisible_gdTrainingExam,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_edExamOrderSource,
        setIsVisible_edExamOrderSource,
        isVisible_lbExamOrderSource,
        setIsVisible_lbExamOrderSource,
        isVisible_lbCourseSource,
        setIsVisible_lbCourseSource,
        isVisible_cbxCourseSource,
        setIsVisible_cbxCourseSource,
        isVisible_lbExamYearSource,
        setIsVisible_lbExamYearSource,
        isVisible_edExamYearSource,
        setIsVisible_edExamYearSource,
        isVisible_lbJibuSource,
        setIsVisible_lbJibuSource,
        isVisible_cbxJibuSource,
        setIsVisible_cbxJibuSource,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_edExamOrderTarget,
        setIsVisible_edExamOrderTarget,
        isVisible_lbExamOrderTarget,
        setIsVisible_lbExamOrderTarget,
        isVisible_lbCourseTarget,
        setIsVisible_lbCourseTarget,
        isVisible_cbxCourseTarget,
        setIsVisible_cbxCourseTarget,
        isVisible_lbExamYearTarget,
        setIsVisible_lbExamYearTarget,
        isVisible_edExamYearTarget,
        setIsVisible_edExamYearTarget,
        isVisible_lbJibuTarget,
        setIsVisible_lbJibuTarget,
        isVisible_cbxJibuTarget,
        setIsVisible_cbxJibuTarget,
        isVisible_lbExamSource,
        setIsVisible_lbExamSource,
        isVisible_lbExamTarget,
        setIsVisible_lbExamTarget,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbSunapMsg,
        setIsVisible_lbSunapMsg,
        isVisible_chkJubsuProcGubun,
        setIsVisible_chkJubsuProcGubun,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_radSunapGubun,
        setIsVisible_radSunapGubun,
        isVisible_lbSunapDate,
        setIsVisible_lbSunapDate,
        isVisible_calSunapDate,
        setIsVisible_calSunapDate,
        isVisible_lbPonyDate,
        setIsVisible_lbPonyDate,
        isVisible_chkPonyDate,
        setIsVisible_chkPonyDate,
        isVisible_calPonyDate,
        setIsVisible_calPonyDate,
        isVisible_btnSearchExamOrder,
        setIsVisible_btnSearchExamOrder,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnPrintRctTotal,
        setIsVisible_btnPrintRctTotal,
        isVisible_btnReportBatch,
        setIsVisible_btnReportBatch,
        isVisible_lbExamDate,
        setIsVisible_lbExamDate,
        isVisible_medExamDate,
        setIsVisible_medExamDate,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_medReExamDate,
        setIsVisible_medReExamDate,
        isVisible_btnTargetSearch,
        setIsVisible_btnTargetSearch,
        btnMutilSort_OnClick,
        btnPrintRctTotal_OnClick,
        btnReportBatch_OnClick,
        btnSearchExamOrder_OnClick,
        btnToExcel_OnClick,
        chkJubsuProcGubun_OnClick,
        chkPonyDate_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_TargetSearch,
    };
};