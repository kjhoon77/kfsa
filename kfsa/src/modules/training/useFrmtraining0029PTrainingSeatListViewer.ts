// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0029PTrainingSeatListViewerData';

export const useFrmtraining0029PTrainingSeatListViewer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_AxMsie, setIsVisible_AxMsie] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_AxMsie,
        setIsVisible_AxMsie,
    };
};