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

export const useFrmsys0094MHistoryWorkGubun = () => {
    const [ds_ioWorkList, setds_ioWorkList] = useState<Ids_ioWorkList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioWorkList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioWorkList,
        lfn_End,
    };
};