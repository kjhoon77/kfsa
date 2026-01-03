// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioProfPersonEdu, Ids_oProfUseYn } from './Frmprofes0001S05ProfMgmtData';

export const useFrmprofes0001S05ProfMgmt = () => {
    const [ds_ioProfPersonEdu, setds_ioProfPersonEdu] = useState<Ids_ioProfPersonEdu[]>([]);
    const [ds_oProfUseYn, setds_oProfUseYn] = useState<Ids_oProfUseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox1, setIsVisible_shpGubunBox1] = useState(true);
    const [isVisible_Static8, setIsVisible_Static8] = useState(true);
    const [isVisible_gdProfPersonEdu, setIsVisible_gdProfPersonEdu] = useState(true);
    const [isVisible_lbText, setIsVisible_lbText] = useState(true);
    const [isVisible_radUseYn, setIsVisible_radUseYn] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfPersonEdu([]);
            setds_oProfUseYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_ioProfPersonEdu,
        ds_oProfUseYn,
        isVisible_shpGubunBox1,
        setIsVisible_shpGubunBox1,
        isVisible_Static8,
        setIsVisible_Static8,
        isVisible_gdProfPersonEdu,
        setIsVisible_gdProfPersonEdu,
        isVisible_lbText,
        setIsVisible_lbText,
        isVisible_radUseYn,
        setIsVisible_radUseYn,
    };
};