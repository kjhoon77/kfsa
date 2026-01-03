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
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnInput, setIsVisible_btnInput] = useState(true);
    const [isVisible_btnDelete, setIsVisible_btnDelete] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edSPersonnm, setIsVisible_edSPersonnm] = useState(true);
    const [isVisible_gdProfessor, setIsVisible_gdProfessor] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_cldFromdt, setIsVisible_cldFromdt] = useState(true);
    const [isVisible_lbDateWave1, setIsVisible_lbDateWave1] = useState(true);
    const [isVisible_cldTodt, setIsVisible_cldTodt] = useState(true);
    const [isVisible_lbCourse, setIsVisible_lbCourse] = useState(true);
    const [isVisible_cbxStatus, setIsVisible_cbxStatus] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_cbxJubsuGubun, setIsVisible_cbxJubsuGubun] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_edfileNm, setIsVisible_edfileNm] = useState(true);
    const [isVisible_btnDownload, setIsVisible_btnDownload] = useState(true);
    const [isVisible_lbJubsu, setIsVisible_lbJubsu] = useState(true);
    const [isVisible_edStatus, setIsVisible_edStatus] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_lbModetest, setIsVisible_lbModetest] = useState(true);
    const [isVisible_edFormResult, setIsVisible_edFormResult] = useState(true);
    const [isVisible_btnSeverFormView, setIsVisible_btnSeverFormView] = useState(true);
    const [isVisible_btnScan, setIsVisible_btnScan] = useState(true);
    const [isVisible_btnScanSearch, setIsVisible_btnScanSearch] = useState(true);
    const [isVisible_edScanFileName, setIsVisible_edScanFileName] = useState(true);
    const [isVisible_btnLocalFormView, setIsVisible_btnLocalFormView] = useState(true);
    const [isVisible_btnScanSave, setIsVisible_btnScanSave] = useState(true);
    const [isVisible_btnFormDelete, setIsVisible_btnFormDelete] = useState(false);
    const [isVisible_btnApprove, setIsVisible_btnApprove] = useState(true);
    const [isVisible_btnReject, setIsVisible_btnReject] = useState(true);
    const [isVisible_btnJubsu, setIsVisible_btnJubsu] = useState(true);
    const [isVisible_btnMod, setIsVisible_btnMod] = useState(true);
    const [isVisible_btn_Cancell, setIsVisible_btn_Cancell] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_cbxCourse, setIsVisible_cbxCourse] = useState(true);
    const [isVisible_btnApplyPicture, setIsVisible_btnApplyPicture] = useState(false);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_lbBIRTHDAY, setIsVisible_lbBIRTHDAY] = useState(true);
    const [isVisible_btnSearchPersonInfo, setIsVisible_btnSearchPersonInfo] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbAddr, setIsVisible_lbAddr] = useState(true);
    const [isVisible_medZipCode, setIsVisible_medZipCode] = useState(true);
    const [isVisible_btnSearchZipCode, setIsVisible_btnSearchZipCode] = useState(true);
    const [isVisible_edAddr1, setIsVisible_edAddr1] = useState(true);
    const [isVisible_edAddr2, setIsVisible_edAddr2] = useState(true);
    const [isVisible_lbTel, setIsVisible_lbTel] = useState(true);
    const [isVisible_edTel, setIsVisible_edTel] = useState(true);
    const [isVisible_lbHpTel, setIsVisible_lbHpTel] = useState(true);
    const [isVisible_medBIRTHDAY, setIsVisible_medBIRTHDAY] = useState(true);
    const [isVisible_btnAuthBIRTHDAY, setIsVisible_btnAuthBIRTHDAY] = useState(true);
    const [isVisible_btnSearchRegPicture, setIsVisible_btnSearchRegPicture] = useState(true);
    const [isVisible_lbExamPersonInfo, setIsVisible_lbExamPersonInfo] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_medPersonKey, setIsVisible_medPersonKey] = useState(true);
    const [isVisible_btnScanPicture, setIsVisible_btnScanPicture] = useState(true);
    const [isVisible_btnPhotoScan, setIsVisible_btnPhotoScan] = useState(true);
    const [isVisible_btnLoadScanPicture, setIsVisible_btnLoadScanPicture] = useState(true);
    const [isVisible_btnLoadPicture, setIsVisible_btnLoadPicture] = useState(true);
    const [isVisible_radChangeTpmgno, setIsVisible_radChangeTpmgno] = useState(false);
    const [isVisible_lbImsiEATPMGNO, setIsVisible_lbImsiEATPMGNO] = useState(true);
    const [isVisible_edImsiEATPMGNO, setIsVisible_edImsiEATPMGNO] = useState(true);
    const [isVisible_lbImsiEAMGNO, setIsVisible_lbImsiEAMGNO] = useState(true);
    const [isVisible_edImsiEAMGNO, setIsVisible_edImsiEAMGNO] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_cldEADATE, setIsVisible_cldEADATE] = useState(true);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_cbxJubsugubunCheck, setIsVisible_cbxJubsugubunCheck] = useState(true);
    const [isVisible_Static11, setIsVisible_Static11] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_cbxKemsOnline, setIsVisible_cbxKemsOnline] = useState(true);
    const [isVisible_fdImage2, setIsVisible_fdImage2] = useState(true);
    const [isVisible_hfImage2, setIsVisible_hfImage2] = useState(true);
    const [isVisible_fiImageFile2, setIsVisible_fiImageFile2] = useState(true);
    const [isVisible_Static13, setIsVisible_Static13] = useState(true);
    const [isVisible_cbx_jibu, setIsVisible_cbx_jibu] = useState(true);
    const [isVisible_cbxAddrGubun, setIsVisible_cbxAddrGubun] = useState(false);
    const [isVisible_stfilePath, setIsVisible_stfilePath] = useState(true);
    const [isVisible_edfilePath, setIsVisible_edfilePath] = useState(true);
    const [isVisible_btnPrintAll, setIsVisible_btnPrintAll] = useState(true);
    const [isVisible_cbxForm, setIsVisible_cbxForm] = useState(true);
    const [isVisible_btCanCell, setIsVisible_btCanCell] = useState(true);
    const [isVisible_btConfirmCancell, setIsVisible_btConfirmCancell] = useState(true);
    const [isVisible_btnRemark, setIsVisible_btnRemark] = useState(true);
    const [isVisible_fiImageFile, setIsVisible_fiImageFile] = useState(true);
    const [isVisible_fdImage, setIsVisible_fdImage] = useState(true);
    const [isVisible_hfImage, setIsVisible_hfImage] = useState(true);
    const [isVisible_imgLastestPicture, setIsVisible_imgLastestPicture] = useState(true);
    const [isVisible_imgPicture, setIsVisible_imgPicture] = useState(true);
    const [isVisible_edCheckCount, setIsVisible_edCheckCount] = useState(false);
    const [isVisible_Button0, setIsVisible_Button0] = useState(true);
    const [isVisible_edHpTel, setIsVisible_edHpTel] = useState(true);
    const [isVisible_btnImageZoom, setIsVisible_btnImageZoom] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_Static14, setIsVisible_Static14] = useState(true);
    const [isVisible_btn_masterSave, setIsVisible_btn_masterSave] = useState(false);
    const [isVisible_lbAbsentCnt, setIsVisible_lbAbsentCnt] = useState(true);
    const [isVisible_medSearchCnt, setIsVisible_medSearchCnt] = useState(true);
    const [isVisible_Static15, setIsVisible_Static15] = useState(true);
    const [isVisible_medCheckCnt, setIsVisible_medCheckCnt] = useState(true);

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