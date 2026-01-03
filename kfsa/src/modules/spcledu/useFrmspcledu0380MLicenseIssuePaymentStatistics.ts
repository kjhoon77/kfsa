// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingJubsu, Ids_oCourse, Ids_oJibu, Ids_oWorkGubun, Ids_oPassGubun, Ids_ioLicenseSusuList, Ids_ioLicenseSusuStatistics, Ids_ioLicenseSusuDecision, Ids_oPrintGubun, Ids_oSerchGubun, Ids_LicenseGubun } from './Frmspcledu0380MLicenseIssuePaymentStatisticsData';

export const useFrmspcledu0380MLicenseIssuePaymentStatistics = () => {
    const [ds_oTrainingJubsu, setds_oTrainingJubsu] = useState<Ids_oTrainingJubsu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_ioLicenseSusuList, setds_ioLicenseSusuList] = useState<Ids_ioLicenseSusuList[]>([]);
    const [ds_ioLicenseSusuStatistics, setds_ioLicenseSusuStatistics] = useState<Ids_ioLicenseSusuStatistics[]>([]);
    const [ds_ioLicenseSusuDecision, setds_ioLicenseSusuDecision] = useState<Ids_ioLicenseSusuDecision[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oSerchGubun, setds_oSerchGubun] = useState<Ids_oSerchGubun[]>([]);
    const [ds_LicenseGubun, setds_LicenseGubun] = useState<Ids_LicenseGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourseStart, setRawVisible_cbxCourseStart] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_lbWorkGubun, setRawVisible_lbWorkGubun] = useState(true);
    const [rawVisible_radWorkGubun, setRawVisible_radWorkGubun] = useState(true);
    const [rawVisible_lbPassGubun, setRawVisible_lbPassGubun] = useState(true);
    const [rawVisible_cbxPassGubunStart, setRawVisible_cbxPassGubunStart] = useState(true);
    const [rawVisible_cbxCourseEnd, setRawVisible_cbxCourseEnd] = useState(true);
    const [rawVisible_cbxPassGubunEnd, setRawVisible_cbxPassGubunEnd] = useState(true);
    const [rawVisible_lbWave1, setRawVisible_lbWave1] = useState(true);
    const [rawVisible_lbWave2, setRawVisible_lbWave2] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_Radio0, setRawVisible_Radio0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_gdLicenseSendResend, setRawVisible_gdLicenseSendResend] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_Button1, setRawVisible_Button1] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourseStart = rawVisible_cbxCourseStart && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourseStart = setRawVisible_cbxCourseStart;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_lbWorkGubun = rawVisible_lbWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbWorkGubun = setRawVisible_lbWorkGubun;
    const isVisible_radWorkGubun = rawVisible_radWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_radWorkGubun = setRawVisible_radWorkGubun;
    const isVisible_lbPassGubun = rawVisible_lbPassGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbPassGubun = setRawVisible_lbPassGubun;
    const isVisible_cbxPassGubunStart = rawVisible_cbxPassGubunStart && rawVisible_shpGubunBox;
    const setIsVisible_cbxPassGubunStart = setRawVisible_cbxPassGubunStart;
    const isVisible_cbxCourseEnd = rawVisible_cbxCourseEnd && rawVisible_shpGubunBox;
    const setIsVisible_cbxCourseEnd = setRawVisible_cbxCourseEnd;
    const isVisible_cbxPassGubunEnd = rawVisible_cbxPassGubunEnd && rawVisible_shpGubunBox;
    const setIsVisible_cbxPassGubunEnd = setRawVisible_cbxPassGubunEnd;
    const isVisible_lbWave1 = rawVisible_lbWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbWave1 = setRawVisible_lbWave1;
    const isVisible_lbWave2 = rawVisible_lbWave2 && rawVisible_shpGubunBox;
    const setIsVisible_lbWave2 = setRawVisible_lbWave2;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radPrintGubun = rawVisible_radPrintGubun && rawVisible_shpGubunBox;
    const setIsVisible_radPrintGubun = setRawVisible_radPrintGubun;
    const isVisible_Radio0 = rawVisible_Radio0 && rawVisible_shpGubunBox;
    const setIsVisible_Radio0 = setRawVisible_Radio0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_gdLicenseSendResend = rawVisible_gdLicenseSendResend;
    const setIsVisible_gdLicenseSendResend = setRawVisible_gdLicenseSendResend;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_Button1 = rawVisible_Button1 && rawVisible_shpBtnBox;
    const setIsVisible_Button1 = setRawVisible_Button1;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingJubsu([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oWorkGubun([]);
            setds_oPassGubun([]);
            setds_ioLicenseSusuList([]);
            setds_ioLicenseSusuStatistics([]);
            setds_ioLicenseSusuDecision([]);
            setds_oPrintGubun([]);
            setds_oSerchGubun([]);
            setds_LicenseGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

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
    const lfn_localExcel = () => {
        console.log('lfn_localExcel clicked');
    };

    return {
        isLoading,
        ds_oTrainingJubsu,
        ds_oCourse,
        ds_oJibu,
        ds_oWorkGubun,
        ds_oPassGubun,
        ds_ioLicenseSusuList,
        ds_ioLicenseSusuStatistics,
        ds_ioLicenseSusuDecision,
        ds_oPrintGubun,
        ds_oSerchGubun,
        ds_LicenseGubun,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourseStart,
        setIsVisible_cbxCourseStart,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_lbWorkGubun,
        setIsVisible_lbWorkGubun,
        isVisible_radWorkGubun,
        setIsVisible_radWorkGubun,
        isVisible_lbPassGubun,
        setIsVisible_lbPassGubun,
        isVisible_cbxPassGubunStart,
        setIsVisible_cbxPassGubunStart,
        isVisible_cbxCourseEnd,
        setIsVisible_cbxCourseEnd,
        isVisible_cbxPassGubunEnd,
        setIsVisible_cbxPassGubunEnd,
        isVisible_lbWave1,
        setIsVisible_lbWave1,
        isVisible_lbWave2,
        setIsVisible_lbWave2,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radPrintGubun,
        setIsVisible_radPrintGubun,
        isVisible_Radio0,
        setIsVisible_Radio0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_gdLicenseSendResend,
        setIsVisible_gdLicenseSendResend,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_Button1,
        setIsVisible_Button1,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};