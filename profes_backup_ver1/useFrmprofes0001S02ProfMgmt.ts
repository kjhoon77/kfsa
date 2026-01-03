// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfPersonLisence, Ids_oProfUseYn } from './Frmprofes0001S02ProfMgmtData';

export const useFrmprofes0001S02ProfMgmt = () => {
    const [ds_ioProfPersonLisence, setds_ioProfPersonLisence] = useState<Ids_ioProfPersonLisence[]>([]);
    const [ds_oProfUseYn, setds_oProfUseYn] = useState<Ids_oProfUseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox1, setRawVisible_shpGubunBox1] = useState(true);
    const [rawVisible_Static8, setRawVisible_Static8] = useState(true);
    const [rawVisible_gdProfPersonLisence, setRawVisible_gdProfPersonLisence] = useState(true);
    const [rawVisible_lbText, setRawVisible_lbText] = useState(true);
    const [rawVisible_radUseYn, setRawVisible_radUseYn] = useState(true);
    const isVisible_shpGubunBox1 = rawVisible_shpGubunBox1;
    const setIsVisible_shpGubunBox1 = setRawVisible_shpGubunBox1;
    const isVisible_Static8 = rawVisible_Static8;
    const setIsVisible_Static8 = setRawVisible_Static8;
    const isVisible_gdProfPersonLisence = rawVisible_gdProfPersonLisence && rawVisible_shpGubunBox1;
    const setIsVisible_gdProfPersonLisence = setRawVisible_gdProfPersonLisence;
    const isVisible_lbText = rawVisible_lbText && rawVisible_shpGubunBox1;
    const setIsVisible_lbText = setRawVisible_lbText;
    const isVisible_radUseYn = rawVisible_radUseYn && rawVisible_shpGubunBox1;
    const setIsVisible_radUseYn = setRawVisible_radUseYn;

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