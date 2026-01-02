// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioTrainingOrder1 {
    GTTEAMNM: string;
    TOTCNT: string;
    TOTHW: string;
    HWBANG: string;
    HWDANGER: string;
    HWSOKI: string;
    TOTNHW: string;
    NHWBANG: string;
    NHWDANGER: string;
    NHWSOKI: string;
    NHWDRIVER: string;
}

export interface Ids_ioTrainingOrder2 {
    GTTEAMNM: string;
    TOTCNT: string;
    TOTHW: string;
    HWBANG: string;
    HWDANGER: string;
    HWSOKI: string;
    TOTNHW: string;
    NHWBANG: string;
    NHWDANGER: string;
    NHWSOKI: string;
    NHWDRIVER: string;
}

export const useFrmcust1112PTaEduSearchStatistics = () => {
    const [ds_ioTrainingOrder1, setds_ioTrainingOrder1] = useState<Ids_ioTrainingOrder1[]>([]);
    const [ds_ioTrainingOrder2, setds_ioTrainingOrder2] = useState<Ids_ioTrainingOrder2[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingOrder1([]);
            setds_ioTrainingOrder2([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnAttend_OnClick = () => {
        console.log('btnAttend_OnClick clicked');
    };
    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };

    return {
        isLoading,
        ds_ioTrainingOrder1,
        ds_ioTrainingOrder2,
        btnAttend_OnClick,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
    };
};