// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0072MFrameLeftData';

export const useFrmCOM0072MFrameLeft = () => {
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