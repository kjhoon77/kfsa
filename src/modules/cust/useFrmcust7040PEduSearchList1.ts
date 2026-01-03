// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioTrainingOrder1, Ids_ioTrainingOrder2, Ids_ioTrainingOrder3, Ids_ioTrainingOrder4 } from './Frmcust7040PEduSearchList1Data';

export const useFrmcust7040PEduSearchList1 = () => {
    const [ds_ioTrainingOrder1, setds_ioTrainingOrder1] = useState<Ids_ioTrainingOrder1[]>([]);
    const [ds_ioTrainingOrder2, setds_ioTrainingOrder2] = useState<Ids_ioTrainingOrder2[]>([]);
    const [ds_ioTrainingOrder3, setds_ioTrainingOrder3] = useState<Ids_ioTrainingOrder3[]>([]);
    const [ds_ioTrainingOrder4, setds_ioTrainingOrder4] = useState<Ids_ioTrainingOrder4[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioTrainingOrder1([]);
            setds_ioTrainingOrder2([]);
            setds_ioTrainingOrder3([]);
            setds_ioTrainingOrder4([]);
            setIsLoading(false);
        }, 500);
    }, []);

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
        ds_ioTrainingOrder3,
        ds_ioTrainingOrder4,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        lfn_End,
        lfn_Excel,
    };
};