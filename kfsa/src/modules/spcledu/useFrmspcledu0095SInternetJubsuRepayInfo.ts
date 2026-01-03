// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingRepayFee } from './Frmspcledu0095SInternetJubsuRepayInfoData';

export const useFrmspcledu0095SInternetJubsuRepayInfo = () => {
    const [ds_oTrainingRepayFee, setds_oTrainingRepayFee] = useState<Ids_oTrainingRepayFee[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_edProcReason, setIsVisible_edProcReason] = useState(false);
    const [isVisible_lbProcReason, setIsVisible_lbProcReason] = useState(false);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_lbBank, setIsVisible_lbBank] = useState(true);
    const [isVisible_edBank, setIsVisible_edBank] = useState(true);
    const [isVisible_edAccount, setIsVisible_edAccount] = useState(true);
    const [isVisible_Static10, setIsVisible_Static10] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_lbAccount, setIsVisible_lbAccount] = useState(true);
    const [isVisible_edReason, setIsVisible_edReason] = useState(true);
    const [isVisible_lbReason, setIsVisible_lbReason] = useState(true);
    const [isVisible_lbRepayDate, setIsVisible_lbRepayDate] = useState(true);
    const [isVisible_meRepayDate, setIsVisible_meRepayDate] = useState(true);
    const [isVisible_cbxTrainingAmount, setIsVisible_cbxTrainingAmount] = useState(true);
    const [isVisible_edChangeReason, setIsVisible_edChangeReason] = useState(true);
    const [isVisible_lbAttendance, setIsVisible_lbAttendance] = useState(true);
    const [isVisible_ebAttendance, setIsVisible_ebAttendance] = useState(true);
    const [isVisible_lbChangeReason, setIsVisible_lbChangeReason] = useState(true);
    const [isVisible_medOtherAmount, setIsVisible_medOtherAmount] = useState(false);
    const [isVisible_lbOtherAmount, setIsVisible_lbOtherAmount] = useState(true);

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