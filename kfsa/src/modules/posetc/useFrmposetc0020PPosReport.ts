// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oGubun, Ids_oSunap, Ids_oDateGubun, Ids_oOrder, Ids_oPrintGubun, Ids_ioResult, Ids_oPosProgramId, Ids_oPosJibu } from './Frmposetc0020PPosReportData';

export const useFrmposetc0020PPosReport = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oDateGubun, setds_oDateGubun] = useState<Ids_oDateGubun[]>([]);
    const [ds_oOrder, setds_oOrder] = useState<Ids_oOrder[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_ioResult, setds_ioResult] = useState<Ids_ioResult[]>([]);
    const [ds_oPosProgramId, setds_oPosProgramId] = useState<Ids_oPosProgramId[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_radSunapGubun, setRawVisible_radSunapGubun] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_radGubun, setRawVisible_radGubun] = useState(true);
    const [rawVisible_lbGubun, setRawVisible_lbGubun] = useState(true);
    const [rawVisible_lbPgmGubun, setRawVisible_lbPgmGubun] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_calSunapDateStart, setRawVisible_calSunapDateStart] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_calSunapDateEnd, setRawVisible_calSunapDateEnd] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_radOrder, setRawVisible_radOrder] = useState(true);
    const [rawVisible_radReport, setRawVisible_radReport] = useState(true);
    const [rawVisible_lbReport, setRawVisible_lbReport] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbDateGubun, setRawVisible_lbDateGubun] = useState(true);
    const [rawVisible_radDateGubun, setRawVisible_radDateGubun] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(false);
    const [rawVisible_cbxJibu1, setRawVisible_cbxJibu1] = useState(true);
    const [rawVisible_cbxJibu2, setRawVisible_cbxJibu2] = useState(true);
    const [rawVisible_cbxPgmGubun1, setRawVisible_cbxPgmGubun1] = useState(true);
    const [rawVisible_cbxPgmGubun2, setRawVisible_cbxPgmGubun2] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_Shape2;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_radSunapGubun = rawVisible_radSunapGubun && rawVisible_Shape2;
    const setIsVisible_radSunapGubun = setRawVisible_radSunapGubun;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape2;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape2;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_radGubun = rawVisible_radGubun && rawVisible_Shape2;
    const setIsVisible_radGubun = setRawVisible_radGubun;
    const isVisible_lbGubun = rawVisible_lbGubun && rawVisible_Shape2;
    const setIsVisible_lbGubun = setRawVisible_lbGubun;
    const isVisible_lbPgmGubun = rawVisible_lbPgmGubun && rawVisible_Shape2;
    const setIsVisible_lbPgmGubun = setRawVisible_lbPgmGubun;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape2;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape2;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_calSunapDateStart = rawVisible_calSunapDateStart && rawVisible_Shape2;
    const setIsVisible_calSunapDateStart = setRawVisible_calSunapDateStart;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape2;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_calSunapDateEnd = rawVisible_calSunapDateEnd && rawVisible_Shape2;
    const setIsVisible_calSunapDateEnd = setRawVisible_calSunapDateEnd;
    const isVisible_Static16 = rawVisible_Static16 && rawVisible_Shape0;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_radOrder = rawVisible_radOrder && rawVisible_Shape0;
    const setIsVisible_radOrder = setRawVisible_radOrder;
    const isVisible_radReport = rawVisible_radReport && rawVisible_Shape0;
    const setIsVisible_radReport = setRawVisible_radReport;
    const isVisible_lbReport = rawVisible_lbReport && rawVisible_Shape0;
    const setIsVisible_lbReport = setRawVisible_lbReport;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbDateGubun = rawVisible_lbDateGubun && rawVisible_Shape2;
    const setIsVisible_lbDateGubun = setRawVisible_lbDateGubun;
    const isVisible_radDateGubun = rawVisible_radDateGubun && rawVisible_Shape2;
    const setIsVisible_radDateGubun = setRawVisible_radDateGubun;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_cbxJibu1 = rawVisible_cbxJibu1 && rawVisible_Shape2;
    const setIsVisible_cbxJibu1 = setRawVisible_cbxJibu1;
    const isVisible_cbxJibu2 = rawVisible_cbxJibu2 && rawVisible_Shape2;
    const setIsVisible_cbxJibu2 = setRawVisible_cbxJibu2;
    const isVisible_cbxPgmGubun1 = rawVisible_cbxPgmGubun1 && rawVisible_Shape2;
    const setIsVisible_cbxPgmGubun1 = setRawVisible_cbxPgmGubun1;
    const isVisible_cbxPgmGubun2 = rawVisible_cbxPgmGubun2 && rawVisible_Shape2;
    const setIsVisible_cbxPgmGubun2 = setRawVisible_cbxPgmGubun2;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oGubun([]);
            setds_oSunap([]);
            setds_oDateGubun([]);
            setds_oOrder([]);
            setds_oPrintGubun([]);
            setds_ioResult([]);
            setds_oPosProgramId([]);
            setds_oPosJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oGubun,
        ds_oSunap,
        ds_oDateGubun,
        ds_oOrder,
        ds_oPrintGubun,
        ds_ioResult,
        ds_oPosProgramId,
        ds_oPosJibu,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_radSunapGubun,
        setIsVisible_radSunapGubun,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_radGubun,
        setIsVisible_radGubun,
        isVisible_lbGubun,
        setIsVisible_lbGubun,
        isVisible_lbPgmGubun,
        setIsVisible_lbPgmGubun,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_calSunapDateStart,
        setIsVisible_calSunapDateStart,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_calSunapDateEnd,
        setIsVisible_calSunapDateEnd,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_radOrder,
        setIsVisible_radOrder,
        isVisible_radReport,
        setIsVisible_radReport,
        isVisible_lbReport,
        setIsVisible_lbReport,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbDateGubun,
        setIsVisible_lbDateGubun,
        isVisible_radDateGubun,
        setIsVisible_radDateGubun,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_cbxJibu1,
        setIsVisible_cbxJibu1,
        isVisible_cbxJibu2,
        setIsVisible_cbxJibu2,
        isVisible_cbxPgmGubun1,
        setIsVisible_cbxPgmGubun1,
        isVisible_cbxPgmGubun2,
        setIsVisible_cbxPgmGubun2,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};