// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOverBizList, Ids_oBizGubun } from './Frmcust0014POverStatusData';

export const useFrmcust0014POverStatus = () => {
    const [ds_oOverBizList, setds_oOverBizList] = useState<Ids_oOverBizList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_gdOverBiz, setIsVisible_gdOverBiz] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_Grid0, setIsVisible_Grid0] = useState(false);

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