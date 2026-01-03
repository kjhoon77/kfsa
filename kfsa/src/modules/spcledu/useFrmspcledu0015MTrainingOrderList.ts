// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oTrainingOrder, Ids_oJibu, Ids_oSearchGubun, Ids_oCourseGubun, Ids_oMunjeGubun } from './Frmspcledu0015MTrainingOrderListData';

export const useFrmspcledu0015MTrainingOrderList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSearchGubun, setds_oSearchGubun] = useState<Ids_oSearchGubun[]>([]);
    const [ds_oCourseGubun, setds_oCourseGubun] = useState<Ids_oCourseGubun[]>([]);
    const [ds_oMunjeGubun, setds_oMunjeGubun] = useState<Ids_oMunjeGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdTrainingOrder, setRawVisible_gdTrainingOrder] = useState(true);
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
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_radSearchGubun, setRawVisible_radSearchGubun] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdTrainingOrder = rawVisible_gdTrainingOrder;
    const setIsVisible_gdTrainingOrder = setRawVisible_gdTrainingOrder;
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
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_radSearchGubun = rawVisible_radSearchGubun && rawVisible_shpGubunBox;
    const setIsVisible_radSearchGubun = setRawVisible_radSearchGubun;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oTrainingOrder([]);
            setds_oJibu([]);
            setds_oSearchGubun([]);
            setds_oCourseGubun([]);
            setds_oMunjeGubun([]);
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
        ds_oTrainingOrder,
        ds_oJibu,
        ds_oSearchGubun,
        ds_oCourseGubun,
        ds_oMunjeGubun,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdTrainingOrder,
        setIsVisible_gdTrainingOrder,
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
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_radSearchGubun,
        setIsVisible_radSearchGubun,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};