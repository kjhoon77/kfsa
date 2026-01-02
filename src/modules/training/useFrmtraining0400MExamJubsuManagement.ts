// @ts-nocheck
import { useState, useEffect } from 'react';

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

export interface Ids_oExamOrderMgno {
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
    EOMGNO: string;
    EORDER: string;
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
    EOHSEQ: string;
}

export interface Ids_oSetlmentHist {
    ESSETLMTYN: string;
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

export interface Ids_oExamJubsuResult {
}

export interface Ids_oExamJubsuPrint {
}

export interface Ids_oExamOrder {
}

export interface Ids_ioExamJubsu {
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
    LASTEJHSEQ: string;
    LASTEOHSEQ: string;
    LASTESSEQ: string;
    MGJIBUCD: string;
    MGJIBUNICK: string;
    MGJIBUNM: string;
    MUNJEGUBUN: string;
    PASSYN: string;
    PERSONNM: string;
    REMARK: string;
    REMARKCD: string;
    BIRTHDAY: string;
    TEL: string;
    EJMGNO: string;
    TPMGNO: string;
    EOMGNO: string;
    EORDER: string;
    YEAR: string;
    ZIPCD: string;
    EJEXPYN: string;
    IIIMGBINARY: string;
    EJJUBSUGUBUN: string;
    EJADDRGUBUN: string;
    EJRPNUCD: string;
    EJRROADBUILDMGNO: string;
    EJRROADDETAIL: string;
    EJRROADREMAIN: string;
    EJRSANGUBUN: string;
    EJRMAINBUNJI: string;
    EJRSUBBUNJI: string;
    EJRBUILDNM: string;
    EJRADDRETC: string;
    EJRCONVPGM: string;
    EJRCONVSTATUS: string;
    amlml: string;
    EJREJUBSUYN: string;
    EJCHASUGUBUN: string;
    GAJUBSUGUBUN: string;
    PERSONKEY: string;
    DI: string;
    CI: string;
    CIVER: string;
    BIRTHDAY7: string;
    EOONLINEGUBUN: string;
    EXAMEVALYN: string;
    EERSCORE: string;
    EJJUBSUREMARK: string;
    EJJUBSUREASON2: string;
    EJJUBSUGUBUN2: string;
    EJJUBSUREASON: string;
    PRNO: string;
}

export interface Ids_oPosResult {
}

export interface Ids_oJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oExamAdd {
}

export interface Ids_oChangeTpmgno {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingPerson {
}

export interface Ids_ioYearbizlink {
}

export interface Ids_ioT_E_L_JubsuCheck {
}

export interface Ids_ioExam_ReturnTpmgnoJubsuCheck {
}

export interface Ids_ioExam_JubsuCheck {
}

export interface Ids_ioExamPerson {
}

export interface Ids_ioTrainingJubsuMatching {
}

export interface Ids_ioSettelYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioJubsuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuGubunCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuGubun {
    EOMGGTMGNO: string;
    GTTEAMNM: string;
    EOTCCOURSECD: string;
    ORDERSERL: string;
    EJJUBSUGUBUN: string;
    TCCOURSENM: string;
    EOYEAR: string;
    EJJUBSUREASON: string;
    EJREJUBSUYN: string;
    EJCHASUGUBUN: string;
    EJPASSYN: string;
    EJAGENCYYN: string;
}

export interface Ids_oAddr {
    CD: string;
    DATA: string;
}

export interface Ids_ioYN {
    CD: string;
    DATA: string;
}

export interface Ids_ioJubsuGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_ioChasuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapRepayAmount {
    FECFEE: string;
    ESPROCAMOUNT: string;
    AFTERAMOUNT: string;
}

export interface Ids_ioGaJubsuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oExamCheat {
}

export interface Ids_oLicenseCheck {
}

export interface Ids_oExamOmrFile {
    AFEJMGNO: string;
    AFFILENM: string;
    AFPATH: string;
    AFREGDATE: string;
    AFREGSABUN: string;
    AFSEQ: string;
}

export interface Ids_oMunje {
}

export interface Ids_oForm {
    CD: string;
    DATA: string;
}

export interface Ids_iFormSave {
    I_PROC: string;
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_FRDATE: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormSave {
}

export interface Ids_iFormDelete {
    I_FCCD: string;
    I_FAMGNO: string;
    I_PK1VAL: string;
    I_PK2VAL: string;
    I_PATH: string;
    I_FILENM: string;
}

export interface Ids_oFormDelete {
}

export interface Ids_oJubsuCheck {
}

export interface Ids_oModifyTime {
}

export interface Ids_ioTrainingJubsuMatchingCourse21 {
}

export interface Ids_oCheck {
}

export interface Ids_ioGaJubsuGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_examaccept_Check {
}

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