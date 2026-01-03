// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oJibu, Ids_oTrainingDayRegisterPrint, Ids_oTrainingDayRegisterTemp } from './Frmtraining0140MTrainingDayRegisterPrintData';

export const useFrmtraining0140MTrainingDayRegisterPrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingDayRegisterPrint, setds_oTrainingDayRegisterPrint] = useState<Ids_oTrainingDayRegisterPrint[]>([]);
    const [ds_oTrainingDayRegisterTemp, setds_oTrainingDayRegisterTemp] = useState<Ids_oTrainingDayRegisterTemp[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpFormBox, setRawVisible_shpFormBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_edTrainingOrder, setRawVisible_edTrainingOrder] = useState(true);
    const [rawVisible_lbMsg, setRawVisible_lbMsg] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox && rawVisible_shpFormBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpFormBox = rawVisible_shpFormBox;
    const setIsVisible_shpFormBox = setRawVisible_shpFormBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle && rawVisible_shpFormBox;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpFormBox;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpFormBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_shpFormBox;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_shpFormBox;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpFormBox;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpFormBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpFormBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_edTrainingOrder = rawVisible_edTrainingOrder && rawVisible_shpFormBox;
    const setIsVisible_edTrainingOrder = setRawVisible_edTrainingOrder;
    const isVisible_lbMsg = rawVisible_lbMsg && rawVisible_shpFormBox;
    const setIsVisible_lbMsg = setRawVisible_lbMsg;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oTrainingDayRegisterPrint([]);
            setds_oTrainingDayRegisterTemp([]);
            setIsLoading(false);
        }, 500);
    }, []);

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

    return {
        isLoading,
        ds_oCourse,
        ds_oJibu,
        ds_oTrainingDayRegisterPrint,
        ds_oTrainingDayRegisterTemp,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpFormBox,
        setIsVisible_shpFormBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_edTrainingOrder,
        setIsVisible_edTrainingOrder,
        isVisible_lbMsg,
        setIsVisible_lbMsg,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};