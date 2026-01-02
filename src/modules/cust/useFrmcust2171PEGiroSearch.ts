// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oCourse, Ids_oEduSchedule, Ids_oEduGubun, Ids_oEduStudent, Ids_oEduSubject, Ids_oPEGiroSearchList } from './Frmcust2171PEGiroSearchData';

export const useFrmcust2171PEGiroSearch = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oEduSchedule, setds_oEduSchedule] = useState<Ids_oEduSchedule[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [ds_oEduSubject, setds_oEduSubject] = useState<Ids_oEduSubject[]>([]);
    const [ds_oPEGiroSearchList, setds_oPEGiroSearchList] = useState<Ids_oPEGiroSearchList[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oEduSchedule([]);
            setds_oEduGubun([]);
            setds_oEduStudent([]);
            setds_oEduSubject([]);
            setds_oPEGiroSearchList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oCourse,
        ds_oEduSchedule,
        ds_oEduGubun,
        ds_oEduStudent,
        ds_oEduSubject,
        ds_oPEGiroSearchList,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Search,
    };
};