// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingSeatNoPrint } from './Frmspcledu0105MTrainingRegisterPrintData';

export const useFrmspcledu0105MTrainingRegisterPrint = () => {
    const [ds_oTrainingSeatNoPrint, setds_oTrainingSeatNoPrint] = useState<Ids_oTrainingSeatNoPrint[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_tabTab, setIsVisible_tabTab] = useState(true);
    const [tabValue_tabTab, setTabValue_tabTab] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingSeatNoPrint([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oTrainingSeatNoPrint,
        isVisible_tabTab,
        setIsVisible_tabTab,
        tabValue_tabTab,
        setTabValue_tabTab,
    };
};