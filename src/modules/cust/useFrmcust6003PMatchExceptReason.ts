// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioReasonCode {
    CD: string;
    DATA: string;
}

export const useFrmcust6003PMatchExceptReason = () => {
    const [ds_ioReasonCode, setds_ioReasonCode] = useState<Ids_ioReasonCode[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioReasonCode([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnConfirm_OnClick = () => {
        console.log('btnConfirm_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioReasonCode,
        btnConfirm_OnClick,
    };
};