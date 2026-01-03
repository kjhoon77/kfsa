// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_TecProg, Ids_TpEduGubun, Ids_CmbCours_old, Ids_CmbSubject, Ids_ioTeaching, Ids_Movie, Ids_MovieSingle, Ids_TecProgMAX, Ids_CmbCours, Ids_Search, Ids_oCourse, Ids_oAllCourse, Ids_oAllSubject, Ids_oSubject, Ids_oYear } from './Frmprofes0007MaterialPopUpInsertData';

export const useFrmprofes0007MaterialPopUpInsert = () => {
    const [ds_TecProg, setds_TecProg] = useState<Ids_TecProg[]>([]);
    const [ds_TpEduGubun, setds_TpEduGubun] = useState<Ids_TpEduGubun[]>([]);
    const [ds_CmbCours_old, setds_CmbCours_old] = useState<Ids_CmbCours_old[]>([]);
    const [ds_CmbSubject, setds_CmbSubject] = useState<Ids_CmbSubject[]>([]);
    const [ds_ioTeaching, setds_ioTeaching] = useState<Ids_ioTeaching[]>([]);
    const [ds_Movie, setds_Movie] = useState<Ids_Movie[]>([]);
    const [ds_MovieSingle, setds_MovieSingle] = useState<Ids_MovieSingle[]>([]);
    const [ds_TecProgMAX, setds_TecProgMAX] = useState<Ids_TecProgMAX[]>([]);
    const [ds_CmbCours, setds_CmbCours] = useState<Ids_CmbCours[]>([]);
    const [ds_Search, setds_Search] = useState<Ids_Search[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oAllCourse, setds_oAllCourse] = useState<Ids_oAllCourse[]>([]);
    const [ds_oAllSubject, setds_oAllSubject] = useState<Ids_oAllSubject[]>([]);
    const [ds_oSubject, setds_oSubject] = useState<Ids_oSubject[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
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
    const [rawVisible_edTPMGNO, setRawVisible_edTPMGNO] = useState(false);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_cbxCours, setRawVisible_cbxCours] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_cbxTpEduGubun, setRawVisible_cbxTpEduGubun] = useState(true);
    const [rawVisible_cbxSubject, setRawVisible_cbxSubject] = useState(true);
    const [rawVisible_edCours, setRawVisible_edCours] = useState(true);
    const [rawVisible_edSubject, setRawVisible_edSubject] = useState(true);
    const [rawVisible_btnButton, setRawVisible_btnButton] = useState(true);
    const [rawVisible_edInsUpdateFalg, setRawVisible_edInsUpdateFalg] = useState(false);
    const [rawVisible_btnAdd, setRawVisible_btnAdd] = useState(true);
    const [rawVisible_btnDel, setRawVisible_btnDel] = useState(true);
    const [rawVisible_gdProfSeminar, setRawVisible_gdProfSeminar] = useState(true);
    const [rawVisible_lbProcMsg1, setRawVisible_lbProcMsg1] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_btnUploadFile, setRawVisible_btnUploadFile] = useState(true);
    const [rawVisible_edAttachFile, setRawVisible_edAttachFile] = useState(true);
    const [rawVisible_lbFileSize, setRawVisible_lbFileSize] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxYear, setRawVisible_cbxYear] = useState(true);
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_lbText = rawVisible_lbText && rawVisible_Shape3;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape3;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape3;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edTPEDUTIME = rawVisible_edTPEDUTIME && rawVisible_Shape3;
    const setIsVisible_edTPEDUTIME = setRawVisible_edTPEDUTIME;
    const isVisible_edNAME_DETAIL = rawVisible_edNAME_DETAIL && rawVisible_Shape3;
    const setIsVisible_edNAME_DETAIL = setRawVisible_edNAME_DETAIL;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_taTPGOAL = rawVisible_taTPGOAL && rawVisible_Shape3;
    const setIsVisible_taTPGOAL = setRawVisible_taTPGOAL;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape3;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_taTPPLAN = rawVisible_taTPPLAN && rawVisible_Shape3;
    const setIsVisible_taTPPLAN = setRawVisible_taTPPLAN;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape3;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_taTPDATA = rawVisible_taTPDATA && rawVisible_Shape3;
    const setIsVisible_taTPDATA = setRawVisible_taTPDATA;
    const isVisible_taTPCONTENT = rawVisible_taTPCONTENT && rawVisible_Shape3;
    const setIsVisible_taTPCONTENT = setRawVisible_taTPCONTENT;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape3;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_Static8 = rawVisible_Static8 && rawVisible_Shape3;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_taTPETC = rawVisible_taTPETC && rawVisible_Shape3;
    const setIsVisible_taTPETC = setRawVisible_taTPETC;
    const isVisible_edTPMGNO = rawVisible_edTPMGNO && rawVisible_Shape3;
    const setIsVisible_edTPMGNO = setRawVisible_edTPMGNO;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape3;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape3;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape3;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape3;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_cbxCours = rawVisible_cbxCours && rawVisible_Shape3;
    const setIsVisible_cbxCours = setRawVisible_cbxCours;
    const isVisible_Static10 = rawVisible_Static10 && rawVisible_Shape3;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_cbxTpEduGubun = rawVisible_cbxTpEduGubun && rawVisible_Shape3;
    const setIsVisible_cbxTpEduGubun = setRawVisible_cbxTpEduGubun;
    const isVisible_cbxSubject = rawVisible_cbxSubject && rawVisible_Shape3;
    const setIsVisible_cbxSubject = setRawVisible_cbxSubject;
    const isVisible_edCours = rawVisible_edCours && rawVisible_Shape3;
    const setIsVisible_edCours = setRawVisible_edCours;
    const isVisible_edSubject = rawVisible_edSubject && rawVisible_Shape3;
    const setIsVisible_edSubject = setRawVisible_edSubject;
    const isVisible_btnButton = rawVisible_btnButton && rawVisible_Shape3;
    const setIsVisible_btnButton = setRawVisible_btnButton;
    const isVisible_edInsUpdateFalg = rawVisible_edInsUpdateFalg && rawVisible_Shape3;
    const setIsVisible_edInsUpdateFalg = setRawVisible_edInsUpdateFalg;
    const isVisible_btnAdd = rawVisible_btnAdd && rawVisible_Shape3;
    const setIsVisible_btnAdd = setRawVisible_btnAdd;
    const isVisible_btnDel = rawVisible_btnDel && rawVisible_Shape3;
    const setIsVisible_btnDel = setRawVisible_btnDel;
    const isVisible_gdProfSeminar = rawVisible_gdProfSeminar && rawVisible_Shape3;
    const setIsVisible_gdProfSeminar = setRawVisible_gdProfSeminar;
    const isVisible_lbProcMsg1 = rawVisible_lbProcMsg1;
    const setIsVisible_lbProcMsg1 = setRawVisible_lbProcMsg1;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile && rawVisible_Shape3;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile && rawVisible_Shape3;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile && rawVisible_Shape3;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_btnUploadFile = rawVisible_btnUploadFile && rawVisible_Shape3;
    const setIsVisible_btnUploadFile = setRawVisible_btnUploadFile;
    const isVisible_edAttachFile = rawVisible_edAttachFile && rawVisible_Shape3;
    const setIsVisible_edAttachFile = setRawVisible_edAttachFile;
    const isVisible_lbFileSize = rawVisible_lbFileSize && rawVisible_Shape3;
    const setIsVisible_lbFileSize = setRawVisible_lbFileSize;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape3;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxYear = rawVisible_cbxYear && rawVisible_Shape3;
    const setIsVisible_cbxYear = setRawVisible_cbxYear;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_TecProg([]);
            setds_TpEduGubun([]);
            setds_CmbCours_old([]);
            setds_CmbSubject([]);
            setds_ioTeaching([]);
            setds_Movie([]);
            setds_MovieSingle([]);
            setds_TecProgMAX([]);
            setds_CmbCours([]);
            setds_Search([]);
            setds_oCourse([]);
            setds_oAllCourse([]);
            setds_oAllSubject([]);
            setds_oSubject([]);
            setds_oYear([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAdd_OnClick = () => {
        console.log('btnAdd_OnClick clicked');
    };
    const btnButton_OnClick = () => {
        console.log('btnButton_OnClick clicked');
    };
    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };
    const btnUploadFile_OnClick = () => {
        console.log('btnUploadFile_OnClick clicked');
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
        ds_TpEduGubun,
        ds_CmbCours_old,
        ds_CmbSubject,
        ds_ioTeaching,
        ds_Movie,
        ds_MovieSingle,
        ds_TecProgMAX,
        ds_CmbCours,
        ds_Search,
        ds_oCourse,
        ds_oAllCourse,
        ds_oAllSubject,
        ds_oSubject,
        ds_oYear,
        isVisible_Shape3,
        setIsVisible_Shape3,
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
        isVisible_edTPMGNO,
        setIsVisible_edTPMGNO,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_cbxCours,
        setIsVisible_cbxCours,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_cbxTpEduGubun,
        setIsVisible_cbxTpEduGubun,
        isVisible_cbxSubject,
        setIsVisible_cbxSubject,
        isVisible_edCours,
        setIsVisible_edCours,
        isVisible_edSubject,
        setIsVisible_edSubject,
        isVisible_btnButton,
        setIsVisible_btnButton,
        isVisible_edInsUpdateFalg,
        setIsVisible_edInsUpdateFalg,
        isVisible_btnAdd,
        setIsVisible_btnAdd,
        isVisible_btnDel,
        setIsVisible_btnDel,
        isVisible_gdProfSeminar,
        setIsVisible_gdProfSeminar,
        isVisible_lbProcMsg1,
        setIsVisible_lbProcMsg1,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_btnUploadFile,
        setIsVisible_btnUploadFile,
        isVisible_edAttachFile,
        setIsVisible_edAttachFile,
        isVisible_lbFileSize,
        setIsVisible_lbFileSize,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxYear,
        setIsVisible_cbxYear,
        btnAdd_OnClick,
        btnButton_OnClick,
        btnDel_OnClick,
        btnUploadFile_OnClick,
        lfn_Cancel,
        lfn_DownloadFile,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};