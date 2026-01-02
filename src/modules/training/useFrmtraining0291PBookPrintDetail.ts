// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_olist, Ids_olistDetail } from './Frmtraining0291PBookPrintDetailData';

export const useFrmtraining0291PBookPrintDetail = () => {
    const [ds_olist, setds_olist] = useState<Ids_olist[]>([]);
    const [ds_olistDetail, setds_olistDetail] = useState<Ids_olistDetail[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_olist([]);
            setds_olistDetail([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_olist,
        ds_olistDetail,
        lfn_End,
        lfn_Search,
    };
};