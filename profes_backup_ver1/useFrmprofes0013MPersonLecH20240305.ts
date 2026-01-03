// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJikwi, Ids_oGubun, Ids_ProfesList, Ids_SearchJogeon, Ids_oJibu, Ids_ProfesList_Chart } from './Frmprofes0013MPersonLecH20240305Data';

export const useFrmprofes0013MPersonLecH20240305 = () => {
    const [ds_oJikwi, setds_oJikwi] = useState<Ids_oJikwi[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesList_Chart, setds_ProfesList_Chart] = useState<Ids_ProfesList_Chart[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_calDateFr, setRawVisible_calDateFr] = useState(true);
    const [rawVisible_calDateTo, setRawVisible_calDateTo] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_cbxJikwi, setRawVisible_cbxJikwi] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbxGubun, setRawVisible_cbxGubun] = useState(true);
    const [rawVisible_TAB_Profes, setRawVisible_TAB_Profes] = useState(true);
    const [rawVisible_Grid0, setRawVisible_Grid0] = useState(true);
    const [rawVisible_StartDate, setRawVisible_StartDate] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_XChart1, setRawVisible_XChart1] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_calDateFr = rawVisible_calDateFr && rawVisible_shpGubunBox;
    const setIsVisible_calDateFr = setRawVisible_calDateFr;
    const isVisible_calDateTo = rawVisible_calDateTo && rawVisible_shpGubunBox;
    const setIsVisible_calDateTo = setRawVisible_calDateTo;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_cbxJikwi = rawVisible_cbxJikwi && rawVisible_shpGubunBox;
    const setIsVisible_cbxJikwi = setRawVisible_cbxJikwi;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbxGubun = rawVisible_cbxGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxGubun = setRawVisible_cbxGubun;
    const isVisible_TAB_Profes = rawVisible_TAB_Profes;
    const setIsVisible_TAB_Profes = setRawVisible_TAB_Profes;
    const isVisible_Grid0 = rawVisible_Grid0;
    const setIsVisible_Grid0 = setRawVisible_Grid0;
    const isVisible_StartDate = rawVisible_StartDate;
    const setIsVisible_StartDate = setRawVisible_StartDate;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_XChart1 = rawVisible_XChart1;
    const setIsVisible_XChart1 = setRawVisible_XChart1;
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJikwi([]);
            setds_oGubun([]);
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oJibu([]);
            setds_ProfesList_Chart([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
        ds_oJikwi,
        ds_oGubun,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oJibu,
        ds_ProfesList_Chart,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_calDateFr,
        setIsVisible_calDateFr,
        isVisible_calDateTo,
        setIsVisible_calDateTo,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_cbxJikwi,
        setIsVisible_cbxJikwi,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxGubun,
        setIsVisible_cbxGubun,
        isVisible_TAB_Profes,
        setIsVisible_TAB_Profes,
        isVisible_Grid0,
        setIsVisible_Grid0,
        isVisible_StartDate,
        setIsVisible_StartDate,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_XChart1,
        setIsVisible_XChart1,
        tabValue_TAB_Profes,
        setTabValue_TAB_Profes,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};