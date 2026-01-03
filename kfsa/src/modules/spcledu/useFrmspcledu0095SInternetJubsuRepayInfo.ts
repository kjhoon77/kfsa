// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingRepayFee } from './Frmspcledu0095SInternetJubsuRepayInfoData';

export const useFrmspcledu0095SInternetJubsuRepayInfo = () => {
    const [ds_oTrainingRepayFee, setds_oTrainingRepayFee] = useState<Ids_oTrainingRepayFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_edProcReason, setRawVisible_edProcReason] = useState(false);
    const [rawVisible_lbProcReason, setRawVisible_lbProcReason] = useState(false);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_edBank, setRawVisible_edBank] = useState(true);
    const [rawVisible_edAccount, setRawVisible_edAccount] = useState(true);
    const [rawVisible_Static10, setRawVisible_Static10] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edPersonNm, setRawVisible_edPersonNm] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_lbAccount, setRawVisible_lbAccount] = useState(true);
    const [rawVisible_edReason, setRawVisible_edReason] = useState(true);
    const [rawVisible_lbReason, setRawVisible_lbReason] = useState(true);
    const [rawVisible_lbRepayDate, setRawVisible_lbRepayDate] = useState(true);
    const [rawVisible_meRepayDate, setRawVisible_meRepayDate] = useState(true);
    const [rawVisible_cbxTrainingAmount, setRawVisible_cbxTrainingAmount] = useState(true);
    const [rawVisible_edChangeReason, setRawVisible_edChangeReason] = useState(true);
    const [rawVisible_lbAttendance, setRawVisible_lbAttendance] = useState(true);
    const [rawVisible_ebAttendance, setRawVisible_ebAttendance] = useState(true);
    const [rawVisible_lbChangeReason, setRawVisible_lbChangeReason] = useState(true);
    const [rawVisible_medOtherAmount, setRawVisible_medOtherAmount] = useState(false);
    const [rawVisible_lbOtherAmount, setRawVisible_lbOtherAmount] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_edProcReason = rawVisible_edProcReason && rawVisible_Shape1;
    const setIsVisible_edProcReason = setRawVisible_edProcReason;
    const isVisible_lbProcReason = rawVisible_lbProcReason && rawVisible_Shape1;
    const setIsVisible_lbProcReason = setRawVisible_lbProcReason;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_Shape1;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_lbBank = rawVisible_lbBank && rawVisible_Shape1;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_edBank = rawVisible_edBank && rawVisible_Shape1;
    const setIsVisible_edBank = setRawVisible_edBank;
    const isVisible_edAccount = rawVisible_edAccount && rawVisible_Shape1;
    const setIsVisible_edAccount = setRawVisible_edAccount;
    const isVisible_Static10 = rawVisible_Static10;
    const setIsVisible_Static10 = setRawVisible_Static10;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm && rawVisible_Shape1;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edPersonNm = rawVisible_edPersonNm && rawVisible_Shape1;
    const setIsVisible_edPersonNm = setRawVisible_edPersonNm;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_Shape1;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_lbAccount = rawVisible_lbAccount && rawVisible_Shape1;
    const setIsVisible_lbAccount = setRawVisible_lbAccount;
    const isVisible_edReason = rawVisible_edReason && rawVisible_Shape1;
    const setIsVisible_edReason = setRawVisible_edReason;
    const isVisible_lbReason = rawVisible_lbReason && rawVisible_Shape1;
    const setIsVisible_lbReason = setRawVisible_lbReason;
    const isVisible_lbRepayDate = rawVisible_lbRepayDate && rawVisible_Shape1;
    const setIsVisible_lbRepayDate = setRawVisible_lbRepayDate;
    const isVisible_meRepayDate = rawVisible_meRepayDate && rawVisible_Shape1;
    const setIsVisible_meRepayDate = setRawVisible_meRepayDate;
    const isVisible_cbxTrainingAmount = rawVisible_cbxTrainingAmount && rawVisible_Shape1;
    const setIsVisible_cbxTrainingAmount = setRawVisible_cbxTrainingAmount;
    const isVisible_edChangeReason = rawVisible_edChangeReason && rawVisible_Shape1;
    const setIsVisible_edChangeReason = setRawVisible_edChangeReason;
    const isVisible_lbAttendance = rawVisible_lbAttendance && rawVisible_Shape1;
    const setIsVisible_lbAttendance = setRawVisible_lbAttendance;
    const isVisible_ebAttendance = rawVisible_ebAttendance && rawVisible_Shape1;
    const setIsVisible_ebAttendance = setRawVisible_ebAttendance;
    const isVisible_lbChangeReason = rawVisible_lbChangeReason && rawVisible_Shape1;
    const setIsVisible_lbChangeReason = setRawVisible_lbChangeReason;
    const isVisible_medOtherAmount = rawVisible_medOtherAmount && rawVisible_Shape1;
    const setIsVisible_medOtherAmount = setRawVisible_medOtherAmount;
    const isVisible_lbOtherAmount = rawVisible_lbOtherAmount && rawVisible_Shape1;
    const setIsVisible_lbOtherAmount = setRawVisible_lbOtherAmount;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingRepayFee([]);
            setIsLoading(false);
        }, 500);
    }, []);


    return {
        isLoading,
        ds_oTrainingRepayFee,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_edProcReason,
        setIsVisible_edProcReason,
        isVisible_lbProcReason,
        setIsVisible_lbProcReason,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_edBank,
        setIsVisible_edBank,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_Static10,
        setIsVisible_Static10,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_lbRepayDate,
        setIsVisible_lbRepayDate,
        isVisible_meRepayDate,
        setIsVisible_meRepayDate,
        isVisible_cbxTrainingAmount,
        setIsVisible_cbxTrainingAmount,
        isVisible_edChangeReason,
        setIsVisible_edChangeReason,
        isVisible_lbAttendance,
        setIsVisible_lbAttendance,
        isVisible_ebAttendance,
        setIsVisible_ebAttendance,
        isVisible_lbChangeReason,
        setIsVisible_lbChangeReason,
        isVisible_medOtherAmount,
        setIsVisible_medOtherAmount,
        isVisible_lbOtherAmount,
        setIsVisible_lbOtherAmount,
    };
};