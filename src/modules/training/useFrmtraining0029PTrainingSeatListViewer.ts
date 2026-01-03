// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0029PTrainingSeatListViewerData';

export const useFrmtraining0029PTrainingSeatListViewer = () => {
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