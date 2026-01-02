// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oEduNoticeList {
    CTOTALFEE1: string;
    ECUSTADDR1: string;
    ECUSTADDR2: string;
    EPLACE: string;
    EPROCDATE: string;
    ESCHEULE: string;
}

export const useFrmcust0010PEduNoticeList = () => {
    const [ds_oEduNoticeList, setds_oEduNoticeList] = useState<Ids_oEduNoticeList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oEduNoticeList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oEduNoticeList,
        lfn_End,
    };
};