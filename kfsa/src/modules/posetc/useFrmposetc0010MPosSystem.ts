// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oYesNo, Ids_oPosJibu, Ids_oPosProgramId, Ids_oBank, Ids_oBizDate, Ids_oCashGubun, Ids_oInstallment, Ids_oMonth, Ids_oSunap, Ids_oSunapGubun, Ids_oYear, Ids_oSunapList, Ids_oPmMgno, Ids_ioPosEtcSettlement, Ids_ioPosPrintM, Ids_ioPosPayment, Ids_oPosCas, Ids_oAuthCheck } from './Frmposetc0010MPosSystemData';

export const useFrmposetc0010MPosSystem = () => {
    const [ds_oYesNo, setds_oYesNo] = useState<Ids_oYesNo[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [ds_oPosProgramId, setds_oPosProgramId] = useState<Ids_oPosProgramId[]>([]);
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oBizDate, setds_oBizDate] = useState<Ids_oBizDate[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oInstallment, setds_oInstallment] = useState<Ids_oInstallment[]>([]);
    const [ds_oMonth, setds_oMonth] = useState<Ids_oMonth[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [ds_oSunapList, setds_oSunapList] = useState<Ids_oSunapList[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_ioPosEtcSettlement, setds_ioPosEtcSettlement] = useState<Ids_ioPosEtcSettlement[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_oPosCas, setds_oPosCas] = useState<Ids_oPosCas[]>([]);
    const [ds_oAuthCheck, setds_oAuthCheck] = useState<Ids_oAuthCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_divSunap, setRawVisible_divSunap] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_calProcDate, setRawVisible_calProcDate] = useState(true);
    const [rawVisible_lbSunapDate, setRawVisible_lbSunapDate] = useState(true);
    const [rawVisible_btnPos, setRawVisible_btnPos] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_stSunapInfo, setRawVisible_stSunapInfo] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_radReciept, setRawVisible_radReciept] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_edSunapGubun, setRawVisible_edSunapGubun] = useState(true);
    const [rawVisible_lbBuyer, setRawVisible_lbBuyer] = useState(true);
    const [rawVisible_edBuyer, setRawVisible_edBuyer] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const [rawVisible_lbPonyDate, setRawVisible_lbPonyDate] = useState(true);
    const [rawVisible_chkPonyDate, setRawVisible_chkPonyDate] = useState(true);
    const [rawVisible_calPonyDate, setRawVisible_calPonyDate] = useState(true);
    const [rawVisible_divRepay, setRawVisible_divRepay] = useState(false);
    const [rawVisible_lbOrderNo, setRawVisible_lbOrderNo] = useState(true);
    const [rawVisible_edOrderNo, setRawVisible_edOrderNo] = useState(true);
    const [rawVisible_lbRepay, setRawVisible_lbRepay] = useState(true);
    const [rawVisible_divCard, setRawVisible_divCard] = useState(false);
    const [rawVisible_lbCardNo, setRawVisible_lbCardNo] = useState(true);
    const [rawVisible_edCardNo, setRawVisible_edCardNo] = useState(true);
    const [rawVisible_lbInstallment, setRawVisible_lbInstallment] = useState(true);
    const [rawVisible_cbxInstallment, setRawVisible_cbxInstallment] = useState(true);
    const [rawVisible_lbText3, setRawVisible_lbText3] = useState(true);
    const [rawVisible_btnInit, setRawVisible_btnInit] = useState(true);
    const [rawVisible_lbCardTerm, setRawVisible_lbCardTerm] = useState(true);
    const [rawVisible_cbxCardMonth, setRawVisible_cbxCardMonth] = useState(true);
    const [rawVisible_lbCardMonth, setRawVisible_lbCardMonth] = useState(true);
    const [rawVisible_lbCardYear, setRawVisible_lbCardYear] = useState(true);
    const [rawVisible_cbxCardYear, setRawVisible_cbxCardYear] = useState(true);
    const [rawVisible_btnUserInput, setRawVisible_btnUserInput] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_divCas, setRawVisible_divCas] = useState(false);
    const [rawVisible_cbxBank, setRawVisible_cbxBank] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_lbEndDate, setRawVisible_lbEndDate] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_lbPgmId, setRawVisible_lbPgmId] = useState(true);
    const [rawVisible_lbJibuId, setRawVisible_lbJibuId] = useState(true);
    const [rawVisible_cbxPgmId, setRawVisible_cbxPgmId] = useState(true);
    const [rawVisible_edBizGubun, setRawVisible_edBizGubun] = useState(true);
    const [rawVisible_edJibuId, setRawVisible_edJibuId] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_stSunap, setRawVisible_stSunap] = useState(true);
    const [rawVisible_radGubun, setRawVisible_radGubun] = useState(true);
    const [rawVisible_radCash, setRawVisible_radCash] = useState(true);
    const [rawVisible_lbSetlmGubun, setRawVisible_lbSetlmGubun] = useState(true);
    const [rawVisible_radSetlmGubun, setRawVisible_radSetlmGubun] = useState(true);
    const [rawVisible_lbCash, setRawVisible_lbCash] = useState(true);
    const [rawVisible_divCash, setRawVisible_divCash] = useState(false);
    const [rawVisible_lbCashGubun, setRawVisible_lbCashGubun] = useState(true);
    const [rawVisible_lbCashNo, setRawVisible_lbCashNo] = useState(true);
    const [rawVisible_edCashNo, setRawVisible_edCashNo] = useState(true);
    const [rawVisible_lbText2, setRawVisible_lbText2] = useState(true);
    const [rawVisible_radCashGubun, setRawVisible_radCashGubun] = useState(true);
    const [rawVisible_gdSunap, setRawVisible_gdSunap] = useState(true);
    const [rawVisible_calProcStartDate, setRawVisible_calProcStartDate] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_lbPgmId2, setRawVisible_lbPgmId2] = useState(true);
    const [rawVisible_cbxPgmId2, setRawVisible_cbxPgmId2] = useState(true);
    const [rawVisible_calProcEndDate, setRawVisible_calProcEndDate] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_divPos, setRawVisible_divPos] = useState(false);
    const [rawVisible_filePrintConfigFile, setRawVisible_filePrintConfigFile] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnPosReport, setRawVisible_btnPosReport] = useState(true);
    const [rawVisible_btnPrintReRct, setRawVisible_btnPrintReRct] = useState(true);
    const isVisible_divSunap = rawVisible_divSunap && rawVisible_divRepay;
    const setIsVisible_divSunap = setRawVisible_divSunap;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_calProcDate = rawVisible_calProcDate && rawVisible_shpGubunBox;
    const setIsVisible_calProcDate = setRawVisible_calProcDate;
    const isVisible_lbSunapDate = rawVisible_lbSunapDate && rawVisible_shpGubunBox;
    const setIsVisible_lbSunapDate = setRawVisible_lbSunapDate;
    const isVisible_btnPos = rawVisible_btnPos && rawVisible_shpGubunBox;
    const setIsVisible_btnPos = setRawVisible_btnPos;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_shpGubunBox1;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_shpGubunBox1;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_stSunapInfo = rawVisible_stSunapInfo;
    const setIsVisible_stSunapInfo = setRawVisible_stSunapInfo;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_shpGubunBox1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_radReciept = rawVisible_radReciept && rawVisible_shpGubunBox1;
    const setIsVisible_radReciept = setRawVisible_radReciept;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_edSunapGubun = rawVisible_edSunapGubun && rawVisible_shpGubunBox;
    const setIsVisible_edSunapGubun = setRawVisible_edSunapGubun;
    const isVisible_lbBuyer = rawVisible_lbBuyer && rawVisible_shpGubunBox;
    const setIsVisible_lbBuyer = setRawVisible_lbBuyer;
    const isVisible_edBuyer = rawVisible_edBuyer && rawVisible_shpGubunBox;
    const setIsVisible_edBuyer = setRawVisible_edBuyer;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox;
    const setIsVisible_edRemark = setRawVisible_edRemark;
    const isVisible_lbPonyDate = rawVisible_lbPonyDate && rawVisible_shpGubunBox;
    const setIsVisible_lbPonyDate = setRawVisible_lbPonyDate;
    const isVisible_chkPonyDate = rawVisible_chkPonyDate && rawVisible_shpGubunBox;
    const setIsVisible_chkPonyDate = setRawVisible_chkPonyDate;
    const isVisible_calPonyDate = rawVisible_calPonyDate && rawVisible_shpGubunBox;
    const setIsVisible_calPonyDate = setRawVisible_calPonyDate;
    const isVisible_divRepay = rawVisible_divRepay && rawVisible_divSunap;
    const setIsVisible_divRepay = setRawVisible_divRepay;
    const isVisible_lbOrderNo = rawVisible_lbOrderNo && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderNo = setRawVisible_lbOrderNo;
    const isVisible_edOrderNo = rawVisible_edOrderNo && rawVisible_shpGubunBox1;
    const setIsVisible_edOrderNo = setRawVisible_edOrderNo;
    const isVisible_lbRepay = rawVisible_lbRepay;
    const setIsVisible_lbRepay = setRawVisible_lbRepay;
    const isVisible_divCard = rawVisible_divCard && rawVisible_shpGubunBox;
    const setIsVisible_divCard = setRawVisible_divCard;
    const isVisible_lbCardNo = rawVisible_lbCardNo;
    const setIsVisible_lbCardNo = setRawVisible_lbCardNo;
    const isVisible_edCardNo = rawVisible_edCardNo;
    const setIsVisible_edCardNo = setRawVisible_edCardNo;
    const isVisible_lbInstallment = rawVisible_lbInstallment && rawVisible_shpGubunBox;
    const setIsVisible_lbInstallment = setRawVisible_lbInstallment;
    const isVisible_cbxInstallment = rawVisible_cbxInstallment && rawVisible_shpGubunBox1;
    const setIsVisible_cbxInstallment = setRawVisible_cbxInstallment;
    const isVisible_lbText3 = rawVisible_lbText3 && rawVisible_shpGubunBox1;
    const setIsVisible_lbText3 = setRawVisible_lbText3;
    const isVisible_btnInit = rawVisible_btnInit;
    const setIsVisible_btnInit = setRawVisible_btnInit;
    const isVisible_lbCardTerm = rawVisible_lbCardTerm && rawVisible_shpGubunBox;
    const setIsVisible_lbCardTerm = setRawVisible_lbCardTerm;
    const isVisible_cbxCardMonth = rawVisible_cbxCardMonth && rawVisible_shpGubunBox;
    const setIsVisible_cbxCardMonth = setRawVisible_cbxCardMonth;
    const isVisible_lbCardMonth = rawVisible_lbCardMonth && rawVisible_shpGubunBox;
    const setIsVisible_lbCardMonth = setRawVisible_lbCardMonth;
    const isVisible_lbCardYear = rawVisible_lbCardYear && rawVisible_shpGubunBox;
    const setIsVisible_lbCardYear = setRawVisible_lbCardYear;
    const isVisible_cbxCardYear = rawVisible_cbxCardYear && rawVisible_shpGubunBox;
    const setIsVisible_cbxCardYear = setRawVisible_cbxCardYear;
    const isVisible_btnUserInput = rawVisible_btnUserInput;
    const setIsVisible_btnUserInput = setRawVisible_btnUserInput;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_divCas = rawVisible_divCas && rawVisible_divCard;
    const setIsVisible_divCas = setRawVisible_divCas;
    const isVisible_cbxBank = rawVisible_cbxBank;
    const setIsVisible_cbxBank = setRawVisible_cbxBank;
    const isVisible_lbBank = rawVisible_lbBank;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_shpGubunBox;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_lbEndDate = rawVisible_lbEndDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEndDate = setRawVisible_lbEndDate;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage && rawVisible_shpGubunBox;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_lbPgmId = rawVisible_lbPgmId && rawVisible_shpGubunBox1;
    const setIsVisible_lbPgmId = setRawVisible_lbPgmId;
    const isVisible_lbJibuId = rawVisible_lbJibuId && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibuId = setRawVisible_lbJibuId;
    const isVisible_cbxPgmId = rawVisible_cbxPgmId && rawVisible_shpGubunBox1;
    const setIsVisible_cbxPgmId = setRawVisible_cbxPgmId;
    const isVisible_edBizGubun = rawVisible_edBizGubun && rawVisible_shpGubunBox1;
    const setIsVisible_edBizGubun = setRawVisible_edBizGubun;
    const isVisible_edJibuId = rawVisible_edJibuId && rawVisible_shpGubunBox1;
    const setIsVisible_edJibuId = setRawVisible_edJibuId;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnToExcel = rawVisible_btnToExcel && rawVisible_shpBtnBox;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_Shape1;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_stSunap = rawVisible_stSunap && rawVisible_shpGubunBox;
    const setIsVisible_stSunap = setRawVisible_stSunap;
    const isVisible_radGubun = rawVisible_radGubun && rawVisible_shpGubunBox;
    const setIsVisible_radGubun = setRawVisible_radGubun;
    const isVisible_radCash = rawVisible_radCash && rawVisible_shpGubunBox;
    const setIsVisible_radCash = setRawVisible_radCash;
    const isVisible_lbSetlmGubun = rawVisible_lbSetlmGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbSetlmGubun = setRawVisible_lbSetlmGubun;
    const isVisible_radSetlmGubun = rawVisible_radSetlmGubun && rawVisible_shpGubunBox;
    const setIsVisible_radSetlmGubun = setRawVisible_radSetlmGubun;
    const isVisible_lbCash = rawVisible_lbCash && rawVisible_shpGubunBox;
    const setIsVisible_lbCash = setRawVisible_lbCash;
    const isVisible_divCash = rawVisible_divCash && rawVisible_divCard;
    const setIsVisible_divCash = setRawVisible_divCash;
    const isVisible_lbCashGubun = rawVisible_lbCashGubun;
    const setIsVisible_lbCashGubun = setRawVisible_lbCashGubun;
    const isVisible_lbCashNo = rawVisible_lbCashNo && rawVisible_shpGubunBox;
    const setIsVisible_lbCashNo = setRawVisible_lbCashNo;
    const isVisible_edCashNo = rawVisible_edCashNo && rawVisible_shpGubunBox;
    const setIsVisible_edCashNo = setRawVisible_edCashNo;
    const isVisible_lbText2 = rawVisible_lbText2 && rawVisible_shpGubunBox;
    const setIsVisible_lbText2 = setRawVisible_lbText2;
    const isVisible_radCashGubun = rawVisible_radCashGubun;
    const setIsVisible_radCashGubun = setRawVisible_radCashGubun;
    const isVisible_gdSunap = rawVisible_gdSunap && rawVisible_Shape1;
    const setIsVisible_gdSunap = setRawVisible_gdSunap;
    const isVisible_calProcStartDate = rawVisible_calProcStartDate && rawVisible_Shape1;
    const setIsVisible_calProcStartDate = setRawVisible_calProcStartDate;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_lbPgmId2 = rawVisible_lbPgmId2 && rawVisible_Shape1;
    const setIsVisible_lbPgmId2 = setRawVisible_lbPgmId2;
    const isVisible_cbxPgmId2 = rawVisible_cbxPgmId2 && rawVisible_Shape1;
    const setIsVisible_cbxPgmId2 = setRawVisible_cbxPgmId2;
    const isVisible_calProcEndDate = rawVisible_calProcEndDate && rawVisible_Shape1;
    const setIsVisible_calProcEndDate = setRawVisible_calProcEndDate;
    const isVisible_Static12 = rawVisible_Static12 && rawVisible_Shape1;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_divPos = rawVisible_divPos && rawVisible_shpGubunBox;
    const setIsVisible_divPos = setRawVisible_divPos;
    const isVisible_filePrintConfigFile = rawVisible_filePrintConfigFile && rawVisible_shpGubunBox;
    const setIsVisible_filePrintConfigFile = setRawVisible_filePrintConfigFile;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnPosReport = rawVisible_btnPosReport && rawVisible_shpBtnBox;
    const setIsVisible_btnPosReport = setRawVisible_btnPosReport;
    const isVisible_btnPrintReRct = rawVisible_btnPrintReRct;
    const setIsVisible_btnPrintReRct = setRawVisible_btnPrintReRct;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oYesNo([]);
            setds_oPosJibu([]);
            setds_oPosProgramId([]);
            setds_oBank([]);
            setds_oBizDate([]);
            setds_oCashGubun([]);
            setds_oInstallment([]);
            setds_oMonth([]);
            setds_oSunap([]);
            setds_oSunapGubun([]);
            setds_oYear([]);
            setds_oSunapList([]);
            setds_oPmMgno([]);
            setds_ioPosEtcSettlement([]);
            setds_ioPosPrintM([]);
            setds_ioPosPayment([]);
            setds_oPosCas([]);
            setds_oAuthCheck([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnPosReport_OnClick = () => {
        console.log('btnPosReport_OnClick clicked');
    };
    const btnPrintReRct_OnClick = () => {
        console.log('btnPrintReRct_OnClick clicked');
    };
    const divCard_btnInit_OnClick = () => {
        console.log('divCard_btnInit_OnClick clicked');
    };
    const divCard_btnUserInput_OnClick = () => {
        console.log('divCard_btnUserInput_OnClick clicked');
    };
    const divRepay_btnPos_OnClick = () => {
        console.log('divRepay_btnPos_OnClick clicked');
    };
    const divRepay_chkPonyDate_OnClick = () => {
        console.log('divRepay_chkPonyDate_OnClick clicked');
    };
    const divSunap_btnPos_OnClick = () => {
        console.log('divSunap_btnPos_OnClick clicked');
    };
    const divSunap_chkPonyDate_OnClick = () => {
        console.log('divSunap_chkPonyDate_OnClick clicked');
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

    return {
        isLoading,
        ds_oYesNo,
        ds_oPosJibu,
        ds_oPosProgramId,
        ds_oBank,
        ds_oBizDate,
        ds_oCashGubun,
        ds_oInstallment,
        ds_oMonth,
        ds_oSunap,
        ds_oSunapGubun,
        ds_oYear,
        ds_oSunapList,
        ds_oPmMgno,
        ds_ioPosEtcSettlement,
        ds_ioPosPrintM,
        ds_ioPosPayment,
        ds_oPosCas,
        ds_oAuthCheck,
        isVisible_divSunap,
        setIsVisible_divSunap,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_calProcDate,
        setIsVisible_calProcDate,
        isVisible_lbSunapDate,
        setIsVisible_lbSunapDate,
        isVisible_btnPos,
        setIsVisible_btnPos,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_stSunapInfo,
        setIsVisible_stSunapInfo,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_radReciept,
        setIsVisible_radReciept,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_edSunapGubun,
        setIsVisible_edSunapGubun,
        isVisible_lbBuyer,
        setIsVisible_lbBuyer,
        isVisible_edBuyer,
        setIsVisible_edBuyer,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_edRemark,
        setIsVisible_edRemark,
        isVisible_lbPonyDate,
        setIsVisible_lbPonyDate,
        isVisible_chkPonyDate,
        setIsVisible_chkPonyDate,
        isVisible_calPonyDate,
        setIsVisible_calPonyDate,
        isVisible_divRepay,
        setIsVisible_divRepay,
        isVisible_lbOrderNo,
        setIsVisible_lbOrderNo,
        isVisible_edOrderNo,
        setIsVisible_edOrderNo,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_divCard,
        setIsVisible_divCard,
        isVisible_lbCardNo,
        setIsVisible_lbCardNo,
        isVisible_edCardNo,
        setIsVisible_edCardNo,
        isVisible_lbInstallment,
        setIsVisible_lbInstallment,
        isVisible_cbxInstallment,
        setIsVisible_cbxInstallment,
        isVisible_lbText3,
        setIsVisible_lbText3,
        isVisible_btnInit,
        setIsVisible_btnInit,
        isVisible_lbCardTerm,
        setIsVisible_lbCardTerm,
        isVisible_cbxCardMonth,
        setIsVisible_cbxCardMonth,
        isVisible_lbCardMonth,
        setIsVisible_lbCardMonth,
        isVisible_lbCardYear,
        setIsVisible_lbCardYear,
        isVisible_cbxCardYear,
        setIsVisible_cbxCardYear,
        isVisible_btnUserInput,
        setIsVisible_btnUserInput,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_divCas,
        setIsVisible_divCas,
        isVisible_cbxBank,
        setIsVisible_cbxBank,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_lbEndDate,
        setIsVisible_lbEndDate,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_lbPgmId,
        setIsVisible_lbPgmId,
        isVisible_lbJibuId,
        setIsVisible_lbJibuId,
        isVisible_cbxPgmId,
        setIsVisible_cbxPgmId,
        isVisible_edBizGubun,
        setIsVisible_edBizGubun,
        isVisible_edJibuId,
        setIsVisible_edJibuId,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_stSunap,
        setIsVisible_stSunap,
        isVisible_radGubun,
        setIsVisible_radGubun,
        isVisible_radCash,
        setIsVisible_radCash,
        isVisible_lbSetlmGubun,
        setIsVisible_lbSetlmGubun,
        isVisible_radSetlmGubun,
        setIsVisible_radSetlmGubun,
        isVisible_lbCash,
        setIsVisible_lbCash,
        isVisible_divCash,
        setIsVisible_divCash,
        isVisible_lbCashGubun,
        setIsVisible_lbCashGubun,
        isVisible_lbCashNo,
        setIsVisible_lbCashNo,
        isVisible_edCashNo,
        setIsVisible_edCashNo,
        isVisible_lbText2,
        setIsVisible_lbText2,
        isVisible_radCashGubun,
        setIsVisible_radCashGubun,
        isVisible_gdSunap,
        setIsVisible_gdSunap,
        isVisible_calProcStartDate,
        setIsVisible_calProcStartDate,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_lbPgmId2,
        setIsVisible_lbPgmId2,
        isVisible_cbxPgmId2,
        setIsVisible_cbxPgmId2,
        isVisible_calProcEndDate,
        setIsVisible_calProcEndDate,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_filePrintConfigFile,
        setIsVisible_filePrintConfigFile,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnPosReport,
        setIsVisible_btnPosReport,
        isVisible_btnPrintReRct,
        setIsVisible_btnPrintReRct,
        btnPosReport_OnClick,
        btnPrintReRct_OnClick,
        divCard_btnInit_OnClick,
        divCard_btnUserInput_OnClick,
        divRepay_btnPos_OnClick,
        divRepay_chkPonyDate_OnClick,
        divSunap_btnPos_OnClick,
        divSunap_chkPonyDate_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};