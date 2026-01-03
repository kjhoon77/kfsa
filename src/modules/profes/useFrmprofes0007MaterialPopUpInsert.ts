// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_TecProg, Ids_TpEduGubun, Ids_CmbCours_old, Ids_CmbSubject, Ids_ioTeaching, Ids_Movie, Ids_MovieSingle, Ids_TecProgMAX, Ids_CmbCours, Ids_Search, Ids_oCourse, Ids_oAllCourse, Ids_oAllSubject, Ids_oSubject, Ids_oYear } from './Frmprofes0007MaterialPopUpInsertData';

export const useFrmprofes0007MaterialPopUpInsert = () => {
    const [ds_TecProg, setds_TecProg] = useState<Ids_TecProg[]>([]);
    const [ds_TpEduGubun, setds_TpEduGubun] = useState<Ids_TpEduGubun[]>([]);
    const [ds_CmbCours_old, setds_CmbCours_old] = useState<Ids_CmbCours_old[]>([]);
    const [ds_CmbSubject, setds_CmbSubject] = useState<Ids_CmbSubject[]>([]);
    const [ds_ioTeaching, setds_ioTeaching] = useState<Ids_ioTeaching[]>([]);
    const [ds_Movie, setds_Movie] = useState<Ids_Movie[]>([]);
    const [ds_MovieSingle, setds_MovieSingle] = useState<Ids_MovieSingle[]>([]);
    const [ds_TecProgMAX, setds_TecProgMAX] = useState<Ids_TecProgMAX[]>([]);
    const [ds_CmbCours, setds_CmbCours] = useState<Ids_CmbCours[]>([]);
    const [ds_Search, setds_Search] = useState<Ids_Search[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oAllCourse, setds_oAllCourse] = useState<Ids_oAllCourse[]>([]);
    const [ds_oAllSubject, setds_oAllSubject] = useState<Ids_oAllSubject[]>([]);
    const [ds_oSubject, setds_oSubject] = useState<Ids_oSubject[]>([]);
    const [ds_oYear, setds_oYear] = useState<Ids_oYear[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_TecProg([]);
            setds_TpEduGubun([]);
            setds_CmbCours_old([]);
            setds_CmbSubject([]);
            setds_ioTeaching([]);
            setds_Movie([]);
            setds_MovieSingle([]);
            setds_TecProgMAX([]);
            setds_CmbCours([]);
            setds_Search([]);
            setds_oCourse([]);
            setds_oAllCourse([]);
            setds_oAllSubject([]);
            setds_oSubject([]);
            setds_oYear([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAdd_OnClick = () => {
        console.log('btnAdd_OnClick clicked');
    };
    const btnButton_OnClick = () => {
        console.log('btnButton_OnClick clicked');
    };
    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };
    const btnUploadFile_OnClick = () => {
        console.log('btnUploadFile_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_DownloadFile = () => {
        console.log('lfn_DownloadFile clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_TecProg,
        ds_TpEduGubun,
        ds_CmbCours_old,
        ds_CmbSubject,
        ds_ioTeaching,
        ds_Movie,
        ds_MovieSingle,
        ds_TecProgMAX,
        ds_CmbCours,
        ds_Search,
        ds_oCourse,
        ds_oAllCourse,
        ds_oAllSubject,
        ds_oSubject,
        ds_oYear,
        btnAdd_OnClick,
        btnButton_OnClick,
        btnDel_OnClick,
        btnUploadFile_OnClick,
        lfn_Cancel,
        lfn_DownloadFile,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};