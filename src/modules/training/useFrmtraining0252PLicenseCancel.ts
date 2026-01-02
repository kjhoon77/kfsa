// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_iLicense {
    LLCSNO: string;
    LCANCELREASON: string;
    LHSEQ: string;
}

export const useFrmtraining0252PLicenseCancel = () => {
    const [ds_iLicense, setds_iLicense] = useState<Ids_iLicense[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_iLicense([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_iLicense,
        lfn_End,
        lfn_Save,
    };
};