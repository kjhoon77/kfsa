// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oJibu, Ids_oPassGubun, Ids_oLicenseReport, Ids_oLicenseCnt, Ids_iLicenseImage, Ids_iLicensePrtHistory, Ids_oPrintGubun, Ids_ioReport, Ids_ioReportFilter, Ids_oPrintGubun2, Ids_LicenseCheck, Ids_LicAmtGubun } from './Frmtraining0300MLicensePrintData';

export const useFrmtraining0300MLicensePrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_oLicenseCnt, setds_oLicenseCnt] = useState<Ids_oLicenseCnt[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [ds_iLicensePrtHistory, setds_iLicensePrtHistory] = useState<Ids_iLicensePrtHistory[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReportFilter, setds_ioReportFilter] = useState<Ids_ioReportFilter[]>([]);
    const [ds_oPrintGubun2, setds_oPrintGubun2] = useState<Ids_oPrintGubun2[]>([]);
    const [ds_LicenseCheck, setds_LicenseCheck] = useState<Ids_LicenseCheck[]>([]);
    const [ds_LicAmtGubun, setds_LicAmtGubun] = useState<Ids_LicAmtGubun[]>([]);
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
    const [isVisible_btnPrint4700, setIsVisible_btnPrint4700] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_hfImageFile, setIsVisible_hfImageFile] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_medSearchCnt, setIsVisible_medSearchCnt] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(false);
    const [isVisible_radPrintGubun, setIsVisible_radPrintGubun] = useState(false);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_gdLicensePrint, setIsVisible_gdLicensePrint] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_medCheckCnt, setIsVisible_medCheckCnt] = useState(true);
    const [isVisible_btnPrint65050New, setIsVisible_btnPrint65050New] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_radPrintGubun2, setIsVisible_radPrintGubun2] = useState(true);
    const [isVisible_chkLicenseAmt, setIsVisible_chkLicenseAmt] = useState(false);
    const [isVisible_btnPrintPType, setIsVisible_btnPrintPType] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oPassGubun([]);
            setds_oLicenseReport([]);
            setds_oLicenseCnt([]);
            setds_iLicenseImage([]);
            setds_iLicensePrtHistory([]);
            setds_oPrintGubun([]);
            setds_ioReport([]);
            setds_ioReportFilter([]);
            setds_oPrintGubun2([]);
            setds_LicenseCheck([]);
            setds_LicAmtGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const chkLicenseAmt_OnClick = () => {
        console.log('chkLicenseAmt_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print65050_New = () => {
        console.log('lfn_Print65050_New clicked');
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
        ds_oPassGubun,
        ds_oLicenseReport,
        ds_oLicenseCnt,
        ds_iLicenseImage,
        ds_iLicensePrtHistory,
        ds_oPrintGubun,
        ds_ioReport,
        ds_ioReportFilter,
        ds_oPrintGubun2,
        ds_LicenseCheck,
        ds_LicAmtGubun,
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
        isVisible_btnPrint4700,
        setIsVisible_btnPrint4700,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_hfImageFile,
        setIsVisible_hfImageFile,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_medSearchCnt,
        setIsVisible_medSearchCnt,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_radPrintGubun,
        setIsVisible_radPrintGubun,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_gdLicensePrint,
        setIsVisible_gdLicensePrint,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_medCheckCnt,
        setIsVisible_medCheckCnt,
        isVisible_btnPrint65050New,
        setIsVisible_btnPrint65050New,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_radPrintGubun2,
        setIsVisible_radPrintGubun2,
        isVisible_chkLicenseAmt,
        setIsVisible_chkLicenseAmt,
        isVisible_btnPrintPType,
        setIsVisible_btnPrintPType,
        chkLicenseAmt_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print65050_New,
        lfn_PrintScreen,
        lfn_Search,
    };
};