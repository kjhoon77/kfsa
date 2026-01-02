// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamJubsu {
    EJPERSONNM: string;
    EJBIRTHDAY: string;
    EJADDR1: string;
    EJADDR2: string;
    EOHJUBSUNO: string;
    EOHEXAMSEATNO: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export const useFrmtraining0401PExamJubsuList = () => {
    const [ds_oExamJubsu, setds_oExamJubsu] = useState<Ids_oExamJubsu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamJubsu([]);
            setds_oCourse([]);
            setds_oJibu([]);
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

    return {
        isLoading,
        ds_oExamJubsu,
        ds_oCourse,
        ds_oJibu,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
    };
};