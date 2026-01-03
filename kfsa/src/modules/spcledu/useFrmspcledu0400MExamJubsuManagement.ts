// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_oEmailDomain, Ids_oImage, Ids_oRemarkGubun, Ids_oExamOrderMgno, Ids_oJubsuNo, Ids_oSeatNo, Ids_oJubsuAllInfo, Ids_oOrderHist, Ids_oSetlmentHist, Ids_ioMenuTree, Ids_oModifyColumn, Ids_oExamJubsuResult, Ids_oExamJubsuPrint, Ids_oExamOrder, Ids_ioExamJubsu, Ids_oPosResult, Ids_oJibuGubun, Ids_oExamAdd, Ids_oChangeTpmgno, Ids_oTrainingPerson, Ids_ioYearbizlink, Ids_ioT_E_L_JubsuCheck, Ids_ioExam_ReturnTpmgnoJubsuCheck, Ids_ioExam_JubsuCheck, Ids_ioExamPerson, Ids_ioTrainingJubsuMatching, Ids_ioSettelYN } from './Frmspcledu0400MExamJubsuManagementData';

export const useFrmspcledu0400MExamJubsuManagement = () => {
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
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
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
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
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
    const [isVisible_btnExamJubsuModify, setIsVisible_btnExamJubsuModify] = useState(true);
    const [isVisible_gdJubsuInfo, setIsVisible_gdJubsuInfo] = useState(true);
    const [isVisible_lbJubsuInfo, setIsVisible_lbJubsuInfo] = useState(true);
    const [isVisible_gdOrderHist, setIsVisible_gdOrderHist] = useState(true);
    const [isVisible_lbJubsuHist, setIsVisible_lbJubsuHist] = useState(true);
    const [isVisible_lbSetlmt, setIsVisible_lbSetlmt] = useState(true);
    const [isVisible_edEmailDomain, setIsVisible_edEmailDomain] = useState(true);
    const [isVisible_btnSeqList, setIsVisible_btnSeqList] = useState(true);
    const [isVisible_btnSearchExamOrder, setIsVisible_btnSearchExamOrder] = useState(true);
    const [isVisible_fdImage, setIsVisible_fdImage] = useState(true);
    const [isVisible_hfImage, setIsVisible_hfImage] = useState(true);
    const [isVisible_radCourse, setIsVisible_radCourse] = useState(true);
    const [isVisible_btnTraingJubsuHist, setIsVisible_btnTraingJubsuHist] = useState(true);
    const [isVisible_btnChangeProcDate, setIsVisible_btnChangeProcDate] = useState(true);
    const [isVisible_btnProcRct, setIsVisible_btnProcRct] = useState(true);
    const [isVisible_btnPrintReRct, setIsVisible_btnPrintReRct] = useState(true);
    const [isVisible_btnSendSms, setIsVisible_btnSendSms] = useState(true);
    const [isVisible_btnSendEmail, setIsVisible_btnSendEmail] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_lbOrderChange, setIsVisible_lbOrderChange] = useState(true);
    const [isVisible_shpBox1, setIsVisible_shpBox1] = useState(true);
    const [isVisible_shpBox2, setIsVisible_shpBox2] = useState(true);
    const [isVisible_btnSmsStat, setIsVisible_btnSmsStat] = useState(true);
    const [isVisible_btnEmailStat, setIsVisible_btnEmailStat] = useState(true);
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
    const [isVisible_btnScanPicture, setIsVisible_btnScanPicture] = useState(true);
    const [isVisible_btnPictureManagement, setIsVisible_btnPictureManagement] = useState(true);
    const [isVisible_btnShowVirtualAccount, setIsVisible_btnShowVirtualAccount] = useState(true);
    const [isVisible_btnModifyHistory, setIsVisible_btnModifyHistory] = useState(true);
    const [isVisible_fiImageFile, setIsVisible_fiImageFile] = useState(true);
    const [isVisible_lbExpYn, setIsVisible_lbExpYn] = useState(true);
    const [isVisible_chkExpYn, setIsVisible_chkExpYn] = useState(true);
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
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApplyPicture_OnClick = () => {
        console.log('btnApplyPicture_OnClick clicked');
    };
    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const btnChangeProcDate_OnClick = () => {
        console.log('btnChangeProcDate_OnClick clicked');
    };
    const btnEmailStat_OnClick = () => {
        console.log('btnEmailStat_OnClick clicked');
    };
    const btnExamCheatingManageLink_OnClick = () => {
        console.log('btnExamCheatingManageLink_OnClick clicked');
    };
    const btnExamJubsuModify_OnClick = () => {
        console.log('btnExamJubsuModify_OnClick clicked');
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
    const btnModifyHistory_OnClick = () => {
        console.log('btnModifyHistory_OnClick clicked');
    };
    const btnPictureManagement_OnClick = () => {
        console.log('btnPictureManagement_OnClick clicked');
    };
    const btnPosReport_OnClick = () => {
        console.log('btnPosReport_OnClick clicked');
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
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
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
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
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
        isVisible_hfImage,
        setIsVisible_hfImage,
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
        isVisible_btnScanPicture,
        setIsVisible_btnScanPicture,
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
        isVisible_chkExpYn,
        setIsVisible_chkExpYn,
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
        btnApplyPicture_OnClick,
        btnAuthResidentNo_OnClick,
        btnChangeProcDate_OnClick,
        btnEmailStat_OnClick,
        btnExamCheatingManageLink_OnClick,
        btnExamJubsuModify_OnClick,
        btnJubsuHistory_OnClick,
        btnLoadPicture_OnClick,
        btnLoadScanPicture_OnClick,
        btnModifyHistory_OnClick,
        btnPictureManagement_OnClick,
        btnPosReport_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnScanPicture_OnClick,
        btnSearchExamOrder_OnClick,
        btnSearchPersonInfoChange_OnClick,
        btnSearchPersonInfo_OnClick,
        btnSearchRegPicture_OnClick,
        btnSearchZipCode_OnClick,
        btnSendEmail_OnClick,
        btnSendSms_OnClick,
        btnSeqList_OnClick,
        btnSetlmt_OnClick,
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