// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oPersonkeyInfoList {
    BILD_SN: string;
    OBJ_NM: string;
    OBJ_SE_CODE_NM: string;
    APNT_RLSOFC_GUBUN: string;
    ARSON_MANAGE_PKTBUK_NO: string;
    CRQFC_CODENM: string;
    QUALFUSER_ADRES: string;
    PERSONKEY: string;
}

export const useFrmcust3030PPersonkeyInfoList = () => {
    const [ds_iGubun, setds_iGubun] = useState<Ids_iGubun[]>([]);
    const [ds_oPersonkeyInfoList, setds_oPersonkeyInfoList] = useState<Ids_oPersonkeyInfoList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iGubun([]);
            setds_oPersonkeyInfoList([]);
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
        ds_oPersonkeyInfoList,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};