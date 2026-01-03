// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0383SRepayInfoData';

export const useFrmtraining0383SRepayInfo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_lbBank, setIsVisible_lbBank] = useState(true);
    const [isVisible_edBank, setIsVisible_edBank] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbRepayInfo, setIsVisible_lbRepayInfo] = useState(true);
    const [isVisible_lbAccount, setIsVisible_lbAccount] = useState(true);
    const [isVisible_edAccount, setIsVisible_edAccount] = useState(true);
    const [isVisible_lbRemark, setIsVisible_lbRemark] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_edRemark, setIsVisible_edRemark] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_edBank,
        setIsVisible_edBank,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbRepayInfo,
        setIsVisible_lbRepayInfo,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_lbRemark,
        setIsVisible_lbRemark,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_edRemark,
        setIsVisible_edRemark,
    };
};