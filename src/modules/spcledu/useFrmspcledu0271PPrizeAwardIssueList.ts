// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oPrize, Ids_oPrizeGubun } from './Frmspcledu0271PPrizeAwardIssueListData';

export const useFrmspcledu0271PPrizeAwardIssueList = () => {
    const [ds_oPrize, setds_oPrize] = useState<Ids_oPrize[]>([]);
    const [ds_oPrizeGubun, setds_oPrizeGubun] = useState<Ids_oPrizeGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPrize([]);
            setds_oPrizeGubun([]);
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
        ds_oPrize,
        ds_oPrizeGubun,
        btnMutilSort_OnClick,
        lfn_End,
    };
};