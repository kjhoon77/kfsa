// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioEGiro {
    EGGTMGNO: string;
    EGGRDATE: string;
    EGSEQ: string;
    EGROWDATA: string;
    EGERRORGUBUN: string;
    EGCHANGEGUBUN: string;
    EGREGDATE: string;
    EGREGSABUN: string;
    EGREMARK: string;
    EGGROUPGUBUN1_: string;
}

export interface Ids_ioError {
    EGSEQ: string;
    EGGTMGNO: string;
    EGCNO: string;
    EGAMOUNT: string;
    EGREMARK: string;
}

export interface Ids_ioChange {
    EGSEQ: string;
    EGGTMGNO: string;
    EGCNO: string;
    EGAMOUNT: string;
    EGREMARK: string;
}

export interface Ids_oCustomerFee {
    CMGNO: string;
    CGTMGNO: string;
    CNO: string;
    CCOURSECD: string;
    FMMGNO: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
    CSTATUSGUBUN: string;
    CFEEYYMM: string;
    CDELDATE: string;
    BNM: string;
    BADDR1: string;
    CFSUNAPYEAR: string;
    CFSUNAPMONTH: string;
    CFSUNAPHALF: string;
    SUNAPFEE: string;
    MINAPFEE: string;
    CFCFEE: string;
    CREGCD: string;
    COBMGNO: string;
    COVERGUBUN: string;
    CDELGUBUN: string;
    FMAUTHGUBUN: string;
}

export interface Ids_iEGiroFee {
    EGGTMGNO: string;
    EGGRDATE: string;
    EGSEQ: string;
    EGROWDATA: string;
    EGERRORGUBUN: string;
    EGCHANGEGUBUN: string;
    EGINPUTGUBUN: string;
    EGREGDATE: string;
    EGREGSABUN: string;
    EGREMARK: string;
}

export interface Ids_iCustomerFee {
    CFCMGNO: string;
    CFSEQ: string;
    CFSETLMGUBUN: string;
    CFMEMBERGUBUN: string;
    CFGUBUN: string;
    CFGUBUNCD: string;
    CFSUNAPYEAR: string;
    CFSUNAPMONTH: string;
    CFSUNAPHALF: string;
    CFPROCAMOUNT: string;
    CFPROCDATE: string;
    CFPONYGUBUN: string;
    CFPONYDATE: string;
    CFMGGTMGNO: string;
    CFPROCGTMGNO: string;
    CFPOSGTMGNO: string;
    CFPMYEAR: string;
    CFPMMGNO: string;
    CFGROUPMGNO: string;
    CFCANCELDATE: string;
    CFCANCELSABUN: string;
    CFREMARK: string;
    CFREPAYREF: string;
    CFACTIVEGUBUN: string;
    BNM: string;
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

export interface Ids_oPosJibu {
}

export interface Ids_oPmMgno {
    PMYEAR: string;
    PMMGNO: string;
}

export interface Ids_oCno {
    CGTMGNO: string;
    CNO: string;
}

export interface Ids_ioCustomerStatus {
    RETURN: string;
    FMMGNO: string;
    BADDR1: string;
    STARTDATE: string;
    GTMGNO: string;
    OBMGNO: string;
}

export interface Ids_ioMemberH {
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
    COURSE: string;
    CMGNO: string;
    BNM: string;
    CFEEYYMM: string;
    RETURN: string;
    FMAUTHGUBUN: string;
}

export interface Ids_oCustomerEduFee {
    CFCMGNO: string;
}

export interface Ids_oCustomerFeeBackup {
    CMGNO: string;
    CGTMGNO: string;
    CNO: string;
    CCOURSECD: string;
    FMMGNO: string;
    FMNM: string;
    FMBIRTHDAY: string;
    FMPERSONKEY: string;
    BIRTHDAY: string;
    CSTATUSGUBUN: string;
    CFEEYYMM: string;
    CDELDATE: string;
    BNM: string;
    BADDR1: string;
    CFSUNAPYEAR: string;
    CFSUNAPMONTH: string;
    CFSUNAPHALF: string;
    SUNAPFEE: string;
    MINAPFEE: string;
    CFCFEE: string;
}

export interface Ids_ioEGiroBackup {
    EGGTMGNO: string;
    EGGRDATE: string;
    EGSEQ: string;
    EGROWDATA: string;
    EGERRORGUBUN: string;
    EGCHANGEGUBUN: string;
    EGREGDATE: string;
    EGREGSABUN: string;
    EGREMARK: string;
}

export interface Ids_ioEGropuGiro {
    EGGTMGNO: string;
    EGGRDATE: string;
    EGSEQ: string;
    EGROWDATA: string;
    EGERRORGUBUN: string;
    EGCHANGEGUBUN: string;
    EGREGDATE: string;
    EGREGSABUN: string;
    EGREMARK: string;
}

export interface Ids_ioEGiroGroupDetail {
}

export interface Ids_ioaa {
    EGGROUPGUBUN1_: string;
}

export interface Ids_ioCustomerInfoTmp {
    AGNM: string;
    CAGGUBUN: string;
    CAGMGNO: string;
    CBMGNO: string;
    CCOCD: string;
    CCOURSECD: string;
    CDELDATE: string;
    CDELGUBUN: string;
    CEDUPOSTADDR1: string;
    CEDUPOSTADDR2: string;
    CEDUPOSTGUBUN: string;
    CEDUPOSTPLACE: string;
    CEDUPOSTZIPCD: string;
    CEXCEPTDATE: string;
    CEXCEPTGUBUN: string;
    CFEEPOSTADDR1: string;
    CFEEPOSTADDR2: string;
    CFEEPOSTGUBUN: string;
    CFEEPOSTPLACE: string;
    CFEEPOSTZIPCD: string;
    CFEEYYMM: string;
    CFIREMGNO: string;
    CFMHMGNO: string;
    CFMHSEQ: string;
    CGATEWAYPK1: string;
    CGATEWAYPK2: string;
    CGATEWAYPK3: string;
    CGCOURSECD: string;
    CGTMGNO: string;
    CLASTADDSEQ: string;
    CLASTPRSEQ: string;
    CNO: string;
    COBMGNO: string;
    COLDMGNO: string;
    COVERGUBUN: string;
    CPERSONGUBUN: string;
    CPOSTREQGUBUN: string;
    CREGCD: string;
    CREGISTERYYMM: string;
    CSTATUSDATE: string;
    CSTATUSGUBUN: string;
    CSTATUSREASONCD: string;
    CMGNO: string;
}

export interface Ids_ioVirtualAccoutAllocation {
    SCMGNO: string;
    SBNM: string;
    SJIBU: string;
}

export interface Ids_iEduJubsuStatus {
    CMGNO: string;
    PCGUBUN: string;
    AMT: string;
    PAYGUBUN: string;
    PMYEAR: string;
    PMMGNO: string;
}

export const useFrmcust2150MEGiroInput = () => {
    const [ds_ioEGiro, setds_ioEGiro] = useState<Ids_ioEGiro[]>([]);
    const [ds_ioError, setds_ioError] = useState<Ids_ioError[]>([]);
    const [ds_ioChange, setds_ioChange] = useState<Ids_ioChange[]>([]);
    const [ds_oCustomerFee, setds_oCustomerFee] = useState<Ids_oCustomerFee[]>([]);
    const [ds_iEGiroFee, setds_iEGiroFee] = useState<Ids_iEGiroFee[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_oCno, setds_oCno] = useState<Ids_oCno[]>([]);
    const [ds_ioCustomerStatus, setds_ioCustomerStatus] = useState<Ids_ioCustomerStatus[]>([]);
    const [ds_ioMemberH, setds_ioMemberH] = useState<Ids_ioMemberH[]>([]);
    const [ds_oCustomerEduFee, setds_oCustomerEduFee] = useState<Ids_oCustomerEduFee[]>([]);
    const [ds_oCustomerFeeBackup, setds_oCustomerFeeBackup] = useState<Ids_oCustomerFeeBackup[]>([]);
    const [ds_ioEGiroBackup, setds_ioEGiroBackup] = useState<Ids_ioEGiroBackup[]>([]);
    const [ds_ioEGropuGiro, setds_ioEGropuGiro] = useState<Ids_ioEGropuGiro[]>([]);
    const [ds_ioEGiroGroupDetail, setds_ioEGiroGroupDetail] = useState<Ids_ioEGiroGroupDetail[]>([]);
    const [ds_ioaa, setds_ioaa] = useState<Ids_ioaa[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_iEduJubsuStatus, setds_iEduJubsuStatus] = useState<Ids_iEduJubsuStatus[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEGiro([]);
            setds_ioError([]);
            setds_ioChange([]);
            setds_oCustomerFee([]);
            setds_iEGiroFee([]);
            setds_iCustomerFee([]);
            setds_ioPosPrintM([]);
            setds_ioPosPayment([]);
            setds_oPosJibu([]);
            setds_oPmMgno([]);
            setds_oCno([]);
            setds_ioCustomerStatus([]);
            setds_ioMemberH([]);
            setds_oCustomerEduFee([]);
            setds_oCustomerFeeBackup([]);
            setds_ioEGiroBackup([]);
            setds_ioEGropuGiro([]);
            setds_ioEGiroGroupDetail([]);
            setds_ioaa([]);
            setds_ioCustomerInfoTmp([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_iEduJubsuStatus([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFeeReport_OnClick = () => {
        console.log('btnFeeReport_OnClick clicked');
    };
    const btnGiroSite_OnClick = () => {
        console.log('btnGiroSite_OnClick clicked');
    };
    const btnOpenFile_OnClick = () => {
        console.log('btnOpenFile_OnClick clicked');
    };
    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
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
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioEGiro,
        ds_ioError,
        ds_ioChange,
        ds_oCustomerFee,
        ds_iEGiroFee,
        ds_iCustomerFee,
        ds_ioPosPrintM,
        ds_ioPosPayment,
        ds_oPosJibu,
        ds_oPmMgno,
        ds_oCno,
        ds_ioCustomerStatus,
        ds_ioMemberH,
        ds_oCustomerEduFee,
        ds_oCustomerFeeBackup,
        ds_ioEGiroBackup,
        ds_ioEGropuGiro,
        ds_ioEGiroGroupDetail,
        ds_ioaa,
        ds_ioCustomerInfoTmp,
        ds_ioVirtualAccoutAllocation,
        ds_iEduJubsuStatus,
        btnFeeReport_OnClick,
        btnGiroSite_OnClick,
        btnOpenFile_OnClick,
        chkPonyDate_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
    };
};