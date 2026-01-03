// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_iLicense, Ids_oPrintGubun, Ids_oCourse, Ids_oIssueGubun, Ids_oLicenseReport, Ids_ioImageInfo, Ids_oSetlmentHist, Ids_oLicense, Ids_iTrainingPerson, Ids_iLicenseImage, Ids_ioModifyHistory, Ids_oLicenseReportEdu, Ids_oTrainingPerson, Ids_oLicenseH, Ids_oYearbizlink, Ids_oBarcodegubun, Ids_oAddr, Ids_oFreeGubun, Ids_oLicensePrtHistory, Ids_oLicensePrtH, Ids_oForm, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete, Ids_oLicenseCheck, Ids_ioReport, Ids_ioReport2, Ids_oLicenseReportLissue, Ids_oAjgubun, Ids_oLicenseCheck2, Ids_LicenseCheck, Ids_LicenseCheck2 } from './Frmtraining0250MLicenseIssueManagementData';

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
    const [isVisible_shpGubunBox5, setIsVisible_shpGubunBox5] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbPrintGubun, setIsVisible_lbPrintGubun] = useState(true);
    const [isVisible_radPrintGubun, setIsVisible_radPrintGubun] = useState(true);
    const [isVisible_shpGubunBox6, setIsVisible_shpGubunBox6] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_shpGubunBox2, setIsVisible_shpGubunBox2] = useState(true);
    const [isVisible_lbLcsHistInfo, setIsVisible_lbLcsHistInfo] = useState(true);
    const [isVisible_btnSearchLcsIssueHist, setIsVisible_btnSearchLcsIssueHist] = useState(false);
    const [isVisible_gdLcsInfo, setIsVisible_gdLcsInfo] = useState(true);
    const [isVisible_btnLoadPicture, setIsVisible_btnLoadPicture] = useState(true);
    const [isVisible_btnLoadScanPicture, setIsVisible_btnLoadScanPicture] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_imgLastestPicture, setIsVisible_imgLastestPicture] = useState(true);
    const [isVisible_btnPictureManagement, setIsVisible_btnPictureManagement] = useState(true);
    const [isVisible_btnApplyPicture, setIsVisible_btnApplyPicture] = useState(true);
    const [isVisible_btnSearchRegPicture, setIsVisible_btnSearchRegPicture] = useState(true);
    const [isVisible_lbSearch, setIsVisible_lbSearch] = useState(true);
    const [isVisible_lbBIRTHDAY, setIsVisible_lbBIRTHDAY] = useState(true);
    const [isVisible_medBIRTHDAY, setIsVisible_medBIRTHDAY] = useState(true);
    const [isVisible_btnAuthBIRTHDAY, setIsVisible_btnAuthBIRTHDAY] = useState(true);
    const [isVisible_btnSearchPersonInfo, setIsVisible_btnSearchPersonInfo] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_lbAddr, setIsVisible_lbAddr] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_btnSearchZipCode, setIsVisible_btnSearchZipCode] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(false);
    const [isVisible_edTel, setIsVisible_edTel] = useState(false);
    const [isVisible_lbHpTel, setIsVisible_lbHpTel] = useState(true);
    const [isVisible_edHpTel, setIsVisible_edHpTel] = useState(true);
    const [isVisible_lbPersonInfo, setIsVisible_lbPersonInfo] = useState(true);
    const [isVisible_lbLcsNo, setIsVisible_lbLcsNo] = useState(true);
    const [isVisible_medLcsNo, setIsVisible_medLcsNo] = useState(true);
    const [isVisible_lbIssueRemark, setIsVisible_lbIssueRemark] = useState(true);
    const [isVisible_edCompNm, setIsVisible_edCompNm] = useState(true);
    const [isVisible_lbFirstIssueDate, setIsVisible_lbFirstIssueDate] = useState(true);
    const [isVisible_calFirstIssueDate, setIsVisible_calFirstIssueDate] = useState(true);
    const [isVisible_radIssueGubun, setIsVisible_radIssueGubun] = useState(true);
    const [isVisible_btnChangeProcDate, setIsVisible_btnChangeProcDate] = useState(true);
    const [isVisible_btnProcRct, setIsVisible_btnProcRct] = useState(true);
    const [isVisible_btnPrintReRct, setIsVisible_btnPrintReRct] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_lbSetlmt, setIsVisible_lbSetlmt] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_lbIssueDate, setIsVisible_lbIssueDate] = useState(true);
    const [isVisible_calIssueDate, setIsVisible_calIssueDate] = useState(true);
    const [isVisible_lbEduDate, setIsVisible_lbEduDate] = useState(true);
    const [isVisible_calEduDateStart1, setIsVisible_calEduDateStart1] = useState(true);
    const [isVisible_lbDateWave, setIsVisible_lbDateWave] = useState(true);
    const [isVisible_calEduDateEnd2, setIsVisible_calEduDateEnd2] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_fdImageFile, setIsVisible_fdImageFile] = useState(true);
    const [isVisible_edAddr1, setIsVisible_edAddr1] = useState(true);
    const [isVisible_gdSetlmt, setIsVisible_gdSetlmt] = useState(true);
    const [isVisible_fiImageFile, setIsVisible_fiImageFile] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnSaveInfo, setIsVisible_btnSaveInfo] = useState(true);
    const [isVisible_btnPosResultList, setIsVisible_btnPosResultList] = useState(true);
    const [isVisible_lbLcsInfo, setIsVisible_lbLcsInfo] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_gdLcsHistory, setIsVisible_gdLcsHistory] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_lbIssueGubun, setIsVisible_lbIssueGubun] = useState(true);
    const [isVisible_btnTPModify, setIsVisible_btnTPModify] = useState(true);
    const [isVisible_lbImgDate, setIsVisible_lbImgDate] = useState(true);
    const [isVisible_btnPosReport, setIsVisible_btnPosReport] = useState(true);
    const [isVisible_shpGubunBox7, setIsVisible_shpGubunBox7] = useState(true);
    const [isVisible_radBarcodeGubun, setIsVisible_radBarcodeGubun] = useState(true);
    const [isVisible_lbBarCode, setIsVisible_lbBarCode] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_btnBarCodeSearch, setIsVisible_btnBarCodeSearch] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(false);
    const [isVisible_btnPrintReRctPDF, setIsVisible_btnPrintReRctPDF] = useState(true);
    const [isVisible_hfImageFile, setIsVisible_hfImageFile] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_lbSave, setIsVisible_lbSave] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_gdLcsPrtHistory, setIsVisible_gdLcsPrtHistory] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_btnPrint4700, setIsVisible_btnPrint4700] = useState(true);
    const [isVisible_lbNotice, setIsVisible_lbNotice] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_btnScanSave, setIsVisible_btnScanSave] = useState(true);
    const [isVisible_btnLocalFormView, setIsVisible_btnLocalFormView] = useState(true);
    const [isVisible_edScanFileName, setIsVisible_edScanFileName] = useState(true);
    const [isVisible_btnScanSearch, setIsVisible_btnScanSearch] = useState(true);
    const [isVisible_btnScan, setIsVisible_btnScan] = useState(true);
    const [isVisible_btnSeverFormView, setIsVisible_btnSeverFormView] = useState(true);
    const [isVisible_edFormResult, setIsVisible_edFormResult] = useState(true);
    const [isVisible_cbxForm, setIsVisible_cbxForm] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_btnFormDelete, setIsVisible_btnFormDelete] = useState(false);
    const [isVisible_fdImage2, setIsVisible_fdImage2] = useState(true);
    const [isVisible_hfImage2, setIsVisible_hfImage2] = useState(true);
    const [isVisible_fiImageFile2, setIsVisible_fiImageFile2] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);
    const [isVisible_btnScanPicture, setIsVisible_btnScanPicture] = useState(true);
    const [isVisible_btnPhotoScan, setIsVisible_btnPhotoScan] = useState(true);
    const [isVisible_btnIssuedateModify, setIsVisible_btnIssuedateModify] = useState(true);
    const [isVisible_btnPassPrint, setIsVisible_btnPassPrint] = useState(true);
    const [isVisible_btnPrint65050New, setIsVisible_btnPrint65050New] = useState(true);
    const [isVisible_taAjgubun, setIsVisible_taAjgubun] = useState(false);
    const [isVisible_btnPassPrintCancel, setIsVisible_btnPassPrintCancel] = useState(false);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_edSunapCheck, setIsVisible_edSunapCheck] = useState(true);

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
        isVisible_shpGubunBox5,
        setIsVisible_shpGubunBox5,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbPrintGubun,
        setIsVisible_lbPrintGubun,
        isVisible_radPrintGubun,
        setIsVisible_radPrintGubun,
        isVisible_shpGubunBox6,
        setIsVisible_shpGubunBox6,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_lbLcsHistInfo,
        setIsVisible_lbLcsHistInfo,
        isVisible_btnSearchLcsIssueHist,
        setIsVisible_btnSearchLcsIssueHist,
        isVisible_gdLcsInfo,
        setIsVisible_gdLcsInfo,
        isVisible_btnLoadPicture,
        setIsVisible_btnLoadPicture,
        isVisible_btnLoadScanPicture,
        setIsVisible_btnLoadScanPicture,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_imgLastestPicture,
        setIsVisible_imgLastestPicture,
        isVisible_btnPictureManagement,
        setIsVisible_btnPictureManagement,
        isVisible_btnApplyPicture,
        setIsVisible_btnApplyPicture,
        isVisible_btnSearchRegPicture,
        setIsVisible_btnSearchRegPicture,
        isVisible_lbSearch,
        setIsVisible_lbSearch,
        isVisible_lbBIRTHDAY,
        setIsVisible_lbBIRTHDAY,
        isVisible_medBIRTHDAY,
        setIsVisible_medBIRTHDAY,
        isVisible_btnAuthBIRTHDAY,
        setIsVisible_btnAuthBIRTHDAY,
        isVisible_btnSearchPersonInfo,
        setIsVisible_btnSearchPersonInfo,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_btnSearchZipCode,
        setIsVisible_btnSearchZipCode,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_lbPersonInfo,
        setIsVisible_lbPersonInfo,
        isVisible_lbLcsNo,
        setIsVisible_lbLcsNo,
        isVisible_medLcsNo,
        setIsVisible_medLcsNo,
        isVisible_lbIssueRemark,
        setIsVisible_lbIssueRemark,
        isVisible_edCompNm,
        setIsVisible_edCompNm,
        isVisible_lbFirstIssueDate,
        setIsVisible_lbFirstIssueDate,
        isVisible_calFirstIssueDate,
        setIsVisible_calFirstIssueDate,
        isVisible_radIssueGubun,
        setIsVisible_radIssueGubun,
        isVisible_btnChangeProcDate,
        setIsVisible_btnChangeProcDate,
        isVisible_btnProcRct,
        setIsVisible_btnProcRct,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
        isVisible_lbSetlmt,
        setIsVisible_lbSetlmt,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_lbIssueDate,
        setIsVisible_lbIssueDate,
        isVisible_calIssueDate,
        setIsVisible_calIssueDate,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_calEduDateStart1,
        setIsVisible_calEduDateStart1,
        isVisible_lbDateWave,
        setIsVisible_lbDateWave,
        isVisible_calEduDateEnd2,
        setIsVisible_calEduDateEnd2,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_fdImageFile,
        setIsVisible_fdImageFile,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_gdSetlmt,
        setIsVisible_gdSetlmt,
        isVisible_fiImageFile,
        setIsVisible_fiImageFile,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnSaveInfo,
        setIsVisible_btnSaveInfo,
        isVisible_btnPosResultList,
        setIsVisible_btnPosResultList,
        isVisible_lbLcsInfo,
        setIsVisible_lbLcsInfo,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_gdLcsHistory,
        setIsVisible_gdLcsHistory,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbIssueGubun,
        setIsVisible_lbIssueGubun,
        isVisible_btnTPModify,
        setIsVisible_btnTPModify,
        isVisible_lbImgDate,
        setIsVisible_lbImgDate,
        isVisible_btnPosReport,
        setIsVisible_btnPosReport,
        isVisible_shpGubunBox7,
        setIsVisible_shpGubunBox7,
        isVisible_radBarcodeGubun,
        setIsVisible_radBarcodeGubun,
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_btnBarCodeSearch,
        setIsVisible_btnBarCodeSearch,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_btnPrintReRctPDF,
        setIsVisible_btnPrintReRctPDF,
        isVisible_hfImageFile,
        setIsVisible_hfImageFile,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
        isVisible_lbSave,
        setIsVisible_lbSave,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_gdLcsPrtHistory,
        setIsVisible_gdLcsPrtHistory,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_btnPrint4700,
        setIsVisible_btnPrint4700,
        isVisible_lbNotice,
        setIsVisible_lbNotice,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_btnScanSave,
        setIsVisible_btnScanSave,
        isVisible_btnLocalFormView,
        setIsVisible_btnLocalFormView,
        isVisible_edScanFileName,
        setIsVisible_edScanFileName,
        isVisible_btnScanSearch,
        setIsVisible_btnScanSearch,
        isVisible_btnScan,
        setIsVisible_btnScan,
        isVisible_btnSeverFormView,
        setIsVisible_btnSeverFormView,
        isVisible_edFormResult,
        setIsVisible_edFormResult,
        isVisible_cbxForm,
        setIsVisible_cbxForm,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_btnFormDelete,
        setIsVisible_btnFormDelete,
        isVisible_fdImage2,
        setIsVisible_fdImage2,
        isVisible_hfImage2,
        setIsVisible_hfImage2,
        isVisible_fiImageFile2,
        setIsVisible_fiImageFile2,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_btnScanPicture,
        setIsVisible_btnScanPicture,
        isVisible_btnPhotoScan,
        setIsVisible_btnPhotoScan,
        isVisible_btnIssuedateModify,
        setIsVisible_btnIssuedateModify,
        isVisible_btnPassPrint,
        setIsVisible_btnPassPrint,
        isVisible_btnPrint65050New,
        setIsVisible_btnPrint65050New,
        isVisible_taAjgubun,
        setIsVisible_taAjgubun,
        isVisible_btnPassPrintCancel,
        setIsVisible_btnPassPrintCancel,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edSunapCheck,
        setIsVisible_edSunapCheck,
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