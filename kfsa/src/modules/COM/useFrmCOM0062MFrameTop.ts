// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBoardCnt } from './FrmCOM0062MFrameTopData';

export const useFrmCOM0062MFrameTop = () => {
    const [ds_oBoardCnt, setds_oBoardCnt] = useState<Ids_oBoardCnt[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_tabTopMenu, setRawVisible_tabTopMenu] = useState(true);
    const [rawVisible_imgLeftFrameClose, setRawVisible_imgLeftFrameClose] = useState(true);
    const [rawVisible_shpTopMenuBottom, setRawVisible_shpTopMenuBottom] = useState(true);
    const [rawVisible_imgLoginBox, setRawVisible_imgLoginBox] = useState(true);
    const [rawVisible_lbLoginUserInfo, setRawVisible_lbLoginUserInfo] = useState(true);
    const [rawVisible_imgLogout, setRawVisible_imgLogout] = useState(false);
    const [rawVisible_imgKemsLogo, setRawVisible_imgKemsLogo] = useState(true);
    const isVisible_tabTopMenu = rawVisible_tabTopMenu;
    const setIsVisible_tabTopMenu = setRawVisible_tabTopMenu;
    const isVisible_imgLeftFrameClose = rawVisible_imgLeftFrameClose;
    const setIsVisible_imgLeftFrameClose = setRawVisible_imgLeftFrameClose;
    const isVisible_shpTopMenuBottom = rawVisible_shpTopMenuBottom;
    const setIsVisible_shpTopMenuBottom = setRawVisible_shpTopMenuBottom;
    const isVisible_imgLoginBox = rawVisible_imgLoginBox;
    const setIsVisible_imgLoginBox = setRawVisible_imgLoginBox;
    const isVisible_lbLoginUserInfo = rawVisible_lbLoginUserInfo;
    const setIsVisible_lbLoginUserInfo = setRawVisible_lbLoginUserInfo;
    const isVisible_imgLogout = rawVisible_imgLogout;
    const setIsVisible_imgLogout = setRawVisible_imgLogout;
    const isVisible_imgKemsLogo = rawVisible_imgKemsLogo;
    const setIsVisible_imgKemsLogo = setRawVisible_imgKemsLogo;
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