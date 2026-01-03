// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ProfesList, Ids_SearchJogeon, Ids_oEduGubun } from './FrmprofesPopup0002LecCurriHData';

export const useFrmprofesPopup0002LecCurriH = () => {
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oEduGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const btnPrint_OnClick = () => {
        console.log('btnPrint_OnClick clicked');
    };
    const btnSearch_OnClick = () => {
        console.log('btnSearch_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oEduGubun,
        btnExcell_OnClick,
        btnPrint_OnClick,
        btnSearch_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};