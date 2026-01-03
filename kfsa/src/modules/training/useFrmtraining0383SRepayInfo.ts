// @ts-nocheck
import { useState, useEffect } from 'react';
import type {  } from './Frmtraining0383SRepayInfoData';

export const useFrmtraining0383SRepayInfo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_edBank, setRawVisible_edBank] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbRepayInfo, setRawVisible_lbRepayInfo] = useState(true);
    const [rawVisible_lbAccount, setRawVisible_lbAccount] = useState(true);
    const [rawVisible_edAccount, setRawVisible_edAccount] = useState(true);
    const [rawVisible_lbRemark, setRawVisible_lbRemark] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_edRemark, setRawVisible_edRemark] = useState(true);
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_shpGubunBox4;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_lbBank = rawVisible_lbBank && rawVisible_shpGubunBox4;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_edBank = rawVisible_edBank && rawVisible_shpGubunBox4;
    const setIsVisible_edBank = setRawVisible_edBank;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_shpGubunBox4;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbRepayInfo = rawVisible_lbRepayInfo;
    const setIsVisible_lbRepayInfo = setRawVisible_lbRepayInfo;
    const isVisible_lbAccount = rawVisible_lbAccount && rawVisible_shpGubunBox4;
    const setIsVisible_lbAccount = setRawVisible_lbAccount;
    const isVisible_edAccount = rawVisible_edAccount && rawVisible_shpGubunBox4;
    const setIsVisible_edAccount = setRawVisible_edAccount;
    const isVisible_lbRemark = rawVisible_lbRemark && rawVisible_shpGubunBox4;
    const setIsVisible_lbRemark = setRawVisible_lbRemark;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_shpGubunBox4;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_shpGubunBox4;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_edRemark = rawVisible_edRemark && rawVisible_shpGubunBox4;
    const setIsVisible_edRemark = setRawVisible_edRemark;

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