// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oSupporterList } from './Frmcust0010PSupporterListData';

export const useFrmcust0010PSupporterList = () => {
    const [ds_oSupporterList, setds_oSupporterList] = useState<Ids_oSupporterList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSupporterList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oSupporterList,
        btnSelect_OnClick,
        lfn_End,
    };
};