// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oExamSeatNoPrint {
    BIRTHDAY: string;
    IMAGE: string;
    NM: string;
    ORDERJUBSUNO: string;
    SEATNO: string;
}

export interface Ids_oPoto {
    CD: string;
    DATA: string;
}

export const useFrmtraining0419MExamSeatNoPrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oExamSeatNoPrint, setds_oExamSeatNoPrint] = useState<Ids_oExamSeatNoPrint[]>([]);
    const [ds_oPoto, setds_oPoto] = useState<Ids_oPoto[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oExamSeatNoPrint([]);
            setds_oPoto([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oJibu,
        ds_oSort,
        ds_oExamSeatNoPrint,
        ds_oPoto,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};