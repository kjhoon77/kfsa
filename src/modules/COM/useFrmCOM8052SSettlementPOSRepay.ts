// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmCOM8052SSettlementPOSRepay = () => {
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