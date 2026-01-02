// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oFireManagerList, Ids_oLicenseList, Ids_iGubun, Ids_oEdupassList } from './Frmcust3030PAsstnLicenseListData';

export const useFrmcust3030PAsstnLicenseList = () => {
    const [ds_oFireManagerList, setds_oFireManagerList] = useState<Ids_oFireManagerList[]>([]);
    const [ds_oLicenseList, setds_oLicenseList] = useState<Ids_oLicenseList[]>([]);
    const [ds_iGubun, setds_iGubun] = useState<Ids_iGubun[]>([]);
    const [ds_oEdupassList, setds_oEdupassList] = useState<Ids_oEdupassList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oFireManagerList([]);
            setds_oLicenseList([]);
            setds_iGubun([]);
            setds_oEdupassList([]);
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
        ds_oLicenseList,
        ds_iGubun,
        ds_oEdupassList,
        btnSelect_OnClick,
        lfn_End,
    };
};