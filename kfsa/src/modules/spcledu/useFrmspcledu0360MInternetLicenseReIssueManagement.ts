// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oStatus, Ids_oList, Ids_iLicenseReissueH, Ids_iLicenseImage, Ids_iLicenseH, Ids_iLicenseSettlement, Ids_oLicenseReport, Ids_oLicenseReportEdu, Ids_ioLicenseReissuePay, Ids_oPmMgno, Ids_ioPosPayment, Ids_ioPosPrintM, Ids_oPosCas, Ids_AddrLable, Ids_PrintApplication } from './Frmspcledu0360MInternetLicenseReIssueManagementData';

export const useFrmspcledu0360MInternetLicenseReIssueManagement = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_iLicenseReissueH, setds_iLicenseReissueH] = useState<Ids_iLicenseReissueH[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [ds_iLicenseH, setds_iLicenseH] = useState<Ids_iLicenseH[]>([]);
    const [ds_iLicenseSettlement, setds_iLicenseSettlement] = useState<Ids_iLicenseSettlement[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_oLicenseReportEdu, setds_oLicenseReportEdu] = useState<Ids_oLicenseReportEdu[]>([]);
    const [ds_ioLicenseReissuePay, setds_ioLicenseReissuePay] = useState<Ids_ioLicenseReissuePay[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_oPosCas, setds_oPosCas] = useState<Ids_oPosCas[]>([]);
    const [ds_AddrLable, setds_AddrLable] = useState<Ids_AddrLable[]>([]);
    const [ds_PrintApplication, setds_PrintApplication] = useState<Ids_PrintApplication[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPrintGubun, setRawVisible_lbPrintGubun] = useState(true);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_btnPrintAddr, setRawVisible_btnPrintAddr] = useState(true);
    const [rawVisible_lbResidentNo, setRawVisible_lbResidentNo] = useState(true);
    const [rawVisible_medResidentNo, setRawVisible_medResidentNo] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_lbSendAddr, setRawVisible_lbSendAddr] = useState(true);
    const [rawVisible_medSendZipCode, setRawVisible_medSendZipCode] = useState(true);
    const [rawVisible_edSendAddr1, setRawVisible_edSendAddr1] = useState(true);
    const [rawVisible_edSendAddr2, setRawVisible_edSendAddr2] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_lbLcsNo, setRawVisible_lbLcsNo] = useState(true);
    const [rawVisible_medLcsNo, setRawVisible_medLcsNo] = useState(true);
    const [rawVisible_lbIssueDate, setRawVisible_lbIssueDate] = useState(true);
    const [rawVisible_lbIssueGubun, setRawVisible_lbIssueGubun] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbInternetReIssueStatus, setRawVisible_lbInternetReIssueStatus] = useState(true);
    const [rawVisible_cbxStatus, setRawVisible_cbxStatus] = useState(true);
    const [rawVisible_lbReIssueDate, setRawVisible_lbReIssueDate] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_lbWave, setRawVisible_lbWave] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_gdList, setRawVisible_gdList] = useState(true);
    const [rawVisible_medIssueDate, setRawVisible_medIssueDate] = useState(true);
    const [rawVisible_edIssueGubun, setRawVisible_edIssueGubun] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_lbJubsuInfo, setRawVisible_lbJubsuInfo] = useState(true);
    const [rawVisible_btnReIssue, setRawVisible_btnReIssue] = useState(true);
    const [rawVisible_btnPrintAddrAll, setRawVisible_btnPrintAddrAll] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_medZipCode, setRawVisible_medZipCode] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbBarcode, setRawVisible_lbBarcode] = useState(true);
    const [rawVisible_imgPicture, setRawVisible_imgPicture] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edName, setRawVisible_edName] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_lbSendNm, setRawVisible_lbSendNm] = useState(true);
    const [rawVisible_edSendNm, setRawVisible_edSendNm] = useState(true);
    const [rawVisible_lbSendTel, setRawVisible_lbSendTel] = useState(true);
    const [rawVisible_edSendTel, setRawVisible_edSendTel] = useState(true);
    const [rawVisible_lbTransNo, setRawVisible_lbTransNo] = useState(true);
    const [rawVisible_edJibu3, setRawVisible_edJibu3] = useState(true);
    const [rawVisible_Edit6, setRawVisible_Edit6] = useState(true);
    const [rawVisible_lbNiceCheck, setRawVisible_lbNiceCheck] = useState(true);
    const [rawVisible_lbJibu2, setRawVisible_lbJibu2] = useState(true);
    const [rawVisible_edJibu2, setRawVisible_edJibu2] = useState(true);
    const [rawVisible_btnTransSave, setRawVisible_btnTransSave] = useState(true);
    const [rawVisible_tabSettlement, setRawVisible_tabSettlement] = useState(true);
    const [rawVisible_lbBuyer, setRawVisible_lbBuyer] = useState(true);
    const [rawVisible_edBuyer, setRawVisible_edBuyer] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_edSunapGubun, setRawVisible_edSunapGubun] = useState(true);
    const [rawVisible_lbStatus, setRawVisible_lbStatus] = useState(true);
    const [rawVisible_edStatus, setRawVisible_edStatus] = useState(true);
    const [rawVisible_btnVirtualAccount, setRawVisible_btnVirtualAccount] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_medDate, setRawVisible_medDate] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_btnReapy, setRawVisible_btnReapy] = useState(false);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_edBank, setRawVisible_edBank] = useState(true);
    const [rawVisible_lbAccount, setRawVisible_lbAccount] = useState(true);
    const [rawVisible_edAccount, setRawVisible_edAccount] = useState(true);
    const [rawVisible_lbReason, setRawVisible_lbReason] = useState(true);
    const [rawVisible_btnJubsu, setRawVisible_btnJubsu] = useState(true);
    const [rawVisible_edReason, setRawVisible_edReason] = useState(true);
    const [rawVisible_btnRepay, setRawVisible_btnRepay] = useState(true);
    const [rawVisible_btnTransSearch, setRawVisible_btnTransSearch] = useState(true);
    const [rawVisible_edBarcode, setRawVisible_edBarcode] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_edTransNo, setRawVisible_edTransNo] = useState(true);
    const [rawVisible_btnReturn, setRawVisible_btnReturn] = useState(true);
    const [rawVisible_divPos, setRawVisible_divPos] = useState(false);
    const [rawVisible_btnLicensePrint, setRawVisible_btnLicensePrint] = useState(true);
    const [rawVisible_hfImageFile, setRawVisible_hfImageFile] = useState(true);
    const [rawVisible_btnPrintApplication, setRawVisible_btnPrintApplication] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpGubunBox1;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPrintGubun = rawVisible_lbPrintGubun;
    const setIsVisible_lbPrintGubun = setRawVisible_lbPrintGubun;
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_btnPrintAddr = rawVisible_btnPrintAddr && rawVisible_Shape0;
    const setIsVisible_btnPrintAddr = setRawVisible_btnPrintAddr;
    const isVisible_lbResidentNo = rawVisible_lbResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_lbResidentNo = setRawVisible_lbResidentNo;
    const isVisible_medResidentNo = rawVisible_medResidentNo && rawVisible_shpGubunBox3;
    const setIsVisible_medResidentNo = setRawVisible_medResidentNo;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox3;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_lbSendAddr = rawVisible_lbSendAddr && rawVisible_Shape0;
    const setIsVisible_lbSendAddr = setRawVisible_lbSendAddr;
    const isVisible_medSendZipCode = rawVisible_medSendZipCode && rawVisible_Shape0;
    const setIsVisible_medSendZipCode = setRawVisible_medSendZipCode;
    const isVisible_edSendAddr1 = rawVisible_edSendAddr1 && rawVisible_Shape0;
    const setIsVisible_edSendAddr1 = setRawVisible_edSendAddr1;
    const isVisible_edSendAddr2 = rawVisible_edSendAddr2 && rawVisible_Shape0;
    const setIsVisible_edSendAddr2 = setRawVisible_edSendAddr2;
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_edTel = rawVisible_edTel && rawVisible_shpGubunBox3;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_shpGubunBox3;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_lbLcsNo = rawVisible_lbLcsNo && rawVisible_shpGubunBox2;
    const setIsVisible_lbLcsNo = setRawVisible_lbLcsNo;
    const isVisible_medLcsNo = rawVisible_medLcsNo && rawVisible_shpGubunBox2;
    const setIsVisible_medLcsNo = setRawVisible_medLcsNo;
    const isVisible_lbIssueDate = rawVisible_lbIssueDate && rawVisible_shpGubunBox2;
    const setIsVisible_lbIssueDate = setRawVisible_lbIssueDate;
    const isVisible_lbIssueGubun = rawVisible_lbIssueGubun && rawVisible_shpGubunBox2;
    const setIsVisible_lbIssueGubun = setRawVisible_lbIssueGubun;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbInternetReIssueStatus = rawVisible_lbInternetReIssueStatus && rawVisible_shpGubunBox1;
    const setIsVisible_lbInternetReIssueStatus = setRawVisible_lbInternetReIssueStatus;
    const isVisible_cbxStatus = rawVisible_cbxStatus && rawVisible_shpGubunBox1;
    const setIsVisible_cbxStatus = setRawVisible_cbxStatus;
    const isVisible_lbReIssueDate = rawVisible_lbReIssueDate && rawVisible_shpGubunBox1;
    const setIsVisible_lbReIssueDate = setRawVisible_lbReIssueDate;
    const isVisible_calStartDate = rawVisible_calStartDate && rawVisible_shpGubunBox1;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_lbWave = rawVisible_lbWave && rawVisible_shpGubunBox1;
    const setIsVisible_lbWave = setRawVisible_lbWave;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_shpGubunBox1;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_gdList = rawVisible_gdList;
    const setIsVisible_gdList = setRawVisible_gdList;
    const isVisible_medIssueDate = rawVisible_medIssueDate && rawVisible_shpGubunBox2;
    const setIsVisible_medIssueDate = setRawVisible_medIssueDate;
    const isVisible_edIssueGubun = rawVisible_edIssueGubun && rawVisible_shpGubunBox2;
    const setIsVisible_edIssueGubun = setRawVisible_edIssueGubun;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpGubunBox2;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_shpGubunBox2;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_lbJubsuInfo = rawVisible_lbJubsuInfo;
    const setIsVisible_lbJubsuInfo = setRawVisible_lbJubsuInfo;
    const isVisible_btnReIssue = rawVisible_btnReIssue && rawVisible_shpGubunBox3;
    const setIsVisible_btnReIssue = setRawVisible_btnReIssue;
    const isVisible_btnPrintAddrAll = rawVisible_btnPrintAddrAll && rawVisible_shpGubunBox1;
    const setIsVisible_btnPrintAddrAll = setRawVisible_btnPrintAddrAll;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpGubunBox3;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_medZipCode = rawVisible_medZipCode && rawVisible_shpGubunBox3;
    const setIsVisible_medZipCode = setRawVisible_medZipCode;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpGubunBox3;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbBarcode = rawVisible_lbBarcode && rawVisible_shpGubunBox2;
    const setIsVisible_lbBarcode = setRawVisible_lbBarcode;
    const isVisible_imgPicture = rawVisible_imgPicture && rawVisible_shpGubunBox2;
    const setIsVisible_imgPicture = setRawVisible_imgPicture;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox1;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edName = rawVisible_edName && rawVisible_shpGubunBox1;
    const setIsVisible_edName = setRawVisible_edName;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_lbSendNm = rawVisible_lbSendNm && rawVisible_Shape0;
    const setIsVisible_lbSendNm = setRawVisible_lbSendNm;
    const isVisible_edSendNm = rawVisible_edSendNm && rawVisible_Shape0;
    const setIsVisible_edSendNm = setRawVisible_edSendNm;
    const isVisible_lbSendTel = rawVisible_lbSendTel && rawVisible_Shape0;
    const setIsVisible_lbSendTel = setRawVisible_lbSendTel;
    const isVisible_edSendTel = rawVisible_edSendTel && rawVisible_Shape0;
    const setIsVisible_edSendTel = setRawVisible_edSendTel;
    const isVisible_lbTransNo = rawVisible_lbTransNo && rawVisible_Shape0;
    const setIsVisible_lbTransNo = setRawVisible_lbTransNo;
    const isVisible_edJibu3 = rawVisible_edJibu3 && rawVisible_Shape0;
    const setIsVisible_edJibu3 = setRawVisible_edJibu3;
    const isVisible_Edit6 = rawVisible_Edit6 && rawVisible_Shape0;
    const setIsVisible_Edit6 = setRawVisible_Edit6;
    const isVisible_lbNiceCheck = rawVisible_lbNiceCheck && rawVisible_shpGubunBox3;
    const setIsVisible_lbNiceCheck = setRawVisible_lbNiceCheck;
    const isVisible_lbJibu2 = rawVisible_lbJibu2 && rawVisible_shpGubunBox2;
    const setIsVisible_lbJibu2 = setRawVisible_lbJibu2;
    const isVisible_edJibu2 = rawVisible_edJibu2 && rawVisible_shpGubunBox2;
    const setIsVisible_edJibu2 = setRawVisible_edJibu2;
    const isVisible_btnTransSave = rawVisible_btnTransSave && rawVisible_Shape0;
    const setIsVisible_btnTransSave = setRawVisible_btnTransSave;
    const isVisible_tabSettlement = rawVisible_tabSettlement;
    const setIsVisible_tabSettlement = setRawVisible_tabSettlement;
    const isVisible_lbBuyer = rawVisible_lbBuyer;
    const setIsVisible_lbBuyer = setRawVisible_lbBuyer;
    const isVisible_edBuyer = rawVisible_edBuyer;
    const setIsVisible_edBuyer = setRawVisible_edBuyer;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_edSunapGubun = rawVisible_edSunapGubun;
    const setIsVisible_edSunapGubun = setRawVisible_edSunapGubun;
    const isVisible_lbStatus = rawVisible_lbStatus;
    const setIsVisible_lbStatus = setRawVisible_lbStatus;
    const isVisible_edStatus = rawVisible_edStatus;
    const setIsVisible_edStatus = setRawVisible_edStatus;
    const isVisible_btnVirtualAccount = rawVisible_btnVirtualAccount;
    const setIsVisible_btnVirtualAccount = setRawVisible_btnVirtualAccount;
    const isVisible_lbDate = rawVisible_lbDate;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_medDate = rawVisible_medDate;
    const setIsVisible_medDate = setRawVisible_medDate;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_medAmount = rawVisible_medAmount;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_lbAmount = rawVisible_lbAmount;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_btnReapy = rawVisible_btnReapy;
    const setIsVisible_btnReapy = setRawVisible_btnReapy;
    const isVisible_lbBank = rawVisible_lbBank;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_edBank = rawVisible_edBank;
    const setIsVisible_edBank = setRawVisible_edBank;
    const isVisible_lbAccount = rawVisible_lbAccount;
    const setIsVisible_lbAccount = setRawVisible_lbAccount;
    const isVisible_edAccount = rawVisible_edAccount;
    const setIsVisible_edAccount = setRawVisible_edAccount;
    const isVisible_lbReason = rawVisible_lbReason;
    const setIsVisible_lbReason = setRawVisible_lbReason;
    const isVisible_btnJubsu = rawVisible_btnJubsu && rawVisible_shpGubunBox3;
    const setIsVisible_btnJubsu = setRawVisible_btnJubsu;
    const isVisible_edReason = rawVisible_edReason;
    const setIsVisible_edReason = setRawVisible_edReason;
    const isVisible_btnRepay = rawVisible_btnRepay;
    const setIsVisible_btnRepay = setRawVisible_btnRepay;
    const isVisible_btnTransSearch = rawVisible_btnTransSearch && rawVisible_Shape0;
    const setIsVisible_btnTransSearch = setRawVisible_btnTransSearch;
    const isVisible_edBarcode = rawVisible_edBarcode && rawVisible_shpGubunBox2;
    const setIsVisible_edBarcode = setRawVisible_edBarcode;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_edTransNo = rawVisible_edTransNo && rawVisible_Shape0;
    const setIsVisible_edTransNo = setRawVisible_edTransNo;
    const isVisible_btnReturn = rawVisible_btnReturn && rawVisible_Shape0;
    const setIsVisible_btnReturn = setRawVisible_btnReturn;
    const isVisible_divPos = rawVisible_divPos && rawVisible_shpGubunBox2;
    const setIsVisible_divPos = setRawVisible_divPos;
    const isVisible_btnLicensePrint = rawVisible_btnLicensePrint && rawVisible_shpGubunBox3;
    const setIsVisible_btnLicensePrint = setRawVisible_btnLicensePrint;
    const isVisible_hfImageFile = rawVisible_hfImageFile && rawVisible_shpGubunBox2;
    const setIsVisible_hfImageFile = setRawVisible_hfImageFile;
    const isVisible_btnPrintApplication = rawVisible_btnPrintApplication && rawVisible_shpGubunBox3;
    const setIsVisible_btnPrintApplication = setRawVisible_btnPrintApplication;
    const [tabValue_tabSettlement, setTabValue_tabSettlement] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oStatus([]);
            setds_oList([]);
            setds_iLicenseReissueH([]);
            setds_iLicenseImage([]);
            setds_iLicenseH([]);
            setds_iLicenseSettlement([]);
            setds_oLicenseReport([]);
            setds_oLicenseReportEdu([]);
            setds_ioLicenseReissuePay([]);
            setds_oPmMgno([]);
            setds_ioPosPayment([]);
            setds_ioPosPrintM([]);
            setds_oPosCas([]);
            setds_AddrLable([]);
            setds_PrintApplication([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnLicensePrint_OnClick = () => {
        console.log('btnLicensePrint_OnClick clicked');
    };
    const btnPrintAddrAll_OnClick = () => {
        console.log('btnPrintAddrAll_OnClick clicked');
    };
    const btnPrintAddr_OnClick = () => {
        console.log('btnPrintAddr_OnClick clicked');
    };
    const btnPrintApplication_OnClick = () => {
        console.log('btnPrintApplication_OnClick clicked');
    };
    const btnReIssue_OnClick = () => {
        console.log('btnReIssue_OnClick clicked');
    };
    const btnReturn_OnClick = () => {
        console.log('btnReturn_OnClick clicked');
    };
    const btnTransSave_OnClick = () => {
        console.log('btnTransSave_OnClick clicked');
    };
    const btnTransSearch_OnClick = () => {
        console.log('btnTransSearch_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const tabSettlement_tabRepay_btnCancel_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnCancel_OnClick clicked');
    };
    const tabSettlement_tabRepay_btnJubsu_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnJubsu_OnClick clicked');
    };
    const tabSettlement_tabRepay_btnRepay_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnRepay_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnPrintReRct_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnPrintReRct_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnReapy_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnReapy_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnVirtualAccount_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnVirtualAccount_OnClick clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oStatus,
        ds_oList,
        ds_iLicenseReissueH,
        ds_iLicenseImage,
        ds_iLicenseH,
        ds_iLicenseSettlement,
        ds_oLicenseReport,
        ds_oLicenseReportEdu,
        ds_ioLicenseReissuePay,
        ds_oPmMgno,
        ds_ioPosPayment,
        ds_ioPosPrintM,
        ds_oPosCas,
        ds_AddrLable,
        ds_PrintApplication,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbPrintGubun,
        setIsVisible_lbPrintGubun,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_btnPrintAddr,
        setIsVisible_btnPrintAddr,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbSendAddr,
        setIsVisible_lbSendAddr,
        isVisible_medSendZipCode,
        setIsVisible_medSendZipCode,
        isVisible_edSendAddr1,
        setIsVisible_edSendAddr1,
        isVisible_edSendAddr2,
        setIsVisible_edSendAddr2,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_lbLcsNo,
        setIsVisible_lbLcsNo,
        isVisible_medLcsNo,
        setIsVisible_medLcsNo,
        isVisible_lbIssueDate,
        setIsVisible_lbIssueDate,
        isVisible_lbIssueGubun,
        setIsVisible_lbIssueGubun,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbInternetReIssueStatus,
        setIsVisible_lbInternetReIssueStatus,
        isVisible_cbxStatus,
        setIsVisible_cbxStatus,
        isVisible_lbReIssueDate,
        setIsVisible_lbReIssueDate,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_lbWave,
        setIsVisible_lbWave,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_medIssueDate,
        setIsVisible_medIssueDate,
        isVisible_edIssueGubun,
        setIsVisible_edIssueGubun,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_lbJubsuInfo,
        setIsVisible_lbJubsuInfo,
        isVisible_btnReIssue,
        setIsVisible_btnReIssue,
        isVisible_btnPrintAddrAll,
        setIsVisible_btnPrintAddrAll,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_medZipCode,
        setIsVisible_medZipCode,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_lbBarcode,
        setIsVisible_lbBarcode,
        isVisible_imgPicture,
        setIsVisible_imgPicture,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edName,
        setIsVisible_edName,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_lbSendNm,
        setIsVisible_lbSendNm,
        isVisible_edSendNm,
        setIsVisible_edSendNm,
        isVisible_lbSendTel,
        setIsVisible_lbSendTel,
        isVisible_edSendTel,
        setIsVisible_edSendTel,
        isVisible_lbTransNo,
        setIsVisible_lbTransNo,
        isVisible_edJibu3,
        setIsVisible_edJibu3,
        isVisible_Edit6,
        setIsVisible_Edit6,
        isVisible_lbNiceCheck,
        setIsVisible_lbNiceCheck,
        isVisible_lbJibu2,
        setIsVisible_lbJibu2,
        isVisible_edJibu2,
        setIsVisible_edJibu2,
        isVisible_btnTransSave,
        setIsVisible_btnTransSave,
        isVisible_tabSettlement,
        setIsVisible_tabSettlement,
        isVisible_lbBuyer,
        setIsVisible_lbBuyer,
        isVisible_edBuyer,
        setIsVisible_edBuyer,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_edSunapGubun,
        setIsVisible_edSunapGubun,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_btnVirtualAccount,
        setIsVisible_btnVirtualAccount,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_medDate,
        setIsVisible_medDate,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_btnReapy,
        setIsVisible_btnReapy,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_edBank,
        setIsVisible_edBank,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_btnJubsu,
        setIsVisible_btnJubsu,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_btnRepay,
        setIsVisible_btnRepay,
        isVisible_btnTransSearch,
        setIsVisible_btnTransSearch,
        isVisible_edBarcode,
        setIsVisible_edBarcode,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_edTransNo,
        setIsVisible_edTransNo,
        isVisible_btnReturn,
        setIsVisible_btnReturn,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_btnLicensePrint,
        setIsVisible_btnLicensePrint,
        isVisible_hfImageFile,
        setIsVisible_hfImageFile,
        isVisible_btnPrintApplication,
        setIsVisible_btnPrintApplication,
        tabValue_tabSettlement,
        setTabValue_tabSettlement,
        btnJubsu_OnClick,
        btnLicensePrint_OnClick,
        btnPrintAddrAll_OnClick,
        btnPrintAddr_OnClick,
        btnPrintApplication_OnClick,
        btnReIssue_OnClick,
        btnReturn_OnClick,
        btnTransSave_OnClick,
        btnTransSearch_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
        tabSettlement_tabRepay_btnCancel_OnClick,
        tabSettlement_tabRepay_btnJubsu_OnClick,
        tabSettlement_tabRepay_btnRepay_OnClick,
        tabSettlement_tabSunap_btnPrintReRct_OnClick,
        tabSettlement_tabSunap_btnReapy_OnClick,
        tabSettlement_tabSunap_btnVirtualAccount_OnClick,
    };
};