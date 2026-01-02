// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iExcelLoad {
    COL01: string;
    COL02: string;
    COL03: string;
    COL04: string;
    COL05: string;
    COL06: string;
    COL07: string;
    COL08: string;
    COL09: string;
    COL10: string;
    COL11: string;
    COL12: string;
    COL13: string;
    COL14: string;
    COL15: string;
    COL16: string;
    COL17: string;
    COL18: string;
}

export interface Ids_ioPosData {
    PMYEAR: string;
    PMMGNO: string;
    ESEJMGNO: string;
    ESSEQ: string;
    ESSUNAPACTIONREF: string;
}

export interface Ids_ioPosDataEnd {
    PMYEAR: string;
    PMMGNO: string;
    TSTJMGNO: string;
    TSSEQ: string;
    TSSUNAPACTIONREF: string;
}

export interface Ids_ioPosDataFilter {
    PMYEAR: string;
    PMMGNO: string;
    TSTJMGNO: string;
    TSSEQ: string;
    TSSUNAPACTIONREF: string;
}

export interface Ids_ioRepayBundle {
    COMPANYNAME: string;
    EJADDR1: string;
    EJADDR2: string;
    EJHEJMGNO: string;
    EJHEOHSEQREF: string;
    EJHESSEQREF: string;
    EJHMGGTMGNO: string;
    EJHPROCDATE: string;
    EJHSEQ: string;
    EJHSTATUSCD: string;
    EJPERSONNM: string;
    EOHJUBSUNO: string;
    EOMGGTMGNO: string;
    EOTCCOURSECD: string;
    ESEJMGNO: string;
    ESGUBUN: string;
    ESSEQ: string;
    ONLYKEY: string;
    PCUSERTYPE: string;
    PMAMT: string;
    PMBUYER: string;
    PMCLAS: string;
    PMINPUT: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    PMMGNO: string;
    PMPAYMENTFLAG: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPGMGUBUN: string;
    PMPGMID: string;
    PMPGMPK: string;
    PMPIID: string;
    PMPROCDATE: string;
    PMRESULT: string;
    PMVAT: string;
    PMYEAR: string;
    PPABANKCD: string;
    PPABANKNM: string;
    PPACCOUNT: string;
    PPAOWNER: string;
    PPAOWNER_A: string;
    PPEXCELYN: string;
    SEL: string;
    STARTJUBSUDATE: string;
    TCCOURSENM: string;
    EOYEAR: string;
    EOEXAMORDER: string;
    CHK: string;
}

export interface Ids_ioRepayBundleCopy {
    COMPANYNAME: string;
    EJADDR1: string;
    EJADDR2: string;
    EJHEJMGNO: string;
    EJHEOHSEQREF: string;
    EJHESSEQREF: string;
    EJHMGGTMGNO: string;
    EJHPROCDATE: string;
    EJHSEQ: string;
    EJHSTATUSCD: string;
    EJPERSONNM: string;
    EOHJUBSUNO: string;
    EOMGGTMGNO: string;
    EOTCCOURSECD: string;
    ESEJMGNO: string;
    ESGUBUN: string;
    ESSEQ: string;
    ONLYKEY: string;
    PCUSERTYPE: string;
    PMAMT: string;
    PMBUYER: string;
    PMCLAS: string;
    PMINPUT: string;
    PMITEM1: string;
    PMITEM2: string;
    PMITEM3: string;
    PMITEM4: string;
    PMMGNO: string;
    PMPAYMENTFLAG: string;
    PMPCGUBUN: string;
    PMPCORDERNO: string;
    PMPGMGUBUN: string;
    PMPGMID: string;
    PMPGMPK: string;
    PMPIID: string;
    PMPROCDATE: string;
    PMRESULT: string;
    PMVAT: string;
    PMYEAR: string;
    PPABANKCD: string;
    PPABANKNM: string;
    PPACCOUNT: string;
    PPAOWNER: string;
    PPAOWNER_A: string;
    PPEXCELYN: string;
    SEL: string;
    STARTJUBSUDATE: string;
    TCCOURSENM: string;
    EOYEAR: string;
    EOEXAMORDER: string;
    CHK: string;
}

export interface Ids_ioReport {
}

export interface Ids_ioReportEnd {
}

export interface Ids_ioReportFilter {
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oIProcStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oInternetReport {
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export const useFrmspcledu1060SInternetLcsRepayBatchProc = () => {
    const [ds_iExcelLoad, setds_iExcelLoad] = useState<Ids_iExcelLoad[]>([]);
    const [ds_ioPosData, setds_ioPosData] = useState<Ids_ioPosData[]>([]);
    const [ds_ioPosDataEnd, setds_ioPosDataEnd] = useState<Ids_ioPosDataEnd[]>([]);
    const [ds_ioPosDataFilter, setds_ioPosDataFilter] = useState<Ids_ioPosDataFilter[]>([]);
    const [ds_ioRepayBundle, setds_ioRepayBundle] = useState<Ids_ioRepayBundle[]>([]);
    const [ds_ioRepayBundleCopy, setds_ioRepayBundleCopy] = useState<Ids_ioRepayBundleCopy[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioReportEnd, setds_ioReportEnd] = useState<Ids_ioReportEnd[]>([]);
    const [ds_ioReportFilter, setds_ioReportFilter] = useState<Ids_ioReportFilter[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oIProcStatus, setds_oIProcStatus] = useState<Ids_oIProcStatus[]>([]);
    const [ds_oInternetReport, setds_oInternetReport] = useState<Ids_oInternetReport[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iExcelLoad([]);
            setds_ioPosData([]);
            setds_ioPosDataEnd([]);
            setds_ioPosDataFilter([]);
            setds_ioRepayBundle([]);
            setds_ioRepayBundleCopy([]);
            setds_ioReport([]);
            setds_ioReportEnd([]);
            setds_ioReportFilter([]);
            setds_oCourse([]);
            setds_oIProcStatus([]);
            setds_oInternetReport([]);
            setds_oJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnReportBatch_OnClick = () => {
        console.log('btnReportBatch_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Check = () => {
        console.log('lfn_Check clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Export = () => {
        console.log('lfn_Export clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_iExcelLoad,
        ds_ioPosData,
        ds_ioPosDataEnd,
        ds_ioPosDataFilter,
        ds_ioRepayBundle,
        ds_ioRepayBundleCopy,
        ds_ioReport,
        ds_ioReportEnd,
        ds_ioReportFilter,
        ds_oCourse,
        ds_oIProcStatus,
        ds_oInternetReport,
        ds_oJibu,
        btnMutilSort_OnClick,
        btnReportBatch_OnClick,
        lfn_Cancel,
        lfn_Check,
        lfn_End,
        lfn_Excel,
        lfn_Export,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};