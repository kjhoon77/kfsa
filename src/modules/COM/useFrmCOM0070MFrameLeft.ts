// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0070MFrameLeftData';

export const useFrmCOM0070MFrameLeft = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tabValue_tabMenu, setTabValue_tabMenu] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const imgCloseAllForm_OnClick = () => {
        console.log('imgCloseAllForm_OnClick clicked');
    };
    const imgFavoriteMenu1_OnClick = () => {
        console.log('imgFavoriteMenu1_OnClick clicked');
    };
    const imgFavoriteMenu2_OnClick = () => {
        console.log('imgFavoriteMenu2_OnClick clicked');
    };
    const imgFavoriteMenu3_OnClick = () => {
        console.log('imgFavoriteMenu3_OnClick clicked');
    };
    const imgFavoriteMenu4_OnClick = () => {
        console.log('imgFavoriteMenu4_OnClick clicked');
    };
    const imgFavoriteMenu5_OnClick = () => {
        console.log('imgFavoriteMenu5_OnClick clicked');
    };
    const imgFavoriteMenu6_OnClick = () => {
        console.log('imgFavoriteMenu6_OnClick clicked');
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
        imgCloseAllForm_OnClick,
        imgFavoriteMenu1_OnClick,
        imgFavoriteMenu2_OnClick,
        imgFavoriteMenu3_OnClick,
        imgFavoriteMenu4_OnClick,
        imgFavoriteMenu5_OnClick,
        imgFavoriteMenu6_OnClick,
        imgLogout_OnClick,
        tvLeftFavorite_OnClick,
        tvLeftMenu_OnClick,
    };
};