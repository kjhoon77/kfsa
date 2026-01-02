// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSmsPattern, Ids_oWorkGubun } from './Frmcust1107PCustSMSListData';

export const useFrmcust1107PCustSMSList = () => {
    const [ds_ioSmsPattern, setds_ioSmsPattern] = useState<Ids_ioSmsPattern[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSmsPattern([]);
            setds_oWorkGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioSmsPattern,
        ds_oWorkGubun,
        lfn_End,
    };
};