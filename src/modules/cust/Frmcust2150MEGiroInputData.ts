// @ts-nocheck
export const Frmcust2150MEGiroInputData = {};

export interface Ids_ioEGiro {
    EGGTMGNO?: string;
    EGGRDATE?: string;
    EGSEQ?: number;
    EGROWDATA?: string;
    EGERRORGUBUN?: string;
    EGCHANGEGUBUN?: string;
    EGREGDATE?: string;
    EGREGSABUN?: string;
    EGREMARK?: string;
    EGGROUPGUBUN1_?: string;
}

export interface Ids_ioError {
    EGSEQ?: number;
    EGGTMGNO?: string;
    EGCNO?: string;
    EGAMOUNT?: string;
    EGREMARK?: string;
}

export interface Ids_ioChange {
    EGSEQ?: number;
    EGGTMGNO?: string;
    EGCNO?: string;
    EGAMOUNT?: string;
    EGREMARK?: string;
}

export interface Ids_oCustomerFee {
    CMGNO?: number;
    CGTMGNO?: string;
    CNO?: string;
    CCOURSECD?: string;
    FMMGNO?: number;
    FMNM?: string;
    FMBIRTHDAY?: string;
    FMPERSONKEY?: string;
    BIRTHDAY?: string;
    CSTATUSGUBUN?: string;
    CFEEYYMM?: string;
    CDELDATE?: string;
    BNM?: string;
    BADDR1?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    CFSUNAPHALF?: string;
    SUNAPFEE?: number;
    MINAPFEE?: number;
    CFCFEE?: number;
    CREGCD?: string;
    COBMGNO?: string;
    COVERGUBUN?: string;
    CDELGUBUN?: string;
    FMAUTHGUBUN?: string;
}

export interface Ids_iEGiroFee {
    EGGTMGNO?: number;
    EGGRDATE?: string;
    EGSEQ?: number;
    EGROWDATA?: string;
    EGERRORGUBUN?: string;
    EGCHANGEGUBUN?: string;
    EGINPUTGUBUN?: string;
    EGREGDATE?: string;
    EGREGSABUN?: string;
    EGREMARK?: string;
}

export interface Ids_iCustomerFee {
    CFCMGNO?: string;
    CFSEQ?: string;
    CFSETLMGUBUN?: string;
    CFMEMBERGUBUN?: string;
    CFGUBUN?: string;
    CFGUBUNCD?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    CFSUNAPHALF?: string;
    CFPROCAMOUNT?: number;
    CFPROCDATE?: string;
    CFPONYGUBUN?: string;
    CFPONYDATE?: string;
    CFMGGTMGNO?: string;
    CFPROCGTMGNO?: string;
    CFPOSGTMGNO?: string;
    CFPMYEAR?: string;
    CFPMMGNO?: string;
    CFGROUPMGNO?: string;
    CFCANCELDATE?: string;
    CFCANCELSABUN?: string;
    CFREMARK?: string;
    CFREPAYREF?: string;
    CFACTIVEGUBUN?: string;
    BNM?: string;
}

export interface Ids_ioPosPrintM {
    PMYEAR?: string;
    PMMGNO?: number;
    PMINPUT?: string;
    PMPCGUBUN?: string;
    PMPCORDERNO?: string;
    PMPROCDATE?: string;
    PMPIID?: string;
    PMPGMID?: string;
    PMPGMPK?: string;
    PMBUYER?: string;
    PMCLAS?: string;
    PMPGMGUBUN?: string;
    PMITEM1?: string;
    PMITEM2?: string;
    PMITEM3?: string;
    PMITEM4?: string;
    PMAMT?: number;
    PMVAT?: number;
    PMPAYMENTFLAG?: string;
    PMRESULT?: string;
    PCUSERTYPE?: string;
    PCSOCIALBUSINESSNO?: string;
    PCCARDINSTALL?: string;
    PCCLOSEDATE?: string;
    PCBANKCD?: string;
}

export interface Ids_ioPosPayment {
    PPPMYEAR?: string;
    PPPMMGNO?: number;
    PPSEQ?: number;
    PPNM?: string;
    PPUNITAMT?: number;
    PPQTY?: number;
    PPTOTAMT?: number;
}

export interface Ids_oPosJibu {
}

export interface Ids_oPmMgno {
    PMYEAR?: string;
    PMMGNO?: string;
}

export interface Ids_oCno {
    CGTMGNO?: string;
    CNO?: string;
}

export interface Ids_ioCustomerStatus {
    RETURN?: string;
    FMMGNO?: string;
    BADDR1?: string;
    STARTDATE?: string;
    GTMGNO?: string;
    OBMGNO?: string;
}

export interface Ids_ioMemberH {
    FMNM?: string;
    FMBIRTHDAY?: string;
    FMPERSONKEY?: string;
    BIRTHDAY?: string;
    COURSE?: string;
    CMGNO?: string;
    BNM?: string;
    CFEEYYMM?: string;
    RETURN?: string;
    FMAUTHGUBUN?: string;
}

export interface Ids_oCustomerEduFee {
    CFCMGNO?: string;
}

export interface Ids_oCustomerFeeBackup {
    CMGNO?: number;
    CGTMGNO?: string;
    CNO?: string;
    CCOURSECD?: string;
    FMMGNO?: number;
    FMNM?: string;
    FMBIRTHDAY?: string;
    FMPERSONKEY?: string;
    BIRTHDAY?: string;
    CSTATUSGUBUN?: string;
    CFEEYYMM?: string;
    CDELDATE?: string;
    BNM?: string;
    BADDR1?: string;
    CFSUNAPYEAR?: string;
    CFSUNAPMONTH?: string;
    CFSUNAPHALF?: string;
    SUNAPFEE?: number;
    MINAPFEE?: number;
    CFCFEE?: number;
}

export interface Ids_ioEGiroBackup {
    EGGTMGNO?: string;
    EGGRDATE?: string;
    EGSEQ?: number;
    EGROWDATA?: string;
    EGERRORGUBUN?: string;
    EGCHANGEGUBUN?: string;
    EGREGDATE?: string;
    EGREGSABUN?: string;
    EGREMARK?: string;
}

export interface Ids_ioEGropuGiro {
    EGGTMGNO?: string;
    EGGRDATE?: string;
    EGSEQ?: number;
    EGROWDATA?: string;
    EGERRORGUBUN?: string;
    EGCHANGEGUBUN?: string;
    EGREGDATE?: string;
    EGREGSABUN?: string;
    EGREMARK?: string;
}

export interface Ids_ioEGiroGroupDetail {
}

export interface Ids_ioaa {
    EGGROUPGUBUN1_?: number;
}

export interface Ids_ioCustomerInfoTmp {
    AGNM?: string;
    CAGGUBUN?: string;
    CAGMGNO?: number;
    CBMGNO?: number;
    CCOCD?: string;
    CCOURSECD?: string;
    CDELDATE?: string;
    CDELGUBUN?: string;
    CEDUPOSTADDR1?: string;
    CEDUPOSTADDR2?: string;
    CEDUPOSTGUBUN?: string;
    CEDUPOSTPLACE?: string;
    CEDUPOSTZIPCD?: string;
    CEXCEPTDATE?: string;
    CEXCEPTGUBUN?: string;
    CFEEPOSTADDR1?: string;
    CFEEPOSTADDR2?: string;
    CFEEPOSTGUBUN?: string;
    CFEEPOSTPLACE?: string;
    CFEEPOSTZIPCD?: string;
    CFEEYYMM?: string;
    CFIREMGNO?: string;
    CFMHMGNO?: number;
    CFMHSEQ?: number;
    CGATEWAYPK1?: string;
    CGATEWAYPK2?: string;
    CGATEWAYPK3?: string;
    CGCOURSECD?: string;
    CGTMGNO?: string;
    CLASTADDSEQ?: number;
    CLASTPRSEQ?: number;
    CNO?: string;
    COBMGNO?: number;
    COLDMGNO?: string;
    COVERGUBUN?: string;
    CPERSONGUBUN?: string;
    CPOSTREQGUBUN?: string;
    CREGCD?: string;
    CREGISTERYYMM?: string;
    CSTATUSDATE?: string;
    CSTATUSGUBUN?: string;
    CSTATUSREASONCD?: string;
    CMGNO?: string;
}

export interface Ids_ioVirtualAccoutAllocation {
    SCMGNO?: string;
    SBNM?: string;
    SJIBU?: string;
}

export interface Ids_iEduJubsuStatus {
    CMGNO?: string;
    PCGUBUN?: string;
    AMT?: string;
    PAYGUBUN?: string;
    PMYEAR?: string;
    PMMGNO?: string;
}
