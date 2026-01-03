// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBoard } from './FrmCOM5000PHelpViewerData';

export const useFrmCOM5000PHelpViewer = () => {
    const [ds_oBoard, setds_oBoard] = useState<Ids_oBoard[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_lbHelp, setIsVisible_lbHelp] = useState(true);
    const [isVisible_taHelp, setIsVisible_taHelp] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);

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