// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_iLicense, Ids_oPrintGubun, Ids_oCourse, Ids_oIssueGubun, Ids_oLicenseReport, Ids_ioImageInfo, Ids_oSetlmentHist, Ids_oLicense, Ids_iTrainingPerson, Ids_iLicenseImage, Ids_ioModifyHistory, Ids_oLicenseReportEdu, Ids_oTrainingPerson, Ids_oLicenseH, Ids_oYearbizlink } from './Frmspcledu0250MLicenseIssueManagementData';

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
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_shpGubunBox5, setIsVisible_shpGubunBox5] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbPrintGubun, setIsVisible_lbPrintGubun] = useState(true);
    const [isVisible_radPrintGubun, setIsVisible_radPrintGubun] = useState(true);
    const [isVisible_shpGubunBox6, setIsVisible_shpGubunBox6] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_shpGubunBox2, setIsVisible_shpGubunBox2] = useState(true);
    const [isVisible_lbLcsHistInfo, setIsVisible_lbLcsHistInfo] = useState(true);
    const [isVisible_btnSearchLcsIssueHist, setIsVisible_btnSearchLcsIssueHist] = useState(true);
    const [isVisible_gdLcsInfo, setIsVisible_gdLcsInfo] = useState(true);
    const [isVisible_btnLoadPicture, setIsVisible_btnLoadPicture] = useState(true);
    const [isVisible_btnLoadScanPicture, setIsVisible_btnLoadScanPicture] = useState(true);
    const [isVisible_btnScanPicture, setIsVisible_btnScanPicture] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_imgLastestPicture, setIsVisible_imgLastestPicture] = useState(true);
    const [isVisible_btnPictureManagement, setIsVisible_btnPictureManagement] = useState(true);
    const [isVisible_btnApplyPicture, setIsVisible_btnApplyPicture] = useState(true);
    const [isVisible_btnSearchRegPicture, setIsVisible_btnSearchRegPicture] = useState(true);
    const [isVisible_lbSearch, setIsVisible_lbSearch] = useState(true);
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);
    const [isVisible_btnAuthResidentNo, setIsVisible_btnAuthResidentNo] = useState(true);
    const [isVisible_btnSearchPersonInfo, setIsVisible_btnSearchPersonInfo] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_lbAddr, setIsVisible_lbAddr] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_btnSearchZipCode, setIsVisible_btnSearchZipCode] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
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
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_lbEduDate, setIsVisible_lbEduDate] = useState(true);
    const [isVisible_calEduDateStart1, setIsVisible_calEduDateStart1] = useState(true);
    const [isVisible_lbDateWave, setIsVisible_lbDateWave] = useState(true);
    const [isVisible_calEduDateEnd2, setIsVisible_calEduDateEnd2] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_lbBarCode, setIsVisible_lbBarCode] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_btnBarCodeSearch, setIsVisible_btnBarCodeSearch] = useState(true);
    const [isVisible_fdImageFile, setIsVisible_fdImageFile] = useState(true);
    const [isVisible_hfImageFile, setIsVisible_hfImageFile] = useState(true);
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
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_shpGubunBox5,
        setIsVisible_shpGubunBox5,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
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
        isVisible_btnScanPicture,
        setIsVisible_btnScanPicture,
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
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_btnAuthResidentNo,
        setIsVisible_btnAuthResidentNo,
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
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
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
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_btnBarCodeSearch,
        setIsVisible_btnBarCodeSearch,
        isVisible_fdImageFile,
        setIsVisible_fdImageFile,
        isVisible_hfImageFile,
        setIsVisible_hfImageFile,
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