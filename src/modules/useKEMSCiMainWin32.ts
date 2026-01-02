// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Igds_oUserInfo, Igds_oTopMenu, Igds_OpenedForm, Igds_SelectedForm, Igds_oCommonCode, Igds_oLeftMenu, Igds_oDesign, Igds_oLeftFavorite, Igds_oJibu, Igds_oRegion, Igds_oCourse, Igds_ioPrintConfig, Igds_ioPrinter, Igds_oLocalPort, Igds_oLocalPrinter, Igds_oSameUserInfo, Igds_oLocalExamOrder, Igds_oEduRegion, Igds_iModifyHistory, Igds_oPosProgramId, Igds_oPosJibu, Igds_oTrainingFee, Igds_oTrainingRepayFee, Igds_oBusinessDay, Igds_oPosResult, Igds_iCheckPos, Igds_oCheckPos, Igds_oPrintReceiptMast, Igds_oPrintReceiptDtl, Igds_oPrintReceiptHistory, Igds_oCustomerCourse, Igds_oMenuInfo, Igds_oLicenseCode, Igds_oFireCode, Igds_oFireCenterCode, Igds_oFireBonbuCode, Igds_oPrivacyCourse, Igds_oBankCode, Igds_oAllDept, Igds_oEduJubsuMaxCnt, Igds_oStatus, Igds_ioSciCheck, Igds_ioSciDI, Igds_oPersonKey, Igds_ioCashAutoSend } from './KEMSCiMainWin32Data';

export const useKEMSCiMainWin32 = () => {
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
    const [gds_oCustomerCourse, setgds_oCustomerCourse] = useState<Igds_oCustomerCourse[]>([]);
    const [gds_oMenuInfo, setgds_oMenuInfo] = useState<Igds_oMenuInfo[]>([]);
    const [gds_oLicenseCode, setgds_oLicenseCode] = useState<Igds_oLicenseCode[]>([]);
    const [gds_oFireCode, setgds_oFireCode] = useState<Igds_oFireCode[]>([]);
    const [gds_oFireCenterCode, setgds_oFireCenterCode] = useState<Igds_oFireCenterCode[]>([]);
    const [gds_oFireBonbuCode, setgds_oFireBonbuCode] = useState<Igds_oFireBonbuCode[]>([]);
    const [gds_oPrivacyCourse, setgds_oPrivacyCourse] = useState<Igds_oPrivacyCourse[]>([]);
    const [gds_oBankCode, setgds_oBankCode] = useState<Igds_oBankCode[]>([]);
    const [gds_oAllDept, setgds_oAllDept] = useState<Igds_oAllDept[]>([]);
    const [gds_oEduJubsuMaxCnt, setgds_oEduJubsuMaxCnt] = useState<Igds_oEduJubsuMaxCnt[]>([]);
    const [gds_oStatus, setgds_oStatus] = useState<Igds_oStatus[]>([]);
    const [gds_ioSciCheck, setgds_ioSciCheck] = useState<Igds_ioSciCheck[]>([]);
    const [gds_ioSciDI, setgds_ioSciDI] = useState<Igds_ioSciDI[]>([]);
    const [gds_oPersonKey, setgds_oPersonKey] = useState<Igds_oPersonKey[]>([]);
    const [gds_ioCashAutoSend, setgds_ioCashAutoSend] = useState<Igds_ioCashAutoSend[]>([]);
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
            setgds_oCustomerCourse([]);
            setgds_oMenuInfo([]);
            setgds_oLicenseCode([]);
            setgds_oFireCode([]);
            setgds_oFireCenterCode([]);
            setgds_oFireBonbuCode([]);
            setgds_oPrivacyCourse([]);
            setgds_oBankCode([]);
            setgds_oAllDept([]);
            setgds_oEduJubsuMaxCnt([]);
            setgds_oStatus([]);
            setgds_ioSciCheck([]);
            setgds_ioSciDI([]);
            setgds_oPersonKey([]);
            setgds_ioCashAutoSend([]);
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
        gds_oCustomerCourse,
        gds_oMenuInfo,
        gds_oLicenseCode,
        gds_oFireCode,
        gds_oFireCenterCode,
        gds_oFireBonbuCode,
        gds_oPrivacyCourse,
        gds_oBankCode,
        gds_oAllDept,
        gds_oEduJubsuMaxCnt,
        gds_oStatus,
        gds_ioSciCheck,
        gds_ioSciDI,
        gds_oPersonKey,
        gds_ioCashAutoSend,
    };
};