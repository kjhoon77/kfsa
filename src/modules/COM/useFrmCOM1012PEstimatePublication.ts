// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingPerson {
    TPMGNO: string;
    TPNM: string;
    TPPERSONKEY: string;
    KEY: string;
}

export interface Ids_ModifyGubun {
    CD: string;
    DATA: string;
}

export interface Ids_oEstimate {
    O_RTNSTAT: string;
    O_RTNMSG: string;
}

export const useFrmCOM1012PEstimatePublication = () => {
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [ds_ModifyGubun, setds_ModifyGubun] = useState<Ids_ModifyGubun[]>([]);
    const [ds_oEstimate, setds_oEstimate] = useState<Ids_oEstimate[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingPerson([]);
            setds_ModifyGubun([]);
            setds_oEstimate([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnEstimate_OnClick = () => {
        console.log('btnEstimate_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioTrainingPerson,
        ds_ModifyGubun,
        ds_oEstimate,
        btnEstimate_OnClick,
        lfn_End,
    };
};