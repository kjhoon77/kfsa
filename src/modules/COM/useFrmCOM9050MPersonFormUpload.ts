// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioBizformcode {
    FCCD: string;
    FCBIZ: string;
    FCSEQ: string;
    FCFULLNM: string;
    FCLINK: string;
}

export interface Ids_iBizgubun {
    CD: string;
    DATA: string;
}

export const useFrmCOM9050MPersonFormUpload = () => {
    const [ds_ioBizformcode, setds_ioBizformcode] = useState<Ids_ioBizformcode[]>([]);
    const [ds_iBizgubun, setds_iBizgubun] = useState<Ids_iBizgubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioBizformcode([]);
            setds_iBizgubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDataHistory_OnClick = () => {
        console.log('btnDataHistory_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioBizformcode,
        ds_iBizgubun,
        btnDataHistory_OnClick,
        lfn_End,
        lfn_Search,
    };
};