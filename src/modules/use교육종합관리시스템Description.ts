// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './교육종합관리시스템DescriptionData';

export const use교육종합관리시스템Description = () => {
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