// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oJibu {
    CD: string;
    DATA: string;
}

export interface Ids_ioTrainingOrder {
    EYGTMGNO: string;
    EYDEFYEAR1: string;
    EYDEFYEAR2: string;
    EYDEFYEAR3: string;
    EYDANGERYEAR1: string;
    EYDANGERYEAR2: string;
    EYDANGERYEAR3: string;
    EYENGRYEAR1: string;
    EYENGRYEAR2: string;
    EYENGRYEAR3: string;
    EYTRANSYEAR1: string;
    EYTRANSYEAR2: string;
    EYTRANSYEAR3: string;
}

export interface Ids_RowCnt {
    RowCnt: string;
}

export const useFrmcust4010EduYearCont = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioTrainingOrder, setds_ioTrainingOrder] = useState<Ids_ioTrainingOrder[]>([]);
    const [ds_RowCnt, setds_RowCnt] = useState<Ids_RowCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_ioTrainingOrder([]);
            setds_RowCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_ioTrainingOrder,
        ds_RowCnt,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Save,
    };
};