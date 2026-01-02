// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ProfesList, Ids_SearchJogeon, Ids_oJibu, Ids_ProfesList_Chart } from './Frmprofes0025MInviteProfLectureListData';

export const useFrmprofes0025MInviteProfLectureList = () => {
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ProfesList_Chart, setds_ProfesList_Chart] = useState<Ids_ProfesList_Chart[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ProfesList([]);
            setds_SearchJogeon([]);
            setds_oJibu([]);
            setds_ProfesList_Chart([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel = () => {
        console.log('btnToExcel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oJibu,
        ds_ProfesList_Chart,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnToExcel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};