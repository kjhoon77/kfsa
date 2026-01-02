// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioOmrPort, Ids_oPort, Ids_oSpeed, Ids_oBoundRate, Ids_oParityBit, Ids_oStopBit } from './Frmtraining0470MExamOMRPortSettingData';

export const useFrmtraining0470MExamOMRPortSetting = () => {
    const [ds_ioOmrPort, setds_ioOmrPort] = useState<Ids_ioOmrPort[]>([]);
    const [ds_oPort, setds_oPort] = useState<Ids_oPort[]>([]);
    const [ds_oSpeed, setds_oSpeed] = useState<Ids_oSpeed[]>([]);
    const [ds_oBoundRate, setds_oBoundRate] = useState<Ids_oBoundRate[]>([]);
    const [ds_oParityBit, setds_oParityBit] = useState<Ids_oParityBit[]>([]);
    const [ds_oStopBit, setds_oStopBit] = useState<Ids_oStopBit[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioOmrPort([]);
            setds_oPort([]);
            setds_oSpeed([]);
            setds_oBoundRate([]);
            setds_oParityBit([]);
            setds_oStopBit([]);
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
        ds_ioOmrPort,
        ds_oPort,
        ds_oSpeed,
        ds_oBoundRate,
        ds_oParityBit,
        ds_oStopBit,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        lfn_End,
        lfn_Save,
    };
};