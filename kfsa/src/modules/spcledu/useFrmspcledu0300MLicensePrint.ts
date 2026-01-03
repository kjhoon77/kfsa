// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oJibu, Ids_oPassGubun, Ids_oLicenseReport, Ids_oLicenseCnt, Ids_iLicenseImage } from './Frmspcledu0300MLicensePrintData';

export const useFrmspcledu0300MLicensePrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_oLicenseCnt, setds_oLicenseCnt] = useState<Ids_oLicenseCnt[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbYear, setIsVisible_lbYear] = useState(true);
    const [isVisible_edYear, setIsVisible_edYear] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_calPassDate, setIsVisible_calPassDate] = useState(true);
    const [isVisible_lbPassGubun, setIsVisible_lbPassGubun] = useState(true);
    const [isVisible_lbLcsNo, setIsVisible_lbLcsNo] = useState(true);
    const [isVisible_edLcsNoStart, setIsVisible_edLcsNoStart] = useState(true);
    const [isVisible_lbNumberWave, setIsVisible_lbNumberWave] = useState(true);
    const [isVisible_edLcsNoEnd, setIsVisible_edLcsNoEnd] = useState(true);
    const [isVisible_cbxPassGubun, setIsVisible_cbxPassGubun] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_hfImageFile, setIsVisible_hfImageFile] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oPassGubun([]);
            setds_oLicenseReport([]);
            setds_oLicenseCnt([]);
            setds_iLicenseImage([]);
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

    return {
        isLoading,
        ds_oCourse,
        ds_oJibu,
        ds_oPassGubun,
        ds_oLicenseReport,
        ds_oLicenseCnt,
        ds_iLicenseImage,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
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
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_calPassDate,
        setIsVisible_calPassDate,
        isVisible_lbPassGubun,
        setIsVisible_lbPassGubun,
        isVisible_lbLcsNo,
        setIsVisible_lbLcsNo,
        isVisible_edLcsNoStart,
        setIsVisible_edLcsNoStart,
        isVisible_lbNumberWave,
        setIsVisible_lbNumberWave,
        isVisible_edLcsNoEnd,
        setIsVisible_edLcsNoEnd,
        isVisible_cbxPassGubun,
        setIsVisible_cbxPassGubun,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_hfImageFile,
        setIsVisible_hfImageFile,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
    };
};