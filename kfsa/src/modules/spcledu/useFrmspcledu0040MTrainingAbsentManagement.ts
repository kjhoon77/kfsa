// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingAbsent, Ids_oCourse, Ids_oJibu, Ids_oAbsentDateGubun, Ids_oTrainingJubsuCnt, Ids_oAbsentDateGubun1, Ids_oAbsentDateGubun2, Ids_oAbsentDateGubun3, Ids_oAbsentDateGubun4 } from './Frmspcledu0040MTrainingAbsentManagementData';

export const useFrmspcledu0040MTrainingAbsentManagement = () => {
    const [ds_ioTrainingAbsent, setds_ioTrainingAbsent] = useState<Ids_ioTrainingAbsent[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAbsentDateGubun, setds_oAbsentDateGubun] = useState<Ids_oAbsentDateGubun[]>([]);
    const [ds_oTrainingJubsuCnt, setds_oTrainingJubsuCnt] = useState<Ids_oTrainingJubsuCnt[]>([]);
    const [ds_oAbsentDateGubun1, setds_oAbsentDateGubun1] = useState<Ids_oAbsentDateGubun1[]>([]);
    const [ds_oAbsentDateGubun2, setds_oAbsentDateGubun2] = useState<Ids_oAbsentDateGubun2[]>([]);
    const [ds_oAbsentDateGubun3, setds_oAbsentDateGubun3] = useState<Ids_oAbsentDateGubun3[]>([]);
    const [ds_oAbsentDateGubun4, setds_oAbsentDateGubun4] = useState<Ids_oAbsentDateGubun4[]>([]);
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
    const [rawVisible_lbAbsentCnt, setRawVisible_lbAbsentCnt] = useState(true);
    const [rawVisible_medAbsenCnt, setRawVisible_medAbsenCnt] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_medEduDateStart, setRawVisible_medEduDateStart] = useState(true);
    const [rawVisible_lbDateWave, setRawVisible_lbDateWave] = useState(true);
    const [rawVisible_medEduDateEnd, setRawVisible_medEduDateEnd] = useState(true);
    const [rawVisible_lbAbsentDateGubun, setRawVisible_lbAbsentDateGubun] = useState(true);
    const [rawVisible_radAbsentDateGubun, setRawVisible_radAbsentDateGubun] = useState(true);
    const [rawVisible_gdTrainingAbsent, setRawVisible_gdTrainingAbsent] = useState(true);
    const [rawVisible_btnCancelAbsent, setRawVisible_btnCancelAbsent] = useState(true);
    const [rawVisible_edTrainingOrder, setRawVisible_edTrainingOrder] = useState(true);
    const [rawVisible_btnAttendance, setRawVisible_btnAttendance] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
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
    const isVisible_lbAbsentCnt = rawVisible_lbAbsentCnt;
    const setIsVisible_lbAbsentCnt = setRawVisible_lbAbsentCnt;
    const isVisible_medAbsenCnt = rawVisible_medAbsenCnt;
    const setIsVisible_medAbsenCnt = setRawVisible_medAbsenCnt;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbTrainingYear = rawVisible_lbTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingYear = setRawVisible_lbTrainingYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_medEduDateStart = rawVisible_medEduDateStart && rawVisible_shpGubunBox;
    const setIsVisible_medEduDateStart = setRawVisible_medEduDateStart;
    const isVisible_lbDateWave = rawVisible_lbDateWave && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave = setRawVisible_lbDateWave;
    const isVisible_medEduDateEnd = rawVisible_medEduDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_medEduDateEnd = setRawVisible_medEduDateEnd;
    const isVisible_lbAbsentDateGubun = rawVisible_lbAbsentDateGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbAbsentDateGubun = setRawVisible_lbAbsentDateGubun;
    const isVisible_radAbsentDateGubun = rawVisible_radAbsentDateGubun && rawVisible_shpGubunBox;
    const setIsVisible_radAbsentDateGubun = setRawVisible_radAbsentDateGubun;
    const isVisible_gdTrainingAbsent = rawVisible_gdTrainingAbsent;
    const setIsVisible_gdTrainingAbsent = setRawVisible_gdTrainingAbsent;
    const isVisible_btnCancelAbsent = rawVisible_btnCancelAbsent && rawVisible_shpBtnBox;
    const setIsVisible_btnCancelAbsent = setRawVisible_btnCancelAbsent;
    const isVisible_edTrainingOrder = rawVisible_edTrainingOrder && rawVisible_shpGubunBox;
    const setIsVisible_edTrainingOrder = setRawVisible_edTrainingOrder;
    const isVisible_btnAttendance = rawVisible_btnAttendance && rawVisible_shpGubunBox;
    const setIsVisible_btnAttendance = setRawVisible_btnAttendance;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingAbsent([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oAbsentDateGubun([]);
            setds_oTrainingJubsuCnt([]);
            setds_oAbsentDateGubun1([]);
            setds_oAbsentDateGubun2([]);
            setds_oAbsentDateGubun3([]);
            setds_oAbsentDateGubun4([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancelAbsent_OnClick = () => {
        console.log('btnCancelAbsent_OnClick clicked');
    };
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_SaveAttendance = () => {
        console.log('lfn_SaveAttendance clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioTrainingAbsent,
        ds_oCourse,
        ds_oJibu,
        ds_oAbsentDateGubun,
        ds_oTrainingJubsuCnt,
        ds_oAbsentDateGubun1,
        ds_oAbsentDateGubun2,
        ds_oAbsentDateGubun3,
        ds_oAbsentDateGubun4,
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
        isVisible_lbAbsentCnt,
        setIsVisible_lbAbsentCnt,
        isVisible_medAbsenCnt,
        setIsVisible_medAbsenCnt,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbTrainingYear,
        setIsVisible_lbTrainingYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_medEduDateStart,
        setIsVisible_medEduDateStart,
        isVisible_lbDateWave,
        setIsVisible_lbDateWave,
        isVisible_medEduDateEnd,
        setIsVisible_medEduDateEnd,
        isVisible_lbAbsentDateGubun,
        setIsVisible_lbAbsentDateGubun,
        isVisible_radAbsentDateGubun,
        setIsVisible_radAbsentDateGubun,
        isVisible_gdTrainingAbsent,
        setIsVisible_gdTrainingAbsent,
        isVisible_btnCancelAbsent,
        setIsVisible_btnCancelAbsent,
        isVisible_edTrainingOrder,
        setIsVisible_edTrainingOrder,
        isVisible_btnAttendance,
        setIsVisible_btnAttendance,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        btnCancelAbsent_OnClick,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_SaveAttendance,
        lfn_Search,
    };
};