// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioEstimateList } from './FrmCOM1013PEstimateListData';

export const useFrmCOM1013PEstimateList = () => {
    const [ds_ioEstimateList, setds_ioEstimateList] = useState<Ids_ioEstimateList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_gdEstimateList, setIsVisible_gdEstimateList] = useState(true);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);
    const [isVisible_lbWorkFormTitle, setIsVisible_lbWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEstimateList([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioEstimateList,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_gdEstimateList,
        setIsVisible_gdEstimateList,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        lfn_End,
    };
};