// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBoard } from './FrmCOM5000PHelpViewerData';

export const useFrmCOM5000PHelpViewer = () => {
    const [ds_oBoard, setds_oBoard] = useState<Ids_oBoard[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_lbHelp, setRawVisible_lbHelp] = useState(true);
    const [rawVisible_taHelp, setRawVisible_taHelp] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_lbHelp = rawVisible_lbHelp;
    const setIsVisible_lbHelp = setRawVisible_lbHelp;
    const isVisible_taHelp = rawVisible_taHelp && rawVisible_shpGubunBox;
    const setIsVisible_taHelp = setRawVisible_taHelp;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;

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
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_lbHelp,
        setIsVisible_lbHelp,
        isVisible_taHelp,
        setIsVisible_taHelp,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        lfn_End,
    };
};