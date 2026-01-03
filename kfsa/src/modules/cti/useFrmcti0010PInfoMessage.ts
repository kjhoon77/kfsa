// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmcti0010PInfoMessageData';

export const useFrmcti0010PInfoMessage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_imgProgress, setRawVisible_imgProgress] = useState(true);
    const [rawVisible_lbInfomsg, setRawVisible_lbInfomsg] = useState(true);
    const isVisible_imgProgress = rawVisible_imgProgress;
    const setIsVisible_imgProgress = setRawVisible_imgProgress;
    const isVisible_lbInfomsg = rawVisible_lbInfomsg;
    const setIsVisible_lbInfomsg = setRawVisible_lbInfomsg;

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