// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Igds_oUserInfo {
    PSABUN: string;
    PPERSONNM: string;
    PRESIDENTNO: string;
    PDEPTCD: string;
    PDEPTNM: string;
    PPOSITNCD: string;
    PPOSITNNM: string;
}

export interface Igds_oTopMenu {
}

export interface Igds_OpenedForm {
    MMENUID: string;
    MMENUNM: string;
    MURL: string;
}

export interface Igds_SelectedForm {
    SELECTEDFORM: string;
}

export interface Igds_oCommonCode {
    CCGROUPCD: string;
    CCCD: string;
    CCCDNM: string;
    MORDERSEQ: string;
    USE_YN: string;
    CCREMARK: string;
}

export interface Igds_oLeftMenu {
    MORDERSEQ: string;
    MMENUID: string;
    MENULEVEL: string;
    MPARENTMENUID: string;
    MMENUNM: string;
    USE_YN: string;
    MURL: string;
    MREMARK: string;
    MURLTYPE: string;
    MSYSGUBUN: string;
}

export interface Igds_oDesign {
    MSYSGUBUN: string;
    MAINBKCOLOR: string;
    MEMUIMGID: string;
    TABIMGID: string;
    SUBBKCOLOR: string;
}

export interface Igds_oLeftFavorite {
    MORDERSEQ: string;
    MMENUID: string;
    MENULEVEL: string;
    MPARENTMENUID: string;
    MMENUNM: string;
    USE_YN: string;
    MURL: string;
    MREMARK: string;
    MURLTYPE: string;
    MSYSGUBUN: string;
}

export interface Igds_oJibu {
}

export interface Igds_oRegion {
}

export interface Igds_oCourse {
}

export interface Igds_ioPrintConfig {
    PCCD: string;
    PCNM: string;
    USE_YN: string;
    PCLEFTMARGIN: string;
    PCTOPMARGIN: string;
    PCPRINTERNO: string;
}

export interface Igds_ioPrinter {
    NO: string;
    NM: string;
    PATH: string;
    PORT: string;
}

export interface Igds_oLocalPort {
    NM: string;
    PORT: string;
}

export interface Igds_oLocalPrinter {
    NM: string;
    PATH: string;
}

export interface Igds_oSameUserInfo {
    PSABUN: string;
    PPERSONNM: string;
    PRESIDENTNO: string;
    PDEPTCD: string;
    PDEPTNM: string;
    PPOSITNCD: string;
    PPOSITNNM: string;
}

export interface Igds_oLocalExamOrder {
    TCCOURSENM: string;
    EOEXAMDATE: string;
    EOEXAMORDERGUBUN: string;
    EOMGJIBUCD: string;
    EOYEAR: string;
    EREXAMROOM: string;
    EOMGNO: string;
    EOEXAMORDER: string;
}

export interface Igds_oEduRegion {
    CD: string;
    DATA: string;
}

export interface Igds_iModifyHistory {
    MHAFTERDATA: string;
    MHBEFOREDATA: string;
    MHCOLUMN: string;
    MHGUBUN: string;
    MHKEY: string;
    MHWORKGUBUN: string;
}

export interface Igds_oPosProgramId {
}

export interface Igds_oPosJibu {
}

export interface Igds_oTrainingFee {
}

export interface Igds_oTrainingRepayFee {
}

export interface Igds_oBusinessDay {
}

export interface Igds_oPosResult {
}

export interface Igds_iCheckPos {
    PMYEAR: string;
    PMMGNO: string;
    STATUS: string;
    LGD_PAN: string;
    LGD_CASHRECEIPTYN: string;
}

export interface Igds_oCheckPos {
    MI_PMYEAR: string;
    MI_PMMGNO: string;
    MI_PRMGUBUN: string;
    LGD_RESPCODE: string;
    LGD_CASHRECEIPTNUM: string;
    LGD_RESPMSG: string;
    LGD_OID: string;
    LGD_TID: string;
    LGD_AMOUNT: string;
    LGD_ACCOUNTNUM: string;
    LGD_FINANCECODE: string;
    LGD_CASFLAG: string;
    LGD_FINANCENAME: string;
    MI_RSCODE: string;
    MI_RSMSG: string;
}

export interface Igds_oPrintReceiptMast {
}

export interface Igds_oPrintReceiptDtl {
}

export interface Igds_oPrintReceiptHistory {
}

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