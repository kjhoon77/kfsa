// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmspcledu0382SSunapInfoData';

export const useFrmspcledu0382SSunapInfo = () => {
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