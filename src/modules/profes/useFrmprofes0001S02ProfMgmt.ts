// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioProfPersonLisence {
    PLDATE: string;
    PLNAME: string;
    PLOFFICE: string;
    INSACODE: string;
    PLSEQ: string;
    PLUSEPROFESSOR: string;
}

export interface Ids_oProfUseYn {
    CD: string;
    DATA: string;
}

export const useFrmprofes0001S02ProfMgmt = () => {
    const [ds_ioProfPersonLisence, setds_ioProfPersonLisence] = useState<Ids_ioProfPersonLisence[]>([]);
    const [ds_oProfUseYn, setds_oProfUseYn] = useState<Ids_oProfUseYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
    };
};