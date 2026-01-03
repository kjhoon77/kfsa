// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oFireManagerInfo } from './Frmcust6400P04ManagerListData';

export const useFrmcust6400P04ManagerList = () => {
    const [ds_oFireManagerInfo, setds_oFireManagerInfo] = useState<Ids_oFireManagerInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_gdManager, setRawVisible_gdManager] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_gdManager = rawVisible_gdManager;
    const setIsVisible_gdManager = setRawVisible_gdManager;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oFireManagerInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oFireManagerInfo,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_gdManager,
        setIsVisible_gdManager,
        lfn_End,
    };
};