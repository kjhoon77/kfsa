// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oPrize, Ids_oPrizeGubun } from './Frmspcledu0271PPrizeAwardIssueListData';

export const useFrmspcledu0271PPrizeAwardIssueList = () => {
    const [ds_oPrize, setds_oPrize] = useState<Ids_oPrize[]>([]);
    const [ds_oPrizeGubun, setds_oPrizeGubun] = useState<Ids_oPrizeGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_gdPrizeIssue, setIsVisible_gdPrizeIssue] = useState(true);
    const [isVisible_Button1, setIsVisible_Button1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);

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
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_gdPrizeIssue,
        setIsVisible_gdPrizeIssue,
        isVisible_Button1,
        setIsVisible_Button1,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        btnMutilSort_OnClick,
        lfn_End,
    };
};