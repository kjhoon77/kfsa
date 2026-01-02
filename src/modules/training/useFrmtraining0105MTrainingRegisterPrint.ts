// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oTrainingSeatNoPrint {
}

export const useFrmtraining0105MTrainingRegisterPrint = () => {
    const [ds_oTrainingSeatNoPrint, setds_oTrainingSeatNoPrint] = useState<Ids_oTrainingSeatNoPrint[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
    };
};