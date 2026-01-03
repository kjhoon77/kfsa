// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingJubsu, Ids_oJibu, Ids_oCourse, Ids_oEmailDomain, Ids_oImage, Ids_oRemarkGubun, Ids_oTrainingOrderMgno, Ids_oJubsuNo, Ids_oSeatNo, Ids_oJubsuAllInfo, Ids_oOrderHist, Ids_oSetlmentHist, Ids_ioMenuTree, Ids_oModifyColumn, Ids_oTrainingJubsuResult, Ids_oTrainingJubsuPrint, Ids_oTrainingOrder, Ids_oPosResult, Ids_oTrainingJubsuPrint1, Ids_oTrainingJubsuPrint2, Ids_oTrainingJubsuPrint3, Ids_oTrainingCheck, Ids_oJibuGubun, Ids_oTrainingPearson, Ids_oChangeTpmgno, Ids_ioYearbizlink, Ids_ioT_E_L_JubsuCheck, Ids_ioTraing_JubsuCheck, Ids_ioTraing_ReturnTpmgnoJubsuCheck, Ids_ioTrainingPerson, Ids_ioSettelYN, Ids_oEducationNo, Ids_ioControl, Ids_ioTraingSeatNoCheck, Ids_oSiteMember, Ids_oCyberLearning, Ids_oCyberPass, Ids_oAddr, Ids_oYN, Ids_ioManager, Ids_oMemberStatus, Ids_oDeleteSettlement, Ids_oAmountGubun, Ids_oExamCheat, Ids_oForm, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete, Ids_ioScicheck, Ids_oTrainingJubsuPrint4, Ids_oModifyTime, Ids_oTaskList, Ids_oBookReturn, Ids_iTaskSave, Ids_oTaskGubun, Ids_oResult_check, Ids_oSmsData } from './Frmtraining0020MTrainingJubsuManagementData';

export const useFrmtraining0020MTrainingJubsuManagement = () => {
    const [ds_ioTrainingJubsu, setds_ioTrainingJubsu] = useState<Ids_ioTrainingJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oImage, setds_oImage] = useState<Ids_oImage[]>([]);
    const [ds_oRemarkGubun, setds_oRemarkGubun] = useState<Ids_oRemarkGubun[]>([]);
    const [ds_oTrainingOrderMgno, setds_oTrainingOrderMgno] = useState<Ids_oTrainingOrderMgno[]>([]);
    const [ds_oJubsuNo, setds_oJubsuNo] = useState<Ids_oJubsuNo[]>([]);
    const [ds_oSeatNo, setds_oSeatNo] = useState<Ids_oSeatNo[]>([]);
    const [ds_oJubsuAllInfo, setds_oJubsuAllInfo] = useState<Ids_oJubsuAllInfo[]>([]);
    const [ds_oOrderHist, setds_oOrderHist] = useState<Ids_oOrderHist[]>([]);
    const [ds_oSetlmentHist, setds_oSetlmentHist] = useState<Ids_oSetlmentHist[]>([]);
    const [ds_ioMenuTree, setds_ioMenuTree] = useState<Ids_ioMenuTree[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_oTrainingJubsuResult, setds_oTrainingJubsuResult] = useState<Ids_oTrainingJubsuResult[]>([]);
    const [ds_oTrainingJubsuPrint, setds_oTrainingJubsuPrint] = useState<Ids_oTrainingJubsuPrint[]>([]);
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oPosResult, setds_oPosResult] = useState<Ids_oPosResult[]>([]);
    const [ds_oTrainingJubsuPrint1, setds_oTrainingJubsuPrint1] = useState<Ids_oTrainingJubsuPrint1[]>([]);
    const [ds_oTrainingJubsuPrint2, setds_oTrainingJubsuPrint2] = useState<Ids_oTrainingJubsuPrint2[]>([]);
    const [ds_oTrainingJubsuPrint3, setds_oTrainingJubsuPrint3] = useState<Ids_oTrainingJubsuPrint3[]>([]);
    const [ds_oTrainingCheck, setds_oTrainingCheck] = useState<Ids_oTrainingCheck[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_oTrainingPearson, setds_oTrainingPearson] = useState<Ids_oTrainingPearson[]>([]);
    const [ds_oChangeTpmgno, setds_oChangeTpmgno] = useState<Ids_oChangeTpmgno[]>([]);
    const [ds_ioYearbizlink, setds_ioYearbizlink] = useState<Ids_ioYearbizlink[]>([]);
    const [ds_ioT_E_L_JubsuCheck, setds_ioT_E_L_JubsuCheck] = useState<Ids_ioT_E_L_JubsuCheck[]>([]);
    const [ds_ioTraing_JubsuCheck, setds_ioTraing_JubsuCheck] = useState<Ids_ioTraing_JubsuCheck[]>([]);
    const [ds_ioTraing_ReturnTpmgnoJubsuCheck, setds_ioTraing_ReturnTpmgnoJubsuCheck] = useState<Ids_ioTraing_ReturnTpmgnoJubsuCheck[]>([]);
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [ds_ioSettelYN, setds_ioSettelYN] = useState<Ids_ioSettelYN[]>([]);
    const [ds_oEducationNo, setds_oEducationNo] = useState<Ids_oEducationNo[]>([]);
    const [ds_ioControl, setds_ioControl] = useState<Ids_ioControl[]>([]);
    const [ds_ioTraingSeatNoCheck, setds_ioTraingSeatNoCheck] = useState<Ids_ioTraingSeatNoCheck[]>([]);
    const [ds_oSiteMember, setds_oSiteMember] = useState<Ids_oSiteMember[]>([]);
    const [ds_oCyberLearning, setds_oCyberLearning] = useState<Ids_oCyberLearning[]>([]);
    const [ds_oCyberPass, setds_oCyberPass] = useState<Ids_oCyberPass[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oYN, setds_oYN] = useState<Ids_oYN[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oMemberStatus, setds_oMemberStatus] = useState<Ids_oMemberStatus[]>([]);
    const [ds_oDeleteSettlement, setds_oDeleteSettlement] = useState<Ids_oDeleteSettlement[]>([]);
    const [ds_oAmountGubun, setds_oAmountGubun] = useState<Ids_oAmountGubun[]>([]);
    const [ds_oExamCheat, setds_oExamCheat] = useState<Ids_oExamCheat[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_ioScicheck, setds_ioScicheck] = useState<Ids_ioScicheck[]>([]);
    const [ds_oTrainingJubsuPrint4, setds_oTrainingJubsuPrint4] = useState<Ids_oTrainingJubsuPrint4[]>([]);
    const [ds_oModifyTime, setds_oModifyTime] = useState<Ids_oModifyTime[]>([]);
    const [ds_oTaskList, setds_oTaskList] = useState<Ids_oTaskList[]>([]);
    const [ds_oBookReturn, setds_oBookReturn] = useState<Ids_oBookReturn[]>([]);
    const [ds_iTaskSave, setds_iTaskSave] = useState<Ids_iTaskSave[]>([]);
    const [ds_oTaskGubun, setds_oTaskGubun] = useState<Ids_oTaskGubun[]>([]);
    const [ds_oResult_check, setds_oResult_check] = useState<Ids_oResult_check[]>([]);
    const [ds_oSmsData, setds_oSmsData] = useState<Ids_oSmsData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnApplyPicture, setRawVisible_btnApplyPicture] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_gdSetlmentHist, setRawVisible_gdSetlmentHist] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_edTrainingYear, setRawVisible_edTrainingYear] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edTrainingOrder, setRawVisible_edTrainingOrder] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_lbCompNm, setRawVisible_lbCompNm] = useState(true);
    const [rawVisible_edCompNm, setRawVisible_edCompNm] = useState(true);
    const [rawVisible_lbAt, setRawVisible_lbAt] = useState(true);
    const [rawVisible_btnSearchPersonInfo, setRawVisible_btnSearchPersonInfo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_edJubsuNo, setRawVisible_edJubsuNo] = useState(true);
    const [rawVisible_lbSeq, setRawVisible_lbSeq] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode, setRawVisible_btnSearchZipCode] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_cbxEmailDomain, setRawVisible_cbxEmailDomain] = useState(true);
    const [rawVisible_lbEmail, setRawVisible_lbEmail] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_edPassYn, setRawVisible_edPassYn] = useState(true);
    const [rawVisible_lbPassYn, setRawVisible_lbPassYn] = useState(true);
    const [rawVisible_edAbsentYn, setRawVisible_edAbsentYn] = useState(true);
    const [rawVisible_lbAbsentYn, setRawVisible_lbAbsentYn] = useState(true);
    const [rawVisible_btnAbsentManageLink, setRawVisible_btnAbsentManageLink] = useState(true);
    const [rawVisible_btnTrainingJubsuModify, setRawVisible_btnTrainingJubsuModify] = useState(true);
    const [rawVisible_gdJubsuInfo, setRawVisible_gdJubsuInfo] = useState(true);
    const [rawVisible_lbJubsuInfo, setRawVisible_lbJubsuInfo] = useState(true);
    const [rawVisible_gdOrderHist, setRawVisible_gdOrderHist] = useState(true);
    const [rawVisible_lbJubsuHist, setRawVisible_lbJubsuHist] = useState(true);
    const [rawVisible_lbSetlmt, setRawVisible_lbSetlmt] = useState(true);
    const [rawVisible_edEmailDomain, setRawVisible_edEmailDomain] = useState(true);
    const [rawVisible_btnSeqList, setRawVisible_btnSeqList] = useState(true);
    const [rawVisible_btnSearchTrainingOrder, setRawVisible_btnSearchTrainingOrder] = useState(true);
    const [rawVisible_fdImage, setRawVisible_fdImage] = useState(true);
    const [rawVisible_hfImage, setRawVisible_hfImage] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_btnTraingJubsuHist, setRawVisible_btnTraingJubsuHist] = useState(true);
    const [rawVisible_cbxRemarkGubun, setRawVisible_cbxRemarkGubun] = useState(true);
    const [rawVisible_btnChangeProcDate, setRawVisible_btnChangeProcDate] = useState(true);
    const [rawVisible_btnProcRct, setRawVisible_btnProcRct] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_btnSendSms, setRawVisible_btnSendSms] = useState(true);
    const [rawVisible_btnPrintJubsu, setRawVisible_btnPrintJubsu] = useState(true);
    const [rawVisible_btnSendEmail, setRawVisible_btnSendEmail] = useState(false);
    const [rawVisible_lbSeatNo, setRawVisible_lbSeatNo] = useState(true);
    const [rawVisible_edSeatNo, setRawVisible_edSeatNo] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_btnSeatList, setRawVisible_btnSeatList] = useState(true);
    const [rawVisible_lbOrderChange, setRawVisible_lbOrderChange] = useState(true);
    const [rawVisible_shpBox1, setRawVisible_shpBox1] = useState(true);
    const [rawVisible_shpBox2, setRawVisible_shpBox2] = useState(true);
    const [rawVisible_btnSmsStat, setRawVisible_btnSmsStat] = useState(true);
    const [rawVisible_btnEmailStat, setRawVisible_btnEmailStat] = useState(false);
    const [rawVisible_lbTrainingInfo, setRawVisible_lbTrainingInfo] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_btnSearchRegPicture, setRawVisible_btnSearchRegPicture] = useState(true);
    const [rawVisible_lbTrainingPersonInfo, setRawVisible_lbTrainingPersonInfo] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(true);
    const [rawVisible_btnBarCodeSearch, setRawVisible_btnBarCodeSearch] = useState(true);
    const [rawVisible_shpBox3, setRawVisible_shpBox3] = useState(true);
    const [rawVisible_lbTrainingInfo2, setRawVisible_lbTrainingInfo2] = useState(true);
    const [rawVisible_btnUnUseJubsuNo, setRawVisible_btnUnUseJubsuNo] = useState(true);
    const [rawVisible_btnLoadPicture, setRawVisible_btnLoadPicture] = useState(true);
    const [rawVisible_btnLoadScanPicture, setRawVisible_btnLoadScanPicture] = useState(true);
    const [rawVisible_btnScanPicture, setRawVisible_btnScanPicture] = useState(true);
    const [rawVisible_btnPictureManagement, setRawVisible_btnPictureManagement] = useState(false);
    const [rawVisible_btnShowVirtualAccount, setRawVisible_btnShowVirtualAccount] = useState(true);
    const [rawVisible_btnModifyHistory, setRawVisible_btnModifyHistory] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_fiImageFile, setRawVisible_fiImageFile] = useState(true);
    const [rawVisible_btnPosResultList, setRawVisible_btnPosResultList] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnPrintJubsuResult, setRawVisible_btnPrintJubsuResult] = useState(true);
    const [rawVisible_radJibuGubun, setRawVisible_radJibuGubun] = useState(true);
    const [rawVisible_btnLicenseList, setRawVisible_btnLicenseList] = useState(true);
    const [rawVisible_radChangeTpmgno, setRawVisible_radChangeTpmgno] = useState(false);
    const [rawVisible_btnJubsuHistory, setRawVisible_btnJubsuHistory] = useState(true);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_btnPosvath, setRawVisible_btnPosvath] = useState(true);
    const [rawVisible_btnUnSeatList, setRawVisible_btnUnSeatList] = useState(true);
    const [rawVisible_btnTraingJubsuinfo, setRawVisible_btnTraingJubsuinfo] = useState(false);
    const [rawVisible_btnPosReport, setRawVisible_btnPosReport] = useState(true);
    const [rawVisible_btnCyberInfo, setRawVisible_btnCyberInfo] = useState(true);
    const [rawVisible_lbTrainingInfo1, setRawVisible_lbTrainingInfo1] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(false);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(false);
    const [rawVisible_radMemAgreeYN, setRawVisible_radMemAgreeYN] = useState(false);
    const [rawVisible_edImsiTJMGNO, setRawVisible_edImsiTJMGNO] = useState(true);
    const [rawVisible_edImsiTPMGNO, setRawVisible_edImsiTPMGNO] = useState(true);
    const [rawVisible_lbImsiTJMGNO, setRawVisible_lbImsiTJMGNO] = useState(true);
    const [rawVisible_lbImsiTPMGNO, setRawVisible_lbImsiTPMGNO] = useState(true);
    const [rawVisible_btnDeleteSettlement, setRawVisible_btnDeleteSettlement] = useState(true);
    const [rawVisible_btnPrintReRctPDF, setRawVisible_btnPrintReRctPDF] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_radAmountGubun, setRawVisible_radAmountGubun] = useState(true);
    const [rawVisible_btnEstimate, setRawVisible_btnEstimate] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edEvalYN, setRawVisible_edEvalYN] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_btnScanSave, setRawVisible_btnScanSave] = useState(true);
    const [rawVisible_btnLocalFormView, setRawVisible_btnLocalFormView] = useState(true);
    const [rawVisible_edScanFileName, setRawVisible_edScanFileName] = useState(true);
    const [rawVisible_btnScanSearch, setRawVisible_btnScanSearch] = useState(true);
    const [rawVisible_btnScan, setRawVisible_btnScan] = useState(true);
    const [rawVisible_btnSeverFormView, setRawVisible_btnSeverFormView] = useState(true);
    const [rawVisible_edFormResult, setRawVisible_edFormResult] = useState(true);
    const [rawVisible_cbxForm, setRawVisible_cbxForm] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_fdImage2, setRawVisible_fdImage2] = useState(true);
    const [rawVisible_hfImage2, setRawVisible_hfImage2] = useState(true);
    const [rawVisible_fiImageFile2, setRawVisible_fiImageFile2] = useState(true);
    const [rawVisible_btnFormDelete, setRawVisible_btnFormDelete] = useState(false);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_btnAwaiter, setRawVisible_btnAwaiter] = useState(true);
    const [rawVisible_btnPhotoScan, setRawVisible_btnPhotoScan] = useState(true);
    const [rawVisible_lbSunapAmt, setRawVisible_lbSunapAmt] = useState(true);
    const [rawVisible_medSunapAmt, setRawVisible_medSunapAmt] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_medBookZipCode, setRawVisible_medBookZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode2, setRawVisible_btnSearchZipCode2] = useState(true);
    const [rawVisible_edBookAddr1, setRawVisible_edBookAddr1] = useState(true);
    const [rawVisible_edBookAddr2, setRawVisible_edBookAddr2] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_edTaskSubmitGubun, setRawVisible_edTaskSubmitGubun] = useState(true);
    const [rawVisible_edOnlineGubun, setRawVisible_edOnlineGubun] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_btnDownload, setRawVisible_btnDownload] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_radBookReturn, setRawVisible_radBookReturn] = useState(true);
    const [rawVisible_edBookPrintYn, setRawVisible_edBookPrintYn] = useState(true);
    const [rawVisible_btnTaskSave, setRawVisible_btnTaskSave] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_divTask, setRawVisible_divTask] = useState(false);
    const [rawVisible_radTaskGubun, setRawVisible_radTaskGubun] = useState(true);
    const [rawVisible_btnDivTaskSave, setRawVisible_btnDivTaskSave] = useState(true);
    const [rawVisible_lbTrainingInfo3, setRawVisible_lbTrainingInfo3] = useState(true);
    const [rawVisible_edCARGUBUN, setRawVisible_edCARGUBUN] = useState(false);
    const [rawVisible_edMANAGE_VRSC_AT, setRawVisible_edMANAGE_VRSC_AT] = useState(false);
    const [rawVisible_edLTCCOURECD, setRawVisible_edLTCCOURECD] = useState(false);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_edBookPrint, setRawVisible_edBookPrint] = useState(true);
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_btnApplyPicture = rawVisible_btnApplyPicture && rawVisible_shpGubunBox3;
    const setIsVisible_btnApplyPicture = setRawVisible_btnApplyPicture;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_gdSetlmentHist = rawVisible_gdSetlmentHist && rawVisible_shpGubunBox4;
    const setIsVisible_gdSetlmentHist = setRawVisible_gdSetlmentHist;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpBtnBox;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox1;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbTrainingYear = rawVisible_lbTrainingYear && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingYear = setRawVisible_lbTrainingYear;
    const isVisible_edTrainingYear = rawVisible_edTrainingYear && rawVisible_shpGubunBox1;
    const setIsVisible_edTrainingYear = setRawVisible_edTrainingYear;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edTrainingOrder = rawVisible_edTrainingOrder && rawVisible_shpGubunBox1;
    const setIsVisible_edTrainingOrder = setRawVisible_edTrainingOrder;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_lbCompNm = rawVisible_lbCompNm && rawVisible_divWorkFormTitle;
    const setIsVisible_lbCompNm = setRawVisible_lbCompNm;
    const isVisible_edCompNm = rawVisible_edCompNm && rawVisible_shpGubunBox3;
    const setIsVisible_edCompNm = setRawVisible_edCompNm;
    const isVisible_lbAt = rawVisible_lbAt && rawVisible_shpGubunBox3;
    const setIsVisible_lbAt = setRawVisible_lbAt;
    const isVisible_btnSearchPersonInfo = rawVisible_btnSearchPersonInfo && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchPersonInfo = setRawVisible_btnSearchPersonInfo;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_edJubsuNo = rawVisible_edJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_edJubsuNo = setRawVisible_edJubsuNo;
    const isVisible_lbSeq = rawVisible_lbSeq && rawVisible_shpGubunBox1;
    const setIsVisible_lbSeq = setRawVisible_lbSeq;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox3;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_btnSearchZipCode = rawVisible_btnSearchZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchZipCode = setRawVisible_btnSearchZipCode;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel && rawVisible_shpGubunBox3;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_cbxEmailDomain = rawVisible_cbxEmailDomain && rawVisible_shpGubunBox3;
    const setIsVisible_cbxEmailDomain = setRawVisible_cbxEmailDomain;
    const isVisible_lbEmail = rawVisible_lbEmail && rawVisible_shpGubunBox3;
    const setIsVisible_lbEmail = setRawVisible_lbEmail;
    const isVisible_edEmail = rawVisible_edEmail && rawVisible_shpGubunBox3;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
    const isVisible_edPassYn = rawVisible_edPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_edPassYn = setRawVisible_edPassYn;
    const isVisible_lbPassYn = rawVisible_lbPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_lbPassYn = setRawVisible_lbPassYn;
    const isVisible_edAbsentYn = rawVisible_edAbsentYn && rawVisible_shpGubunBox1;
    const setIsVisible_edAbsentYn = setRawVisible_edAbsentYn;
    const isVisible_lbAbsentYn = rawVisible_lbAbsentYn && rawVisible_shpGubunBox1;
    const setIsVisible_lbAbsentYn = setRawVisible_lbAbsentYn;
    const isVisible_btnAbsentManageLink = rawVisible_btnAbsentManageLink && rawVisible_shpGubunBox1;
    const setIsVisible_btnAbsentManageLink = setRawVisible_btnAbsentManageLink;
    const isVisible_btnTrainingJubsuModify = rawVisible_btnTrainingJubsuModify && rawVisible_shpGubunBox1;
    const setIsVisible_btnTrainingJubsuModify = setRawVisible_btnTrainingJubsuModify;
    const isVisible_gdJubsuInfo = rawVisible_gdJubsuInfo;
    const setIsVisible_gdJubsuInfo = setRawVisible_gdJubsuInfo;
    const isVisible_lbJubsuInfo = rawVisible_lbJubsuInfo;
    const setIsVisible_lbJubsuInfo = setRawVisible_lbJubsuInfo;
    const isVisible_gdOrderHist = rawVisible_gdOrderHist;
    const setIsVisible_gdOrderHist = setRawVisible_gdOrderHist;
    const isVisible_lbJubsuHist = rawVisible_lbJubsuHist;
    const setIsVisible_lbJubsuHist = setRawVisible_lbJubsuHist;
    const isVisible_lbSetlmt = rawVisible_lbSetlmt;
    const setIsVisible_lbSetlmt = setRawVisible_lbSetlmt;
    const isVisible_edEmailDomain = rawVisible_edEmailDomain && rawVisible_shpGubunBox3;
    const setIsVisible_edEmailDomain = setRawVisible_edEmailDomain;
    const isVisible_btnSeqList = rawVisible_btnSeqList && rawVisible_shpGubunBox1;
    const setIsVisible_btnSeqList = setRawVisible_btnSeqList;
    const isVisible_btnSearchTrainingOrder = rawVisible_btnSearchTrainingOrder && rawVisible_shpGubunBox1;
    const setIsVisible_btnSearchTrainingOrder = setRawVisible_btnSearchTrainingOrder;
    const isVisible_fdImage = rawVisible_fdImage;
    const setIsVisible_fdImage = setRawVisible_fdImage;
    const isVisible_hfImage = rawVisible_hfImage;
    const setIsVisible_hfImage = setRawVisible_hfImage;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox3;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox3;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_shpGubunBox1;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_btnTraingJubsuHist = rawVisible_btnTraingJubsuHist && rawVisible_shpGubunBox3;
    const setIsVisible_btnTraingJubsuHist = setRawVisible_btnTraingJubsuHist;
    const isVisible_cbxRemarkGubun = rawVisible_cbxRemarkGubun && rawVisible_shpGubunBox3;
    const setIsVisible_cbxRemarkGubun = setRawVisible_cbxRemarkGubun;
    const isVisible_btnChangeProcDate = rawVisible_btnChangeProcDate;
    const setIsVisible_btnChangeProcDate = setRawVisible_btnChangeProcDate;
    const isVisible_btnProcRct = rawVisible_btnProcRct;
    const setIsVisible_btnProcRct = setRawVisible_btnProcRct;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_btnSendSms = rawVisible_btnSendSms && rawVisible_shpGubunBox3;
    const setIsVisible_btnSendSms = setRawVisible_btnSendSms;
    const isVisible_btnPrintJubsu = rawVisible_btnPrintJubsu && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintJubsu = setRawVisible_btnPrintJubsu;
    const isVisible_btnSendEmail = rawVisible_btnSendEmail && rawVisible_shpGubunBox3;
    const setIsVisible_btnSendEmail = setRawVisible_btnSendEmail;
    const isVisible_lbSeatNo = rawVisible_lbSeatNo && rawVisible_shpGubunBox1;
    const setIsVisible_lbSeatNo = setRawVisible_lbSeatNo;
    const isVisible_edSeatNo = rawVisible_edSeatNo && rawVisible_shpGubunBox1;
    const setIsVisible_edSeatNo = setRawVisible_edSeatNo;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt && rawVisible_shpGubunBox4;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_btnSeatList = rawVisible_btnSeatList && rawVisible_shpGubunBox1;
    const setIsVisible_btnSeatList = setRawVisible_btnSeatList;
    const isVisible_lbOrderChange = rawVisible_lbOrderChange && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderChange = setRawVisible_lbOrderChange;
    const isVisible_shpBox1 = rawVisible_shpBox1;
    const setIsVisible_shpBox1 = setRawVisible_shpBox1;
    const isVisible_shpBox2 = rawVisible_shpBox2;
    const setIsVisible_shpBox2 = setRawVisible_shpBox2;
    const isVisible_btnSmsStat = rawVisible_btnSmsStat && rawVisible_shpGubunBox3;
    const setIsVisible_btnSmsStat = setRawVisible_btnSmsStat;
    const isVisible_btnEmailStat = rawVisible_btnEmailStat && rawVisible_shpGubunBox3;
    const setIsVisible_btnEmailStat = setRawVisible_btnEmailStat;
    const isVisible_lbTrainingInfo = rawVisible_lbTrainingInfo && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingInfo = setRawVisible_lbTrainingInfo;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_shpGubunBox3;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_imgLastestPicture = rawVisible_imgLastestPicture && rawVisible_shpGubunBox3;
    const setIsVisible_imgLastestPicture = setRawVisible_imgLastestPicture;
    const isVisible_btnSearchRegPicture = rawVisible_btnSearchRegPicture && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchRegPicture = setRawVisible_btnSearchRegPicture;
    const isVisible_lbTrainingPersonInfo = rawVisible_lbTrainingPersonInfo;
    const setIsVisible_lbTrainingPersonInfo = setRawVisible_lbTrainingPersonInfo;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_shpGubunBox2;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_btnBarCodeSearch = rawVisible_btnBarCodeSearch;
    const setIsVisible_btnBarCodeSearch = setRawVisible_btnBarCodeSearch;
    const isVisible_shpBox3 = rawVisible_shpBox3;
    const setIsVisible_shpBox3 = setRawVisible_shpBox3;
    const isVisible_lbTrainingInfo2 = rawVisible_lbTrainingInfo2 && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingInfo2 = setRawVisible_lbTrainingInfo2;
    const isVisible_btnUnUseJubsuNo = rawVisible_btnUnUseJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_btnUnUseJubsuNo = setRawVisible_btnUnUseJubsuNo;
    const isVisible_btnLoadPicture = rawVisible_btnLoadPicture && rawVisible_divTask;
    const setIsVisible_btnLoadPicture = setRawVisible_btnLoadPicture;
    const isVisible_btnLoadScanPicture = rawVisible_btnLoadScanPicture && rawVisible_divTask;
    const setIsVisible_btnLoadScanPicture = setRawVisible_btnLoadScanPicture;
    const isVisible_btnScanPicture = rawVisible_btnScanPicture && rawVisible_shpGubunBox3;
    const setIsVisible_btnScanPicture = setRawVisible_btnScanPicture;
    const isVisible_btnPictureManagement = rawVisible_btnPictureManagement;
    const setIsVisible_btnPictureManagement = setRawVisible_btnPictureManagement;
    const isVisible_btnShowVirtualAccount = rawVisible_btnShowVirtualAccount;
    const setIsVisible_btnShowVirtualAccount = setRawVisible_btnShowVirtualAccount;
    const isVisible_btnModifyHistory = rawVisible_btnModifyHistory && rawVisible_shpGubunBox1;
    const setIsVisible_btnModifyHistory = setRawVisible_btnModifyHistory;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_shpGubunBox2;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_fiImageFile = rawVisible_fiImageFile;
    const setIsVisible_fiImageFile = setRawVisible_fiImageFile;
    const isVisible_btnPosResultList = rawVisible_btnPosResultList;
    const setIsVisible_btnPosResultList = setRawVisible_btnPosResultList;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnPrintJubsuResult = rawVisible_btnPrintJubsuResult && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintJubsuResult = setRawVisible_btnPrintJubsuResult;
    const isVisible_radJibuGubun = rawVisible_radJibuGubun;
    const setIsVisible_radJibuGubun = setRawVisible_radJibuGubun;
    const isVisible_btnLicenseList = rawVisible_btnLicenseList && rawVisible_shpGubunBox1;
    const setIsVisible_btnLicenseList = setRawVisible_btnLicenseList;
    const isVisible_radChangeTpmgno = rawVisible_radChangeTpmgno;
    const setIsVisible_radChangeTpmgno = setRawVisible_radChangeTpmgno;
    const isVisible_btnJubsuHistory = rawVisible_btnJubsuHistory && rawVisible_shpGubunBox1;
    const setIsVisible_btnJubsuHistory = setRawVisible_btnJubsuHistory;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_shpGubunBox3;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnPosvath = rawVisible_btnPosvath;
    const setIsVisible_btnPosvath = setRawVisible_btnPosvath;
    const isVisible_btnUnSeatList = rawVisible_btnUnSeatList && rawVisible_shpGubunBox1;
    const setIsVisible_btnUnSeatList = setRawVisible_btnUnSeatList;
    const isVisible_btnTraingJubsuinfo = rawVisible_btnTraingJubsuinfo;
    const setIsVisible_btnTraingJubsuinfo = setRawVisible_btnTraingJubsuinfo;
    const isVisible_btnPosReport = rawVisible_btnPosReport;
    const setIsVisible_btnPosReport = setRawVisible_btnPosReport;
    const isVisible_btnCyberInfo = rawVisible_btnCyberInfo && rawVisible_shpGubunBox1;
    const setIsVisible_btnCyberInfo = setRawVisible_btnCyberInfo;
    const isVisible_lbTrainingInfo1 = rawVisible_lbTrainingInfo1 && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingInfo1 = setRawVisible_lbTrainingInfo1;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun && rawVisible_shpGubunBox3;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_radMemAgreeYN = rawVisible_radMemAgreeYN;
    const setIsVisible_radMemAgreeYN = setRawVisible_radMemAgreeYN;
    const isVisible_edImsiTJMGNO = rawVisible_edImsiTJMGNO;
    const setIsVisible_edImsiTJMGNO = setRawVisible_edImsiTJMGNO;
    const isVisible_edImsiTPMGNO = rawVisible_edImsiTPMGNO;
    const setIsVisible_edImsiTPMGNO = setRawVisible_edImsiTPMGNO;
    const isVisible_lbImsiTJMGNO = rawVisible_lbImsiTJMGNO;
    const setIsVisible_lbImsiTJMGNO = setRawVisible_lbImsiTJMGNO;
    const isVisible_lbImsiTPMGNO = rawVisible_lbImsiTPMGNO;
    const setIsVisible_lbImsiTPMGNO = setRawVisible_lbImsiTPMGNO;
    const isVisible_btnDeleteSettlement = rawVisible_btnDeleteSettlement;
    const setIsVisible_btnDeleteSettlement = setRawVisible_btnDeleteSettlement;
    const isVisible_btnPrintReRctPDF = rawVisible_btnPrintReRctPDF;
    const setIsVisible_btnPrintReRctPDF = setRawVisible_btnPrintReRctPDF;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox3;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_radAmountGubun = rawVisible_radAmountGubun && rawVisible_shpGubunBox3;
    const setIsVisible_radAmountGubun = setRawVisible_radAmountGubun;
    const isVisible_btnEstimate = rawVisible_btnEstimate;
    const setIsVisible_btnEstimate = setRawVisible_btnEstimate;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edEvalYN = rawVisible_edEvalYN && rawVisible_shpGubunBox1;
    const setIsVisible_edEvalYN = setRawVisible_edEvalYN;
    const isVisible_Shape0 = rawVisible_Shape0 && rawVisible_shpGubunBox3;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_btnScanSave = rawVisible_btnScanSave && rawVisible_Shape0;
    const setIsVisible_btnScanSave = setRawVisible_btnScanSave;
    const isVisible_btnLocalFormView = rawVisible_btnLocalFormView && rawVisible_Shape0;
    const setIsVisible_btnLocalFormView = setRawVisible_btnLocalFormView;
    const isVisible_edScanFileName = rawVisible_edScanFileName && rawVisible_Shape0;
    const setIsVisible_edScanFileName = setRawVisible_edScanFileName;
    const isVisible_btnScanSearch = rawVisible_btnScanSearch && rawVisible_Shape0;
    const setIsVisible_btnScanSearch = setRawVisible_btnScanSearch;
    const isVisible_btnScan = rawVisible_btnScan && rawVisible_Shape0;
    const setIsVisible_btnScan = setRawVisible_btnScan;
    const isVisible_btnSeverFormView = rawVisible_btnSeverFormView && rawVisible_Shape0;
    const setIsVisible_btnSeverFormView = setRawVisible_btnSeverFormView;
    const isVisible_edFormResult = rawVisible_edFormResult && rawVisible_Shape0;
    const setIsVisible_edFormResult = setRawVisible_edFormResult;
    const isVisible_cbxForm = rawVisible_cbxForm && rawVisible_Shape0;
    const setIsVisible_cbxForm = setRawVisible_cbxForm;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_fdImage2 = rawVisible_fdImage2;
    const setIsVisible_fdImage2 = setRawVisible_fdImage2;
    const isVisible_hfImage2 = rawVisible_hfImage2;
    const setIsVisible_hfImage2 = setRawVisible_hfImage2;
    const isVisible_fiImageFile2 = rawVisible_fiImageFile2;
    const setIsVisible_fiImageFile2 = setRawVisible_fiImageFile2;
    const isVisible_btnFormDelete = rawVisible_btnFormDelete;
    const setIsVisible_btnFormDelete = setRawVisible_btnFormDelete;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_medPersonKey = rawVisible_medPersonKey;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_btnAwaiter = rawVisible_btnAwaiter && rawVisible_shpGubunBox1;
    const setIsVisible_btnAwaiter = setRawVisible_btnAwaiter;
    const isVisible_btnPhotoScan = rawVisible_btnPhotoScan && rawVisible_shpGubunBox3;
    const setIsVisible_btnPhotoScan = setRawVisible_btnPhotoScan;
    const isVisible_lbSunapAmt = rawVisible_lbSunapAmt;
    const setIsVisible_lbSunapAmt = setRawVisible_lbSunapAmt;
    const isVisible_medSunapAmt = rawVisible_medSunapAmt;
    const setIsVisible_medSunapAmt = setRawVisible_medSunapAmt;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_shpGubunBox3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_medBookZipCode = rawVisible_medBookZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_medBookZipCode = setRawVisible_medBookZipCode;
    const isVisible_btnSearchZipCode2 = rawVisible_btnSearchZipCode2 && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchZipCode2 = setRawVisible_btnSearchZipCode2;
    const isVisible_edBookAddr1 = rawVisible_edBookAddr1 && rawVisible_shpGubunBox3;
    const setIsVisible_edBookAddr1 = setRawVisible_edBookAddr1;
    const isVisible_edBookAddr2 = rawVisible_edBookAddr2 && rawVisible_shpGubunBox3;
    const setIsVisible_edBookAddr2 = setRawVisible_edBookAddr2;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_shpGubunBox3;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_shpGubunBox3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_shpGubunBox3;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_edTaskSubmitGubun = rawVisible_edTaskSubmitGubun && rawVisible_shpGubunBox3;
    const setIsVisible_edTaskSubmitGubun = setRawVisible_edTaskSubmitGubun;
    const isVisible_edOnlineGubun = rawVisible_edOnlineGubun && rawVisible_shpGubunBox3;
    const setIsVisible_edOnlineGubun = setRawVisible_edOnlineGubun;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_shpGubunBox1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_shpGubunBox1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_shpGubunBox1;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_btnDownload = rawVisible_btnDownload && rawVisible_shpGubunBox3;
    const setIsVisible_btnDownload = setRawVisible_btnDownload;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile && rawVisible_shpGubunBox3;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile && rawVisible_shpGubunBox3;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_shpGubunBox3;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_radBookReturn = rawVisible_radBookReturn && rawVisible_shpGubunBox3;
    const setIsVisible_radBookReturn = setRawVisible_radBookReturn;
    const isVisible_edBookPrintYn = rawVisible_edBookPrintYn && rawVisible_shpGubunBox3;
    const setIsVisible_edBookPrintYn = setRawVisible_edBookPrintYn;
    const isVisible_btnTaskSave = rawVisible_btnTaskSave && rawVisible_shpGubunBox3;
    const setIsVisible_btnTaskSave = setRawVisible_btnTaskSave;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_divTask = rawVisible_divTask && rawVisible_shpGubunBox3;
    const setIsVisible_divTask = setRawVisible_divTask;
    const isVisible_radTaskGubun = rawVisible_radTaskGubun;
    const setIsVisible_radTaskGubun = setRawVisible_radTaskGubun;
    const isVisible_btnDivTaskSave = rawVisible_btnDivTaskSave;
    const setIsVisible_btnDivTaskSave = setRawVisible_btnDivTaskSave;
    const isVisible_lbTrainingInfo3 = rawVisible_lbTrainingInfo3 && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingInfo3 = setRawVisible_lbTrainingInfo3;
    const isVisible_edCARGUBUN = rawVisible_edCARGUBUN && rawVisible_shpGubunBox3;
    const setIsVisible_edCARGUBUN = setRawVisible_edCARGUBUN;
    const isVisible_edMANAGE_VRSC_AT = rawVisible_edMANAGE_VRSC_AT && rawVisible_shpGubunBox3;
    const setIsVisible_edMANAGE_VRSC_AT = setRawVisible_edMANAGE_VRSC_AT;
    const isVisible_edLTCCOURECD = rawVisible_edLTCCOURECD && rawVisible_shpGubunBox3;
    const setIsVisible_edLTCCOURECD = setRawVisible_edLTCCOURECD;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_edBookPrint = rawVisible_edBookPrint && rawVisible_shpGubunBox3;
    const setIsVisible_edBookPrint = setRawVisible_edBookPrint;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingJubsu([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oEmailDomain([]);
            setds_oImage([]);
            setds_oRemarkGubun([]);
            setds_oTrainingOrderMgno([]);
            setds_oJubsuNo([]);
            setds_oSeatNo([]);
            setds_oJubsuAllInfo([]);
            setds_oOrderHist([]);
            setds_oSetlmentHist([]);
            setds_ioMenuTree([]);
            setds_oModifyColumn([]);
            setds_oTrainingJubsuResult([]);
            setds_oTrainingJubsuPrint([]);
            setds_oTrainingOrder([]);
            setds_oPosResult([]);
            setds_oTrainingJubsuPrint1([]);
            setds_oTrainingJubsuPrint2([]);
            setds_oTrainingJubsuPrint3([]);
            setds_oTrainingCheck([]);
            setds_oJibuGubun([]);
            setds_oTrainingPearson([]);
            setds_oChangeTpmgno([]);
            setds_ioYearbizlink([]);
            setds_ioT_E_L_JubsuCheck([]);
            setds_ioTraing_JubsuCheck([]);
            setds_ioTraing_ReturnTpmgnoJubsuCheck([]);
            setds_ioTrainingPerson([]);
            setds_ioSettelYN([]);
            setds_oEducationNo([]);
            setds_ioControl([]);
            setds_ioTraingSeatNoCheck([]);
            setds_oSiteMember([]);
            setds_oCyberLearning([]);
            setds_oCyberPass([]);
            setds_oAddr([]);
            setds_oYN([]);
            setds_ioManager([]);
            setds_oMemberStatus([]);
            setds_oDeleteSettlement([]);
            setds_oAmountGubun([]);
            setds_oExamCheat([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_ioScicheck([]);
            setds_oTrainingJubsuPrint4([]);
            setds_oModifyTime([]);
            setds_oTaskList([]);
            setds_oBookReturn([]);
            setds_iTaskSave([]);
            setds_oTaskGubun([]);
            setds_oResult_check([]);
            setds_oSmsData([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAbsentManageLink_OnClick = () => {
        console.log('btnAbsentManageLink_OnClick clicked');
    };
    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnAwaiter_OnClick = () => {
        console.log('btnAwaiter_OnClick clicked');
    };
    const btnBarCodeSearch_OnClick = () => {
        console.log('btnBarCodeSearch_OnClick clicked');
    };
    const btnChangeProcDate_OnClick = () => {
        console.log('btnChangeProcDate_OnClick clicked');
    };
    const btnCyberInfo_OnClick = () => {
        console.log('btnCyberInfo_OnClick clicked');
    };
    const btnDeleteSettlement_OnClick = () => {
        console.log('btnDeleteSettlement_OnClick clicked');
    };
    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnEmailStat_OnClick = () => {
        console.log('btnEmailStat_OnClick clicked');
    };
    const btnEstimate_OnClick = () => {
        console.log('btnEstimate_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnJubsuHistory_OnClick = () => {
        console.log('btnJubsuHistory_OnClick clicked');
    };
    const btnLicenseList_OnClick = () => {
        console.log('btnLicenseList_OnClick clicked');
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
    const btnModifyHistory_OnClick = () => {
        console.log('btnModifyHistory_OnClick clicked');
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
    const btnPrintEstimate_OnClick = () => {
        console.log('btnPrintEstimate_OnClick clicked');
    };
    const btnPrintJubsuResult_OnClick = () => {
        console.log('btnPrintJubsuResult_OnClick clicked');
    };
    const btnPrintJubsu_OnClick = () => {
        console.log('btnPrintJubsu_OnClick clicked');
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
    const btnSearchPersonInfoChange_OnClick = () => {
        console.log('btnSearchPersonInfoChange_OnClick clicked');
    };
    const btnSearchPersonInfo_OnClick = () => {
        console.log('btnSearchPersonInfo_OnClick clicked');
    };
    const btnSearchRegPicture_OnClick = () => {
        console.log('btnSearchRegPicture_OnClick clicked');
    };
    const btnSearchTrainingOrder_OnClick = () => {
        console.log('btnSearchTrainingOrder_OnClick clicked');
    };
    const btnSearchZipCode2_OnClick = () => {
        console.log('btnSearchZipCode2_OnClick clicked');
    };
    const btnSearchZipCode_OnClick = () => {
        console.log('btnSearchZipCode_OnClick clicked');
    };
    const btnSeatList_OnClick = () => {
        console.log('btnSeatList_OnClick clicked');
    };
    const btnSendEmail_OnClick = () => {
        console.log('btnSendEmail_OnClick clicked');
    };
    const btnSendSms_OnClick = () => {
        console.log('btnSendSms_OnClick clicked');
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
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const btnSmsStat_OnClick = () => {
        console.log('btnSmsStat_OnClick clicked');
    };
    const btnTaskSave_OnClick = () => {
        console.log('btnTaskSave_OnClick clicked');
    };
    const btnTraingJubsuHist_OnClick = () => {
        console.log('btnTraingJubsuHist_OnClick clicked');
    };
    const btnTraingJubsuInfo_OnClick = () => {
        console.log('btnTraingJubsuInfo_OnClick clicked');
    };
    const btnTrainingJubsuModify_OnClick = () => {
        console.log('btnTrainingJubsuModify_OnClick clicked');
    };
    const btnUnSeatList_OnClick = () => {
        console.log('btnUnSeatList_OnClick clicked');
    };
    const divTask_btnDivTaskSave_OnClick = () => {
        console.log('divTask_btnDivTaskSave_OnClick clicked');
    };
    const edBookPrint_OnClick = () => {
        console.log('edBookPrint_OnClick clicked');
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
    const lfn_SearchUnUseJubsuNo = () => {
        console.log('lfn_SearchUnUseJubsuNo clicked');
    };

    return {
        isLoading,
        ds_ioTrainingJubsu,
        ds_oJibu,
        ds_oCourse,
        ds_oEmailDomain,
        ds_oImage,
        ds_oRemarkGubun,
        ds_oTrainingOrderMgno,
        ds_oJubsuNo,
        ds_oSeatNo,
        ds_oJubsuAllInfo,
        ds_oOrderHist,
        ds_oSetlmentHist,
        ds_ioMenuTree,
        ds_oModifyColumn,
        ds_oTrainingJubsuResult,
        ds_oTrainingJubsuPrint,
        ds_oTrainingOrder,
        ds_oPosResult,
        ds_oTrainingJubsuPrint1,
        ds_oTrainingJubsuPrint2,
        ds_oTrainingJubsuPrint3,
        ds_oTrainingCheck,
        ds_oJibuGubun,
        ds_oTrainingPearson,
        ds_oChangeTpmgno,
        ds_ioYearbizlink,
        ds_ioT_E_L_JubsuCheck,
        ds_ioTraing_JubsuCheck,
        ds_ioTraing_ReturnTpmgnoJubsuCheck,
        ds_ioTrainingPerson,
        ds_ioSettelYN,
        ds_oEducationNo,
        ds_ioControl,
        ds_ioTraingSeatNoCheck,
        ds_oSiteMember,
        ds_oCyberLearning,
        ds_oCyberPass,
        ds_oAddr,
        ds_oYN,
        ds_ioManager,
        ds_oMemberStatus,
        ds_oDeleteSettlement,
        ds_oAmountGubun,
        ds_oExamCheat,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_ioScicheck,
        ds_oTrainingJubsuPrint4,
        ds_oModifyTime,
        ds_oTaskList,
        ds_oBookReturn,
        ds_iTaskSave,
        ds_oTaskGubun,
        ds_oResult_check,
        ds_oSmsData,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_btnApplyPicture,
        setIsVisible_btnApplyPicture,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_gdSetlmentHist,
        setIsVisible_gdSetlmentHist,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
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
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbTrainingYear,
        setIsVisible_lbTrainingYear,
        isVisible_edTrainingYear,
        setIsVisible_edTrainingYear,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edTrainingOrder,
        setIsVisible_edTrainingOrder,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_lbCompNm,
        setIsVisible_lbCompNm,
        isVisible_edCompNm,
        setIsVisible_edCompNm,
        isVisible_lbAt,
        setIsVisible_lbAt,
        isVisible_btnSearchPersonInfo,
        setIsVisible_btnSearchPersonInfo,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_edJubsuNo,
        setIsVisible_edJubsuNo,
        isVisible_lbSeq,
        setIsVisible_lbSeq,
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
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_cbxEmailDomain,
        setIsVisible_cbxEmailDomain,
        isVisible_lbEmail,
        setIsVisible_lbEmail,
        isVisible_edEmail,
        setIsVisible_edEmail,
        isVisible_btnAuthResidentNo,
        setIsVisible_btnAuthResidentNo,
        isVisible_edPassYn,
        setIsVisible_edPassYn,
        isVisible_lbPassYn,
        setIsVisible_lbPassYn,
        isVisible_edAbsentYn,
        setIsVisible_edAbsentYn,
        isVisible_lbAbsentYn,
        setIsVisible_lbAbsentYn,
        isVisible_btnAbsentManageLink,
        setIsVisible_btnAbsentManageLink,
        isVisible_btnTrainingJubsuModify,
        setIsVisible_btnTrainingJubsuModify,
        isVisible_gdJubsuInfo,
        setIsVisible_gdJubsuInfo,
        isVisible_lbJubsuInfo,
        setIsVisible_lbJubsuInfo,
        isVisible_gdOrderHist,
        setIsVisible_gdOrderHist,
        isVisible_lbJubsuHist,
        setIsVisible_lbJubsuHist,
        isVisible_lbSetlmt,
        setIsVisible_lbSetlmt,
        isVisible_edEmailDomain,
        setIsVisible_edEmailDomain,
        isVisible_btnSeqList,
        setIsVisible_btnSeqList,
        isVisible_btnSearchTrainingOrder,
        setIsVisible_btnSearchTrainingOrder,
        isVisible_fdImage,
        setIsVisible_fdImage,
        isVisible_hfImage,
        setIsVisible_hfImage,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_btnTraingJubsuHist,
        setIsVisible_btnTraingJubsuHist,
        isVisible_cbxRemarkGubun,
        setIsVisible_cbxRemarkGubun,
        isVisible_btnChangeProcDate,
        setIsVisible_btnChangeProcDate,
        isVisible_btnProcRct,
        setIsVisible_btnProcRct,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_btnSendSms,
        setIsVisible_btnSendSms,
        isVisible_btnPrintJubsu,
        setIsVisible_btnPrintJubsu,
        isVisible_btnSendEmail,
        setIsVisible_btnSendEmail,
        isVisible_lbSeatNo,
        setIsVisible_lbSeatNo,
        isVisible_edSeatNo,
        setIsVisible_edSeatNo,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
        isVisible_btnSeatList,
        setIsVisible_btnSeatList,
        isVisible_lbOrderChange,
        setIsVisible_lbOrderChange,
        isVisible_shpBox1,
        setIsVisible_shpBox1,
        isVisible_shpBox2,
        setIsVisible_shpBox2,
        isVisible_btnSmsStat,
        setIsVisible_btnSmsStat,
        isVisible_btnEmailStat,
        setIsVisible_btnEmailStat,
        isVisible_lbTrainingInfo,
        setIsVisible_lbTrainingInfo,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_imgLastestPicture,
        setIsVisible_imgLastestPicture,
        isVisible_btnSearchRegPicture,
        setIsVisible_btnSearchRegPicture,
        isVisible_lbTrainingPersonInfo,
        setIsVisible_lbTrainingPersonInfo,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_btnBarCodeSearch,
        setIsVisible_btnBarCodeSearch,
        isVisible_shpBox3,
        setIsVisible_shpBox3,
        isVisible_lbTrainingInfo2,
        setIsVisible_lbTrainingInfo2,
        isVisible_btnUnUseJubsuNo,
        setIsVisible_btnUnUseJubsuNo,
        isVisible_btnLoadPicture,
        setIsVisible_btnLoadPicture,
        isVisible_btnLoadScanPicture,
        setIsVisible_btnLoadScanPicture,
        isVisible_btnScanPicture,
        setIsVisible_btnScanPicture,
        isVisible_btnPictureManagement,
        setIsVisible_btnPictureManagement,
        isVisible_btnShowVirtualAccount,
        setIsVisible_btnShowVirtualAccount,
        isVisible_btnModifyHistory,
        setIsVisible_btnModifyHistory,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_fiImageFile,
        setIsVisible_fiImageFile,
        isVisible_btnPosResultList,
        setIsVisible_btnPosResultList,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnPrintJubsuResult,
        setIsVisible_btnPrintJubsuResult,
        isVisible_radJibuGubun,
        setIsVisible_radJibuGubun,
        isVisible_btnLicenseList,
        setIsVisible_btnLicenseList,
        isVisible_radChangeTpmgno,
        setIsVisible_radChangeTpmgno,
        isVisible_btnJubsuHistory,
        setIsVisible_btnJubsuHistory,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnPosvath,
        setIsVisible_btnPosvath,
        isVisible_btnUnSeatList,
        setIsVisible_btnUnSeatList,
        isVisible_btnTraingJubsuinfo,
        setIsVisible_btnTraingJubsuinfo,
        isVisible_btnPosReport,
        setIsVisible_btnPosReport,
        isVisible_btnCyberInfo,
        setIsVisible_btnCyberInfo,
        isVisible_lbTrainingInfo1,
        setIsVisible_lbTrainingInfo1,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radMemAgreeYN,
        setIsVisible_radMemAgreeYN,
        isVisible_edImsiTJMGNO,
        setIsVisible_edImsiTJMGNO,
        isVisible_edImsiTPMGNO,
        setIsVisible_edImsiTPMGNO,
        isVisible_lbImsiTJMGNO,
        setIsVisible_lbImsiTJMGNO,
        isVisible_lbImsiTPMGNO,
        setIsVisible_lbImsiTPMGNO,
        isVisible_btnDeleteSettlement,
        setIsVisible_btnDeleteSettlement,
        isVisible_btnPrintReRctPDF,
        setIsVisible_btnPrintReRctPDF,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_radAmountGubun,
        setIsVisible_radAmountGubun,
        isVisible_btnEstimate,
        setIsVisible_btnEstimate,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edEvalYN,
        setIsVisible_edEvalYN,
        isVisible_Shape0,
        setIsVisible_Shape0,
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
        isVisible_fdImage2,
        setIsVisible_fdImage2,
        isVisible_hfImage2,
        setIsVisible_hfImage2,
        isVisible_fiImageFile2,
        setIsVisible_fiImageFile2,
        isVisible_btnFormDelete,
        setIsVisible_btnFormDelete,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_btnAwaiter,
        setIsVisible_btnAwaiter,
        isVisible_btnPhotoScan,
        setIsVisible_btnPhotoScan,
        isVisible_lbSunapAmt,
        setIsVisible_lbSunapAmt,
        isVisible_medSunapAmt,
        setIsVisible_medSunapAmt,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_medBookZipCode,
        setIsVisible_medBookZipCode,
        isVisible_btnSearchZipCode2,
        setIsVisible_btnSearchZipCode2,
        isVisible_edBookAddr1,
        setIsVisible_edBookAddr1,
        isVisible_edBookAddr2,
        setIsVisible_edBookAddr2,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_edTaskSubmitGubun,
        setIsVisible_edTaskSubmitGubun,
        isVisible_edOnlineGubun,
        setIsVisible_edOnlineGubun,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_btnDownload,
        setIsVisible_btnDownload,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_radBookReturn,
        setIsVisible_radBookReturn,
        isVisible_edBookPrintYn,
        setIsVisible_edBookPrintYn,
        isVisible_btnTaskSave,
        setIsVisible_btnTaskSave,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_divTask,
        setIsVisible_divTask,
        isVisible_radTaskGubun,
        setIsVisible_radTaskGubun,
        isVisible_btnDivTaskSave,
        setIsVisible_btnDivTaskSave,
        isVisible_lbTrainingInfo3,
        setIsVisible_lbTrainingInfo3,
        isVisible_edCARGUBUN,
        setIsVisible_edCARGUBUN,
        isVisible_edMANAGE_VRSC_AT,
        setIsVisible_edMANAGE_VRSC_AT,
        isVisible_edLTCCOURECD,
        setIsVisible_edLTCCOURECD,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_edBookPrint,
        setIsVisible_edBookPrint,
        btnAbsentManageLink_OnClick,
        btnApplyPicture_OnClick,
        btnAuthResidentNo_OnClick,
        btnAwaiter_OnClick,
        btnBarCodeSearch_OnClick,
        btnChangeProcDate_OnClick,
        btnCyberInfo_OnClick,
        btnDeleteSettlement_OnClick,
        btnDownload_OnClick,
        btnEmailStat_OnClick,
        btnEstimate_OnClick,
        btnFormDelete_OnClick,
        btnJubsuHistory_OnClick,
        btnLicenseList_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnLocalFormView_OnClick,
        btnModifyHistory_OnClick,
        btnPhotoScan_OnClick,
        btnPictureManagement_OnClick,
        btnPosReport_OnClick,
        btnPosResultList_OnClick,
        btnPrintEstimate_OnClick,
        btnPrintJubsuResult_OnClick,
        btnPrintJubsu_OnClick,
        btnPrintReRctPDF_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnScanPicture_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSearchPersonInfoChange_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchTrainingOrder_OnClick,
        btnSearchZipCode2_OnClick,
        btnSearchZipCode_OnClick,
        btnSeatList_OnClick,
        btnSendEmail_OnClick,
        btnSendSms_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
        btnSeverFormView_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSmsStat_OnClick,
        btnTaskSave_OnClick,
        btnTraingJubsuHist_OnClick,
        btnTraingJubsuInfo_OnClick,
        btnTrainingJubsuModify_OnClick,
        btnUnSeatList_OnClick,
        divTask_btnDivTaskSave_OnClick,
        edBookPrint_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_SearchUnUseJubsuNo,
    };
};