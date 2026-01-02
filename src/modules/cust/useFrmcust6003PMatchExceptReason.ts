// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioReasonCode } from './Frmcust6003PMatchExceptReasonData';

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