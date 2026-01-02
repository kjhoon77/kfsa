// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBoard {
}

export const useFrmCOM5000PHelpViewer = () => {
    const [ds_oBoard, setds_oBoard] = useState<Ids_oBoard[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBoard([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oBoard,
        lfn_End,
    };
};