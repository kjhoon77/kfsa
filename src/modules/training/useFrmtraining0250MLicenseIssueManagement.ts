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
    LBIRTHDAY: string;
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
    LHREMARK: string;
    LADDRGUBUN: string;
    LRPNUCD: string;
    LRROADBUILDMGNO: string;
    LRROADDETAIL: string;
    LRROADREMAIN: string;
    LRSANGUBUN: string;
    LRMAINBUNJI: string;
    LRSUBBUNJI: string;
    LRBUILDNM: string;
    LRADDRETC: string;
    LRCONVPGM: string;
    LRCONVSTATUS: string;
    LHFREEGUBUN: string;
    PERSONKEY: string;
    DI: string;
    CI: string;
    CIVER: string;
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
    LADDRGUBUN: string;
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
    TPBIRTHDAY: string;
    TPAUTHYN: string;
    TPZIPCD: string;
    TPADDR1: string;
    TPADDR2: string;
    TPBULDNM: string;
    TPTEL: string;
    TPHPTEL: string;
    TPADDRGUBUN: string;
    TPRPNUCD: string;
    TPRROADBUILDMGNO: string;
    TPRROADDETAIL: string;
    TPRROADREMAIN: string;
    TPRSANGUBUN: string;
    TPRMAINBUNJI: string;
    TPRSUBBUNJI: string;
    TPRBUILDNM: string;
    TPRADDRETC: string;
    TPRCONVPGM: string;
    TPRCONVSTATUS: string;
    PERSONKEY: string;
    DI: string;
    CI: string;
    CIVER: string;
    BIRTHDAY7: string;
    TPAUTHYN_A: string;
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
    IPSEQ: string;
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
    LBIRTHDAY: string;
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
    LHREMARK: string;
    LADDRGUBUN: string;
    LRPNUCD: string;
    LRROADBUILDMGNO: string;
    LRROADDETAIL: string;
    LRROADREMAIN: string;
    LRSANGUBUN: string;
    LRMAINBUNJI: string;
    LRSUBBUNJI: string;
    LRBUILDNM: string;
    LRADDRETC: string;
    LRCONVPGM: string;
    LRCONVSTATUS: string;
    LHSEQ: string;
    LHFREEGUBUN: string;
    PCMGNO: string;
    PPMGNO: string;
    PAMGNO: string;
    PHSEQ: string;
    PHPROCSTATUS: string;
    RUMGNO: string;
    RUPATH: string;
    RUFILENM: string;
    PERSONKEY: string;
    DI: string;
    CI: string;
    CIVER: string;
    LPERSONKEY: string;
}

export interface Ids_iTrainingPerson {
    TPAUTHYN: string;
    TPNM: string;
    TPBIRTHDAY: string;
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
    TPBIRTHDAY: string;
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
    LHADDRGUBUN: string;
    LHRPNUCD: string;
    LHRROADBUILDMGNO: string;
    LHRROADDETAIL: string;
    LHRROADREMAIN: string;
    LHRSANGUBUN: string;
    LHRMAINBUNJI: string;
    LHRSUBBUNJI: string;
    LHRBUILDNM: string;
    LHRADDRETC: string;
    LHRCONVPGM: string;
    LHRCONVSTATUS: string;
    LHFREEGUBUN: string;
    LHPRTGUBUN: string;
}

export interface Ids_oYearbizlink {
}

export interface Ids_oBarcodegubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oFreeGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oLicensePrtHistory {
    RESULTCODE: string;
    RESULTMSG: string;
    RESULTLPSEQ: string;
}

export interface Ids_oLicensePrtH {
}

export interface Ids_oForm {
    CD: string;
    DATA: string;
}

export interface Ids_iFormSave {
    I_PROC: string;
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_FRDATE: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormSave {
}

export interface Ids_iFormDelete {
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormDelete {
}

export interface Ids_oLicenseCheck {
}

export interface Ids_ioReport {
}

export interface Ids_ioReport2 {
}

export interface Ids_oLicenseReportLissue {
    TCCOURSENM: string;
    LLCSNO: string;
    LISSUEDATE: string;
    LORGGUBUN: string;
}

export interface Ids_oAjgubun {
    AJTCCOURSECD: string;
    AJTCCOURSECDNM: string;
    AJISSUEGUBUN: string;
    AJISSUEGUBUNNM: string;
    AJGUBUN: string;
    AJGUBUNNM: string;
}

export interface Ids_oLicenseCheck2 {
}

export interface Ids_LicenseCheck {
    LICAMT: string;
}

export interface Ids_LicenseCheck2 {
    LICAMTCD: string;
}

export const useFrmtraining0250MLicenseIssueManagement = () => {
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
    const [ds_oBarcodegubun, setds_oBarcodegubun] = useState<Ids_oBarcodegubun[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oFreeGubun, setds_oFreeGubun] = useState<Ids_oFreeGubun[]>([]);
    const [ds_oLicensePrtHistory, setds_oLicensePrtHistory] = useState<Ids_oLicensePrtHistory[]>([]);
    const [ds_oLicensePrtH, setds_oLicensePrtH] = useState<Ids_oLicensePrtH[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_oLicenseCheck, setds_oLicenseCheck] = useState<Ids_oLicenseCheck[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReport2, setds_ioReport2] = useState<Ids_ioReport2[]>([]);
    const [ds_oLicenseReportLissue, setds_oLicenseReportLissue] = useState<Ids_oLicenseReportLissue[]>([]);
    const [ds_oAjgubun, setds_oAjgubun] = useState<Ids_oAjgubun[]>([]);
    const [ds_oLicenseCheck2, setds_oLicenseCheck2] = useState<Ids_oLicenseCheck2[]>([]);
    const [ds_LicenseCheck, setds_LicenseCheck] = useState<Ids_LicenseCheck[]>([]);
    const [ds_LicenseCheck2, setds_LicenseCheck2] = useState<Ids_LicenseCheck2[]>([]);
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
            setds_oBarcodegubun([]);
            setds_oAddr([]);
            setds_oFreeGubun([]);
            setds_oLicensePrtHistory([]);
            setds_oLicensePrtH([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_oLicenseCheck([]);
            setds_ioReport([]);
            setds_ioReport2([]);
            setds_oLicenseReportLissue([]);
            setds_oAjgubun([]);
            setds_oLicenseCheck2([]);
            setds_LicenseCheck([]);
            setds_LicenseCheck2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnAuthBIRTHDAY_OnClick = () => {
        console.log('btnAuthBIRTHDAY_OnClick clicked');
    };
    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnIssuedateModify_OnClick = () => {
        console.log('btnIssuedateModify_OnClick clicked');
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
    const btnLocalFormView_OnClick = () => {
        console.log('btnLocalFormView_OnClick clicked');
    };
    const btnPassPrintCancel_OnClick = () => {
        console.log('btnPassPrintCancel_OnClick clicked');
    };
    const btnPassPrint_OnClick = () => {
        console.log('btnPassPrint_OnClick clicked');
    };
    const btnPhotoScan_OnClick = () => {
        console.log('btnPhotoScan_OnClick clicked');
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
    const btnPrintReRctPDF_OnClick = () => {
        console.log('btnPrintReRctPDF_OnClick clicked');
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
    const btnScanSave_OnClick = () => {
        console.log('btnScanSave_OnClick clicked');
    };
    const btnScanSearch_OnClick = () => {
        console.log('btnScanSearch_OnClick clicked');
    };
    const btnScan_OnClick = () => {
        console.log('btnScan_OnClick clicked');
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
    const btnSeverFormView_OnClick = () => {
        console.log('btnSeverFormView_OnClick clicked');
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
    const lfn_InfoSave = () => {
        console.log('lfn_InfoSave clicked');
    };
    const lfn_PrintNew = () => {
        console.log('lfn_PrintNew clicked');
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
        ds_oBarcodegubun,
        ds_oAddr,
        ds_oFreeGubun,
        ds_oLicensePrtHistory,
        ds_oLicensePrtH,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_oLicenseCheck,
        ds_ioReport,
        ds_ioReport2,
        ds_oLicenseReportLissue,
        ds_oAjgubun,
        ds_oLicenseCheck2,
        ds_LicenseCheck,
        ds_LicenseCheck2,
        btnApplyPicture_OnClick,
        btnAuthBIRTHDAY_OnClick,
        btnBarCodeSearch_OnClick,
        btnFormDelete_OnClick,
        btnIssuedateModify_OnClick,
        btnLcsImage_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnLocalFormView_OnClick,
        btnPassPrintCancel_OnClick,
        btnPassPrint_OnClick,
        btnPhotoScan_OnClick,
        btnPictureManagement_OnClick,
        btnPosReport_OnClick,
        btnPosResultList_OnClick,
        btnPrintReRctPDF_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnScanPicture_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchZipCode_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
        btnSeverFormView_OnClick,
        btnTPModify_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_InfoSave,
        lfn_PrintNew,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};