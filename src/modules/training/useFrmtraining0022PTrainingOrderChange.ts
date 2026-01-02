// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingOrder, Ids_oJibu, Ids_oCourse, Ids_oTrainingOrderChange, Ids_ioTrainingChangeinfo, Ids_oStatus, Ids_oModifyTime } from './Frmtraining0022PTrainingOrderChangeData';

export const useFrmtraining0022PTrainingOrderChange = () => {
    const [ds_oTrainingOrder, setds_oTrainingOrder] = useState<Ids_oTrainingOrder[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oTrainingOrderChange, setds_oTrainingOrderChange] = useState<Ids_oTrainingOrderChange[]>([]);
    const [ds_ioTrainingChangeinfo, setds_ioTrainingChangeinfo] = useState<Ids_ioTrainingChangeinfo[]>([]);
    const [ds_oStatus, setds_oStatus] = useState<Ids_oStatus[]>([]);
    const [ds_oModifyTime, setds_oModifyTime] = useState<Ids_oModifyTime[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingOrder([]);
            setds_oJibu([]);
            setds_oCourse([]);
            setds_oTrainingOrderChange([]);
            setds_ioTrainingChangeinfo([]);
            setds_oStatus([]);
            setds_oModifyTime([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oTrainingOrder,
        ds_oJibu,
        ds_oCourse,
        ds_oTrainingOrderChange,
        ds_ioTrainingChangeinfo,
        ds_oStatus,
        ds_oModifyTime,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
        lfn_Search,
    };
};