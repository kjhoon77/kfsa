// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0100SWorkFormTitleData';

export const useFrmCOM0100SWorkFormTitle = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_imgImage,
        setIsVisible_imgImage,
    };
};