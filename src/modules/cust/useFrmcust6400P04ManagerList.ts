// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oFireManagerInfo {
}

export const useFrmcust6400P04ManagerList = () => {
    const [ds_oFireManagerInfo, setds_oFireManagerInfo] = useState<Ids_oFireManagerInfo[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oFireManagerInfo([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oFireManagerInfo,
        lfn_End,
    };
};