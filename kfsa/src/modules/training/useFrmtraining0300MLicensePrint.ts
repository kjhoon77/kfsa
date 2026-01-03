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
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_calPassDate, setRawVisible_calPassDate] = useState(true);
    const [rawVisible_lbPassGubun, setRawVisible_lbPassGubun] = useState(true);
    const [rawVisible_lbLcsNo, setRawVisible_lbLcsNo] = useState(true);
    const [rawVisible_edLcsNoStart, setRawVisible_edLcsNoStart] = useState(true);
    const [rawVisible_lbNumberWave, setRawVisible_lbNumberWave] = useState(true);
    const [rawVisible_edLcsNoEnd, setRawVisible_edLcsNoEnd] = useState(true);
    const [rawVisible_cbxPassGubun, setRawVisible_cbxPassGubun] = useState(true);
    const [rawVisible_btnPrint4700, setRawVisible_btnPrint4700] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_hfImageFile, setRawVisible_hfImageFile] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_medSearchCnt, setRawVisible_medSearchCnt] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(false);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(false);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_gdLicensePrint, setRawVisible_gdLicensePrint] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_medCheckCnt, setRawVisible_medCheckCnt] = useState(true);
    const [rawVisible_btnPrint65050New, setRawVisible_btnPrint65050New] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_radPrintGubun2, setRawVisible_radPrintGubun2] = useState(true);
    const [rawVisible_chkLicenseAmt, setRawVisible_chkLicenseAmt] = useState(false);
    const [rawVisible_btnPrintPType, setRawVisible_btnPrintPType] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbCourse = rawVisible_lbCourse;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxCourse = rawVisible_cbxCourse;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_lbYear = rawVisible_lbYear;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_edYear = rawVisible_edYear;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_lbJibu = rawVisible_lbJibu;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_calPassDate = rawVisible_calPassDate;
    const setIsVisible_calPassDate = setRawVisible_calPassDate;
    const isVisible_lbPassGubun = rawVisible_lbPassGubun;
    const setIsVisible_lbPassGubun = setRawVisible_lbPassGubun;
    const isVisible_lbLcsNo = rawVisible_lbLcsNo;
    const setIsVisible_lbLcsNo = setRawVisible_lbLcsNo;
    const isVisible_edLcsNoStart = rawVisible_edLcsNoStart;
    const setIsVisible_edLcsNoStart = setRawVisible_edLcsNoStart;
    const isVisible_lbNumberWave = rawVisible_lbNumberWave;
    const setIsVisible_lbNumberWave = setRawVisible_lbNumberWave;
    const isVisible_edLcsNoEnd = rawVisible_edLcsNoEnd;
    const setIsVisible_edLcsNoEnd = setRawVisible_edLcsNoEnd;
    const isVisible_cbxPassGubun = rawVisible_cbxPassGubun;
    const setIsVisible_cbxPassGubun = setRawVisible_cbxPassGubun;
    const isVisible_btnPrint4700 = rawVisible_btnPrint4700 && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint4700 = setRawVisible_btnPrint4700;
    const isVisible_lbDate = rawVisible_lbDate;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_hfImageFile = rawVisible_hfImageFile;
    const setIsVisible_hfImageFile = setRawVisible_hfImageFile;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_medSearchCnt = rawVisible_medSearchCnt;
    const setIsVisible_medSearchCnt = setRawVisible_medSearchCnt;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_radPrintGubun = rawVisible_radPrintGubun;
    const setIsVisible_radPrintGubun = setRawVisible_radPrintGubun;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_gdLicensePrint = rawVisible_gdLicensePrint;
    const setIsVisible_gdLicensePrint = setRawVisible_gdLicensePrint;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_medCheckCnt = rawVisible_medCheckCnt;
    const setIsVisible_medCheckCnt = setRawVisible_medCheckCnt;
    const isVisible_btnPrint65050New = rawVisible_btnPrint65050New && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint65050New = setRawVisible_btnPrint65050New;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_radPrintGubun2 = rawVisible_radPrintGubun2;
    const setIsVisible_radPrintGubun2 = setRawVisible_radPrintGubun2;
    const isVisible_chkLicenseAmt = rawVisible_chkLicenseAmt;
    const setIsVisible_chkLicenseAmt = setRawVisible_chkLicenseAmt;
    const isVisible_btnPrintPType = rawVisible_btnPrintPType && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintPType = setRawVisible_btnPrintPType;

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