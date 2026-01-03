// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOtherPerson } from './FrmCOM1000POtherPersonListData';

export const useFrmCOM1000POtherPersonList = () => {
    const [ds_oOtherPerson, setds_oOtherPerson] = useState<Ids_oOtherPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oOtherPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oOtherPerson,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};