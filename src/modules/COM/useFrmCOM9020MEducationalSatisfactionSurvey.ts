// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioSession {
    SHARE_SESSION: string;
    SHARE_SABUN: string;
}

export const useFrmCOM9020MEducationalSatisfactionSurvey = () => {
    const [ds_ioSession, setds_ioSession] = useState<Ids_ioSession[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioSession([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioSession,
        lfn_End,
    };
};