// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oExamAbsent, Ids_oSearchGubun, Ids_oCourse, Ids_oJibu, Ids_oExamAbsentTemp, Ids_oJubsuChasuGubun } from './Frmtraining0423MExamAbsentListData';

export const useFrmtraining0423MExamAbsentList = () => {
    const [ds_oExamAbsent, setds_oExamAbsent] = useState<Ids_oExamAbsent[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oExamAbsentTemp, setds_oExamAbsentTemp] = useState<Ids_oExamAbsentTemp[]>([]);
    const [ds_oJubsuChasuGubun, setds_oJubsuChasuGubun] = useState<Ids_oJubsuChasuGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_edExamOrderStart, setRawVisible_edExamOrderStart] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbAbsentCnt1, setRawVisible_lbAbsentCnt1] = useState(true);
    const [rawVisible_medAbsenCnt1, setRawVisible_medAbsenCnt1] = useState(true);
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_edExamYear, setRawVisible_edExamYear] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_gdExamAbsent, setRawVisible_gdExamAbsent] = useState(true);
    const [rawVisible_btnPrintJubsuList, setRawVisible_btnPrintJubsuList] = useState(true);
    const [rawVisible_btnPrintJubsuListBoard, setRawVisible_btnPrintJubsuListBoard] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_edExamOrderEnd, setRawVisible_edExamOrderEnd] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_lbAbsentDateGubun, setRawVisible_lbAbsentDateGubun] = useState(true);
    const [rawVisible_radJubsuChasuGubun, setRawVisible_radJubsuChasuGubun] = useState(true);
    const [rawVisible_lbAbsentCnt2, setRawVisible_lbAbsentCnt2] = useState(true);
    const [rawVisible_medAbsenCnt2, setRawVisible_medAbsenCnt2] = useState(true);
    const [rawVisible_lbAbsentCnt, setRawVisible_lbAbsentCnt] = useState(true);
    const [rawVisible_medAbsenCnt, setRawVisible_medAbsenCnt] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
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
    const isVisible_edExamOrderStart = rawVisible_edExamOrderStart && rawVisible_shpGubunBox;
    const setIsVisible_edExamOrderStart = setRawVisible_edExamOrderStart;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbAbsentCnt1 = rawVisible_lbAbsentCnt1;
    const setIsVisible_lbAbsentCnt1 = setRawVisible_lbAbsentCnt1;
    const isVisible_medAbsenCnt1 = rawVisible_medAbsenCnt1;
    const setIsVisible_medAbsenCnt1 = setRawVisible_medAbsenCnt1;
    const isVisible_lbTrainingYear = rawVisible_lbTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingYear = setRawVisible_lbTrainingYear;
    const isVisible_edExamYear = rawVisible_edExamYear && rawVisible_shpGubunBox;
    const setIsVisible_edExamYear = setRawVisible_edExamYear;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_gdExamAbsent = rawVisible_gdExamAbsent;
    const setIsVisible_gdExamAbsent = setRawVisible_gdExamAbsent;
    const isVisible_btnPrintJubsuList = rawVisible_btnPrintJubsuList && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintJubsuList = setRawVisible_btnPrintJubsuList;
    const isVisible_btnPrintJubsuListBoard = rawVisible_btnPrintJubsuListBoard && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintJubsuListBoard = setRawVisible_btnPrintJubsuListBoard;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_edExamOrderEnd = rawVisible_edExamOrderEnd && rawVisible_shpGubunBox;
    const setIsVisible_edExamOrderEnd = setRawVisible_edExamOrderEnd;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave && rawVisible_shpGubunBox;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_lbAbsentDateGubun = rawVisible_lbAbsentDateGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbAbsentDateGubun = setRawVisible_lbAbsentDateGubun;
    const isVisible_radJubsuChasuGubun = rawVisible_radJubsuChasuGubun && rawVisible_shpGubunBox;
    const setIsVisible_radJubsuChasuGubun = setRawVisible_radJubsuChasuGubun;
    const isVisible_lbAbsentCnt2 = rawVisible_lbAbsentCnt2;
    const setIsVisible_lbAbsentCnt2 = setRawVisible_lbAbsentCnt2;
    const isVisible_medAbsenCnt2 = rawVisible_medAbsenCnt2;
    const setIsVisible_medAbsenCnt2 = setRawVisible_medAbsenCnt2;
    const isVisible_lbAbsentCnt = rawVisible_lbAbsentCnt;
    const setIsVisible_lbAbsentCnt = setRawVisible_lbAbsentCnt;
    const isVisible_medAbsenCnt = rawVisible_medAbsenCnt;
    const setIsVisible_medAbsenCnt = setRawVisible_medAbsenCnt;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamAbsent([]);
            setds_oSearchGubun([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oExamAbsentTemp([]);
            setds_oJubsuChasuGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Init = () => {
        console.log('lfn_Init clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintJubsuList = () => {
        console.log('lfn_PrintJubsuList clicked');
    };
    const lfn_PrintJubsuListBoard = () => {
        console.log('lfn_PrintJubsuListBoard clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oExamAbsent,
        ds_oSearchGubun,
        ds_oCourse,
        ds_oJibu,
        ds_oExamAbsentTemp,
        ds_oJubsuChasuGubun,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
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
        isVisible_edExamOrderStart,
        setIsVisible_edExamOrderStart,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbAbsentCnt1,
        setIsVisible_lbAbsentCnt1,
        isVisible_medAbsenCnt1,
        setIsVisible_medAbsenCnt1,
        isVisible_lbTrainingYear,
        setIsVisible_lbTrainingYear,
        isVisible_edExamYear,
        setIsVisible_edExamYear,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_gdExamAbsent,
        setIsVisible_gdExamAbsent,
        isVisible_btnPrintJubsuList,
        setIsVisible_btnPrintJubsuList,
        isVisible_btnPrintJubsuListBoard,
        setIsVisible_btnPrintJubsuListBoard,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_edExamOrderEnd,
        setIsVisible_edExamOrderEnd,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_lbAbsentDateGubun,
        setIsVisible_lbAbsentDateGubun,
        isVisible_radJubsuChasuGubun,
        setIsVisible_radJubsuChasuGubun,
        isVisible_lbAbsentCnt2,
        setIsVisible_lbAbsentCnt2,
        isVisible_medAbsenCnt2,
        setIsVisible_medAbsenCnt2,
        isVisible_lbAbsentCnt,
        setIsVisible_lbAbsentCnt,
        isVisible_medAbsenCnt,
        setIsVisible_medAbsenCnt,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Init,
        lfn_Print,
        lfn_PrintJubsuList,
        lfn_PrintJubsuListBoard,
        lfn_PrintScreen,
        lfn_Search,
    };
};