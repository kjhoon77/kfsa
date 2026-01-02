// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iBatchPorcResult {
    COMPANYNAME: string;
    ONLYKEY: string;
    PPACCOUNT: string;
    PMAMT: string;
    PPABANKNM: string;
    PPAOWNER: string;
    PPAOWNER_A: string;
    SEL: string;
    TJADDR1: string;
    TJADDR2: string;
    TJHMGGTMGNO: string;
    TJHPROCDATE: string;
    TJHSTATUSCD: string;
    TJHTJMGNO: string;
    TJHTOHSEQREF: string;
    TJHTSSEQREF: string;
    TJPERSONNM: string;
    TOHJUBSUNO: string;
    TOMGGTMGNO: string;
    TOTCCOURSECD: string;
    PPABANKCD: string;
    STARTJUBSUDATE: string;
    TSGUBUN: string;
    TJHSEQ: string;
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
    PMVAT: string;
    PMPAYMENTFLAG: string;
    PMRESULT: string;
    TSTJMGNO: string;
    TSSEQ: string;
    TCCOURSENM: string;
    REPAYDAY: string;
    REPAYAMT: string;
    PPEXCELYN: string;
    PCUSERTYPE: string;
    TOYEAR: string;
    TOTRAININGORDER: string;
    CHK: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oBatchProcResultYn {
    CD: string;
    DATA: string;
}

export const useFrmtraining1041PInternetTrainingRepayBatchProcResult = () => {
    const [ds_iBatchPorcResult, setds_iBatchPorcResult] = useState<Ids_iBatchPorcResult[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oBatchProcResultYn, setds_oBatchProcResultYn] = useState<Ids_oBatchProcResultYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iBatchPorcResult([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oBatchProcResultYn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };

    return {
        isLoading,
        ds_iBatchPorcResult,
        ds_oCourse,
        ds_oJibu,
        ds_oBatchProcResultYn,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
    };
};