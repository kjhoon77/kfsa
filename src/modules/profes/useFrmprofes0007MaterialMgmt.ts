// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_Year, Ids_Status, Ids_TpEduGubun, Ids_TecProg, Ids_Search, Ids_oCourse, Ids_oAllCourse, Ids_oAllSubject, Ids_oSubject } from './Frmprofes0007MaterialMgmtData';

export const useFrmprofes0007MaterialMgmt = () => {
    const [ds_Year, setds_Year] = useState<Ids_Year[]>([]);
    const [ds_Status, setds_Status] = useState<Ids_Status[]>([]);
    const [ds_TpEduGubun, setds_TpEduGubun] = useState<Ids_TpEduGubun[]>([]);
    const [ds_TecProg, setds_TecProg] = useState<Ids_TecProg[]>([]);
    const [ds_Search, setds_Search] = useState<Ids_Search[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oAllCourse, setds_oAllCourse] = useState<Ids_oAllCourse[]>([]);
    const [ds_oAllSubject, setds_oAllSubject] = useState<Ids_oAllSubject[]>([]);
    const [ds_oSubject, setds_oSubject] = useState<Ids_oSubject[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_Year([]);
            setds_Status([]);
            setds_TpEduGubun([]);
            setds_TecProg([]);
            setds_Search([]);
            setds_oCourse([]);
            setds_oAllCourse([]);
            setds_oAllSubject([]);
            setds_oSubject([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMake_OnClick = () => {
        console.log('btnMake_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_Delete = () => {
        console.log('lfn_Delete clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Input = () => {
        console.log('lfn_Input clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_Year,
        ds_Status,
        ds_TpEduGubun,
        ds_TecProg,
        ds_Search,
        ds_oCourse,
        ds_oAllCourse,
        ds_oAllSubject,
        ds_oSubject,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMake_OnClick,
        btnMutilSort_OnClick,
        lfn_Cancel,
        lfn_Delete,
        lfn_End,
        lfn_Excel,
        lfn_Input,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};