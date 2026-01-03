// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ProfesList, Ids_SearchJogeon, Ids_oEduGubun } from './FrmprofesPopup0001PersonLecturingData';

export const useFrmprofesPopup0001PersonLecturing = () => {
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_cbxEduGubun, setRawVisible_cbxEduGubun] = useState(true);
    const [rawVisible_txtName, setRawVisible_txtName] = useState(true);
    const [rawVisible_calDateFr, setRawVisible_calDateFr] = useState(true);
    const [rawVisible_calDateTo, setRawVisible_calDateTo] = useState(true);
    const [rawVisible_lbLabel, setRawVisible_lbLabel] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
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
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_cbxEduGubun = rawVisible_cbxEduGubun && rawVisible_shpGubunBox;
    const setIsVisible_cbxEduGubun = setRawVisible_cbxEduGubun;
    const isVisible_txtName = rawVisible_txtName && rawVisible_shpGubunBox;
    const setIsVisible_txtName = setRawVisible_txtName;
    const isVisible_calDateFr = rawVisible_calDateFr && rawVisible_shpGubunBox;
    const setIsVisible_calDateFr = setRawVisible_calDateFr;
    const isVisible_calDateTo = rawVisible_calDateTo && rawVisible_shpGubunBox;
    const setIsVisible_calDateTo = setRawVisible_calDateTo;
    const isVisible_lbLabel = rawVisible_lbLabel;
    const setIsVisible_lbLabel = setRawVisible_lbLabel;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oEduGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnPrint_OnClick = () => {
        console.log('btnPrint_OnClick clicked');
    };
    const btnSearch_OnClick = () => {
        console.log('btnSearch_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oEduGubun,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_Static0,
        setIsVisible_Static0,
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
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_cbxEduGubun,
        setIsVisible_cbxEduGubun,
        isVisible_txtName,
        setIsVisible_txtName,
        isVisible_calDateFr,
        setIsVisible_calDateFr,
        isVisible_calDateTo,
        setIsVisible_calDateTo,
        isVisible_lbLabel,
        setIsVisible_lbLabel,
        btnExcell_OnClick,
        btnPrint_OnClick,
        btnSearch_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};