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
    const [rawVisible_shpGubunBox5, setRawVisible_shpGubunBox5] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPrintGubun, setRawVisible_lbPrintGubun] = useState(true);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_shpGubunBox6, setRawVisible_shpGubunBox6] = useState(true);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_lbLcsHistInfo, setRawVisible_lbLcsHistInfo] = useState(true);
    const [rawVisible_btnSearchLcsIssueHist, setRawVisible_btnSearchLcsIssueHist] = useState(false);
    const [rawVisible_gdLcsInfo, setRawVisible_gdLcsInfo] = useState(true);
    const [rawVisible_btnLoadPicture, setRawVisible_btnLoadPicture] = useState(true);
    const [rawVisible_btnLoadScanPicture, setRawVisible_btnLoadScanPicture] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_btnPictureManagement, setRawVisible_btnPictureManagement] = useState(true);
    const [rawVisible_btnApplyPicture, setRawVisible_btnApplyPicture] = useState(true);
    const [rawVisible_btnSearchRegPicture, setRawVisible_btnSearchRegPicture] = useState(true);
    const [rawVisible_lbSearch, setRawVisible_lbSearch] = useState(true);
    const [rawVisible_lbBIRTHDAY, setRawVisible_lbBIRTHDAY] = useState(true);
    const [rawVisible_medBIRTHDAY, setRawVisible_medBIRTHDAY] = useState(true);
    const [rawVisible_btnAuthBIRTHDAY, setRawVisible_btnAuthBIRTHDAY] = useState(true);
    const [rawVisible_btnSearchPersonInfo, setRawVisible_btnSearchPersonInfo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode, setRawVisible_btnSearchZipCode] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(false);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(false);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_lbPersonInfo, setRawVisible_lbPersonInfo] = useState(true);
    const [rawVisible_lbLcsNo, setRawVisible_lbLcsNo] = useState(true);
    const [rawVisible_medLcsNo, setRawVisible_medLcsNo] = useState(true);
    const [rawVisible_lbIssueRemark, setRawVisible_lbIssueRemark] = useState(true);
    const [rawVisible_edCompNm, setRawVisible_edCompNm] = useState(true);
    const [rawVisible_lbFirstIssueDate, setRawVisible_lbFirstIssueDate] = useState(true);
    const [rawVisible_calFirstIssueDate, setRawVisible_calFirstIssueDate] = useState(true);
    const [rawVisible_radIssueGubun, setRawVisible_radIssueGubun] = useState(true);
    const [rawVisible_btnChangeProcDate, setRawVisible_btnChangeProcDate] = useState(true);
    const [rawVisible_btnProcRct, setRawVisible_btnProcRct] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_lbSetlmt, setRawVisible_lbSetlmt] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_lbIssueDate, setRawVisible_lbIssueDate] = useState(true);
    const [rawVisible_calIssueDate, setRawVisible_calIssueDate] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_calEduDateStart1, setRawVisible_calEduDateStart1] = useState(true);
    const [rawVisible_lbDateWave, setRawVisible_lbDateWave] = useState(true);
    const [rawVisible_calEduDateEnd2, setRawVisible_calEduDateEnd2] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_fdImageFile, setRawVisible_fdImageFile] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_gdSetlmt, setRawVisible_gdSetlmt] = useState(true);
    const [rawVisible_fiImageFile, setRawVisible_fiImageFile] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnSaveInfo, setRawVisible_btnSaveInfo] = useState(true);
    const [rawVisible_btnPosResultList, setRawVisible_btnPosResultList] = useState(true);
    const [rawVisible_lbLcsInfo, setRawVisible_lbLcsInfo] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_gdLcsHistory, setRawVisible_gdLcsHistory] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbIssueGubun, setRawVisible_lbIssueGubun] = useState(true);
    const [rawVisible_btnTPModify, setRawVisible_btnTPModify] = useState(true);
    const [rawVisible_lbImgDate, setRawVisible_lbImgDate] = useState(true);
    const [rawVisible_btnPosReport, setRawVisible_btnPosReport] = useState(true);
    const [rawVisible_shpGubunBox7, setRawVisible_shpGubunBox7] = useState(true);
    const [rawVisible_radBarcodeGubun, setRawVisible_radBarcodeGubun] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_btnBarCodeSearch, setRawVisible_btnBarCodeSearch] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(false);
    const [rawVisible_btnPrintReRctPDF, setRawVisible_btnPrintReRctPDF] = useState(true);
    const [rawVisible_hfImageFile, setRawVisible_hfImageFile] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_lbSave, setRawVisible_lbSave] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_gdLcsPrtHistory, setRawVisible_gdLcsPrtHistory] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_btnPrint4700, setRawVisible_btnPrint4700] = useState(true);
    const [rawVisible_lbNotice, setRawVisible_lbNotice] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_btnScanSave, setRawVisible_btnScanSave] = useState(true);
    const [rawVisible_btnLocalFormView, setRawVisible_btnLocalFormView] = useState(true);
    const [rawVisible_edScanFileName, setRawVisible_edScanFileName] = useState(true);
    const [rawVisible_btnScanSearch, setRawVisible_btnScanSearch] = useState(true);
    const [rawVisible_btnScan, setRawVisible_btnScan] = useState(true);
    const [rawVisible_btnSeverFormView, setRawVisible_btnSeverFormView] = useState(true);
    const [rawVisible_edFormResult, setRawVisible_edFormResult] = useState(true);
    const [rawVisible_cbxForm, setRawVisible_cbxForm] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_btnFormDelete, setRawVisible_btnFormDelete] = useState(false);
    const [rawVisible_fdImage2, setRawVisible_fdImage2] = useState(true);
    const [rawVisible_hfImage2, setRawVisible_hfImage2] = useState(true);
    const [rawVisible_fiImageFile2, setRawVisible_fiImageFile2] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_btnScanPicture, setRawVisible_btnScanPicture] = useState(true);
    const [rawVisible_btnPhotoScan, setRawVisible_btnPhotoScan] = useState(true);
    const [rawVisible_btnIssuedateModify, setRawVisible_btnIssuedateModify] = useState(true);
    const [rawVisible_btnPassPrint, setRawVisible_btnPassPrint] = useState(true);
    const [rawVisible_btnPrint65050New, setRawVisible_btnPrint65050New] = useState(true);
    const [rawVisible_taAjgubun, setRawVisible_taAjgubun] = useState(false);
    const [rawVisible_btnPassPrintCancel, setRawVisible_btnPassPrintCancel] = useState(false);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edSunapCheck, setRawVisible_edSunapCheck] = useState(true);
    const isVisible_shpGubunBox5 = rawVisible_shpGubunBox5;
    const setIsVisible_shpGubunBox5 = setRawVisible_shpGubunBox5;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPrintGubun = rawVisible_lbPrintGubun && rawVisible_shpGubunBox1;
    const setIsVisible_lbPrintGubun = setRawVisible_lbPrintGubun;
    const isVisible_radPrintGubun = rawVisible_radPrintGubun && rawVisible_shpGubunBox1;
    const setIsVisible_radPrintGubun = setRawVisible_radPrintGubun;
    const isVisible_shpGubunBox6 = rawVisible_shpGubunBox6;
    const setIsVisible_shpGubunBox6 = setRawVisible_shpGubunBox6;
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_lbLcsHistInfo = rawVisible_lbLcsHistInfo && rawVisible_shpGubunBox2;
    const setIsVisible_lbLcsHistInfo = setRawVisible_lbLcsHistInfo;
    const isVisible_btnSearchLcsIssueHist = rawVisible_btnSearchLcsIssueHist;
    const setIsVisible_btnSearchLcsIssueHist = setRawVisible_btnSearchLcsIssueHist;
    const isVisible_gdLcsInfo = rawVisible_gdLcsInfo && rawVisible_shpGubunBox2;
    const setIsVisible_gdLcsInfo = setRawVisible_gdLcsInfo;
    const isVisible_btnLoadPicture = rawVisible_btnLoadPicture;
    const setIsVisible_btnLoadPicture = setRawVisible_btnLoadPicture;
    const isVisible_btnLoadScanPicture = rawVisible_btnLoadScanPicture;
    const setIsVisible_btnLoadScanPicture = setRawVisible_btnLoadScanPicture;
    const isVisible_imgPicture = rawVisible_imgPicture;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_imgLastestPicture = rawVisible_imgLastestPicture;
    const setIsVisible_imgLastestPicture = setRawVisible_imgLastestPicture;
    const isVisible_btnPictureManagement = rawVisible_btnPictureManagement;
    const setIsVisible_btnPictureManagement = setRawVisible_btnPictureManagement;
    const isVisible_btnApplyPicture = rawVisible_btnApplyPicture;
    const setIsVisible_btnApplyPicture = setRawVisible_btnApplyPicture;
    const isVisible_btnSearchRegPicture = rawVisible_btnSearchRegPicture;
    const setIsVisible_btnSearchRegPicture = setRawVisible_btnSearchRegPicture;
    const isVisible_lbSearch = rawVisible_lbSearch && rawVisible_shpGubunBox3;
    const setIsVisible_lbSearch = setRawVisible_lbSearch;
    const isVisible_lbBIRTHDAY = rawVisible_lbBIRTHDAY && rawVisible_shpGubunBox3;
    const setIsVisible_lbBIRTHDAY = setRawVisible_lbBIRTHDAY;
    const isVisible_medBIRTHDAY = rawVisible_medBIRTHDAY && rawVisible_shpGubunBox3;
    const setIsVisible_medBIRTHDAY = setRawVisible_medBIRTHDAY;
    const isVisible_btnAuthBIRTHDAY = rawVisible_btnAuthBIRTHDAY && rawVisible_shpGubunBox3;
    const setIsVisible_btnAuthBIRTHDAY = setRawVisible_btnAuthBIRTHDAY;
    const isVisible_btnSearchPersonInfo = rawVisible_btnSearchPersonInfo && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchPersonInfo = setRawVisible_btnSearchPersonInfo;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox4;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox4;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_btnSearchZipCode = rawVisible_btnSearchZipCode && rawVisible_shpGubunBox4;
    const setIsVisible_btnSearchZipCode = setRawVisible_btnSearchZipCode;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox4;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbTel = rawVisible_lbTel;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_lbPersonInfo = rawVisible_lbPersonInfo && rawVisible_shpGubunBox4;
    const setIsVisible_lbPersonInfo = setRawVisible_lbPersonInfo;
    const isVisible_lbLcsNo = rawVisible_lbLcsNo && rawVisible_shpGubunBox3;
    const setIsVisible_lbLcsNo = setRawVisible_lbLcsNo;
    const isVisible_medLcsNo = rawVisible_medLcsNo && rawVisible_shpGubunBox3;
    const setIsVisible_medLcsNo = setRawVisible_medLcsNo;
    const isVisible_lbIssueRemark = rawVisible_lbIssueRemark && rawVisible_shpGubunBox4;
    const setIsVisible_lbIssueRemark = setRawVisible_lbIssueRemark;
    const isVisible_edCompNm = rawVisible_edCompNm && rawVisible_shpGubunBox4;
    const setIsVisible_edCompNm = setRawVisible_edCompNm;
    const isVisible_lbFirstIssueDate = rawVisible_lbFirstIssueDate && rawVisible_shpGubunBox5;
    const setIsVisible_lbFirstIssueDate = setRawVisible_lbFirstIssueDate;
    const isVisible_calFirstIssueDate = rawVisible_calFirstIssueDate && rawVisible_shpGubunBox5;
    const setIsVisible_calFirstIssueDate = setRawVisible_calFirstIssueDate;
    const isVisible_radIssueGubun = rawVisible_radIssueGubun && rawVisible_shpGubunBox5;
    const setIsVisible_radIssueGubun = setRawVisible_radIssueGubun;
    const isVisible_btnChangeProcDate = rawVisible_btnChangeProcDate && rawVisible_shpGubunBox6;
    const setIsVisible_btnChangeProcDate = setRawVisible_btnChangeProcDate;
    const isVisible_btnProcRct = rawVisible_btnProcRct && rawVisible_shpGubunBox6;
    const setIsVisible_btnProcRct = setRawVisible_btnProcRct;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct && rawVisible_shpGubunBox6;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt && rawVisible_shpGubunBox6;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_lbSetlmt = rawVisible_lbSetlmt && rawVisible_shpGubunBox6;
    const setIsVisible_lbSetlmt = setRawVisible_lbSetlmt;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_shpGubunBox5;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_lbIssueDate = rawVisible_lbIssueDate && rawVisible_Shape0;
    const setIsVisible_lbIssueDate = setRawVisible_lbIssueDate;
    const isVisible_calIssueDate = rawVisible_calIssueDate && rawVisible_Shape0;
    const setIsVisible_calIssueDate = setRawVisible_calIssueDate;
    const isVisible_lbEduDate = rawVisible_lbEduDate && rawVisible_shpGubunBox5;
    const setIsVisible_lbEduDate = setRawVisible_lbEduDate;
    const isVisible_calEduDateStart1 = rawVisible_calEduDateStart1 && rawVisible_shpGubunBox5;
    const setIsVisible_calEduDateStart1 = setRawVisible_calEduDateStart1;
    const isVisible_lbDateWave = rawVisible_lbDateWave && rawVisible_shpGubunBox5;
    const setIsVisible_lbDateWave = setRawVisible_lbDateWave;
    const isVisible_calEduDateEnd2 = rawVisible_calEduDateEnd2 && rawVisible_shpGubunBox5;
    const setIsVisible_calEduDateEnd2 = setRawVisible_calEduDateEnd2;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_fdImageFile = rawVisible_fdImageFile && rawVisible_shpGubunBox1;
    const setIsVisible_fdImageFile = setRawVisible_fdImageFile;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox4;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_gdSetlmt = rawVisible_gdSetlmt && rawVisible_shpGubunBox6;
    const setIsVisible_gdSetlmt = setRawVisible_gdSetlmt;
    const isVisible_fiImageFile = rawVisible_fiImageFile && rawVisible_shpGubunBox1;
    const setIsVisible_fiImageFile = setRawVisible_fiImageFile;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape0;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnSaveInfo = rawVisible_btnSaveInfo;
    const setIsVisible_btnSaveInfo = setRawVisible_btnSaveInfo;
    const isVisible_btnPosResultList = rawVisible_btnPosResultList && rawVisible_shpGubunBox6;
    const setIsVisible_btnPosResultList = setRawVisible_btnPosResultList;
    const isVisible_lbLcsInfo = rawVisible_lbLcsInfo && rawVisible_shpGubunBox5;
    const setIsVisible_lbLcsInfo = setRawVisible_lbLcsInfo;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_gdLcsHistory = rawVisible_gdLcsHistory && rawVisible_Shape1;
    const setIsVisible_gdLcsHistory = setRawVisible_gdLcsHistory;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox5;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbIssueGubun = rawVisible_lbIssueGubun && rawVisible_shpGubunBox5;
    const setIsVisible_lbIssueGubun = setRawVisible_lbIssueGubun;
    const isVisible_btnTPModify = rawVisible_btnTPModify && rawVisible_shpGubunBox3;
    const setIsVisible_btnTPModify = setRawVisible_btnTPModify;
    const isVisible_lbImgDate = rawVisible_lbImgDate;
    const setIsVisible_lbImgDate = setRawVisible_lbImgDate;
    const isVisible_btnPosReport = rawVisible_btnPosReport && rawVisible_shpGubunBox6;
    const setIsVisible_btnPosReport = setRawVisible_btnPosReport;
    const isVisible_shpGubunBox7 = rawVisible_shpGubunBox7 && rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox7 = setRawVisible_shpGubunBox7;
    const isVisible_radBarcodeGubun = rawVisible_radBarcodeGubun && rawVisible_shpGubunBox7;
    const setIsVisible_radBarcodeGubun = setRawVisible_radBarcodeGubun;
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_shpGubunBox7;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_shpGubunBox7;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_btnBarCodeSearch = rawVisible_btnBarCodeSearch && rawVisible_shpGubunBox7;
    const setIsVisible_btnBarCodeSearch = setRawVisible_btnBarCodeSearch;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox7;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun && rawVisible_shpGubunBox4;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_btnPrintReRctPDF = rawVisible_btnPrintReRctPDF && rawVisible_shpGubunBox6;
    const setIsVisible_btnPrintReRctPDF = setRawVisible_btnPrintReRctPDF;
    const isVisible_hfImageFile = rawVisible_hfImageFile && rawVisible_shpGubunBox1;
    const setIsVisible_hfImageFile = setRawVisible_hfImageFile;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpGubunBox2;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_lbSave = rawVisible_lbSave && rawVisible_Shape0;
    const setIsVisible_lbSave = setRawVisible_lbSave;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_gdLcsPrtHistory = rawVisible_gdLcsPrtHistory && rawVisible_Shape2;
    const setIsVisible_gdLcsPrtHistory = setRawVisible_gdLcsPrtHistory;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_btnPrint4700 = rawVisible_btnPrint4700 && rawVisible_Shape2;
    const setIsVisible_btnPrint4700 = setRawVisible_btnPrint4700;
    const isVisible_lbNotice = rawVisible_lbNotice && rawVisible_Shape0;
    const setIsVisible_lbNotice = setRawVisible_lbNotice;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_btnScanSave = rawVisible_btnScanSave && rawVisible_Shape3;
    const setIsVisible_btnScanSave = setRawVisible_btnScanSave;
    const isVisible_btnLocalFormView = rawVisible_btnLocalFormView && rawVisible_Shape3;
    const setIsVisible_btnLocalFormView = setRawVisible_btnLocalFormView;
    const isVisible_edScanFileName = rawVisible_edScanFileName && rawVisible_Shape3;
    const setIsVisible_edScanFileName = setRawVisible_edScanFileName;
    const isVisible_btnScanSearch = rawVisible_btnScanSearch && rawVisible_Shape3;
    const setIsVisible_btnScanSearch = setRawVisible_btnScanSearch;
    const isVisible_btnScan = rawVisible_btnScan && rawVisible_Shape3;
    const setIsVisible_btnScan = setRawVisible_btnScan;
    const isVisible_btnSeverFormView = rawVisible_btnSeverFormView && rawVisible_Shape3;
    const setIsVisible_btnSeverFormView = setRawVisible_btnSeverFormView;
    const isVisible_edFormResult = rawVisible_edFormResult && rawVisible_Shape3;
    const setIsVisible_edFormResult = setRawVisible_edFormResult;
    const isVisible_cbxForm = rawVisible_cbxForm && rawVisible_Shape3;
    const setIsVisible_cbxForm = setRawVisible_cbxForm;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_btnFormDelete = rawVisible_btnFormDelete && rawVisible_Shape3;
    const setIsVisible_btnFormDelete = setRawVisible_btnFormDelete;
    const isVisible_fdImage2 = rawVisible_fdImage2 && rawVisible_shpGubunBox5;
    const setIsVisible_fdImage2 = setRawVisible_fdImage2;
    const isVisible_hfImage2 = rawVisible_hfImage2 && rawVisible_shpGubunBox5;
    const setIsVisible_hfImage2 = setRawVisible_hfImage2;
    const isVisible_fiImageFile2 = rawVisible_fiImageFile2 && rawVisible_shpGubunBox5;
    const setIsVisible_fiImageFile2 = setRawVisible_fiImageFile2;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_medPersonKey = rawVisible_medPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_btnScanPicture = rawVisible_btnScanPicture;
    const setIsVisible_btnScanPicture = setRawVisible_btnScanPicture;
    const isVisible_btnPhotoScan = rawVisible_btnPhotoScan;
    const setIsVisible_btnPhotoScan = setRawVisible_btnPhotoScan;
    const isVisible_btnIssuedateModify = rawVisible_btnIssuedateModify && rawVisible_shpGubunBox5;
    const setIsVisible_btnIssuedateModify = setRawVisible_btnIssuedateModify;
    const isVisible_btnPassPrint = rawVisible_btnPassPrint && rawVisible_Shape2;
    const setIsVisible_btnPassPrint = setRawVisible_btnPassPrint;
    const isVisible_btnPrint65050New = rawVisible_btnPrint65050New && rawVisible_Shape2;
    const setIsVisible_btnPrint65050New = setRawVisible_btnPrint65050New;
    const isVisible_taAjgubun = rawVisible_taAjgubun && rawVisible_shpGubunBox5;
    const setIsVisible_taAjgubun = setRawVisible_taAjgubun;
    const isVisible_btnPassPrintCancel = rawVisible_btnPassPrintCancel && rawVisible_Shape2;
    const setIsVisible_btnPassPrintCancel = setRawVisible_btnPassPrintCancel;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_shpGubunBox2;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edSunapCheck = rawVisible_edSunapCheck && rawVisible_shpGubunBox2;
    const setIsVisible_edSunapCheck = setRawVisible_edSunapCheck;

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