// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oPassGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oLicenseReport {
    BIRTHDAY: string;
    IIFILENM: string;
    LADDR1: string;
    LADDR2: string;
    LBARCODE: string;
    LHPRTDATE: string;
    LISSUEDATE: string;
    LISSUEGUBUNNM: string;
    LLCSNO: string;
    LPERSONNM: string;
    LTCCOURSECD: string;
    LLASTHISTORYSEQ: string;
    SEL: string;
    LHPROCGTMGNO: string;
    YEAR: string;
    JUBSUNO: string;
    ONLINESURYOYN: string;
    PRINTYN: string;
    IJUBSU: string;
    LICAMT: string;
    LICAMTGUBUN: string;
}

export interface Ids_oLicenseCnt {
    LLCSNO: string;
    MINNO: string;
    MAXNO: string;
}

export interface Ids_iLicenseImage {
    LILLCSNO: string;
    LISEQ: string;
    LIDIRPATH: string;
    LIREALNM: string;
}

export interface Ids_iLicensePrtHistory {
    LPLLCSNO: string;
    LPLHSEQ: string;
    ILMGNO: string;
    LHPRTGUBUN: string;
}

export interface Ids_oPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioReport {
}

export interface Ids_ioReportFilter {
}

export interface Ids_oPrintGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_LicenseCheck {
    LICAMT: string;
}

export interface Ids_LicAmtGubun {
    CD: string;
    DATA: string;
}

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
        chkLicenseAmt_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print65050_New,
        lfn_PrintScreen,
        lfn_Search,
    };
};