// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingJubsu {
    ABSENTDAY: string;
    ABSENTYN: string;
    ADDR1: string;
    ADDR2: string;
    AUTHYN: string;
    BARCODE: string;
    COMPNM: string;
    COURSECD: string;
    COURSEMUNJECD: string;
    COURSENM: string;
    DECISIONSEATNO: string;
    EMAILDOMAIN: string;
    EMAILID: string;
    HPTEL: string;
    IIDIRPATH: string;
    IIIMGSEQ: string;
    IIREALNM: string;
    IISAVENM: string;
    JUBSUNO: string;
    LASTIMGSEQ: string;
    LASTSUNAPGUBUN: string;
    LASTTJHSEQ: string;
    LASTTOHSEQ: string;
    LASTTSSEQ: string;
    MGJIBUCD: string;
    MGJIBUNICK: string;
    MGJIBUNM: string;
    MUNJEGUBUN: string;
    PASSYN: string;
    PERSONNM: string;
    REMARK: string;
    REMARKCD: string;
    RESIDENTNO: string;
    TEL: string;
    TJMGNO: string;
    TPMGNO: string;
    TOMGNO: string;
    TORDER: string;
    YEAR: string;
    ZIPCD: string;
    IIIMGBINARY: string;
    TJFIREMANYN: string;
    TJADDRGUBUN: string;
    TJRPNUCD: string;
    TJRROADBUILDMGNO: string;
    TJRROADDETAIL: string;
    TJRROADREMAIN: string;
    TJRSANGUBUN: string;
    TJRMAINBUNJI: string;
    TJRSUBBUNJI: string;
    TJRBUILDNM: string;
    TJRADDRETC: string;
    TJRCONVPGM: string;
    TJRCONVSTATUS: string;
    TJMEMAGREEGUBUN: string;
    TJAMOUNTGUBUN: string;
    EVALYN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oEmailDomain {
    CD: string;
    DATA: string;
}

export interface Ids_oImage {
    FILE_NAME: string;
    SHORT_FILE_NAME: string;
    FILE_SIZE: string;
    CREATE_DATE: string;
    UPDATE_DATE: string;
    ACCESS_DATE: string;
    ATTR_ARCHIVE: string;
    ATTR_SYSTEM: string;
    ATTR_HIDDEN: string;
    ATTR_READONLY: string;
    ATTR_DIRECTORY: string;
}

export interface Ids_oRemarkGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingOrderMgno {
}

export interface Ids_oJubsuNo {
}

export interface Ids_oSeatNo {
}

export interface Ids_oJubsuAllInfo {
    COURSECD: string;
    COURSEMUNJECD: string;
    JUBSUNO: string;
    LASTSUNAPGUBUN: string;
    MGJIBUCD: string;
    PASSDATE: string;
    TJMGNO: string;
    TJPASSYN: string;
    TOMGNO: string;
    TORDER: string;
    YEAR: string;
}

export interface Ids_oOrderHist {
    ABSENTYN: string;
    AFTERJIBU: string;
    AFTERJUBSUNO: string;
    AFTERMGNO: string;
    AFTERORDER: string;
    BEFORJIBU: string;
    BEFORJUBSUNO: string;
    BEFORMGNO: string;
    BEFORORDER: string;
    LASTSUNAPGUBUN: string;
    TJLASTSUNAPGUBUN: string;
    TJMGNO: string;
    TOHSEQ: string;
    BEFORTOTCCOURSECD: string;
    BEFORTOMUNJEGUBUN: string;
}

export interface Ids_oSetlmentHist {
}

export interface Ids_ioMenuTree {
    MORDERSEQ: string;
    MMENUID: string;
    MENULEVEL: string;
    MPARENTMENUID: string;
    MMENUNM: string;
    USE_YN: string;
    MURL: string;
    MREMARK: string;
    MURLTYPE: string;
    MSYSGUBUN: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD: string;
    COLUMNNM: string;
}

export interface Ids_oTrainingJubsuResult {
}

export interface Ids_oTrainingJubsuPrint {
}

export interface Ids_oTrainingOrder {
}

export interface Ids_oPosResult {
}

export interface Ids_oTrainingJubsuPrint1 {
}

export interface Ids_oTrainingJubsuPrint2 {
}

export interface Ids_oTrainingJubsuPrint3 {
}

export interface Ids_oTrainingCheck {
}

export interface Ids_oJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingPearson {
}

export interface Ids_oChangeTpmgno {
    CD: string;
    DATA: string;
}

export interface Ids_ioYearbizlink {
}

export interface Ids_ioT_E_L_JubsuCheck {
}

export interface Ids_ioTraing_JubsuCheck {
}

export interface Ids_ioTraing_ReturnTpmgnoJubsuCheck {
}

export interface Ids_ioTrainingPerson {
}

export interface Ids_ioSettelYN {
    CD: string;
    DATA: string;
}

export interface Ids_oEducationNo {
}

export interface Ids_ioControl {
    No: string;
}

export interface Ids_ioTraingSeatNoCheck {
}

export interface Ids_oSiteMember {
}

export interface Ids_oCyberLearning {
    CLPROGRESSPCT: string;
    CLPROGRESSSCORE: string;
    CLEXAMSCORE: string;
    CLHOMEWORKSCORE: string;
    CLDISCUSSSCORE: string;
    CLPASSSCORE: string;
    CLTJMGNO: string;
    CPPASSSTATUS: string;
}

export interface Ids_oCyberPass {
    CPPROGRESSPCT: string;
    CPPASSSCORE: string;
    CPPASSSTATUS: string;
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_oYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioManager {
    MMGNO: string;
    FMLASTFMHSEQ: string;
    FMRESIDENTERR: string;
}

export interface Ids_oMemberStatus {
}

export interface Ids_oDeleteSettlement {
}

export interface Ids_oAmountGubun {
    CD: string;
    DATA: string;
}

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