// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJubsu, Ids_oSunap, Ids_oChange, Ids_oRepay, Ids_oCustomer, Ids_ioCustomerFee, Ids_ioPosPrintM, Ids_ioPosPayment, Ids_ioEduJubsuH, Ids_oPmMgno, Ids_oInetReport, Ids_oPosJibu } from './Frmcust1031PInetEduStatisticsData';

export const useFrmcust1031PInetEduStatistics = () => {
    const [ds_oJubsu, setds_oJubsu] = useState<Ids_oJubsu[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oChange, setds_oChange] = useState<Ids_oChange[]>([]);
    const [ds_oRepay, setds_oRepay] = useState<Ids_oRepay[]>([]);
    const [ds_oCustomer, setds_oCustomer] = useState<Ids_oCustomer[]>([]);
    const [ds_ioCustomerFee, setds_ioCustomerFee] = useState<Ids_ioCustomerFee[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_ioEduJubsuH, setds_ioEduJubsuH] = useState<Ids_ioEduJubsuH[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_oInetReport, setds_oInetReport] = useState<Ids_oInetReport[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape6, setRawVisible_Shape6] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_divPos, setRawVisible_divPos] = useState(false);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_Static24, setRawVisible_Static24] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_edJibu, setRawVisible_edJibu] = useState(true);
    const [rawVisible_lbEmail, setRawVisible_lbEmail] = useState(true);
    const [rawVisible_lbTime, setRawVisible_lbTime] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_edPlace, setRawVisible_edPlace] = useState(true);
    const [rawVisible_lbJebsuDate, setRawVisible_lbJebsuDate] = useState(true);
    const [rawVisible_medJubsuDate, setRawVisible_medJubsuDate] = useState(true);
    const [rawVisible_lbPlace, setRawVisible_lbPlace] = useState(true);
    const [rawVisible_lbCourse, setRawVisible_lbCourse] = useState(true);
    const [rawVisible_medTime, setRawVisible_medTime] = useState(true);
    const [rawVisible_edCourse, setRawVisible_edCourse] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_medDate, setRawVisible_medDate] = useState(true);
    const [rawVisible_medEmail, setRawVisible_medEmail] = useState(true);
    const [rawVisible_btnSendMail, setRawVisible_btnSendMail] = useState(false);
    const [rawVisible_divCustomer, setRawVisible_divCustomer] = useState(false);
    const [rawVisible_Shape7, setRawVisible_Shape7] = useState(true);
    const [rawVisible_lbCustomerNo, setRawVisible_lbCustomerNo] = useState(true);
    const [rawVisible_edBuildingNm, setRawVisible_edBuildingNm] = useState(true);
    const [rawVisible_Static54, setRawVisible_Static54] = useState(true);
    const [rawVisible_lbBuildingNm, setRawVisible_lbBuildingNm] = useState(true);
    const [rawVisible_edTel, setRawVisible_edTel] = useState(true);
    const [rawVisible_lbTel, setRawVisible_lbTel] = useState(true);
    const [rawVisible_lbName, setRawVisible_lbName] = useState(true);
    const [rawVisible_edName, setRawVisible_edName] = useState(true);
    const [rawVisible_edEmail, setRawVisible_edEmail] = useState(true);
    const [rawVisible_lbMemberGubun, setRawVisible_lbMemberGubun] = useState(true);
    const [rawVisible_edMemberGubun, setRawVisible_edMemberGubun] = useState(true);
    const [rawVisible_lbRegion, setRawVisible_lbRegion] = useState(true);
    const [rawVisible_edRegion, setRawVisible_edRegion] = useState(true);
    const [rawVisible_lbBirthday, setRawVisible_lbBirthday] = useState(true);
    const [rawVisible_medBirthday, setRawVisible_medBirthday] = useState(true);
    const [rawVisible_lbAddr, setRawVisible_lbAddr] = useState(true);
    const [rawVisible_edAddr, setRawVisible_edAddr] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_lbRange, setRawVisible_lbRange] = useState(true);
    const [rawVisible_edRange, setRawVisible_edRange] = useState(true);
    const [rawVisible_edCustomerNo, setRawVisible_edCustomerNo] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_MaskEdit0, setRawVisible_MaskEdit0] = useState(true);
    const [rawVisible_divSunap, setRawVisible_divSunap] = useState(false);
    const [rawVisible_lbStatus, setRawVisible_lbStatus] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_lbBuyer, setRawVisible_lbBuyer] = useState(true);
    const [rawVisible_edBuyer, setRawVisible_edBuyer] = useState(true);
    const [rawVisible_edStatus, setRawVisible_edStatus] = useState(true);
    const [rawVisible_lbSetlmGubun, setRawVisible_lbSetlmGubun] = useState(true);
    const [rawVisible_edSetlmGubun, setRawVisible_edSetlmGubun] = useState(true);
    const [rawVisible_lbSunapDate, setRawVisible_lbSunapDate] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const [rawVisible_medSunapDate, setRawVisible_medSunapDate] = useState(true);
    const [rawVisible_btnShowVirtualAccount, setRawVisible_btnShowVirtualAccount] = useState(true);
    const [rawVisible_divChange, setRawVisible_divChange] = useState(false);
    const [rawVisible_edReason, setRawVisible_edReason] = useState(true);
    const [rawVisible_lbReason, setRawVisible_lbReason] = useState(true);
    const [rawVisible_divRepay, setRawVisible_divRepay] = useState(false);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_lbAccount, setRawVisible_lbAccount] = useState(true);
    const [rawVisible_edAccount, setRawVisible_edAccount] = useState(true);
    const [rawVisible_lbRepayDate, setRawVisible_lbRepayDate] = useState(true);
    const [rawVisible_edBank, setRawVisible_edBank] = useState(true);
    const [rawVisible_medRepayDate, setRawVisible_medRepayDate] = useState(true);
    const [rawVisible_btnReport, setRawVisible_btnReport] = useState(true);
    const [rawVisible_btnProc, setRawVisible_btnProc] = useState(false);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(false);
    const [rawVisible_btnRepay, setRawVisible_btnRepay] = useState(true);
    const isVisible_Shape6 = rawVisible_Shape6;
    const setIsVisible_Shape6 = setRawVisible_Shape6;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_divPos = rawVisible_divPos && rawVisible_Shape7;
    const setIsVisible_divPos = setRawVisible_divPos;
    const isVisible_lbYear = rawVisible_lbYear && rawVisible_Shape6;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_Static24 = rawVisible_Static24 && rawVisible_Shape7;
    const setIsVisible_Static24 = setRawVisible_Static24;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_Shape7;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_edJibu = rawVisible_edJibu && rawVisible_Shape7;
    const setIsVisible_edJibu = setRawVisible_edJibu;
    const isVisible_lbEmail = rawVisible_lbEmail && rawVisible_divChange;
    const setIsVisible_lbEmail = setRawVisible_lbEmail;
    const isVisible_lbTime = rawVisible_lbTime && rawVisible_Shape7;
    const setIsVisible_lbTime = setRawVisible_lbTime;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_Shape7;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_edPlace = rawVisible_edPlace && rawVisible_Shape7;
    const setIsVisible_edPlace = setRawVisible_edPlace;
    const isVisible_lbJebsuDate = rawVisible_lbJebsuDate && rawVisible_Shape6;
    const setIsVisible_lbJebsuDate = setRawVisible_lbJebsuDate;
    const isVisible_medJubsuDate = rawVisible_medJubsuDate && rawVisible_Shape6;
    const setIsVisible_medJubsuDate = setRawVisible_medJubsuDate;
    const isVisible_lbPlace = rawVisible_lbPlace && rawVisible_Shape7;
    const setIsVisible_lbPlace = setRawVisible_lbPlace;
    const isVisible_lbCourse = rawVisible_lbCourse && rawVisible_Shape7;
    const setIsVisible_lbCourse = setRawVisible_lbCourse;
    const isVisible_medTime = rawVisible_medTime && rawVisible_Shape7;
    const setIsVisible_medTime = setRawVisible_medTime;
    const isVisible_edCourse = rawVisible_edCourse && rawVisible_Shape7;
    const setIsVisible_edCourse = setRawVisible_edCourse;
    const isVisible_edYear = rawVisible_edYear && rawVisible_Shape6;
    const setIsVisible_edYear = setRawVisible_edYear;
    const isVisible_imgImage = rawVisible_imgImage && rawVisible_Shape7;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_medDate = rawVisible_medDate && rawVisible_Shape7;
    const setIsVisible_medDate = setRawVisible_medDate;
    const isVisible_medEmail = rawVisible_medEmail && rawVisible_Shape6;
    const setIsVisible_medEmail = setRawVisible_medEmail;
    const isVisible_btnSendMail = rawVisible_btnSendMail && rawVisible_Shape6;
    const setIsVisible_btnSendMail = setRawVisible_btnSendMail;
    const isVisible_divCustomer = rawVisible_divCustomer;
    const setIsVisible_divCustomer = setRawVisible_divCustomer;
    const isVisible_Shape7 = rawVisible_Shape7 && rawVisible_Shape7;
    const setIsVisible_Shape7 = setRawVisible_Shape7;
    const isVisible_lbCustomerNo = rawVisible_lbCustomerNo && rawVisible_Shape7;
    const setIsVisible_lbCustomerNo = setRawVisible_lbCustomerNo;
    const isVisible_edBuildingNm = rawVisible_edBuildingNm && rawVisible_Shape7;
    const setIsVisible_edBuildingNm = setRawVisible_edBuildingNm;
    const isVisible_Static54 = rawVisible_Static54;
    const setIsVisible_Static54 = setRawVisible_Static54;
    const isVisible_lbBuildingNm = rawVisible_lbBuildingNm && rawVisible_Shape7;
    const setIsVisible_lbBuildingNm = setRawVisible_lbBuildingNm;
    const isVisible_edTel = rawVisible_edTel && rawVisible_divChange;
    const setIsVisible_edTel = setRawVisible_edTel;
    const isVisible_lbTel = rawVisible_lbTel && rawVisible_divChange;
    const setIsVisible_lbTel = setRawVisible_lbTel;
    const isVisible_lbName = rawVisible_lbName && rawVisible_Shape7;
    const setIsVisible_lbName = setRawVisible_lbName;
    const isVisible_edName = rawVisible_edName && rawVisible_Shape7;
    const setIsVisible_edName = setRawVisible_edName;
    const isVisible_edEmail = rawVisible_edEmail && rawVisible_divChange;
    const setIsVisible_edEmail = setRawVisible_edEmail;
    const isVisible_lbMemberGubun = rawVisible_lbMemberGubun && rawVisible_Shape7;
    const setIsVisible_lbMemberGubun = setRawVisible_lbMemberGubun;
    const isVisible_edMemberGubun = rawVisible_edMemberGubun && rawVisible_Shape7;
    const setIsVisible_edMemberGubun = setRawVisible_edMemberGubun;
    const isVisible_lbRegion = rawVisible_lbRegion && rawVisible_Shape7;
    const setIsVisible_lbRegion = setRawVisible_lbRegion;
    const isVisible_edRegion = rawVisible_edRegion && rawVisible_Shape7;
    const setIsVisible_edRegion = setRawVisible_edRegion;
    const isVisible_lbBirthday = rawVisible_lbBirthday && rawVisible_Shape7;
    const setIsVisible_lbBirthday = setRawVisible_lbBirthday;
    const isVisible_medBirthday = rawVisible_medBirthday && rawVisible_Shape7;
    const setIsVisible_medBirthday = setRawVisible_medBirthday;
    const isVisible_lbAddr = rawVisible_lbAddr && rawVisible_Shape6;
    const setIsVisible_lbAddr = setRawVisible_lbAddr;
    const isVisible_edAddr = rawVisible_edAddr && rawVisible_Shape6;
    const setIsVisible_edAddr = setRawVisible_edAddr;
    const isVisible_lbHpTel = rawVisible_lbHpTel && rawVisible_divChange;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel && rawVisible_divChange;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_lbRange = rawVisible_lbRange && rawVisible_Shape6;
    const setIsVisible_lbRange = setRawVisible_lbRange;
    const isVisible_edRange = rawVisible_edRange && rawVisible_Shape6;
    const setIsVisible_edRange = setRawVisible_edRange;
    const isVisible_edCustomerNo = rawVisible_edCustomerNo && rawVisible_Shape7;
    const setIsVisible_edCustomerNo = setRawVisible_edCustomerNo;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape7;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_MaskEdit0 = rawVisible_MaskEdit0 && rawVisible_Shape7;
    const setIsVisible_MaskEdit0 = setRawVisible_MaskEdit0;
    const isVisible_divSunap = rawVisible_divSunap;
    const setIsVisible_divSunap = setRawVisible_divSunap;
    const isVisible_lbStatus = rawVisible_lbStatus && rawVisible_Shape7;
    const setIsVisible_lbStatus = setRawVisible_lbStatus;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_Shape7;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_lbBuyer = rawVisible_lbBuyer && rawVisible_Shape7;
    const setIsVisible_lbBuyer = setRawVisible_lbBuyer;
    const isVisible_edBuyer = rawVisible_edBuyer && rawVisible_Shape7;
    const setIsVisible_edBuyer = setRawVisible_edBuyer;
    const isVisible_edStatus = rawVisible_edStatus && rawVisible_Shape7;
    const setIsVisible_edStatus = setRawVisible_edStatus;
    const isVisible_lbSetlmGubun = rawVisible_lbSetlmGubun && rawVisible_Shape7;
    const setIsVisible_lbSetlmGubun = setRawVisible_lbSetlmGubun;
    const isVisible_edSetlmGubun = rawVisible_edSetlmGubun && rawVisible_Shape7;
    const setIsVisible_edSetlmGubun = setRawVisible_edSetlmGubun;
    const isVisible_lbSunapDate = rawVisible_lbSunapDate && rawVisible_Shape7;
    const setIsVisible_lbSunapDate = setRawVisible_lbSunapDate;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_Shape7;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct && rawVisible_Shape7;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;
    const isVisible_medSunapDate = rawVisible_medSunapDate && rawVisible_Shape7;
    const setIsVisible_medSunapDate = setRawVisible_medSunapDate;
    const isVisible_btnShowVirtualAccount = rawVisible_btnShowVirtualAccount && rawVisible_Shape7;
    const setIsVisible_btnShowVirtualAccount = setRawVisible_btnShowVirtualAccount;
    const isVisible_divChange = rawVisible_divChange;
    const setIsVisible_divChange = setRawVisible_divChange;
    const isVisible_edReason = rawVisible_edReason && rawVisible_Shape7;
    const setIsVisible_edReason = setRawVisible_edReason;
    const isVisible_lbReason = rawVisible_lbReason && rawVisible_Shape7;
    const setIsVisible_lbReason = setRawVisible_lbReason;
    const isVisible_divRepay = rawVisible_divRepay;
    const setIsVisible_divRepay = setRawVisible_divRepay;
    const isVisible_lbBank = rawVisible_lbBank && rawVisible_Shape7;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_lbAccount = rawVisible_lbAccount && rawVisible_Shape7;
    const setIsVisible_lbAccount = setRawVisible_lbAccount;
    const isVisible_edAccount = rawVisible_edAccount && rawVisible_Shape7;
    const setIsVisible_edAccount = setRawVisible_edAccount;
    const isVisible_lbRepayDate = rawVisible_lbRepayDate && rawVisible_Shape7;
    const setIsVisible_lbRepayDate = setRawVisible_lbRepayDate;
    const isVisible_edBank = rawVisible_edBank && rawVisible_Shape7;
    const setIsVisible_edBank = setRawVisible_edBank;
    const isVisible_medRepayDate = rawVisible_medRepayDate && rawVisible_Shape7;
    const setIsVisible_medRepayDate = setRawVisible_medRepayDate;
    const isVisible_btnReport = rawVisible_btnReport;
    const setIsVisible_btnReport = setRawVisible_btnReport;
    const isVisible_btnProc = rawVisible_btnProc;
    const setIsVisible_btnProc = setRawVisible_btnProc;
    const isVisible_btnCancel = rawVisible_btnCancel;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnRepay = rawVisible_btnRepay;
    const setIsVisible_btnRepay = setRawVisible_btnRepay;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJubsu([]);
            setds_oSunap([]);
            setds_oChange([]);
            setds_oRepay([]);
            setds_oCustomer([]);
            setds_ioCustomerFee([]);
            setds_ioPosPrintM([]);
            setds_ioPosPayment([]);
            setds_ioEduJubsuH([]);
            setds_oPmMgno([]);
            setds_oInetReport([]);
            setds_oPosJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnProc_OnClick = () => {
        console.log('btnProc_OnClick clicked');
    };
    const btnRepay_OnClick = () => {
        console.log('btnRepay_OnClick clicked');
    };
    const btnReport_OnClick = () => {
        console.log('btnReport_OnClick clicked');
    };
    const btnSendMail_OnClick = () => {
        console.log('btnSendMail_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };
    const divSunap_btnPrintReRct_OnClick = () => {
        console.log('divSunap_btnPrintReRct_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oJubsu,
        ds_oSunap,
        ds_oChange,
        ds_oRepay,
        ds_oCustomer,
        ds_ioCustomerFee,
        ds_ioPosPrintM,
        ds_ioPosPayment,
        ds_ioEduJubsuH,
        ds_oPmMgno,
        ds_oInetReport,
        ds_oPosJibu,
        isVisible_Shape6,
        setIsVisible_Shape6,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_Static24,
        setIsVisible_Static24,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_edJibu,
        setIsVisible_edJibu,
        isVisible_lbEmail,
        setIsVisible_lbEmail,
        isVisible_lbTime,
        setIsVisible_lbTime,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_edPlace,
        setIsVisible_edPlace,
        isVisible_lbJebsuDate,
        setIsVisible_lbJebsuDate,
        isVisible_medJubsuDate,
        setIsVisible_medJubsuDate,
        isVisible_lbPlace,
        setIsVisible_lbPlace,
        isVisible_lbCourse,
        setIsVisible_lbCourse,
        isVisible_medTime,
        setIsVisible_medTime,
        isVisible_edCourse,
        setIsVisible_edCourse,
        isVisible_edYear,
        setIsVisible_edYear,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_medDate,
        setIsVisible_medDate,
        isVisible_medEmail,
        setIsVisible_medEmail,
        isVisible_btnSendMail,
        setIsVisible_btnSendMail,
        isVisible_divCustomer,
        setIsVisible_divCustomer,
        isVisible_Shape7,
        setIsVisible_Shape7,
        isVisible_lbCustomerNo,
        setIsVisible_lbCustomerNo,
        isVisible_edBuildingNm,
        setIsVisible_edBuildingNm,
        isVisible_Static54,
        setIsVisible_Static54,
        isVisible_lbBuildingNm,
        setIsVisible_lbBuildingNm,
        isVisible_edTel,
        setIsVisible_edTel,
        isVisible_lbTel,
        setIsVisible_lbTel,
        isVisible_lbName,
        setIsVisible_lbName,
        isVisible_edName,
        setIsVisible_edName,
        isVisible_edEmail,
        setIsVisible_edEmail,
        isVisible_lbMemberGubun,
        setIsVisible_lbMemberGubun,
        isVisible_edMemberGubun,
        setIsVisible_edMemberGubun,
        isVisible_lbRegion,
        setIsVisible_lbRegion,
        isVisible_edRegion,
        setIsVisible_edRegion,
        isVisible_lbBirthday,
        setIsVisible_lbBirthday,
        isVisible_medBirthday,
        setIsVisible_medBirthday,
        isVisible_lbAddr,
        setIsVisible_lbAddr,
        isVisible_edAddr,
        setIsVisible_edAddr,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_lbRange,
        setIsVisible_lbRange,
        isVisible_edRange,
        setIsVisible_edRange,
        isVisible_edCustomerNo,
        setIsVisible_edCustomerNo,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_MaskEdit0,
        setIsVisible_MaskEdit0,
        isVisible_divSunap,
        setIsVisible_divSunap,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_lbBuyer,
        setIsVisible_lbBuyer,
        isVisible_edBuyer,
        setIsVisible_edBuyer,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_lbSetlmGubun,
        setIsVisible_lbSetlmGubun,
        isVisible_edSetlmGubun,
        setIsVisible_edSetlmGubun,
        isVisible_lbSunapDate,
        setIsVisible_lbSunapDate,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        isVisible_medSunapDate,
        setIsVisible_medSunapDate,
        isVisible_btnShowVirtualAccount,
        setIsVisible_btnShowVirtualAccount,
        isVisible_divChange,
        setIsVisible_divChange,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_divRepay,
        setIsVisible_divRepay,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_lbRepayDate,
        setIsVisible_lbRepayDate,
        isVisible_edBank,
        setIsVisible_edBank,
        isVisible_medRepayDate,
        setIsVisible_medRepayDate,
        isVisible_btnReport,
        setIsVisible_btnReport,
        isVisible_btnProc,
        setIsVisible_btnProc,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnRepay,
        setIsVisible_btnRepay,
        btnCancel_OnClick,
        btnProc_OnClick,
        btnRepay_OnClick,
        btnReport_OnClick,
        btnSendMail_OnClick,
        btnShowVirtualAccount_OnClick,
        divSunap_btnPrintReRct_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};