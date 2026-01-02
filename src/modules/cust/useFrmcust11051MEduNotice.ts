// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioHistorySearch {
    CD: string;
    DATA: string;
}

export interface Ids_ioGubun {
    CD: string;
    DATA: string;
}

export const useFrmcust11051MEduNotice = () => {
    const [ds_ioHistorySearch, setds_ioHistorySearch] = useState<Ids_ioHistorySearch[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioHistorySearch([]);
            setds_ioGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_DetailSerch_Ready = () => {
        console.log('lfn_DetailSerch_Ready clicked');
    };
    const lfn_EduNoticeHistorySearch = () => {
        console.log('lfn_EduNoticeHistorySearch clicked');
    };
    const lfn_EduNoticeHistorySearch_A = () => {
        console.log('lfn_EduNoticeHistorySearch_A clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioHistorySearch,
        ds_ioGubun,
        btnMutilSort_OnClick,
        lfn_DetailSerch_Ready,
        lfn_EduNoticeHistorySearch,
        lfn_EduNoticeHistorySearch_A,
        lfn_End,
        lfn_PrintScreen,
    };
};