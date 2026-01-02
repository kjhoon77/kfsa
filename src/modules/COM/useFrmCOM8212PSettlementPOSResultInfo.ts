// @ts-nocheck
import { useState, useEffect } from 'react';

export const useFrmCOM8212PSettlementPOSResultInfo = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        lfn_End,
    };
};