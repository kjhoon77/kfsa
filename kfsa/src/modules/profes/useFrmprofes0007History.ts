// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oClass, Ids_oProGubun, Ids_SearchJogeon, Ids_ProfesList, Ids_Status } from './Frmprofes0007HistoryData';

export const useFrmprofes0007History = () => {
    const [ds_oClass, setds_oClass] = useState<Ids_oClass[]>([]);
    const [ds_oProGubun, setds_oProGubun] = useState<Ids_oProGubun[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_Status, setds_Status] = useState<Ids_Status[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(true);
    const [isVisible_lbProcMsg1, setIsVisible_lbProcMsg1] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oClass([]);
            setds_oProGubun([]);
            setds_SearchJogeon([]);
            setds_ProfesList([]);
            setds_Status([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExcell_OnClick = () => {
        console.log('btnExcell_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oClass,
        ds_oProGubun,
        ds_SearchJogeon,
        ds_ProfesList,
        ds_Status,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_lbProcMsg1,
        setIsVisible_lbProcMsg1,
        btnExcell_OnClick,
        lfn_End,
        lfn_PrintScreen,
    };
};