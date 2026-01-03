// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioOmrPort, Ids_oPort, Ids_oSpeed, Ids_oBoundRate, Ids_oParityBit, Ids_oStopBit } from './Frmspcledu0470MExamOMRPortSettingData';

export const useFrmspcledu0470MExamOMRPortSetting = () => {
    const [ds_ioOmrPort, setds_ioOmrPort] = useState<Ids_ioOmrPort[]>([]);
    const [ds_oPort, setds_oPort] = useState<Ids_oPort[]>([]);
    const [ds_oSpeed, setds_oSpeed] = useState<Ids_oSpeed[]>([]);
    const [ds_oBoundRate, setds_oBoundRate] = useState<Ids_oBoundRate[]>([]);
    const [ds_oParityBit, setds_oParityBit] = useState<Ids_oParityBit[]>([]);
    const [ds_oStopBit, setds_oStopBit] = useState<Ids_oStopBit[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_lbPort, setIsVisible_lbPort] = useState(true);
    const [isVisible_lbSpeed, setIsVisible_lbSpeed] = useState(true);
    const [isVisible_lbBoundRate, setIsVisible_lbBoundRate] = useState(true);
    const [isVisible_lbParityBit, setIsVisible_lbParityBit] = useState(true);
    const [isVisible_lbStopBIt, setIsVisible_lbStopBIt] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_radStopBIt, setIsVisible_radStopBIt] = useState(true);
    const [isVisible_radParityBit, setIsVisible_radParityBit] = useState(true);
    const [isVisible_radBoundRate, setIsVisible_radBoundRate] = useState(true);
    const [isVisible_radSpeed, setIsVisible_radSpeed] = useState(true);
    const [isVisible_radPort, setIsVisible_radPort] = useState(true);
    const [isVisible_fiConfigFile, setIsVisible_fiConfigFile] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);

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
        isVisible_lbPort,
        setIsVisible_lbPort,
        isVisible_lbSpeed,
        setIsVisible_lbSpeed,
        isVisible_lbBoundRate,
        setIsVisible_lbBoundRate,
        isVisible_lbParityBit,
        setIsVisible_lbParityBit,
        isVisible_lbStopBIt,
        setIsVisible_lbStopBIt,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_radStopBIt,
        setIsVisible_radStopBIt,
        isVisible_radParityBit,
        setIsVisible_radParityBit,
        isVisible_radBoundRate,
        setIsVisible_radBoundRate,
        isVisible_radSpeed,
        setIsVisible_radSpeed,
        isVisible_radPort,
        setIsVisible_radPort,
        isVisible_fiConfigFile,
        setIsVisible_fiConfigFile,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        lfn_End,
        lfn_Save,
    };
};