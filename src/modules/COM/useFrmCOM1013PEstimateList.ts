// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioEstimateList } from './FrmCOM1013PEstimateListData';

export const useFrmCOM1013PEstimateList = () => {
    const [ds_ioEstimateList, setds_ioEstimateList] = useState<Ids_ioEstimateList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEstimateList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioEstimateList,
        lfn_End,
    };
};