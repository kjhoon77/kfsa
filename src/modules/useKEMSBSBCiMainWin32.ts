// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Igds_oUserInfo, Igds_oTopMenu, Igds_OpenedForm, Igds_SelectedForm, Igds_oCommonCode, Igds_oLeftMenu, Igds_oDesign, Igds_oLeftFavorite, Igds_oJibu, Igds_oRegion, Igds_oCourse, Igds_ioPrintConfig, Igds_ioPrinter, Igds_oLocalPort, Igds_oLocalPrinter, Igds_oSameUserInfo, Igds_oLocalExamOrder, Igds_oEduRegion, Igds_iModifyHistory, Igds_oPosProgramId, Igds_oPosJibu, Igds_oTrainingFee, Igds_oTrainingRepayFee, Igds_oBusinessDay, Igds_oPosResult, Igds_iCheckPos, Igds_oCheckPos, Igds_oPrintReceiptMast, Igds_oPrintReceiptDtl, Igds_oPrintReceiptHistory } from './KEMSBSBCiMainWin32Data';

export const useKEMSBSBCiMainWin32 = () => {
    const [gds_oUserInfo, setgds_oUserInfo] = useState<Igds_oUserInfo[]>([]);
    const [gds_oTopMenu, setgds_oTopMenu] = useState<Igds_oTopMenu[]>([]);
    const [gds_OpenedForm, setgds_OpenedForm] = useState<Igds_OpenedForm[]>([]);
    const [gds_SelectedForm, setgds_SelectedForm] = useState<Igds_SelectedForm[]>([]);
    const [gds_oCommonCode, setgds_oCommonCode] = useState<Igds_oCommonCode[]>([]);
    const [gds_oLeftMenu, setgds_oLeftMenu] = useState<Igds_oLeftMenu[]>([]);
    const [gds_oDesign, setgds_oDesign] = useState<Igds_oDesign[]>([]);
    const [gds_oLeftFavorite, setgds_oLeftFavorite] = useState<Igds_oLeftFavorite[]>([]);
    const [gds_oJibu, setgds_oJibu] = useState<Igds_oJibu[]>([]);
    const [gds_oRegion, setgds_oRegion] = useState<Igds_oRegion[]>([]);
    const [gds_oCourse, setgds_oCourse] = useState<Igds_oCourse[]>([]);
    const [gds_ioPrintConfig, setgds_ioPrintConfig] = useState<Igds_ioPrintConfig[]>([]);
    const [gds_ioPrinter, setgds_ioPrinter] = useState<Igds_ioPrinter[]>([]);
    const [gds_oLocalPort, setgds_oLocalPort] = useState<Igds_oLocalPort[]>([]);
    const [gds_oLocalPrinter, setgds_oLocalPrinter] = useState<Igds_oLocalPrinter[]>([]);
    const [gds_oSameUserInfo, setgds_oSameUserInfo] = useState<Igds_oSameUserInfo[]>([]);
    const [gds_oLocalExamOrder, setgds_oLocalExamOrder] = useState<Igds_oLocalExamOrder[]>([]);
    const [gds_oEduRegion, setgds_oEduRegion] = useState<Igds_oEduRegion[]>([]);
    const [gds_iModifyHistory, setgds_iModifyHistory] = useState<Igds_iModifyHistory[]>([]);
    const [gds_oPosProgramId, setgds_oPosProgramId] = useState<Igds_oPosProgramId[]>([]);
    const [gds_oPosJibu, setgds_oPosJibu] = useState<Igds_oPosJibu[]>([]);
    const [gds_oTrainingFee, setgds_oTrainingFee] = useState<Igds_oTrainingFee[]>([]);
    const [gds_oTrainingRepayFee, setgds_oTrainingRepayFee] = useState<Igds_oTrainingRepayFee[]>([]);
    const [gds_oBusinessDay, setgds_oBusinessDay] = useState<Igds_oBusinessDay[]>([]);
    const [gds_oPosResult, setgds_oPosResult] = useState<Igds_oPosResult[]>([]);
    const [gds_iCheckPos, setgds_iCheckPos] = useState<Igds_iCheckPos[]>([]);
    const [gds_oCheckPos, setgds_oCheckPos] = useState<Igds_oCheckPos[]>([]);
    const [gds_oPrintReceiptMast, setgds_oPrintReceiptMast] = useState<Igds_oPrintReceiptMast[]>([]);
    const [gds_oPrintReceiptDtl, setgds_oPrintReceiptDtl] = useState<Igds_oPrintReceiptDtl[]>([]);
    const [gds_oPrintReceiptHistory, setgds_oPrintReceiptHistory] = useState<Igds_oPrintReceiptHistory[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setgds_oUserInfo([]);
            setgds_oTopMenu([]);
            setgds_OpenedForm([]);
            setgds_SelectedForm([]);
            setgds_oCommonCode([]);
            setgds_oLeftMenu([]);
            setgds_oDesign([]);
            setgds_oLeftFavorite([]);
            setgds_oJibu([]);
            setgds_oRegion([]);
            setgds_oCourse([]);
            setgds_ioPrintConfig([]);
            setgds_ioPrinter([]);
            setgds_oLocalPort([]);
            setgds_oLocalPrinter([]);
            setgds_oSameUserInfo([]);
            setgds_oLocalExamOrder([]);
            setgds_oEduRegion([]);
            setgds_iModifyHistory([]);
            setgds_oPosProgramId([]);
            setgds_oPosJibu([]);
            setgds_oTrainingFee([]);
            setgds_oTrainingRepayFee([]);
            setgds_oBusinessDay([]);
            setgds_oPosResult([]);
            setgds_iCheckPos([]);
            setgds_oCheckPos([]);
            setgds_oPrintReceiptMast([]);
            setgds_oPrintReceiptDtl([]);
            setgds_oPrintReceiptHistory([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        gds_oUserInfo,
        gds_oTopMenu,
        gds_OpenedForm,
        gds_SelectedForm,
        gds_oCommonCode,
        gds_oLeftMenu,
        gds_oDesign,
        gds_oLeftFavorite,
        gds_oJibu,
        gds_oRegion,
        gds_oCourse,
        gds_ioPrintConfig,
        gds_ioPrinter,
        gds_oLocalPort,
        gds_oLocalPrinter,
        gds_oSameUserInfo,
        gds_oLocalExamOrder,
        gds_oEduRegion,
        gds_iModifyHistory,
        gds_oPosProgramId,
        gds_oPosJibu,
        gds_oTrainingFee,
        gds_oTrainingRepayFee,
        gds_oBusinessDay,
        gds_oPosResult,
        gds_iCheckPos,
        gds_oCheckPos,
        gds_oPrintReceiptMast,
        gds_oPrintReceiptDtl,
        gds_oPrintReceiptHistory,
    };
};