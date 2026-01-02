// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oExamRoom {
    EOEXAMORDER: string;
    EOEXAMORDERGUBUN: string;
    EOMGJIBUCD: string;
    EOMGNO: string;
    EOYEAR: string;
    EPMGNO: string;
    EREXAMROOM: string;
    ERNUMTYPE: string;
    EXAMNM: string;
    JJIBUNM: string;
    TCCOURSECD: string;
    TCCOURSENM: string;
    USE_YN: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export const useFrmspcledu0591MExamRoomListPopup = () => {
    const [ds_oExamRoom, setds_oExamRoom] = useState<Ids_oExamRoom[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamRoom([]);
            setds_oJibu([]);
            setds_oCourse([]);
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
        ds_oExamRoom,
        ds_oJibu,
        ds_oCourse,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};