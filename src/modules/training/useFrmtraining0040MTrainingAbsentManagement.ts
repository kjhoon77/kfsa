// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingAbsent {
    TJADDR1: string;
    TJADDR2: string;
    TJMGNO: string;
    TJPERSONNM: string;
    PERSONKEY: string;
    BIRTHDAY: string;
    TOENDDATE: string;
    TOHJUBSUNO: string;
    TOSTARTDATE: string;
    BIRTHDAY: string;
    ADAY1: string;
    ADAY2: string;
    ADAY3: string;
    ADAY4: string;
    ADAY5: string;
    TOMGJIBUCD: string;
    TOYEAR: string;
    TOTCCOURSECD: string;
    TOTRAININGORDER: string;
    SEL: string;
    TOMUNJEGUBUN: string;
    ADAY6: string;
    ADAY7: string;
    ADAY8: string;
    ADAY9: string;
    ADAY10: string;
    ADAY11: string;
    ADAY12: string;
    ADAY13: string;
    ADAY14: string;
    ADAY15: string;
    ADAY16: string;
    ADAY17: string;
    ADAY18: string;
    ADAY19: string;
    ADAY20: string;
}

export interface Ids_oCourse {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentDateGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oTrainingJubsuCnt {
    TJMGNO: string;
    TOTCCOURSECD: string;
    TOMUNJEGUBUN: string;
}

export interface Ids_oAbsentDateGubun1 {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentDateGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentDateGubun3 {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentDateGubun4 {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentDateGubun5 {
    CD: string;
    DATA: string;
}

export interface Ids_oAbsentDateGubun6 {
    CD: string;
    DATA: string;
}

export const useFrmtraining0040MTrainingAbsentManagement = () => {
    const [ds_ioTrainingAbsent, setds_ioTrainingAbsent] = useState<Ids_ioTrainingAbsent[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oAbsentDateGubun, setds_oAbsentDateGubun] = useState<Ids_oAbsentDateGubun[]>([]);
    const [ds_oTrainingJubsuCnt, setds_oTrainingJubsuCnt] = useState<Ids_oTrainingJubsuCnt[]>([]);
    const [ds_oAbsentDateGubun1, setds_oAbsentDateGubun1] = useState<Ids_oAbsentDateGubun1[]>([]);
    const [ds_oAbsentDateGubun2, setds_oAbsentDateGubun2] = useState<Ids_oAbsentDateGubun2[]>([]);
    const [ds_oAbsentDateGubun3, setds_oAbsentDateGubun3] = useState<Ids_oAbsentDateGubun3[]>([]);
    const [ds_oAbsentDateGubun4, setds_oAbsentDateGubun4] = useState<Ids_oAbsentDateGubun4[]>([]);
    const [ds_oAbsentDateGubun5, setds_oAbsentDateGubun5] = useState<Ids_oAbsentDateGubun5[]>([]);
    const [ds_oAbsentDateGubun6, setds_oAbsentDateGubun6] = useState<Ids_oAbsentDateGubun6[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingAbsent([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oAbsentDateGubun([]);
            setds_oTrainingJubsuCnt([]);
            setds_oAbsentDateGubun1([]);
            setds_oAbsentDateGubun2([]);
            setds_oAbsentDateGubun3([]);
            setds_oAbsentDateGubun4([]);
            setds_oAbsentDateGubun5([]);
            setds_oAbsentDateGubun6([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancelAbsent_OnClick = () => {
        console.log('btnCancelAbsent_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
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
    const lfn_SaveAttendance = () => {
        console.log('lfn_SaveAttendance clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioTrainingAbsent,
        ds_oCourse,
        ds_oJibu,
        ds_oAbsentDateGubun,
        ds_oTrainingJubsuCnt,
        ds_oAbsentDateGubun1,
        ds_oAbsentDateGubun2,
        ds_oAbsentDateGubun3,
        ds_oAbsentDateGubun4,
        ds_oAbsentDateGubun5,
        ds_oAbsentDateGubun6,
        btnCancelAbsent_OnClick,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_SaveAttendance,
        lfn_Search,
    };
};