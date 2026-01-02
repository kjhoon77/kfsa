// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oLoginHistory {
}

export interface Ids_oLoginMgno {
}

export const useFrmCOM0080MFrameBottom = () => {
    const [ds_oLoginHistory, setds_oLoginHistory] = useState<Ids_oLoginHistory[]>([]);
    const [ds_oLoginMgno, setds_oLoginMgno] = useState<Ids_oLoginMgno[]>([]);
    const [isLoading, setIsLoading] = useState(false);

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
        imgCascade_OnClick,
        imgHorizont_OnClick,
        imgMenuExpand_OnClick,
        imgVertical_OnClick,
    };
};