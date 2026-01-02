// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oRecieptYn {
    CD: string;
    DATA: string;
}

export interface Ids_oPosJibu {
}

export interface Ids_oPosItem {
}

export interface Ids_iSettlementPos {
    PROGRAMID: string;
    SUNAPGUBUN: string;
    PROCAMOUNT: string;
    POSYEAR: string;
    POSMGNO: string;
    KEY1: string;
    KEY2: string;
    PROCDATE: string;
    PONYDATE: string;
    PRINTYN: string;
    BANKSUNAPGUBUN: string;
    CARDNO: string;
    CARDINSTALL: string;
    CASHRECEIPTUSE: string;
    CASHCARDNO: string;
    VIRTBANKCODE: string;
    VIRTCLOSEDATE: string;
    VIRTHPTEL: string;
    VIRTCASHRECEIPTYN: string;
    PAYMENTGUBUN: string;
    PROCGUBUN: string;
    PONYGUBUN: string;
    JIBUMGID: string;
    VIRTBANKNAME: string;
    REPAYCD: string;
    PARTREPAYYN: string;
    SUNAPACTIONREF: string;
}

export interface Ids_oSettlementPos {
}

export interface Ids_oPrintHistory {
}

export interface Ids_oPosSunap {
}

export interface Ids_oDeleteSanap {
}

export interface Ids_oTrainingOrderChange {
}

export interface Ids_oExecuteRepay {
}

export interface Ids_oRepayCancel {
}

export interface Ids_oRepayOk {
}

export interface Ids_oChangeDate {
}

export interface Ids_oTrainingRepayFee {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingAbsentDay {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingSunapFee {
}

export interface Ids_oPosStartInfo {
}

export const useFrmCOM8300PChangePOS = () => {
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
        btnSetlmt_OnClick,
        chkPonyDate_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};