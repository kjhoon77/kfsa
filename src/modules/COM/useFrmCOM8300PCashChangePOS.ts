// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oRecieptYn, Ids_oPosJibu, Ids_oPosItem, Ids_iSettlementPos, Ids_oSettlementPos, Ids_oPrintHistory, Ids_oPosSunap, Ids_oDeleteSanap, Ids_oTrainingOrderChange, Ids_oExecuteRepay, Ids_oRepayCancel, Ids_oRepayOk, Ids_oChangeDate, Ids_oTrainingRepayFee, Ids_oTrainingAbsentDay, Ids_oTrainingSunapFee, Ids_oPosStartInfo, Ids_oProcGubun, Ids_oUseGubun, Ids_oPosPrintm, Ids_oCallKeyIn } from './FrmCOM8300PCashChangePOSData';

export const useFrmCOM8300PCashChangePOS = () => {
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
    const [ds_oProcGubun, setds_oProcGubun] = useState<Ids_oProcGubun[]>([]);
    const [ds_oUseGubun, setds_oUseGubun] = useState<Ids_oUseGubun[]>([]);
    const [ds_oPosPrintm, setds_oPosPrintm] = useState<Ids_oPosPrintm[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divPos, setIsVisible_divPos] = useState(false);
    const [isVisible_divSunabDtl, setIsVisible_divSunabDtl] = useState(true);

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
            setds_oProcGubun([]);
            setds_oUseGubun([]);
            setds_oPosPrintm([]);
            setds_oCallKeyIn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSetlmt_OnClick = () => {
        console.log('btnSetlmt_OnClick clicked');
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
        ds_oProcGubun,
        ds_oUseGubun,
        ds_oPosPrintm,
        ds_oCallKeyIn,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_divSunabDtl,
        setIsVisible_divSunabDtl,
        btnSetlmt_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};