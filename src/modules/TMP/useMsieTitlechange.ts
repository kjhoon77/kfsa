// @ts-nocheck
import { useState, useEffect } from 'react';
import type { ILgdacomIn, ILgdacomOut } from './MsieTitlechangeData';

export const useMsieTitlechange = () => {
    const [LgdacomIn, setLgdacomIn] = useState<ILgdacomIn[]>([]);
    const [LgdacomOut, setLgdacomOut] = useState<ILgdacomOut[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setLgdacomIn([]);
            setLgdacomOut([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const Button0_OnClick = () => {
        console.log('Button0_OnClick clicked');
    };

    return {
        isLoading,
        LgdacomIn,
        LgdacomOut,
        Button0_OnClick,
    };
};