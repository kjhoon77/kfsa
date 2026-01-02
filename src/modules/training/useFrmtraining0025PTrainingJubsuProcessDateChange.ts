// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oChangeDate {
    CD: string;
    DATA: string;
}

export interface Ids_oBankSunapGubun {
    CD: string;
    DATA: string;
}

export const useFrmtraining0025PTrainingJubsuProcessDateChange = () => {
    const [ds_oChangeDate, setds_oChangeDate] = useState<Ids_oChangeDate[]>([]);
    const [ds_oBankSunapGubun, setds_oBankSunapGubun] = useState<Ids_oBankSunapGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oChangeDate([]);
            setds_oBankSunapGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const chkAfterPonyDate_OnClick = () => {
        console.log('chkAfterPonyDate_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oChangeDate,
        ds_oBankSunapGubun,
        chkAfterPonyDate_OnClick,
        lfn_End,
        lfn_Save,
    };
};