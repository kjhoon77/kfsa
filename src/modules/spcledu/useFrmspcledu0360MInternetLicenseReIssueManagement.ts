// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oStatus {
    CD: string;
    DATA: string;
}

export interface Ids_oList {
    LRMGNO: string;
    LRTPMGNO: string;
    LRLASTLRHSEQ: string;
    LRLASTLPSEQ: string;
    PMYEAR: string;
    PMMGNO: string;
    LRPROCDATE: string;
    LRPAYGUBUN: string;
    LRSTATUS: string;
    LRPAYSTATUS: string;
    LRSTATUSNM: string;
    LLCSNO: string;
    LHSEQ: string;
    LBARCODE: string;
    LPPROCGTMGNO: string;
    LPPROCJIBUNM: string;
    LTCCOURSECD: string;
    LTCCOURSECDNICKNM: string;
    LTCCOURSECDNM: string;
    LISSUEGUBUN: string;
    LISSUEGUBUNNM: string;
    LISSUEDATE: string;
    LAMOUNT: string;
    IIIMGSEQ: string;
    IIDIRPATH: string;
    IIREALNM: string;
    LRNM: string;
    LRTPRESIDENTNO: string;
    LRJIBU: string;
    LRJIBUNM: string;
    LRAUTHYN: string;
    LRZIPCD: string;
    LRADDR1: string;
    LRADDR2: string;
    LRTEL: string;
    LRHPTEL: string;
    LRRZIPCD: string;
    LRRADDR1: string;
    LRRADDR2: string;
    LRRNM: string;
    LRRTEL: string;
    LRWAYBILLNO: string;
    PMBUYER: string;
    PMAMT: string;
    PMPAYMENTFLAG: string;
    PMSETLMGUBUN: string;
    PMSUNAPDATE: string;
    PMPGMGUBUN: string;
    PMPGMGUBUNNM: string;
    PPAOWNER: string;
    PPAPROCDATE: string;
    PPABANKNM: string;
    PPACCOUNT: string;
    PPREASON: string;
    PPAAMT: string;
    LHISSUEGUBUN: string;
    LHISSUEREASON: string;
}

export interface Ids_iLicenseReissueH {
    LRHLRMGNO: string;
    LRHSEQ: string;
    LRHSTATUS: string;
    LRHPAYSTATUS: string;
    LRHREGDATE: string;
    LRHREGSABUN: string;
}

export interface Ids_iLicenseImage {
    LILLCSNO: string;
    LISEQ: string;
    LIDIRPATH: string;
    LIREALNM: string;
}

export interface Ids_iLicenseH {
    LHLLCSNO: string;
    LHSEQ: string;
    LHISSUEMGNO: string;
    LHTPMGNO: string;
    LHIIIMGSEQ: string;
    LHISSUEDATE: string;
    LHISSUEGUBUN: string;
    LHPRTDATE: string;
    LHISSUEREASON: string;
    LHTCCOURSECD: string;
    LHPERSONNM: string;
    LHRESIDENTNO: string;
    LHZIPCD: string;
    LHADDR1: string;
    LHADDR2: string;
    LHADDR3: string;
    LHTEL: string;
    LHHPTEL: string;
    LHPROCGTMGNO: string;
    LHCANCELDATE: string;
    LHCANCELREASON: string;
    LHCANCELPSABUN: string;
    LHLICENSEAMTTJMGNO: string;
}

export interface Ids_iLicenseSettlement {
    LSLLCSNO: string;
    LSLHSEQ: string;
    LSGUBUNCD: string;
    LSGUBUN: string;
    LSPROCAMOUNT: string;
    LSPROCDATE: string;
    LSPROCGTMGNO: string;
    LSPMYEAR: string;
    LSPMMGNO: string;
    LSREPAYREF: string;
}

export interface Ids_oLicenseReport {
    BIRTHDAY: string;
    IIFILENM: string;
    LADDR1: string;
    LADDR2: string;
    LBARCODE: string;
    LHPRTDATE: string;
    LISSUEDATE: string;
    LISSUEGUBUNNM: string;
    LLCSNO: string;
    LPERSONNM: string;
    LTCCOURSENM: string;
    LLASTHISTORYSEQ: string;
}

export interface Ids_oLicenseReportEdu {
    EDUDATE: string;
    GTDEPTNM: string;
    TARGET: string;
    TCCOURSENM: string;
}

export interface Ids_ioLicenseReissuePay {
    LPLRMGNO: string;
    LPSEQ: string;
    LPLLCSNO: string;
    LPSETLMTYN: string;
    LPGUBUNCD: string;
    LPGUBUN: string;
    LPPROCAMOUNT: string;
    LPLICENSEAMOUNT: string;
    LPPOSTAMOUNT: string;
    LPPROCDATE: string;
    LPPONYGUBUN: string;
    LPPONYDATE: string;
    LPPROCGTMGNO: string;
    LPPMYEAR: string;
    LPPMMGNO: string;
    LPREPAYREF: string;
}

export interface Ids_oPmMgno {
    PMYEAR: string;
    PMMGNO: string;
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

export interface Ids_oPosCas {
}

export interface Ids_AddrLable {
    ADDR1: string;
    ADDR2: string;
    BNM: string;
    CNO: string;
    ZIPCD: string;
}

export interface Ids_PrintApplication {
    GUBUN: string;
    ISSUEGUBUNNM: string;
    ISSUEREASON: string;
    COURSECD: string;
    NAME: string;
    RESIDENTNO: string;
    TEL: string;
    HPTEL: string;
    ADDR1: string;
    ADDR2: string;
}

export const useFrmspcledu0360MInternetLicenseReIssueManagement = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [ds_iLicenseReissueH, setds_iLicenseReissueH] = useState<Ids_iLicenseReissueH[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [ds_iLicenseH, setds_iLicenseH] = useState<Ids_iLicenseH[]>([]);
    const [ds_iLicenseSettlement, setds_iLicenseSettlement] = useState<Ids_iLicenseSettlement[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_oLicenseReportEdu, setds_oLicenseReportEdu] = useState<Ids_oLicenseReportEdu[]>([]);
    const [ds_ioLicenseReissuePay, setds_ioLicenseReissuePay] = useState<Ids_ioLicenseReissuePay[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_oPosCas, setds_oPosCas] = useState<Ids_oPosCas[]>([]);
    const [ds_AddrLable, setds_AddrLable] = useState<Ids_AddrLable[]>([]);
    const [ds_PrintApplication, setds_PrintApplication] = useState<Ids_PrintApplication[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oStatus([]);
            setds_oList([]);
            setds_iLicenseReissueH([]);
            setds_iLicenseImage([]);
            setds_iLicenseH([]);
            setds_iLicenseSettlement([]);
            setds_oLicenseReport([]);
            setds_oLicenseReportEdu([]);
            setds_ioLicenseReissuePay([]);
            setds_oPmMgno([]);
            setds_ioPosPayment([]);
            setds_ioPosPrintM([]);
            setds_oPosCas([]);
            setds_AddrLable([]);
            setds_PrintApplication([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnLicensePrint_OnClick = () => {
        console.log('btnLicensePrint_OnClick clicked');
    };
    const btnPrintAddrAll_OnClick = () => {
        console.log('btnPrintAddrAll_OnClick clicked');
    };
    const btnPrintAddr_OnClick = () => {
        console.log('btnPrintAddr_OnClick clicked');
    };
    const btnPrintApplication_OnClick = () => {
        console.log('btnPrintApplication_OnClick clicked');
    };
    const btnReIssue_OnClick = () => {
        console.log('btnReIssue_OnClick clicked');
    };
    const btnReturn_OnClick = () => {
        console.log('btnReturn_OnClick clicked');
    };
    const btnTransSave_OnClick = () => {
        console.log('btnTransSave_OnClick clicked');
    };
    const btnTransSearch_OnClick = () => {
        console.log('btnTransSearch_OnClick clicked');
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
    const tabSettlement_tabRepay_btnCancel_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnCancel_OnClick clicked');
    };
    const tabSettlement_tabRepay_btnJubsu_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnJubsu_OnClick clicked');
    };
    const tabSettlement_tabRepay_btnRepay_OnClick = () => {
        console.log('tabSettlement_tabRepay_btnRepay_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnPrintReRct_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnPrintReRct_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnReapy_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnReapy_OnClick clicked');
    };
    const tabSettlement_tabSunap_btnVirtualAccount_OnClick = () => {
        console.log('tabSettlement_tabSunap_btnVirtualAccount_OnClick clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oStatus,
        ds_oList,
        ds_iLicenseReissueH,
        ds_iLicenseImage,
        ds_iLicenseH,
        ds_iLicenseSettlement,
        ds_oLicenseReport,
        ds_oLicenseReportEdu,
        ds_ioLicenseReissuePay,
        ds_oPmMgno,
        ds_ioPosPayment,
        ds_ioPosPrintM,
        ds_oPosCas,
        ds_AddrLable,
        ds_PrintApplication,
        btnJubsu_OnClick,
        btnLicensePrint_OnClick,
        btnPrintAddrAll_OnClick,
        btnPrintAddr_OnClick,
        btnPrintApplication_OnClick,
        btnReIssue_OnClick,
        btnReturn_OnClick,
        btnTransSave_OnClick,
        btnTransSearch_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Search,
        tabSettlement_tabRepay_btnCancel_OnClick,
        tabSettlement_tabRepay_btnJubsu_OnClick,
        tabSettlement_tabRepay_btnRepay_OnClick,
        tabSettlement_tabSunap_btnPrintReRct_OnClick,
        tabSettlement_tabSunap_btnReapy_OnClick,
        tabSettlement_tabSunap_btnVirtualAccount_OnClick,
    };
};