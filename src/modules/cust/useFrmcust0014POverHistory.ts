// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOverBizList, Ids_oBizGubun } from './Frmcust0014POverHistoryData';

export const useFrmcust0014POverHistory = () => {
    const [ds_oOverBizList, setds_oOverBizList] = useState<Ids_oOverBizList[]>([]);
    const [ds_oBizGubun, setds_oBizGubun] = useState<Ids_oBizGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        lfn_End,
    };
};