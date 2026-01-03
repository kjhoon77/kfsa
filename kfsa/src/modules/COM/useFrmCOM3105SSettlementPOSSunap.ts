// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBank, Ids_oRecieptYn } from './FrmCOM3105SSettlementPOSSunapData';

export const useFrmCOM3105SSettlementPOSSunap = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oRecieptYn, setds_oRecieptYn] = useState<Ids_oRecieptYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_lbEndDate, setRawVisible_lbEndDate] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_cbxBank, setRawVisible_cbxBank] = useState(true);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_lb_WaveText, setRawVisible_lb_WaveText] = useState(true);
    const [rawVisible_lbMSG, setRawVisible_lbMSG] = useState(true);
    const isVisible_lbEndDate = rawVisible_lbEndDate;
    const setIsVisible_lbEndDate = setRawVisible_lbEndDate;
    const isVisible_calEndDate = rawVisible_calEndDate;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_lbBank = rawVisible_lbBank;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_cbxBank = rawVisible_cbxBank;
    const setIsVisible_cbxBank = setRawVisible_cbxBank;
    const isVisible_lbHpTel = rawVisible_lbHpTel;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_lb_WaveText = rawVisible_lb_WaveText;
    const setIsVisible_lb_WaveText = setRawVisible_lb_WaveText;
    const isVisible_lbMSG = rawVisible_lbMSG;
    const setIsVisible_lbMSG = setRawVisible_lbMSG;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBank([]);
            setds_oRecieptYn([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oBank,
        ds_oRecieptYn,
        isVisible_lbEndDate,
        setIsVisible_lbEndDate,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_cbxBank,
        setIsVisible_cbxBank,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_lb_WaveText,
        setIsVisible_lb_WaveText,
        isVisible_lbMSG,
        setIsVisible_lbMSG,
    };
};