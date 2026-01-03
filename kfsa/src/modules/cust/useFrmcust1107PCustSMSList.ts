// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioSmsPattern, Ids_oWorkGubun } from './Frmcust1107PCustSMSListData';

export const useFrmcust1107PCustSMSList = () => {
    const [ds_ioSmsPattern, setds_ioSmsPattern] = useState<Ids_ioSmsPattern[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_gdSmsStat, setIsVisible_gdSmsStat] = useState(true);
    const [isVisible_lbWorkGubun, setIsVisible_lbWorkGubun] = useState(true);
    const [isVisible_radWorkGubun, setIsVisible_radWorkGubun] = useState(true);

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
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_gdSmsStat,
        setIsVisible_gdSmsStat,
        isVisible_lbWorkGubun,
        setIsVisible_lbWorkGubun,
        isVisible_radWorkGubun,
        setIsVisible_radWorkGubun,
        lfn_End,
    };
};