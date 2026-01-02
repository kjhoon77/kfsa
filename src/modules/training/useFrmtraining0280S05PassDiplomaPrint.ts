// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oExamPassYn } from './Frmtraining0280S05PassDiplomaPrintData';

export const useFrmtraining0280S05PassDiplomaPrint = () => {
    const [ds_oExamPassYn, setds_oExamPassYn] = useState<Ids_oExamPassYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oExamPassYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oExamPassYn,
    };
};