// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioWorkList } from './Frmsys0094MHistoryWorkGubunData';

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