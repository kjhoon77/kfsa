// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oLectureSeq, Ids_oOrder } from './Frmprofes0005P03EduUnionData';

export const useFrmprofes0005P03EduUnion = () => {
    const [ds_oLectureSeq, setds_oLectureSeq] = useState<Ids_oLectureSeq[]>([]);
    const [ds_oOrder, setds_oOrder] = useState<Ids_oOrder[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oLectureSeq([]);
            setds_oOrder([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oLectureSeq,
        ds_oOrder,
        lfn_End,
        lfn_Save,
    };
};