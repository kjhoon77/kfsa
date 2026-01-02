// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmcti0010MAgentMonitListData';

export const useFrmcti0010MAgentMonitList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
    };
};