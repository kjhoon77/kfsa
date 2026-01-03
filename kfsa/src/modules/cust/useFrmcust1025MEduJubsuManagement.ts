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
    const [isVisible_shpGubunBox2, setIsVisible_shpGubunBox2] = useState(true);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_lbTrainingYear, setIsVisible_lbTrainingYear] = useState(true);
    const [isVisible_edEduYear, setIsVisible_edEduYear] = useState(true);
    const [isVisible_lbTrainingOrder, setIsVisible_lbTrainingOrder] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edEduOrder, setIsVisible_edEduOrder] = useState(true);
    const [isVisible_lbBirthday, setIsVisible_lbBirthday] = useState(true);
    const [isVisible_lbAt, setIsVisible_lbAt] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_edJubsuNo, setIsVisible_edJubsuNo] = useState(true);
    const [isVisible_lbSeq, setIsVisible_lbSeq] = useState(true);
    const [isVisible_lbAddr, setIsVisible_lbAddr] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_edAddr1, setIsVisible_edAddr1] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_lbHpTel, setIsVisible_lbHpTel] = useState(true);
    const [isVisible_edHpTel, setIsVisible_edHpTel] = useState(true);
    const [isVisible_medBirthday, setIsVisible_medBirthday] = useState(true);
    const [isVisible_cbxEmailDomain, setIsVisible_cbxEmailDomain] = useState(true);
    const [isVisible_lbEmail, setIsVisible_lbEmail] = useState(true);
    const [isVisible_edEmail, setIsVisible_edEmail] = useState(true);
    const [isVisible_edPassYn, setIsVisible_edPassYn] = useState(true);
    const [isVisible_lbPassYn, setIsVisible_lbPassYn] = useState(true);
    const [isVisible_edAbsentYn, setIsVisible_edAbsentYn] = useState(true);
    const [isVisible_lbAbsentYn, setIsVisible_lbAbsentYn] = useState(true);
    const [isVisible_btnAbsentManageLink, setIsVisible_btnAbsentManageLink] = useState(false);
    const [isVisible_btnEduJubsuModify, setIsVisible_btnEduJubsuModify] = useState(true);
    const [isVisible_gdJubsuInfo, setIsVisible_gdJubsuInfo] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_gdOrderHist, setIsVisible_gdOrderHist] = useState(true);
    const [isVisible_lbJubsuHist, setIsVisible_lbJubsuHist] = useState(true);
    const [isVisible_lbSetlmt, setIsVisible_lbSetlmt] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(true);
    const [isVisible_btnSeqList, setIsVisible_btnSeqList] = useState(true);
    const [isVisible_btnSearchEduOrder, setIsVisible_btnSearchEduOrder] = useState(true);
    const [isVisible_lbRemark, setIsVisible_lbRemark] = useState(true);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_btnSendSms, setIsVisible_btnSendSms] = useState(true);
    const [isVisible_btnPrintJubsu, setIsVisible_btnPrintJubsu] = useState(true);
    const [isVisible_lbOrderChange, setIsVisible_lbOrderChange] = useState(true);
    const [isVisible_shpBox1, setIsVisible_shpBox1] = useState(true);
    const [isVisible_shpBox2, setIsVisible_shpBox2] = useState(true);
    const [isVisible_lbTrainingInfo, setIsVisible_lbTrainingInfo] = useState(true);
    const [isVisible_lbTrainingPersonInfo, setIsVisible_lbTrainingPersonInfo] = useState(true);
    const [isVisible_lbJubsu, setIsVisible_lbJubsu] = useState(true);
    const [isVisible_lbEduInfo2, setIsVisible_lbEduInfo2] = useState(true);
    const [isVisible_btnUnUseJubsuNo, setIsVisible_btnUnUseJubsuNo] = useState(true);
    const [isVisible_btnModifyHistory, setIsVisible_btnModifyHistory] = useState(true);
    const [isVisible_radJibuGubun, setIsVisible_radJibuGubun] = useState(true);
    const [isVisible_btnJubsuHistory, setIsVisible_btnJubsuHistory] = useState(true);
    const [isVisible_btnSearchPersonInfoChange, setIsVisible_btnSearchPersonInfoChange] = useState(false);
    const [isVisible_btnEduJubsuinfo, setIsVisible_btnEduJubsuinfo] = useState(false);
    const [isVisible_lbEduInfo1, setIsVisible_lbEduInfo1] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(false);
    const [isVisible_edImsiEJMGNO, setIsVisible_edImsiEJMGNO] = useState(true);
    const [isVisible_lbImsiEJMGNO, setIsVisible_lbImsiEJMGNO] = useState(true);
    const [isVisible_btnDeleteSettlement, setIsVisible_btnDeleteSettlement] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_edBuildingNm, setIsVisible_edBuildingNm] = useState(true);
    const [isVisible_lbDetailCourse, setIsVisible_lbDetailCourse] = useState(true);
    const [isVisible_cbxDetailCourse, setIsVisible_cbxDetailCourse] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_cbxCustJibu, setIsVisible_cbxCustJibu] = useState(true);
    const [isVisible_lbCustNo, setIsVisible_lbCustNo] = useState(true);
    const [isVisible_medCustNo, setIsVisible_medCustNo] = useState(true);
    const [isVisible_lbBarCode, setIsVisible_lbBarCode] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_edChangeCnt, setIsVisible_edChangeCnt] = useState(true);
    const [isVisible_radChangeTpmgno, setIsVisible_radChangeTpmgno] = useState(false);
    const [isVisible_btnCustNo, setIsVisible_btnCustNo] = useState(true);
    const [isVisible_btnCmgno, setIsVisible_btnCmgno] = useState(true);
    const [isVisible_btnNm, setIsVisible_btnNm] = useState(true);
    const [isVisible_btnBnm, setIsVisible_btnBnm] = useState(true);
    const [isVisible_gdMemFee, setIsVisible_gdMemFee] = useState(true);
    const [isVisible_lbTotMinapFee, setIsVisible_lbTotMinapFee] = useState(true);
    const [isVisible_medTotMinapFee, setIsVisible_medTotMinapFee] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_btnJubsuNo, setIsVisible_btnJubsuNo] = useState(true);
    const [isVisible_gdSunap, setIsVisible_gdSunap] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_gdReady, setIsVisible_gdReady] = useState(false);
    const [isVisible_lbInputStatus, setIsVisible_lbInputStatus] = useState(true);
    const [isVisible_lbJubsuStatus, setIsVisible_lbJubsuStatus] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_edExistNM, setIsVisible_edExistNM] = useState(true);
    const [isVisible_btnExistNM, setIsVisible_btnExistNM] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_cbxExistJibu, setIsVisible_cbxExistJibu] = useState(true);
    const [isVisible_medExistCustNo, setIsVisible_medExistCustNo] = useState(true);
    const [isVisible_btnExistCustNo, setIsVisible_btnExistCustNo] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_btnExistBnm, setIsVisible_btnExistBnm] = useState(true);
    const [isVisible_edExistBnm, setIsVisible_edExistBnm] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(false);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_btnShowVirtualAccount, setIsVisible_btnShowVirtualAccount] = useState(true);
    const [isVisible_lbEduExpireDate, setIsVisible_lbEduExpireDate] = useState(false);
    const [isVisible_calEduExpireDate, setIsVisible_calEduExpireDate] = useState(false);
    const [isVisible_btnSmsStat, setIsVisible_btnSmsStat] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_btnScanSave, setIsVisible_btnScanSave] = useState(true);
    const [isVisible_btnLocalFormView, setIsVisible_btnLocalFormView] = useState(true);
    const [isVisible_edScanFileName, setIsVisible_edScanFileName] = useState(true);
    const [isVisible_btnScanSearch, setIsVisible_btnScanSearch] = useState(true);
    const [isVisible_btnScan, setIsVisible_btnScan] = useState(true);
    const [isVisible_btnSeverFormView, setIsVisible_btnSeverFormView] = useState(true);
    const [isVisible_edFormResult, setIsVisible_edFormResult] = useState(true);
    const [isVisible_cbxForm, setIsVisible_cbxForm] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_btnFormDelete, setIsVisible_btnFormDelete] = useState(false);
    const [isVisible_fdImage2, setIsVisible_fdImage2] = useState(true);
    const [isVisible_fiImageFile2, setIsVisible_fiImageFile2] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(false);
    const [isVisible_edCyberPassYn, setIsVisible_edCyberPassYn] = useState(true);
    const [isVisible_edFieldPassYn, setIsVisible_edFieldPassYn] = useState(false);
    const [isVisible_btnCyberInfo, setIsVisible_btnCyberInfo] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_edPDI, setIsVisible_edPDI] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_lbOverMinapFee, setIsVisible_lbOverMinapFee] = useState(true);
    const [isVisible_edOverMinapFee, setIsVisible_edOverMinapFee] = useState(true);
    const [isVisible_calEduExpireDate1yearold, setIsVisible_calEduExpireDate1yearold] = useState(false);
    const [isVisible_btnPrintReRct, setIsVisible_btnPrintReRct] = useState(true);
    const [isVisible_btnPrintReRctPDF, setIsVisible_btnPrintReRctPDF] = useState(true);
    const [isVisible_medBookZipCode, setIsVisible_medBookZipCode] = useState(true);
    const [isVisible_btnSearchZipCode2, setIsVisible_btnSearchZipCode2] = useState(true);
    const [isVisible_edBookAddr1, setIsVisible_edBookAddr1] = useState(true);
    const [isVisible_edBookAddr2, setIsVisible_edBookAddr2] = useState(true);
    const [isVisible_Static17, setIsVisible_Static17] = useState(true);
    const [isVisible_edBookPrintYn, setIsVisible_edBookPrintYn] = useState(true);
    const [isVisible_Static18, setIsVisible_Static18] = useState(true);
    const [isVisible_radBookReturn, setIsVisible_radBookReturn] = useState(true);
    const [isVisible_Static19, setIsVisible_Static19] = useState(true);
    const [isVisible_btnBAddrSame, setIsVisible_btnBAddrSame] = useState(true);
    const [isVisible_btnIssue, setIsVisible_btnIssue] = useState(false);
    const [isVisible_hfImage2, setIsVisible_hfImage2] = useState(true);
    const [isVisible_btnAutologinSms, setIsVisible_btnAutologinSms] = useState(true);
    const [isVisible_btn_ExcelUpload, setIsVisible_btn_ExcelUpload] = useState(false);
    const [isVisible_gdExcel, setIsVisible_gdExcel] = useState(false);
    const [isVisible_Button0, setIsVisible_Button0] = useState(false);
    const [isVisible_edCyberGubun, setIsVisible_edCyberGubun] = useState(false);

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