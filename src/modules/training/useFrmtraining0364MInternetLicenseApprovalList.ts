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
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_status {
    CD: string;
    DATA: string;
}

export interface Ids_Course {
    CD: string;
    DATA: string;
}

export interface Ids_oAjgubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAjgubunG {
    CD: string;
    DATA: string;
}

export interface Ids_Issuegubun {
    CD: string;
    DATA: string;
}

export interface Ids_IssuegubunG {
    CD: string;
    DATA: string;
}

export const useFrmtraining0364MInternetLicenseApprovalList = () => {
    const [ds_ioApproveList, setds_ioApproveList] = useState<Ids_ioApproveList[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_status, setds_status] = useState<Ids_status[]>([]);
    const [ds_Course, setds_Course] = useState<Ids_Course[]>([]);
    const [ds_oAjgubun, setds_oAjgubun] = useState<Ids_oAjgubun[]>([]);
    const [ds_oAjgubunG, setds_oAjgubunG] = useState<Ids_oAjgubunG[]>([]);
    const [ds_Issuegubun, setds_Issuegubun] = useState<Ids_Issuegubun[]>([]);
    const [ds_IssuegubunG, setds_IssuegubunG] = useState<Ids_IssuegubunG[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioApproveList([]);
            setds_oJibu([]);
            setds_status([]);
            setds_Course([]);
            setds_oAjgubun([]);
            setds_oAjgubunG([]);
            setds_Issuegubun([]);
            setds_IssuegubunG([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioApproveList,
        ds_oJibu,
        ds_status,
        ds_Course,
        ds_oAjgubun,
        ds_oAjgubunG,
        ds_Issuegubun,
        ds_IssuegubunG,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};