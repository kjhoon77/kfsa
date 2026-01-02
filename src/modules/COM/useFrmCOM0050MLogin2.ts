// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oServiceGubun {
    CD: string;
    DATA: string;
}

export const useFrmCOM0050MLogin2 = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oServiceGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oServiceGubun,
    };
};