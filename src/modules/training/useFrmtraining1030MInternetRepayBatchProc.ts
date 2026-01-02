// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmtraining1030MInternetRepayBatchProc = () => {
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