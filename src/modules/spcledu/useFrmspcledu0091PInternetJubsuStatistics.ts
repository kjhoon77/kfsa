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

export interface Ids_JubsuH {
    EJHEJMGNO: string;
    EJHSEQ: string;
    EJHSTATUSCD: string;
    EJHESSEQREF: string;
    EJHEOHSEQREF: string;
    EJHMGGTMGNO: string;
    EJHPROCREASON: string;
    PPAPMYEAR: string;
    PPAPMMGNO: string;
    PPAFINISHAMOUNT: string;
}

export interface Ids_ioSettlement {
    ESEJMGNO: string;
    ESGUBUNCD: string;
    ESGUBUN: string;
    ESPROCAMOUNT: string;
    ESPONYGUBUN: string;
    ESMGGTMGNO: string;
    ESPROCGTMGNO: string;
    ESREPAYCD: string;
    ESSUNAPACTIONREF: string;
    ESREPAYREF: string;
    ESSEQ: string;
    ESSETLMTYN: string;
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

export const useFrmspcledu0091PInternetJubsuStatistics = () => {
    const [ds_oJubsu, setds_oJubsu] = useState<Ids_oJubsu[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oChange, setds_oChange] = useState<Ids_oChange[]>([]);
    const [ds_oRepay, setds_oRepay] = useState<Ids_oRepay[]>([]);
    const [ds_oInternetReport, setds_oInternetReport] = useState<Ids_oInternetReport[]>([]);
    const [ds_JubsuH, setds_JubsuH] = useState<Ids_JubsuH[]>([]);
    const [ds_ioSettlement, setds_ioSettlement] = useState<Ids_ioSettlement[]>([]);
    const [ds_oPosData, setds_oPosData] = useState<Ids_oPosData[]>([]);
    const [ds_iPosData, setds_iPosData] = useState<Ids_iPosData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJubsu([]);
            setds_oSunap([]);
            setds_oChange([]);
            setds_oRepay([]);
            setds_oInternetReport([]);
            setds_JubsuH([]);
            setds_ioSettlement([]);
            setds_oPosData([]);
            setds_iPosData([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnChange_OnClick = () => {
        console.log('btnChange_OnClick clicked');
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
        ds_JubsuH,
        ds_ioSettlement,
        ds_oPosData,
        ds_iPosData,
        btnChange_OnClick,
        btnProc_OnClick,
        btnRepayCancel_OnClick,
        btnRepay_OnClick,
        lfn_End,
    };
};