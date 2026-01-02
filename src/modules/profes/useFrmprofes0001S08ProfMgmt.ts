// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioProfPrize {
    INSACODE: string;
    PPCONTENT: string;
    PPSEQ: string;
    PPTITLE: string;
    PPYEAR: string;
}

export interface Ids_oProfPrizeSingle {
    INSACODE: string;
    PPCONTENT: string;
    PPSEQ: string;
    PPTITLE: string;
    PPYEAR: string;
}

export const useFrmprofes0001S08ProfMgmt = () => {
    const [ds_ioProfPrize, setds_ioProfPrize] = useState<Ids_ioProfPrize[]>([]);
    const [ds_oProfPrizeSingle, setds_oProfPrizeSingle] = useState<Ids_oProfPrizeSingle[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioProfPrize([]);
            setds_oProfPrizeSingle([]);
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
        ds_ioProfPrize,
        ds_oProfPrizeSingle,
        btnAdd_OnClick,
        btnDel_OnClick,
    };
};