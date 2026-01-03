// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0280S03PassDiplomaPrintData';

export const useFrmtraining0280S03PassDiplomaPrint = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
    };
};