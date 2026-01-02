// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioWorkList {
    SHGUBUN: string;
    SHMGNO: string;
    SHPROCDATE: string;
    SHPROCIP: string;
    SHPROCSABUN: string;
    SHWHERE: string;
    SHWORKGUBUN: string;
    SHWORKGUBUNNM: string;
}

export interface Ids_ioMFFireObjD {
}

export interface Ids_ioFireManagerInfo {
}

export const useFrmsys0096PDataMatchDetailSearchHistoryInfo = () => {
    const [ds_ioWorkList, setds_ioWorkList] = useState<Ids_ioWorkList[]>([]);
    const [ds_ioMFFireObjD, setds_ioMFFireObjD] = useState<Ids_ioMFFireObjD[]>([]);
    const [ds_ioFireManagerInfo, setds_ioFireManagerInfo] = useState<Ids_ioFireManagerInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        lfn_End,
    };
};