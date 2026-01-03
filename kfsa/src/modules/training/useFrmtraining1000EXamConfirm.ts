// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfessor, Ids_Jibu, Ids_oJibu, Ids_status, Ids_ioExamJubsu, Ids_oJubsuGubunCourse, Ids_oJubsuGubun, Ids_oProfessor, Ids_oChangeTpmgno, Ids_ioExamPerson, Ids_ioT_E_L_JubsuCheck, Ids_oJubsuGubunCheck, Ids_oJubsuGubun_copy, Ids_KemsOnline, Ids_examaccept, Ids_examaccept_first, Ids_examaccept_two, Ids_oTrainingPerson, Ids_oAddr, Ids_oJibu2, Ids_oExamJubsu, Ids_ioProfessorData, Ids_oForm, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete, Ids_examaccept_tree, Ids_Personkey, Ids_oExamJubsuResult, Ids_oModifyColumn, Ids_examaccept_SW, Ids_ConfirmCheck, Ids_ioReport, Ids_examaccept_Five } from './Frmtraining1000EXamConfirmData';

export const useFrmtraining1000EXamConfirm = () => {
    const [ds_ioProfessor, setds_ioProfessor] = useState<Ids_ioProfessor[]>([]);
    const [ds_Jibu, setds_Jibu] = useState<Ids_Jibu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_status, setds_status] = useState<Ids_status[]>([]);
    const [ds_ioExamJubsu, setds_ioExamJubsu] = useState<Ids_ioExamJubsu[]>([]);
    const [ds_oJubsuGubunCourse, setds_oJubsuGubunCourse] = useState<Ids_oJubsuGubunCourse[]>([]);
    const [ds_oJubsuGubun, setds_oJubsuGubun] = useState<Ids_oJubsuGubun[]>([]);
    const [ds_oProfessor, setds_oProfessor] = useState<Ids_oProfessor[]>([]);
    const [ds_oChangeTpmgno, setds_oChangeTpmgno] = useState<Ids_oChangeTpmgno[]>([]);
    const [ds_ioExamPerson, setds_ioExamPerson] = useState<Ids_ioExamPerson[]>([]);
    const [ds_ioT_E_L_JubsuCheck, setds_ioT_E_L_JubsuCheck] = useState<Ids_ioT_E_L_JubsuCheck[]>([]);
    const [ds_oJubsuGubunCheck, setds_oJubsuGubunCheck] = useState<Ids_oJubsuGubunCheck[]>([]);
    const [ds_oJubsuGubun_copy, setds_oJubsuGubun_copy] = useState<Ids_oJubsuGubun_copy[]>([]);
    const [ds_KemsOnline, setds_KemsOnline] = useState<Ids_KemsOnline[]>([]);
    const [ds_examaccept, setds_examaccept] = useState<Ids_examaccept[]>([]);
    const [ds_examaccept_first, setds_examaccept_first] = useState<Ids_examaccept_first[]>([]);
    const [ds_examaccept_two, setds_examaccept_two] = useState<Ids_examaccept_two[]>([]);
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oJibu2, setds_oJibu2] = useState<Ids_oJibu2[]>([]);
    const [ds_oExamJubsu, setds_oExamJubsu] = useState<Ids_oExamJubsu[]>([]);
    const [ds_ioProfessorData, setds_ioProfessorData] = useState<Ids_ioProfessorData[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_examaccept_tree, setds_examaccept_tree] = useState<Ids_examaccept_tree[]>([]);
    const [ds_Personkey, setds_Personkey] = useState<Ids_Personkey[]>([]);
    const [ds_oExamJubsuResult, setds_oExamJubsuResult] = useState<Ids_oExamJubsuResult[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_examaccept_SW, setds_examaccept_SW] = useState<Ids_examaccept_SW[]>([]);
    const [ds_ConfirmCheck, setds_ConfirmCheck] = useState<Ids_ConfirmCheck[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_examaccept_Five, setds_examaccept_Five] = useState<Ids_examaccept_Five[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnInput, setRawVisible_btnInput] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edSPersonnm, setRawVisible_edSPersonnm] = useState(true);
    const [rawVisible_gdProfessor, setRawVisible_gdProfessor] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_cldFromdt, setRawVisible_cldFromdt] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_cldTodt, setRawVisible_cldTodt] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxStatus, setRawVisible_cbxStatus] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_cbxJubsuGubun, setRawVisible_cbxJubsuGubun] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edfileNm, setRawVisible_edfileNm] = useState(true);
    const [rawVisible_btnDownload, setRawVisible_btnDownload] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_edStatus, setRawVisible_edStatus] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_lbModetest, setRawVisible_lbModetest] = useState(true);
    const [rawVisible_edFormResult, setRawVisible_edFormResult] = useState(true);
    const [rawVisible_btnSeverFormView, setRawVisible_btnSeverFormView] = useState(true);
    const [rawVisible_btnScan, setRawVisible_btnScan] = useState(true);
    const [rawVisible_btnScanSearch, setRawVisible_btnScanSearch] = useState(true);
    const [rawVisible_edScanFileName, setRawVisible_edScanFileName] = useState(true);
    const [rawVisible_btnLocalFormView, setRawVisible_btnLocalFormView] = useState(true);
    const [rawVisible_btnScanSave, setRawVisible_btnScanSave] = useState(true);
    const [rawVisible_btnFormDelete, setRawVisible_btnFormDelete] = useState(false);
    const [rawVisible_btnApprove, setRawVisible_btnApprove] = useState(true);
    const [rawVisible_btnReject, setRawVisible_btnReject] = useState(true);
    const [rawVisible_btnJubsu, setRawVisible_btnJubsu] = useState(true);
    const [rawVisible_btnMod, setRawVisible_btnMod] = useState(true);
    const [rawVisible_btn_Cancell, setRawVisible_btn_Cancell] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_cbxCourse, setRawVisible_cbxCourse] = useState(true);
    const [rawVisible_btnApplyPicture, setRawVisible_btnApplyPicture] = useState(false);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbBIRTHDAY, setRawVisible_lbBIRTHDAY] = useState(true);
    const [rawVisible_btnSearchPersonInfo, setRawVisible_btnSearchPersonInfo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode, setRawVisible_btnSearchZipCode] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_medBIRTHDAY, setRawVisible_medBIRTHDAY] = useState(true);
    const [rawVisible_btnAuthBIRTHDAY, setRawVisible_btnAuthBIRTHDAY] = useState(true);
    const [rawVisible_btnSearchRegPicture, setRawVisible_btnSearchRegPicture] = useState(true);
    const [rawVisible_lbExamPersonInfo, setRawVisible_lbExamPersonInfo] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_btnScanPicture, setRawVisible_btnScanPicture] = useState(true);
    const [rawVisible_btnPhotoScan, setRawVisible_btnPhotoScan] = useState(true);
    const [rawVisible_btnLoadScanPicture, setRawVisible_btnLoadScanPicture] = useState(true);
    const [rawVisible_btnLoadPicture, setRawVisible_btnLoadPicture] = useState(true);
    const [rawVisible_radChangeTpmgno, setRawVisible_radChangeTpmgno] = useState(false);
    const [rawVisible_lbImsiEATPMGNO, setRawVisible_lbImsiEATPMGNO] = useState(true);
    const [rawVisible_edImsiEATPMGNO, setRawVisible_edImsiEATPMGNO] = useState(true);
    const [rawVisible_lbImsiEAMGNO, setRawVisible_lbImsiEAMGNO] = useState(true);
    const [rawVisible_edImsiEAMGNO, setRawVisible_edImsiEAMGNO] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_cldEADATE, setRawVisible_cldEADATE] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_cbxJubsugubunCheck, setRawVisible_cbxJubsugubunCheck] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_cbxKemsOnline, setRawVisible_cbxKemsOnline] = useState(true);
    const [rawVisible_fdImage2, setRawVisible_fdImage2] = useState(true);
    const [rawVisible_hfImage2, setRawVisible_hfImage2] = useState(true);
    const [rawVisible_fiImageFile2, setRawVisible_fiImageFile2] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_cbx_jibu, setRawVisible_cbx_jibu] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(false);
    const [rawVisible_stfilePath, setRawVisible_stfilePath] = useState(true);
    const [rawVisible_edfilePath, setRawVisible_edfilePath] = useState(true);
    const [rawVisible_btnPrintAll, setRawVisible_btnPrintAll] = useState(true);
    const [rawVisible_cbxForm, setRawVisible_cbxForm] = useState(true);
    const [rawVisible_btCanCell, setRawVisible_btCanCell] = useState(true);
    const [rawVisible_btConfirmCancell, setRawVisible_btConfirmCancell] = useState(true);
    const [rawVisible_btnRemark, setRawVisible_btnRemark] = useState(true);
    const [rawVisible_fiImageFile, setRawVisible_fiImageFile] = useState(true);
    const [rawVisible_fdImage, setRawVisible_fdImage] = useState(true);
    const [rawVisible_hfImage, setRawVisible_hfImage] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_edCheckCount, setRawVisible_edCheckCount] = useState(false);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_btnImageZoom, setRawVisible_btnImageZoom] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_btn_masterSave, setRawVisible_btn_masterSave] = useState(false);
    const [rawVisible_lbAbsentCnt, setRawVisible_lbAbsentCnt] = useState(true);
    const [rawVisible_medSearchCnt, setRawVisible_medSearchCnt] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_medCheckCnt, setRawVisible_medCheckCnt] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape4 = rawVisible_Shape4 && rawVisible_Shape1;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape0;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnInput = rawVisible_btnInput && rawVisible_Shape3;
    const setIsVisible_btnInput = setRawVisible_btnInput;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_Shape3;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_Shape3;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_Shape0;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_Shape0;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_Shape0;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox1;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edSPersonnm = rawVisible_edSPersonnm && rawVisible_shpGubunBox1;
    const setIsVisible_edSPersonnm = setRawVisible_edSPersonnm;
    const isVisible_gdProfessor = rawVisible_gdProfessor;
    const setIsVisible_gdProfessor = setRawVisible_gdProfessor;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox1;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_cldFromdt = rawVisible_cldFromdt && rawVisible_shpGubunBox1;
    const setIsVisible_cldFromdt = setRawVisible_cldFromdt;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox1;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_cldTodt = rawVisible_cldTodt && rawVisible_shpGubunBox1;
    const setIsVisible_cldTodt = setRawVisible_cldTodt;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox1;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxStatus = rawVisible_cbxStatus && rawVisible_shpGubunBox1;
    const setIsVisible_cbxStatus = setRawVisible_cbxStatus;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_cbxJubsuGubun = rawVisible_cbxJubsuGubun && rawVisible_Shape1;
    const setIsVisible_cbxJubsuGubun = setRawVisible_cbxJubsuGubun;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape4;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edfileNm = rawVisible_edfileNm && rawVisible_Shape4;
    const setIsVisible_edfileNm = setRawVisible_edfileNm;
    const isVisible_btnDownload = rawVisible_btnDownload && rawVisible_Shape4;
    const setIsVisible_btnDownload = setRawVisible_btnDownload;
    const isVisible_lbJubsu = rawVisible_lbJubsu && rawVisible_Shape1;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_edStatus = rawVisible_edStatus && rawVisible_Shape1;
    const setIsVisible_edStatus = setRawVisible_edStatus;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_lbModetest = rawVisible_lbModetest && rawVisible_Shape1;
    const setIsVisible_lbModetest = setRawVisible_lbModetest;
    const isVisible_edFormResult = rawVisible_edFormResult && rawVisible_Shape1;
    const setIsVisible_edFormResult = setRawVisible_edFormResult;
    const isVisible_btnSeverFormView = rawVisible_btnSeverFormView && rawVisible_Shape1;
    const setIsVisible_btnSeverFormView = setRawVisible_btnSeverFormView;
    const isVisible_btnScan = rawVisible_btnScan && rawVisible_Shape1;
    const setIsVisible_btnScan = setRawVisible_btnScan;
    const isVisible_btnScanSearch = rawVisible_btnScanSearch && rawVisible_Shape1;
    const setIsVisible_btnScanSearch = setRawVisible_btnScanSearch;
    const isVisible_edScanFileName = rawVisible_edScanFileName && rawVisible_Shape1;
    const setIsVisible_edScanFileName = setRawVisible_edScanFileName;
    const isVisible_btnLocalFormView = rawVisible_btnLocalFormView && rawVisible_Shape1;
    const setIsVisible_btnLocalFormView = setRawVisible_btnLocalFormView;
    const isVisible_btnScanSave = rawVisible_btnScanSave && rawVisible_Shape1;
    const setIsVisible_btnScanSave = setRawVisible_btnScanSave;
    const isVisible_btnFormDelete = rawVisible_btnFormDelete && rawVisible_Shape1;
    const setIsVisible_btnFormDelete = setRawVisible_btnFormDelete;
    const isVisible_btnApprove = rawVisible_btnApprove && rawVisible_Shape3;
    const setIsVisible_btnApprove = setRawVisible_btnApprove;
    const isVisible_btnReject = rawVisible_btnReject && rawVisible_Shape3;
    const setIsVisible_btnReject = setRawVisible_btnReject;
    const isVisible_btnJubsu = rawVisible_btnJubsu && rawVisible_Shape3;
    const setIsVisible_btnJubsu = setRawVisible_btnJubsu;
    const isVisible_btnMod = rawVisible_btnMod && rawVisible_Shape3;
    const setIsVisible_btnMod = setRawVisible_btnMod;
    const isVisible_btn_Cancell = rawVisible_btn_Cancell && rawVisible_Shape3;
    const setIsVisible_btn_Cancell = setRawVisible_btn_Cancell;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_shpGubunBox1;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_cbxCourse = rawVisible_cbxCourse && rawVisible_Shape1;
    const setIsVisible_cbxCourse = setRawVisible_cbxCourse;
    const isVisible_btnApplyPicture = rawVisible_btnApplyPicture;
    const setIsVisible_btnApplyPicture = setRawVisible_btnApplyPicture;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbBIRTHDAY = rawVisible_lbBIRTHDAY && rawVisible_Shape1;
    const setIsVisible_lbBIRTHDAY = setRawVisible_lbBIRTHDAY;
    const isVisible_btnSearchPersonInfo = rawVisible_btnSearchPersonInfo && rawVisible_Shape1;
    const setIsVisible_btnSearchPersonInfo = setRawVisible_btnSearchPersonInfo;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_Shape1;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_Shape1;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_Shape1;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_btnSearchZipCode = rawVisible_btnSearchZipCode && rawVisible_Shape1;
    const setIsVisible_btnSearchZipCode = setRawVisible_btnSearchZipCode;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_Shape1;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_Shape1;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_Shape1;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel && rawVisible_Shape1;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_Shape1;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_medBIRTHDAY = rawVisible_medBIRTHDAY && rawVisible_Shape1;
    const setIsVisible_medBIRTHDAY = setRawVisible_medBIRTHDAY;
    const isVisible_btnAuthBIRTHDAY = rawVisible_btnAuthBIRTHDAY && rawVisible_Shape1;
    const setIsVisible_btnAuthBIRTHDAY = setRawVisible_btnAuthBIRTHDAY;
    const isVisible_btnSearchRegPicture = rawVisible_btnSearchRegPicture && rawVisible_Shape1;
    const setIsVisible_btnSearchRegPicture = setRawVisible_btnSearchRegPicture;
    const isVisible_lbExamPersonInfo = rawVisible_lbExamPersonInfo;
    const setIsVisible_lbExamPersonInfo = setRawVisible_lbExamPersonInfo;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_medPersonKey = rawVisible_medPersonKey;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_btnScanPicture = rawVisible_btnScanPicture && rawVisible_Shape1;
    const setIsVisible_btnScanPicture = setRawVisible_btnScanPicture;
    const isVisible_btnPhotoScan = rawVisible_btnPhotoScan && rawVisible_Shape1;
    const setIsVisible_btnPhotoScan = setRawVisible_btnPhotoScan;
    const isVisible_btnLoadScanPicture = rawVisible_btnLoadScanPicture && rawVisible_Shape1;
    const setIsVisible_btnLoadScanPicture = setRawVisible_btnLoadScanPicture;
    const isVisible_btnLoadPicture = rawVisible_btnLoadPicture && rawVisible_Shape1;
    const setIsVisible_btnLoadPicture = setRawVisible_btnLoadPicture;
    const isVisible_radChangeTpmgno = rawVisible_radChangeTpmgno;
    const setIsVisible_radChangeTpmgno = setRawVisible_radChangeTpmgno;
    const isVisible_lbImsiEATPMGNO = rawVisible_lbImsiEATPMGNO && rawVisible_Shape1;
    const setIsVisible_lbImsiEATPMGNO = setRawVisible_lbImsiEATPMGNO;
    const isVisible_edImsiEATPMGNO = rawVisible_edImsiEATPMGNO && rawVisible_Shape1;
    const setIsVisible_edImsiEATPMGNO = setRawVisible_edImsiEATPMGNO;
    const isVisible_lbImsiEAMGNO = rawVisible_lbImsiEAMGNO && rawVisible_Shape1;
    const setIsVisible_lbImsiEAMGNO = setRawVisible_lbImsiEAMGNO;
    const isVisible_edImsiEAMGNO = rawVisible_edImsiEAMGNO && rawVisible_Shape1;
    const setIsVisible_edImsiEAMGNO = setRawVisible_edImsiEAMGNO;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape1;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_cldEADATE = rawVisible_cldEADATE && rawVisible_Shape1;
    const setIsVisible_cldEADATE = setRawVisible_cldEADATE;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_cbxJubsugubunCheck = rawVisible_cbxJubsugubunCheck && rawVisible_Shape1;
    const setIsVisible_cbxJubsugubunCheck = setRawVisible_cbxJubsugubunCheck;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_shpGubunBox1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_cbxKemsOnline = rawVisible_cbxKemsOnline && rawVisible_shpGubunBox1;
    const setIsVisible_cbxKemsOnline = setRawVisible_cbxKemsOnline;
    const isVisible_fdImage2 = rawVisible_fdImage2 && rawVisible_Shape1;
    const setIsVisible_fdImage2 = setRawVisible_fdImage2;
    const isVisible_hfImage2 = rawVisible_hfImage2 && rawVisible_Shape1;
    const setIsVisible_hfImage2 = setRawVisible_hfImage2;
    const isVisible_fiImageFile2 = rawVisible_fiImageFile2 && rawVisible_Shape1;
    const setIsVisible_fiImageFile2 = setRawVisible_fiImageFile2;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_cbx_jibu = rawVisible_cbx_jibu && rawVisible_Shape1;
    const setIsVisible_cbx_jibu = setRawVisible_cbx_jibu;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_stfilePath = rawVisible_stfilePath && rawVisible_Shape1;
    const setIsVisible_stfilePath = setRawVisible_stfilePath;
    const isVisible_edfilePath = rawVisible_edfilePath && rawVisible_Shape1;
    const setIsVisible_edfilePath = setRawVisible_edfilePath;
    const isVisible_btnPrintAll = rawVisible_btnPrintAll && rawVisible_Shape0;
    const setIsVisible_btnPrintAll = setRawVisible_btnPrintAll;
    const isVisible_cbxForm = rawVisible_cbxForm && rawVisible_Shape1;
    const setIsVisible_cbxForm = setRawVisible_cbxForm;
    const isVisible_btCanCell = rawVisible_btCanCell && rawVisible_Shape3;
    const setIsVisible_btCanCell = setRawVisible_btCanCell;
    const isVisible_btConfirmCancell = rawVisible_btConfirmCancell && rawVisible_shpGubunBox1;
    const setIsVisible_btConfirmCancell = setRawVisible_btConfirmCancell;
    const isVisible_btnRemark = rawVisible_btnRemark;
    const setIsVisible_btnRemark = setRawVisible_btnRemark;
    const isVisible_fiImageFile = rawVisible_fiImageFile;
    const setIsVisible_fiImageFile = setRawVisible_fiImageFile;
    const isVisible_fdImage = rawVisible_fdImage;
    const setIsVisible_fdImage = setRawVisible_fdImage;
    const isVisible_hfImage = rawVisible_hfImage;
    const setIsVisible_hfImage = setRawVisible_hfImage;
    const isVisible_imgLastestPicture = rawVisible_imgLastestPicture && rawVisible_Shape1;
    const setIsVisible_imgLastestPicture = setRawVisible_imgLastestPicture;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_Shape1;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_edCheckCount = rawVisible_edCheckCount;
    const setIsVisible_edCheckCount = setRawVisible_edCheckCount;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape1;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_Shape1;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_btnImageZoom = rawVisible_btnImageZoom && rawVisible_Shape1;
    const setIsVisible_btnImageZoom = setRawVisible_btnImageZoom;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_Shape0;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_Shape2;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_btn_masterSave = rawVisible_btn_masterSave && rawVisible_shpGubunBox1;
    const setIsVisible_btn_masterSave = setRawVisible_btn_masterSave;
    const isVisible_lbAbsentCnt = rawVisible_lbAbsentCnt && rawVisible_shpGubunBox1;
    const setIsVisible_lbAbsentCnt = setRawVisible_lbAbsentCnt;
    const isVisible_medSearchCnt = rawVisible_medSearchCnt && rawVisible_shpGubunBox1;
    const setIsVisible_medSearchCnt = setRawVisible_medSearchCnt;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_shpGubunBox1;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_medCheckCnt = rawVisible_medCheckCnt && rawVisible_shpGubunBox1;
    const setIsVisible_medCheckCnt = setRawVisible_medCheckCnt;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfessor([]);
            setds_Jibu([]);
            setds_oJibu([]);
            setds_status([]);
            setds_ioExamJubsu([]);
            setds_oJubsuGubunCourse([]);
            setds_oJubsuGubun([]);
            setds_oProfessor([]);
            setds_oChangeTpmgno([]);
            setds_ioExamPerson([]);
            setds_ioT_E_L_JubsuCheck([]);
            setds_oJubsuGubunCheck([]);
            setds_oJubsuGubun_copy([]);
            setds_KemsOnline([]);
            setds_examaccept([]);
            setds_examaccept_first([]);
            setds_examaccept_two([]);
            setds_oTrainingPerson([]);
            setds_oAddr([]);
            setds_oJibu2([]);
            setds_oExamJubsu([]);
            setds_ioProfessorData([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_examaccept_tree([]);
            setds_Personkey([]);
            setds_oExamJubsuResult([]);
            setds_oModifyColumn([]);
            setds_examaccept_SW([]);
            setds_ConfirmCheck([]);
            setds_ioReport([]);
            setds_examaccept_Five([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btCanCell_OnClick = () => {
        console.log('btCanCell_OnClick clicked');
    };
    const btConfirmCancell_OnClick = () => {
        console.log('btConfirmCancell_OnClick clicked');
    };
    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnApprove_OnClick = () => {
        console.log('btnApprove_OnClick clicked');
    };
    const btnAuthBIRTHDAY_OnClick = () => {
        console.log('btnAuthBIRTHDAY_OnClick clicked');
    };
    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnImageZoom_OnClick = () => {
        console.log('btnImageZoom_OnClick clicked');
    };
    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
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
    const btnMod_OnClick = () => {
        console.log('btnMod_OnClick clicked');
    };
    const btnPhotoScan_OnClick = () => {
        console.log('btnPhotoScan_OnClick clicked');
    };
    const btnReject_OnClick = () => {
        console.log('btnReject_OnClick clicked');
    };
    const btnRemark_OnClick = () => {
        console.log('btnRemark_OnClick clicked');
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
    const btnSearchPersonInfoChange_OnClick = () => {
        console.log('btnSearchPersonInfoChange_OnClick clicked');
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
    const btnSeverFormView_OnClick = () => {
        console.log('btnSeverFormView_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const btn_Cancell_OnClick = () => {
        console.log('btn_Cancell_OnClick clicked');
    };
    const btn_masterSave_OnClick = () => {
        console.log('btn_masterSave_OnClick clicked');
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
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
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
        ds_ioProfessor,
        ds_Jibu,
        ds_oJibu,
        ds_status,
        ds_ioExamJubsu,
        ds_oJubsuGubunCourse,
        ds_oJubsuGubun,
        ds_oProfessor,
        ds_oChangeTpmgno,
        ds_ioExamPerson,
        ds_ioT_E_L_JubsuCheck,
        ds_oJubsuGubunCheck,
        ds_oJubsuGubun_copy,
        ds_KemsOnline,
        ds_examaccept,
        ds_examaccept_first,
        ds_examaccept_two,
        ds_oTrainingPerson,
        ds_oAddr,
        ds_oJibu2,
        ds_oExamJubsu,
        ds_ioProfessorData,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_examaccept_tree,
        ds_Personkey,
        ds_oExamJubsuResult,
        ds_oModifyColumn,
        ds_examaccept_SW,
        ds_ConfirmCheck,
        ds_ioReport,
        ds_examaccept_Five,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnInput,
        setIsVisible_btnInput,
        isVisible_btnDelete,
        setIsVisible_btnDelete,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edSPersonnm,
        setIsVisible_edSPersonnm,
        isVisible_gdProfessor,
        setIsVisible_gdProfessor,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_cldFromdt,
        setIsVisible_cldFromdt,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_cldTodt,
        setIsVisible_cldTodt,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxStatus,
        setIsVisible_cbxStatus,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_cbxJubsuGubun,
        setIsVisible_cbxJubsuGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edfileNm,
        setIsVisible_edfileNm,
        isVisible_btnDownload,
        setIsVisible_btnDownload,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_lbModetest,
        setIsVisible_lbModetest,
        isVisible_edFormResult,
        setIsVisible_edFormResult,
        isVisible_btnSeverFormView,
        setIsVisible_btnSeverFormView,
        isVisible_btnScan,
        setIsVisible_btnScan,
        isVisible_btnScanSearch,
        setIsVisible_btnScanSearch,
        isVisible_edScanFileName,
        setIsVisible_edScanFileName,
        isVisible_btnLocalFormView,
        setIsVisible_btnLocalFormView,
        isVisible_btnScanSave,
        setIsVisible_btnScanSave,
        isVisible_btnFormDelete,
        setIsVisible_btnFormDelete,
        isVisible_btnApprove,
        setIsVisible_btnApprove,
        isVisible_btnReject,
        setIsVisible_btnReject,
        isVisible_btnJubsu,
        setIsVisible_btnJubsu,
        isVisible_btnMod,
        setIsVisible_btnMod,
        isVisible_btn_Cancell,
        setIsVisible_btn_Cancell,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_btnApplyPicture,
        setIsVisible_btnApplyPicture,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbBIRTHDAY,
        setIsVisible_lbBIRTHDAY,
        isVisible_btnSearchPersonInfo,
        setIsVisible_btnSearchPersonInfo,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_btnSearchZipCode,
        setIsVisible_btnSearchZipCode,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_medBIRTHDAY,
        setIsVisible_medBIRTHDAY,
        isVisible_btnAuthBIRTHDAY,
        setIsVisible_btnAuthBIRTHDAY,
        isVisible_btnSearchRegPicture,
        setIsVisible_btnSearchRegPicture,
        isVisible_lbExamPersonInfo,
        setIsVisible_lbExamPersonInfo,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_btnScanPicture,
        setIsVisible_btnScanPicture,
        isVisible_btnPhotoScan,
        setIsVisible_btnPhotoScan,
        isVisible_btnLoadScanPicture,
        setIsVisible_btnLoadScanPicture,
        isVisible_btnLoadPicture,
        setIsVisible_btnLoadPicture,
        isVisible_radChangeTpmgno,
        setIsVisible_radChangeTpmgno,
        isVisible_lbImsiEATPMGNO,
        setIsVisible_lbImsiEATPMGNO,
        isVisible_edImsiEATPMGNO,
        setIsVisible_edImsiEATPMGNO,
        isVisible_lbImsiEAMGNO,
        setIsVisible_lbImsiEAMGNO,
        isVisible_edImsiEAMGNO,
        setIsVisible_edImsiEAMGNO,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_cldEADATE,
        setIsVisible_cldEADATE,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_cbxJubsugubunCheck,
        setIsVisible_cbxJubsugubunCheck,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_cbxKemsOnline,
        setIsVisible_cbxKemsOnline,
        isVisible_fdImage2,
        setIsVisible_fdImage2,
        isVisible_hfImage2,
        setIsVisible_hfImage2,
        isVisible_fiImageFile2,
        setIsVisible_fiImageFile2,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_cbx_jibu,
        setIsVisible_cbx_jibu,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_stfilePath,
        setIsVisible_stfilePath,
        isVisible_edfilePath,
        setIsVisible_edfilePath,
        isVisible_btnPrintAll,
        setIsVisible_btnPrintAll,
        isVisible_cbxForm,
        setIsVisible_cbxForm,
        isVisible_btCanCell,
        setIsVisible_btCanCell,
        isVisible_btConfirmCancell,
        setIsVisible_btConfirmCancell,
        isVisible_btnRemark,
        setIsVisible_btnRemark,
        isVisible_fiImageFile,
        setIsVisible_fiImageFile,
        isVisible_fdImage,
        setIsVisible_fdImage,
        isVisible_hfImage,
        setIsVisible_hfImage,
        isVisible_imgLastestPicture,
        setIsVisible_imgLastestPicture,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_edCheckCount,
        setIsVisible_edCheckCount,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_btnImageZoom,
        setIsVisible_btnImageZoom,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_btn_masterSave,
        setIsVisible_btn_masterSave,
        isVisible_lbAbsentCnt,
        setIsVisible_lbAbsentCnt,
        isVisible_medSearchCnt,
        setIsVisible_medSearchCnt,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_medCheckCnt,
        setIsVisible_medCheckCnt,
        btCanCell_OnClick,
        btConfirmCancell_OnClick,
        btnApplyPicture_OnClick,
        btnApprove_OnClick,
        btnAuthBIRTHDAY_OnClick,
        btnDownload_OnClick,
        btnFormDelete_OnClick,
        btnImageZoom_OnClick,
        btnJubsu_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnLocalFormView_OnClick,
        btnMod_OnClick,
        btnPhotoScan_OnClick,
        btnReject_OnClick,
        btnRemark_OnClick,
        btnScanPicture_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSearchPersonInfoChange_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchZipCode_OnClick,
        btnSeverFormView_OnClick,
        btnToExcel_OnClick,
        btn_Cancell_OnClick,
        btn_masterSave_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Input,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};