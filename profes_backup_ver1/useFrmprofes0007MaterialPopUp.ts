// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_TecProg, Ids_Movie, Ids_MISTEACHINGPLAN, Ids_Appr_insert, Igds_iModifyTecPlanH, Ids_oPersonInfo } from './Frmprofes0007MaterialPopUpData';

export const useFrmprofes0007MaterialPopUp = () => {
    const [ds_TecProg, setds_TecProg] = useState<Ids_TecProg[]>([]);
    const [ds_Movie, setds_Movie] = useState<Ids_Movie[]>([]);
    const [ds_MISTEACHINGPLAN, setds_MISTEACHINGPLAN] = useState<Ids_MISTEACHINGPLAN[]>([]);
    const [ds_Appr_insert, setds_Appr_insert] = useState<Ids_Appr_insert[]>([]);
    const [gds_iModifyTecPlanH, setgds_iModifyTecPlanH] = useState<Igds_iModifyTecPlanH[]>([]);
    const [ds_oPersonInfo, setds_oPersonInfo] = useState<Ids_oPersonInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(false);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(false);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edTPEDUTIME, setRawVisible_edTPEDUTIME] = useState(true);
    const [rawVisible_edNAME_DETAIL, setRawVisible_edNAME_DETAIL] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_taTPGOAL, setRawVisible_taTPGOAL] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_taTPPLAN, setRawVisible_taTPPLAN] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_taTPDATA, setRawVisible_taTPDATA] = useState(true);
    const [rawVisible_taTPCONTENT, setRawVisible_taTPCONTENT] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_taTPETC, setRawVisible_taTPETC] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_edTPEDUGUBUNNM, setRawVisible_edTPEDUGUBUNNM] = useState(true);
    const [rawVisible_edTPSUBJECTNM, setRawVisible_edTPSUBJECTNM] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_Static11, setRawVisible_Static11] = useState(true);
    const [rawVisible_edTPNO, setRawVisible_edTPNO] = useState(true);
    const [rawVisible_edTPREQDATE, setRawVisible_edTPREQDATE] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edTPUSEDATE, setRawVisible_edTPUSEDATE] = useState(true);
    const [rawVisible_Static14, setRawVisible_Static14] = useState(true);
    const [rawVisible_edTPCOURSNM, setRawVisible_edTPCOURSNM] = useState(true);
    const [rawVisible_edTPMGNO, setRawVisible_edTPMGNO] = useState(false);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_edTPYEAR, setRawVisible_edTPYEAR] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_Static16, setRawVisible_Static16] = useState(true);
    const [rawVisible_Static17, setRawVisible_Static17] = useState(true);
    const [rawVisible_Static18, setRawVisible_Static18] = useState(true);
    const [rawVisible_edTPSEQ, setRawVisible_edTPSEQ] = useState(true);
    const [rawVisible_gdMovie, setRawVisible_gdMovie] = useState(true);
    const [rawVisible_Static25, setRawVisible_Static25] = useState(true);
    const [rawVisible_btnCreate, setRawVisible_btnCreate] = useState(true);
    const [rawVisible_btn_appr, setRawVisible_btn_appr] = useState(true);
    const [rawVisible_btn_Approval, setRawVisible_btn_Approval] = useState(true);
    const [rawVisible_edTPOKDATE, setRawVisible_edTPOKDATE] = useState(true);
    const [rawVisible_calUseDate, setRawVisible_calUseDate] = useState(true);
    const [rawVisible_calOKDate, setRawVisible_calOKDate] = useState(true);
    const [rawVisible_btn_modReq, setRawVisible_btn_modReq] = useState(true);
    const [rawVisible_btn_Modify, setRawVisible_btn_Modify] = useState(true);
    const [rawVisible_btn_delete, setRawVisible_btn_delete] = useState(true);
    const [rawVisible_btn_apprReq, setRawVisible_btn_apprReq] = useState(true);
    const [rawVisible_btn_apprReqCancel, setRawVisible_btn_apprReqCancel] = useState(true);
    const [rawVisible_btn_modReqCancel, setRawVisible_btn_modReqCancel] = useState(true);
    const [rawVisible_btn_modAppr, setRawVisible_btn_modAppr] = useState(true);
    const [rawVisible_btn_Cancel, setRawVisible_btn_Cancel] = useState(true);
    const [rawVisible_btn_modCancel, setRawVisible_btn_modCancel] = useState(true);
    const [rawVisible_lbProcMsg1, setRawVisible_lbProcMsg1] = useState(true);
    const [rawVisible_edAttachFile, setRawVisible_edAttachFile] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_btnUploadFile, setRawVisible_btnUploadFile] = useState(true);
    const [rawVisible_lbFileSize, setRawVisible_lbFileSize] = useState(true);
    const isVisible_lbText = rawVisible_lbText;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_Static7 = rawVisible_Static7;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnCancel = rawVisible_btnCancel;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnSave = rawVisible_btnSave;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_lbJibu = rawVisible_lbJibu;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edTPEDUTIME = rawVisible_edTPEDUTIME;
    const setIsVisible_edTPEDUTIME = setRawVisible_edTPEDUTIME;
    const isVisible_edNAME_DETAIL = rawVisible_edNAME_DETAIL;
    const setIsVisible_edNAME_DETAIL = setRawVisible_edNAME_DETAIL;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_taTPGOAL = rawVisible_taTPGOAL;
    const setIsVisible_taTPGOAL = setRawVisible_taTPGOAL;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_taTPPLAN = rawVisible_taTPPLAN;
    const setIsVisible_taTPPLAN = setRawVisible_taTPPLAN;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_taTPDATA = rawVisible_taTPDATA;
    const setIsVisible_taTPDATA = setRawVisible_taTPDATA;
    const isVisible_taTPCONTENT = rawVisible_taTPCONTENT;
    const setIsVisible_taTPCONTENT = setRawVisible_taTPCONTENT;
    const isVisible_Static6 = rawVisible_Static6;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_taTPETC = rawVisible_taTPETC;
    const setIsVisible_taTPETC = setRawVisible_taTPETC;
    const isVisible_Static9 = rawVisible_Static9;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_edTPEDUGUBUNNM = rawVisible_edTPEDUGUBUNNM;
    const setIsVisible_edTPEDUGUBUNNM = setRawVisible_edTPEDUGUBUNNM;
    const isVisible_edTPSUBJECTNM = rawVisible_edTPSUBJECTNM;
    const setIsVisible_edTPSUBJECTNM = setRawVisible_edTPSUBJECTNM;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_Static11 = rawVisible_Static11;
    const setIsVisible_Static11 = setRawVisible_Static11;
    const isVisible_edTPNO = rawVisible_edTPNO;
    const setIsVisible_edTPNO = setRawVisible_edTPNO;
    const isVisible_edTPREQDATE = rawVisible_edTPREQDATE;
    const setIsVisible_edTPREQDATE = setRawVisible_edTPREQDATE;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edTPUSEDATE = rawVisible_edTPUSEDATE;
    const setIsVisible_edTPUSEDATE = setRawVisible_edTPUSEDATE;
    const isVisible_Static14 = rawVisible_Static14;
    const setIsVisible_Static14 = setRawVisible_Static14;
    const isVisible_edTPCOURSNM = rawVisible_edTPCOURSNM;
    const setIsVisible_edTPCOURSNM = setRawVisible_edTPCOURSNM;
    const isVisible_edTPMGNO = rawVisible_edTPMGNO;
    const setIsVisible_edTPMGNO = setRawVisible_edTPMGNO;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_edTPYEAR = rawVisible_edTPYEAR;
    const setIsVisible_edTPYEAR = setRawVisible_edTPYEAR;
    const isVisible_Static15 = rawVisible_Static15;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_Static16 = rawVisible_Static16;
    const setIsVisible_Static16 = setRawVisible_Static16;
    const isVisible_Static17 = rawVisible_Static17;
    const setIsVisible_Static17 = setRawVisible_Static17;
    const isVisible_Static18 = rawVisible_Static18;
    const setIsVisible_Static18 = setRawVisible_Static18;
    const isVisible_edTPSEQ = rawVisible_edTPSEQ;
    const setIsVisible_edTPSEQ = setRawVisible_edTPSEQ;
    const isVisible_gdMovie = rawVisible_gdMovie;
    const setIsVisible_gdMovie = setRawVisible_gdMovie;
    const isVisible_Static25 = rawVisible_Static25;
    const setIsVisible_Static25 = setRawVisible_Static25;
    const isVisible_btnCreate = rawVisible_btnCreate;
    const setIsVisible_btnCreate = setRawVisible_btnCreate;
    const isVisible_btn_appr = rawVisible_btn_appr;
    const setIsVisible_btn_appr = setRawVisible_btn_appr;
    const isVisible_btn_Approval = rawVisible_btn_Approval;
    const setIsVisible_btn_Approval = setRawVisible_btn_Approval;
    const isVisible_edTPOKDATE = rawVisible_edTPOKDATE;
    const setIsVisible_edTPOKDATE = setRawVisible_edTPOKDATE;
    const isVisible_calUseDate = rawVisible_calUseDate;
    const setIsVisible_calUseDate = setRawVisible_calUseDate;
    const isVisible_calOKDate = rawVisible_calOKDate;
    const setIsVisible_calOKDate = setRawVisible_calOKDate;
    const isVisible_btn_modReq = rawVisible_btn_modReq;
    const setIsVisible_btn_modReq = setRawVisible_btn_modReq;
    const isVisible_btn_Modify = rawVisible_btn_Modify;
    const setIsVisible_btn_Modify = setRawVisible_btn_Modify;
    const isVisible_btn_delete = rawVisible_btn_delete;
    const setIsVisible_btn_delete = setRawVisible_btn_delete;
    const isVisible_btn_apprReq = rawVisible_btn_apprReq;
    const setIsVisible_btn_apprReq = setRawVisible_btn_apprReq;
    const isVisible_btn_apprReqCancel = rawVisible_btn_apprReqCancel;
    const setIsVisible_btn_apprReqCancel = setRawVisible_btn_apprReqCancel;
    const isVisible_btn_modReqCancel = rawVisible_btn_modReqCancel;
    const setIsVisible_btn_modReqCancel = setRawVisible_btn_modReqCancel;
    const isVisible_btn_modAppr = rawVisible_btn_modAppr;
    const setIsVisible_btn_modAppr = setRawVisible_btn_modAppr;
    const isVisible_btn_Cancel = rawVisible_btn_Cancel;
    const setIsVisible_btn_Cancel = setRawVisible_btn_Cancel;
    const isVisible_btn_modCancel = rawVisible_btn_modCancel;
    const setIsVisible_btn_modCancel = setRawVisible_btn_modCancel;
    const isVisible_lbProcMsg1 = rawVisible_lbProcMsg1;
    const setIsVisible_lbProcMsg1 = setRawVisible_lbProcMsg1;
    const isVisible_edAttachFile = rawVisible_edAttachFile;
    const setIsVisible_edAttachFile = setRawVisible_edAttachFile;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_btnUploadFile = rawVisible_btnUploadFile;
    const setIsVisible_btnUploadFile = setRawVisible_btnUploadFile;
    const isVisible_lbFileSize = rawVisible_lbFileSize;
    const setIsVisible_lbFileSize = setRawVisible_lbFileSize;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_TecProg([]);
            setds_Movie([]);
            setds_MISTEACHINGPLAN([]);
            setds_Appr_insert([]);
            setgds_iModifyTecPlanH([]);
            setds_oPersonInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCreate_OnClick = () => {
        console.log('btnCreate_OnClick clicked');
    };
    const btnUploadFile_OnClick = () => {
        console.log('btnUploadFile_OnClick clicked');
    };
    const btn_Approval_OnClick = () => {
        console.log('btn_Approval_OnClick clicked');
    };
    const btn_Cancel_OnClick = () => {
        console.log('btn_Cancel_OnClick clicked');
    };
    const btn_Modify_OnClick = () => {
        console.log('btn_Modify_OnClick clicked');
    };
    const btn_apprReqCancel_OnClick = () => {
        console.log('btn_apprReqCancel_OnClick clicked');
    };
    const btn_apprReq_OnClick = () => {
        console.log('btn_apprReq_OnClick clicked');
    };
    const btn_appr_OnClick = () => {
        console.log('btn_appr_OnClick clicked');
    };
    const btn_delete_OnClick = () => {
        console.log('btn_delete_OnClick clicked');
    };
    const btn_modAppr_OnClick = () => {
        console.log('btn_modAppr_OnClick clicked');
    };
    const btn_modCancel_OnClick = () => {
        console.log('btn_modCancel_OnClick clicked');
    };
    const btn_modReqCancel_OnClick = () => {
        console.log('btn_modReqCancel_OnClick clicked');
    };
    const btn_modReq_OnClick = () => {
        console.log('btn_modReq_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_DownloadFile = () => {
        console.log('lfn_DownloadFile clicked');
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

    return {
        isLoading,
        ds_TecProg,
        ds_Movie,
        ds_MISTEACHINGPLAN,
        ds_Appr_insert,
        gds_iModifyTecPlanH,
        ds_oPersonInfo,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edTPEDUTIME,
        setIsVisible_edTPEDUTIME,
        isVisible_edNAME_DETAIL,
        setIsVisible_edNAME_DETAIL,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_taTPGOAL,
        setIsVisible_taTPGOAL,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_taTPPLAN,
        setIsVisible_taTPPLAN,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_taTPDATA,
        setIsVisible_taTPDATA,
        isVisible_taTPCONTENT,
        setIsVisible_taTPCONTENT,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_taTPETC,
        setIsVisible_taTPETC,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_edTPEDUGUBUNNM,
        setIsVisible_edTPEDUGUBUNNM,
        isVisible_edTPSUBJECTNM,
        setIsVisible_edTPSUBJECTNM,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_Static11,
        setIsVisible_Static11,
        isVisible_edTPNO,
        setIsVisible_edTPNO,
        isVisible_edTPREQDATE,
        setIsVisible_edTPREQDATE,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edTPUSEDATE,
        setIsVisible_edTPUSEDATE,
        isVisible_Static14,
        setIsVisible_Static14,
        isVisible_edTPCOURSNM,
        setIsVisible_edTPCOURSNM,
        isVisible_edTPMGNO,
        setIsVisible_edTPMGNO,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_edTPYEAR,
        setIsVisible_edTPYEAR,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_Static16,
        setIsVisible_Static16,
        isVisible_Static17,
        setIsVisible_Static17,
        isVisible_Static18,
        setIsVisible_Static18,
        isVisible_edTPSEQ,
        setIsVisible_edTPSEQ,
        isVisible_gdMovie,
        setIsVisible_gdMovie,
        isVisible_Static25,
        setIsVisible_Static25,
        isVisible_btnCreate,
        setIsVisible_btnCreate,
        isVisible_btn_appr,
        setIsVisible_btn_appr,
        isVisible_btn_Approval,
        setIsVisible_btn_Approval,
        isVisible_edTPOKDATE,
        setIsVisible_edTPOKDATE,
        isVisible_calUseDate,
        setIsVisible_calUseDate,
        isVisible_calOKDate,
        setIsVisible_calOKDate,
        isVisible_btn_modReq,
        setIsVisible_btn_modReq,
        isVisible_btn_Modify,
        setIsVisible_btn_Modify,
        isVisible_btn_delete,
        setIsVisible_btn_delete,
        isVisible_btn_apprReq,
        setIsVisible_btn_apprReq,
        isVisible_btn_apprReqCancel,
        setIsVisible_btn_apprReqCancel,
        isVisible_btn_modReqCancel,
        setIsVisible_btn_modReqCancel,
        isVisible_btn_modAppr,
        setIsVisible_btn_modAppr,
        isVisible_btn_Cancel,
        setIsVisible_btn_Cancel,
        isVisible_btn_modCancel,
        setIsVisible_btn_modCancel,
        isVisible_lbProcMsg1,
        setIsVisible_lbProcMsg1,
        isVisible_edAttachFile,
        setIsVisible_edAttachFile,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_btnUploadFile,
        setIsVisible_btnUploadFile,
        isVisible_lbFileSize,
        setIsVisible_lbFileSize,
        btnCreate_OnClick,
        btnUploadFile_OnClick,
        btn_Approval_OnClick,
        btn_Cancel_OnClick,
        btn_Modify_OnClick,
        btn_apprReqCancel_OnClick,
        btn_apprReq_OnClick,
        btn_appr_OnClick,
        btn_delete_OnClick,
        btn_modAppr_OnClick,
        btn_modCancel_OnClick,
        btn_modReqCancel_OnClick,
        btn_modReq_OnClick,
        lfn_Cancel,
        lfn_DownloadFile,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};