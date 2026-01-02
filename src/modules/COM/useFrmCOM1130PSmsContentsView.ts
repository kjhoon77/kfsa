// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oSmsStat {
    MRECVRESULT: string;
    MSENDDATE: string;
    PNM: string;
    MMSG: string;
}

export const useFrmCOM1130PSmsContentsView = () => {
    const [ds_oSmsStat, setds_oSmsStat] = useState<Ids_oSmsStat[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSmsStat([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oSmsStat,
        lfn_End,
    };
};