// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oSubjectList, Ids_Gubun, Ids_Cours, Ids_SearchEduSubject } from './Frmprofes0002P01SubjectListPopUpData';

export const useFrmprofes0002P01SubjectListPopUp = () => {
    const [ds_oSubjectList, setds_oSubjectList] = useState<Ids_oSubjectList[]>([]);
    const [ds_Gubun, setds_Gubun] = useState<Ids_Gubun[]>([]);
    const [ds_Cours, setds_Cours] = useState<Ids_Cours[]>([]);
    const [ds_SearchEduSubject, setds_SearchEduSubject] = useState<Ids_SearchEduSubject[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSubjectList([]);
            setds_Gubun([]);
            setds_Cours([]);
            setds_SearchEduSubject([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oSubjectList,
        ds_Gubun,
        ds_Cours,
        ds_SearchEduSubject,
        btnCancel_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};