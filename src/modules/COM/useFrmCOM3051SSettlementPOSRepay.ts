// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oPosPrintm {
}

export const useFrmCOM3051SSettlementPOSRepay = () => {
    const [ds_oPosPrintm, setds_oPosPrintm] = useState<Ids_oPosPrintm[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oPosPrintm([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oPosPrintm,
    };
};