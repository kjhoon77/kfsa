// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfPersonLisence, Ids_oProfUseYn } from './Frmprofes0001S02ProfMgmtData';

export const useFrmprofes0001S02ProfMgmt = () => {
    const [ds_ioProfPersonLisence, setds_ioProfPersonLisence] = useState<Ids_ioProfPersonLisence[]>([]);
    const [ds_oProfUseYn, setds_oProfUseYn] = useState<Ids_oProfUseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_gdProfPersonLisence, setIsVisible_gdProfPersonLisence] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_radUseYn, setIsVisible_radUseYn] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfPersonLisence([]);
            setds_oProfUseYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioProfPersonLisence,
        ds_oProfUseYn,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_gdProfPersonLisence,
        setIsVisible_gdProfPersonLisence,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_radUseYn,
        setIsVisible_radUseYn,
    };
};