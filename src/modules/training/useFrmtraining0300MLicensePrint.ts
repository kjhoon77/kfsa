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
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

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
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        chkLicenseAmt_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print65050_New,
        lfn_PrintScreen,
        lfn_Search,
    };
};