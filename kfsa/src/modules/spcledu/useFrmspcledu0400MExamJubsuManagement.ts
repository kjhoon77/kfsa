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
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnApplyPicture, setRawVisible_btnApplyPicture] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_gdSetlmentHist, setRawVisible_gdSetlmentHist] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnDelete, setRawVisible_btnDelete] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbExamYear, setRawVisible_lbExamYear] = useState(true);
    const [rawVisible_edExamYear, setRawVisible_edExamYear] = useState(true);
    const [rawVisible_lbExamOrder, setRawVisible_lbExamOrder] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edExamOrder, setRawVisible_edExamOrder] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_lbAt, setRawVisible_lbAt] = useState(true);
    const [rawVisible_btnSearchPersonInfo, setRawVisible_btnSearchPersonInfo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_edJubsuNo, setRawVisible_edJubsuNo] = useState(true);
    const [rawVisible_lbSeq, setRawVisible_lbSeq] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_btnSearchZipCode, setRawVisible_btnSearchZipCode] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_cbxEmailDomain, setRawVisible_cbxEmailDomain] = useState(true);
    const [rawVisible_lbEmail, setRawVisible_lbEmail] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_btnAuthResidentNo, setRawVisible_btnAuthResidentNo] = useState(true);
    const [rawVisible_btnExamJubsuModify, setRawVisible_btnExamJubsuModify] = useState(true);
    const [rawVisible_gdJubsuInfo, setRawVisible_gdJubsuInfo] = useState(true);
    const [rawVisible_lbJubsuInfo, setRawVisible_lbJubsuInfo] = useState(true);
    const [rawVisible_gdOrderHist, setRawVisible_gdOrderHist] = useState(true);
    const [rawVisible_lbJubsuHist, setRawVisible_lbJubsuHist] = useState(true);
    const [rawVisible_lbSetlmt, setRawVisible_lbSetlmt] = useState(true);
    const [rawVisible_edEmailDomain, setRawVisible_edEmailDomain] = useState(true);
    const [rawVisible_btnSeqList, setRawVisible_btnSeqList] = useState(true);
    const [rawVisible_btnSearchExamOrder, setRawVisible_btnSearchExamOrder] = useState(true);
    const [rawVisible_fdImage, setRawVisible_fdImage] = useState(true);
    const [rawVisible_hfImage, setRawVisible_hfImage] = useState(true);
    const [rawVisible_radCourse, setRawVisible_radCourse] = useState(true);
    const [rawVisible_btnTraingJubsuHist, setRawVisible_btnTraingJubsuHist] = useState(true);
    const [rawVisible_btnChangeProcDate, setRawVisible_btnChangeProcDate] = useState(true);
    const [rawVisible_btnProcRct, setRawVisible_btnProcRct] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_btnSendSms, setRawVisible_btnSendSms] = useState(true);
    const [rawVisible_btnSendEmail, setRawVisible_btnSendEmail] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_lbOrderChange, setRawVisible_lbOrderChange] = useState(true);
    const [rawVisible_shpBox1, setRawVisible_shpBox1] = useState(true);
    const [rawVisible_shpBox2, setRawVisible_shpBox2] = useState(true);
    const [rawVisible_btnSmsStat, setRawVisible_btnSmsStat] = useState(true);
    const [rawVisible_btnEmailStat, setRawVisible_btnEmailStat] = useState(true);
    const [rawVisible_lbExamInfo, setRawVisible_lbExamInfo] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_imgLastestPicture, setRawVisible_imgLastestPicture] = useState(true);
    const [rawVisible_btnSearchRegPicture, setRawVisible_btnSearchRegPicture] = useState(true);
    const [rawVisible_lbExamPersonInfo, setRawVisible_lbExamPersonInfo] = useState(true);
    const [rawVisible_lbJubsu, setRawVisible_lbJubsu] = useState(true);
    const [rawVisible_lbExamInfo1, setRawVisible_lbExamInfo1] = useState(true);
    const [rawVisible_lbExamInfo2, setRawVisible_lbExamInfo2] = useState(true);
    const [rawVisible_btnUnUseJubsuNo, setRawVisible_btnUnUseJubsuNo] = useState(true);
    const [rawVisible_btnLoadPicture, setRawVisible_btnLoadPicture] = useState(true);
    const [rawVisible_btnLoadScanPicture, setRawVisible_btnLoadScanPicture] = useState(true);
    const [rawVisible_btnScanPicture, setRawVisible_btnScanPicture] = useState(true);
    const [rawVisible_btnPictureManagement, setRawVisible_btnPictureManagement] = useState(true);
    const [rawVisible_btnShowVirtualAccount, setRawVisible_btnShowVirtualAccount] = useState(true);
    const [rawVisible_btnModifyHistory, setRawVisible_btnModifyHistory] = useState(true);
    const [rawVisible_fiImageFile, setRawVisible_fiImageFile] = useState(true);
    const [rawVisible_lbExpYn, setRawVisible_lbExpYn] = useState(true);
    const [rawVisible_chkExpYn, setRawVisible_chkExpYn] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnExamCheatingManageLink, setRawVisible_btnExamCheatingManageLink] = useState(true);
    const [rawVisible_edPoint, setRawVisible_edPoint] = useState(true);
    const [rawVisible_lbPoint, setRawVisible_lbPoint] = useState(true);
    const [rawVisible_edPassYn, setRawVisible_edPassYn] = useState(true);
    const [rawVisible_lbPassYn, setRawVisible_lbPassYn] = useState(true);
    const [rawVisible_lbSeatNo, setRawVisible_lbSeatNo] = useState(true);
    const [rawVisible_edSeatNo, setRawVisible_edSeatNo] = useState(true);
    const [rawVisible_radJibuGubun, setRawVisible_radJibuGubun] = useState(true);
    const [rawVisible_btnJubsuHistory, setRawVisible_btnJubsuHistory] = useState(true);
    const [rawVisible_radChangeTpmgno, setRawVisible_radChangeTpmgno] = useState(false);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(false);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(true);
    const [rawVisible_btnPosReport, setRawVisible_btnPosReport] = useState(true);
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_btnApplyPicture = rawVisible_btnApplyPicture && rawVisible_shpGubunBox3;
    const setIsVisible_btnApplyPicture = setRawVisible_btnApplyPicture;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_gdSetlmentHist = rawVisible_gdSetlmentHist && rawVisible_shpGubunBox4;
    const setIsVisible_gdSetlmentHist = setRawVisible_gdSetlmentHist;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnDelete = rawVisible_btnDelete && rawVisible_shpBtnBox;
    const setIsVisible_btnDelete = setRawVisible_btnDelete;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox1;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbExamYear = rawVisible_lbExamYear && rawVisible_shpGubunBox1;
    const setIsVisible_lbExamYear = setRawVisible_lbExamYear;
    const isVisible_edExamYear = rawVisible_edExamYear && rawVisible_shpGubunBox1;
    const setIsVisible_edExamYear = setRawVisible_edExamYear;
    const isVisible_lbExamOrder = rawVisible_lbExamOrder && rawVisible_shpGubunBox1;
    const setIsVisible_lbExamOrder = setRawVisible_lbExamOrder;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edExamOrder = rawVisible_edExamOrder && rawVisible_shpGubunBox1;
    const setIsVisible_edExamOrder = setRawVisible_edExamOrder;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_lbAt = rawVisible_lbAt && rawVisible_shpGubunBox3;
    const setIsVisible_lbAt = setRawVisible_lbAt;
    const isVisible_btnSearchPersonInfo = rawVisible_btnSearchPersonInfo && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchPersonInfo = setRawVisible_btnSearchPersonInfo;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_edJubsuNo = rawVisible_edJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_edJubsuNo = setRawVisible_edJubsuNo;
    const isVisible_lbSeq = rawVisible_lbSeq && rawVisible_shpGubunBox1;
    const setIsVisible_lbSeq = setRawVisible_lbSeq;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox3;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_btnSearchZipCode = rawVisible_btnSearchZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchZipCode = setRawVisible_btnSearchZipCode;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel && rawVisible_shpGubunBox3;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_cbxEmailDomain = rawVisible_cbxEmailDomain && rawVisible_shpGubunBox3;
    const setIsVisible_cbxEmailDomain = setRawVisible_cbxEmailDomain;
    const isVisible_lbEmail = rawVisible_lbEmail && rawVisible_shpGubunBox3;
    const setIsVisible_lbEmail = setRawVisible_lbEmail;
    const isVisible_edEmail = rawVisible_edEmail && rawVisible_shpGubunBox3;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_btnAuthResidentNo = rawVisible_btnAuthResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_btnAuthResidentNo = setRawVisible_btnAuthResidentNo;
    const isVisible_btnExamJubsuModify = rawVisible_btnExamJubsuModify && rawVisible_shpGubunBox1;
    const setIsVisible_btnExamJubsuModify = setRawVisible_btnExamJubsuModify;
    const isVisible_gdJubsuInfo = rawVisible_gdJubsuInfo;
    const setIsVisible_gdJubsuInfo = setRawVisible_gdJubsuInfo;
    const isVisible_lbJubsuInfo = rawVisible_lbJubsuInfo;
    const setIsVisible_lbJubsuInfo = setRawVisible_lbJubsuInfo;
    const isVisible_gdOrderHist = rawVisible_gdOrderHist;
    const setIsVisible_gdOrderHist = setRawVisible_gdOrderHist;
    const isVisible_lbJubsuHist = rawVisible_lbJubsuHist;
    const setIsVisible_lbJubsuHist = setRawVisible_lbJubsuHist;
    const isVisible_lbSetlmt = rawVisible_lbSetlmt;
    const setIsVisible_lbSetlmt = setRawVisible_lbSetlmt;
    const isVisible_edEmailDomain = rawVisible_edEmailDomain && rawVisible_shpGubunBox3;
    const setIsVisible_edEmailDomain = setRawVisible_edEmailDomain;
    const isVisible_btnSeqList = rawVisible_btnSeqList && rawVisible_shpGubunBox1;
    const setIsVisible_btnSeqList = setRawVisible_btnSeqList;
    const isVisible_btnSearchExamOrder = rawVisible_btnSearchExamOrder && rawVisible_shpGubunBox1;
    const setIsVisible_btnSearchExamOrder = setRawVisible_btnSearchExamOrder;
    const isVisible_fdImage = rawVisible_fdImage;
    const setIsVisible_fdImage = setRawVisible_fdImage;
    const isVisible_hfImage = rawVisible_hfImage;
    const setIsVisible_hfImage = setRawVisible_hfImage;
    const isVisible_radCourse = rawVisible_radCourse && rawVisible_shpGubunBox1;
    const setIsVisible_radCourse = setRawVisible_radCourse;
    const isVisible_btnTraingJubsuHist = rawVisible_btnTraingJubsuHist && rawVisible_shpGubunBox3;
    const setIsVisible_btnTraingJubsuHist = setRawVisible_btnTraingJubsuHist;
    const isVisible_btnChangeProcDate = rawVisible_btnChangeProcDate && rawVisible_shpGubunBox4;
    const setIsVisible_btnChangeProcDate = setRawVisible_btnChangeProcDate;
    const isVisible_btnProcRct = rawVisible_btnProcRct && rawVisible_shpGubunBox4;
    const setIsVisible_btnProcRct = setRawVisible_btnProcRct;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct && rawVisible_shpGubunBox4;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_btnSendSms = rawVisible_btnSendSms && rawVisible_shpGubunBox3;
    const setIsVisible_btnSendSms = setRawVisible_btnSendSms;
    const isVisible_btnSendEmail = rawVisible_btnSendEmail && rawVisible_shpGubunBox3;
    const setIsVisible_btnSendEmail = setRawVisible_btnSendEmail;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt && rawVisible_shpGubunBox4;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_lbOrderChange = rawVisible_lbOrderChange && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderChange = setRawVisible_lbOrderChange;
    const isVisible_shpBox1 = rawVisible_shpBox1;
    const setIsVisible_shpBox1 = setRawVisible_shpBox1;
    const isVisible_shpBox2 = rawVisible_shpBox2;
    const setIsVisible_shpBox2 = setRawVisible_shpBox2;
    const isVisible_btnSmsStat = rawVisible_btnSmsStat && rawVisible_shpGubunBox3;
    const setIsVisible_btnSmsStat = setRawVisible_btnSmsStat;
    const isVisible_btnEmailStat = rawVisible_btnEmailStat && rawVisible_shpGubunBox3;
    const setIsVisible_btnEmailStat = setRawVisible_btnEmailStat;
    const isVisible_lbExamInfo = rawVisible_lbExamInfo && rawVisible_shpGubunBox1;
    const setIsVisible_lbExamInfo = setRawVisible_lbExamInfo;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_shpGubunBox3;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_imgLastestPicture = rawVisible_imgLastestPicture && rawVisible_shpGubunBox3;
    const setIsVisible_imgLastestPicture = setRawVisible_imgLastestPicture;
    const isVisible_btnSearchRegPicture = rawVisible_btnSearchRegPicture && rawVisible_shpGubunBox3;
    const setIsVisible_btnSearchRegPicture = setRawVisible_btnSearchRegPicture;
    const isVisible_lbExamPersonInfo = rawVisible_lbExamPersonInfo;
    const setIsVisible_lbExamPersonInfo = setRawVisible_lbExamPersonInfo;
    const isVisible_lbJubsu = rawVisible_lbJubsu;
    const setIsVisible_lbJubsu = setRawVisible_lbJubsu;
    const isVisible_lbExamInfo1 = rawVisible_lbExamInfo1 && rawVisible_shpGubunBox1;
    const setIsVisible_lbExamInfo1 = setRawVisible_lbExamInfo1;
    const isVisible_lbExamInfo2 = rawVisible_lbExamInfo2 && rawVisible_shpGubunBox1;
    const setIsVisible_lbExamInfo2 = setRawVisible_lbExamInfo2;
    const isVisible_btnUnUseJubsuNo = rawVisible_btnUnUseJubsuNo && rawVisible_shpGubunBox1;
    const setIsVisible_btnUnUseJubsuNo = setRawVisible_btnUnUseJubsuNo;
    const isVisible_btnLoadPicture = rawVisible_btnLoadPicture;
    const setIsVisible_btnLoadPicture = setRawVisible_btnLoadPicture;
    const isVisible_btnLoadScanPicture = rawVisible_btnLoadScanPicture;
    const setIsVisible_btnLoadScanPicture = setRawVisible_btnLoadScanPicture;
    const isVisible_btnScanPicture = rawVisible_btnScanPicture;
    const setIsVisible_btnScanPicture = setRawVisible_btnScanPicture;
    const isVisible_btnPictureManagement = rawVisible_btnPictureManagement && rawVisible_shpGubunBox3;
    const setIsVisible_btnPictureManagement = setRawVisible_btnPictureManagement;
    const isVisible_btnShowVirtualAccount = rawVisible_btnShowVirtualAccount && rawVisible_shpGubunBox4;
    const setIsVisible_btnShowVirtualAccount = setRawVisible_btnShowVirtualAccount;
    const isVisible_btnModifyHistory = rawVisible_btnModifyHistory && rawVisible_shpGubunBox1;
    const setIsVisible_btnModifyHistory = setRawVisible_btnModifyHistory;
    const isVisible_fiImageFile = rawVisible_fiImageFile;
    const setIsVisible_fiImageFile = setRawVisible_fiImageFile;
    const isVisible_lbExpYn = rawVisible_lbExpYn && rawVisible_shpGubunBox3;
    const setIsVisible_lbExpYn = setRawVisible_lbExpYn;
    const isVisible_chkExpYn = rawVisible_chkExpYn && rawVisible_shpGubunBox3;
    const setIsVisible_chkExpYn = setRawVisible_chkExpYn;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnExamCheatingManageLink = rawVisible_btnExamCheatingManageLink && rawVisible_shpGubunBox1;
    const setIsVisible_btnExamCheatingManageLink = setRawVisible_btnExamCheatingManageLink;
    const isVisible_edPoint = rawVisible_edPoint && rawVisible_shpGubunBox1;
    const setIsVisible_edPoint = setRawVisible_edPoint;
    const isVisible_lbPoint = rawVisible_lbPoint && rawVisible_shpGubunBox1;
    const setIsVisible_lbPoint = setRawVisible_lbPoint;
    const isVisible_edPassYn = rawVisible_edPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_edPassYn = setRawVisible_edPassYn;
    const isVisible_lbPassYn = rawVisible_lbPassYn && rawVisible_shpGubunBox1;
    const setIsVisible_lbPassYn = setRawVisible_lbPassYn;
    const isVisible_lbSeatNo = rawVisible_lbSeatNo && rawVisible_shpGubunBox1;
    const setIsVisible_lbSeatNo = setRawVisible_lbSeatNo;
    const isVisible_edSeatNo = rawVisible_edSeatNo && rawVisible_shpGubunBox1;
    const setIsVisible_edSeatNo = setRawVisible_edSeatNo;
    const isVisible_radJibuGubun = rawVisible_radJibuGubun;
    const setIsVisible_radJibuGubun = setRawVisible_radJibuGubun;
    const isVisible_btnJubsuHistory = rawVisible_btnJubsuHistory && rawVisible_shpGubunBox1;
    const setIsVisible_btnJubsuHistory = setRawVisible_btnJubsuHistory;
    const isVisible_radChangeTpmgno = rawVisible_radChangeTpmgno;
    const setIsVisible_radChangeTpmgno = setRawVisible_radChangeTpmgno;
    const isVisible_Edit0 = rawVisible_Edit0 && rawVisible_shpGubunBox3;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Button0 = rawVisible_Button0;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnPosReport = rawVisible_btnPosReport && rawVisible_shpGubunBox4;
    const setIsVisible_btnPosReport = setRawVisible_btnPosReport;

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