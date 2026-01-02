// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioImageInfo, Ids_oApproval, Ids_ioTrainingPerson } from './Frmspcledu0255PTrainingPersonPictureData';

export const useFrmspcledu0255PTrainingPersonPicture = () => {
    const [ds_ioImageInfo, setds_ioImageInfo] = useState<Ids_ioImageInfo[]>([]);
    const [ds_oApproval, setds_oApproval] = useState<Ids_oApproval[]>([]);
    const [ds_ioTrainingPerson, setds_ioTrainingPerson] = useState<Ids_ioTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioImageInfo([]);
            setds_oApproval([]);
            setds_ioTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnMutilSort_OnClick = () => {
        console.log('btnMutilSort_OnClick clicked');
    };
    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const imgPicture_OnClick = () => {
        console.log('imgPicture_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioImageInfo,
        ds_oApproval,
        ds_ioTrainingPerson,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnMutilSort_OnClick,
        btnSelect_OnClick,
        imgPicture_OnClick,
        lfn_End,
    };
};