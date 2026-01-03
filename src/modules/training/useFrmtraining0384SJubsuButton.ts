// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0384SJubsuButtonData';

export const useFrmtraining0384SJubsuButton = () => {
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