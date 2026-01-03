// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './FrmCOM0100SWorkFormTitleData';

export const useFrmCOM0100SWorkFormTitle = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_lbWorkFormTitle, setIsVisible_lbWorkFormTitle] = useState(true);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);

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