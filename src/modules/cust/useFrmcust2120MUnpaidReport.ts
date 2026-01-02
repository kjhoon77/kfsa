// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioJibu, Ids_ioYear, Ids_MinapGubun, Ids_MinapList, Ids_MinapListExcel, Ids_SearchJogeon } from './Frmcust2120MUnpaidReportData';

export const useFrmcust2120MUnpaidReport = () => {
    const [ds_ioJibu, setds_ioJibu] = useState<Ids_ioJibu[]>([]);
    const [ds_ioYear, setds_ioYear] = useState<Ids_ioYear[]>([]);
    const [ds_MinapGubun, setds_MinapGubun] = useState<Ids_MinapGubun[]>([]);
    const [ds_MinapList, setds_MinapList] = useState<Ids_MinapList[]>([]);
    const [ds_MinapListExcel, setds_MinapListExcel] = useState<Ids_MinapListExcel[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioJibu([]);
            setds_ioYear([]);
            setds_MinapGubun([]);
            setds_MinapList([]);
            setds_MinapListExcel([]);
            setds_SearchJogeon([]);
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
        ds_ioYear,
        ds_MinapGubun,
        ds_MinapList,
        ds_MinapListExcel,
        ds_SearchJogeon,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnExcell_OnClick,
        lfn_CancelL,
        lfn_End,
        lfn_Print,
    };
};