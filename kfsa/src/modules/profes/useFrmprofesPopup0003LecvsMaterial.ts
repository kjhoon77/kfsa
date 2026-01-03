// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ProfesList, Ids_SearchJogeon, Ids_oEduGubun } from './FrmprofesPopup0003LecvsMaterialData';

export const useFrmprofesPopup0003LecvsMaterial = () => {
    const [ds_ProfesList, setds_ProfesList] = useState<Ids_ProfesList[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_lbEduDate, setIsVisible_lbEduDate] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbDateWave1, setIsVisible_lbDateWave1] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_gdList, setIsVisible_gdList] = useState(true);
    const [isVisible_txtName, setIsVisible_txtName] = useState(true);
    const [isVisible_calDateFr, setIsVisible_calDateFr] = useState(true);
    const [isVisible_calDateTo, setIsVisible_calDateTo] = useState(true);
    const [isVisible_lbLabel, setIsVisible_lbLabel] = useState(true);

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
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ProfesList,
        ds_SearchJogeon,
        ds_oEduGubun,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbEduDate,
        setIsVisible_lbEduDate,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_gdList,
        setIsVisible_gdList,
        isVisible_txtName,
        setIsVisible_txtName,
        isVisible_calDateFr,
        setIsVisible_calDateFr,
        isVisible_calDateTo,
        setIsVisible_calDateTo,
        isVisible_lbLabel,
        setIsVisible_lbLabel,
        btnExcell_OnClick,
        btnPrint_OnClick,
        lfn_End,
    };
};