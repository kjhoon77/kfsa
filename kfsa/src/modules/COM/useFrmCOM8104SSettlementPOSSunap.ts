// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBank, Ids_oRecieptYn } from './FrmCOM8104SSettlementPOSSunapData';

export const useFrmCOM8104SSettlementPOSSunap = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_oRecieptYn, setds_oRecieptYn] = useState<Ids_oRecieptYn[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_lbRecieptYn, setRawVisible_lbRecieptYn] = useState(true);
    const [rawVisible_radRecieptYn, setRawVisible_radRecieptYn] = useState(true);
    const [rawVisible_lbEndDate, setRawVisible_lbEndDate] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_cbxBank, setRawVisible_cbxBank] = useState(true);
    const [rawVisible_divVirtual, setRawVisible_divVirtual] = useState(false);
    const [rawVisible_lbHpTel, setRawVisible_lbHpTel] = useState(true);
    const [rawVisible_edHpTel, setRawVisible_edHpTel] = useState(true);
    const [rawVisible_lb_WaveText, setRawVisible_lb_WaveText] = useState(true);
    const isVisible_lbRecieptYn = rawVisible_lbRecieptYn;
    const setIsVisible_lbRecieptYn = setRawVisible_lbRecieptYn;
    const isVisible_radRecieptYn = rawVisible_radRecieptYn;
    const setIsVisible_radRecieptYn = setRawVisible_radRecieptYn;
    const isVisible_lbEndDate = rawVisible_lbEndDate;
    const setIsVisible_lbEndDate = setRawVisible_lbEndDate;
    const isVisible_calEndDate = rawVisible_calEndDate;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_lbBank = rawVisible_lbBank;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_cbxBank = rawVisible_cbxBank;
    const setIsVisible_cbxBank = setRawVisible_cbxBank;
    const isVisible_divVirtual = rawVisible_divVirtual;
    const setIsVisible_divVirtual = setRawVisible_divVirtual;
    const isVisible_lbHpTel = rawVisible_lbHpTel;
    const setIsVisible_lbHpTel = setRawVisible_lbHpTel;
    const isVisible_edHpTel = rawVisible_edHpTel;
    const setIsVisible_edHpTel = setRawVisible_edHpTel;
    const isVisible_lb_WaveText = rawVisible_lb_WaveText;
    const setIsVisible_lb_WaveText = setRawVisible_lb_WaveText;

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
        isVisible_lbRecieptYn,
        setIsVisible_lbRecieptYn,
        isVisible_radRecieptYn,
        setIsVisible_radRecieptYn,
        isVisible_lbEndDate,
        setIsVisible_lbEndDate,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_cbxBank,
        setIsVisible_cbxBank,
        isVisible_divVirtual,
        setIsVisible_divVirtual,
        isVisible_lbHpTel,
        setIsVisible_lbHpTel,
        isVisible_edHpTel,
        setIsVisible_edHpTel,
        isVisible_lb_WaveText,
        setIsVisible_lb_WaveText,
    };
};