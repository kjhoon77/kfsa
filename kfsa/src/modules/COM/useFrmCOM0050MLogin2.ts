// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oServiceGubun } from './FrmCOM0050MLogin2Data';

export const useFrmCOM0050MLogin2 = () => {
    const [ds_oServiceGubun, setds_oServiceGubun] = useState<Ids_oServiceGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Image0, setRawVisible_Image0] = useState(true);
    const [rawVisible_radServiceGubun, setRawVisible_radServiceGubun] = useState(false);
    const [rawVisible_edSabun, setRawVisible_edSabun] = useState(false);
    const isVisible_Image0 = rawVisible_Image0;
    const setIsVisible_Image0 = setRawVisible_Image0;
    const isVisible_radServiceGubun = rawVisible_radServiceGubun;
    const setIsVisible_radServiceGubun = setRawVisible_radServiceGubun;
    const isVisible_edSabun = rawVisible_edSabun;
    const setIsVisible_edSabun = setRawVisible_edSabun;

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