// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oProcGubun {
    CD: string;
    DATA: string;
}

export const useFrmCOM3033SSettlementGubunLcsSunap = () => {
    const [ds_oProcGubun, setds_oProcGubun] = useState<Ids_oProcGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProcGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oProcGubun,
    };
};