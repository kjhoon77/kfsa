// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBoardCnt } from './FrmCOM0062MFrameTopData';

export const useFrmCOM0062MFrameTop = () => {
    const [ds_oBoardCnt, setds_oBoardCnt] = useState<Ids_oBoardCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_tabTopMenu, setIsVisible_tabTopMenu] = useState(true);
    const [isVisible_imgLeftFrameClose, setIsVisible_imgLeftFrameClose] = useState(true);
    const [isVisible_shpTopMenuBottom, setIsVisible_shpTopMenuBottom] = useState(true);
    const [isVisible_imgLoginBox, setIsVisible_imgLoginBox] = useState(true);
    const [isVisible_lbLoginUserInfo, setIsVisible_lbLoginUserInfo] = useState(true);
    const [isVisible_imgLogout, setIsVisible_imgLogout] = useState(false);
    const [isVisible_imgKemsLogo, setIsVisible_imgKemsLogo] = useState(true);
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
    const imgLogout_OnClick = () => {
        console.log('imgLogout_OnClick clicked');
    };

    return {
        isLoading,
        ds_oBoardCnt,
        isVisible_tabTopMenu,
        setIsVisible_tabTopMenu,
        isVisible_imgLeftFrameClose,
        setIsVisible_imgLeftFrameClose,
        isVisible_shpTopMenuBottom,
        setIsVisible_shpTopMenuBottom,
        isVisible_imgLoginBox,
        setIsVisible_imgLoginBox,
        isVisible_lbLoginUserInfo,
        setIsVisible_lbLoginUserInfo,
        isVisible_imgLogout,
        setIsVisible_imgLogout,
        isVisible_imgKemsLogo,
        setIsVisible_imgKemsLogo,
        tabValue_tabTopMenu,
        setTabValue_tabTopMenu,
        imgKemsLogo_OnClick,
        imgLeftFrameOpenClose_OnClick,
        imgLogout_OnClick,
    };
};