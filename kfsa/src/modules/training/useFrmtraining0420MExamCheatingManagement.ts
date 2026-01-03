// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioExamCheat, Ids_oCheatGubun, Ids_oCourse, Ids_oPrintGubun, Ids_oJibu, Ids_oExamOrderMgno, Ids_oExamCheatReport, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete } from './Frmtraining0420MExamCheatingManagementData';

export const useFrmtraining0420MExamCheatingManagement = () => {
    const [ds_ioExamCheat, setds_ioExamCheat] = useState<Ids_ioExamCheat[]>([]);
    const [ds_oCheatGubun, setds_oCheatGubun] = useState<Ids_oCheatGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oExamCheatReport, setds_oExamCheatReport] = useState<Ids_oExamCheatReport[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdExamCheat, setRawVisible_gdExamCheat] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_lbExamCheat, setRawVisible_lbExamCheat] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbBIRTHDAY, setRawVisible_lbBIRTHDAY] = useState(true);
    const [rawVisible_medRESIDENTNO, setRawVisible_medRESIDENTNO] = useState(true);
    const [rawVisible_lbCheatDate, setRawVisible_lbCheatDate] = useState(true);
    const [rawVisible_cxbExamCheat, setRawVisible_cxbExamCheat] = useState(true);
    const [rawVisible_calCheatDate, setRawVisible_calCheatDate] = useState(true);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbPersonNm2, setRawVisible_lbPersonNm2] = useState(true);
    const [rawVisible_edPersonNm2, setRawVisible_edPersonNm2] = useState(true);
    const [rawVisible_lbBIRTHDAY2, setRawVisible_lbBIRTHDAY2] = useState(true);
    const [rawVisible_medRESIDENTNO2, setRawVisible_medRESIDENTNO2] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_btnScanSave, setRawVisible_btnScanSave] = useState(true);
    const [rawVisible_btnLocalFormView, setRawVisible_btnLocalFormView] = useState(true);
    const [rawVisible_edScanFileName, setRawVisible_edScanFileName] = useState(true);
    const [rawVisible_btnScanSearch, setRawVisible_btnScanSearch] = useState(true);
    const [rawVisible_btnScan, setRawVisible_btnScan] = useState(true);
    const [rawVisible_btnSeverFormView, setRawVisible_btnSeverFormView] = useState(true);
    const [rawVisible_edFormResult, setRawVisible_edFormResult] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_btnFormDelete, setRawVisible_btnFormDelete] = useState(false);
    const [rawVisible_fdImage2, setRawVisible_fdImage2] = useState(true);
    const [rawVisible_hfImage2, setRawVisible_hfImage2] = useState(true);
    const [rawVisible_fiImageFile2, setRawVisible_fiImageFile2] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdExamCheat = rawVisible_gdExamCheat;
    const setIsVisible_gdExamCheat = setRawVisible_gdExamCheat;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox3;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_btnMutilSort = rawVisible_btnMutilSort;
    const setIsVisible_btnMutilSort = setRawVisible_btnMutilSort;
    const isVisible_lbExamCheat = rawVisible_lbExamCheat && rawVisible_shpGubunBox3;
    const setIsVisible_lbExamCheat = setRawVisible_lbExamCheat;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox3;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpGubunBox1;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpGubunBox1;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpGubunBox3;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox1;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox1;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbBIRTHDAY = rawVisible_lbBIRTHDAY && rawVisible_shpGubunBox1;
    const setIsVisible_lbBIRTHDAY = setRawVisible_lbBIRTHDAY;
    const isVisible_medRESIDENTNO = rawVisible_medRESIDENTNO && rawVisible_shpGubunBox1;
    const setIsVisible_medRESIDENTNO = setRawVisible_medRESIDENTNO;
    const isVisible_lbCheatDate = rawVisible_lbCheatDate && rawVisible_shpGubunBox3;
    const setIsVisible_lbCheatDate = setRawVisible_lbCheatDate;
    const isVisible_cxbExamCheat = rawVisible_cxbExamCheat && rawVisible_shpGubunBox3;
    const setIsVisible_cxbExamCheat = setRawVisible_cxbExamCheat;
    const isVisible_calCheatDate = rawVisible_calCheatDate && rawVisible_shpGubunBox3;
    const setIsVisible_calCheatDate = setRawVisible_calCheatDate;
    const isVisible_radPrintGubun = rawVisible_radPrintGubun && rawVisible_shpGubunBox2;
    const setIsVisible_radPrintGubun = setRawVisible_radPrintGubun;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpGubunBox2;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox3;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox3;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbPersonNm2 = rawVisible_lbPersonNm2 && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm2 = setRawVisible_lbPersonNm2;
    const isVisible_edPersonNm2 = rawVisible_edPersonNm2 && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm2 = setRawVisible_edPersonNm2;
    const isVisible_lbBIRTHDAY2 = rawVisible_lbBIRTHDAY2 && rawVisible_shpGubunBox3;
    const setIsVisible_lbBIRTHDAY2 = setRawVisible_lbBIRTHDAY2;
    const isVisible_medRESIDENTNO2 = rawVisible_medRESIDENTNO2 && rawVisible_shpGubunBox3;
    const setIsVisible_medRESIDENTNO2 = setRawVisible_medRESIDENTNO2;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_shpBtnBox;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_Shape0 = rawVisible_Shape0 && rawVisible_shpGubunBox3;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_btnScanSave = rawVisible_btnScanSave && rawVisible_Shape0;
    const setIsVisible_btnScanSave = setRawVisible_btnScanSave;
    const isVisible_btnLocalFormView = rawVisible_btnLocalFormView && rawVisible_Shape0;
    const setIsVisible_btnLocalFormView = setRawVisible_btnLocalFormView;
    const isVisible_edScanFileName = rawVisible_edScanFileName && rawVisible_Shape0;
    const setIsVisible_edScanFileName = setRawVisible_edScanFileName;
    const isVisible_btnScanSearch = rawVisible_btnScanSearch && rawVisible_Shape0;
    const setIsVisible_btnScanSearch = setRawVisible_btnScanSearch;
    const isVisible_btnScan = rawVisible_btnScan && rawVisible_Shape0;
    const setIsVisible_btnScan = setRawVisible_btnScan;
    const isVisible_btnSeverFormView = rawVisible_btnSeverFormView && rawVisible_Shape0;
    const setIsVisible_btnSeverFormView = setRawVisible_btnSeverFormView;
    const isVisible_edFormResult = rawVisible_edFormResult && rawVisible_Shape0;
    const setIsVisible_edFormResult = setRawVisible_edFormResult;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_btnFormDelete = rawVisible_btnFormDelete && rawVisible_Shape0;
    const setIsVisible_btnFormDelete = setRawVisible_btnFormDelete;
    const isVisible_fdImage2 = rawVisible_fdImage2 && rawVisible_shpGubunBox3;
    const setIsVisible_fdImage2 = setRawVisible_fdImage2;
    const isVisible_hfImage2 = rawVisible_hfImage2 && rawVisible_shpGubunBox3;
    const setIsVisible_hfImage2 = setRawVisible_hfImage2;
    const isVisible_fiImageFile2 = rawVisible_fiImageFile2 && rawVisible_shpGubunBox3;
    const setIsVisible_fiImageFile2 = setRawVisible_fiImageFile2;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_medPersonKey = rawVisible_medPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioExamCheat([]);
            setds_oCheatGubun([]);
            setds_oCourse([]);
            setds_oPrintGubun([]);
            setds_oJibu([]);
            setds_oExamOrderMgno([]);
            setds_oExamCheatReport([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnLocalFormView_OnClick = () => {
        console.log('btnLocalFormView_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnScanSave_OnClick = () => {
        console.log('btnScanSave_OnClick clicked');
    };
    const btnScanSearch_OnClick = () => {
        console.log('btnScanSearch_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
    };
    const btnSeverFormView_OnClick = () => {
        console.log('btnSeverFormView_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
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

    return {
        isLoading,
        ds_ioExamCheat,
        ds_oCheatGubun,
        ds_oCourse,
        ds_oPrintGubun,
        ds_oJibu,
        ds_oExamOrderMgno,
        ds_oExamCheatReport,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdExamCheat,
        setIsVisible_gdExamCheat,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_btnMutilSort,
        setIsVisible_btnMutilSort,
        isVisible_lbExamCheat,
        setIsVisible_lbExamCheat,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
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
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbBIRTHDAY,
        setIsVisible_lbBIRTHDAY,
        isVisible_medRESIDENTNO,
        setIsVisible_medRESIDENTNO,
        isVisible_lbCheatDate,
        setIsVisible_lbCheatDate,
        isVisible_cxbExamCheat,
        setIsVisible_cxbExamCheat,
        isVisible_calCheatDate,
        setIsVisible_calCheatDate,
        isVisible_radPrintGubun,
        setIsVisible_radPrintGubun,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbPersonNm2,
        setIsVisible_lbPersonNm2,
        isVisible_edPersonNm2,
        setIsVisible_edPersonNm2,
        isVisible_lbBIRTHDAY2,
        setIsVisible_lbBIRTHDAY2,
        isVisible_medRESIDENTNO2,
        setIsVisible_medRESIDENTNO2,
        isVisible_btnInput,
        setIsVisible_btnInput,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_btnScanSave,
        setIsVisible_btnScanSave,
        isVisible_btnLocalFormView,
        setIsVisible_btnLocalFormView,
        isVisible_edScanFileName,
        setIsVisible_edScanFileName,
        isVisible_btnScanSearch,
        setIsVisible_btnScanSearch,
        isVisible_btnScan,
        setIsVisible_btnScan,
        isVisible_btnSeverFormView,
        setIsVisible_btnSeverFormView,
        isVisible_edFormResult,
        setIsVisible_edFormResult,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_btnFormDelete,
        setIsVisible_btnFormDelete,
        isVisible_fdImage2,
        setIsVisible_fdImage2,
        isVisible_hfImage2,
        setIsVisible_hfImage2,
        isVisible_fiImageFile2,
        setIsVisible_fiImageFile2,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        btnFormDelete_OnClick,
        btnLocalFormView_OnClick,
        btnMutilSort_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSeverFormView_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};