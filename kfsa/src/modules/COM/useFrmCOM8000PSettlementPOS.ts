// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oRecieptYn, Ids_oPosJibu, Ids_oPosItem, Ids_iSettlementPos, Ids_oSettlementPos, Ids_oPrintHistory, Ids_oPosSunap, Ids_oDeleteSanap, Ids_oTrainingOrderChange, Ids_oExecuteRepay, Ids_oRepayCancel, Ids_oRepayOk, Ids_oChangeDate, Ids_oTrainingRepayFee, Ids_oTrainingAbsentDay, Ids_oTrainingSunapFee, Ids_oPosStartInfo, Ids_oTrainingEarlySunapFee, Ids_ioTrainingEarlyRepayFee, Ids_ioEarlySunapGubun, Ids_ioTrainingStartEndDate } from './FrmCOM8000PSettlementPOSData';

export const useFrmCOM8000PSettlementPOS = () => {
    const [ds_oRecieptYn, setds_oRecieptYn] = useState<Ids_oRecieptYn[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [ds_oPosItem, setds_oPosItem] = useState<Ids_oPosItem[]>([]);
    const [ds_iSettlementPos, setds_iSettlementPos] = useState<Ids_iSettlementPos[]>([]);
    const [ds_oSettlementPos, setds_oSettlementPos] = useState<Ids_oSettlementPos[]>([]);
    const [ds_oPrintHistory, setds_oPrintHistory] = useState<Ids_oPrintHistory[]>([]);
    const [ds_oPosSunap, setds_oPosSunap] = useState<Ids_oPosSunap[]>([]);
    const [ds_oDeleteSanap, setds_oDeleteSanap] = useState<Ids_oDeleteSanap[]>([]);
    const [ds_oTrainingOrderChange, setds_oTrainingOrderChange] = useState<Ids_oTrainingOrderChange[]>([]);
    const [ds_oExecuteRepay, setds_oExecuteRepay] = useState<Ids_oExecuteRepay[]>([]);
    const [ds_oRepayCancel, setds_oRepayCancel] = useState<Ids_oRepayCancel[]>([]);
    const [ds_oRepayOk, setds_oRepayOk] = useState<Ids_oRepayOk[]>([]);
    const [ds_oChangeDate, setds_oChangeDate] = useState<Ids_oChangeDate[]>([]);
    const [ds_oTrainingRepayFee, setds_oTrainingRepayFee] = useState<Ids_oTrainingRepayFee[]>([]);
    const [ds_oTrainingAbsentDay, setds_oTrainingAbsentDay] = useState<Ids_oTrainingAbsentDay[]>([]);
    const [ds_oTrainingSunapFee, setds_oTrainingSunapFee] = useState<Ids_oTrainingSunapFee[]>([]);
    const [ds_oPosStartInfo, setds_oPosStartInfo] = useState<Ids_oPosStartInfo[]>([]);
    const [ds_oTrainingEarlySunapFee, setds_oTrainingEarlySunapFee] = useState<Ids_oTrainingEarlySunapFee[]>([]);
    const [ds_ioTrainingEarlyRepayFee, setds_ioTrainingEarlyRepayFee] = useState<Ids_ioTrainingEarlyRepayFee[]>([]);
    const [ds_ioEarlySunapGubun, setds_ioEarlySunapGubun] = useState<Ids_ioEarlySunapGubun[]>([]);
    const [ds_ioTrainingStartEndDate, setds_ioTrainingStartEndDate] = useState<Ids_ioTrainingStartEndDate[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox3, setIsVisible_shpGubunBox3] = useState(true);
    const [isVisible_edProcAmount, setIsVisible_edProcAmount] = useState(false);
    const [isVisible_divSunap, setIsVisible_divSunap] = useState(true);
    const [isVisible_shpGubunBox2, setIsVisible_shpGubunBox2] = useState(true);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbProgramId, setIsVisible_lbProgramId] = useState(true);
    const [isVisible_lbJibuMgId, setIsVisible_lbJibuMgId] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(false);
    const [isVisible_lbSunapedTotalAmount, setIsVisible_lbSunapedTotalAmount] = useState(true);
    const [isVisible_medTotalSunapFee, setIsVisible_medTotalSunapFee] = useState(true);
    const [isVisible_edPonyDate, setIsVisible_edPonyDate] = useState(true);
    const [isVisible_chkPonyDate, setIsVisible_chkPonyDate] = useState(true);
    const [isVisible_calPonyDate, setIsVisible_calPonyDate] = useState(true);
    const [isVisible_calSunapDate, setIsVisible_calSunapDate] = useState(true);
    const [isVisible_lbSunapDate, setIsVisible_lbSunapDate] = useState(true);
    const [isVisible_lbProcGubun, setIsVisible_lbProcGubun] = useState(true);
    const [isVisible_lbRepayAmount, setIsVisible_lbRepayAmount] = useState(true);
    const [isVisible_lbRecieptYn, setIsVisible_lbRecieptYn] = useState(true);
    const [isVisible_radRecieptYn, setIsVisible_radRecieptYn] = useState(true);
    const [isVisible_btnSetlmt, setIsVisible_btnSetlmt] = useState(true);
    const [isVisible_divRepay, setIsVisible_divRepay] = useState(true);
    const [isVisible_cbxProgramId, setIsVisible_cbxProgramId] = useState(true);
    const [isVisible_edBizGubunNm, setIsVisible_edBizGubunNm] = useState(true);
    const [isVisible_edJibuMgId, setIsVisible_edJibuMgId] = useState(true);
    const [isVisible_divProcGubun, setIsVisible_divProcGubun] = useState(true);
    const [isVisible_divPos, setIsVisible_divPos] = useState(false);
    const [isVisible_cbxRepayFee, setIsVisible_cbxRepayFee] = useState(true);
    const [isVisible_lbAbsentDay, setIsVisible_lbAbsentDay] = useState(false);
    const [isVisible_cbxAbsentDay, setIsVisible_cbxAbsentDay] = useState(false);
    const [isVisible_cbxSunapingAmount, setIsVisible_cbxSunapingAmount] = useState(true);
    const [isVisible_chkCardChangeYn, setIsVisible_chkCardChangeYn] = useState(false);
    const [isVisible_lbTrainingAndLicenseCostInfo, setIsVisible_lbTrainingAndLicenseCostInfo] = useState(true);
    const [isVisible_cbxEarlySunapingAmount, setIsVisible_cbxEarlySunapingAmount] = useState(false);
    const [isVisible_edSunapingAmount_Edit, setIsVisible_edSunapingAmount_Edit] = useState(false);
    const [isVisible_edSunapingAmount_Edit_View, setIsVisible_edSunapingAmount_Edit_View] = useState(false);
    const [isVisible_divSETTLEBANKPos, setIsVisible_divSETTLEBANKPos] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRecieptYn([]);
            setds_oPosJibu([]);
            setds_oPosItem([]);
            setds_iSettlementPos([]);
            setds_oSettlementPos([]);
            setds_oPrintHistory([]);
            setds_oPosSunap([]);
            setds_oDeleteSanap([]);
            setds_oTrainingOrderChange([]);
            setds_oExecuteRepay([]);
            setds_oRepayCancel([]);
            setds_oRepayOk([]);
            setds_oChangeDate([]);
            setds_oTrainingRepayFee([]);
            setds_oTrainingAbsentDay([]);
            setds_oTrainingSunapFee([]);
            setds_oPosStartInfo([]);
            setds_oTrainingEarlySunapFee([]);
            setds_ioTrainingEarlyRepayFee([]);
            setds_ioEarlySunapGubun([]);
            setds_ioTrainingStartEndDate([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSetlmt_OnClick = () => {
        console.log('btnSetlmt_OnClick clicked');
    };
    const chkCardChangeYn_OnClick = () => {
        console.log('chkCardChangeYn_OnClick clicked');
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
        ds_oRecieptYn,
        ds_oPosJibu,
        ds_oPosItem,
        ds_iSettlementPos,
        ds_oSettlementPos,
        ds_oPrintHistory,
        ds_oPosSunap,
        ds_oDeleteSanap,
        ds_oTrainingOrderChange,
        ds_oExecuteRepay,
        ds_oRepayCancel,
        ds_oRepayOk,
        ds_oChangeDate,
        ds_oTrainingRepayFee,
        ds_oTrainingAbsentDay,
        ds_oTrainingSunapFee,
        ds_oPosStartInfo,
        ds_oTrainingEarlySunapFee,
        ds_ioTrainingEarlyRepayFee,
        ds_ioEarlySunapGubun,
        ds_ioTrainingStartEndDate,
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
        isVisible_edProcAmount,
        setIsVisible_edProcAmount,
        isVisible_divSunap,
        setIsVisible_divSunap,
        isVisible_shpGubunBox2,
        setIsVisible_shpGubunBox2,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
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
        isVisible_lbSunapedTotalAmount,
        setIsVisible_lbSunapedTotalAmount,
        isVisible_medTotalSunapFee,
        setIsVisible_medTotalSunapFee,
        isVisible_edPonyDate,
        setIsVisible_edPonyDate,
        isVisible_chkPonyDate,
        setIsVisible_chkPonyDate,
        isVisible_calPonyDate,
        setIsVisible_calPonyDate,
        isVisible_calSunapDate,
        setIsVisible_calSunapDate,
        isVisible_lbSunapDate,
        setIsVisible_lbSunapDate,
        isVisible_lbProcGubun,
        setIsVisible_lbProcGubun,
        isVisible_lbRepayAmount,
        setIsVisible_lbRepayAmount,
        isVisible_lbRecieptYn,
        setIsVisible_lbRecieptYn,
        isVisible_radRecieptYn,
        setIsVisible_radRecieptYn,
        isVisible_btnSetlmt,
        setIsVisible_btnSetlmt,
        isVisible_divRepay,
        setIsVisible_divRepay,
        isVisible_cbxProgramId,
        setIsVisible_cbxProgramId,
        isVisible_edBizGubunNm,
        setIsVisible_edBizGubunNm,
        isVisible_edJibuMgId,
        setIsVisible_edJibuMgId,
        isVisible_divProcGubun,
        setIsVisible_divProcGubun,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_cbxRepayFee,
        setIsVisible_cbxRepayFee,
        isVisible_lbAbsentDay,
        setIsVisible_lbAbsentDay,
        isVisible_cbxAbsentDay,
        setIsVisible_cbxAbsentDay,
        isVisible_cbxSunapingAmount,
        setIsVisible_cbxSunapingAmount,
        isVisible_chkCardChangeYn,
        setIsVisible_chkCardChangeYn,
        isVisible_lbTrainingAndLicenseCostInfo,
        setIsVisible_lbTrainingAndLicenseCostInfo,
        isVisible_cbxEarlySunapingAmount,
        setIsVisible_cbxEarlySunapingAmount,
        isVisible_edSunapingAmount_Edit,
        setIsVisible_edSunapingAmount_Edit,
        isVisible_edSunapingAmount_Edit_View,
        setIsVisible_edSunapingAmount_Edit_View,
        isVisible_divSETTLEBANKPos,
        setIsVisible_divSETTLEBANKPos,
        btnSetlmt_OnClick,
        chkCardChangeYn_OnClick,
        chkPonyDate_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};