// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioProfSeminar {
    INSACODE: string;
    PSCONTENT: string;
    PSINDATE: string;
    PSOFFICE: string;
    PSSEQ: string;
}

export interface Ids_oProfSeminarSingle {
    INSACODE: string;
    PSCONTENT: string;
    PSINDATE: string;
    PSOFFICE: string;
    PSSEQ: string;
}

export const useFrmprofes0001S03ProfMgmt = () => {
    const [ds_ioProfSeminar, setds_ioProfSeminar] = useState<Ids_ioProfSeminar[]>([]);
    const [ds_oProfSeminarSingle, setds_oProfSeminarSingle] = useState<Ids_oProfSeminarSingle[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfSeminar([]);
            setds_oProfSeminarSingle([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAdd_OnClick = () => {
        console.log('btnAdd_OnClick clicked');
    };
    const btnDel_OnClick = () => {
        console.log('btnDel_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioProfSeminar,
        ds_oProfSeminarSingle,
        btnAdd_OnClick,
        btnDel_OnClick,
    };
};