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
    const [rawVisible_lbPort, setRawVisible_lbPort] = useState(true);
    const [rawVisible_lbSpeed, setRawVisible_lbSpeed] = useState(true);
    const [rawVisible_lbBoundRate, setRawVisible_lbBoundRate] = useState(true);
    const [rawVisible_lbParityBit, setRawVisible_lbParityBit] = useState(true);
    const [rawVisible_lbStopBIt, setRawVisible_lbStopBIt] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_radStopBIt, setRawVisible_radStopBIt] = useState(true);
    const [rawVisible_radParityBit, setRawVisible_radParityBit] = useState(true);
    const [rawVisible_radBoundRate, setRawVisible_radBoundRate] = useState(true);
    const [rawVisible_radSpeed, setRawVisible_radSpeed] = useState(true);
    const [rawVisible_radPort, setRawVisible_radPort] = useState(true);
    const [rawVisible_fiConfigFile, setRawVisible_fiConfigFile] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const isVisible_lbPort = rawVisible_lbPort;
    const setIsVisible_lbPort = setRawVisible_lbPort;
    const isVisible_lbSpeed = rawVisible_lbSpeed;
    const setIsVisible_lbSpeed = setRawVisible_lbSpeed;
    const isVisible_lbBoundRate = rawVisible_lbBoundRate;
    const setIsVisible_lbBoundRate = setRawVisible_lbBoundRate;
    const isVisible_lbParityBit = rawVisible_lbParityBit;
    const setIsVisible_lbParityBit = setRawVisible_lbParityBit;
    const isVisible_lbStopBIt = rawVisible_lbStopBIt;
    const setIsVisible_lbStopBIt = setRawVisible_lbStopBIt;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_radStopBIt = rawVisible_radStopBIt;
    const setIsVisible_radStopBIt = setRawVisible_radStopBIt;
    const isVisible_radParityBit = rawVisible_radParityBit;
    const setIsVisible_radParityBit = setRawVisible_radParityBit;
    const isVisible_radBoundRate = rawVisible_radBoundRate;
    const setIsVisible_radBoundRate = setRawVisible_radBoundRate;
    const isVisible_radSpeed = rawVisible_radSpeed;
    const setIsVisible_radSpeed = setRawVisible_radSpeed;
    const isVisible_radPort = rawVisible_radPort;
    const setIsVisible_radPort = setRawVisible_radPort;
    const isVisible_fiConfigFile = rawVisible_fiConfigFile;
    const setIsVisible_fiConfigFile = setRawVisible_fiConfigFile;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;

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