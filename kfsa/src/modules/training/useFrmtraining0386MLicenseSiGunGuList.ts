// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_ioLicenseList, Ids_oJibu, Ids_oGubun, Ids_oPassGubun, Ids_oWorkGubun } from './Frmtraining0386MLicenseSiGunGuListData';

export const useFrmtraining0386MLicenseSiGunGuList = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioLicenseList, setds_ioLicenseList] = useState<Ids_ioLicenseList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdLicenseList, setRawVisible_gdLicenseList] = useState(true);
    const [rawVisible_btnMutilSort, setRawVisible_btnMutilSort] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_medLicenseCnt, setRawVisible_medLicenseCnt] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edSiGunGu, setRawVisible_edSiGunGu] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdLicenseList = rawVisible_gdLicenseList;
    const setIsVisible_gdLicenseList = setRawVisible_gdLicenseList;
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
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_medLicenseCnt = rawVisible_medLicenseCnt;
    const setIsVisible_medLicenseCnt = setRawVisible_medLicenseCnt;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_shpGubunBox;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edSiGunGu = rawVisible_edSiGunGu && rawVisible_shpGubunBox;
    const setIsVisible_edSiGunGu = setRawVisible_edSiGunGu;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox;
    const setIsVisible_Static2 = setRawVisible_Static2;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioLicenseList([]);
            setds_oJibu([]);
            setds_oGubun([]);
            setds_oPassGubun([]);
            setds_oWorkGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_ioLicenseList,
        ds_oJibu,
        ds_oGubun,
        ds_oPassGubun,
        ds_oWorkGubun,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_gdLicenseList,
        setIsVisible_gdLicenseList,
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
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_medLicenseCnt,
        setIsVisible_medLicenseCnt,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edSiGunGu,
        setIsVisible_edSiGunGu,
        isVisible_Static2,
        setIsVisible_Static2,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};