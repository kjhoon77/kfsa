// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oJibu, Ids_oSort, Ids_oTrainingSeatNoPrint, Ids_oPoto } from './Frmtraining0130STrainingSeatNoPrintData';

export const useFrmtraining0130STrainingSeatNoPrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oTrainingSeatNoPrint, setds_oTrainingSeatNoPrint] = useState<Ids_oTrainingSeatNoPrint[]>([]);
    const [ds_oPoto, setds_oPoto] = useState<Ids_oPoto[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oSort([]);
            setds_oTrainingSeatNoPrint([]);
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
        ds_oTrainingSeatNoPrint,
        ds_oPoto,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};