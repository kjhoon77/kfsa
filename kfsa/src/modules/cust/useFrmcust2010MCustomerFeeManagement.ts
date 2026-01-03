// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCustomer, Ids_oFee, Ids_oSunap, Ids_oMonthGubun, Ids_iReady, Ids_iCustomerFee, Ids_iCustomerFeeBackup, Ids_oPosPrintM, Ids_oFeeMonth, Ids_oYearbizlink, Ids_iOverFee, Ids_oJibuGubun, Ids_iMunjeCancel, Ids_iPrintGoji, Ids_oPrintGoji, Ids_oCustomerAll, Ids_oAllPrintGoji, Ids_ioVirtualAccoutAllocation, Ids_oPosVatH, Ids_ioYear } from './Frmcust2010MCustomerFeeManagementData';

export const useFrmcust2010MCustomerFeeManagement = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCustomer, setds_oCustomer] = useState<Ids_oCustomer[]>([]);
    const [ds_oFee, setds_oFee] = useState<Ids_oFee[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oMonthGubun, setds_oMonthGubun] = useState<Ids_oMonthGubun[]>([]);
    const [ds_iReady, setds_iReady] = useState<Ids_iReady[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_iCustomerFeeBackup, setds_iCustomerFeeBackup] = useState<Ids_iCustomerFeeBackup[]>([]);
    const [ds_oPosPrintM, setds_oPosPrintM] = useState<Ids_oPosPrintM[]>([]);
    const [ds_oFeeMonth, setds_oFeeMonth] = useState<Ids_oFeeMonth[]>([]);
    const [ds_oYearbizlink, setds_oYearbizlink] = useState<Ids_oYearbizlink[]>([]);
    const [ds_iOverFee, setds_iOverFee] = useState<Ids_iOverFee[]>([]);
    const [ds_oJibuGubun, setds_oJibuGubun] = useState<Ids_oJibuGubun[]>([]);
    const [ds_iMunjeCancel, setds_iMunjeCancel] = useState<Ids_iMunjeCancel[]>([]);
    const [ds_iPrintGoji, setds_iPrintGoji] = useState<Ids_iPrintGoji[]>([]);
    const [ds_oPrintGoji, setds_oPrintGoji] = useState<Ids_oPrintGoji[]>([]);
    const [ds_oCustomerAll, setds_oCustomerAll] = useState<Ids_oCustomerAll[]>([]);
    const [ds_oAllPrintGoji, setds_oAllPrintGoji] = useState<Ids_oAllPrintGoji[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_oPosVatH, setds_oPosVatH] = useState<Ids_oPosVatH[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_Shape5, setRawVisible_Shape5] = useState(true);
    const [rawVisible_shpCustomerBox, setRawVisible_shpCustomerBox] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_frmcust0012BuildingHistory, setRawVisible_frmcust0012BuildingHistory] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_shpSearchBox, setRawVisible_shpSearchBox] = useState(true);
    const [rawVisible_medCustNo, setRawVisible_medCustNo] = useState(true);
    const [rawVisible_Static26, setRawVisible_Static26] = useState(true);
    const [rawVisible_lbManagerNm, setRawVisible_lbManagerNm] = useState(true);
    const [rawVisible_edManagerNm, setRawVisible_edManagerNm] = useState(true);
    const [rawVisible_lbBuildingNm, setRawVisible_lbBuildingNm] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_lbBirthday, setRawVisible_lbBirthday] = useState(true);
    const [rawVisible_medManagerNo, setRawVisible_medManagerNo] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_edAddr1, setRawVisible_edAddr1] = useState(true);
    const [rawVisible_lbFeeYear, setRawVisible_lbFeeYear] = useState(true);
    const [rawVisible_lbSunap, setRawVisible_lbSunap] = useState(true);
    const [rawVisible_lbTotalCnt, setRawVisible_lbTotalCnt] = useState(true);
    const [rawVisible_medTotalCnt, setRawVisible_medTotalCnt] = useState(true);
    const [rawVisible_lbTotalAmount, setRawVisible_lbTotalAmount] = useState(true);
    const [rawVisible_medTotalAmount, setRawVisible_medTotalAmount] = useState(true);
    const [rawVisible_Static15, setRawVisible_Static15] = useState(true);
    const [rawVisible_gdReady, setRawVisible_gdReady] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_gdFee, setRawVisible_gdFee] = useState(true);
    const [rawVisible_gdSunap, setRawVisible_gdSunap] = useState(true);
    const [rawVisible_cbxMonthGubun, setRawVisible_cbxMonthGubun] = useState(true);
    const [rawVisible_lbOverSunap, setRawVisible_lbOverSunap] = useState(true);
    const [rawVisible_btnOverSunapAdd, setRawVisible_btnOverSunapAdd] = useState(true);
    const [rawVisible_btnOverSunapDel, setRawVisible_btnOverSunapDel] = useState(true);
    const [rawVisible_lbMinapAmount, setRawVisible_lbMinapAmount] = useState(true);
    const [rawVisible_medMinapAmount, setRawVisible_medMinapAmount] = useState(true);
    const [rawVisible_edAddr2, setRawVisible_edAddr2] = useState(true);
    const [rawVisible_lbBarcode, setRawVisible_lbBarcode] = useState(true);
    const [rawVisible_lbMember, setRawVisible_lbMember] = useState(true);
    const [rawVisible_btnSunapPosInfo, setRawVisible_btnSunapPosInfo] = useState(true);
    const [rawVisible_lbReady, setRawVisible_lbReady] = useState(true);
    const [rawVisible_btnRepay, setRawVisible_btnRepay] = useState(true);
    const [rawVisible_btnSunapReady, setRawVisible_btnSunapReady] = useState(true);
    const [rawVisible_btnManagerNm, setRawVisible_btnManagerNm] = useState(true);
    const [rawVisible_btnBuildingNm, setRawVisible_btnBuildingNm] = useState(true);
    const [rawVisible_medRegisterYear, setRawVisible_medRegisterYear] = useState(true);
    const [rawVisible_medFeeYear, setRawVisible_medFeeYear] = useState(true);
    const [rawVisible_lbOverBiz, setRawVisible_lbOverBiz] = useState(true);
    const [rawVisible_medZipCd, setRawVisible_medZipCd] = useState(true);
    const [rawVisible_Static28, setRawVisible_Static28] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_btnCustomerLink, setRawVisible_btnCustomerLink] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_lbJoinYear, setRawVisible_lbJoinYear] = useState(true);
    const [rawVisible_edRegion, setRawVisible_edRegion] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_edMember, setRawVisible_edMember] = useState(true);
    const [rawVisible_medSunapAmount, setRawVisible_medSunapAmount] = useState(true);
    const [rawVisible_lbSunapAmount, setRawVisible_lbSunapAmount] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_lbMgno, setRawVisible_lbMgno] = useState(true);
    const [rawVisible_btnManagerNo, setRawVisible_btnManagerNo] = useState(false);
    const [rawVisible_btnPos, setRawVisible_btnPos] = useState(true);
    const [rawVisible_btnPosDel, setRawVisible_btnPosDel] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnMunje, setRawVisible_btnMunje] = useState(true);
    const [rawVisible_btnChangeProcDate, setRawVisible_btnChangeProcDate] = useState(true);
    const [rawVisible_btnProcRct, setRawVisible_btnProcRct] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_btnShowVirtualAccount, setRawVisible_btnShowVirtualAccount] = useState(true);
    const [rawVisible_btnPosResultList, setRawVisible_btnPosResultList] = useState(true);
    const [rawVisible_btnPosvath, setRawVisible_btnPosvath] = useState(true);
    const [rawVisible_edOverBiz, setRawVisible_edOverBiz] = useState(true);
    const [rawVisible_btnOverBiz, setRawVisible_btnOverBiz] = useState(true);
    const [rawVisible_lbDelGubun, setRawVisible_lbDelGubun] = useState(true);
    const [rawVisible_radJibuGubun, setRawVisible_radJibuGubun] = useState(true);
    const [rawVisible_edDelGubun, setRawVisible_edDelGubun] = useState(true);
    const [rawVisible_medDelDate, setRawVisible_medDelDate] = useState(true);
    const [rawVisible_medBarcode, setRawVisible_medBarcode] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_lbCourseGroup, setRawVisible_lbCourseGroup] = useState(true);
    const [rawVisible_edCourseGroup, setRawVisible_edCourseGroup] = useState(true);
    const [rawVisible_btnPrintGoji, setRawVisible_btnPrintGoji] = useState(true);
    const [rawVisible_lbCloseDate, setRawVisible_lbCloseDate] = useState(true);
    const [rawVisible_calCloseDate, setRawVisible_calCloseDate] = useState(true);
    const [rawVisible_btnAllReady, setRawVisible_btnAllReady] = useState(true);
    const [rawVisible_btnDel, setRawVisible_btnDel] = useState(false);
    const [rawVisible_Button0, setRawVisible_Button0] = useState(false);
    const [rawVisible_btnPrintGojiImage, setRawVisible_btnPrintGojiImage] = useState(true);
    const [rawVisible_btnPrintReRctPDF, setRawVisible_btnPrintReRctPDF] = useState(true);
    const [rawVisible_edManagerNo, setRawVisible_edManagerNo] = useState(true);
    const [rawVisible_btnOldPrintGoji, setRawVisible_btnOldPrintGoji] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_edCustYear, setRawVisible_edCustYear] = useState(true);
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_Shape5 = rawVisible_Shape5;
    const setIsVisible_Shape5 = setRawVisible_Shape5;
    const isVisible_shpCustomerBox = rawVisible_shpCustomerBox;
    const setIsVisible_shpCustomerBox = setRawVisible_shpCustomerBox;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_frmcust0012BuildingHistory = rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_frmcust0012BuildingHistory = setRawVisible_frmcust0012BuildingHistory;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_shpSearchBox = rawVisible_shpSearchBox;
    const setIsVisible_shpSearchBox = setRawVisible_shpSearchBox;
    const isVisible_medCustNo = rawVisible_medCustNo && rawVisible_Shape5;
    const setIsVisible_medCustNo = setRawVisible_medCustNo;
    const isVisible_Static26 = rawVisible_Static26;
    const setIsVisible_Static26 = setRawVisible_Static26;
    const isVisible_lbManagerNm = rawVisible_lbManagerNm && rawVisible_shpSearchBox;
    const setIsVisible_lbManagerNm = setRawVisible_lbManagerNm;
    const isVisible_edManagerNm = rawVisible_edManagerNm && rawVisible_shpSearchBox;
    const setIsVisible_edManagerNm = setRawVisible_edManagerNm;
    const isVisible_lbBuildingNm = rawVisible_lbBuildingNm && rawVisible_shpSearchBox;
    const setIsVisible_lbBuildingNm = setRawVisible_lbBuildingNm;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_shpSearchBox;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_lbBirthday = rawVisible_lbBirthday && rawVisible_shpSearchBox;
    const setIsVisible_lbBirthday = setRawVisible_lbBirthday;
    const isVisible_medManagerNo = rawVisible_medManagerNo && rawVisible_shpSearchBox;
    const setIsVisible_medManagerNo = setRawVisible_medManagerNo;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_shpCustomerBox;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_edAddr1 = rawVisible_edAddr1 && rawVisible_shpCustomerBox;
    const setIsVisible_edAddr1 = setRawVisible_edAddr1;
    const isVisible_lbFeeYear = rawVisible_lbFeeYear && rawVisible_shpCustomerBox;
    const setIsVisible_lbFeeYear = setRawVisible_lbFeeYear;
    const isVisible_lbSunap = rawVisible_lbSunap;
    const setIsVisible_lbSunap = setRawVisible_lbSunap;
    const isVisible_lbTotalCnt = rawVisible_lbTotalCnt && rawVisible_Shape2;
    const setIsVisible_lbTotalCnt = setRawVisible_lbTotalCnt;
    const isVisible_medTotalCnt = rawVisible_medTotalCnt && rawVisible_Shape2;
    const setIsVisible_medTotalCnt = setRawVisible_medTotalCnt;
    const isVisible_lbTotalAmount = rawVisible_lbTotalAmount && rawVisible_Shape2;
    const setIsVisible_lbTotalAmount = setRawVisible_lbTotalAmount;
    const isVisible_medTotalAmount = rawVisible_medTotalAmount && rawVisible_Shape2;
    const setIsVisible_medTotalAmount = setRawVisible_medTotalAmount;
    const isVisible_Static15 = rawVisible_Static15 && rawVisible_Shape2;
    const setIsVisible_Static15 = setRawVisible_Static15;
    const isVisible_gdReady = rawVisible_gdReady && rawVisible_Shape2;
    const setIsVisible_gdReady = setRawVisible_gdReady;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_Shape0;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_Shape0;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_gdFee = rawVisible_gdFee && rawVisible_Shape1;
    const setIsVisible_gdFee = setRawVisible_gdFee;
    const isVisible_gdSunap = rawVisible_gdSunap && rawVisible_Shape3;
    const setIsVisible_gdSunap = setRawVisible_gdSunap;
    const isVisible_cbxMonthGubun = rawVisible_cbxMonthGubun && rawVisible_Shape1;
    const setIsVisible_cbxMonthGubun = setRawVisible_cbxMonthGubun;
    const isVisible_lbOverSunap = rawVisible_lbOverSunap && rawVisible_Shape1;
    const setIsVisible_lbOverSunap = setRawVisible_lbOverSunap;
    const isVisible_btnOverSunapAdd = rawVisible_btnOverSunapAdd && rawVisible_Shape1;
    const setIsVisible_btnOverSunapAdd = setRawVisible_btnOverSunapAdd;
    const isVisible_btnOverSunapDel = rawVisible_btnOverSunapDel && rawVisible_Shape1;
    const setIsVisible_btnOverSunapDel = setRawVisible_btnOverSunapDel;
    const isVisible_lbMinapAmount = rawVisible_lbMinapAmount && rawVisible_Shape1;
    const setIsVisible_lbMinapAmount = setRawVisible_lbMinapAmount;
    const isVisible_medMinapAmount = rawVisible_medMinapAmount && rawVisible_Shape1;
    const setIsVisible_medMinapAmount = setRawVisible_medMinapAmount;
    const isVisible_edAddr2 = rawVisible_edAddr2 && rawVisible_shpCustomerBox;
    const setIsVisible_edAddr2 = setRawVisible_edAddr2;
    const isVisible_lbBarcode = rawVisible_lbBarcode && rawVisible_Shape5;
    const setIsVisible_lbBarcode = setRawVisible_lbBarcode;
    const isVisible_lbMember = rawVisible_lbMember && rawVisible_shpCustomerBox;
    const setIsVisible_lbMember = setRawVisible_lbMember;
    const isVisible_btnSunapPosInfo = rawVisible_btnSunapPosInfo && rawVisible_Shape3;
    const setIsVisible_btnSunapPosInfo = setRawVisible_btnSunapPosInfo;
    const isVisible_lbReady = rawVisible_lbReady && rawVisible_Shape2;
    const setIsVisible_lbReady = setRawVisible_lbReady;
    const isVisible_btnRepay = rawVisible_btnRepay && rawVisible_Shape3;
    const setIsVisible_btnRepay = setRawVisible_btnRepay;
    const isVisible_btnSunapReady = rawVisible_btnSunapReady && rawVisible_Shape0;
    const setIsVisible_btnSunapReady = setRawVisible_btnSunapReady;
    const isVisible_btnManagerNm = rawVisible_btnManagerNm && rawVisible_shpSearchBox;
    const setIsVisible_btnManagerNm = setRawVisible_btnManagerNm;
    const isVisible_btnBuildingNm = rawVisible_btnBuildingNm && rawVisible_shpSearchBox;
    const setIsVisible_btnBuildingNm = setRawVisible_btnBuildingNm;
    const isVisible_medRegisterYear = rawVisible_medRegisterYear && rawVisible_shpCustomerBox;
    const setIsVisible_medRegisterYear = setRawVisible_medRegisterYear;
    const isVisible_medFeeYear = rawVisible_medFeeYear && rawVisible_shpCustomerBox;
    const setIsVisible_medFeeYear = setRawVisible_medFeeYear;
    const isVisible_lbOverBiz = rawVisible_lbOverBiz && rawVisible_shpCustomerBox;
    const setIsVisible_lbOverBiz = setRawVisible_lbOverBiz;
    const isVisible_medZipCd = rawVisible_medZipCd && rawVisible_shpCustomerBox;
    const setIsVisible_medZipCd = setRawVisible_medZipCd;
    const isVisible_Static28 = rawVisible_Static28;
    const setIsVisible_Static28 = setRawVisible_Static28;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_btnCustomerLink = rawVisible_btnCustomerLink && rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_btnCustomerLink = setRawVisible_btnCustomerLink;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_shpCustomerBox;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_shpCustomerBox;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_lbJoinYear = rawVisible_lbJoinYear && rawVisible_shpCustomerBox;
    const setIsVisible_lbJoinYear = setRawVisible_lbJoinYear;
    const isVisible_edRegion = rawVisible_edRegion && rawVisible_shpCustomerBox;
    const setIsVisible_edRegion = setRawVisible_edRegion;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_shpCustomerBox;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_edMember = rawVisible_edMember && rawVisible_shpCustomerBox;
    const setIsVisible_edMember = setRawVisible_edMember;
    const isVisible_medSunapAmount = rawVisible_medSunapAmount && rawVisible_Shape0;
    const setIsVisible_medSunapAmount = setRawVisible_medSunapAmount;
    const isVisible_lbSunapAmount = rawVisible_lbSunapAmount && rawVisible_Shape0;
    const setIsVisible_lbSunapAmount = setRawVisible_lbSunapAmount;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape5;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape5;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_lbMgno = rawVisible_lbMgno && rawVisible_Shape5;
    const setIsVisible_lbMgno = setRawVisible_lbMgno;
    const isVisible_btnManagerNo = rawVisible_btnManagerNo && rawVisible_shpSearchBox;
    const setIsVisible_btnManagerNo = setRawVisible_btnManagerNo;
    const isVisible_btnPos = rawVisible_btnPos && rawVisible_Shape2;
    const setIsVisible_btnPos = setRawVisible_btnPos;
    const isVisible_btnPosDel = rawVisible_btnPosDel && rawVisible_Shape2;
    const setIsVisible_btnPosDel = setRawVisible_btnPosDel;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnMunje = rawVisible_btnMunje && rawVisible_Shape0;
    const setIsVisible_btnMunje = setRawVisible_btnMunje;
    const isVisible_btnChangeProcDate = rawVisible_btnChangeProcDate && rawVisible_Shape3;
    const setIsVisible_btnChangeProcDate = setRawVisible_btnChangeProcDate;
    const isVisible_btnProcRct = rawVisible_btnProcRct && rawVisible_Shape3;
    const setIsVisible_btnProcRct = setRawVisible_btnProcRct;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct && rawVisible_Shape3;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_btnShowVirtualAccount = rawVisible_btnShowVirtualAccount && rawVisible_Shape3;
    const setIsVisible_btnShowVirtualAccount = setRawVisible_btnShowVirtualAccount;
    const isVisible_btnPosResultList = rawVisible_btnPosResultList && rawVisible_Shape3;
    const setIsVisible_btnPosResultList = setRawVisible_btnPosResultList;
    const isVisible_btnPosvath = rawVisible_btnPosvath && rawVisible_Shape3;
    const setIsVisible_btnPosvath = setRawVisible_btnPosvath;
    const isVisible_edOverBiz = rawVisible_edOverBiz && rawVisible_shpCustomerBox;
    const setIsVisible_edOverBiz = setRawVisible_edOverBiz;
    const isVisible_btnOverBiz = rawVisible_btnOverBiz && rawVisible_shpCustomerBox;
    const setIsVisible_btnOverBiz = setRawVisible_btnOverBiz;
    const isVisible_lbDelGubun = rawVisible_lbDelGubun && rawVisible_shpCustomerBox;
    const setIsVisible_lbDelGubun = setRawVisible_lbDelGubun;
    const isVisible_radJibuGubun = rawVisible_radJibuGubun && rawVisible_Shape5;
    const setIsVisible_radJibuGubun = setRawVisible_radJibuGubun;
    const isVisible_edDelGubun = rawVisible_edDelGubun && rawVisible_shpCustomerBox;
    const setIsVisible_edDelGubun = setRawVisible_edDelGubun;
    const isVisible_medDelDate = rawVisible_medDelDate && rawVisible_shpCustomerBox;
    const setIsVisible_medDelDate = setRawVisible_medDelDate;
    const isVisible_medBarcode = rawVisible_medBarcode && rawVisible_Shape5;
    const setIsVisible_medBarcode = setRawVisible_medBarcode;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_frmcust0012BuildingHistory;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_lbCourseGroup = rawVisible_lbCourseGroup && rawVisible_shpCustomerBox;
    const setIsVisible_lbCourseGroup = setRawVisible_lbCourseGroup;
    const isVisible_edCourseGroup = rawVisible_edCourseGroup && rawVisible_shpCustomerBox;
    const setIsVisible_edCourseGroup = setRawVisible_edCourseGroup;
    const isVisible_btnPrintGoji = rawVisible_btnPrintGoji && rawVisible_Shape1;
    const setIsVisible_btnPrintGoji = setRawVisible_btnPrintGoji;
    const isVisible_lbCloseDate = rawVisible_lbCloseDate && rawVisible_Shape1;
    const setIsVisible_lbCloseDate = setRawVisible_lbCloseDate;
    const isVisible_calCloseDate = rawVisible_calCloseDate && rawVisible_Shape1;
    const setIsVisible_calCloseDate = setRawVisible_calCloseDate;
    const isVisible_btnAllReady = rawVisible_btnAllReady && rawVisible_Shape5;
    const setIsVisible_btnAllReady = setRawVisible_btnAllReady;
    const isVisible_btnDel = rawVisible_btnDel && rawVisible_Shape3;
    const setIsVisible_btnDel = setRawVisible_btnDel;
    const isVisible_Button0 = rawVisible_Button0 && rawVisible_Shape1;
    const setIsVisible_Button0 = setRawVisible_Button0;
    const isVisible_btnPrintGojiImage = rawVisible_btnPrintGojiImage && rawVisible_Shape1;
    const setIsVisible_btnPrintGojiImage = setRawVisible_btnPrintGojiImage;
    const isVisible_btnPrintReRctPDF = rawVisible_btnPrintReRctPDF && rawVisible_Shape3;
    const setIsVisible_btnPrintReRctPDF = setRawVisible_btnPrintReRctPDF;
    const isVisible_edManagerNo = rawVisible_edManagerNo && rawVisible_shpSearchBox;
    const setIsVisible_edManagerNo = setRawVisible_edManagerNo;
    const isVisible_btnOldPrintGoji = rawVisible_btnOldPrintGoji && rawVisible_Shape1;
    const setIsVisible_btnOldPrintGoji = setRawVisible_btnOldPrintGoji;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_edCustYear = rawVisible_edCustYear && rawVisible_Shape1;
    const setIsVisible_edCustYear = setRawVisible_edCustYear;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCustomer([]);
            setds_oFee([]);
            setds_oSunap([]);
            setds_oMonthGubun([]);
            setds_iReady([]);
            setds_iCustomerFee([]);
            setds_iCustomerFeeBackup([]);
            setds_oPosPrintM([]);
            setds_oFeeMonth([]);
            setds_oYearbizlink([]);
            setds_iOverFee([]);
            setds_oJibuGubun([]);
            setds_iMunjeCancel([]);
            setds_iPrintGoji([]);
            setds_oPrintGoji([]);
            setds_oCustomerAll([]);
            setds_oAllPrintGoji([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_oPosVatH([]);
            setds_ioYear([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAllReady_OnClick = () => {
        console.log('btnAllReady_OnClick clicked');
    };
    const btnBuildingNm_OnClick = () => {
        console.log('btnBuildingNm_OnClick clicked');
    };
    const btnChangeSunapInfo_OnClick = () => {
        console.log('btnChangeSunapInfo_OnClick clicked');
    };
    const btnCustomerLink_OnClick = () => {
        console.log('btnCustomerLink_OnClick clicked');
    };
    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };
    const btnManagerNm_OnClick = () => {
        console.log('btnManagerNm_OnClick clicked');
    };
    const btnManagerNo_OnClick = () => {
        console.log('btnManagerNo_OnClick clicked');
    };
    const btnMunje_OnClick = () => {
        console.log('btnMunje_OnClick clicked');
    };
    const btnOldPrintGoji_OnClick = () => {
        console.log('btnOldPrintGoji_OnClick clicked');
    };
    const btnOverBiz_OnClick = () => {
        console.log('btnOverBiz_OnClick clicked');
    };
    const btnOverSunapAdd_OnClick = () => {
        console.log('btnOverSunapAdd_OnClick clicked');
    };
    const btnOverSunapDel_OnClick = () => {
        console.log('btnOverSunapDel_OnClick clicked');
    };
    const btnPosDel_OnClick = () => {
        console.log('btnPosDel_OnClick clicked');
    };
    const btnPosResultList_OnClick = () => {
        console.log('btnPosResultList_OnClick clicked');
    };
    const btnPos_OnClick = () => {
        console.log('btnPos_OnClick clicked');
    };
    const btnPrintAllReadyGoji_OnClick = () => {
        console.log('btnPrintAllReadyGoji_OnClick clicked');
    };
    const btnPrintEstimate_OnClick = () => {
        console.log('btnPrintEstimate_OnClick clicked');
    };
    const btnPrintGojiImage_OnClick = () => {
        console.log('btnPrintGojiImage_OnClick clicked');
    };
    const btnPrintGoji_OnClick = () => {
        console.log('btnPrintGoji_OnClick clicked');
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
    const btnRepay_OnClick = () => {
        console.log('btnRepay_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const btnSunapPosInfo_OnClick = () => {
        console.log('btnSunapPosInfo_OnClick clicked');
    };
    const btnSunapReady_OnClick = () => {
        console.log('btnSunapReady_OnClick clicked');
    };
    const lfn_CancelConfirm = () => {
        console.log('lfn_CancelConfirm clicked');
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

    return {
        isLoading,
        ds_oJibu,
        ds_oCustomer,
        ds_oFee,
        ds_oSunap,
        ds_oMonthGubun,
        ds_iReady,
        ds_iCustomerFee,
        ds_iCustomerFeeBackup,
        ds_oPosPrintM,
        ds_oFeeMonth,
        ds_oYearbizlink,
        ds_iOverFee,
        ds_oJibuGubun,
        ds_iMunjeCancel,
        ds_iPrintGoji,
        ds_oPrintGoji,
        ds_oCustomerAll,
        ds_oAllPrintGoji,
        ds_ioVirtualAccoutAllocation,
        ds_oPosVatH,
        ds_ioYear,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_Shape5,
        setIsVisible_Shape5,
        isVisible_shpCustomerBox,
        setIsVisible_shpCustomerBox,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_frmcust0012BuildingHistory,
        setIsVisible_frmcust0012BuildingHistory,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_shpSearchBox,
        setIsVisible_shpSearchBox,
        isVisible_medCustNo,
        setIsVisible_medCustNo,
        isVisible_Static26,
        setIsVisible_Static26,
        isVisible_lbManagerNm,
        setIsVisible_lbManagerNm,
        isVisible_edManagerNm,
        setIsVisible_edManagerNm,
        isVisible_lbBuildingNm,
        setIsVisible_lbBuildingNm,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_lbBirthday,
        setIsVisible_lbBirthday,
        isVisible_medManagerNo,
        setIsVisible_medManagerNo,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_edAddr1,
        setIsVisible_edAddr1,
        isVisible_lbFeeYear,
        setIsVisible_lbFeeYear,
        isVisible_lbSunap,
        setIsVisible_lbSunap,
        isVisible_lbTotalCnt,
        setIsVisible_lbTotalCnt,
        isVisible_medTotalCnt,
        setIsVisible_medTotalCnt,
        isVisible_lbTotalAmount,
        setIsVisible_lbTotalAmount,
        isVisible_medTotalAmount,
        setIsVisible_medTotalAmount,
        isVisible_Static15,
        setIsVisible_Static15,
        isVisible_gdReady,
        setIsVisible_gdReady,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_gdFee,
        setIsVisible_gdFee,
        isVisible_gdSunap,
        setIsVisible_gdSunap,
        isVisible_cbxMonthGubun,
        setIsVisible_cbxMonthGubun,
        isVisible_lbOverSunap,
        setIsVisible_lbOverSunap,
        isVisible_btnOverSunapAdd,
        setIsVisible_btnOverSunapAdd,
        isVisible_btnOverSunapDel,
        setIsVisible_btnOverSunapDel,
        isVisible_lbMinapAmount,
        setIsVisible_lbMinapAmount,
        isVisible_medMinapAmount,
        setIsVisible_medMinapAmount,
        isVisible_edAddr2,
        setIsVisible_edAddr2,
        isVisible_lbBarcode,
        setIsVisible_lbBarcode,
        isVisible_lbMember,
        setIsVisible_lbMember,
        isVisible_btnSunapPosInfo,
        setIsVisible_btnSunapPosInfo,
        isVisible_lbReady,
        setIsVisible_lbReady,
        isVisible_btnRepay,
        setIsVisible_btnRepay,
        isVisible_btnSunapReady,
        setIsVisible_btnSunapReady,
        isVisible_btnManagerNm,
        setIsVisible_btnManagerNm,
        isVisible_btnBuildingNm,
        setIsVisible_btnBuildingNm,
        isVisible_medRegisterYear,
        setIsVisible_medRegisterYear,
        isVisible_medFeeYear,
        setIsVisible_medFeeYear,
        isVisible_lbOverBiz,
        setIsVisible_lbOverBiz,
        isVisible_medZipCd,
        setIsVisible_medZipCd,
        isVisible_Static28,
        setIsVisible_Static28,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_btnCustomerLink,
        setIsVisible_btnCustomerLink,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_lbJoinYear,
        setIsVisible_lbJoinYear,
        isVisible_edRegion,
        setIsVisible_edRegion,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_edMember,
        setIsVisible_edMember,
        isVisible_medSunapAmount,
        setIsVisible_medSunapAmount,
        isVisible_lbSunapAmount,
        setIsVisible_lbSunapAmount,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_lbMgno,
        setIsVisible_lbMgno,
        isVisible_btnManagerNo,
        setIsVisible_btnManagerNo,
        isVisible_btnPos,
        setIsVisible_btnPos,
        isVisible_btnPosDel,
        setIsVisible_btnPosDel,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnMunje,
        setIsVisible_btnMunje,
        isVisible_btnChangeProcDate,
        setIsVisible_btnChangeProcDate,
        isVisible_btnProcRct,
        setIsVisible_btnProcRct,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_btnShowVirtualAccount,
        setIsVisible_btnShowVirtualAccount,
        isVisible_btnPosResultList,
        setIsVisible_btnPosResultList,
        isVisible_btnPosvath,
        setIsVisible_btnPosvath,
        isVisible_edOverBiz,
        setIsVisible_edOverBiz,
        isVisible_btnOverBiz,
        setIsVisible_btnOverBiz,
        isVisible_lbDelGubun,
        setIsVisible_lbDelGubun,
        isVisible_radJibuGubun,
        setIsVisible_radJibuGubun,
        isVisible_edDelGubun,
        setIsVisible_edDelGubun,
        isVisible_medDelDate,
        setIsVisible_medDelDate,
        isVisible_medBarcode,
        setIsVisible_medBarcode,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_lbCourseGroup,
        setIsVisible_lbCourseGroup,
        isVisible_edCourseGroup,
        setIsVisible_edCourseGroup,
        isVisible_btnPrintGoji,
        setIsVisible_btnPrintGoji,
        isVisible_lbCloseDate,
        setIsVisible_lbCloseDate,
        isVisible_calCloseDate,
        setIsVisible_calCloseDate,
        isVisible_btnAllReady,
        setIsVisible_btnAllReady,
        isVisible_btnDel,
        setIsVisible_btnDel,
        isVisible_Button0,
        setIsVisible_Button0,
        isVisible_btnPrintGojiImage,
        setIsVisible_btnPrintGojiImage,
        isVisible_btnPrintReRctPDF,
        setIsVisible_btnPrintReRctPDF,
        isVisible_edManagerNo,
        setIsVisible_edManagerNo,
        isVisible_btnOldPrintGoji,
        setIsVisible_btnOldPrintGoji,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_edCustYear,
        setIsVisible_edCustYear,
        btnAllReady_OnClick,
        btnBuildingNm_OnClick,
        btnChangeSunapInfo_OnClick,
        btnCustomerLink_OnClick,
        btnDel_OnClick,
        btnManagerNm_OnClick,
        btnManagerNo_OnClick,
        btnMunje_OnClick,
        btnOldPrintGoji_OnClick,
        btnOverBiz_OnClick,
        btnOverSunapAdd_OnClick,
        btnOverSunapDel_OnClick,
        btnPosDel_OnClick,
        btnPosResultList_OnClick,
        btnPos_OnClick,
        btnPrintAllReadyGoji_OnClick,
        btnPrintEstimate_OnClick,
        btnPrintGojiImage_OnClick,
        btnPrintGoji_OnClick,
        btnPrintReRctPDF_OnClick,
        btnPrintReRct_OnClick,
        btnProcRct_OnClick,
        btnRepay_OnClick,
        btnShowVirtualAccount_OnClick,
        btnSunapPosInfo_OnClick,
        btnSunapReady_OnClick,
        lfn_CancelConfirm,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};