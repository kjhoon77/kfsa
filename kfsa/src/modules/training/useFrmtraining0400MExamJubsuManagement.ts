// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_oEmailDomain, Ids_oImage, Ids_oRemarkGubun, Ids_oExamOrderMgno, Ids_oJubsuNo, Ids_oSeatNo, Ids_oJubsuAllInfo, Ids_oOrderHist, Ids_oSetlmentHist, Ids_ioMenuTree, Ids_oModifyColumn, Ids_oExamJubsuResult, Ids_oExamJubsuPrint, Ids_oExamOrder, Ids_ioExamJubsu, Ids_oPosResult, Ids_oJibuGubun, Ids_oExamAdd, Ids_oChangeTpmgno, Ids_oTrainingPerson, Ids_ioYearbizlink, Ids_ioT_E_L_JubsuCheck, Ids_ioExam_ReturnTpmgnoJubsuCheck, Ids_ioExam_JubsuCheck, Ids_ioExamPerson, Ids_ioTrainingJubsuMatching, Ids_ioSettelYN, Ids_ioJubsuGubun, Ids_oJubsuGubunCourse, Ids_oJubsuGubun, Ids_oAddr, Ids_ioYN, Ids_ioJubsuGubun2, Ids_ioChasuGubun, Ids_oSunapRepayAmount, Ids_ioGaJubsuGubun, Ids_oExamCheat, Ids_oLicenseCheck, Ids_oExamOmrFile, Ids_oMunje, Ids_oForm, Ids_iFormSave, Ids_oFormSave, Ids_iFormDelete, Ids_oFormDelete, Ids_oJubsuCheck, Ids_oModifyTime, Ids_ioTrainingJubsuMatchingCourse21, Ids_oCheck, Ids_ioGaJubsuGubun2, Ids_examaccept_Check } from './Frmtraining0400MExamJubsuManagementData';

export const useFrmtraining0400MExamJubsuManagement = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oEmailDomain, setds_oEmailDomain] = useState<Ids_oEmailDomain[]>([]);
    const [ds_oImage, setds_oImage] = useState<Ids_oImage[]>([]);
    const [ds_oRemarkGubun, setds_oRemarkGubun] = useState<Ids_oRemarkGubun[]>([]);
    const [ds_oExamOrderMgno, setds_oExamOrderMgno] = useState<Ids_oExamOrderMgno[]>([]);
    const [ds_oJubsuNo, setds_oJubsuNo] = useState<Ids_oJubsuNo[]>([]);
    const [ds_oSeatNo, setds_oSeatNo] = useState<Ids_oSeatNo[]>([]);
    const [ds_oJubsuAllInfo, setds_oJubsuAllInfo] = useState<Ids_oJubsuAllInfo[]>([]);
    const [ds_oOrderHist, setds_oOrderHist] = useState<Ids_oOrderHist[]>([]);
    const [ds_oSetlmentHist, setds_oSetlmentHist] = useState<Ids_oSetlmentHist[]>([]);
    const [ds_ioMenuTree, setds_ioMenuTree] = useState<Ids_ioMenuTree[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [ds_oExamJubsuResult, setds_oExamJubsuResult] = useState<Ids_oExamJubsuResult[]>([]);
    const [ds_oExamJubsuPrint, setds_oExamJubsuPrint] = useState<Ids_oExamJubsuPrint[]>([]);
    const [ds_oExamOrder, setds_oExamOrder] = useState<Ids_oExamOrder[]>([]);
    const [ds_ioExamJubsu, setds_ioExamJubsu] = useState<Ids_ioExamJubsu[]>([]);
    const [ds_oPosResult, setds_oPosResult] = useState<Ids_oPosResult[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_oExamAdd, setds_oExamAdd] = useState<Ids_oExamAdd[]>([]);
    const [ds_oChangeTpmgno, setds_oChangeTpmgno] = useState<Ids_oChangeTpmgno[]>([]);
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_ioYearbizlink, setds_ioYearbizlink] = useState<Ids_ioYearbizlink[]>([]);
    const [ds_ioT_E_L_JubsuCheck, setds_ioT_E_L_JubsuCheck] = useState<Ids_ioT_E_L_JubsuCheck[]>([]);
    const [ds_ioExam_ReturnTpmgnoJubsuCheck, setds_ioExam_ReturnTpmgnoJubsuCheck] = useState<Ids_ioExam_ReturnTpmgnoJubsuCheck[]>([]);
    const [ds_ioExam_JubsuCheck, setds_ioExam_JubsuCheck] = useState<Ids_ioExam_JubsuCheck[]>([]);
    const [ds_ioExamPerson, setds_ioExamPerson] = useState<Ids_ioExamPerson[]>([]);
    const [ds_ioTrainingJubsuMatching, setds_ioTrainingJubsuMatching] = useState<Ids_ioTrainingJubsuMatching[]>([]);
    const [ds_ioSettelYN, setds_ioSettelYN] = useState<Ids_ioSettelYN[]>([]);
    const [ds_ioJubsuGubun, setds_ioJubsuGubun] = useState<Ids_ioJubsuGubun[]>([]);
    const [ds_oJubsuGubunCourse, setds_oJubsuGubunCourse] = useState<Ids_oJubsuGubunCourse[]>([]);
    const [ds_oJubsuGubun, setds_oJubsuGubun] = useState<Ids_oJubsuGubun[]>([]);
    const [ds_oAddr, setds_oAddr] = useState<Ids_oAddr[]>([]);
    const [ds_ioYN, setds_ioYN] = useState<Ids_ioYN[]>([]);
    const [ds_ioJubsuGubun2, setds_ioJubsuGubun2] = useState<Ids_ioJubsuGubun2[]>([]);
    const [ds_ioChasuGubun, setds_ioChasuGubun] = useState<Ids_ioChasuGubun[]>([]);
    const [ds_oSunapRepayAmount, setds_oSunapRepayAmount] = useState<Ids_oSunapRepayAmount[]>([]);
    const [ds_ioGaJubsuGubun, setds_ioGaJubsuGubun] = useState<Ids_ioGaJubsuGubun[]>([]);
    const [ds_oExamCheat, setds_oExamCheat] = useState<Ids_oExamCheat[]>([]);
    const [ds_oLicenseCheck, setds_oLicenseCheck] = useState<Ids_oLicenseCheck[]>([]);
    const [ds_oExamOmrFile, setds_oExamOmrFile] = useState<Ids_oExamOmrFile[]>([]);
    const [ds_oMunje, setds_oMunje] = useState<Ids_oMunje[]>([]);
    const [ds_oForm, setds_oForm] = useState<Ids_oForm[]>([]);
    const [ds_iFormSave, setds_iFormSave] = useState<Ids_iFormSave[]>([]);
    const [ds_oFormSave, setds_oFormSave] = useState<Ids_oFormSave[]>([]);
    const [ds_iFormDelete, setds_iFormDelete] = useState<Ids_iFormDelete[]>([]);
    const [ds_oFormDelete, setds_oFormDelete] = useState<Ids_oFormDelete[]>([]);
    const [ds_oJubsuCheck, setds_oJubsuCheck] = useState<Ids_oJubsuCheck[]>([]);
    const [ds_oModifyTime, setds_oModifyTime] = useState<Ids_oModifyTime[]>([]);
    const [ds_ioTrainingJubsuMatchingCourse21, setds_ioTrainingJubsuMatchingCourse21] = useState<Ids_ioTrainingJubsuMatchingCourse21[]>([]);
    const [ds_oCheck, setds_oCheck] = useState<Ids_oCheck[]>([]);
    const [ds_ioGaJubsuGubun2, setds_ioGaJubsuGubun2] = useState<Ids_ioGaJubsuGubun2[]>([]);
    const [ds_examaccept_Check, setds_examaccept_Check] = useState<Ids_examaccept_Check[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(false);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(false);
    const [isVisible_edTOENDDATE, setIsVisible_edTOENDDATE] = useState(false);
    const [isVisible_edAcount, setIsVisible_edAcount] = useState(false);
    const [isVisible_Static1, setIsVisible_Static1] = useState(false);
    const [isVisible_ed1Point, setIsVisible_ed1Point] = useState(true);
    const [isVisible_radJubsuGubun2, setIsVisible_radJubsuGubun2] = useState(true);
    const [isVisible_btnApplyPicture, setIsVisible_btnApplyPicture] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_gdSetlmentHist, setIsVisible_gdSetlmentHist] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_lbExamYear, setIsVisible_lbExamYear] = useState(true);
    const [isVisible_edExamYear, setIsVisible_edExamYear] = useState(true);
    const [isVisible_lbExamOrder, setIsVisible_lbExamOrder] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edExamOrder, setIsVisible_edExamOrder] = useState(true);
    const [isVisible_lbBIRTHDAY, setIsVisible_lbBIRTHDAY] = useState(true);
    const [isVisible_lbAt, setIsVisible_lbAt] = useState(false);
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
    const [isVisible_medBIRTHDAY, setIsVisible_medBIRTHDAY] = useState(true);
    const [isVisible_cbxEmailDomain, setIsVisible_cbxEmailDomain] = useState(false);
    const [isVisible_lbEmail, setIsVisible_lbEmail] = useState(false);
    const [isVisible_edEmail, setIsVisible_edEmail] = useState(false);
    const [isVisible_btnAuthBIRTHDAY, setIsVisible_btnAuthBIRTHDAY] = useState(true);
    const [isVisible_btnExamJubsuModify, setIsVisible_btnExamJubsuModify] = useState(true);
    const [isVisible_gdJubsuInfo, setIsVisible_gdJubsuInfo] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_gdOrderHist, setIsVisible_gdOrderHist] = useState(true);
    const [isVisible_lbJubsuHist, setIsVisible_lbJubsuHist] = useState(true);
    const [isVisible_lbSetlmt, setIsVisible_lbSetlmt] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(false);
    const [isVisible_btnSeqList, setIsVisible_btnSeqList] = useState(true);
    const [isVisible_btnSearchExamOrder, setIsVisible_btnSearchExamOrder] = useState(true);
    const [isVisible_fdImage, setIsVisible_fdImage] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_btnTraingJubsuHist, setIsVisible_btnTraingJubsuHist] = useState(true);
    const [isVisible_btnChangeProcDate, setIsVisible_btnChangeProcDate] = useState(true);
    const [isVisible_btnProcRct, setIsVisible_btnProcRct] = useState(true);
    const [isVisible_btnPrintReRct, setIsVisible_btnPrintReRct] = useState(true);
    const [isVisible_btnSendSms, setIsVisible_btnSendSms] = useState(true);
    const [isVisible_btnSendEmail, setIsVisible_btnSendEmail] = useState(false);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_lbOrderChange, setIsVisible_lbOrderChange] = useState(true);
    const [isVisible_shpBox1, setIsVisible_shpBox1] = useState(true);
    const [isVisible_shpBox2, setIsVisible_shpBox2] = useState(true);
    const [isVisible_btnSmsStat, setIsVisible_btnSmsStat] = useState(true);
    const [isVisible_btnEmailStat, setIsVisible_btnEmailStat] = useState(false);
    const [isVisible_lbExamInfo, setIsVisible_lbExamInfo] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_imgLastestPicture, setIsVisible_imgLastestPicture] = useState(true);
    const [isVisible_btnSearchRegPicture, setIsVisible_btnSearchRegPicture] = useState(true);
    const [isVisible_lbExamPersonInfo, setIsVisible_lbExamPersonInfo] = useState(true);
    const [isVisible_lbJubsu, setIsVisible_lbJubsu] = useState(true);
    const [isVisible_lbExamInfo1, setIsVisible_lbExamInfo1] = useState(true);
    const [isVisible_lbExamInfo2, setIsVisible_lbExamInfo2] = useState(true);
    const [isVisible_btnUnUseJubsuNo, setIsVisible_btnUnUseJubsuNo] = useState(true);
    const [isVisible_btnLoadPicture, setIsVisible_btnLoadPicture] = useState(true);
    const [isVisible_btnLoadScanPicture, setIsVisible_btnLoadScanPicture] = useState(true);
    const [isVisible_btnPictureManagement, setIsVisible_btnPictureManagement] = useState(false);
    const [isVisible_btnShowVirtualAccount, setIsVisible_btnShowVirtualAccount] = useState(true);
    const [isVisible_btnModifyHistory, setIsVisible_btnModifyHistory] = useState(true);
    const [isVisible_fiImageFile, setIsVisible_fiImageFile] = useState(true);
    const [isVisible_lbExpYn, setIsVisible_lbExpYn] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_btnExamCheatingManageLink, setIsVisible_btnExamCheatingManageLink] = useState(true);
    const [isVisible_edPoint, setIsVisible_edPoint] = useState(true);
    const [isVisible_lbPoint, setIsVisible_lbPoint] = useState(true);
    const [isVisible_edPassYn, setIsVisible_edPassYn] = useState(true);
    const [isVisible_lbPassYn, setIsVisible_lbPassYn] = useState(true);
    const [isVisible_lbSeatNo, setIsVisible_lbSeatNo] = useState(true);
    const [isVisible_edSeatNo, setIsVisible_edSeatNo] = useState(true);
    const [isVisible_radJibuGubun, setIsVisible_radJibuGubun] = useState(true);
    const [isVisible_btnJubsuHistory, setIsVisible_btnJubsuHistory] = useState(true);
    const [isVisible_radChangeTpmgno, setIsVisible_radChangeTpmgno] = useState(false);
    const [isVisible_Edit0, setIsVisible_Edit0] = useState(false);
    const [isVisible_Button0, setIsVisible_Button0] = useState(true);
    const [isVisible_btnPosReport, setIsVisible_btnPosReport] = useState(true);
    const [isVisible_radJubsuGubun, setIsVisible_radJubsuGubun] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(false);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_radRejubsuYN, setIsVisible_radRejubsuYN] = useState(true);
    const [isVisible_lbReason, setIsVisible_lbReason] = useState(true);
    const [isVisible_edReason, setIsVisible_edReason] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_lbChasuGubun, setIsVisible_lbChasuGubun] = useState(false);
    const [isVisible_radChasuGubun, setIsVisible_radChasuGubun] = useState(true);
    const [isVisible_lb2Point, setIsVisible_lb2Point] = useState(false);
    const [isVisible_ed2Point, setIsVisible_ed2Point] = useState(false);
    const [isVisible_ed1_1Point, setIsVisible_ed1_1Point] = useState(false);
    const [isVisible_ed2_1Point, setIsVisible_ed2_1Point] = useState(false);
    const [isVisible_ed1_2Point, setIsVisible_ed1_2Point] = useState(false);
    const [isVisible_ed2_2Point, setIsVisible_ed2_2Point] = useState(false);
    const [isVisible_lb1_1subject, setIsVisible_lb1_1subject] = useState(false);
    const [isVisible_lb2_1subject, setIsVisible_lb2_1subject] = useState(false);
    const [isVisible_lb1_2subject, setIsVisible_lb1_2subject] = useState(false);
    const [isVisible_lb2_2subject, setIsVisible_lb2_2subject] = useState(false);
    const [isVisible_lb1Point, setIsVisible_lb1Point] = useState(true);
    const [isVisible_cbxGaJubsuGubun, setIsVisible_cbxGaJubsuGubun] = useState(true);
    const [isVisible_btnPrintReRctPDF, setIsVisible_btnPrintReRctPDF] = useState(true);
    const [isVisible_hfImage, setIsVisible_hfImage] = useState(true);
    const [isVisible_btnPosvath, setIsVisible_btnPosvath] = useState(true);
    const [isVisible_btnEstimate, setIsVisible_btnEstimate] = useState(true);
    const [isVisible_btnExamOmrImage, setIsVisible_btnExamOmrImage] = useState(true);
    const [isVisible_ed1PassDate, setIsVisible_ed1PassDate] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_btnScanSave, setIsVisible_btnScanSave] = useState(true);
    const [isVisible_btnLocalFormView, setIsVisible_btnLocalFormView] = useState(true);
    const [isVisible_edScanFileName, setIsVisible_edScanFileName] = useState(true);
    const [isVisible_btnScanSearch, setIsVisible_btnScanSearch] = useState(true);
    const [isVisible_btnScan, setIsVisible_btnScan] = useState(true);
    const [isVisible_btnSeverFormView, setIsVisible_btnSeverFormView] = useState(true);
    const [isVisible_edFormResult, setIsVisible_edFormResult] = useState(true);
    const [isVisible_cbxForm, setIsVisible_cbxForm] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_fdImage2, setIsVisible_fdImage2] = useState(true);
    const [isVisible_hfImage2, setIsVisible_hfImage2] = useState(true);
    const [isVisible_fiImageFile2, setIsVisible_fiImageFile2] = useState(true);
    const [isVisible_btnFormDelete, setIsVisible_btnFormDelete] = useState(false);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);
    const [isVisible_btnScanPicture, setIsVisible_btnScanPicture] = useState(true);
    const [isVisible_btnPhotoScan, setIsVisible_btnPhotoScan] = useState(true);
    const [isVisible_lb1_3subject, setIsVisible_lb1_3subject] = useState(false);
    const [isVisible_ed1_3Point, setIsVisible_ed1_3Point] = useState(false);
    const [isVisible_lbImsiEJMGNO, setIsVisible_lbImsiEJMGNO] = useState(true);
    const [isVisible_edImsiEJMGNO, setIsVisible_edImsiEJMGNO] = useState(true);
    const [isVisible_lbImsiTPMGNO, setIsVisible_lbImsiTPMGNO] = useState(true);
    const [isVisible_edImsiTPMGNO, setIsVisible_edImsiTPMGNO] = useState(true);
    const [isVisible_lbExamInfo3, setIsVisible_lbExamInfo3] = useState(true);
    const [isVisible_lbTextBlue, setIsVisible_lbTextBlue] = useState(false);
    const [isVisible_Static2, setIsVisible_Static2] = useState(false);
    const [isVisible_btnDeleteSettlement, setIsVisible_btnDeleteSettlement] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(false);
    const [isVisible_edEJJUBSUREASON2, setIsVisible_edEJJUBSUREASON2] = useState(false);
    const [isVisible_cbxGaJubsuGubun2, setIsVisible_cbxGaJubsuGubun2] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oEmailDomain([]);
            setds_oImage([]);
            setds_oRemarkGubun([]);
            setds_oExamOrderMgno([]);
            setds_oJubsuNo([]);
            setds_oSeatNo([]);
            setds_oJubsuAllInfo([]);
            setds_oOrderHist([]);
            setds_oSetlmentHist([]);
            setds_ioMenuTree([]);
            setds_oModifyColumn([]);
            setds_oExamJubsuResult([]);
            setds_oExamJubsuPrint([]);
            setds_oExamOrder([]);
            setds_ioExamJubsu([]);
            setds_oPosResult([]);
            setds_oJibuGubun([]);
            setds_oExamAdd([]);
            setds_oChangeTpmgno([]);
            setds_oTrainingPerson([]);
            setds_ioYearbizlink([]);
            setds_ioT_E_L_JubsuCheck([]);
            setds_ioExam_ReturnTpmgnoJubsuCheck([]);
            setds_ioExam_JubsuCheck([]);
            setds_ioExamPerson([]);
            setds_ioTrainingJubsuMatching([]);
            setds_ioSettelYN([]);
            setds_ioJubsuGubun([]);
            setds_oJubsuGubunCourse([]);
            setds_oJubsuGubun([]);
            setds_oAddr([]);
            setds_ioYN([]);
            setds_ioJubsuGubun2([]);
            setds_ioChasuGubun([]);
            setds_oSunapRepayAmount([]);
            setds_ioGaJubsuGubun([]);
            setds_oExamCheat([]);
            setds_oLicenseCheck([]);
            setds_oExamOmrFile([]);
            setds_oMunje([]);
            setds_oForm([]);
            setds_iFormSave([]);
            setds_oFormSave([]);
            setds_iFormDelete([]);
            setds_oFormDelete([]);
            setds_oJubsuCheck([]);
            setds_oModifyTime([]);
            setds_ioTrainingJubsuMatchingCourse21([]);
            setds_oCheck([]);
            setds_ioGaJubsuGubun2([]);
            setds_examaccept_Check([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnAuthBIRTHDAY_OnClick = () => {
        console.log('btnAuthBIRTHDAY_OnClick clicked');
    };
    const btnChangeProcDate_OnClick = () => {
        console.log('btnChangeProcDate_OnClick clicked');
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
    const btnExamCheatingManageLink_OnClick = () => {
        console.log('btnExamCheatingManageLink_OnClick clicked');
    };
    const btnExamJubsuModify_OnClick = () => {
        console.log('btnExamJubsuModify_OnClick clicked');
    };
    const btnExamOmrImage_OnClick = () => {
        console.log('btnExamOmrImage_OnClick clicked');
    };
    const btnFormDelete_OnClick = () => {
        console.log('btnFormDelete_OnClick clicked');
    };
    const btnJubsuHistory_OnClick = () => {
        console.log('btnJubsuHistory_OnClick clicked');
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
    const btnPrintEstimate_OnClick = () => {
        console.log('btnPrintEstimate_OnClick clicked');
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
    const btnSearchExamOrder_OnClick = () => {
        console.log('btnSearchExamOrder_OnClick clicked');
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
    const btnTraingJubsuHist_OnClick = () => {
        console.log('btnTraingJubsuHist_OnClick clicked');
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
        ds_oJibu,
        ds_oCourse,
        ds_oEmailDomain,
        ds_oImage,
        ds_oRemarkGubun,
        ds_oExamOrderMgno,
        ds_oJubsuNo,
        ds_oSeatNo,
        ds_oJubsuAllInfo,
        ds_oOrderHist,
        ds_oSetlmentHist,
        ds_ioMenuTree,
        ds_oModifyColumn,
        ds_oExamJubsuResult,
        ds_oExamJubsuPrint,
        ds_oExamOrder,
        ds_ioExamJubsu,
        ds_oPosResult,
        ds_oJibuGubun,
        ds_oExamAdd,
        ds_oChangeTpmgno,
        ds_oTrainingPerson,
        ds_ioYearbizlink,
        ds_ioT_E_L_JubsuCheck,
        ds_ioExam_ReturnTpmgnoJubsuCheck,
        ds_ioExam_JubsuCheck,
        ds_ioExamPerson,
        ds_ioTrainingJubsuMatching,
        ds_ioSettelYN,
        ds_ioJubsuGubun,
        ds_oJubsuGubunCourse,
        ds_oJubsuGubun,
        ds_oAddr,
        ds_ioYN,
        ds_ioJubsuGubun2,
        ds_ioChasuGubun,
        ds_oSunapRepayAmount,
        ds_ioGaJubsuGubun,
        ds_oExamCheat,
        ds_oLicenseCheck,
        ds_oExamOmrFile,
        ds_oMunje,
        ds_oForm,
        ds_iFormSave,
        ds_oFormSave,
        ds_iFormDelete,
        ds_oFormDelete,
        ds_oJubsuCheck,
        ds_oModifyTime,
        ds_ioTrainingJubsuMatchingCourse21,
        ds_oCheck,
        ds_ioGaJubsuGubun2,
        ds_examaccept_Check,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_edTOENDDATE,
        setIsVisible_edTOENDDATE,
        isVisible_edAcount,
        setIsVisible_edAcount,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_ed1Point,
        setIsVisible_ed1Point,
        isVisible_radJubsuGubun2,
        setIsVisible_radJubsuGubun2,
        isVisible_btnApplyPicture,
        setIsVisible_btnApplyPicture,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
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
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
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
        isVisible_lbExamYear,
        setIsVisible_lbExamYear,
        isVisible_edExamYear,
        setIsVisible_edExamYear,
        isVisible_lbExamOrder,
        setIsVisible_lbExamOrder,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edExamOrder,
        setIsVisible_edExamOrder,
        isVisible_lbBIRTHDAY,
        setIsVisible_lbBIRTHDAY,
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
        isVisible_medBIRTHDAY,
        setIsVisible_medBIRTHDAY,
        isVisible_cbxEmailDomain,
        setIsVisible_cbxEmailDomain,
        isVisible_lbEmail,
        setIsVisible_lbEmail,
        isVisible_edEmail,
        setIsVisible_edEmail,
        isVisible_btnAuthBIRTHDAY,
        setIsVisible_btnAuthBIRTHDAY,
        isVisible_btnExamJubsuModify,
        setIsVisible_btnExamJubsuModify,
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
        isVisible_btnSearchExamOrder,
        setIsVisible_btnSearchExamOrder,
        isVisible_fdImage,
        setIsVisible_fdImage,
        isVisible_radCourse,
        setIsVisible_radCourse,
        isVisible_btnTraingJubsuHist,
        setIsVisible_btnTraingJubsuHist,
        isVisible_btnChangeProcDate,
        setIsVisible_btnChangeProcDate,
        isVisible_btnProcRct,
        setIsVisible_btnProcRct,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_btnSendSms,
        setIsVisible_btnSendSms,
        isVisible_btnSendEmail,
        setIsVisible_btnSendEmail,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
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
        isVisible_lbExamInfo,
        setIsVisible_lbExamInfo,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_imgLastestPicture,
        setIsVisible_imgLastestPicture,
        isVisible_btnSearchRegPicture,
        setIsVisible_btnSearchRegPicture,
        isVisible_lbExamPersonInfo,
        setIsVisible_lbExamPersonInfo,
        isVisible_lbJubsu,
        setIsVisible_lbJubsu,
        isVisible_lbExamInfo1,
        setIsVisible_lbExamInfo1,
        isVisible_lbExamInfo2,
        setIsVisible_lbExamInfo2,
        isVisible_btnUnUseJubsuNo,
        setIsVisible_btnUnUseJubsuNo,
        isVisible_btnLoadPicture,
        setIsVisible_btnLoadPicture,
        isVisible_btnLoadScanPicture,
        setIsVisible_btnLoadScanPicture,
        isVisible_btnPictureManagement,
        setIsVisible_btnPictureManagement,
        isVisible_btnShowVirtualAccount,
        setIsVisible_btnShowVirtualAccount,
        isVisible_btnModifyHistory,
        setIsVisible_btnModifyHistory,
        isVisible_fiImageFile,
        setIsVisible_fiImageFile,
        isVisible_lbExpYn,
        setIsVisible_lbExpYn,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnExamCheatingManageLink,
        setIsVisible_btnExamCheatingManageLink,
        isVisible_edPoint,
        setIsVisible_edPoint,
        isVisible_lbPoint,
        setIsVisible_lbPoint,
        isVisible_edPassYn,
        setIsVisible_edPassYn,
        isVisible_lbPassYn,
        setIsVisible_lbPassYn,
        isVisible_lbSeatNo,
        setIsVisible_lbSeatNo,
        isVisible_edSeatNo,
        setIsVisible_edSeatNo,
        isVisible_radJibuGubun,
        setIsVisible_radJibuGubun,
        isVisible_btnJubsuHistory,
        setIsVisible_btnJubsuHistory,
        isVisible_radChangeTpmgno,
        setIsVisible_radChangeTpmgno,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnPosReport,
        setIsVisible_btnPosReport,
        isVisible_radJubsuGubun,
        setIsVisible_radJubsuGubun,
        isVisible_cbxAddrGubun,
        setIsVisible_cbxAddrGubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_radRejubsuYN,
        setIsVisible_radRejubsuYN,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_cbxCourse,
        setIsVisible_cbxCourse,
        isVisible_lbChasuGubun,
        setIsVisible_lbChasuGubun,
        isVisible_radChasuGubun,
        setIsVisible_radChasuGubun,
        isVisible_lb2Point,
        setIsVisible_lb2Point,
        isVisible_ed2Point,
        setIsVisible_ed2Point,
        isVisible_ed1_1Point,
        setIsVisible_ed1_1Point,
        isVisible_ed2_1Point,
        setIsVisible_ed2_1Point,
        isVisible_ed1_2Point,
        setIsVisible_ed1_2Point,
        isVisible_ed2_2Point,
        setIsVisible_ed2_2Point,
        isVisible_lb1_1subject,
        setIsVisible_lb1_1subject,
        isVisible_lb2_1subject,
        setIsVisible_lb2_1subject,
        isVisible_lb1_2subject,
        setIsVisible_lb1_2subject,
        isVisible_lb2_2subject,
        setIsVisible_lb2_2subject,
        isVisible_lb1Point,
        setIsVisible_lb1Point,
        isVisible_cbxGaJubsuGubun,
        setIsVisible_cbxGaJubsuGubun,
        isVisible_btnPrintReRctPDF,
        setIsVisible_btnPrintReRctPDF,
        isVisible_hfImage,
        setIsVisible_hfImage,
        isVisible_btnPosvath,
        setIsVisible_btnPosvath,
        isVisible_btnEstimate,
        setIsVisible_btnEstimate,
        isVisible_btnExamOmrImage,
        setIsVisible_btnExamOmrImage,
        isVisible_ed1PassDate,
        setIsVisible_ed1PassDate,
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
        isVisible_btnScanPicture,
        setIsVisible_btnScanPicture,
        isVisible_btnPhotoScan,
        setIsVisible_btnPhotoScan,
        isVisible_lb1_3subject,
        setIsVisible_lb1_3subject,
        isVisible_ed1_3Point,
        setIsVisible_ed1_3Point,
        isVisible_lbImsiEJMGNO,
        setIsVisible_lbImsiEJMGNO,
        isVisible_edImsiEJMGNO,
        setIsVisible_edImsiEJMGNO,
        isVisible_lbImsiTPMGNO,
        setIsVisible_lbImsiTPMGNO,
        isVisible_edImsiTPMGNO,
        setIsVisible_edImsiTPMGNO,
        isVisible_lbExamInfo3,
        setIsVisible_lbExamInfo3,
        isVisible_lbTextBlue,
        setIsVisible_lbTextBlue,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_btnDeleteSettlement,
        setIsVisible_btnDeleteSettlement,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_edEJJUBSUREASON2,
        setIsVisible_edEJJUBSUREASON2,
        isVisible_cbxGaJubsuGubun2,
        setIsVisible_cbxGaJubsuGubun2,
        btnApplyPicture_OnClick,
        btnAuthBIRTHDAY_OnClick,
        btnChangeProcDate_OnClick,
        btnDeleteSettlement_OnClick,
        btnEmailStat_OnClick,
        btnEstimate_OnClick,
        btnExamCheatingManageLink_OnClick,
        btnExamJubsuModify_OnClick,
        btnExamOmrImage_OnClick,
        btnFormDelete_OnClick,
        btnJubsuHistory_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnLocalFormView_OnClick,
        btnModifyHistory_OnClick,
        btnPhotoScan_OnClick,
        btnPictureManagement_OnClick,
        btnPosReport_OnClick,
        btnPrintEstimate_OnClick,
        btnPrintReRctPDF_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnScanPicture_OnClick,
        btnScanSave_OnClick,
        btnScanSearch_OnClick,
        btnScan_OnClick,
        btnSearchExamOrder_OnClick,
        btnSearchPersonInfoChange_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchZipCode_OnClick,
        btnSendEmail_OnClick,
        btnSendSms_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
        btnSeverFormView_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSmsStat_OnClick,
        btnTraingJubsuHist_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
        lfn_SearchUnUseJubsuNo,
    };
};