// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioPosPrintM, Ids_ioPosCash, Ids_oCashGubun, Ids_oCallKeyIn } from './Frmcust2015PPosChangeCashData';

export const useFrmcust2015PPosChangeCash = () => {
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosCash, setds_ioPosCash] = useState<Ids_ioPosCash[]>([]);
    const [ds_oCashGubun, setds_oCashGubun] = useState<Ids_oCashGubun[]>([]);
    const [ds_oCallKeyIn, setds_oCallKeyIn] = useState<Ids_oCallKeyIn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divPos, setIsVisible_divPos] = useState(false);
    const [isVisible_divCash, setIsVisible_divCash] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioPosPrintM([]);
            setds_ioPosCash([]);
            setds_oCashGubun([]);
            setds_oCallKeyIn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCash_OnClick = () => {
        console.log('btnCash_OnClick clicked');
    };
    const btnKeyinCompanyNo_OnClick = () => {
        console.log('btnKeyinCompanyNo_OnClick clicked');
    };
    const btnKeyinHP_OnClick = () => {
        console.log('btnKeyinHP_OnClick clicked');
    };
    const divSunap_divCash_btnInit_OnClick = () => {
        console.log('divSunap_divCash_btnInit_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ioPosPrintM,
        ds_ioPosCash,
        ds_oCashGubun,
        ds_oCallKeyIn,
        isVisible_divPos,
        setIsVisible_divPos,
        isVisible_divCash,
        setIsVisible_divCash,
        btnCash_OnClick,
        btnKeyinCompanyNo_OnClick,
        btnKeyinHP_OnClick,
        divSunap_divCash_btnInit_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};