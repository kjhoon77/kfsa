// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oAgentList {
    ENTRPS_NM: string;
    RPRSNTV: string;
    POST_NO: string;
    BASS_ADRES: string;
    ETC_ADRES: string;
    FULL_ADRES: string;
    TLPHON_NO: string;
    FAX_NO: string;
    BSNM_REGIST_NO: string;
    REGIST_NO: string;
    ENTRPS_SN: string;
}

export const useFrmcust3030PAgentList = () => {
    const [ds_iGubun, setds_iGubun] = useState<Ids_iGubun[]>([]);
    const [ds_oAgentList, setds_oAgentList] = useState<Ids_oAgentList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iGubun([]);
            setds_oAgentList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_iGubun,
        ds_oAgentList,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};