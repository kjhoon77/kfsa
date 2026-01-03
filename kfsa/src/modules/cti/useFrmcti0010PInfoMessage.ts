// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmcti0010PInfoMessageData';

export const useFrmcti0010PInfoMessage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_imgProgress, setIsVisible_imgProgress] = useState(true);
    const [isVisible_lbInfomsg, setIsVisible_lbInfomsg] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_imgProgress,
        setIsVisible_imgProgress,
        isVisible_lbInfomsg,
        setIsVisible_lbInfomsg,
    };
};