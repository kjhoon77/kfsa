// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingOrder, Ids_oJibu, Ids_oCourse, Ids_oTrainingOrderChange, Ids_ioTrainingChangeinfo } from './Frmspcledu0022PTrainingOrderChangeData';

export const useFrmspcledu0022PTrainingOrderChange = () => {
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingOrderChange, setds_oTrainingOrderChange] = useState<Ids_oTrainingOrderChange[]>([]);
    const [ds_ioTrainingChangeinfo, setds_ioTrainingChangeinfo] = useState<Ids_ioTrainingChangeinfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_lbAfter, setRawVisible_lbAfter] = useState(true);
    const [rawVisible_lbBefore, setRawVisible_lbBefore] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbBeforeCourse, setRawVisible_lbBeforeCourse] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(false);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbBeforeJibu, setRawVisible_lbBeforeJibu] = useState(true);
    const [rawVisible_edBeforeJibu, setRawVisible_edBeforeJibu] = useState(true);
    const [rawVisible_edBeforeCourse, setRawVisible_edBeforeCourse] = useState(true);
    const [rawVisible_edBeforeOrder, setRawVisible_edBeforeOrder] = useState(true);
    const [rawVisible_lbBeforeOrder, setRawVisible_lbBeforeOrder] = useState(true);
    const [rawVisible_lbBeforeYear, setRawVisible_lbBeforeYear] = useState(true);
    const [rawVisible_edBeforeYear, setRawVisible_edBeforeYear] = useState(true);
    const [rawVisible_lbAfterCourse, setRawVisible_lbAfterCourse] = useState(true);
    const [rawVisible_lbAfterJibu, setRawVisible_lbAfterJibu] = useState(true);
    const [rawVisible_lbAfterYear, setRawVisible_lbAfterYear] = useState(true);
    const [rawVisible_lbAfterOrder, setRawVisible_lbAfterOrder] = useState(true);
    const [rawVisible_edAfterOrder, setRawVisible_edAfterOrder] = useState(true);
    const [rawVisible_edAfterYear, setRawVisible_edAfterYear] = useState(true);
    const [rawVisible_gdTrainingOrder, setRawVisible_gdTrainingOrder] = useState(true);
    const [rawVisible_cbxAfterCourse, setRawVisible_cbxAfterCourse] = useState(true);
    const [rawVisible_cbxAfterJibu, setRawVisible_cbxAfterJibu] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_lbAfter = rawVisible_lbAfter;
    const setIsVisible_lbAfter = setRawVisible_lbAfter;
    const isVisible_lbBefore = rawVisible_lbBefore;
    const setIsVisible_lbBefore = setRawVisible_lbBefore;
    const isVisible_btnSearch = rawVisible_btnSearch;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbBeforeCourse = rawVisible_lbBeforeCourse;
    const setIsVisible_lbBeforeCourse = setRawVisible_lbBeforeCourse;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_lbJibu = rawVisible_lbJibu;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbBeforeJibu = rawVisible_lbBeforeJibu;
    const setIsVisible_lbBeforeJibu = setRawVisible_lbBeforeJibu;
    const isVisible_edBeforeJibu = rawVisible_edBeforeJibu;
    const setIsVisible_edBeforeJibu = setRawVisible_edBeforeJibu;
    const isVisible_edBeforeCourse = rawVisible_edBeforeCourse;
    const setIsVisible_edBeforeCourse = setRawVisible_edBeforeCourse;
    const isVisible_edBeforeOrder = rawVisible_edBeforeOrder;
    const setIsVisible_edBeforeOrder = setRawVisible_edBeforeOrder;
    const isVisible_lbBeforeOrder = rawVisible_lbBeforeOrder;
    const setIsVisible_lbBeforeOrder = setRawVisible_lbBeforeOrder;
    const isVisible_lbBeforeYear = rawVisible_lbBeforeYear;
    const setIsVisible_lbBeforeYear = setRawVisible_lbBeforeYear;
    const isVisible_edBeforeYear = rawVisible_edBeforeYear;
    const setIsVisible_edBeforeYear = setRawVisible_edBeforeYear;
    const isVisible_lbAfterCourse = rawVisible_lbAfterCourse;
    const setIsVisible_lbAfterCourse = setRawVisible_lbAfterCourse;
    const isVisible_lbAfterJibu = rawVisible_lbAfterJibu;
    const setIsVisible_lbAfterJibu = setRawVisible_lbAfterJibu;
    const isVisible_lbAfterYear = rawVisible_lbAfterYear;
    const setIsVisible_lbAfterYear = setRawVisible_lbAfterYear;
    const isVisible_lbAfterOrder = rawVisible_lbAfterOrder;
    const setIsVisible_lbAfterOrder = setRawVisible_lbAfterOrder;
    const isVisible_edAfterOrder = rawVisible_edAfterOrder;
    const setIsVisible_edAfterOrder = setRawVisible_edAfterOrder;
    const isVisible_edAfterYear = rawVisible_edAfterYear;
    const setIsVisible_edAfterYear = setRawVisible_edAfterYear;
    const isVisible_gdTrainingOrder = rawVisible_gdTrainingOrder;
    const setIsVisible_gdTrainingOrder = setRawVisible_gdTrainingOrder;
    const isVisible_cbxAfterCourse = rawVisible_cbxAfterCourse;
    const setIsVisible_cbxAfterCourse = setRawVisible_cbxAfterCourse;
    const isVisible_cbxAfterJibu = rawVisible_cbxAfterJibu;
    const setIsVisible_cbxAfterJibu = setRawVisible_cbxAfterJibu;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oTrainingOrderChange([]);
            setds_ioTrainingChangeinfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
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
        ds_oTrainingOrder,
        ds_oJibu,
        ds_oCourse,
        ds_oTrainingOrderChange,
        ds_ioTrainingChangeinfo,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_lbAfter,
        setIsVisible_lbAfter,
        isVisible_lbBefore,
        setIsVisible_lbBefore,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbBeforeCourse,
        setIsVisible_lbBeforeCourse,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbBeforeJibu,
        setIsVisible_lbBeforeJibu,
        isVisible_edBeforeJibu,
        setIsVisible_edBeforeJibu,
        isVisible_edBeforeCourse,
        setIsVisible_edBeforeCourse,
        isVisible_edBeforeOrder,
        setIsVisible_edBeforeOrder,
        isVisible_lbBeforeOrder,
        setIsVisible_lbBeforeOrder,
        isVisible_lbBeforeYear,
        setIsVisible_lbBeforeYear,
        isVisible_edBeforeYear,
        setIsVisible_edBeforeYear,
        isVisible_lbAfterCourse,
        setIsVisible_lbAfterCourse,
        isVisible_lbAfterJibu,
        setIsVisible_lbAfterJibu,
        isVisible_lbAfterYear,
        setIsVisible_lbAfterYear,
        isVisible_lbAfterOrder,
        setIsVisible_lbAfterOrder,
        isVisible_edAfterOrder,
        setIsVisible_edAfterOrder,
        isVisible_edAfterYear,
        setIsVisible_edAfterYear,
        isVisible_gdTrainingOrder,
        setIsVisible_gdTrainingOrder,
        isVisible_cbxAfterCourse,
        setIsVisible_cbxAfterCourse,
        isVisible_cbxAfterJibu,
        setIsVisible_cbxAfterJibu,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};