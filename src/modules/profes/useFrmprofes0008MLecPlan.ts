// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oRadioGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun1 {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun2 {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun3 {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun4 {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun5 {
    CD: string;
    DATA: string;
}

export interface Ids_oRadioGubun6 {
    CD: string;
    DATA: string;
}

export const useFrmprofes0008MLecPlan = () => {
    const [ds_oRadioGubun, setds_oRadioGubun] = useState<Ids_oRadioGubun[]>([]);
    const [ds_oRadioGubun1, setds_oRadioGubun1] = useState<Ids_oRadioGubun1[]>([]);
    const [ds_oRadioGubun2, setds_oRadioGubun2] = useState<Ids_oRadioGubun2[]>([]);
    const [ds_oRadioGubun3, setds_oRadioGubun3] = useState<Ids_oRadioGubun3[]>([]);
    const [ds_oRadioGubun4, setds_oRadioGubun4] = useState<Ids_oRadioGubun4[]>([]);
    const [ds_oRadioGubun5, setds_oRadioGubun5] = useState<Ids_oRadioGubun5[]>([]);
    const [ds_oRadioGubun6, setds_oRadioGubun6] = useState<Ids_oRadioGubun6[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oRadioGubun([]);
            setds_oRadioGubun1([]);
            setds_oRadioGubun2([]);
            setds_oRadioGubun3([]);
            setds_oRadioGubun4([]);
            setds_oRadioGubun5([]);
            setds_oRadioGubun6([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnCancelAbsent_OnClick = () => {
        console.log('btnCancelAbsent_OnClick clicked');
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

    return {
        isLoading,
        ds_oRadioGubun,
        ds_oRadioGubun1,
        ds_oRadioGubun2,
        ds_oRadioGubun3,
        ds_oRadioGubun4,
        ds_oRadioGubun5,
        ds_oRadioGubun6,
        btnCancelAbsent_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};