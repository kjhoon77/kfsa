// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioEduJubsu, Ids_oJibu, Ids_oCourse, Ids_oEmailDomain, Ids_oEduOrderMgno, Ids_oJubsuNo, Ids_oJubsuAllInfo, Ids_oOrderHist, Ids_ioCustomerFeeInfo, Ids_ioMenuTree, Ids_oModifyColumn, Ids_oEduJubsuResult, Ids_oEduReport, Ids_oEduOrder, Ids_oPosResult, Ids_oEduCheck, Ids_oJibuGubun, Ids_oTrainingPearson, Ids_oChangeTpmgno, Ids_ioYearbizlink, Ids_ioT_E_L_JubsuCheck, Ids_ioEduJubsuCheck, Ids_ioTraing_ReturnTpmgnoJubsuCheck, Ids_ioTrainingPerson, Ids_ioSettelYN, Ids_oEducationNo, Ids_ioControl, Ids_ioTraingSeatNoCheck, Ids_oSiteMember, Ids_oAddr, Ids_oYN, Ids_ioManager, Ids_oMemberStatus, Ids_oDeleteCustomerFee, Ids_oCustJibu, Ids_oDetailCourse, Ids_oSunap, Ids_iReady, Ids_oFee, Ids_oFeeMonth, Ids_iCustomerFee, Ids_ioVirtualAccoutAllocation, Ids_oJubsuAlreadyInfo, Ids_oForm, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete, Ids_oBookReturn, Ids_oEduIssue, Ids_ioExcel, Ids_ioExcelCopy, Ids_oEduJubsuCheck_Cyber, Ids_ioEduJubsuCheck_Cyber, Ids_oSmsData, Ids_oCaggubunCheck } from './Frmcust1025MEduJubsuManagementData';

export const useFrmcust1025MEduJubsuManagement = () => {
    const [ds_ioEduJubsu, setds_ioEduJubsu] = useState<Ids_ioEduJubsu[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oEduOrderMgno, setds_oEduOrderMgno] = useState<Ids_oEduOrderMgno[]>([]);
    const [ds_oJubsuNo, setds_oJubsuNo] = useState<Ids_oJubsuNo[]>([]);
    const [ds_oJubsuAllInfo, setds_oJubsuAllInfo] = useState<Ids_oJubsuAllInfo[]>([]);
    const [ds_oOrderHist, setds_oOrderHist] = useState<Ids_oOrderHist[]>([]);
    const [ds_ioCustomerFeeInfo, setds_ioCustomerFeeInfo] = useState<Ids_ioCustomerFeeInfo[]>([]);
    const [ds_ioMenuTree, setds_ioMenuTree] = useState<Ids_ioMenuTree[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_oEduJubsuResult, setds_oEduJubsuResult] = useState<Ids_oEduJubsuResult[]>([]);
    const [ds_oEduReport, setds_oEduReport] = useState<Ids_oEduReport[]>([]);
    const [ds_oEduOrder, setds_oEduOrder] = useState<Ids_oEduOrder[]>([]);
    const [ds_oPosResult, setds_oPosResult] = useState<Ids_oPosResult[]>([]);
    const [ds_oEduCheck, setds_oEduCheck] = useState<Ids_oEduCheck[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_oTrainingPearson, setds_oTrainingPearson] = useState<Ids_oTrainingPearson[]>([]);
    const [ds_oChangeTpmgno, setds_oChangeTpmgno] = useState<Ids_oChangeTpmgno[]>([]);
    const [ds_ioYearbizlink, setds_ioYearbizlink] = useState<Ids_ioYearbizlink[]>([]);
    const [ds_ioT_E_L_JubsuCheck, setds_ioT_E_L_JubsuCheck] = useState<Ids_ioT_E_L_JubsuCheck[]>([]);
    const [ds_ioEduJubsuCheck, setds_ioEduJubsuCheck] = useState<Ids_ioEduJubsuCheck[]>([]);
    const [ds_ioTraing_ReturnTpmgnoJubsuCheck, setds_ioTraing_ReturnTpmgnoJubsuCheck] = useState<Ids_ioTraing_ReturnTpmgnoJubsuCheck[]>([]);
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [ds_ioSettelYN, setds_ioSettelYN] = useState<Ids_ioSettelYN[]>([]);
    const [ds_oEducationNo, setds_oEducationNo] = useState<Ids_oEducationNo[]>([]);
    const [ds_ioControl, setds_ioControl] = useState<Ids_ioControl[]>([]);
    const [ds_ioTraingSeatNoCheck, setds_ioTraingSeatNoCheck] = useState<Ids_ioTraingSeatNoCheck[]>([]);
    const [ds_oSiteMember, setds_oSiteMember] = useState<Ids_oSiteMember[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_oYN, setds_oYN] = useState<Ids_oYN[]>([]);
    const [ds_ioManager, setds_ioManager] = useState<Ids_ioManager[]>([]);
    const [ds_oMemberStatus, setds_oMemberStatus] = useState<Ids_oMemberStatus[]>([]);
    const [ds_oDeleteCustomerFee, setds_oDeleteCustomerFee] = useState<Ids_oDeleteCustomerFee[]>([]);
    const [ds_oCustJibu, setds_oCustJibu] = useState<Ids_oCustJibu[]>([]);
    const [ds_oDetailCourse, setds_oDetailCourse] = useState<Ids_oDetailCourse[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_iReady, setds_iReady] = useState<Ids_iReady[]>([]);
    const [ds_oFee, setds_oFee] = useState<Ids_oFee[]>([]);
    const [ds_oFeeMonth, setds_oFeeMonth] = useState<Ids_oFeeMonth[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_oJubsuAlreadyInfo, setds_oJubsuAlreadyInfo] = useState<Ids_oJubsuAlreadyInfo[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_oBookReturn, setds_oBookReturn] = useState<Ids_oBookReturn[]>([]);
    const [ds_oEduIssue, setds_oEduIssue] = useState<Ids_oEduIssue[]>([]);
    const [ds_ioExcel, setds_ioExcel] = useState<Ids_ioExcel[]>([]);
    const [ds_ioExcelCopy, setds_ioExcelCopy] = useState<Ids_ioExcelCopy[]>([]);
    const [ds_oEduJubsuCheck_Cyber, setds_oEduJubsuCheck_Cyber] = useState<Ids_oEduJubsuCheck_Cyber[]>([]);
    const [ds_ioEduJubsuCheck_Cyber, setds_ioEduJubsuCheck_Cyber] = useState<Ids_ioEduJubsuCheck_Cyber[]>([]);
    const [ds_oSmsData, setds_oSmsData] = useState<Ids_oSmsData[]>([]);
    const [ds_oCaggubunCheck, setds_oCaggubunCheck] = useState<Ids_oCaggubunCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbTrainingYear, setRawVisible_lbTrainingYear] = useState(true);
    const [rawVisible_edEduYear, setRawVisible_edEduYear] = useState(true);
    const [rawVisible_lbTrainingOrder, setRawVisible_lbTrainingOrder] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edEduOrder, setRawVisible_edEduOrder] = useState(true);
    const [rawVisible_lbBirthday, setRawVisible_lbBirthday] = useState(true);
    const [rawVisible_lbAt, setRawVisible_lbAt] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_edJubsuNo, setRawVisible_edJubsuNo] = useState(true);
    const [rawVisible_lbSeq, setRawVisible_lbSeq] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_cbxEmailDomain, setRawVisible_cbxEmailDomain] = useState(true);
    const [rawVisible_lbEmail, setRawVisible_lbEmail] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_edPassYn, setRawVisible_edPassYn] = useState(true);
    const [rawVisible_lbPassYn, setRawVisible_lbPassYn] = useState(true);
    const [rawVisible_edAbsentYn, setRawVisible_edAbsentYn] = useState(true);
    const [rawVisible_lbAbsentYn, setRawVisible_lbAbsentYn] = useState(true);
    const [rawVisible_btnAbsentManageLink, setRawVisible_btnAbsentManageLink] = useState(false);
    const [rawVisible_btnEduJubsuModify, setRawVisible_btnEduJubsuModify] = useState(true);
    const [rawVisible_gdJubsuInfo, setRawVisible_gdJubsuInfo] = useState(true);
    const [rawVisible_lbJubsuInfo, setRawVisible_lbJubsuInfo] = useState(true);
    const [rawVisible_gdOrderHist, setRawVisible_gdOrderHist] = useState(true);
    const [rawVisible_lbJubsuHist, setRawVisible_lbJubsuHist] = useState(true);
    const [rawVisible_lbSetlmt, setRawVisible_lbSetlmt] = useState(true);
    const [rawVisible_edEmailDomain, setRawVisible_edEmailDomain] = useState(true);
    const [rawVisible_btnSeqList, setRawVisible_btnSeqList] = useState(true);
    const [rawVisible_btnSearchEduOrder, setRawVisible_btnSearchEduOrder] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_btnSendSms, setRawVisible_btnSendSms] = useState(true);
    const [rawVisible_btnPrintJubsu, setRawVisible_btnPrintJubsu] = useState(true);
    const [rawVisible_lbOrderChange, setRawVisible_lbOrderChange] = useState(true);
    const [rawVisible_shpBox1, setRawVisible_shpBox1] = useState(true);
    const [rawVisible_shpBox2, setRawVisible_shpBox2] = useState(true);
    const [rawVisible_lbTrainingInfo, setRawVisible_lbTrainingInfo] = useState(true);
    const [rawVisible_lbTrainingPersonInfo, setRawVisible_lbTrainingPersonInfo] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_lbEduInfo2, setRawVisible_lbEduInfo2] = useState(true);
    const [rawVisible_btnUnUseJubsuNo, setRawVisible_btnUnUseJubsuNo] = useState(true);
    const [rawVisible_btnModifyHistory, setRawVisible_btnModifyHistory] = useState(true);
    const [rawVisible_radJibuGubun, setRawVisible_radJibuGubun] = useState(true);
    const [rawVisible_btnJubsuHistory, setRawVisible_btnJubsuHistory] = useState(true);
    const [rawVisible_btnSearchPersonInfoChange, setRawVisible_btnSearchPersonInfoChange] = useState(false);
    const [rawVisible_btnEduJubsuinfo, setRawVisible_btnEduJubsuinfo] = useState(false);
    const [rawVisible_lbEduInfo1, setRawVisible_lbEduInfo1] = useState(true);
    const [rawVisible_cbxAddrGubun, setRawVisible_cbxAddrGubun] = useState(false);
    const [rawVisible_edImsiEJMGNO, setRawVisible_edImsiEJMGNO] = useState(true);
    const [rawVisible_lbImsiEJMGNO, setRawVisible_lbImsiEJMGNO] = useState(true);
    const [rawVisible_btnDeleteSettlement, setRawVisible_btnDeleteSettlement] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_lbDetailCourse, setRawVisible_lbDetailCourse] = useState(true);
    const [rawVisible_cbxDetailCourse, setRawVisible_cbxDetailCourse] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_cbxCustJibu, setRawVisible_cbxCustJibu] = useState(true);
    const [rawVisible_lbCustNo, setRawVisible_lbCustNo] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_lbBarCode, setRawVisible_lbBarCode] = useState(true);
    const [rawVisible_medBarCode, setRawVisible_medBarCode] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_edChangeCnt, setRawVisible_edChangeCnt] = useState(true);
    const [rawVisible_radChangeTpmgno, setRawVisible_radChangeTpmgno] = useState(false);
    const [rawVisible_btnCustNo, setRawVisible_btnCustNo] = useState(true);
    const [rawVisible_btnCmgno, setRawVisible_btnCmgno] = useState(true);
    const [rawVisible_btnNm, setRawVisible_btnNm] = useState(true);
    const [rawVisible_btnBnm, setRawVisible_btnBnm] = useState(true);
    const [rawVisible_gdMemFee, setRawVisible_gdMemFee] = useState(true);
    const [rawVisible_lbTotMinapFee, setRawVisible_lbTotMinapFee] = useState(true);
    const [rawVisible_medTotMinapFee, setRawVisible_medTotMinapFee] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_btnJubsuNo, setRawVisible_btnJubsuNo] = useState(true);
    const [rawVisible_gdSunap, setRawVisible_gdSunap] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_gdReady, setRawVisible_gdReady] = useState(false);
    const [rawVisible_lbInputStatus, setRawVisible_lbInputStatus] = useState(true);
    const [rawVisible_lbJubsuStatus, setRawVisible_lbJubsuStatus] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_edExistNM, setRawVisible_edExistNM] = useState(true);
    const [rawVisible_btnExistNM, setRawVisible_btnExistNM] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_cbxExistJibu, setRawVisible_cbxExistJibu] = useState(true);
    const [rawVisible_medExistCustNo, setRawVisible_medExistCustNo] = useState(true);
    const [rawVisible_btnExistCustNo, setRawVisible_btnExistCustNo] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_btnExistBnm, setRawVisible_btnExistBnm] = useState(true);
    const [rawVisible_edExistBnm, setRawVisible_edExistBnm] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(false);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_btnShowVirtualAccount, setRawVisible_btnShowVirtualAccount] = useState(true);
    const [rawVisible_lbEduExpireDate, setRawVisible_lbEduExpireDate] = useState(false);
    const [rawVisible_calEduExpireDate, setRawVisible_calEduExpireDate] = useState(false);
    const [rawVisible_btnSmsStat, setRawVisible_btnSmsStat] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_btnScanSave, setRawVisible_btnScanSave] = useState(true);
    const [rawVisible_btnLocalFormView, setRawVisible_btnLocalFormView] = useState(true);
    const [rawVisible_edScanFileName, setRawVisible_edScanFileName] = useState(true);
    const [rawVisible_btnScanSearch, setRawVisible_btnScanSearch] = useState(true);
    const [rawVisible_btnScan, setRawVisible_btnScan] = useState(true);
    const [rawVisible_btnSeverFormView, setRawVisible_btnSeverFormView] = useState(true);
    const [rawVisible_edFormResult, setRawVisible_edFormResult] = useState(true);
    const [rawVisible_cbxForm, setRawVisible_cbxForm] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_btnFormDelete, setRawVisible_btnFormDelete] = useState(false);
    const [rawVisible_fdImage2, setRawVisible_fdImage2] = useState(true);
    const [rawVisible_fiImageFile2, setRawVisible_fiImageFile2] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_medPersonKey, setRawVisible_medPersonKey] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(false);
    const [rawVisible_edCyberPassYn, setRawVisible_edCyberPassYn] = useState(true);
    const [rawVisible_edFieldPassYn, setRawVisible_edFieldPassYn] = useState(false);
    const [rawVisible_btnCyberInfo, setRawVisible_btnCyberInfo] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_edPDI, setRawVisible_edPDI] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_lbOverMinapFee, setRawVisible_lbOverMinapFee] = useState(true);
    const [rawVisible_edOverMinapFee, setRawVisible_edOverMinapFee] = useState(true);
    const [rawVisible_calEduExpireDate1yearold, setRawVisible_calEduExpireDate1yearold] = useState(false);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_btnPrintReRctPDF, setRawVisible_btnPrintReRctPDF] = useState(true);
    const [rawVisible_medBookZipCode, setRawVisible_medBookZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode2, setRawVisible_btnSearchZipCode2] = useState(true);
    const [rawVisible_edBookAddr1, setRawVisible_edBookAddr1] = useState(true);
    const [rawVisible_edBookAddr2, setRawVisible_edBookAddr2] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_edBookPrintYn, setRawVisible_edBookPrintYn] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_radBookReturn, setRawVisible_radBookReturn] = useState(true);
    const [rawVisible_Static19, setRawVisible_Static19] = useState(true);
    const [rawVisible_btnBAddrSame, setRawVisible_btnBAddrSame] = useState(true);
    const [rawVisible_btnIssue, setRawVisible_btnIssue] = useState(false);
    const [rawVisible_hfImage2, setRawVisible_hfImage2] = useState(true);
    const [rawVisible_btnAutologinSms, setRawVisible_btnAutologinSms] = useState(true);
    const [rawVisible_btn_ExcelUpload, setRawVisible_btn_ExcelUpload] = useState(false);
    const [rawVisible_gdExcel, setRawVisible_gdExcel] = useState(false);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_edCyberGubun, setRawVisible_edCyberGubun] = useState(false);
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
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
    const isVisible_edEduYear = rawVisible_edEduYear && rawVisible_shpGubunBox1;
    const setIsVisible_edEduYear = setRawVisible_edEduYear;
    const isVisible_lbTrainingOrder = rawVisible_lbTrainingOrder && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingOrder = setRawVisible_lbTrainingOrder;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edEduOrder = rawVisible_edEduOrder && rawVisible_shpGubunBox1;
    const setIsVisible_edEduOrder = setRawVisible_edEduOrder;
    const isVisible_lbBirthday = rawVisible_lbBirthday && rawVisible_shpGubunBox3;
    const setIsVisible_lbBirthday = setRawVisible_lbBirthday;
    const isVisible_lbAt = rawVisible_lbAt && rawVisible_shpGubunBox3;
    const setIsVisible_lbAt = setRawVisible_lbAt;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_edJubsuNo = rawVisible_edJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_edJubsuNo = setRawVisible_edJubsuNo;
    const isVisible_lbSeq = rawVisible_lbSeq && rawVisible_shpGubunBox1;
    const setIsVisible_lbSeq = setRawVisible_lbSeq;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox2;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox2;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox2;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox2;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_shpGubunBox3;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_cbxEmailDomain = rawVisible_cbxEmailDomain && rawVisible_shpGubunBox3;
    const setIsVisible_cbxEmailDomain = setRawVisible_cbxEmailDomain;
    const isVisible_lbEmail = rawVisible_lbEmail && rawVisible_shpGubunBox3;
    const setIsVisible_lbEmail = setRawVisible_lbEmail;
    const isVisible_edEmail = rawVisible_edEmail && rawVisible_shpGubunBox3;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_edPassYn = rawVisible_edPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_edPassYn = setRawVisible_edPassYn;
    const isVisible_lbPassYn = rawVisible_lbPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_lbPassYn = setRawVisible_lbPassYn;
    const isVisible_edAbsentYn = rawVisible_edAbsentYn && rawVisible_shpGubunBox1;
    const setIsVisible_edAbsentYn = setRawVisible_edAbsentYn;
    const isVisible_lbAbsentYn = rawVisible_lbAbsentYn && rawVisible_shpGubunBox1;
    const setIsVisible_lbAbsentYn = setRawVisible_lbAbsentYn;
    const isVisible_btnAbsentManageLink = rawVisible_btnAbsentManageLink;
    const setIsVisible_btnAbsentManageLink = setRawVisible_btnAbsentManageLink;
    const isVisible_btnEduJubsuModify = rawVisible_btnEduJubsuModify && rawVisible_shpGubunBox1;
    const setIsVisible_btnEduJubsuModify = setRawVisible_btnEduJubsuModify;
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
    const isVisible_btnSearchEduOrder = rawVisible_btnSearchEduOrder && rawVisible_shpGubunBox1;
    const setIsVisible_btnSearchEduOrder = setRawVisible_btnSearchEduOrder;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox3;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox3;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_shpGubunBox1;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_btnSendSms = rawVisible_btnSendSms && rawVisible_shpGubunBox3;
    const setIsVisible_btnSendSms = setRawVisible_btnSendSms;
    const isVisible_btnPrintJubsu = rawVisible_btnPrintJubsu && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintJubsu = setRawVisible_btnPrintJubsu;
    const isVisible_lbOrderChange = rawVisible_lbOrderChange && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderChange = setRawVisible_lbOrderChange;
    const isVisible_shpBox1 = rawVisible_shpBox1;
    const setIsVisible_shpBox1 = setRawVisible_shpBox1;
    const isVisible_shpBox2 = rawVisible_shpBox2;
    const setIsVisible_shpBox2 = setRawVisible_shpBox2;
    const isVisible_lbTrainingInfo = rawVisible_lbTrainingInfo && rawVisible_shpGubunBox1;
    const setIsVisible_lbTrainingInfo = setRawVisible_lbTrainingInfo;
    const isVisible_lbTrainingPersonInfo = rawVisible_lbTrainingPersonInfo;
    const setIsVisible_lbTrainingPersonInfo = setRawVisible_lbTrainingPersonInfo;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_lbEduInfo2 = rawVisible_lbEduInfo2 && rawVisible_shpGubunBox1;
    const setIsVisible_lbEduInfo2 = setRawVisible_lbEduInfo2;
    const isVisible_btnUnUseJubsuNo = rawVisible_btnUnUseJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_btnUnUseJubsuNo = setRawVisible_btnUnUseJubsuNo;
    const isVisible_btnModifyHistory = rawVisible_btnModifyHistory && rawVisible_shpGubunBox1;
    const setIsVisible_btnModifyHistory = setRawVisible_btnModifyHistory;
    const isVisible_radJibuGubun = rawVisible_radJibuGubun;
    const setIsVisible_radJibuGubun = setRawVisible_radJibuGubun;
    const isVisible_btnJubsuHistory = rawVisible_btnJubsuHistory && rawVisible_shpGubunBox1;
    const setIsVisible_btnJubsuHistory = setRawVisible_btnJubsuHistory;
    const isVisible_btnSearchPersonInfoChange = rawVisible_btnSearchPersonInfoChange && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchPersonInfoChange = setRawVisible_btnSearchPersonInfoChange;
    const isVisible_btnEduJubsuinfo = rawVisible_btnEduJubsuinfo;
    const setIsVisible_btnEduJubsuinfo = setRawVisible_btnEduJubsuinfo;
    const isVisible_lbEduInfo1 = rawVisible_lbEduInfo1 && rawVisible_shpGubunBox1;
    const setIsVisible_lbEduInfo1 = setRawVisible_lbEduInfo1;
    const isVisible_cbxAddrGubun = rawVisible_cbxAddrGubun && rawVisible_shpGubunBox2;
    const setIsVisible_cbxAddrGubun = setRawVisible_cbxAddrGubun;
    const isVisible_edImsiEJMGNO = rawVisible_edImsiEJMGNO;
    const setIsVisible_edImsiEJMGNO = setRawVisible_edImsiEJMGNO;
    const isVisible_lbImsiEJMGNO = rawVisible_lbImsiEJMGNO;
    const setIsVisible_lbImsiEJMGNO = setRawVisible_lbImsiEJMGNO;
    const isVisible_btnDeleteSettlement = rawVisible_btnDeleteSettlement;
    const setIsVisible_btnDeleteSettlement = setRawVisible_btnDeleteSettlement;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox2;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_shpGubunBox2;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_lbDetailCourse = rawVisible_lbDetailCourse && rawVisible_shpGubunBox2;
    const setIsVisible_lbDetailCourse = setRawVisible_lbDetailCourse;
    const isVisible_cbxDetailCourse = rawVisible_cbxDetailCourse && rawVisible_shpGubunBox2;
    const setIsVisible_cbxDetailCourse = setRawVisible_cbxDetailCourse;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_cbxCustJibu = rawVisible_cbxCustJibu && rawVisible_shpGubunBox2;
    const setIsVisible_cbxCustJibu = setRawVisible_cbxCustJibu;
    const isVisible_lbCustNo = rawVisible_lbCustNo && rawVisible_shpGubunBox2;
    const setIsVisible_lbCustNo = setRawVisible_lbCustNo;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_shpGubunBox2;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_lbBarCode = rawVisible_lbBarCode && rawVisible_shpGubunBox2;
    const setIsVisible_lbBarCode = setRawVisible_lbBarCode;
    const isVisible_medBarCode = rawVisible_medBarCode && rawVisible_shpGubunBox2;
    const setIsVisible_medBarCode = setRawVisible_medBarCode;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_edChangeCnt = rawVisible_edChangeCnt && rawVisible_shpGubunBox1;
    const setIsVisible_edChangeCnt = setRawVisible_edChangeCnt;
    const isVisible_radChangeTpmgno = rawVisible_radChangeTpmgno && rawVisible_shpGubunBox3;
    const setIsVisible_radChangeTpmgno = setRawVisible_radChangeTpmgno;
    const isVisible_btnCustNo = rawVisible_btnCustNo && rawVisible_shpGubunBox2;
    const setIsVisible_btnCustNo = setRawVisible_btnCustNo;
    const isVisible_btnCmgno = rawVisible_btnCmgno && rawVisible_shpGubunBox2;
    const setIsVisible_btnCmgno = setRawVisible_btnCmgno;
    const isVisible_btnNm = rawVisible_btnNm && rawVisible_shpGubunBox3;
    const setIsVisible_btnNm = setRawVisible_btnNm;
    const isVisible_btnBnm = rawVisible_btnBnm && rawVisible_shpGubunBox2;
    const setIsVisible_btnBnm = setRawVisible_btnBnm;
    const isVisible_gdMemFee = rawVisible_gdMemFee && rawVisible_shpGubunBox4;
    const setIsVisible_gdMemFee = setRawVisible_gdMemFee;
    const isVisible_lbTotMinapFee = rawVisible_lbTotMinapFee && rawVisible_shpGubunBox4;
    const setIsVisible_lbTotMinapFee = setRawVisible_lbTotMinapFee;
    const isVisible_medTotMinapFee = rawVisible_medTotMinapFee && rawVisible_shpGubunBox4;
    const setIsVisible_medTotMinapFee = setRawVisible_medTotMinapFee;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt && rawVisible_shpGubunBox4;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_btnJubsuNo = rawVisible_btnJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_btnJubsuNo = setRawVisible_btnJubsuNo;
    const isVisible_gdSunap = rawVisible_gdSunap && rawVisible_shpGubunBox4;
    const setIsVisible_gdSunap = setRawVisible_gdSunap;
    const isVisible_Shape2 = rawVisible_Shape2 && rawVisible_shpGubunBox4;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_gdReady = rawVisible_gdReady;
    const setIsVisible_gdReady = setRawVisible_gdReady;
    const isVisible_lbInputStatus = rawVisible_lbInputStatus && rawVisible_shpGubunBox1;
    const setIsVisible_lbInputStatus = setRawVisible_lbInputStatus;
    const isVisible_lbJubsuStatus = rawVisible_lbJubsuStatus && rawVisible_shpGubunBox1;
    const setIsVisible_lbJubsuStatus = setRawVisible_lbJubsuStatus;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_edExistNM = rawVisible_edExistNM && rawVisible_Shape3;
    const setIsVisible_edExistNM = setRawVisible_edExistNM;
    const isVisible_btnExistNM = rawVisible_btnExistNM && rawVisible_Shape3;
    const setIsVisible_btnExistNM = setRawVisible_btnExistNM;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape3;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_cbxExistJibu = rawVisible_cbxExistJibu && rawVisible_Shape3;
    const setIsVisible_cbxExistJibu = setRawVisible_cbxExistJibu;
    const isVisible_medExistCustNo = rawVisible_medExistCustNo && rawVisible_Shape3;
    const setIsVisible_medExistCustNo = setRawVisible_medExistCustNo;
    const isVisible_btnExistCustNo = rawVisible_btnExistCustNo && rawVisible_Shape3;
    const setIsVisible_btnExistCustNo = setRawVisible_btnExistCustNo;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_btnExistBnm = rawVisible_btnExistBnm && rawVisible_Shape3;
    const setIsVisible_btnExistBnm = setRawVisible_btnExistBnm;
    const isVisible_edExistBnm = rawVisible_edExistBnm && rawVisible_Shape3;
    const setIsVisible_edExistBnm = setRawVisible_edExistBnm;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_shpGubunBox1;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_btnShowVirtualAccount = rawVisible_btnShowVirtualAccount && rawVisible_shpGubunBox4;
    const setIsVisible_btnShowVirtualAccount = setRawVisible_btnShowVirtualAccount;
    const isVisible_lbEduExpireDate = rawVisible_lbEduExpireDate && rawVisible_shpGubunBox3;
    const setIsVisible_lbEduExpireDate = setRawVisible_lbEduExpireDate;
    const isVisible_calEduExpireDate = rawVisible_calEduExpireDate && rawVisible_shpGubunBox3;
    const setIsVisible_calEduExpireDate = setRawVisible_calEduExpireDate;
    const isVisible_btnSmsStat = rawVisible_btnSmsStat && rawVisible_shpGubunBox3;
    const setIsVisible_btnSmsStat = setRawVisible_btnSmsStat;
    const isVisible_Shape0 = rawVisible_Shape0;
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
    const isVisible_Static11 = rawVisible_Static11 && rawVisible_Shape0;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_btnFormDelete = rawVisible_btnFormDelete && rawVisible_Shape0;
    const setIsVisible_btnFormDelete = setRawVisible_btnFormDelete;
    const isVisible_fdImage2 = rawVisible_fdImage2;
    const setIsVisible_fdImage2 = setRawVisible_fdImage2;
    const isVisible_fiImageFile2 = rawVisible_fiImageFile2;
    const setIsVisible_fiImageFile2 = setRawVisible_fiImageFile2;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_shpGubunBox3;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_medPersonKey = rawVisible_medPersonKey && rawVisible_shpGubunBox3;
    const setIsVisible_medPersonKey = setRawVisible_medPersonKey;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_shpGubunBox1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Static14 = rawVisible_Static14 && rawVisible_shpGubunBox1;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_edCyberPassYn = rawVisible_edCyberPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_edCyberPassYn = setRawVisible_edCyberPassYn;
    const isVisible_edFieldPassYn = rawVisible_edFieldPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_edFieldPassYn = setRawVisible_edFieldPassYn;
    const isVisible_btnCyberInfo = rawVisible_btnCyberInfo && rawVisible_shpGubunBox1;
    const setIsVisible_btnCyberInfo = setRawVisible_btnCyberInfo;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_shpGubunBox3;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_edPDI = rawVisible_edPDI && rawVisible_shpGubunBox3;
    const setIsVisible_edPDI = setRawVisible_edPDI;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_lbOverMinapFee = rawVisible_lbOverMinapFee;
    const setIsVisible_lbOverMinapFee = setRawVisible_lbOverMinapFee;
    const isVisible_edOverMinapFee = rawVisible_edOverMinapFee;
    const setIsVisible_edOverMinapFee = setRawVisible_edOverMinapFee;
    const isVisible_calEduExpireDate1yearold = rawVisible_calEduExpireDate1yearold && rawVisible_shpGubunBox3;
    const setIsVisible_calEduExpireDate1yearold = setRawVisible_calEduExpireDate1yearold;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct && rawVisible_shpGubunBox4;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_btnPrintReRctPDF = rawVisible_btnPrintReRctPDF && rawVisible_shpGubunBox4;
    const setIsVisible_btnPrintReRctPDF = setRawVisible_btnPrintReRctPDF;
    const isVisible_medBookZipCode = rawVisible_medBookZipCode;
    const setIsVisible_medBookZipCode = setRawVisible_medBookZipCode;
    const isVisible_btnSearchZipCode2 = rawVisible_btnSearchZipCode2;
    const setIsVisible_btnSearchZipCode2 = setRawVisible_btnSearchZipCode2;
    const isVisible_edBookAddr1 = rawVisible_edBookAddr1;
    const setIsVisible_edBookAddr1 = setRawVisible_edBookAddr1;
    const isVisible_edBookAddr2 = rawVisible_edBookAddr2;
    const setIsVisible_edBookAddr2 = setRawVisible_edBookAddr2;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_edBookPrintYn = rawVisible_edBookPrintYn;
    const setIsVisible_edBookPrintYn = setRawVisible_edBookPrintYn;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_radBookReturn = rawVisible_radBookReturn;
    const setIsVisible_radBookReturn = setRawVisible_radBookReturn;
    const isVisible_Static19 = rawVisible_Static19;
    const setIsVisible_Static19 = setRawVisible_Static19;
    const isVisible_btnBAddrSame = rawVisible_btnBAddrSame;
    const setIsVisible_btnBAddrSame = setRawVisible_btnBAddrSame;
    const isVisible_btnIssue = rawVisible_btnIssue && rawVisible_shpGubunBox1;
    const setIsVisible_btnIssue = setRawVisible_btnIssue;
    const isVisible_hfImage2 = rawVisible_hfImage2;
    const setIsVisible_hfImage2 = setRawVisible_hfImage2;
    const isVisible_btnAutologinSms = rawVisible_btnAutologinSms && rawVisible_shpGubunBox3;
    const setIsVisible_btnAutologinSms = setRawVisible_btnAutologinSms;
    const isVisible_btn_ExcelUpload = rawVisible_btn_ExcelUpload;
    const setIsVisible_btn_ExcelUpload = setRawVisible_btn_ExcelUpload;
    const isVisible_gdExcel = rawVisible_gdExcel;
    const setIsVisible_gdExcel = setRawVisible_gdExcel;
    const isVisible_Button0 = rawVisible_Button0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_edCyberGubun = rawVisible_edCyberGubun;
    const setIsVisible_edCyberGubun = setRawVisible_edCyberGubun;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEduJubsu([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oEmailDomain([]);
            setds_oEduOrderMgno([]);
            setds_oJubsuNo([]);
            setds_oJubsuAllInfo([]);
            setds_oOrderHist([]);
            setds_ioCustomerFeeInfo([]);
            setds_ioMenuTree([]);
            setds_oModifyColumn([]);
            setds_oEduJubsuResult([]);
            setds_oEduReport([]);
            setds_oEduOrder([]);
            setds_oPosResult([]);
            setds_oEduCheck([]);
            setds_oJibuGubun([]);
            setds_oTrainingPearson([]);
            setds_oChangeTpmgno([]);
            setds_ioYearbizlink([]);
            setds_ioT_E_L_JubsuCheck([]);
            setds_ioEduJubsuCheck([]);
            setds_ioTraing_ReturnTpmgnoJubsuCheck([]);
            setds_ioTrainingPerson([]);
            setds_ioSettelYN([]);
            setds_oEducationNo([]);
            setds_ioControl([]);
            setds_ioTraingSeatNoCheck([]);
            setds_oSiteMember([]);
            setds_oAddr([]);
            setds_oYN([]);
            setds_ioManager([]);
            setds_oMemberStatus([]);
            setds_oDeleteCustomerFee([]);
            setds_oCustJibu([]);
            setds_oDetailCourse([]);
            setds_oSunap([]);
            setds_iReady([]);
            setds_oFee([]);
            setds_oFeeMonth([]);
            setds_iCustomerFee([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_oJubsuAlreadyInfo([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_oBookReturn([]);
            setds_oEduIssue([]);
            setds_ioExcel([]);
            setds_ioExcelCopy([]);
            setds_oEduJubsuCheck_Cyber([]);
            setds_ioEduJubsuCheck_Cyber([]);
            setds_oSmsData([]);
            setds_oCaggubunCheck([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button0_OnClick = () => {
        console.log('Button0_OnClick clicked');
    };
    const btnAbsentManageLink_OnClick = () => {
        console.log('btnAbsentManageLink_OnClick clicked');
    };
    const btnAutologinSms_OnClick = () => {
        console.log('btnAutologinSms_OnClick clicked');
    };
    const btnBAddrSame_OnClick = () => {
        console.log('btnBAddrSame_OnClick clicked');
    };
    const btnBnm_OnClick = () => {
        console.log('btnBnm_OnClick clicked');
    };
    const btnCmgno_OnClick = () => {
        console.log('btnCmgno_OnClick clicked');
    };
    const btnCustNo_OnClick = () => {
        console.log('btnCustNo_OnClick clicked');
    };
    const btnCyberInfo_OnClick = () => {
        console.log('btnCyberInfo_OnClick clicked');
    };
    const btnDeleteSettlement_OnClick = () => {
        console.log('btnDeleteSettlement_OnClick clicked');
    };
    const btnEduJubsuModify_OnClick = () => {
        console.log('btnEduJubsuModify_OnClick clicked');
    };
    const btnEduJubsuinfo_OnClick = () => {
        console.log('btnEduJubsuinfo_OnClick clicked');
    };
    const btnExistBnm_OnClick = () => {
        console.log('btnExistBnm_OnClick clicked');
    };
    const btnExistCustNo_OnClick = () => {
        console.log('btnExistCustNo_OnClick clicked');
    };
    const btnExistNM_OnClick = () => {
        console.log('btnExistNM_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnIssue_OnClick = () => {
        console.log('btnIssue_OnClick clicked');
    };
    const btnJubsuHistory_OnClick = () => {
        console.log('btnJubsuHistory_OnClick clicked');
    };
    const btnJubsuNo_OnClick = () => {
        console.log('btnJubsuNo_OnClick clicked');
    };
    const btnLocalFormView_OnClick = () => {
        console.log('btnLocalFormView_OnClick clicked');
    };
    const btnModifyHistory_OnClick = () => {
        console.log('btnModifyHistory_OnClick clicked');
    };
    const btnNm_OnClick = () => {
        console.log('btnNm_OnClick clicked');
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
    const btnPrint_OnClick = () => {
        console.log('btnPrint_OnClick clicked');
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
    const btnSearchEduOrder_OnClick = () => {
        console.log('btnSearchEduOrder_OnClick clicked');
    };
    const btnSearchPersonInfoChange_OnClick = () => {
        console.log('btnSearchPersonInfoChange_OnClick clicked');
    };
    const btnSearchZipCode2_OnClick = () => {
        console.log('btnSearchZipCode2_OnClick clicked');
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
    const btn_ExcelUpload_OnClick = () => {
        console.log('btn_ExcelUpload_OnClick clicked');
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
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_SearchUnUseJubsuNo = () => {
        console.log('lfn_SearchUnUseJubsuNo clicked');
    };

    return {
        isLoading,
        ds_ioEduJubsu,
        ds_oJibu,
        ds_oCourse,
        ds_oEmailDomain,
        ds_oEduOrderMgno,
        ds_oJubsuNo,
        ds_oJubsuAllInfo,
        ds_oOrderHist,
        ds_ioCustomerFeeInfo,
        ds_ioMenuTree,
        ds_oModifyColumn,
        ds_oEduJubsuResult,
        ds_oEduReport,
        ds_oEduOrder,
        ds_oPosResult,
        ds_oEduCheck,
        ds_oJibuGubun,
        ds_oTrainingPearson,
        ds_oChangeTpmgno,
        ds_ioYearbizlink,
        ds_ioT_E_L_JubsuCheck,
        ds_ioEduJubsuCheck,
        ds_ioTraing_ReturnTpmgnoJubsuCheck,
        ds_ioTrainingPerson,
        ds_ioSettelYN,
        ds_oEducationNo,
        ds_ioControl,
        ds_ioTraingSeatNoCheck,
        ds_oSiteMember,
        ds_oAddr,
        ds_oYN,
        ds_ioManager,
        ds_oMemberStatus,
        ds_oDeleteCustomerFee,
        ds_oCustJibu,
        ds_oDetailCourse,
        ds_oSunap,
        ds_iReady,
        ds_oFee,
        ds_oFeeMonth,
        ds_iCustomerFee,
        ds_ioVirtualAccoutAllocation,
        ds_oJubsuAlreadyInfo,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_oBookReturn,
        ds_oEduIssue,
        ds_ioExcel,
        ds_ioExcelCopy,
        ds_oEduJubsuCheck_Cyber,
        ds_ioEduJubsuCheck_Cyber,
        ds_oSmsData,
        ds_oCaggubunCheck,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
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
        isVisible_edEduYear,
        setIsVisible_edEduYear,
        isVisible_lbTrainingOrder,
        setIsVisible_lbTrainingOrder,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edEduOrder,
        setIsVisible_edEduOrder,
        isVisible_lbBirthday,
        setIsVisible_lbBirthday,
        isVisible_lbAt,
        setIsVisible_lbAt,
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
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_cbxEmailDomain,
        setIsVisible_cbxEmailDomain,
        isVisible_lbEmail,
        setIsVisible_lbEmail,
        isVisible_edEmail,
        setIsVisible_edEmail,
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
        isVisible_btnEduJubsuModify,
        setIsVisible_btnEduJubsuModify,
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
        isVisible_btnSearchEduOrder,
        setIsVisible_btnSearchEduOrder,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_btnSendSms,
        setIsVisible_btnSendSms,
        isVisible_btnPrintJubsu,
        setIsVisible_btnPrintJubsu,
        isVisible_lbOrderChange,
        setIsVisible_lbOrderChange,
        isVisible_shpBox1,
        setIsVisible_shpBox1,
        isVisible_shpBox2,
        setIsVisible_shpBox2,
        isVisible_lbTrainingInfo,
        setIsVisible_lbTrainingInfo,
        isVisible_lbTrainingPersonInfo,
        setIsVisible_lbTrainingPersonInfo,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_lbEduInfo2,
        setIsVisible_lbEduInfo2,
        isVisible_btnUnUseJubsuNo,
        setIsVisible_btnUnUseJubsuNo,
        isVisible_btnModifyHistory,
        setIsVisible_btnModifyHistory,
        isVisible_radJibuGubun,
        setIsVisible_radJibuGubun,
        isVisible_btnJubsuHistory,
        setIsVisible_btnJubsuHistory,
        isVisible_btnSearchPersonInfoChange,
        setIsVisible_btnSearchPersonInfoChange,
        isVisible_btnEduJubsuinfo,
        setIsVisible_btnEduJubsuinfo,
        isVisible_lbEduInfo1,
        setIsVisible_lbEduInfo1,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_edImsiEJMGNO,
        setIsVisible_edImsiEJMGNO,
        isVisible_lbImsiEJMGNO,
        setIsVisible_lbImsiEJMGNO,
        isVisible_btnDeleteSettlement,
        setIsVisible_btnDeleteSettlement,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_lbDetailCourse,
        setIsVisible_lbDetailCourse,
        isVisible_cbxDetailCourse,
        setIsVisible_cbxDetailCourse,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_cbxCustJibu,
        setIsVisible_cbxCustJibu,
        isVisible_lbCustNo,
        setIsVisible_lbCustNo,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_lbBarCode,
        setIsVisible_lbBarCode,
        isVisible_medBarCode,
        setIsVisible_medBarCode,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_edChangeCnt,
        setIsVisible_edChangeCnt,
        isVisible_radChangeTpmgno,
        setIsVisible_radChangeTpmgno,
        isVisible_btnCustNo,
        setIsVisible_btnCustNo,
        isVisible_btnCmgno,
        setIsVisible_btnCmgno,
        isVisible_btnNm,
        setIsVisible_btnNm,
        isVisible_btnBnm,
        setIsVisible_btnBnm,
        isVisible_gdMemFee,
        setIsVisible_gdMemFee,
        isVisible_lbTotMinapFee,
        setIsVisible_lbTotMinapFee,
        isVisible_medTotMinapFee,
        setIsVisible_medTotMinapFee,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
        isVisible_btnJubsuNo,
        setIsVisible_btnJubsuNo,
        isVisible_gdSunap,
        setIsVisible_gdSunap,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_gdReady,
        setIsVisible_gdReady,
        isVisible_lbInputStatus,
        setIsVisible_lbInputStatus,
        isVisible_lbJubsuStatus,
        setIsVisible_lbJubsuStatus,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edExistNM,
        setIsVisible_edExistNM,
        isVisible_btnExistNM,
        setIsVisible_btnExistNM,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_cbxExistJibu,
        setIsVisible_cbxExistJibu,
        isVisible_medExistCustNo,
        setIsVisible_medExistCustNo,
        isVisible_btnExistCustNo,
        setIsVisible_btnExistCustNo,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_btnExistBnm,
        setIsVisible_btnExistBnm,
        isVisible_edExistBnm,
        setIsVisible_edExistBnm,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_btnShowVirtualAccount,
        setIsVisible_btnShowVirtualAccount,
        isVisible_lbEduExpireDate,
        setIsVisible_lbEduExpireDate,
        isVisible_calEduExpireDate,
        setIsVisible_calEduExpireDate,
        isVisible_btnSmsStat,
        setIsVisible_btnSmsStat,
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
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_btnFormDelete,
        setIsVisible_btnFormDelete,
        isVisible_fdImage2,
        setIsVisible_fdImage2,
        isVisible_fiImageFile2,
        setIsVisible_fiImageFile2,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_medPersonKey,
        setIsVisible_medPersonKey,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_edCyberPassYn,
        setIsVisible_edCyberPassYn,
        isVisible_edFieldPassYn,
        setIsVisible_edFieldPassYn,
        isVisible_btnCyberInfo,
        setIsVisible_btnCyberInfo,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_edPDI,
        setIsVisible_edPDI,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_lbOverMinapFee,
        setIsVisible_lbOverMinapFee,
        isVisible_edOverMinapFee,
        setIsVisible_edOverMinapFee,
        isVisible_calEduExpireDate1yearold,
        setIsVisible_calEduExpireDate1yearold,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_btnPrintReRctPDF,
        setIsVisible_btnPrintReRctPDF,
        isVisible_medBookZipCode,
        setIsVisible_medBookZipCode,
        isVisible_btnSearchZipCode2,
        setIsVisible_btnSearchZipCode2,
        isVisible_edBookAddr1,
        setIsVisible_edBookAddr1,
        isVisible_edBookAddr2,
        setIsVisible_edBookAddr2,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_edBookPrintYn,
        setIsVisible_edBookPrintYn,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_radBookReturn,
        setIsVisible_radBookReturn,
        isVisible_Static19,
        setIsVisible_Static19,
        isVisible_btnBAddrSame,
        setIsVisible_btnBAddrSame,
        isVisible_btnIssue,
        setIsVisible_btnIssue,
        isVisible_hfImage2,
        setIsVisible_hfImage2,
        isVisible_btnAutologinSms,
        setIsVisible_btnAutologinSms,
        isVisible_btn_ExcelUpload,
        setIsVisible_btn_ExcelUpload,
        isVisible_gdExcel,
        setIsVisible_gdExcel,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_edCyberGubun,
        setIsVisible_edCyberGubun,
        Button0_OnClick,
        btnAbsentManageLink_OnClick,
        btnAutologinSms_OnClick,
        btnBAddrSame_OnClick,
        btnBnm_OnClick,
        btnCmgno_OnClick,
        btnCustNo_OnClick,
        btnCyberInfo_OnClick,
        btnDeleteSettlement_OnClick,
        btnEduJubsuModify_OnClick,
        btnEduJubsuinfo_OnClick,
        btnExistBnm_OnClick,
        btnExistCustNo_OnClick,
        btnExistNM_OnClick,
        btnFormDelete_OnClick,
        btnIssue_OnClick,
        btnJubsuHistory_OnClick,
        btnJubsuNo_OnClick,
        btnLocalFormView_OnClick,
        btnModifyHistory_OnClick,
        btnNm_OnClick,
        btnPrintJubsu_OnClick,
        btnPrintReRctPDF_OnClick,
        btnPrintReRct_OnClick,
        btnPrint_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSearchEduOrder_OnClick,
        btnSearchPersonInfoChange_OnClick,
        btnSearchZipCode2_OnClick,
        btnSendSms_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
        btnSeverFormView_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSmsStat_OnClick,
        btn_ExcelUpload_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_SearchUnUseJubsuNo,
    };
};