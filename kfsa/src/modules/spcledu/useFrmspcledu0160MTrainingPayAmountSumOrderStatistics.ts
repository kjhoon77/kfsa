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
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnMutilSort, setIsVisible_btnMutilSort] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_edTrainingOrderStart, setIsVisible_edTrainingOrderStart] = useState(true);
    const [isVisible_lbTrainingOrder, setIsVisible_lbTrainingOrder] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbTrainingYear, setIsVisible_lbTrainingYear] = useState(true);
    const [isVisible_edTrainingYear, setIsVisible_edTrainingYear] = useState(true);
    const [isVisible_lbNumberWave, setIsVisible_lbNumberWave] = useState(true);
    const [isVisible_edTrainingOrderEnd, setIsVisible_edTrainingOrderEnd] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_lbCourseGubun, setIsVisible_lbCourseGubun] = useState(true);
    const [isVisible_radCourseGubun, setIsVisible_radCourseGubun] = useState(true);
    const [isVisible_lbEduDate, setIsVisible_lbEduDate] = useState(true);
    const [isVisible_calEduDateStart, setIsVisible_calEduDateStart] = useState(true);
    const [isVisible_calEduDateEnd, setIsVisible_calEduDateEnd] = useState(true);
    const [isVisible_calSunapDateEnd, setIsVisible_calSunapDateEnd] = useState(true);
    const [isVisible_lbDateWave2, setIsVisible_lbDateWave2] = useState(true);
    const [isVisible_calSunapDateStart, setIsVisible_calSunapDateStart] = useState(true);
    const [isVisible_lbTextBlue, setIsVisible_lbTextBlue] = useState(true);
    const [isVisible_gdTrainingJubsu, setIsVisible_gdTrainingJubsu] = useState(true);
    const [isVisible_radGubun, setIsVisible_radGubun] = useState(true);
    const [isVisible_lbResdentNoGubun, setIsVisible_lbResdentNoGubun] = useState(true);
    const [isVisible_medTotalCnt, setIsVisible_medTotalCnt] = useState(true);
    const [isVisible_lbTotalCnt, setIsVisible_lbTotalCnt] = useState(true);

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