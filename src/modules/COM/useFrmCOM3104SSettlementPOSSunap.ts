// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBank, Ids_oRecieptYn } from './FrmCOM3104SSettlementPOSSunapData';

export const useFrmCOM3104SSettlementPOSSunap = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oRecieptYn, setds_oRecieptYn] = useState<Ids_oRecieptYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divVirtual, setIsVisible_divVirtual] = useState(false);

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
        isVisible_divVirtual,
        setIsVisible_divVirtual,
    };
};