// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun } from './FrmCOM0050MLogin2Data';

export const useFrmCOM0050MLogin2 = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Image0, setIsVisible_Image0] = useState(true);
    const [isVisible_radServiceGubun, setIsVisible_radServiceGubun] = useState(false);
    const [isVisible_edSabun, setIsVisible_edSabun] = useState(false);

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
        isVisible_Image0,
        setIsVisible_Image0,
        isVisible_radServiceGubun,
        setIsVisible_radServiceGubun,
        isVisible_edSabun,
        setIsVisible_edSabun,
    };
};