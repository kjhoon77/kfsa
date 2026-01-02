// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJubsu {
}

export interface Ids_oSunap {
}

export interface Ids_oChange {
}

export interface Ids_oRepay {
}

export interface Ids_oInternetReport {
}

export interface Ids_iJubsuH {
    TJHTJMGNO: string;
    TJHSEQ: string;
    TJHSTATUSCD: string;
    TJHTSSEQREF: string;
    TJHTOHSEQREF: string;
    TJHMGGTMGNO: string;
    TJHREASON: string;
    TSSEQ: string;
    PPAPMYEAR: string;
    PPAPMMGNO: string;
    PPAFINISHAMOUNT: string;
    TSSUNAPACTIONREF: string;
    TOMGNO: string;
}

export interface Ids_ioSettlement {
    TSTJMGNO: string;
    TSGUBUNCD: string;
    TSGUBUN: string;
    TSPROCAMOUNT: string;
    TSTRAININGAMOUNT: string;
    TSEXAMAMOUNT: string;
    TSLICENSEAMOUNT: string;
    TSAMOUNTGUBUN: string;
    TSPONYGUBUN: string;
    TSMGGTMGNO: string;
    TSPROCGTMGNO: string;
    TSREPAYCD: string;
    TSSUNAPACTIONREF: string;
    TSREPAYREF: string;
    TSSEQ: string;
    TSSETLMTYN: string;
    TSTFCSEQ: string;
}

export interface Ids_oPosData {
    PMYEAR: string;
    PMMGNO: string;
}

export interface Ids_iPosData {
    PMYEAR: string;
    PMMGNO: string;
    PMINPUT: string;
    PMPCGUBUN: string;
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
    PMREGDATE: string;
    PMREGSABUN: string;
    PPNM: string;
    PMPCORDERNO: string;
    PCGUBUN: string;
    PCORDERNO: string;
    PCUSERTYPE: string;
    PCTRANSACTIONDATE: string;
    PCTRANSACTIONTIME: string;
    PCSERIALNO: string;
    PCAMT: string;
    PCVAT: string;
    PCSOCIALBUSINESSNO: string;
    PCAUTHNO: string;
    PCRESPONSECODE: string;
    PCRESPONSEDATE: string;
    PCTRANSACTIONCODE: string;
}

export interface Ids_oAttendance {
}

export interface Ids_oEstimate {
}

export const useFrmtraining0090PInternetJubsuStatistics = () => {
    const [ds_oJubsu, setds_oJubsu] = useState<Ids_oJubsu[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oChange, setds_oChange] = useState<Ids_oChange[]>([]);
    const [ds_oRepay, setds_oRepay] = useState<Ids_oRepay[]>([]);
    const [ds_oInternetReport, setds_oInternetReport] = useState<Ids_oInternetReport[]>([]);
    const [ds_iJubsuH, setds_iJubsuH] = useState<Ids_iJubsuH[]>([]);
    const [ds_ioSettlement, setds_ioSettlement] = useState<Ids_ioSettlement[]>([]);
    const [ds_oPosData, setds_oPosData] = useState<Ids_oPosData[]>([]);
    const [ds_iPosData, setds_iPosData] = useState<Ids_iPosData[]>([]);
    const [ds_oAttendance, setds_oAttendance] = useState<Ids_oAttendance[]>([]);
    const [ds_oEstimate, setds_oEstimate] = useState<Ids_oEstimate[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJubsu([]);
            setds_oSunap([]);
            setds_oChange([]);
            setds_oRepay([]);
            setds_oInternetReport([]);
            setds_iJubsuH([]);
            setds_ioSettlement([]);
            setds_oPosData([]);
            setds_iPosData([]);
            setds_oAttendance([]);
            setds_oEstimate([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnOrderChange_OnClick = () => {
        console.log('btnOrderChange_OnClick clicked');
    };
    const btnProc_OnClick = () => {
        console.log('btnProc_OnClick clicked');
    };
    const btnRepayCancel_OnClick = () => {
        console.log('btnRepayCancel_OnClick clicked');
    };
    const btnRepay_OnClick = () => {
        console.log('btnRepay_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oJubsu,
        ds_oSunap,
        ds_oChange,
        ds_oRepay,
        ds_oInternetReport,
        ds_iJubsuH,
        ds_ioSettlement,
        ds_oPosData,
        ds_iPosData,
        ds_oAttendance,
        ds_oEstimate,
        btnOrderChange_OnClick,
        btnProc_OnClick,
        btnRepayCancel_OnClick,
        btnRepay_OnClick,
        lfn_End,
    };
};