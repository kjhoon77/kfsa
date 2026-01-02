// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJuso {
    ROADADDR: string;
    ROADADDRPART1: string;
    ROADADDRPART2: string;
    JIBUNADDR: string;
    ENGADDR: string;
    ZIPNO: string;
    ADMCD: string;
    RNMGTSN: string;
    BDMGTSN: string;
    BDKDCD: string;
    SINM: string;
    SGGNM: string;
    EMDNM: string;
    LINM: string;
    UDRTYN: string;
    MTYN: string;
    EMDNO: string;
    LNBRMNNM: string;
    LNBRSLNO: string;
    RN: string;
    BULDMNNM: string;
    BULDSLNO: string;
    BDNM: string;
    DETBDNMLIST: string;
}

export interface Ids_oCommon {
    totalCount: string;
    currentPage: string;
    countPerPage: string;
    errorCode: string;
    errorMessage: string;
}

export interface Ids_oSido {
    CD: string;
    DATA: string;
    JIBUCD: string;
}

export interface Ids_oJuso_imsi {
    ROADADDRPART1: string;
    ROADADDRPART2: string;
    JIBUNADDR: string;
    ENGADDR: string;
    ZIPNO: string;
    ADMCD: string;
    RNMGTSN: string;
    BDMGTSN: string;
    DETBDNMLIST: string;
    BDNM: string;
    BDKDCD: string;
    SINM: string;
    SGGNM: string;
    EMDNM: string;
    LINM: string;
    RN: string;
    UDRTYN: string;
    BULDMNNM: string;
    BULDSLNO: string;
    ROADADDR: string;
}

export const useFrmCOM9004PAddrSearch = () => {
    const [ds_oJuso, setds_oJuso] = useState<Ids_oJuso[]>([]);
    const [ds_oCommon, setds_oCommon] = useState<Ids_oCommon[]>([]);
    const [ds_oSido, setds_oSido] = useState<Ids_oSido[]>([]);
    const [ds_oJuso_imsi, setds_oJuso_imsi] = useState<Ids_oJuso_imsi[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJuso([]);
            setds_oCommon([]);
            setds_oSido([]);
            setds_oJuso_imsi([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSave_OnClick = () => {
        console.log('btnSave_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const chkRoadInput_OnClick = () => {
        console.log('chkRoadInput_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJuso,
        ds_oCommon,
        ds_oSido,
        ds_oJuso_imsi,
        btnSave_OnClick,
        btnSelect_OnClick,
        chkRoadInput_OnClick,
        lfn_End,
        lfn_Search,
    };
};