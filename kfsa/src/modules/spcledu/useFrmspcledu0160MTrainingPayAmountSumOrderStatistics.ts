// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oTrainingJubsu, Ids_oJibu, Ids_oCourseGubun, Ids_oTrainingJubsu_0, Ids_oGubun } from './Frmspcledu0160MTrainingPayAmountSumOrderStatisticsData';

export const useFrmspcledu0160MTrainingPayAmountSumOrderStatistics = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oTrainingJubsu_0, setds_oTrainingJubsu_0] = useState<Ids_oTrainingJubsu_0[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
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
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_edTrainingOrderEnd, setRawVisible_edTrainingOrderEnd] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_lbCourseGubun, setRawVisible_lbCourseGubun] = useState(true);
    const [rawVisible_radCourseGubun, setRawVisible_radCourseGubun] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_calEduDateStart, setRawVisible_calEduDateStart] = useState(true);
    const [rawVisible_calEduDateEnd, setRawVisible_calEduDateEnd] = useState(true);
    const [rawVisible_calSunapDateEnd, setRawVisible_calSunapDateEnd] = useState(true);
    const [rawVisible_lbDateWave2, setRawVisible_lbDateWave2] = useState(true);
    const [rawVisible_calSunapDateStart, setRawVisible_calSunapDateStart] = useState(true);
    const [rawVisible_lbTextBlue, setRawVisible_lbTextBlue] = useState(true);
    const [rawVisible_gdTrainingJubsu, setRawVisible_gdTrainingJubsu] = useState(true);
    const [rawVisible_radGubun, setRawVisible_radGubun] = useState(true);
    const [rawVisible_lbResdentNoGubun, setRawVisible_lbResdentNoGubun] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
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
    const isVisible_edTrainingOrderStart = rawVisible_edTrainingOrderStart && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrderStart = setRawVisible_edTrainingOrderStart;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbTrainingYear = rawVisible_lbTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingYear = setRawVisible_lbTrainingYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave && rawVisible_shpGubunBox;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_edTrainingOrderEnd = rawVisible_edTrainingOrderEnd && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrderEnd = setRawVisible_edTrainingOrderEnd;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_lbCourseGubun = rawVisible_lbCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbCourseGubun = setRawVisible_lbCourseGubun;
    const isVisible_radCourseGubun = rawVisible_radCourseGubun && rawVisible_shpGubunBox;
    const setIsVisible_radCourseGubun = setRawVisible_radCourseGubun;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_calEduDateStart = rawVisible_calEduDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calEduDateStart = setRawVisible_calEduDateStart;
    const isVisible_calEduDateEnd = rawVisible_calEduDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calEduDateEnd = setRawVisible_calEduDateEnd;
    const isVisible_calSunapDateEnd = rawVisible_calSunapDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calSunapDateEnd = setRawVisible_calSunapDateEnd;
    const isVisible_lbDateWave2 = rawVisible_lbDateWave2 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave2 = setRawVisible_lbDateWave2;
    const isVisible_calSunapDateStart = rawVisible_calSunapDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calSunapDateStart = setRawVisible_calSunapDateStart;
    const isVisible_lbTextBlue = rawVisible_lbTextBlue && rawVisible_shpGubunBox;
    const setIsVisible_lbTextBlue = setRawVisible_lbTextBlue;
    const isVisible_gdTrainingJubsu = rawVisible_gdTrainingJubsu;
    const setIsVisible_gdTrainingJubsu = setRawVisible_gdTrainingJubsu;
    const isVisible_radGubun = rawVisible_radGubun && rawVisible_shpGubunBox;
    const setIsVisible_radGubun = setRawVisible_radGubun;
    const isVisible_lbResdentNoGubun = rawVisible_lbResdentNoGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbResdentNoGubun = setRawVisible_lbResdentNoGubun;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingJubsu([]);
            setds_oJibu([]);
            setds_oCourseGubun([]);
            setds_oTrainingJubsu_0([]);
            setds_oGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oTrainingJubsu,
        ds_oJibu,
        ds_oCourseGubun,
        ds_oTrainingJubsu_0,
        ds_oGubun,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
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
        isVisible_edTrainingOrderStart,
        setIsVisible_edTrainingOrderStart,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbTrainingYear,
        setIsVisible_lbTrainingYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_edTrainingOrderEnd,
        setIsVisible_edTrainingOrderEnd,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbCourseGubun,
        setIsVisible_lbCourseGubun,
        isVisible_radCourseGubun,
        setIsVisible_radCourseGubun,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_calEduDateStart,
        setIsVisible_calEduDateStart,
        isVisible_calEduDateEnd,
        setIsVisible_calEduDateEnd,
        isVisible_calSunapDateEnd,
        setIsVisible_calSunapDateEnd,
        isVisible_lbDateWave2,
        setIsVisible_lbDateWave2,
        isVisible_calSunapDateStart,
        setIsVisible_calSunapDateStart,
        isVisible_lbTextBlue,
        setIsVisible_lbTextBlue,
        isVisible_gdTrainingJubsu,
        setIsVisible_gdTrainingJubsu,
        isVisible_radGubun,
        setIsVisible_radGubun,
        isVisible_lbResdentNoGubun,
        setIsVisible_lbResdentNoGubun,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};