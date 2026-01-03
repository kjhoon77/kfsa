// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBoardCnt } from './FrmCOM0061MFrameTopData';

export const useFrmCOM0061MFrameTop = () => {
    const [ds_oBoardCnt, setds_oBoardCnt] = useState<Ids_oBoardCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_tabTopMenu, setTabValue_tabTopMenu] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBoardCnt([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const imgKemsLogo_OnClick = () => {
        console.log('imgKemsLogo_OnClick clicked');
    };
    const imgLeftFrameOpenClose_OnClick = () => {
        console.log('imgLeftFrameOpenClose_OnClick clicked');
    };

    return {
        isLoading,
        ds_oBoardCnt,
        tabValue_tabTopMenu,
        setTabValue_tabTopMenu,
        imgKemsLogo_OnClick,
        imgLeftFrameOpenClose_OnClick,
    };
};