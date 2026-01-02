// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iLicense {
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
    LADDR1: string;
    LADDR2: string;
    LBARCODE: string;
    LCANCELDATE: string;
    LCANCELPSABUN: string;
    LCANCELREASON: string;
    LCOMPNM: string;
    LDATAAPPROVAL: string;
    LHIIIMGSEQ: string;
    LHISSUEREASON: string;
    LHPROCGTMGNO: string;
    LHPRTDATE: string;
    LHPTEL: string;
    LISSUEDATE: string;
    LISSUEGUBUN: string;
    LISSUEGUBUNNM: string;
    LLASTHISTORYSEQ: string;
    LHLLCSNO: string;
    LLCSNO: string;
    LPERSONNM: string;
    LRESIDENTNO: string;
    LSTATUSGUBUN: string;
    LTCCOURSECD: string;
    LTEL: string;
    LTPMGNO: string;
    LTRAININGENDDATE: string;
    LTRAININGSTARTDATE: string;
    LZIPCD: string;
    TCCOURSENM: string;
    TPAUTHYN: string;
    TPCHECK: string;
}

export interface Ids_oPrintGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oIssueGubun {
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
    LTCCOURSENM: string;
    LLASTHISTORYSEQ: string;
}

export interface Ids_ioImageInfo {
    BIRTHDAY: string;
    IIAPPROVAL: string;
    IIDIRPATH: string;
    IIIMGBINARY: string;
    IIIMGSEQ: string;
    IIREALNM: string;
    IIREGDATE: string;
    IIREGGUBUN: string;
    IIREGGUBUNNM: string;
    IIREGSABUN: string;
    IISAVENM: string;
    TPLASTIMGSEQ: string;
    TPMGNO: string;
    TPNM: string;
    TPRESIDENTNO: string;
    TPAUTHYN: string;
    TPZIPCD: string;
    TPADDR1: string;
    TPADDR2: string;
    TPBULDNM: string;
    TPTEL: string;
    TPHPTEL: string;
}

export interface Ids_oSetlmentHist {
    LSACTIVEYN: string;
    LSGUBUN: string;
    LSGUBUNCD: string;
    LSGUBUNCDNM: string;
    LSGUBUNNM: string;
    LSLHSEQ: string;
    LSLLCSNO: string;
    LSPMMGNO: string;
    LSPMYEAR: string;
    LSPONYDATE: string;
    LSPONYGUBUN: string;
    LSPROCAMOUNT: string;
    LSPROCDATE: string;
    LSPROCGTMGNO: string;
    LSREGSABUN: string;
    LSREGSABUNNM: string;
    LSREPAYREF: string;
    LSSEQ: string;
    LSSETLMTYN: string;
    PMPAYMENTFLAG: string;
    TSJUMUNNO: string;
    LSSUNAPGUBUN: string;
}

export interface Ids_oLicense {
    IIDIRPATH: string;
    IIREALNM: string;
    IISAVENM: string;
    LADDR1: string;
    LADDR2: string;
    LBARCODE: string;
    LCANCELDATE: string;
    LCANCELPSABUN: string;
    LCANCELREASON: string;
    LCOMPNM: string;
    LDATAAPPROVAL: string;
    LHIIIMGSEQ: string;
    LHISSUEREASON: string;
    LHPROCGTMGNO: string;
    LHPRTDATE: string;
    LHPTEL: string;
    LISSUEDATE: string;
    LISSUEGUBUN: string;
    LISSUEGUBUNNM: string;
    LLASTHISTORYSEQ: string;
    LHLLCSNO: string;
    LLCSNO: string;
    LPERSONNM: string;
    LRESIDENTNO: string;
    LSTATUSGUBUN: string;
    LTCCOURSECD: string;
    LTEL: string;
    LTPMGNO: string;
    LTRAININGENDDATE: string;
    LTRAININGSTARTDATE: string;
    LZIPCD: string;
    TCCOURSENM: string;
    TPAUTHYN: string;
    TPCHECK: string;
}

export interface Ids_iTrainingPerson {
    TPAUTHYN: string;
    TPNM: string;
    TPRESIDENTNO: string;
    TPMGNO: string;
}

export interface Ids_iLicenseImage {
    LILLCSNO: string;
    LISEQ: string;
    LIDIRPATH: string;
    LIREALNM: string;
}

export interface Ids_ioModifyHistory {
}

export interface Ids_oLicenseReportEdu {
    EDUDATE: string;
    GTDEPTNM: string;
    TARGET: string;
    TCCOURSENM: string;
}

export interface Ids_oTrainingPerson {
    IIDIRPATH: string;
    IIREALNM: string;
    TPAUTHYN: string;
    TPCUSTGUBUN: string;
    TPEMAILDOMAIN: string;
    TPEMAILID: string;
    TPHPTEL: string;
    TPLASTIMGSEQ: string;
    TPMGNO: string;
    TPNM: string;
    TPRESIDENTNO: string;
    TPTEL: string;
}

export interface Ids_oLicenseH {
    BIRTHDAY: string;
    LHADDR1: string;
    LHADDR2: string;
    LHISSUEREASON: string;
    LHLLCSNO: string;
    LHPERSONNM: string;
    LHPRTDATE: string;
    LHTEL: string;
    LIDIRPATH: string;
    LIREALNM: string;
    LHSEQ: string;
    LHTJMGNO: string;
    LHISSUEMGNO: string;
}

export interface Ids_oYearbizlink {
}

export const useFrmspcledu0250MLicenseIssueManagement = () => {
    const [ds_iLicense, setds_iLicense] = useState<Ids_iLicense[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oIssueGubun, setds_oIssueGubun] = useState<Ids_oIssueGubun[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_ioImageInfo, setds_ioImageInfo] = useState<Ids_ioImageInfo[]>([]);
    const [ds_oSetlmentHist, setds_oSetlmentHist] = useState<Ids_oSetlmentHist[]>([]);
    const [ds_oLicense, setds_oLicense] = useState<Ids_oLicense[]>([]);
    const [ds_iTrainingPerson, setds_iTrainingPerson] = useState<Ids_iTrainingPerson[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [ds_ioModifyHistory, setds_ioModifyHistory] = useState<Ids_ioModifyHistory[]>([]);
    const [ds_oLicenseReportEdu, setds_oLicenseReportEdu] = useState<Ids_oLicenseReportEdu[]>([]);
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_oLicenseH, setds_oLicenseH] = useState<Ids_oLicenseH[]>([]);
    const [ds_oYearbizlink, setds_oYearbizlink] = useState<Ids_oYearbizlink[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iLicense([]);
            setds_oPrintGubun([]);
            setds_oCourse([]);
            setds_oIssueGubun([]);
            setds_oLicenseReport([]);
            setds_ioImageInfo([]);
            setds_oSetlmentHist([]);
            setds_oLicense([]);
            setds_iTrainingPerson([]);
            setds_iLicenseImage([]);
            setds_ioModifyHistory([]);
            setds_oLicenseReportEdu([]);
            setds_oTrainingPerson([]);
            setds_oLicenseH([]);
            setds_oYearbizlink([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnLcsImage_OnClick = () => {
        console.log('btnLcsImage_OnClick clicked');
    };
    const btnLoadPicture_OnClick = () => {
        console.log('btnLoadPicture_OnClick clicked');
    };
    const btnLoadScanPicture_OnClick = () => {
        console.log('btnLoadScanPicture_OnClick clicked');
    };
    const btnPictureManagement_OnClick = () => {
        console.log('btnPictureManagement_OnClick clicked');
    };
    const btnPosReport_OnClick = () => {
        console.log('btnPosReport_OnClick clicked');
    };
    const btnPosResultList_OnClick = () => {
        console.log('btnPosResultList_OnClick clicked');
    };
    const btnPrintReRct_OnClick = () => {
        console.log('btnPrintReRct_OnClick clicked');
    };
    const btnProcRct_OnClick = () => {
        console.log('btnProcRct_OnClick clicked');
    };
    const btnScanPicture_OnClick = () => {
        console.log('btnScanPicture_OnClick clicked');
    };
    const btnSearchPersonInfo_OnClick = () => {
        console.log('btnSearchPersonInfo_OnClick clicked');
    };
    const btnSearchRegPicture_OnClick = () => {
        console.log('btnSearchRegPicture_OnClick clicked');
    };
    const btnSearchZipCode_OnClick = () => {
        console.log('btnSearchZipCode_OnClick clicked');
    };
    const btnSeqList_OnClick = () => {
        console.log('btnSeqList_OnClick clicked');
    };
    const btnSetlmt_OnClick = () => {
        console.log('btnSetlmt_OnClick clicked');
    };
    const btnTPModify_OnClick = () => {
        console.log('btnTPModify_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_InfoSave = () => {
        console.log('lfn_InfoSave clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
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
        ds_iLicense,
        ds_oPrintGubun,
        ds_oCourse,
        ds_oIssueGubun,
        ds_oLicenseReport,
        ds_ioImageInfo,
        ds_oSetlmentHist,
        ds_oLicense,
        ds_iTrainingPerson,
        ds_iLicenseImage,
        ds_ioModifyHistory,
        ds_oLicenseReportEdu,
        ds_oTrainingPerson,
        ds_oLicenseH,
        ds_oYearbizlink,
        btnApplyPicture_OnClick,
        btnAuthResidentNo_OnClick,
        btnBarCodeSearch_OnClick,
        btnLcsImage_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnPictureManagement_OnClick,
        btnPosReport_OnClick,
        btnPosResultList_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnScanPicture_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchZipCode_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
        btnTPModify_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_InfoSave,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};