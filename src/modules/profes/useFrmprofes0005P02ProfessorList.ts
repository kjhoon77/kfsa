// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oProfessorList, Ids_oGubun, Ids_oJibu, Ids_oProfessorList_0, Ids_oAllJibu } from './Frmprofes0005P02ProfessorListData';

export const useFrmprofes0005P02ProfessorList = () => {
    const [ds_oProfessorList, setds_oProfessorList] = useState<Ids_oProfessorList[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oProfessorList_0, setds_oProfessorList_0] = useState<Ids_oProfessorList_0[]>([]);
    const [ds_oAllJibu, setds_oAllJibu] = useState<Ids_oAllJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProfessorList([]);
            setds_oGubun([]);
            setds_oJibu([]);
            setds_oProfessorList_0([]);
            setds_oAllJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancel_OnClick = () => {
        console.log('btnCancel_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const chkOtherJibu_OnClick = () => {
        console.log('chkOtherJibu_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oProfessorList,
        ds_oGubun,
        ds_oJibu,
        ds_oProfessorList_0,
        ds_oAllJibu,
        btnCancel_OnClick,
        btnSelect_OnClick,
        chkOtherJibu_OnClick,
        lfn_End,
        lfn_Search,
    };
};