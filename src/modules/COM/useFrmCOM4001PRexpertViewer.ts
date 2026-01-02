// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioRexpert {
    CREATE_DATE: string;
    CREATE_GUBUN: string;
    CREATE_ID: string;
    CREATE_IP: string;
    JJIBUCD: string;
    MODIFY_DATE: string;
    MODIFY_ID: string;
    MODIFY_IP: string;
    ZBUNJI: string;
    SIKUDONG: string;
    ZHO: string;
    ZREGIONCD: string;
    ZSEQ: string;
    ZZIPCD: string;
}

export const useFrmCOM4001PRexpertViewer = () => {
    const [ds_ioRexpert, setds_ioRexpert] = useState<Ids_ioRexpert[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioRexpert([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioRexpert,
        lfn_End,
    };
};