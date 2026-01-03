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
    const [isVisible_divSunap, setIsVisible_divSunap] = useState(false);
    const [isVisible_shSunapInfo, setIsVisible_shSunapInfo] = useState(false);
    const [isVisible_divBank, setIsVisible_divBank] = useState(false);
    const [isVisible_cbxBank, setIsVisible_cbxBank] = useState(true);
    const [isVisible_lbBank, setIsVisible_lbBank] = useState(true);
    const [isVisible_calEndDate, setIsVisible_calEndDate] = useState(true);
    const [isVisible_lbEndDate, setIsVisible_lbEndDate] = useState(true);
    const [isVisible_lbCashYn, setIsVisible_lbCashYn] = useState(true);
    const [isVisible_radCashYn, setIsVisible_radCashYn] = useState(true);
    const [isVisible_lbHp, setIsVisible_lbHp] = useState(true);
    const [isVisible_edHp, setIsVisible_edHp] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_divCard, setIsVisible_divCard] = useState(false);
    const [isVisible_lbCardNo, setIsVisible_lbCardNo] = useState(true);
    const [isVisible_edCardNo, setIsVisible_edCardNo] = useState(true);
    const [isVisible_lbInstallment, setIsVisible_lbInstallment] = useState(true);
    const [isVisible_cbxInstallment, setIsVisible_cbxInstallment] = useState(true);
    const [isVisible_lbText3, setIsVisible_lbText3] = useState(true);
    const [isVisible_btnInit, setIsVisible_btnInit] = useState(true);
    const [isVisible_lbCardTerm, setIsVisible_lbCardTerm] = useState(true);
    const [isVisible_cbxCardMonth, setIsVisible_cbxCardMonth] = useState(true);
    const [isVisible_lbCardMonth, setIsVisible_lbCardMonth] = useState(true);
    const [isVisible_lbCardYear, setIsVisible_lbCardYear] = useState(true);
    const [isVisible_cbxCardYear, setIsVisible_cbxCardYear] = useState(true);
    const [isVisible_btnUserInput, setIsVisible_btnUserInput] = useState(true);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_divCash, setIsVisible_divCash] = useState(false);
    const [isVisible_lbCashGubun, setIsVisible_lbCashGubun] = useState(true);
    const [isVisible_lbCashNo, setIsVisible_lbCashNo] = useState(true);
    const [isVisible_edCashNo, setIsVisible_edCashNo] = useState(true);
    const [isVisible_lbText2, setIsVisible_lbText2] = useState(true);
    const [isVisible_radCashGubun, setIsVisible_radCashGubun] = useState(true);
    const [isVisible_lbSunap, setIsVisible_lbSunap] = useState(true);
    const [isVisible_lbSunapGubun, setIsVisible_lbSunapGubun] = useState(true);
    const [isVisible_radSunap, setIsVisible_radSunap] = useState(true);
    const [isVisible_radSunapGubun, setIsVisible_radSunapGubun] = useState(true);
    const [isVisible_stSunap, setIsVisible_stSunap] = useState(true);
    const [isVisible_stSunapInfo, setIsVisible_stSunapInfo] = useState(false);
    const [isVisible_divNewBank, setIsVisible_divNewBank] = useState(false);
    const [isVisible_lbAccount, setIsVisible_lbAccount] = useState(true);
    const [isVisible_edAccount, setIsVisible_edAccount] = useState(true);
    const [isVisible_lbMSG, setIsVisible_lbMSG] = useState(true);
    const [isVisible_divRepay, setIsVisible_divRepay] = useState(false);
    const [isVisible_lbBuyer, setIsVisible_lbBuyer] = useState(true);
    const [isVisible_lbOrderNo, setIsVisible_lbOrderNo] = useState(true);
    const [isVisible_edSunapGubun, setIsVisible_edSunapGubun] = useState(true);
    const [isVisible_edOrderNo, setIsVisible_edOrderNo] = useState(true);
    const [isVisible_edBuyer, setIsVisible_edBuyer] = useState(true);
    const [isVisible_lbRepay, setIsVisible_lbRepay] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_lbSunapAmount, setIsVisible_lbSunapAmount] = useState(false);
    const [isVisible_medSunapAmount, setIsVisible_medSunapAmount] = useState(false);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbProgramId, setIsVisible_lbProgramId] = useState(true);
    const [isVisible_lbJibuMgId, setIsVisible_lbJibuMgId] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_chkPonyDate, setIsVisible_chkPonyDate] = useState(true);
    const [isVisible_calPonyDate, setIsVisible_calPonyDate] = useState(true);
    const [isVisible_calSunapDate, setIsVisible_calSunapDate] = useState(true);
    const [isVisible_lbSunapDate, setIsVisible_lbSunapDate] = useState(true);
    const [isVisible_lbRecieptYn, setIsVisible_lbRecieptYn] = useState(true);
    const [isVisible_radRecieptGubun, setIsVisible_radRecieptGubun] = useState(true);
    const [isVisible_btnPos, setIsVisible_btnPos] = useState(true);
    const [isVisible_cbxProgramIdStart, setIsVisible_cbxProgramIdStart] = useState(true);
    const [isVisible_edBizGubunNm, setIsVisible_edBizGubunNm] = useState(true);
    const [isVisible_edJibuMgId, setIsVisible_edJibuMgId] = useState(true);
    const [isVisible_divPos, setIsVisible_divPos] = useState(false);
    const [isVisible_lbPonyDate, setIsVisible_lbPonyDate] = useState(true);
    const [isVisible_lbWorkFormTitle, setIsVisible_lbWorkFormTitle] = useState(true);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);

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