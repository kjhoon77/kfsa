// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBank {
    CD: string;
    DATA: string;
}

export interface Ids_oRecieptYn {
    CD: string;
    DATA: string;
}

export const useFrmCOM3105SSettlementPOSSunap = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oRecieptYn, setds_oRecieptYn] = useState<Ids_oRecieptYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBank([]);
            setds_oRecieptYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oBank,
        ds_oRecieptYn,
    };
};