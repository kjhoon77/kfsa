// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oRecieptGubun, Ids_oSunap, Ids_oSunapGubun, Ids_oPosJibu, Ids_oInstallment, Ids_oCashGubun, Ids_oYear, Ids_oMonth, Ids_oCashYn, Ids_oBank, Ids_ioCustomerFee, Ids_ioPosPrintM, Ids_ioPosPayment, Ids_iReady, Ids_oPmMgno, Ids_oGroupNo, Ids_iCustomerFeeBackup, Ids_ioPosPrintMBackup, Ids_ioPosPaymentBackup, Ids_iReadyBackup, Ids_oPosCas, Ids_oBizDate, Ids_oNewBankAccount, Ids_ioVirtualAccoutAllocation, Ids_iEduJubsuStatus, Ids_oEduJubsuCheck } from './Frmcust2020PCustomerFeePosData';

export const useFrmcust2020PCustomerFeePos = () => {
    const [ds_oRecieptGubun, setds_oRecieptGubun] = useState<Ids_oRecieptGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [ds_oInstallment, setds_oInstallment] = useState<Ids_oInstallment[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [ds_oMonth, setds_oMonth] = useState<Ids_oMonth[]>([]);
    const [ds_oCashYn, setds_oCashYn] = useState<Ids_oCashYn[]>([]);
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_ioCustomerFee, setds_ioCustomerFee] = useState<Ids_ioCustomerFee[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_iReady, setds_iReady] = useState<Ids_iReady[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_oGroupNo, setds_oGroupNo] = useState<Ids_oGroupNo[]>([]);
    const [ds_iCustomerFeeBackup, setds_iCustomerFeeBackup] = useState<Ids_iCustomerFeeBackup[]>([]);
    const [ds_ioPosPrintMBackup, setds_ioPosPrintMBackup] = useState<Ids_ioPosPrintMBackup[]>([]);
    const [ds_ioPosPaymentBackup, setds_ioPosPaymentBackup] = useState<Ids_ioPosPaymentBackup[]>([]);
    const [ds_iReadyBackup, setds_iReadyBackup] = useState<Ids_iReadyBackup[]>([]);
    const [ds_oPosCas, setds_oPosCas] = useState<Ids_oPosCas[]>([]);
    const [ds_oBizDate, setds_oBizDate] = useState<Ids_oBizDate[]>([]);
    const [ds_oNewBankAccount, setds_oNewBankAccount] = useState<Ids_oNewBankAccount[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_iEduJubsuStatus, setds_iEduJubsuStatus] = useState<Ids_iEduJubsuStatus[]>([]);
    const [ds_oEduJubsuCheck, setds_oEduJubsuCheck] = useState<Ids_oEduJubsuCheck[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_divSunap, setRawVisible_divSunap] = useState(false);
    const [rawVisible_shSunapInfo, setRawVisible_shSunapInfo] = useState(false);
    const [rawVisible_divBank, setRawVisible_divBank] = useState(false);
    const [rawVisible_cbxBank, setRawVisible_cbxBank] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_lbEndDate, setRawVisible_lbEndDate] = useState(true);
    const [rawVisible_lbCashYn, setRawVisible_lbCashYn] = useState(true);
    const [rawVisible_radCashYn, setRawVisible_radCashYn] = useState(true);
    const [rawVisible_lbHp, setRawVisible_lbHp] = useState(true);
    const [rawVisible_edHp, setRawVisible_edHp] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
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
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_divCash, setRawVisible_divCash] = useState(false);
    const [rawVisible_lbCashGubun, setRawVisible_lbCashGubun] = useState(true);
    const [rawVisible_lbCashNo, setRawVisible_lbCashNo] = useState(true);
    const [rawVisible_edCashNo, setRawVisible_edCashNo] = useState(true);
    const [rawVisible_lbText2, setRawVisible_lbText2] = useState(true);
    const [rawVisible_radCashGubun, setRawVisible_radCashGubun] = useState(true);
    const [rawVisible_lbSunap, setRawVisible_lbSunap] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_radSunap, setRawVisible_radSunap] = useState(true);
    const [rawVisible_radSunapGubun, setRawVisible_radSunapGubun] = useState(true);
    const [rawVisible_stSunap, setRawVisible_stSunap] = useState(true);
    const [rawVisible_stSunapInfo, setRawVisible_stSunapInfo] = useState(false);
    const [rawVisible_divNewBank, setRawVisible_divNewBank] = useState(false);
    const [rawVisible_lbAccount, setRawVisible_lbAccount] = useState(true);
    const [rawVisible_edAccount, setRawVisible_edAccount] = useState(true);
    const [rawVisible_lbMSG, setRawVisible_lbMSG] = useState(true);
    const [rawVisible_divRepay, setRawVisible_divRepay] = useState(false);
    const [rawVisible_lbBuyer, setRawVisible_lbBuyer] = useState(true);
    const [rawVisible_lbOrderNo, setRawVisible_lbOrderNo] = useState(true);
    const [rawVisible_edSunapGubun, setRawVisible_edSunapGubun] = useState(true);
    const [rawVisible_edOrderNo, setRawVisible_edOrderNo] = useState(true);
    const [rawVisible_edBuyer, setRawVisible_edBuyer] = useState(true);
    const [rawVisible_lbRepay, setRawVisible_lbRepay] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_lbSunapAmount, setRawVisible_lbSunapAmount] = useState(false);
    const [rawVisible_medSunapAmount, setRawVisible_medSunapAmount] = useState(false);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbProgramId, setRawVisible_lbProgramId] = useState(true);
    const [rawVisible_lbJibuMgId, setRawVisible_lbJibuMgId] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_chkPonyDate, setRawVisible_chkPonyDate] = useState(true);
    const [rawVisible_calPonyDate, setRawVisible_calPonyDate] = useState(true);
    const [rawVisible_calSunapDate, setRawVisible_calSunapDate] = useState(true);
    const [rawVisible_lbSunapDate, setRawVisible_lbSunapDate] = useState(true);
    const [rawVisible_lbRecieptYn, setRawVisible_lbRecieptYn] = useState(true);
    const [rawVisible_radRecieptGubun, setRawVisible_radRecieptGubun] = useState(true);
    const [rawVisible_btnPos, setRawVisible_btnPos] = useState(true);
    const [rawVisible_cbxProgramIdStart, setRawVisible_cbxProgramIdStart] = useState(true);
    const [rawVisible_edBizGubunNm, setRawVisible_edBizGubunNm] = useState(true);
    const [rawVisible_edJibuMgId, setRawVisible_edJibuMgId] = useState(true);
    const [rawVisible_divPos, setRawVisible_divPos] = useState(false);
    const [rawVisible_lbPonyDate, setRawVisible_lbPonyDate] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const isVisible_divSunap = rawVisible_divSunap && rawVisible_divRepay;
    const setIsVisible_divSunap = setRawVisible_divSunap;
    const isVisible_shSunapInfo = rawVisible_shSunapInfo;
    const setIsVisible_shSunapInfo = setRawVisible_shSunapInfo;
    const isVisible_divBank = rawVisible_divBank && rawVisible_divNewBank;
    const setIsVisible_divBank = setRawVisible_divBank;
    const isVisible_cbxBank = rawVisible_cbxBank && rawVisible_shpGubunBox;
    const setIsVisible_cbxBank = setRawVisible_cbxBank;
    const isVisible_lbBank = rawVisible_lbBank && rawVisible_shpGubunBox;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_calEndDate = rawVisible_calEndDate && rawVisible_shpGubunBox;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_lbEndDate = rawVisible_lbEndDate && rawVisible_shpGubunBox;
    const setIsVisible_lbEndDate = setRawVisible_lbEndDate;
    const isVisible_lbCashYn = rawVisible_lbCashYn && rawVisible_shpGubunBox;
    const setIsVisible_lbCashYn = setRawVisible_lbCashYn;
    const isVisible_radCashYn = rawVisible_radCashYn && rawVisible_shpGubunBox1;
    const setIsVisible_radCashYn = setRawVisible_radCashYn;
    const isVisible_lbHp = rawVisible_lbHp;
    const setIsVisible_lbHp = setRawVisible_lbHp;
    const isVisible_edHp = rawVisible_edHp;
    const setIsVisible_edHp = setRawVisible_edHp;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_divCard = rawVisible_divCard;
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
    const isVisible_btnUserInput = rawVisible_btnUserInput && rawVisible_shpBtnBox;
    const setIsVisible_btnUserInput = setRawVisible_btnUserInput;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox && rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_divCash = rawVisible_divCash;
    const setIsVisible_divCash = setRawVisible_divCash;
    const isVisible_lbCashGubun = rawVisible_lbCashGubun;
    const setIsVisible_lbCashGubun = setRawVisible_lbCashGubun;
    const isVisible_lbCashNo = rawVisible_lbCashNo && rawVisible_shpGubunBox;
    const setIsVisible_lbCashNo = setRawVisible_lbCashNo;
    const isVisible_edCashNo = rawVisible_edCashNo && rawVisible_shpGubunBox;
    const setIsVisible_edCashNo = setRawVisible_edCashNo;
    const isVisible_lbText2 = rawVisible_lbText2 && rawVisible_shpGubunBox1;
    const setIsVisible_lbText2 = setRawVisible_lbText2;
    const isVisible_radCashGubun = rawVisible_radCashGubun;
    const setIsVisible_radCashGubun = setRawVisible_radCashGubun;
    const isVisible_lbSunap = rawVisible_lbSunap && rawVisible_shpGubunBox;
    const setIsVisible_lbSunap = setRawVisible_lbSunap;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_shpGubunBox1;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_radSunap = rawVisible_radSunap && rawVisible_shpGubunBox;
    const setIsVisible_radSunap = setRawVisible_radSunap;
    const isVisible_radSunapGubun = rawVisible_radSunapGubun && rawVisible_shpGubunBox1;
    const setIsVisible_radSunapGubun = setRawVisible_radSunapGubun;
    const isVisible_stSunap = rawVisible_stSunap;
    const setIsVisible_stSunap = setRawVisible_stSunap;
    const isVisible_stSunapInfo = rawVisible_stSunapInfo && rawVisible_shpGubunBox;
    const setIsVisible_stSunapInfo = setRawVisible_stSunapInfo;
    const isVisible_divNewBank = rawVisible_divNewBank;
    const setIsVisible_divNewBank = setRawVisible_divNewBank;
    const isVisible_lbAccount = rawVisible_lbAccount && rawVisible_shpGubunBox;
    const setIsVisible_lbAccount = setRawVisible_lbAccount;
    const isVisible_edAccount = rawVisible_edAccount && rawVisible_shpGubunBox1;
    const setIsVisible_edAccount = setRawVisible_edAccount;
    const isVisible_lbMSG = rawVisible_lbMSG && rawVisible_shpGubunBox;
    const setIsVisible_lbMSG = setRawVisible_lbMSG;
    const isVisible_divRepay = rawVisible_divRepay;
    const setIsVisible_divRepay = setRawVisible_divRepay;
    const isVisible_lbBuyer = rawVisible_lbBuyer && rawVisible_shpGubunBox;
    const setIsVisible_lbBuyer = setRawVisible_lbBuyer;
    const isVisible_lbOrderNo = rawVisible_lbOrderNo && rawVisible_shpGubunBox1;
    const setIsVisible_lbOrderNo = setRawVisible_lbOrderNo;
    const isVisible_edSunapGubun = rawVisible_edSunapGubun && rawVisible_shpGubunBox1;
    const setIsVisible_edSunapGubun = setRawVisible_edSunapGubun;
    const isVisible_edOrderNo = rawVisible_edOrderNo && rawVisible_shpGubunBox1;
    const setIsVisible_edOrderNo = setRawVisible_edOrderNo;
    const isVisible_edBuyer = rawVisible_edBuyer && rawVisible_shpGubunBox;
    const setIsVisible_edBuyer = setRawVisible_edBuyer;
    const isVisible_lbRepay = rawVisible_lbRepay;
    const setIsVisible_lbRepay = setRawVisible_lbRepay;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_divBank;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_divBank;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_lbSunapAmount = rawVisible_lbSunapAmount && rawVisible_shpGubunBox;
    const setIsVisible_lbSunapAmount = setRawVisible_lbSunapAmount;
    const isVisible_medSunapAmount = rawVisible_medSunapAmount && rawVisible_shpGubunBox;
    const setIsVisible_medSunapAmount = setRawVisible_medSunapAmount;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbProgramId = rawVisible_lbProgramId && rawVisible_shpGubunBox1;
    const setIsVisible_lbProgramId = setRawVisible_lbProgramId;
    const isVisible_lbJibuMgId = rawVisible_lbJibuMgId && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibuMgId = setRawVisible_lbJibuMgId;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_chkPonyDate = rawVisible_chkPonyDate && rawVisible_divBank;
    const setIsVisible_chkPonyDate = setRawVisible_chkPonyDate;
    const isVisible_calPonyDate = rawVisible_calPonyDate && rawVisible_divBank;
    const setIsVisible_calPonyDate = setRawVisible_calPonyDate;
    const isVisible_calSunapDate = rawVisible_calSunapDate && rawVisible_divBank;
    const setIsVisible_calSunapDate = setRawVisible_calSunapDate;
    const isVisible_lbSunapDate = rawVisible_lbSunapDate && rawVisible_divBank;
    const setIsVisible_lbSunapDate = setRawVisible_lbSunapDate;
    const isVisible_lbRecieptYn = rawVisible_lbRecieptYn && rawVisible_Shape0;
    const setIsVisible_lbRecieptYn = setRawVisible_lbRecieptYn;
    const isVisible_radRecieptGubun = rawVisible_radRecieptGubun && rawVisible_Shape0;
    const setIsVisible_radRecieptGubun = setRawVisible_radRecieptGubun;
    const isVisible_btnPos = rawVisible_btnPos;
    const setIsVisible_btnPos = setRawVisible_btnPos;
    const isVisible_cbxProgramIdStart = rawVisible_cbxProgramIdStart && rawVisible_shpGubunBox1;
    const setIsVisible_cbxProgramIdStart = setRawVisible_cbxProgramIdStart;
    const isVisible_edBizGubunNm = rawVisible_edBizGubunNm && rawVisible_shpGubunBox1;
    const setIsVisible_edBizGubunNm = setRawVisible_edBizGubunNm;
    const isVisible_edJibuMgId = rawVisible_edJibuMgId && rawVisible_shpGubunBox1;
    const setIsVisible_edJibuMgId = setRawVisible_edJibuMgId;
    const isVisible_divPos = rawVisible_divPos;
    const setIsVisible_divPos = setRawVisible_divPos;
    const isVisible_lbPonyDate = rawVisible_lbPonyDate && rawVisible_divBank;
    const setIsVisible_lbPonyDate = setRawVisible_lbPonyDate;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage && rawVisible_shpGubunBox;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shSunapInfo;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRecieptGubun([]);
            setds_oSunap([]);
            setds_oSunapGubun([]);
            setds_oPosJibu([]);
            setds_oInstallment([]);
            setds_oCashGubun([]);
            setds_oYear([]);
            setds_oMonth([]);
            setds_oCashYn([]);
            setds_oBank([]);
            setds_ioCustomerFee([]);
            setds_ioPosPrintM([]);
            setds_ioPosPayment([]);
            setds_iReady([]);
            setds_oPmMgno([]);
            setds_oGroupNo([]);
            setds_iCustomerFeeBackup([]);
            setds_ioPosPrintMBackup([]);
            setds_ioPosPaymentBackup([]);
            setds_iReadyBackup([]);
            setds_oPosCas([]);
            setds_oBizDate([]);
            setds_oNewBankAccount([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_iEduJubsuStatus([]);
            setds_oEduJubsuCheck([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnPos_OnClick = () => {
        console.log('btnPos_OnClick clicked');
    };
    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oRecieptGubun,
        ds_oSunap,
        ds_oSunapGubun,
        ds_oPosJibu,
        ds_oInstallment,
        ds_oCashGubun,
        ds_oYear,
        ds_oMonth,
        ds_oCashYn,
        ds_oBank,
        ds_ioCustomerFee,
        ds_ioPosPrintM,
        ds_ioPosPayment,
        ds_iReady,
        ds_oPmMgno,
        ds_oGroupNo,
        ds_iCustomerFeeBackup,
        ds_ioPosPrintMBackup,
        ds_ioPosPaymentBackup,
        ds_iReadyBackup,
        ds_oPosCas,
        ds_oBizDate,
        ds_oNewBankAccount,
        ds_ioVirtualAccoutAllocation,
        ds_iEduJubsuStatus,
        ds_oEduJubsuCheck,
        isVisible_divSunap,
        setIsVisible_divSunap,
        isVisible_shSunapInfo,
        setIsVisible_shSunapInfo,
        isVisible_divBank,
        setIsVisible_divBank,
        isVisible_cbxBank,
        setIsVisible_cbxBank,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_lbEndDate,
        setIsVisible_lbEndDate,
        isVisible_lbCashYn,
        setIsVisible_lbCashYn,
        isVisible_radCashYn,
        setIsVisible_radCashYn,
        isVisible_lbHp,
        setIsVisible_lbHp,
        isVisible_edHp,
        setIsVisible_edHp,
        isVisible_Static0,
        setIsVisible_Static0,
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
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
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
        isVisible_lbSunap,
        setIsVisible_lbSunap,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_radSunap,
        setIsVisible_radSunap,
        isVisible_radSunapGubun,
        setIsVisible_radSunapGubun,
        isVisible_stSunap,
        setIsVisible_stSunap,
        isVisible_stSunapInfo,
        setIsVisible_stSunapInfo,
        isVisible_divNewBank,
        setIsVisible_divNewBank,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_lbMSG,
        setIsVisible_lbMSG,
        isVisible_divRepay,
        setIsVisible_divRepay,
        isVisible_lbBuyer,
        setIsVisible_lbBuyer,
        isVisible_lbOrderNo,
        setIsVisible_lbOrderNo,
        isVisible_edSunapGubun,
        setIsVisible_edSunapGubun,
        isVisible_edOrderNo,
        setIsVisible_edOrderNo,
        isVisible_edBuyer,
        setIsVisible_edBuyer,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_lbSunapAmount,
        setIsVisible_lbSunapAmount,
        isVisible_medSunapAmount,
        setIsVisible_medSunapAmount,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbProgramId,
        setIsVisible_lbProgramId,
        isVisible_lbJibuMgId,
        setIsVisible_lbJibuMgId,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_chkPonyDate,
        setIsVisible_chkPonyDate,
        isVisible_calPonyDate,
        setIsVisible_calPonyDate,
        isVisible_calSunapDate,
        setIsVisible_calSunapDate,
        isVisible_lbSunapDate,
        setIsVisible_lbSunapDate,
        isVisible_lbRecieptYn,
        setIsVisible_lbRecieptYn,
        isVisible_radRecieptGubun,
        setIsVisible_radRecieptGubun,
        isVisible_btnPos,
        setIsVisible_btnPos,
        isVisible_cbxProgramIdStart,
        setIsVisible_cbxProgramIdStart,
        isVisible_edBizGubunNm,
        setIsVisible_edBizGubunNm,
        isVisible_edJibuMgId,
        setIsVisible_edJibuMgId,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_lbPonyDate,
        setIsVisible_lbPonyDate,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        btnPos_OnClick,
        chkPonyDate_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};