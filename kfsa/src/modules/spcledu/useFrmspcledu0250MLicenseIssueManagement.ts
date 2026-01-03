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
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_shpGubunBox5, setRawVisible_shpGubunBox5] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPrintGubun, setRawVisible_lbPrintGubun] = useState(true);
    const [rawVisible_radPrintGubun, setRawVisible_radPrintGubun] = useState(true);
    const [rawVisible_shpGubunBox6, setRawVisible_shpGubunBox6] = useState(true);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_lbLcsHistInfo, setRawVisible_lbLcsHistInfo] = useState(true);
    const [rawVisible_btnSearchLcsIssueHist, setRawVisible_btnSearchLcsIssueHist] = useState(true);
    const [rawVisible_gdLcsInfo, setRawVisible_gdLcsInfo] = useState(true);
    const [rawVisible_btnLoadPicture, setRawVisible_btnLoadPicture] = useState(true);
    const [rawVisible_btnLoadScanPicture, setRawVisible_btnLoadScanPicture] = useState(true);
    const [rawVisible_btnScanPicture, setRawVisible_btnScanPicture] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_btnPictureManagement, setRawVisible_btnPictureManagement] = useState(true);
    const [rawVisible_btnApplyPicture, setRawVisible_btnApplyPicture] = useState(true);
    const [rawVisible_btnSearchRegPicture, setRawVisible_btnSearchRegPicture] = useState(true);
    const [rawVisible_lbSearch, setRawVisible_lbSearch] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_btnSearchPersonInfo, setRawVisible_btnSearchPersonInfo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode, setRawVisible_btnSearchZipCode] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
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
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_lbEduDate, setRawVisible_lbEduDate] = useState(true);
    const [rawVisible_calEduDateStart1, setRawVisible_calEduDateStart1] = useState(true);
    const [rawVisible_lbDateWave, setRawVisible_lbDateWave] = useState(true);
    const [rawVisible_calEduDateEnd2, setRawVisible_calEduDateEnd2] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_btnBarCodeSearch, setRawVisible_btnBarCodeSearch] = useState(true);
    const [rawVisible_fdImageFile, setRawVisible_fdImageFile] = useState(true);
    const [rawVisible_hfImageFile, setRawVisible_hfImageFile] = useState(true);
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
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_shpGubunBox5 = rawVisible_shpGubunBox5;
    const setIsVisible_shpGubunBox5 = setRawVisible_shpGubunBox5;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
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
    const isVisible_btnSearchLcsIssueHist = rawVisible_btnSearchLcsIssueHist && rawVisible_Shape1;
    const setIsVisible_btnSearchLcsIssueHist = setRawVisible_btnSearchLcsIssueHist;
    const isVisible_gdLcsInfo = rawVisible_gdLcsInfo && rawVisible_shpGubunBox2;
    const setIsVisible_gdLcsInfo = setRawVisible_gdLcsInfo;
    const isVisible_btnLoadPicture = rawVisible_btnLoadPicture;
    const setIsVisible_btnLoadPicture = setRawVisible_btnLoadPicture;
    const isVisible_btnLoadScanPicture = rawVisible_btnLoadScanPicture;
    const setIsVisible_btnLoadScanPicture = setRawVisible_btnLoadScanPicture;
    const isVisible_btnScanPicture = rawVisible_btnScanPicture;
    const setIsVisible_btnScanPicture = setRawVisible_btnScanPicture;
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
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
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
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_shpGubunBox4;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel && rawVisible_shpGubunBox4;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox4;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox4;
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
    const isVisible_lbIssueDate = rawVisible_lbIssueDate && rawVisible_shpGubunBox5;
    const setIsVisible_lbIssueDate = setRawVisible_lbIssueDate;
    const isVisible_calIssueDate = rawVisible_calIssueDate && rawVisible_shpGubunBox5;
    const setIsVisible_calIssueDate = setRawVisible_calIssueDate;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpGubunBox5;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpGubunBox5;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
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
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_shpGubunBox3;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_shpGubunBox3;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_btnBarCodeSearch = rawVisible_btnBarCodeSearch && rawVisible_shpGubunBox3;
    const setIsVisible_btnBarCodeSearch = setRawVisible_btnBarCodeSearch;
    const isVisible_fdImageFile = rawVisible_fdImageFile && rawVisible_shpGubunBox1;
    const setIsVisible_fdImageFile = setRawVisible_fdImageFile;
    const isVisible_hfImageFile = rawVisible_hfImageFile && rawVisible_shpGubunBox1;
    const setIsVisible_hfImageFile = setRawVisible_hfImageFile;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox4;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_gdSetlmt = rawVisible_gdSetlmt && rawVisible_shpGubunBox6;
    const setIsVisible_gdSetlmt = setRawVisible_gdSetlmt;
    const isVisible_fiImageFile = rawVisible_fiImageFile && rawVisible_shpGubunBox1;
    const setIsVisible_fiImageFile = setRawVisible_fiImageFile;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpGubunBox5;
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