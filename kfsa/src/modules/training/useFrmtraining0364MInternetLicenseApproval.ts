// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioApproveList, Ids_oJibu, Ids_status, Ids_iApproveLicense, Ids_oApproveLicenseResult, Ids_oImageInfo, Ids_oStatus, Ids_oAjgubun, Ids_oLicense, Ids_oAjgubunAll, Ids_ioApproveData } from './Frmtraining0364MInternetLicenseApprovalData';

export const useFrmtraining0364MInternetLicenseApproval = () => {
    const [ds_ioApproveList, setds_ioApproveList] = useState<Ids_ioApproveList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_status, setds_status] = useState<Ids_status[]>([]);
    const [ds_iApproveLicense, setds_iApproveLicense] = useState<Ids_iApproveLicense[]>([]);
    const [ds_oApproveLicenseResult, setds_oApproveLicenseResult] = useState<Ids_oApproveLicenseResult[]>([]);
    const [ds_oImageInfo, setds_oImageInfo] = useState<Ids_oImageInfo[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oAjgubun, setds_oAjgubun] = useState<Ids_oAjgubun[]>([]);
    const [ds_oLicense, setds_oLicense] = useState<Ids_oLicense[]>([]);
    const [ds_oAjgubunAll, setds_oAjgubunAll] = useState<Ids_oAjgubunAll[]>([]);
    const [ds_ioApproveData, setds_ioApproveData] = useState<Ids_ioApproveData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Static6, setRawVisible_Static6] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_cbxStatus, setRawVisible_cbxStatus] = useState(true);
    const [rawVisible_lbSearch, setRawVisible_lbSearch] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_btnDownload, setRawVisible_btnDownload] = useState(true);
    const [rawVisible_edfileNm, setRawVisible_edfileNm] = useState(true);
    const [rawVisible_btnApprove, setRawVisible_btnApprove] = useState(true);
    const [rawVisible_btnReject, setRawVisible_btnReject] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_fiAttachFile, setRawVisible_fiAttachFile] = useState(true);
    const [rawVisible_fdAttachFile, setRawVisible_fdAttachFile] = useState(true);
    const [rawVisible_hfAttachFile, setRawVisible_hfAttachFile] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_edStatus, setRawVisible_edStatus] = useState(false);
    const [rawVisible_edfilePath, setRawVisible_edfilePath] = useState(false);
    const [rawVisible_edLastImgSeq, setRawVisible_edLastImgSeq] = useState(false);
    const [rawVisible_stfilePath, setRawVisible_stfilePath] = useState(false);
    const [rawVisible_btnJubsu, setRawVisible_btnJubsu] = useState(true);
    const [rawVisible_btnSaveXml, setRawVisible_btnSaveXml] = useState(false);
    const [rawVisible_tx_xmlTest, setRawVisible_tx_xmlTest] = useState(false);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_btnImageZoom, setRawVisible_btnImageZoom] = useState(true);
    const [rawVisible_cbAjgubun, setRawVisible_cbAjgubun] = useState(true);
    const [rawVisible_edAJTCCOURSECD, setRawVisible_edAJTCCOURSECD] = useState(false);
    const [rawVisible_edAJISSUEGUBUN, setRawVisible_edAJISSUEGUBUN] = useState(false);
    const [rawVisible_edPersonKey, setRawVisible_edPersonKey] = useState(true);
    const [rawVisible_btnMod, setRawVisible_btnMod] = useState(true);
    const [rawVisible_btnPrintAll, setRawVisible_btnPrintAll] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnImsiSave, setRawVisible_btnImsiSave] = useState(true);
    const [rawVisible_edAJMGNO, setRawVisible_edAJMGNO] = useState(false);
    const [rawVisible_Static7, setRawVisible_Static7] = useState(true);
    const [rawVisible_edName, setRawVisible_edName] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Static6 = rawVisible_Static6 && rawVisible_Shape1;
    const setIsVisible_Static6 = setRawVisible_Static6;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_Shape1;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_Shape1;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_Shape1;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_Shape1;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape1;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_cbxStatus = rawVisible_cbxStatus && rawVisible_Shape1;
    const setIsVisible_cbxStatus = setRawVisible_cbxStatus;
    const isVisible_lbSearch = rawVisible_lbSearch && rawVisible_shpGubunBox;
    const setIsVisible_lbSearch = setRawVisible_lbSearch;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_shpGubunBox;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape0;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape0;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_Static5 = rawVisible_Static5 && rawVisible_Shape0;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_btnDownload = rawVisible_btnDownload && rawVisible_Shape0;
    const setIsVisible_btnDownload = setRawVisible_btnDownload;
    const isVisible_edfileNm = rawVisible_edfileNm && rawVisible_Shape0;
    const setIsVisible_edfileNm = setRawVisible_edfileNm;
    const isVisible_btnApprove = rawVisible_btnApprove && rawVisible_Shape3;
    const setIsVisible_btnApprove = setRawVisible_btnApprove;
    const isVisible_btnReject = rawVisible_btnReject && rawVisible_Shape3;
    const setIsVisible_btnReject = setRawVisible_btnReject;
    const isVisible_imgLastestPicture = rawVisible_imgLastestPicture && rawVisible_shpGubunBox;
    const setIsVisible_imgLastestPicture = setRawVisible_imgLastestPicture;
    const isVisible_fiAttachFile = rawVisible_fiAttachFile;
    const setIsVisible_fiAttachFile = setRawVisible_fiAttachFile;
    const isVisible_fdAttachFile = rawVisible_fdAttachFile;
    const setIsVisible_fdAttachFile = setRawVisible_fdAttachFile;
    const isVisible_hfAttachFile = rawVisible_hfAttachFile;
    const setIsVisible_hfAttachFile = setRawVisible_hfAttachFile;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_Shape0;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_Shape0;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_shpGubunBox;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_edStatus = rawVisible_edStatus && rawVisible_shpGubunBox;
    const setIsVisible_edStatus = setRawVisible_edStatus;
    const isVisible_edfilePath = rawVisible_edfilePath && rawVisible_Shape0;
    const setIsVisible_edfilePath = setRawVisible_edfilePath;
    const isVisible_edLastImgSeq = rawVisible_edLastImgSeq && rawVisible_shpGubunBox;
    const setIsVisible_edLastImgSeq = setRawVisible_edLastImgSeq;
    const isVisible_stfilePath = rawVisible_stfilePath && rawVisible_Shape0;
    const setIsVisible_stfilePath = setRawVisible_stfilePath;
    const isVisible_btnJubsu = rawVisible_btnJubsu && rawVisible_Shape3;
    const setIsVisible_btnJubsu = setRawVisible_btnJubsu;
    const isVisible_btnSaveXml = rawVisible_btnSaveXml && rawVisible_Shape0;
    const setIsVisible_btnSaveXml = setRawVisible_btnSaveXml;
    const isVisible_tx_xmlTest = rawVisible_tx_xmlTest && rawVisible_Shape0;
    const setIsVisible_tx_xmlTest = setRawVisible_tx_xmlTest;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnImageZoom = rawVisible_btnImageZoom && rawVisible_shpGubunBox;
    const setIsVisible_btnImageZoom = setRawVisible_btnImageZoom;
    const isVisible_cbAjgubun = rawVisible_cbAjgubun && rawVisible_Shape0;
    const setIsVisible_cbAjgubun = setRawVisible_cbAjgubun;
    const isVisible_edAJTCCOURSECD = rawVisible_edAJTCCOURSECD && rawVisible_shpGubunBox;
    const setIsVisible_edAJTCCOURSECD = setRawVisible_edAJTCCOURSECD;
    const isVisible_edAJISSUEGUBUN = rawVisible_edAJISSUEGUBUN && rawVisible_shpGubunBox;
    const setIsVisible_edAJISSUEGUBUN = setRawVisible_edAJISSUEGUBUN;
    const isVisible_edPersonKey = rawVisible_edPersonKey && rawVisible_shpGubunBox;
    const setIsVisible_edPersonKey = setRawVisible_edPersonKey;
    const isVisible_btnMod = rawVisible_btnMod && rawVisible_Shape3;
    const setIsVisible_btnMod = setRawVisible_btnMod;
    const isVisible_btnPrintAll = rawVisible_btnPrintAll && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintAll = setRawVisible_btnPrintAll;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_Shape3;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_Shape3;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnImsiSave = rawVisible_btnImsiSave && rawVisible_Shape3;
    const setIsVisible_btnImsiSave = setRawVisible_btnImsiSave;
    const isVisible_edAJMGNO = rawVisible_edAJMGNO && rawVisible_shpGubunBox;
    const setIsVisible_edAJMGNO = setRawVisible_edAJMGNO;
    const isVisible_Static7 = rawVisible_Static7 && rawVisible_Shape1;
    const setIsVisible_Static7 = setRawVisible_Static7;
    const isVisible_edName = rawVisible_edName && rawVisible_Shape1;
    const setIsVisible_edName = setRawVisible_edName;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioApproveList([]);
            setds_oJibu([]);
            setds_status([]);
            setds_iApproveLicense([]);
            setds_oApproveLicenseResult([]);
            setds_oImageInfo([]);
            setds_oStatus([]);
            setds_oAjgubun([]);
            setds_oLicense([]);
            setds_oAjgubunAll([]);
            setds_ioApproveData([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnApprove_OnClick = () => {
        console.log('btnApprove_OnClick clicked');
    };
    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnImageZoom_OnClick = () => {
        console.log('btnImageZoom_OnClick clicked');
    };
    const btnImsiSave_OnClick = () => {
        console.log('btnImsiSave_OnClick clicked');
    };
    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnMod_OnClick = () => {
        console.log('btnMod_OnClick clicked');
    };
    const btnReject_OnClick = () => {
        console.log('btnReject_OnClick clicked');
    };
    const btnSaveXml_OnClick = () => {
        console.log('btnSaveXml_OnClick clicked');
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
    const lfn_SMSSend = () => {
        console.log('lfn_SMSSend clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioApproveList,
        ds_oJibu,
        ds_status,
        ds_iApproveLicense,
        ds_oApproveLicenseResult,
        ds_oImageInfo,
        ds_oStatus,
        ds_oAjgubun,
        ds_oLicense,
        ds_oAjgubunAll,
        ds_ioApproveData,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Static6,
        setIsVisible_Static6,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_cbxStatus,
        setIsVisible_cbxStatus,
        isVisible_lbSearch,
        setIsVisible_lbSearch,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_btnDownload,
        setIsVisible_btnDownload,
        isVisible_edfileNm,
        setIsVisible_edfileNm,
        isVisible_btnApprove,
        setIsVisible_btnApprove,
        isVisible_btnReject,
        setIsVisible_btnReject,
        isVisible_imgLastestPicture,
        setIsVisible_imgLastestPicture,
        isVisible_fiAttachFile,
        setIsVisible_fiAttachFile,
        isVisible_fdAttachFile,
        setIsVisible_fdAttachFile,
        isVisible_hfAttachFile,
        setIsVisible_hfAttachFile,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_edfilePath,
        setIsVisible_edfilePath,
        isVisible_edLastImgSeq,
        setIsVisible_edLastImgSeq,
        isVisible_stfilePath,
        setIsVisible_stfilePath,
        isVisible_btnJubsu,
        setIsVisible_btnJubsu,
        isVisible_btnSaveXml,
        setIsVisible_btnSaveXml,
        isVisible_tx_xmlTest,
        setIsVisible_tx_xmlTest,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnImageZoom,
        setIsVisible_btnImageZoom,
        isVisible_cbAjgubun,
        setIsVisible_cbAjgubun,
        isVisible_edAJTCCOURSECD,
        setIsVisible_edAJTCCOURSECD,
        isVisible_edAJISSUEGUBUN,
        setIsVisible_edAJISSUEGUBUN,
        isVisible_edPersonKey,
        setIsVisible_edPersonKey,
        isVisible_btnMod,
        setIsVisible_btnMod,
        isVisible_btnPrintAll,
        setIsVisible_btnPrintAll,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnImsiSave,
        setIsVisible_btnImsiSave,
        isVisible_edAJMGNO,
        setIsVisible_edAJMGNO,
        isVisible_Static7,
        setIsVisible_Static7,
        isVisible_edName,
        setIsVisible_edName,
        btnApprove_OnClick,
        btnCancel_OnClick,
        btnDownload_OnClick,
        btnImageZoom_OnClick,
        btnImsiSave_OnClick,
        btnJubsu_OnClick,
        btnMod_OnClick,
        btnReject_OnClick,
        btnSaveXml_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_SMSSend,
        lfn_Search,
    };
};