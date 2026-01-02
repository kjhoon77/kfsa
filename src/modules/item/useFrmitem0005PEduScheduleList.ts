// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oEduSchedule {
    CGROUPNM: string;
    EDUTIME: string;
    EPNM: string;
    EPSAVENM: string;
    ESACCESSCNT: string;
    ESCOUSECD: string;
    ESDATE: string;
    ESENDTIME: string;
    ESEPMGNO: string;
    ESGTMGNO: string;
    ESGUBUN: string;
    ESINETCLOSEDATE: string;
    ESINETJUBSUCNT: string;
    ESMGNO: string;
    ESNOTICE: string;
    ESPREPARED: string;
    ESSEATCNT: string;
    ESSTARTTIME: string;
    ESSTUDENT: string;
    ESSUBJECTGUBUN: string;
    ESYEAR: string;
    ESEDUORDER: string;
}

export interface Ids_oEduGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEduStudent {
    CD: string;
    DATA: string;
}

export interface Ids_oEduSubject {
    CD: string;
    DATA: string;
}

export const useFrmitem0005PEduScheduleList = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oEduSchedule, setds_oEduSchedule] = useState<Ids_oEduSchedule[]>([]);
    const [ds_oEduGubun, setds_oEduGubun] = useState<Ids_oEduGubun[]>([]);
    const [ds_oEduStudent, setds_oEduStudent] = useState<Ids_oEduStudent[]>([]);
    const [ds_oEduSubject, setds_oEduSubject] = useState<Ids_oEduSubject[]>([]);
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
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
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
        ds_oJibu,
        ds_oCourse,
        ds_oEduSchedule,
        ds_oEduGubun,
        ds_oEduStudent,
        ds_oEduSubject,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};