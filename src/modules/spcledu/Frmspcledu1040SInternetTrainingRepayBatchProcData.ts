// @ts-nocheck
export const Frmspcledu1040SInternetTrainingRepayBatchProcData = {};

export interface Ids_ioRepayBundle {
    COMPANYNAME?: string;
    ONLYKEY?: string;
    PPACCOUNT?: string;
    PMAMT?: number;
    PPABANKNM?: string;
    PPAOWNER?: string;
    PPAOWNER_A?: string;
    SEL?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TJHMGGTMGNO?: string;
    TJHPROCDATE?: string;
    TJHSTATUSCD?: string;
    TJHTJMGNO?: number;
    TJHTOHSEQREF?: number;
    TJHTSSEQREF?: number;
    TJPERSONNM?: string;
    TOHJUBSUNO?: string;
    TOMGGTMGNO?: string;
    TOTCCOURSECD?: string;
    PPABANKCD?: string;
    STARTJUBSUDATE?: string;
    TSGUBUN?: string;
    TJHSEQ?: number;
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
    PMVAT?: number;
    PMPAYMENTFLAG?: string;
    PMRESULT?: string;
    TSTJMGNO?: number;
    TSSEQ?: number;
    TCCOURSENM?: string;
    REPAYDAY?: string;
    REPAYAMT?: number;
    PPEXCELYN?: string;
    PCUSERTYPE?: string;
    TOYEAR?: string;
    TOTRAININGORDER?: string;
    CHK?: string;
    TSPROCAMOUNT?: number;
    TSTRAININGAMOUNT?: number;
    TSEXAMAMOUNT?: number;
    TSLICENSEAMOUNT?: number;
    TSAMOUNTGUBUN?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
}

export interface Ids_oIProcStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oIProcStatus: Ids_oIProcStatus[] = [
    { CD: '5', DATA: '환불신청(미입금)' },
    { CD: '6', DATA: '환불접수(신청확인)' },
    { CD: '7', DATA: '환불완료(입금)' },
];

export interface Ids_ioRepayBundleCopy {
    COMPANYNAME?: string;
    ONLYKEY?: string;
    PPACCOUNT?: string;
    PMAMT?: number;
    PPABANKNM?: string;
    PPAOWNER?: string;
    PPAOWNER_A?: string;
    SEL?: string;
    TJADDR1?: string;
    TJADDR2?: string;
    TJHMGGTMGNO?: string;
    TJHPROCDATE?: string;
    TJHSTATUSCD?: string;
    TJHTJMGNO?: number;
    TJHTOHSEQREF?: number;
    TJHTSSEQREF?: number;
    TJPERSONNM?: string;
    TOHJUBSUNO?: string;
    TOMGGTMGNO?: string;
    TOTCCOURSECD?: string;
    PPABANKCD?: string;
    STARTJUBSUDATE?: string;
    TSGUBUN?: string;
    TJHSEQ?: number;
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
    PMVAT?: number;
    PMPAYMENTFLAG?: string;
    PMRESULT?: string;
    TSTJMGNO?: number;
    TSSEQ?: number;
    TCCOURSENM?: string;
    REPAYDAY?: string;
    REPAYAMT?: number;
    PPEXCELYN?: string;
    PCUSERTYPE?: string;
    TOYEAR?: string;
    TOTRAININGORDER?: string;
    CHK?: string;
    TSPROCAMOUNT?: number;
    TSTRAININGAMOUNT?: number;
    TSEXAMAMOUNT?: number;
    TSLICENSEAMOUNT?: number;
    TSAMOUNTGUBUN?: string;
}

export interface Ids_iExcelLoad {
    COL01?: string;
    COL02?: string;
    COL03?: string;
    COL04?: string;
    COL05?: string;
    COL06?: string;
    COL07?: string;
    COL08?: string;
    COL09?: string;
    COL10?: string;
    COL11?: string;
    COL12?: string;
    COL13?: string;
    COL14?: string;
    COL15?: string;
    COL16?: string;
    COL17?: string;
    COL18?: string;
}

export interface Ids_ioReport {
}

export interface Ids_ioReportFilter {
}

export interface Ids_ioPosData {
    PMYEAR?: string;
    PMMGNO?: number;
    TSTJMGNO?: number;
    TSSEQ?: number;
    TSSUNAPACTIONREF?: string;
}

export interface Ids_ioReportEnd {
}

export interface Ids_ioPosDataEnd {
    PMYEAR?: string;
    PMMGNO?: number;
    TSTJMGNO?: number;
    TSSEQ?: number;
    TSSUNAPACTIONREF?: string;
}

export interface Ids_ioPosDataFilter {
    PMYEAR?: string;
    PMMGNO?: number;
    TSTJMGNO?: number;
    TSSEQ?: number;
    TSSUNAPACTIONREF?: string;
}

export interface Ids_oInternetReport {
}
