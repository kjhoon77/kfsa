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
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_lbSunapGubun, setIsVisible_lbSunapGubun] = useState(true);
    const [isVisible_radSunapGubun, setIsVisible_radSunapGubun] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_radGubun, setIsVisible_radGubun] = useState(true);
    const [isVisible_lbGubun, setIsVisible_lbGubun] = useState(true);
    const [isVisible_lbPgmGubun, setIsVisible_lbPgmGubun] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_calSunapDateStart, setIsVisible_calSunapDateStart] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_calSunapDateEnd, setIsVisible_calSunapDateEnd] = useState(true);
    const [isVisible_Static16, setIsVisible_Static16] = useState(true);
    const [isVisible_radOrder, setIsVisible_radOrder] = useState(true);
    const [isVisible_radReport, setIsVisible_radReport] = useState(true);
    const [isVisible_lbReport, setIsVisible_lbReport] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_lbDateGubun, setIsVisible_lbDateGubun] = useState(true);
    const [isVisible_radDateGubun, setIsVisible_radDateGubun] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(false);
    const [isVisible_cbxJibu1, setIsVisible_cbxJibu1] = useState(true);
    const [isVisible_cbxJibu2, setIsVisible_cbxJibu2] = useState(true);
    const [isVisible_cbxPgmGubun1, setIsVisible_cbxPgmGubun1] = useState(true);
    const [isVisible_cbxPgmGubun2, setIsVisible_cbxPgmGubun2] = useState(true);
    const [isVisible_lbWorkFormTitle, setIsVisible_lbWorkFormTitle] = useState(true);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);

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