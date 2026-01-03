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
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_Static7, setIsVisible_Static7] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edTPEDUTIME, setIsVisible_edTPEDUTIME] = useState(true);
    const [isVisible_edNAME_DETAIL, setIsVisible_edNAME_DETAIL] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_taTPGOAL, setIsVisible_taTPGOAL] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_taTPPLAN, setIsVisible_taTPPLAN] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_taTPDATA, setIsVisible_taTPDATA] = useState(true);
    const [isVisible_taTPCONTENT, setIsVisible_taTPCONTENT] = useState(true);
    const [isVisible_Static6, setIsVisible_Static6] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_taTPETC, setIsVisible_taTPETC] = useState(true);
    const [isVisible_edTPMGNO, setIsVisible_edTPMGNO] = useState(false);
    const [isVisible_Static9, setIsVisible_Static9] = useState(true);
    const [isVisible_Static12, setIsVisible_Static12] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_cbxCours, setIsVisible_cbxCours] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_cbxTpEduGubun, setIsVisible_cbxTpEduGubun] = useState(true);
    const [isVisible_cbxSubject, setIsVisible_cbxSubject] = useState(true);
    const [isVisible_edCours, setIsVisible_edCours] = useState(true);
    const [isVisible_edSubject, setIsVisible_edSubject] = useState(true);
    const [isVisible_btnButton, setIsVisible_btnButton] = useState(true);
    const [isVisible_edInsUpdateFalg, setIsVisible_edInsUpdateFalg] = useState(false);
    const [isVisible_btnAdd, setIsVisible_btnAdd] = useState(true);
    const [isVisible_btnDel, setIsVisible_btnDel] = useState(true);
    const [isVisible_gdProfSeminar, setIsVisible_gdProfSeminar] = useState(true);
    const [isVisible_lbProcMsg1, setIsVisible_lbProcMsg1] = useState(true);
    const [isVisible_fiAttachFile, setIsVisible_fiAttachFile] = useState(true);
    const [isVisible_fdAttachFile, setIsVisible_fdAttachFile] = useState(true);
    const [isVisible_hfAttachFile, setIsVisible_hfAttachFile] = useState(true);
    const [isVisible_btnUploadFile, setIsVisible_btnUploadFile] = useState(true);
    const [isVisible_edAttachFile, setIsVisible_edAttachFile] = useState(true);
    const [isVisible_lbFileSize, setIsVisible_lbFileSize] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxYear, setIsVisible_cbxYear] = useState(true);

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