// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oAgentList {
    AGADDR: string;
    AGADDR1: string;
    AGADDR2: string;
    AGCONO: string;
    AGFAX: string;
    AGMGNO: string;
    AGMODDATE: string;
    AGMODSABUN: string;
    AGNM: string;
    AGOWNER: string;
    AGREGDATE: string;
    AGREGSABUN: string;
    AGREMARK: string;
    AGTEL: string;
    AGZIPCD: string;
}

export const useFrmcust0010PAgentInfoList = () => {
    const [ds_oAgentList, setds_oAgentList] = useState<Ids_oAgentList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oAgentList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oAgentList,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};