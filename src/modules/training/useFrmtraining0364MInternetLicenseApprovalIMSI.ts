// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioApproveList {
    AJMGNO: string;
    AJTJMGNO: string;
    AJGTMGNO: string;
    AJSTATUS: string;
    AJISSUEGUBUN: string;
    AJISSUEGUBUNNM: string;
    AJTCCOURSECD: string;
    AJTCCOURSENM: string;
    AJJUBSUDATE: string;
    AJCONFIRMDATE: string;
    AJCONFIRMSABUN: string;
    AJRESON: string;
    AJFILEPATH: string;
    AJFILENM: string;
    AJREGDATE: string;
    AJREGSABUN: string;
    AJMODDATE: string;
    AJMODSABUN: string;
    AJGUBUN: string;
    AJGUBUNNM: string;
    AJREMARK: string;
    TPMGNO: string;
    TPNM: string;
    TPBIRTHDAY: string;
    BIRTHDAY: string;
    TPPERSONKEY: string;
    TPTEL: string;
    TPHPTEL: string;
    TPLASTIMGSEQ: string;
    TPADDR_1: string;
    TPADDR_2: string;
    TPZIPCD: string;
    IILASTDIRPATH: string;
    IILASTREALNM: string;
    IILASTIMGSEQ: string;
    AJMODRESON: string;
    SEL: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_status {
    CD: string;
    DATA: string;
}

export interface Ids_iApproveLicense {
    AJMGNO: string;
    AJTJMGNO: string;
    AJSTATUS: string;
    AJRESON: string;
    AJREMARK: string;
    IIIMGSEQ: string;
    LLCSNO_A: string;
    AJGUBUN: string;
    AJISSUEGUBUN: string;
    AJMODRESON: string;
    AJSAVE: string;
}

export interface Ids_oApproveLicenseResult {
    O_LLCSNO: string;
    O_AJSTATUS: string;
}

export interface Ids_oImageInfo {
    IILASTDIRPATH: string;
    IILASTREALNM: string;
    IILASTIMGSEQ: string;
    IIDIRPATH: string;
    IIREALNM: string;
    IIIMGSEQ: string;
}

export interface Ids_oStatus {
}

export interface Ids_oAjgubun {
    CD: string;
    DATA: string;
    DATA2: string;
    DATA3: string;
    DATA4: string;
}

export interface Ids_oLicense {
    LICENSECNT: string;
    LLCSNO: string;
}

export interface Ids_oAjgubunAll {
    AJTCCOURSECD: string;
    AJTCCOURSECDNM: string;
    AJISSUEGUBUN: string;
    AJISSUEGUBUNNM: string;
    AJGUBUN: string;
    AJGUBUNNM: string;
}

export interface Ids_ioApproveData {
}

export interface Ids_Issuegubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0364MInternetLicenseApprovalIMSI = () => {
    const [ds_ioApproveList, setds_ioApproveList] = useState<Ids_ioApproveList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_status, setds_status] = useState<Ids_status[]>([]);
    const [ds_iApproveLicense, setds_iApproveLicense] = useState<Ids_iApproveLicense[]>([]);
    const [ds_oApproveLicenseResult, setds_oApproveLicenseResult] = useState<Ids_oApproveLicenseResult[]>([]);
    const [ds_oImageInfo, setds_oImageInfo] = useState<Ids_oImageInfo[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oAjgubun, setds_oAjgubun] = useState<Ids_oAjgubun[]>([]);
    const [ds_oLicense, setds_oLicense] = useState<Ids_oLicense[]>([]);
    const [ds_oAjgubunAll, setds_oAjgubunAll] = useState<Ids_oAjgubunAll[]>([]);
    const [ds_ioApproveData, setds_ioApproveData] = useState<Ids_ioApproveData[]>([]);
    const [ds_Issuegubun, setds_Issuegubun] = useState<Ids_Issuegubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioApproveList([]);
            setds_oJibu([]);
            setds_status([]);
            setds_iApproveLicense([]);
            setds_oApproveLicenseResult([]);
            setds_oImageInfo([]);
            setds_oStatus([]);
            setds_oAjgubun([]);
            setds_oLicense([]);
            setds_oAjgubunAll([]);
            setds_ioApproveData([]);
            setds_Issuegubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btConfirmCancell_OnClick = () => {
        console.log('btConfirmCancell_OnClick clicked');
    };
    const btnApprove_OnClick = () => {
        console.log('btnApprove_OnClick clicked');
    };
    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnDownload_OnClick = () => {
        console.log('btnDownload_OnClick clicked');
    };
    const btnImageZoom_OnClick = () => {
        console.log('btnImageZoom_OnClick clicked');
    };
    const btnImsiSave_OnClick = () => {
        console.log('btnImsiSave_OnClick clicked');
    };
    const btnJubsu_OnClick = () => {
        console.log('btnJubsu_OnClick clicked');
    };
    const btnMod_OnClick = () => {
        console.log('btnMod_OnClick clicked');
    };
    const btnReject_OnClick = () => {
        console.log('btnReject_OnClick clicked');
    };
    const btnSaveXml_OnClick = () => {
        console.log('btnSaveXml_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_SMSSend = () => {
        console.log('lfn_SMSSend clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioApproveList,
        ds_oJibu,
        ds_status,
        ds_iApproveLicense,
        ds_oApproveLicenseResult,
        ds_oImageInfo,
        ds_oStatus,
        ds_oAjgubun,
        ds_oLicense,
        ds_oAjgubunAll,
        ds_ioApproveData,
        ds_Issuegubun,
        btConfirmCancell_OnClick,
        btnApprove_OnClick,
        btnCancel_OnClick,
        btnDownload_OnClick,
        btnImageZoom_OnClick,
        btnImsiSave_OnClick,
        btnJubsu_OnClick,
        btnMod_OnClick,
        btnReject_OnClick,
        btnSaveXml_OnClick,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
        lfn_SMSSend,
        lfn_Search,
    };
};