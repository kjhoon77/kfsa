// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0280S04PassDiplomaPrintData';

export const useFrmspcledu0280S04PassDiplomaPrint = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
    };
};