// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oYesNo {
    CD: string;
    DATA: string;
}

export interface Ids_oPosJibu {
    PIID: string;
    PICHPT: string;
    PIONOFF: string;
    PIBIZGUBUN: string;
    PIBANKNM: string;
    PIACCNUM: string;
    PIMERTKEY: string;
    PIMERTKEY_TEST: string;
}

export interface Ids_oPosProgramId {
    PGMID: string;
    PGMNM: string;
    PGMGUBUN: string;
    PGMGUBUNNM: string;
}

export interface Ids_oBank {
    CCGROUPCD: string;
    CCCD: string;
    CCCDNM: string;
    MORDERSEQ: string;
    USE_YN: string;
    CCREMARK: string;
}

export interface Ids_oBizDate {
}

export interface Ids_oCashGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oInstallment {
    CD: string;
    DATA: string;
}

export interface Ids_oMonth {
    CD: string;
    DATA: string;
}

export interface Ids_oSunap {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oYear {
    CD: string;
    DATA: string;
}

export interface Ids_oSunapList {
    PSPGMID: string;
    PSSEQ: string;
    PSSETLMGUBUN: string;
    PSSETLMGUBUNNM: string;
    PSGUBUN: string;
    PSGUBUNNM: string;
    PSGUBUNCD: string;
    PSGUBUNCDNM: string;
    PSGTMGNO: string;
    PSGTNM: string;
    PSPROCDATE: string;
    PSPONYGUBUN: string;
    PSPONYDATE: string;
    PSAMT: string;
    PSPMYEAR: string;
    PSPMMGNO: string;
    PMPCORDERNO: string;
    PSREPAYSEQ: string;
    PSBUYER: string;
    PSCONTENT: string;
    PSREGSABUN: string;
    PSREGSABUNNM: string;
}

export interface Ids_oPmMgno {
    PMYEAR: string;
    PMMGNO: string;
}

export interface Ids_ioPosEtcSettlement {
    PSPGMID: string;
    PSSEQ: string;
    PSSETLMGUBUN: string;
    PSGUBUN: string;
    PSGUBUNCD: string;
    PSGTMGNO: string;
    PSPROCDATE: string;
    PSPONYGUBUN: string;
    PSPONYDATE: string;
    PSAMT: string;
    PSPMYEAR: string;
    PSPMMGNO: string;
    PSREPAYSEQ: string;
    PSBUYER: string;
    PSCONTENT: string;
    PSREGDATE: string;
    PSREGSABUN: string;
}

export interface Ids_ioPosPrintM {
    PMYEAR: string;
    PMMGNO: string;
    PMINPUT: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPROCDATE: string;
    PMPIID: string;
    PMPGMID: string;
    PMPGMPK: string;
    PMBUYER: string;
    PMCLAS: string;
    PMPGMGUBUN: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    PMAMT: string;
    PMVAT: string;
    PMPAYMENTFLAG: string;
    PMRESULT: string;
    PCUSERTYPE: string;
    PCSOCIALBUSINESSNO: string;
    PCCARDINSTALL: string;
    PCCLOSEDATE: string;
    PCBANKCD: string;
    PCBANKNM: string;
}

export interface Ids_ioPosPayment {
    PPPMYEAR: string;
    PPPMMGNO: string;
    PPSEQ: string;
    PPNM: string;
    PPUNITAMT: string;
    PPQTY: string;
    PPTOTAMT: string;
}

export interface Ids_oPosCas {
    PCPMYEAR: string;
    PCPMMGNO: string;
    PCCLOSEDATE: string;
    PCFLAG: string;
    PCACCOUNT: string;
    PCBANKCD: string;
    PCBANKNM: string;
    PCAMOUNT: string;
    PCBANKDATE: string;
    PCTRANSACTION: string;
}

export interface Ids_oAuthCheck {
}

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
        btnPosReport_OnClick,
        btnPrintReRct_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
    };
};