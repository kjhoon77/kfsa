// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPosVatH {
    PVPMYEAR: string;
    PVPMMGNO: string;
    PVVMYEAR: string;
    PVVMJIBU: string;
    PVVMVATNO: string;
    PVVMBILLTYPE: string;
    PVREGDATE: string;
    PVREGSABUN: string;
}

export const useFrmcust2016PPosVat = () => {
    const [ds_oPosVatH, setds_oPosVatH] = useState<Ids_oPosVatH[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPosVatH([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oPosVatH,
        lfn_End,
        lfn_PrintScreen,
    };
};