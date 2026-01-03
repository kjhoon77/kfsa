// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oExamPassYn } from './Frmspcledu0280S05PassDiplomaPrintData';

export const useFrmspcledu0280S05PassDiplomaPrint = () => {
    const [ds_oExamPassYn, setds_oExamPassYn] = useState<Ids_oExamPassYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_radExamPassYn, setIsVisible_radExamPassYn] = useState(true);
    const [isVisible_edTrainingOrder2, setIsVisible_edTrainingOrder2] = useState(true);

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
        isVisible_radExamPassYn,
        setIsVisible_radExamPassYn,
        isVisible_edTrainingOrder2,
        setIsVisible_edTrainingOrder2,
    };
};