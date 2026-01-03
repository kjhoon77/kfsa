// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBank, Ids_iLicenseReissueH, Ids_iPosPayAccount } from './Frmtraining0361PRepayData';

export const useFrmtraining0361PRepay = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_iLicenseReissueH, setds_iLicenseReissueH] = useState<Ids_iLicenseReissueH[]>([]);
    const [ds_iPosPayAccount, setds_iPosPayAccount] = useState<Ids_iPosPayAccount[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_edReason, setRawVisible_edReason] = useState(true);
    const [rawVisible_cbxBank, setRawVisible_cbxBank] = useState(true);
    const [rawVisible_lbReason, setRawVisible_lbReason] = useState(true);
    const [rawVisible_lbBank, setRawVisible_lbBank] = useState(true);
    const [rawVisible_lbRepay, setRawVisible_lbRepay] = useState(true);
    const [rawVisible_lbOwner, setRawVisible_lbOwner] = useState(true);
    const [rawVisible_edOwner, setRawVisible_edOwner] = useState(true);
    const [rawVisible_lbAccount, setRawVisible_lbAccount] = useState(true);
    const [rawVisible_edAccount, setRawVisible_edAccount] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_btnSave, setRawVisible_btnSave] = useState(true);
    const [rawVisible_imgImage, setRawVisible_imgImage] = useState(true);
    const [rawVisible_lbWorkFormTitle, setRawVisible_lbWorkFormTitle] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_edReason = rawVisible_edReason && rawVisible_shpGubunBox;
    const setIsVisible_edReason = setRawVisible_edReason;
    const isVisible_cbxBank = rawVisible_cbxBank && rawVisible_shpGubunBox;
    const setIsVisible_cbxBank = setRawVisible_cbxBank;
    const isVisible_lbReason = rawVisible_lbReason && rawVisible_shpGubunBox;
    const setIsVisible_lbReason = setRawVisible_lbReason;
    const isVisible_lbBank = rawVisible_lbBank && rawVisible_shpGubunBox;
    const setIsVisible_lbBank = setRawVisible_lbBank;
    const isVisible_lbRepay = rawVisible_lbRepay;
    const setIsVisible_lbRepay = setRawVisible_lbRepay;
    const isVisible_lbOwner = rawVisible_lbOwner && rawVisible_shpGubunBox;
    const setIsVisible_lbOwner = setRawVisible_lbOwner;
    const isVisible_edOwner = rawVisible_edOwner && rawVisible_shpGubunBox;
    const setIsVisible_edOwner = setRawVisible_edOwner;
    const isVisible_lbAccount = rawVisible_lbAccount && rawVisible_shpGubunBox;
    const setIsVisible_lbAccount = setRawVisible_lbAccount;
    const isVisible_edAccount = rawVisible_edAccount && rawVisible_shpGubunBox;
    const setIsVisible_edAccount = setRawVisible_edAccount;
    const isVisible_Static2 = rawVisible_Static2 && rawVisible_shpGubunBox;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_btnSave = rawVisible_btnSave && rawVisible_shpBtnBox;
    const setIsVisible_btnSave = setRawVisible_btnSave;
    const isVisible_imgImage = rawVisible_imgImage;
    const setIsVisible_imgImage = setRawVisible_imgImage;
    const isVisible_lbWorkFormTitle = rawVisible_lbWorkFormTitle;
    const setIsVisible_lbWorkFormTitle = setRawVisible_lbWorkFormTitle;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_shpGubunBox;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_shpGubunBox;
    const setIsVisible_medAmount = setRawVisible_medAmount;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBank([]);
            setds_iLicenseReissueH([]);
            setds_iPosPayAccount([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oBank,
        ds_iLicenseReissueH,
        ds_iPosPayAccount,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_cbxBank,
        setIsVisible_cbxBank,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_lbOwner,
        setIsVisible_lbOwner,
        isVisible_edOwner,
        setIsVisible_edOwner,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_medAmount,
        setIsVisible_medAmount,
        lfn_End,
        lfn_Save,
    };
};