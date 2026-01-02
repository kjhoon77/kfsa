// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioUserAuthList {
    MMENUID: string;
    MMENUNM: string;
    USE_YN: string;
    UAREADWRITE: string;
    UAREAD: string;
    MORDERSEQ: string;
    MENULEVEL1: string;
    MENULEVEL2: string;
    MENULEVEL3: string;
}

export const useFrmsys0027PUserAuthList = () => {
    const [ds_ioUserAuthList, setds_ioUserAuthList] = useState<Ids_ioUserAuthList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioUserAuthList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioUserAuthList,
        lfn_End,
        lfn_Excel,
        lfn_Print,
        lfn_PrintScreen,
    };
};