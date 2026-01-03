// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOverBizList, Ids_oBizGubun } from './Frmcust0014POverHistoryData';

export const useFrmcust0014POverHistory = () => {
    const [ds_oOverBizList, setds_oOverBizList] = useState<Ids_oOverBizList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_gdOverBiz, setRawVisible_gdOverBiz] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Grid0, setRawVisible_Grid0] = useState(false);
    const isVisible_gdOverBiz = rawVisible_gdOverBiz;
    const setIsVisible_gdOverBiz = setRawVisible_gdOverBiz;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Grid0 = rawVisible_Grid0;
    const setIsVisible_Grid0 = setRawVisible_Grid0;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oOverBizList([]);
            setds_oBizGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oOverBizList,
        ds_oBizGubun,
        isVisible_gdOverBiz,
        setIsVisible_gdOverBiz,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Grid0,
        setIsVisible_Grid0,
        lfn_End,
    };
};