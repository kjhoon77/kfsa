// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioWorkList } from './Frmsys0094MHistoryWorkGubunData';

export const useFrmsys0094MHistoryWorkGubun = () => {
    const [ds_ioWorkList, setds_ioWorkList] = useState<Ids_ioWorkList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_gdSearchHistory, setRawVisible_gdSearchHistory] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const isVisible_gdSearchHistory = rawVisible_gdSearchHistory;
    const setIsVisible_gdSearchHistory = setRawVisible_gdSearchHistory;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;

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
        isVisible_gdSearchHistory,
        setIsVisible_gdSearchHistory,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        lfn_End,
    };
};