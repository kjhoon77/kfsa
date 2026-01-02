// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oSort {
    CD: string;
    DATA: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingAttendence {
    EDUCNT: string;
    EPNM: string;
    INCNT: string;
    INOUTCNT: string;
    JUPSUCNT: string;
    KULGANGCNT: string;
    OUTCNT: string;
    PASSCNT: string;
    REPAYCNT: string;
    TCCOURSENM: string;
    TOENDDATE: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
}

export interface Ids_oTrainingAttendencePoto {
    ACTION: string;
    GTTEAMNM: string;
    ORGJUPSU: string;
    SEATNO: string;
    TCCOURSENM: string;
    TJPERSONNM: string;
    TOENDDATE: string;
    TOSTARTDATE: string;
    TOTRAININGORDER: string;
}

export interface Ids_oTrainingAttendenceJechul {
    GTTEAMNM: string;
    JUBSUNO: string;
    TCCOURSENM: string;
    TJPERSONNM: string;
    TOENDDATE: string;
}

export const useFrmspcledu0120MTrainingAttendanceRegisterPrint = () => {
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oTrainingAttendence, setds_oTrainingAttendence] = useState<Ids_oTrainingAttendence[]>([]);
    const [ds_oTrainingAttendencePoto, setds_oTrainingAttendencePoto] = useState<Ids_oTrainingAttendencePoto[]>([]);
    const [ds_oTrainingAttendenceJechul, setds_oTrainingAttendenceJechul] = useState<Ids_oTrainingAttendenceJechul[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSort([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oTrainingAttendence([]);
            setds_oTrainingAttendencePoto([]);
            setds_oTrainingAttendenceJechul([]);
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
    const lfn_SearchJechul = () => {
        console.log('lfn_SearchJechul clicked');
    };

    return {
        isLoading,
        ds_oSort,
        ds_oCourse,
        ds_oJibu,
        ds_oTrainingAttendence,
        ds_oTrainingAttendencePoto,
        ds_oTrainingAttendenceJechul,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
        lfn_SearchJechul,
    };
};