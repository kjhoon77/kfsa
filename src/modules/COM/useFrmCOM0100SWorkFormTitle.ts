// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0100SWorkFormTitleData';

export const useFrmCOM0100SWorkFormTitle = () => {
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