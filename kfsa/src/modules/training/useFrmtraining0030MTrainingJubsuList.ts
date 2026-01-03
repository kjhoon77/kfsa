// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oPassYn, Ids_oCourse, Ids_oRepayYn, Ids_oTrainingJubsu, Ids_oJibu, Ids_oMunjeGubun, Ids_oCourseMunje, Ids_oLicenseYn, Ids_oLastGubun, Ids_ioReport, Ids_ioReportFilter, Ids_oAmountGubun, Ids_ioEmail, Ids_ioEmailFilter, Ids_ioBook, Ids_ioBookFilter, Ids_oOnlineGubun, Ids_oSearchGubun, Ids_ioReport2, Igds_oPrintReceiptMast, Ids_oTrainingJubsu_Filter } from './Frmtraining0030MTrainingJubsuListData';

export const useFrmtraining0030MTrainingJubsuList = () => {
    const [ds_oPassYn, setds_oPassYn] = useState<Ids_oPassYn[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oRepayYn, setds_oRepayYn] = useState<Ids_oRepayYn[]>([]);
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [ds_oCourseMunje, setds_oCourseMunje] = useState<Ids_oCourseMunje[]>([]);
    const [ds_oLicenseYn, setds_oLicenseYn] = useState<Ids_oLicenseYn[]>([]);
    const [ds_oLastGubun, setds_oLastGubun] = useState<Ids_oLastGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReportFilter, setds_ioReportFilter] = useState<Ids_ioReportFilter[]>([]);
    const [ds_oAmountGubun, setds_oAmountGubun] = useState<Ids_oAmountGubun[]>([]);
    const [ds_ioEmail, setds_ioEmail] = useState<Ids_ioEmail[]>([]);
    const [ds_ioEmailFilter, setds_ioEmailFilter] = useState<Ids_ioEmailFilter[]>([]);
    const [ds_ioBook, setds_ioBook] = useState<Ids_ioBook[]>([]);
    const [ds_ioBookFilter, setds_ioBookFilter] = useState<Ids_ioBookFilter[]>([]);
    const [ds_oOnlineGubun, setds_oOnlineGubun] = useState<Ids_oOnlineGubun[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [gds_oPrintReceiptMast, setgds_oPrintReceiptMast] = useState<Igds_oPrintReceiptMast[]>([]);
    const [ds_oTrainingJubsu_Filter, setds_oTrainingJubsu_Filter] = useState<Ids_oTrainingJubsu_Filter[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Grid0, setRawVisible_Grid0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdTrainingJubsu, setRawVisible_gdTrainingJubsu] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_edTrainingOrderStart, setRawVisible_edTrainingOrderStart] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbRepayYn, setRawVisible_lbRepayYn] = useState(true);
    const [rawVisible_lbPassYn, setRawVisible_lbPassYn] = useState(true);
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_radRepayYn, setRawVisible_radRepayYn] = useState(true);
    const [rawVisible_edTrainingOrderEnd, setRawVisible_edTrainingOrderEnd] = useState(true);
    const [rawVisible_radPassYn, setRawVisible_radPassYn] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnPrintAll, setRawVisible_btnPrintAll] = useState(true);
    const [rawVisible_medJubsuCnt, setRawVisible_medJubsuCnt] = useState(true);
    const [rawVisible_lbAbsentCnt, setRawVisible_lbAbsentCnt] = useState(true);
    const [rawVisible_btnPrintList1, setRawVisible_btnPrintList1] = useState(true);
    const [rawVisible_btnPrintList2, setRawVisible_btnPrintList2] = useState(true);
    const [rawVisible_lbLicenseYn, setRawVisible_lbLicenseYn] = useState(true);
    const [rawVisible_radLicenseYn, setRawVisible_radLicenseYn] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_RadLastGubun, setRawVisible_RadLastGubun] = useState(true);
    const [rawVisible_btnPrintEvaluation, setRawVisible_btnPrintEvaluation] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_radAmountGubun, setRawVisible_radAmountGubun] = useState(true);
    const [rawVisible_btnPrintEmail, setRawVisible_btnPrintEmail] = useState(true);
    const [rawVisible_btnPrintBookAddr, setRawVisible_btnPrintBookAddr] = useState(true);
    const [rawVisible_filSaveFile, setRawVisible_filSaveFile] = useState(true);
    const [rawVisible_fdOpenFile, setRawVisible_fdOpenFile] = useState(true);
    const [rawVisible_gdBookSend, setRawVisible_gdBookSend] = useState(false);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_radOnlineGubun, setRawVisible_radOnlineGubun] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_radSearchGubun, setRawVisible_radSearchGubun] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_calTrainingStart, setRawVisible_calTrainingStart] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_calTrainingEnd, setRawVisible_calTrainingEnd] = useState(true);
    const [rawVisible_btnFortec, setRawVisible_btnFortec] = useState(true);
    const [rawVisible_btnPrintReRctPDF, setRawVisible_btnPrintReRctPDF] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_medJubsuCnt2, setRawVisible_medJubsuCnt2] = useState(true);
    const [rawVisible_btnPrintBookAddrAll, setRawVisible_btnPrintBookAddrAll] = useState(true);
    const [rawVisible_btnPrintEvaluation53, setRawVisible_btnPrintEvaluation53] = useState(true);
    const isVisible_Grid0 = rawVisible_Grid0;
    const setIsVisible_Grid0 = setRawVisible_Grid0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdTrainingJubsu = rawVisible_gdTrainingJubsu;
    const setIsVisible_gdTrainingJubsu = setRawVisible_gdTrainingJubsu;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_edTrainingOrderStart = rawVisible_edTrainingOrderStart && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrderStart = setRawVisible_edTrainingOrderStart;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbRepayYn = rawVisible_lbRepayYn && rawVisible_shpGubunBox;
    const setIsVisible_lbRepayYn = setRawVisible_lbRepayYn;
    const isVisible_lbPassYn = rawVisible_lbPassYn && rawVisible_shpGubunBox;
    const setIsVisible_lbPassYn = setRawVisible_lbPassYn;
    const isVisible_lbTrainingYear = rawVisible_lbTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingYear = setRawVisible_lbTrainingYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave && rawVisible_shpGubunBox;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_radRepayYn = rawVisible_radRepayYn && rawVisible_shpGubunBox;
    const setIsVisible_radRepayYn = setRawVisible_radRepayYn;
    const isVisible_edTrainingOrderEnd = rawVisible_edTrainingOrderEnd && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrderEnd = setRawVisible_edTrainingOrderEnd;
    const isVisible_radPassYn = rawVisible_radPassYn && rawVisible_shpGubunBox;
    const setIsVisible_radPassYn = setRawVisible_radPassYn;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_btnPrint = rawVisible_btnPrint;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnPrintAll = rawVisible_btnPrintAll;
    const setIsVisible_btnPrintAll = setRawVisible_btnPrintAll;
    const isVisible_medJubsuCnt = rawVisible_medJubsuCnt;
    const setIsVisible_medJubsuCnt = setRawVisible_medJubsuCnt;
    const isVisible_lbAbsentCnt = rawVisible_lbAbsentCnt;
    const setIsVisible_lbAbsentCnt = setRawVisible_lbAbsentCnt;
    const isVisible_btnPrintList1 = rawVisible_btnPrintList1;
    const setIsVisible_btnPrintList1 = setRawVisible_btnPrintList1;
    const isVisible_btnPrintList2 = rawVisible_btnPrintList2;
    const setIsVisible_btnPrintList2 = setRawVisible_btnPrintList2;
    const isVisible_lbLicenseYn = rawVisible_lbLicenseYn && rawVisible_shpGubunBox;
    const setIsVisible_lbLicenseYn = setRawVisible_lbLicenseYn;
    const isVisible_radLicenseYn = rawVisible_radLicenseYn && rawVisible_shpGubunBox;
    const setIsVisible_radLicenseYn = setRawVisible_radLicenseYn;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_RadLastGubun = rawVisible_RadLastGubun && rawVisible_shpGubunBox;
    const setIsVisible_RadLastGubun = setRawVisible_RadLastGubun;
    const isVisible_btnPrintEvaluation = rawVisible_btnPrintEvaluation;
    const setIsVisible_btnPrintEvaluation = setRawVisible_btnPrintEvaluation;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_radAmountGubun = rawVisible_radAmountGubun && rawVisible_shpGubunBox;
    const setIsVisible_radAmountGubun = setRawVisible_radAmountGubun;
    const isVisible_btnPrintEmail = rawVisible_btnPrintEmail;
    const setIsVisible_btnPrintEmail = setRawVisible_btnPrintEmail;
    const isVisible_btnPrintBookAddr = rawVisible_btnPrintBookAddr;
    const setIsVisible_btnPrintBookAddr = setRawVisible_btnPrintBookAddr;
    const isVisible_filSaveFile = rawVisible_filSaveFile;
    const setIsVisible_filSaveFile = setRawVisible_filSaveFile;
    const isVisible_fdOpenFile = rawVisible_fdOpenFile;
    const setIsVisible_fdOpenFile = setRawVisible_fdOpenFile;
    const isVisible_gdBookSend = rawVisible_gdBookSend;
    const setIsVisible_gdBookSend = setRawVisible_gdBookSend;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_shpGubunBox;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_radOnlineGubun = rawVisible_radOnlineGubun && rawVisible_shpGubunBox;
    const setIsVisible_radOnlineGubun = setRawVisible_radOnlineGubun;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_radSearchGubun = rawVisible_radSearchGubun && rawVisible_shpGubunBox;
    const setIsVisible_radSearchGubun = setRawVisible_radSearchGubun;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_calTrainingStart = rawVisible_calTrainingStart && rawVisible_shpGubunBox;
    const setIsVisible_calTrainingStart = setRawVisible_calTrainingStart;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_shpGubunBox;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_calTrainingEnd = rawVisible_calTrainingEnd && rawVisible_shpGubunBox;
    const setIsVisible_calTrainingEnd = setRawVisible_calTrainingEnd;
    const isVisible_btnFortec = rawVisible_btnFortec;
    const setIsVisible_btnFortec = setRawVisible_btnFortec;
    const isVisible_btnPrintReRctPDF = rawVisible_btnPrintReRctPDF;
    const setIsVisible_btnPrintReRctPDF = setRawVisible_btnPrintReRctPDF;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_medJubsuCnt2 = rawVisible_medJubsuCnt2;
    const setIsVisible_medJubsuCnt2 = setRawVisible_medJubsuCnt2;
    const isVisible_btnPrintBookAddrAll = rawVisible_btnPrintBookAddrAll;
    const setIsVisible_btnPrintBookAddrAll = setRawVisible_btnPrintBookAddrAll;
    const isVisible_btnPrintEvaluation53 = rawVisible_btnPrintEvaluation53;
    const setIsVisible_btnPrintEvaluation53 = setRawVisible_btnPrintEvaluation53;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPassYn([]);
            setds_oCourse([]);
            setds_oRepayYn([]);
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_oMunjeGubun([]);
            setds_oCourseMunje([]);
            setds_oLicenseYn([]);
            setds_oLastGubun([]);
            setds_ioReport([]);
            setds_ioReportFilter([]);
            setds_oAmountGubun([]);
            setds_ioEmail([]);
            setds_ioEmailFilter([]);
            setds_ioBook([]);
            setds_ioBookFilter([]);
            setds_oOnlineGubun([]);
            setds_oSearchGubun([]);
            setds_ioReport2([]);
            setgds_oPrintReceiptMast([]);
            setds_oTrainingJubsu_Filter([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFortec_OnClick = () => {
        console.log('btnFortec_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnPrintEmail_OnClick = () => {
        console.log('btnPrintEmail_OnClick clicked');
    };
    const btnPrintReRct_OnClick = () => {
        console.log('btnPrintReRct_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintAll = () => {
        console.log('lfn_PrintAll clicked');
    };
    const lfn_PrintBookAddr = () => {
        console.log('lfn_PrintBookAddr clicked');
    };
    const lfn_PrintEvaluation = () => {
        console.log('lfn_PrintEvaluation clicked');
    };
    const lfn_PrintEvaluation53 = () => {
        console.log('lfn_PrintEvaluation53 clicked');
    };
    const lfn_PrintName = () => {
        console.log('lfn_PrintName clicked');
    };
    const lfn_PrintNameBoard = () => {
        console.log('lfn_PrintNameBoard clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oPassYn,
        ds_oCourse,
        ds_oRepayYn,
        ds_oTrainingJubsu,
        ds_oJibu,
        ds_oMunjeGubun,
        ds_oCourseMunje,
        ds_oLicenseYn,
        ds_oLastGubun,
        ds_ioReport,
        ds_ioReportFilter,
        ds_oAmountGubun,
        ds_ioEmail,
        ds_ioEmailFilter,
        ds_ioBook,
        ds_ioBookFilter,
        ds_oOnlineGubun,
        ds_oSearchGubun,
        ds_ioReport2,
        gds_oPrintReceiptMast,
        ds_oTrainingJubsu_Filter,
        isVisible_Grid0,
        setIsVisible_Grid0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdTrainingJubsu,
        setIsVisible_gdTrainingJubsu,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_edTrainingOrderStart,
        setIsVisible_edTrainingOrderStart,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbRepayYn,
        setIsVisible_lbRepayYn,
        isVisible_lbPassYn,
        setIsVisible_lbPassYn,
        isVisible_lbTrainingYear,
        setIsVisible_lbTrainingYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_radRepayYn,
        setIsVisible_radRepayYn,
        isVisible_edTrainingOrderEnd,
        setIsVisible_edTrainingOrderEnd,
        isVisible_radPassYn,
        setIsVisible_radPassYn,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnPrintAll,
        setIsVisible_btnPrintAll,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_lbAbsentCnt,
        setIsVisible_lbAbsentCnt,
        isVisible_btnPrintList1,
        setIsVisible_btnPrintList1,
        isVisible_btnPrintList2,
        setIsVisible_btnPrintList2,
        isVisible_lbLicenseYn,
        setIsVisible_lbLicenseYn,
        isVisible_radLicenseYn,
        setIsVisible_radLicenseYn,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_RadLastGubun,
        setIsVisible_RadLastGubun,
        isVisible_btnPrintEvaluation,
        setIsVisible_btnPrintEvaluation,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_radAmountGubun,
        setIsVisible_radAmountGubun,
        isVisible_btnPrintEmail,
        setIsVisible_btnPrintEmail,
        isVisible_btnPrintBookAddr,
        setIsVisible_btnPrintBookAddr,
        isVisible_filSaveFile,
        setIsVisible_filSaveFile,
        isVisible_fdOpenFile,
        setIsVisible_fdOpenFile,
        isVisible_gdBookSend,
        setIsVisible_gdBookSend,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_radOnlineGubun,
        setIsVisible_radOnlineGubun,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_radSearchGubun,
        setIsVisible_radSearchGubun,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_calTrainingStart,
        setIsVisible_calTrainingStart,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_calTrainingEnd,
        setIsVisible_calTrainingEnd,
        isVisible_btnFortec,
        setIsVisible_btnFortec,
        isVisible_btnPrintReRctPDF,
        setIsVisible_btnPrintReRctPDF,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_medJubsuCnt2,
        setIsVisible_medJubsuCnt2,
        isVisible_btnPrintBookAddrAll,
        setIsVisible_btnPrintBookAddrAll,
        isVisible_btnPrintEvaluation53,
        setIsVisible_btnPrintEvaluation53,
        btnFortec_OnClick,
        btnMutilSort_OnClick,
        btnPrintEmail_OnClick,
        btnPrintReRct_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintAll,
        lfn_PrintBookAddr,
        lfn_PrintEvaluation,
        lfn_PrintEvaluation53,
        lfn_PrintName,
        lfn_PrintNameBoard,
        lfn_PrintScreen,
        lfn_Search,
    };
};