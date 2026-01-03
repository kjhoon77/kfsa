// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmcti0010PInfoMessageData';

export const useFrmcti0010PInfoMessage = () => {
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