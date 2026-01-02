// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingPerson, Ids_iTrainingPerson } from './FrmCOM6000PNiceCheckData';

export const useFrmCOM6000PNiceCheck = () => {
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_iTrainingPerson, setds_iTrainingPerson] = useState<Ids_iTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingPerson([]);
            setds_iTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oTrainingPerson,
        ds_iTrainingPerson,
        lfn_End,
    };
};