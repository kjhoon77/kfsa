// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oWorkGubun, Ids_oSendGubun, Ids_ioSmsPattern } from './Frmtraining0680PSmsPatternListData';

export const useFrmtraining0680PSmsPatternList = () => {
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oSendGubun, setds_oSendGubun] = useState<Ids_oSendGubun[]>([]);
    const [ds_ioSmsPattern, setds_ioSmsPattern] = useState<Ids_ioSmsPattern[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oWorkGubun([]);
            setds_oSendGubun([]);
            setds_ioSmsPattern([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oWorkGubun,
        ds_oSendGubun,
        ds_ioSmsPattern,
        btnMutilSort_OnClick,
        lfn_End,
    };
};