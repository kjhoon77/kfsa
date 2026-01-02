// @ts-nocheck
export const Frmspcledu0360MInternetLicenseReIssueManagementData = {};

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oStatus: Ids_oStatus[] = [
    { CD: '', DATA: '전체' },
    { CD: '01', DATA: '발급신청' },
    { CD: '02', DATA: '입금완료' },
    { CD: '03', DATA: '접수완료' },
    { CD: '04', DATA: '발급완료' },
    { CD: '15', DATA: '환불신청' },
    { CD: '16', DATA: '환불접수' },
    { CD: '17', DATA: '환불완료' },
    { CD: '18', DATA: '환불취소' },
    { CD: '06', DATA: '반송' },
];

export interface Ids_oList {
    LRMGNO?: number;
    LRTPMGNO?: number;
    LRLASTLRHSEQ?: number;
    LRLASTLPSEQ?: number;
    PMYEAR?: string;
    PMMGNO?: number;
    LRPROCDATE?: string;
    LRPAYGUBUN?: string;
    LRSTATUS?: string;
    LRPAYSTATUS?: string;
    LRSTATUSNM?: string;
    LLCSNO?: string;
    LHSEQ?: number;
    LBARCODE?: string;
    LPPROCGTMGNO?: string;
    LPPROCJIBUNM?: string;
    LTCCOURSECD?: string;
    LTCCOURSECDNICKNM?: string;
    LTCCOURSECDNM?: string;
    LISSUEGUBUN?: string;
    LISSUEGUBUNNM?: string;
    LISSUEDATE?: string;
    LAMOUNT?: number;
    IIIMGSEQ?: number;
    IIDIRPATH?: string;
    IIREALNM?: string;
    LRNM?: string;
    LRTPRESIDENTNO?: string;
    LRJIBU?: string;
    LRJIBUNM?: string;
    LRAUTHYN?: string;
    LRZIPCD?: string;
    LRADDR1?: string;
    LRADDR2?: string;
    LRTEL?: string;
    LRHPTEL?: string;
    LRRZIPCD?: string;
    LRRADDR1?: string;
    LRRADDR2?: string;
    LRRNM?: string;
    LRRTEL?: string;
    LRWAYBILLNO?: string;
    PMBUYER?: string;
    PMAMT?: number;
    PMPAYMENTFLAG?: string;
    PMSETLMGUBUN?: string;
    PMSUNAPDATE?: string;
    PMPGMGUBUN?: string;
    PMPGMGUBUNNM?: string;
    PPAOWNER?: string;
    PPAPROCDATE?: string;
    PPABANKNM?: string;
    PPACCOUNT?: string;
    PPREASON?: string;
    PPAAMT?: number;
    LHISSUEGUBUN?: string;
    LHISSUEREASON?: string;
}

export interface Ids_iLicenseReissueH {
    LRHLRMGNO?: number;
    LRHSEQ?: number;
    LRHSTATUS?: string;
    LRHPAYSTATUS?: string;
    LRHREGDATE?: string;
    LRHREGSABUN?: string;
}

export interface Ids_iLicenseImage {
    LILLCSNO?: string;
    LISEQ?: number;
    LIDIRPATH?: string;
    LIREALNM?: string;
}

export interface Ids_iLicenseH {
    LHLLCSNO?: string;
    LHSEQ?: number;
    LHISSUEMGNO?: number;
    LHTPMGNO?: number;
    LHIIIMGSEQ?: number;
    LHISSUEDATE?: string;
    LHISSUEGUBUN?: string;
    LHPRTDATE?: string;
    LHISSUEREASON?: string;
    LHTCCOURSECD?: string;
    LHPERSONNM?: string;
    LHRESIDENTNO?: string;
    LHZIPCD?: string;
    LHADDR1?: string;
    LHADDR2?: string;
    LHADDR3?: string;
    LHTEL?: string;
    LHHPTEL?: string;
    LHPROCGTMGNO?: string;
    LHCANCELDATE?: string;
    LHCANCELREASON?: string;
    LHCANCELPSABUN?: string;
    LHLICENSEAMTTJMGNO?: number;
}

export interface Ids_iLicenseSettlement {
    LSLLCSNO?: string;
    LSLHSEQ?: string;
    LSGUBUNCD?: string;
    LSGUBUN?: string;
    LSPROCAMOUNT?: number;
    LSPROCDATE?: string;
    LSPROCGTMGNO?: string;
    LSPMYEAR?: string;
    LSPMMGNO?: number;
    LSREPAYREF?: number;
}

export interface Ids_oLicenseReport {
    BIRTHDAY?: string;
    IIFILENM?: string;
    LADDR1?: string;
    LADDR2?: string;
    LBARCODE?: string;
    LHPRTDATE?: string;
    LISSUEDATE?: string;
    LISSUEGUBUNNM?: string;
    LLCSNO?: string;
    LPERSONNM?: string;
    LTCCOURSENM?: string;
    LLASTHISTORYSEQ?: number;
}

export interface Ids_oLicenseReportEdu {
    EDUDATE?: string;
    GTDEPTNM?: string;
    TARGET?: string;
    TCCOURSENM?: string;
}

export interface Ids_ioLicenseReissuePay {
    LPLRMGNO?: number;
    LPSEQ?: number;
    LPLLCSNO?: string;
    LPSETLMTYN?: string;
    LPGUBUNCD?: string;
    LPGUBUN?: string;
    LPPROCAMOUNT?: number;
    LPLICENSEAMOUNT?: number;
    LPPOSTAMOUNT?: number;
    LPPROCDATE?: string;
    LPPONYGUBUN?: string;
    LPPONYDATE?: string;
    LPPROCGTMGNO?: string;
    LPPMYEAR?: string;
    LPPMMGNO?: number;
    LPREPAYREF?: number;
}

export interface Ids_oPmMgno {
    PMYEAR?: string;
    PMMGNO?: string;
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
    PCBANKNM?: string;
}

export interface Ids_oPosCas {
}

export interface Ids_AddrLable {
    ADDR1?: string;
    ADDR2?: string;
    BNM?: string;
    CNO?: string;
    ZIPCD?: string;
}

export interface Ids_PrintApplication {
    GUBUN?: string;
    ISSUEGUBUNNM?: string;
    ISSUEREASON?: string;
    COURSECD?: string;
    NAME?: string;
    RESIDENTNO?: string;
    TEL?: string;
    HPTEL?: string;
    ADDR1?: string;
    ADDR2?: string;
}
