// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJikwi, Ids_oGubun, Ids_ProfesList, Ids_SearchJogeon, Ids_oJibu, Ids_ProfesList_Chart } from './Frmprofes0013MPersonLecHData';

export const useFrmprofes0013MPersonLecH = () => {
    const [ds_oJikwi, setds_oJikwi] = useState<Ids_oJikwi[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesList_Chart, setds_ProfesList_Chart] = useState<Ids_ProfesList_Chart[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [tabValue_TAB_Profes, setTabValue_TAB_Profes] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJikwi([]);
            setds_oGubun([]);
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oJibu([]);
            setds_ProfesList_Chart([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
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
        ds_oJikwi,
        ds_oGubun,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oJibu,
        ds_ProfesList_Chart,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        tabValue_TAB_Profes,
        setTabValue_TAB_Profes,
        btnToExcel_OnClick,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
        lfn_Search,
    };
};