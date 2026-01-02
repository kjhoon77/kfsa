// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_ioExamSeatPrint, Ids_oJibu, Ids_ioReport, Ids_ioReport2 } from './Frmspcledu0415MExamSeatNoPrintData';

export const useFrmspcledu0415MExamSeatNoPrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_ioExamSeatPrint, setds_ioExamSeatPrint] = useState<Ids_ioExamSeatPrint[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_ioExamSeatPrint([]);
            setds_oJibu([]);
            setds_ioReport([]);
            setds_ioReport2([]);
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
        ds_oCourse,
        ds_ioExamSeatPrint,
        ds_oJibu,
        ds_ioReport,
        ds_ioReport2,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
        lfn_localExcel,
    };
};