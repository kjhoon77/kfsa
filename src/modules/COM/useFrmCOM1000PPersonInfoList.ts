// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingPerson } from './FrmCOM1000PPersonInfoListData';

export const useFrmCOM1000PPersonInfoList = () => {
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };
    const lfn_SearchKey = () => {
        console.log('lfn_SearchKey clicked');
    };

    return {
        isLoading,
        ds_oTrainingPerson,
        btnSelect_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Search,
        lfn_SearchKey,
    };
};