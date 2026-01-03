// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioWorkList, Ids_ioMFFireObjD, Ids_ioFireManagerInfo } from './Frmsys0096PDataMatchDetailSearchHistoryInfoData';

export const useFrmsys0096PDataMatchDetailSearchHistoryInfo = () => {
    const [ds_ioWorkList, setds_ioWorkList] = useState<Ids_ioWorkList[]>([]);
    const [ds_ioMFFireObjD, setds_ioMFFireObjD] = useState<Ids_ioMFFireObjD[]>([]);
    const [ds_ioFireManagerInfo, setds_ioFireManagerInfo] = useState<Ids_ioFireManagerInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_TabMain, setTabValue_TabMain] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioWorkList([]);
            setds_ioMFFireObjD([]);
            setds_ioFireManagerInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioWorkList,
        ds_ioMFFireObjD,
        ds_ioFireManagerInfo,
        tabValue_TabMain,
        setTabValue_TabMain,
        lfn_End,
    };
};