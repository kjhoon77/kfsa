// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oFireManagerList {
    BILD_SN: string;
    OBJ_NM: string;
    CRQFC_CODE: string;
    CRQFC_NM: string;
    APNT_DE: string;
    BUILDADRES: string;
}

export interface Ids_iGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEdupassList {
    SEL: string;
    GUBUN: string;
    TCCOURSENM: string;
    GTTEAMNM: string;
    TOENDDATE: string;
}

export interface Ids_oLicenseList {
    SEL: string;
    LTCCOURSENM: string;
    LLCSNO: string;
    LISSUEDATE: string;
    LORGGUBUN: string;
    LORGGUBUNNMM: string;
}

export const useFrmcust3030PLicenseList = () => {
    const [ds_oFireManagerList, setds_oFireManagerList] = useState<Ids_oFireManagerList[]>([]);
    const [ds_iGubun, setds_iGubun] = useState<Ids_iGubun[]>([]);
    const [ds_oEdupassList, setds_oEdupassList] = useState<Ids_oEdupassList[]>([]);
    const [ds_oLicenseList, setds_oLicenseList] = useState<Ids_oLicenseList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oFireManagerList([]);
            setds_iGubun([]);
            setds_oEdupassList([]);
            setds_oLicenseList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oFireManagerList,
        ds_iGubun,
        ds_oEdupassList,
        ds_oLicenseList,
        btnSelect_OnClick,
        lfn_End,
    };
};