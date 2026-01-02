// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oModifyHistory } from './FrmCOM7000PModifyHistoryListData';

export const useFrmCOM7000PModifyHistoryList = () => {
    const [ds_oModifyHistory, setds_oModifyHistory] = useState<Ids_oModifyHistory[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oModifyHistory([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oModifyHistory,
        btnMutilSort_OnClick,
        lfn_End,
    };
};