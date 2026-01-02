// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioJibu, Ids_SearchJogeon, Ids_SunapList, Ids_ioChoiceYn, Ids_oSetlmGubun, Ids_oAdditionInfo } from './Frmcust2110MBusinessSunapReportData';

export const useFrmcust2110MBusinessSunapReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_SunapList, setds_SunapList] = useState<Ids_SunapList[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_oSetlmGubun, setds_oSetlmGubun] = useState<Ids_oSetlmGubun[]>([]);
    const [ds_oAdditionInfo, setds_oAdditionInfo] = useState<Ids_oAdditionInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_SearchJogeon([]);
            setds_SunapList([]);
            setds_ioChoiceYn([]);
            setds_oSetlmGubun([]);
            setds_oAdditionInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_CancelL = () => {
        console.log('lfn_CancelL clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioJibu,
        ds_SearchJogeon,
        ds_SunapList,
        ds_ioChoiceYn,
        ds_oSetlmGubun,
        ds_oAdditionInfo,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnExcell_OnClick,
        lfn_CancelL,
        lfn_End,
        lfn_Print,
    };
};