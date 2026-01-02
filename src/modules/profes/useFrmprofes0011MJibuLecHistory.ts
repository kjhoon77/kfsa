// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oClass, Ids_oProGubun, Ids_SearchJogeon, Ids_ProfesList } from './Frmprofes0011MJibuLecHistoryData';

export const useFrmprofes0011MJibuLecHistory = () => {
    const [ds_oClass, setds_oClass] = useState<Ids_oClass[]>([]);
    const [ds_oProGubun, setds_oProGubun] = useState<Ids_oProGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oClass([]);
            setds_oProGubun([]);
            setds_SearchJogeon([]);
            setds_ProfesList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel = () => {
        console.log('btnToExcel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oClass,
        ds_oProGubun,
        ds_SearchJogeon,
        ds_ProfesList,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        tabValue_TAB_Profes,
        setTabValue_TAB_Profes,
        btnToExcel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};