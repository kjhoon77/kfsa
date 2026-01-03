// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oLoginHistory, Ids_oLoginMgno } from './FrmCOM0080MFrameBottomData';

export const useFrmCOM0080MFrameBottom = () => {
    const [ds_oLoginHistory, setds_oLoginHistory] = useState<Ids_oLoginHistory[]>([]);
    const [ds_oLoginMgno, setds_oLoginMgno] = useState<Ids_oLoginMgno[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_lbLoginTime, setIsVisible_lbLoginTime] = useState(true);
    const [isVisible_lbBottomMessage, setIsVisible_lbBottomMessage] = useState(true);
    const [isVisible_imgCascade, setIsVisible_imgCascade] = useState(true);
    const [isVisible_imgVertical, setIsVisible_imgVertical] = useState(true);
    const [isVisible_imgHorizont, setIsVisible_imgHorizont] = useState(true);
    const [isVisible_imgLine, setIsVisible_imgLine] = useState(true);
    const [isVisible_imgKfsiLogo, setIsVisible_imgKfsiLogo] = useState(true);
    const [isVisible_shpBottomLine, setIsVisible_shpBottomLine] = useState(true);
    const [isVisible_imgMenuExpand, setIsVisible_imgMenuExpand] = useState(true);
    const [isVisible_lbLoginIpAddr, setIsVisible_lbLoginIpAddr] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oLoginHistory([]);
            setds_oLoginMgno([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const imgCascade_OnClick = () => {
        console.log('imgCascade_OnClick clicked');
    };
    const imgHorizont_OnClick = () => {
        console.log('imgHorizont_OnClick clicked');
    };
    const imgMenuExpand_OnClick = () => {
        console.log('imgMenuExpand_OnClick clicked');
    };
    const imgVertical_OnClick = () => {
        console.log('imgVertical_OnClick clicked');
    };

    return {
        isLoading,
        ds_oLoginHistory,
        ds_oLoginMgno,
        isVisible_lbLoginTime,
        setIsVisible_lbLoginTime,
        isVisible_lbBottomMessage,
        setIsVisible_lbBottomMessage,
        isVisible_imgCascade,
        setIsVisible_imgCascade,
        isVisible_imgVertical,
        setIsVisible_imgVertical,
        isVisible_imgHorizont,
        setIsVisible_imgHorizont,
        isVisible_imgLine,
        setIsVisible_imgLine,
        isVisible_imgKfsiLogo,
        setIsVisible_imgKfsiLogo,
        isVisible_shpBottomLine,
        setIsVisible_shpBottomLine,
        isVisible_imgMenuExpand,
        setIsVisible_imgMenuExpand,
        isVisible_lbLoginIpAddr,
        setIsVisible_lbLoginIpAddr,
        imgCascade_OnClick,
        imgHorizont_OnClick,
        imgMenuExpand_OnClick,
        imgVertical_OnClick,
    };
};