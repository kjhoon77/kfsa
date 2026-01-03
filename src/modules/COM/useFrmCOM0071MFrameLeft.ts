// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0071MFrameLeftData';

export const useFrmCOM0071MFrameLeft = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_tabMenu, setTabValue_tabMenu] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const btnUID_OnClick = () => {
        console.log('btnUID_OnClick clicked');
    };
    const imgCloseAllForm_OnClick = () => {
        console.log('imgCloseAllForm_OnClick clicked');
    };
    const imgLogout_OnClick = () => {
        console.log('imgLogout_OnClick clicked');
    };
    const tvLeftFavorite_OnClick = () => {
        console.log('tvLeftFavorite_OnClick clicked');
    };
    const tvLeftMenu_OnClick = () => {
        console.log('tvLeftMenu_OnClick clicked');
    };

    return {
        isLoading,
        tabValue_tabMenu,
        setTabValue_tabMenu,
        btnUID_OnClick,
        imgCloseAllForm_OnClick,
        imgLogout_OnClick,
        tvLeftFavorite_OnClick,
        tvLeftMenu_OnClick,
    };
};