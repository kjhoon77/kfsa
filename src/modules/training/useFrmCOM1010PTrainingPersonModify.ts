// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingPerson {
    TPMGNO: string;
    TPNM: string;
    KEY: string;
}

export interface Ids_ModifyGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oModifyColumn {
    COLUMNCD: string;
    COLUMNNM: string;
}

export const useFrmCOM1010PTrainingPersonModify = () => {
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [ds_ModifyGubun, setds_ModifyGubun] = useState<Ids_ModifyGubun[]>([]);
    const [ds_oModifyColumn, setds_oModifyColumn] = useState<Ids_oModifyColumn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingPerson([]);
            setds_ModifyGubun([]);
            setds_oModifyColumn([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAuthResidentNo_OnClick = () => {
        console.log('btnAuthResidentNo_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioTrainingPerson,
        ds_ModifyGubun,
        ds_oModifyColumn,
        btnAuthResidentNo_OnClick,
        lfn_End,
        lfn_Save,
    };
};