// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJubsuGubun {
    CD: string;
    DATA: string;
    DATA2: string;
    DATA3: string;
}

export interface Ids_oJubsuGubunCourse {
    CD: string;
    DATA: string;
}

export interface Ids_status {
    CD: string;
    DATA: string;
}

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_oJubsuGubunCheck {
    CD: string;
    DATA: string;
}

export interface Ids_oProfessor {
    EAMGNO: string;
    EATPMGNO: string;
    EAMGGTMGNO: string;
    EADATE: string;
    EASTATUS: string;
    EAJUBSUGUBUN: string;
    EATCCOURSECD: string;
    EATCCOURSENM: string;
    EACONFIRMDATE: string;
    EAJUBSUDATE: string;
    EACONFIRMSABUN: string;
    EAREASON: string;
    EAREMARK: string;
    EAMODREASON: string;
    EAFILEPATH: string;
    EAFILENM: string;
    EACLASSGUBUN: string;
    EAREGDATE: string;
    EAREGSABUN: string;
    EAMODDATE: string;
    EAMODSABUN: string;
    PERSONNM: string;
    BIRTHDAY: string;
    HPTEL: string;
    ADRESS: string;
    EAJUBSUGUBUN2: string;
    EAADDRGUBUN: string;
    YEAR: string;
    MON: string;
    DAY: string;
    PAPERNB: string;
}

export interface Ids_KemsOnline {
    CD: string;
    DATA: string;
}

export const useFrmtraining1000EXamConfirmList = () => {
    const [ds_oJubsuGubun, setds_oJubsuGubun] = useState<Ids_oJubsuGubun[]>([]);
    const [ds_oJubsuGubunCourse, setds_oJubsuGubunCourse] = useState<Ids_oJubsuGubunCourse[]>([]);
    const [ds_status, setds_status] = useState<Ids_status[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oJubsuGubunCheck, setds_oJubsuGubunCheck] = useState<Ids_oJubsuGubunCheck[]>([]);
    const [ds_oProfessor, setds_oProfessor] = useState<Ids_oProfessor[]>([]);
    const [ds_KemsOnline, setds_KemsOnline] = useState<Ids_KemsOnline[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJubsuGubun([]);
            setds_oJubsuGubunCourse([]);
            setds_status([]);
            setds_oJibu([]);
            setds_oJubsuGubunCheck([]);
            setds_oProfessor([]);
            setds_KemsOnline([]);
            setIsLoading(false);
        }, 500);
    }, []);

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
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oJubsuGubun,
        ds_oJubsuGubunCourse,
        ds_status,
        ds_oJibu,
        ds_oJubsuGubunCheck,
        ds_oProfessor,
        ds_KemsOnline,
        btnMutilSort_OnClick,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};