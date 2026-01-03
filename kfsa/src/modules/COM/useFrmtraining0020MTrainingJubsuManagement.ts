// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingJubsu, Ids_oJibu, Ids_oCourse, Ids_oEmailDomain, Ids_oImage, Ids_oRemarkGubun, Ids_oTrainingOrderMgno, Ids_oJubsuNo, Ids_oSeatNo, Ids_oJubsuAllInfo, Ids_oOrderHist, Ids_oSetlmentHist, Ids_ioMenuTree, Ids_oModifyColumn, Ids_oTrainingJubsuResult, Ids_oTrainingJubsuPrint, Ids_oTrainingOrder, Ids_oPosResult, Ids_oTrainingJubsuPrint1, Ids_oTrainingJubsuPrint2, Ids_oTrainingJubsuPrint3, Ids_oTrainingCheck, Ids_oJibuGubun, Ids_oTrainingPearson, Ids_oChangeTpmgno, Ids_ioYearbizlink, Ids_ioT_E_L_JubsuCheck, Ids_ioTraing_JubsuCheck, Ids_ioTraing_ReturnTpmgnoJubsuCheck, Ids_ioTrainingPerson, Ids_ioSettelYN, Ids_oEducationNo, Ids_ioControl, Ids_ioTraingSeatNoCheck, Ids_oSiteMember, Ids_oCyberLearning, Ids_oCyberPass, Ids_oAddr, Ids_oYN, Ids_ioManager, Ids_oMemberStatus, Ids_oDeleteSettlement, Ids_oAmountGubun } from './Frmtraining0020MTrainingJubsuManagementData';

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
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_btnApplyPicture, setIsVisible_btnApplyPicture] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_shpGubunBox2, setIsVisible_shpGubunBox2] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_gdSetlmentHist, setIsVisible_gdSetlmentHist] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_lbTrainingYear, setIsVisible_lbTrainingYear] = useState(true);
    const [isVisible_edTrainingYear, setIsVisible_edTrainingYear] = useState(true);
    const [isVisible_lbTrainingOrder, setIsVisible_lbTrainingOrder] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edTrainingOrder, setIsVisible_edTrainingOrder] = useState(true);
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
    const [isVisible_lbCompNm, setIsVisible_lbCompNm] = useState(true);
    const [isVisible_edCompNm, setIsVisible_edCompNm] = useState(true);
    const [isVisible_lbAt, setIsVisible_lbAt] = useState(true);
    const [isVisible_btnSearchPersonInfo, setIsVisible_btnSearchPersonInfo] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_edJubsuNo, setIsVisible_edJubsuNo] = useState(true);
    const [isVisible_lbSeq, setIsVisible_lbSeq] = useState(true);
    const [isVisible_lbAddr, setIsVisible_lbAddr] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_btnSearchZipCode, setIsVisible_btnSearchZipCode] = useState(true);
    const [isVisible_edAddr1, setIsVisible_edAddr1] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_lbHpTel, setIsVisible_lbHpTel] = useState(true);
    const [isVisible_edHpTel, setIsVisible_edHpTel] = useState(true);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);
    const [isVisible_cbxEmailDomain, setIsVisible_cbxEmailDomain] = useState(true);
    const [isVisible_lbEmail, setIsVisible_lbEmail] = useState(true);
    const [isVisible_edEmail, setIsVisible_edEmail] = useState(true);
    const [isVisible_btnAuthResidentNo, setIsVisible_btnAuthResidentNo] = useState(true);
    const [isVisible_edPassYn, setIsVisible_edPassYn] = useState(true);
    const [isVisible_lbPassYn, setIsVisible_lbPassYn] = useState(true);
    const [isVisible_edAbsentYn, setIsVisible_edAbsentYn] = useState(true);
    const [isVisible_lbAbsentYn, setIsVisible_lbAbsentYn] = useState(true);
    const [isVisible_btnAbsentManageLink, setIsVisible_btnAbsentManageLink] = useState(true);
    const [isVisible_btnTrainingJubsuModify, setIsVisible_btnTrainingJubsuModify] = useState(true);
    const [isVisible_gdJubsuInfo, setIsVisible_gdJubsuInfo] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_gdOrderHist, setIsVisible_gdOrderHist] = useState(true);
    const [isVisible_lbJubsuHist, setIsVisible_lbJubsuHist] = useState(true);
    const [isVisible_lbSetlmt, setIsVisible_lbSetlmt] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(true);
    const [isVisible_btnSeqList, setIsVisible_btnSeqList] = useState(true);
    const [isVisible_btnSearchTrainingOrder, setIsVisible_btnSearchTrainingOrder] = useState(true);
    const [isVisible_fdImage, setIsVisible_fdImage] = useState(true);
    const [isVisible_hfImage, setIsVisible_hfImage] = useState(true);
    const [isVisible_lbRemark, setIsVisible_lbRemark] = useState(true);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_btnTraingJubsuHist, setIsVisible_btnTraingJubsuHist] = useState(true);
    const [isVisible_cbxRemarkGubun, setIsVisible_cbxRemarkGubun] = useState(true);
    const [isVisible_btnChangeProcDate, setIsVisible_btnChangeProcDate] = useState(true);
    const [isVisible_btnProcRct, setIsVisible_btnProcRct] = useState(true);
    const [isVisible_btnPrintReRct, setIsVisible_btnPrintReRct] = useState(true);
    const [isVisible_btnSendSms, setIsVisible_btnSendSms] = useState(true);
    const [isVisible_btnPrintJubsu, setIsVisible_btnPrintJubsu] = useState(true);
    const [isVisible_btnSendEmail, setIsVisible_btnSendEmail] = useState(true);
    const [isVisible_lbSeatNo, setIsVisible_lbSeatNo] = useState(true);
    const [isVisible_edSeatNo, setIsVisible_edSeatNo] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_btnSeatList, setIsVisible_btnSeatList] = useState(true);
    const [isVisible_lbOrderChange, setIsVisible_lbOrderChange] = useState(true);
    const [isVisible_shpBox1, setIsVisible_shpBox1] = useState(true);
    const [isVisible_shpBox2, setIsVisible_shpBox2] = useState(true);
    const [isVisible_btnSmsStat, setIsVisible_btnSmsStat] = useState(true);
    const [isVisible_btnEmailStat, setIsVisible_btnEmailStat] = useState(true);
    const [isVisible_lbTrainingInfo, setIsVisible_lbTrainingInfo] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_imgLastestPicture, setIsVisible_imgLastestPicture] = useState(true);
    const [isVisible_btnSearchRegPicture, setIsVisible_btnSearchRegPicture] = useState(true);
    const [isVisible_lbTrainingPersonInfo, setIsVisible_lbTrainingPersonInfo] = useState(true);
    const [isVisible_lbJubsu, setIsVisible_lbJubsu] = useState(true);
    const [isVisible_lbBarCode, setIsVisible_lbBarCode] = useState(true);
    const [isVisible_btnBarCodeSearch, setIsVisible_btnBarCodeSearch] = useState(true);
    const [isVisible_shpBox3, setIsVisible_shpBox3] = useState(true);
    const [isVisible_lbTrainingInfo2, setIsVisible_lbTrainingInfo2] = useState(true);
    const [isVisible_btnUnUseJubsuNo, setIsVisible_btnUnUseJubsuNo] = useState(true);
    const [isVisible_btnLoadPicture, setIsVisible_btnLoadPicture] = useState(true);
    const [isVisible_btnLoadScanPicture, setIsVisible_btnLoadScanPicture] = useState(true);
    const [isVisible_btnScanPicture, setIsVisible_btnScanPicture] = useState(true);
    const [isVisible_btnPictureManagement, setIsVisible_btnPictureManagement] = useState(true);
    const [isVisible_btnShowVirtualAccount, setIsVisible_btnShowVirtualAccount] = useState(true);
    const [isVisible_btnModifyHistory, setIsVisible_btnModifyHistory] = useState(true);
    const [isVisible_medBarCode, setIsVisible_medBarCode] = useState(true);
    const [isVisible_fiImageFile, setIsVisible_fiImageFile] = useState(true);
    const [isVisible_btnPosResultList, setIsVisible_btnPosResultList] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_btnPrintJubsuResult, setIsVisible_btnPrintJubsuResult] = useState(true);
    const [isVisible_radJibuGubun, setIsVisible_radJibuGubun] = useState(true);
    const [isVisible_btnLicenseList, setIsVisible_btnLicenseList] = useState(true);
    const [isVisible_radChangeTpmgno, setIsVisible_radChangeTpmgno] = useState(false);
    const [isVisible_btnJubsuHistory, setIsVisible_btnJubsuHistory] = useState(true);
    const [isVisible_Button0, setIsVisible_Button0] = useState(true);
    const [isVisible_btnPosvath, setIsVisible_btnPosvath] = useState(true);
    const [isVisible_btnUnSeatList, setIsVisible_btnUnSeatList] = useState(true);
    const [isVisible_btnTraingJubsuinfo, setIsVisible_btnTraingJubsuinfo] = useState(false);
    const [isVisible_btnPosReport, setIsVisible_btnPosReport] = useState(true);
    const [isVisible_btnCyberInfo, setIsVisible_btnCyberInfo] = useState(true);
    const [isVisible_lbTrainingInfo1, setIsVisible_lbTrainingInfo1] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(false);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radMemAgreeYN, setIsVisible_radMemAgreeYN] = useState(true);
    const [isVisible_edImsiTJMGNO, setIsVisible_edImsiTJMGNO] = useState(true);
    const [isVisible_edImsiTPMGNO, setIsVisible_edImsiTPMGNO] = useState(true);
    const [isVisible_lbImsiTJMGNO, setIsVisible_lbImsiTJMGNO] = useState(true);
    const [isVisible_lbImsiTPMGNO, setIsVisible_lbImsiTPMGNO] = useState(true);
    const [isVisible_btnDeleteSettlement, setIsVisible_btnDeleteSettlement] = useState(true);
    const [isVisible_btnPrintReRctPDF, setIsVisible_btnPrintReRctPDF] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_radAmountGubun, setIsVisible_radAmountGubun] = useState(true);
    const [isVisible_btnEstimate, setIsVisible_btnEstimate] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edEvalYN, setIsVisible_edEvalYN] = useState(true);

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
    const btnEmailStat_OnClick = () => {
        console.log('btnEmailStat_OnClick clicked');
    };
    const btnEstimate_OnClick = () => {
        console.log('btnEstimate_OnClick clicked');
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
    const btnModifyHistory_OnClick = () => {
        console.log('btnModifyHistory_OnClick clicked');
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
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const btnSmsStat_OnClick = () => {
        console.log('btnSmsStat_OnClick clicked');
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
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
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
        btnAbsentManageLink_OnClick,
        btnApplyPicture_OnClick,
        btnAuthResidentNo_OnClick,
        btnBarCodeSearch_OnClick,
        btnChangeProcDate_OnClick,
        btnCyberInfo_OnClick,
        btnDeleteSettlement_OnClick,
        btnEmailStat_OnClick,
        btnEstimate_OnClick,
        btnJubsuHistory_OnClick,
        btnLicenseList_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnModifyHistory_OnClick,
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
        btnSearchPersonInfoChange_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchTrainingOrder_OnClick,
        btnSearchZipCode_OnClick,
        btnSeatList_OnClick,
        btnSendEmail_OnClick,
        btnSendSms_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSmsStat_OnClick,
        btnTraingJubsuHist_OnClick,
        btnTraingJubsuInfo_OnClick,
        btnTrainingJubsuModify_OnClick,
        btnUnSeatList_OnClick,
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