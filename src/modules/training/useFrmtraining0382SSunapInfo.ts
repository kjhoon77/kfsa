// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0382SSunapInfoData';

export const useFrmtraining0382SSunapInfo = () => {
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