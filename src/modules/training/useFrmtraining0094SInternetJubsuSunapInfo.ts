// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPosResult {
}

export const useFrmtraining0094SInternetJubsuSunapInfo = () => {
    const [ds_oPosResult, setds_oPosResult] = useState<Ids_oPosResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPosResult([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnPrintReRct_OnClick = () => {
        console.log('btnPrintReRct_OnClick clicked');
    };
    const btnShowVirtualAccount_OnClick = () => {
        console.log('btnShowVirtualAccount_OnClick clicked');
    };

    return {
        isLoading,
        ds_oPosResult,
        btnPrintReRct_OnClick,
        btnShowVirtualAccount_OnClick,
    };
};