// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oRecieptYn, Ids_oPosJibu, Ids_oPosItem, Ids_iSettlementPos, Ids_oSettlementPos, Ids_oPrintHistory, Ids_oPosSunap, Ids_oDeleteSanap, Ids_oTrainingOrderChange, Ids_oExecuteRepay, Ids_oRepayCancel, Ids_oRepayOk, Ids_oChangeDate, Ids_oTrainingRepayFee, Ids_oTrainingAbsentDay, Ids_oTrainingSunapFee, Ids_oPosStartInfo } from './FrmCOM8300PCashPOSData';

export const useFrmCOM8300PCashPOS = () => {
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
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox3, setRawVisible_shpGubunBox3] = useState(true);
    const [rawVisible_divSunap, setRawVisible_divSunap] = useState(true);
    const [rawVisible_shpGubunBox2, setRawVisible_shpGubunBox2] = useState(true);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbProgramId, setRawVisible_lbProgramId] = useState(true);
    const [rawVisible_lbJibuMgId, setRawVisible_lbJibuMgId] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(false);
    const [rawVisible_lbSunapedTotalAmount, setRawVisible_lbSunapedTotalAmount] = useState(true);
    const [rawVisible_medTotalSunapFee, setRawVisible_medTotalSunapFee] = useState(true);
    const [rawVisible_edPonyDate, setRawVisible_edPonyDate] = useState(true);
    const [rawVisible_chkPonyDate, setRawVisible_chkPonyDate] = useState(true);
    const [rawVisible_calPonyDate, setRawVisible_calPonyDate] = useState(true);
    const [rawVisible_calSunapDate, setRawVisible_calSunapDate] = useState(true);
    const [rawVisible_lbSunapDate, setRawVisible_lbSunapDate] = useState(true);
    const [rawVisible_lbProcGubun, setRawVisible_lbProcGubun] = useState(true);
    const [rawVisible_lbRepayAmount, setRawVisible_lbRepayAmount] = useState(true);
    const [rawVisible_lbRecieptYn, setRawVisible_lbRecieptYn] = useState(true);
    const [rawVisible_radRecieptYn, setRawVisible_radRecieptYn] = useState(true);
    const [rawVisible_btnSetlmt, setRawVisible_btnSetlmt] = useState(true);
    const [rawVisible_divRepay, setRawVisible_divRepay] = useState(true);
    const [rawVisible_cbxProgramId, setRawVisible_cbxProgramId] = useState(true);
    const [rawVisible_edBizGubunNm, setRawVisible_edBizGubunNm] = useState(true);
    const [rawVisible_edJibuMgId, setRawVisible_edJibuMgId] = useState(true);
    const [rawVisible_divProcGubun, setRawVisible_divProcGubun] = useState(true);
    const [rawVisible_divPos, setRawVisible_divPos] = useState(false);
    const [rawVisible_webPrintReciept, setRawVisible_webPrintReciept] = useState(false);
    const [rawVisible_cbxRepayFee, setRawVisible_cbxRepayFee] = useState(true);
    const [rawVisible_lbAbsentDay, setRawVisible_lbAbsentDay] = useState(false);
    const [rawVisible_cbxAbsentDay, setRawVisible_cbxAbsentDay] = useState(false);
    const [rawVisible_cbxSunapingAmount, setRawVisible_cbxSunapingAmount] = useState(true);
    const isVisible_shpGubunBox3 = rawVisible_shpGubunBox3;
    const setIsVisible_shpGubunBox3 = setRawVisible_shpGubunBox3;
    const isVisible_divSunap = rawVisible_divSunap;
    const setIsVisible_divSunap = setRawVisible_divSunap;
    const isVisible_shpGubunBox2 = rawVisible_shpGubunBox2;
    const setIsVisible_shpGubunBox2 = setRawVisible_shpGubunBox2;
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbProgramId = rawVisible_lbProgramId && rawVisible_shpGubunBox1;
    const setIsVisible_lbProgramId = setRawVisible_lbProgramId;
    const isVisible_lbJibuMgId = rawVisible_lbJibuMgId && rawVisible_shpGubunBox1;
    const setIsVisible_lbJibuMgId = setRawVisible_lbJibuMgId;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_lbSunapedTotalAmount = rawVisible_lbSunapedTotalAmount && rawVisible_shpGubunBox2;
    const setIsVisible_lbSunapedTotalAmount = setRawVisible_lbSunapedTotalAmount;
    const isVisible_medTotalSunapFee = rawVisible_medTotalSunapFee && rawVisible_shpGubunBox2;
    const setIsVisible_medTotalSunapFee = setRawVisible_medTotalSunapFee;
    const isVisible_edPonyDate = rawVisible_edPonyDate && rawVisible_shpGubunBox3;
    const setIsVisible_edPonyDate = setRawVisible_edPonyDate;
    const isVisible_chkPonyDate = rawVisible_chkPonyDate && rawVisible_shpGubunBox3;
    const setIsVisible_chkPonyDate = setRawVisible_chkPonyDate;
    const isVisible_calPonyDate = rawVisible_calPonyDate && rawVisible_shpGubunBox3;
    const setIsVisible_calPonyDate = setRawVisible_calPonyDate;
    const isVisible_calSunapDate = rawVisible_calSunapDate && rawVisible_shpGubunBox3;
    const setIsVisible_calSunapDate = setRawVisible_calSunapDate;
    const isVisible_lbSunapDate = rawVisible_lbSunapDate && rawVisible_shpGubunBox3;
    const setIsVisible_lbSunapDate = setRawVisible_lbSunapDate;
    const isVisible_lbProcGubun = rawVisible_lbProcGubun && rawVisible_shpGubunBox3;
    const setIsVisible_lbProcGubun = setRawVisible_lbProcGubun;
    const isVisible_lbRepayAmount = rawVisible_lbRepayAmount && rawVisible_shpGubunBox3;
    const setIsVisible_lbRepayAmount = setRawVisible_lbRepayAmount;
    const isVisible_lbRecieptYn = rawVisible_lbRecieptYn && rawVisible_shpGubunBox3;
    const setIsVisible_lbRecieptYn = setRawVisible_lbRecieptYn;
    const isVisible_radRecieptYn = rawVisible_radRecieptYn && rawVisible_shpGubunBox3;
    const setIsVisible_radRecieptYn = setRawVisible_radRecieptYn;
    const isVisible_btnSetlmt = rawVisible_btnSetlmt;
    const setIsVisible_btnSetlmt = setRawVisible_btnSetlmt;
    const isVisible_divRepay = rawVisible_divRepay;
    const setIsVisible_divRepay = setRawVisible_divRepay;
    const isVisible_cbxProgramId = rawVisible_cbxProgramId && rawVisible_shpGubunBox1;
    const setIsVisible_cbxProgramId = setRawVisible_cbxProgramId;
    const isVisible_edBizGubunNm = rawVisible_edBizGubunNm && rawVisible_shpGubunBox1;
    const setIsVisible_edBizGubunNm = setRawVisible_edBizGubunNm;
    const isVisible_edJibuMgId = rawVisible_edJibuMgId && rawVisible_shpGubunBox1;
    const setIsVisible_edJibuMgId = setRawVisible_edJibuMgId;
    const isVisible_divProcGubun = rawVisible_divProcGubun && rawVisible_shpGubunBox3;
    const setIsVisible_divProcGubun = setRawVisible_divProcGubun;
    const isVisible_divPos = rawVisible_divPos;
    const setIsVisible_divPos = setRawVisible_divPos;
    const isVisible_webPrintReciept = rawVisible_webPrintReciept;
    const setIsVisible_webPrintReciept = setRawVisible_webPrintReciept;
    const isVisible_cbxRepayFee = rawVisible_cbxRepayFee && rawVisible_shpGubunBox3;
    const setIsVisible_cbxRepayFee = setRawVisible_cbxRepayFee;
    const isVisible_lbAbsentDay = rawVisible_lbAbsentDay && rawVisible_shpGubunBox3;
    const setIsVisible_lbAbsentDay = setRawVisible_lbAbsentDay;
    const isVisible_cbxAbsentDay = rawVisible_cbxAbsentDay && rawVisible_shpGubunBox3;
    const setIsVisible_cbxAbsentDay = setRawVisible_cbxAbsentDay;
    const isVisible_cbxSunapingAmount = rawVisible_cbxSunapingAmount && rawVisible_divSunap;
    const setIsVisible_cbxSunapingAmount = setRawVisible_cbxSunapingAmount;

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
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSetlmt_OnClick = () => {
        console.log('btnSetlmt_OnClick clicked');
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
        isVisible_shpGubunBox3,
        setIsVisible_shpGubunBox3,
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
        isVisible_webPrintReciept,
        setIsVisible_webPrintReciept,
        isVisible_cbxRepayFee,
        setIsVisible_cbxRepayFee,
        isVisible_lbAbsentDay,
        setIsVisible_lbAbsentDay,
        isVisible_cbxAbsentDay,
        setIsVisible_cbxAbsentDay,
        isVisible_cbxSunapingAmount,
        setIsVisible_cbxSunapingAmount,
        btnSetlmt_OnClick,
        chkPonyDate_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};